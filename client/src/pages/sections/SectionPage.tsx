import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import pixelContent from '@/lib/pixelContent.json';
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight } from 'lucide-react';

export default function SectionPage() {
  const [, setLocation] = useLocation();
  const { sectionId } = useParams<{ sectionId: string }>();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const section = pixelContent.sections.find((s) => s.id === sectionId);

  if (!section) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {isRtl ? 'القسم غير موجود' : 'Section not found'}
          </h1>
          <button
            onClick={() => setLocation('/')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isRtl ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb & Header */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-b border-border">
        <div className="container">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            {isRtl ? (
              <>
                <span>{isRtl ? 'الرئيسية' : 'Home'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>{isRtl ? 'الرئيسية' : 'Home'}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl"
              style={{ backgroundColor: `${section.color}20` }}
            >
              {section.emoji}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {language === 'ar' ? section.nameAr : section.nameEn}
              </h1>
              <p className="text-muted-foreground mt-2">
                {language === 'ar' ? section.descriptionAr : section.descriptionEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {section.topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                onClick={() => setLocation(`/topics/${topic.id}`)}
                className="group cursor-pointer"
              >
                <div
                  className="h-full rounded-2xl p-6 md:p-8 transition-all duration-300 border-2 border-border hover:border-primary/50 hover:shadow-lg bg-card hover:bg-card/80"
                >
                  {/* Topic Number */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white mb-4"
                    style={{ backgroundColor: section.color }}
                  >
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {language === 'ar' ? topic.titleAr : topic.titleEn}
                  </h3>

                  {/* Preview */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {topic.content.concept}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-xs font-semibold">
                      {isRtl ? 'اقرأ المزيد' : 'Read More'}
                    </span>
                    {isRtl ? (
                      <ChevronLeft className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-muted/30 border-t border-border">
        <div className="container text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            © 2024 {isRtl ? 'منصة PIXEL' : 'PIXEL Platform'}
          </p>
        </div>
      </footer>
    </div>
  );
}
