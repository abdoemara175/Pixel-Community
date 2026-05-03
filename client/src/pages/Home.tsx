import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, type Translations } from '@/lib/i18n';
import pixelContent from '@/lib/pixelContent.json';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Home() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const t = (key: keyof Translations) => getTranslation(language, key);
  const isRtl = language === 'ar';

  const sections = pixelContent.sections;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Sections Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {isRtl ? 'اختر مسارك التعليمي' : 'Choose Your Learning Path'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRtl 
                ? 'استكشف أربعة مسارات تعليمية شاملة في UX و UI والتكامل بينهما'
                : 'Explore four comprehensive learning paths in UX, UI, and their integration'}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {sections.map((section) => (
              <motion.div
                key={section.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                onClick={() => setLocation(`/sections/${section.id}`)}
                className="group cursor-pointer"
              >
                <div
                  className="h-full rounded-2xl p-8 transition-all duration-300 border-2 border-transparent hover:border-primary/50 hover:shadow-xl"
                  style={{
                    backgroundColor: `${section.color}10`,
                    borderColor: `${section.color}30`,
                  }}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${section.color}20` }}
                    >
                      {section.emoji}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {language === 'ar' ? section.nameAr : section.nameEn}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow">
                      {language === 'ar' ? section.descriptionAr : section.descriptionEn}
                    </p>

                    {/* Topics Count */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs md:text-sm font-semibold text-muted-foreground">
                        {section.topics.length} {isRtl ? 'موضوع' : 'Topics'}
                      </span>
                      <div className="text-primary group-hover:translate-x-2 transition-transform">
                        {isRtl ? (
                          <ChevronLeft className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </div>
                    </div>
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
            {t('copyright')} © 2024 {isRtl ? 'منصة PIXEL' : 'PIXEL Platform'}
          </p>
        </div>
      </footer>
    </div>
  );
}
