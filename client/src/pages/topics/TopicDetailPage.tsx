import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import pixelContent from '@/lib/pixelContent.json';
import { ChevronRight, ChevronLeft, ArrowLeft, ArrowRight } from 'lucide-react';

export default function TopicDetailPage() {
  const [, setLocation] = useLocation();
  const { topicId } = useParams<{ topicId: string }>();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  // Find the topic and section
  let topic: any = null;
  let section: any = null;

  for (const sec of pixelContent.sections) {
    const foundTopic = sec.topics.find((t) => t.id === topicId);
    if (foundTopic) {
      topic = foundTopic;
      section = sec;
      break;
    }
  }

  if (!topic || !section) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {isRtl ? 'الموضوع غير موجود' : 'Topic not found'}
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

  const contentPoints = [
    { key: 'introduction', label: isRtl ? 'المقدمة' : 'Introduction' },
    { key: 'concept', label: isRtl ? 'المفهوم' : 'Concept' },
    { key: 'whyItMatters', label: isRtl ? 'لماذا مهم' : 'Why it matters' },
    { key: 'breakdown', label: isRtl ? 'التفصيل' : 'Breakdown' },
    { key: 'example', label: isRtl ? 'مثال' : 'Example' },
    { key: 'badVsGood', label: isRtl ? 'السيء vs الجيد' : 'Bad vs Good' },
    { key: 'commonMistakes', label: isRtl ? 'الأخطاء الشائعة' : 'Common Mistakes' },
    { key: 'practicalTips', label: isRtl ? 'نصائح عملية' : 'Practical Tips' },
    { key: 'miniActivity', label: isRtl ? 'نشاط صغير' : 'Mini Activity' },
    { key: 'summary', label: isRtl ? 'الملخص' : 'Summary' },
  ];

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
          <div className="flex items-center gap-2 text-muted-foreground mb-6 text-sm">
            <button
              onClick={() => setLocation('/')}
              className="hover:text-primary transition-colors"
            >
              {isRtl ? 'الرئيسية' : 'Home'}
            </button>
            <span>{isRtl ? '←' : '→'}</span>
            <button
              onClick={() => setLocation(`/sections/${section.id}`)}
              className="hover:text-primary transition-colors"
            >
              {language === 'ar' ? section.nameAr : section.nameEn}
            </button>
            <span>{isRtl ? '←' : '→'}</span>
            <span className="text-foreground font-semibold">
              {language === 'ar' ? topic.titleAr : topic.titleEn}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {language === 'ar' ? topic.titleAr : topic.titleEn}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {contentPoints.map((point, index) => (
              <motion.div
                key={point.key}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-primary/30 transition-colors"
              >
                {/* Point Number and Label */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: section.color }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {point.label}
                  </h3>
                </div>

                {/* Content */}
                <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed text-base md:text-lg">
                  {topic.content[point.key as keyof typeof topic.content]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setLocation(`/sections/${section.id}`)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all text-foreground hover:text-primary"
            >
              {isRtl ? (
                <>
                  <span>{isRtl ? 'العودة للقسم' : 'Back to Section'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4" />
                  <span>{isRtl ? 'العودة للقسم' : 'Back to Section'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              {isRtl ? (
                <>
                  <span>{isRtl ? 'الرئيسية' : 'Home'}</span>
                  <ChevronLeft className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <span>{isRtl ? 'الرئيسية' : 'Home'}</span>
                </>
              )}
            </button>
          </div>
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
