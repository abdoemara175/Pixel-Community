import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { CampLeaderboard } from '@/components/CampLeaderboard';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, type Translations } from '@/lib/i18n';
import { educationalContent as pixelContent } from '@/lib/educationalContent';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

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
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Subtle Background Glow Spheres */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-extrabold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>{isRtl ? 'المسارات التعليمية' : 'Learning Paths'}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              {isRtl ? 'اختر مسارك التعليمي' : 'Choose Your Learning Path'}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              {isRtl 
                ? 'استكشف أربعة مسارات تعليمية تفاعلية شاملة في UX و UI والتكامل بينهما'
                : 'Explore four interactive, comprehensive learning paths in UX, UI, and their integration'}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {sections.map((section) => (
              <motion.div
                key={section.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setLocation(`/sections/${section.id}`)}
                className="group cursor-pointer relative"
              >
                {/* Ambient Glowing Backlight Effect on Hover */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-80 transition-all duration-500 blur-xl -z-10"
                  style={{ backgroundColor: section.color }}
                />

                <div
                  className="h-full rounded-3xl p-7 md:p-8 transition-all duration-500 border-2 bg-card/90 backdrop-blur-xl flex flex-col justify-between shadow-lg group-hover:shadow-2xl relative overflow-hidden"
                  style={{
                    borderColor: `${section.color}40`,
                  }}
                >
                  {/* Top Track Header: Icon & Topic Count Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-transform group-hover:scale-110 duration-300 border border-white/10"
                        style={{
                          backgroundColor: `${section.color}25`,
                          boxShadow: `0 8px 24px -6px ${section.color}40`,
                        }}
                      >
                        {section.emoji}
                      </div>

                      <span
                        className="px-3.5 py-1 rounded-full text-xs font-black tracking-wide border shadow-sm"
                        style={{
                          backgroundColor: `${section.color}15`,
                          borderColor: `${section.color}40`,
                          color: section.color,
                        }}
                      >
                        {section.topics.length} {isRtl ? 'موضوع' : 'Topics'}
                      </span>
                    </div>

                    {/* Track Title */}
                    <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                      {language === 'ar' ? section.nameAr : section.nameEn}
                    </h3>

                    {/* Track Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                      {language === 'ar' ? section.descriptionAr : section.descriptionEn}
                    </p>
                  </div>

                  {/* Bottom Footer: Topic Progress Line & Action Arrow */}
                  <div className="pt-5 border-t border-border/60 flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: section.color }} />
                      {isRtl ? 'استكشف المسار' : 'Explore Track'}
                    </span>

                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${section.color}25`,
                        color: section.color,
                      }}
                    >
                      {isRtl ? (
                        <ChevronLeft className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Camp Top Performers Leaderboard Section */}
      <section className="py-12 bg-secondary/10 border-t border-border/40">
        <div className="container">
          <CampLeaderboard />
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
