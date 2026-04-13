/**
 * Home Page - PIXEL UX Learning Platform
 * 
 * Main landing page with:
 * - Hero section introducing the platform
 * - About/Vision section
 * - Four learning tracks as clickable cards
 * - Footer
 */

import Header from '@/components/Header';
import { getTracks } from '@/lib/content';
import { ArrowRight, Zap, Users, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

export default function Home() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const t = (key: keyof ReturnType<typeof getTranslation>) => getTranslation(language, key as any);
  const tracks = getTracks(language);

  const handleTrackClick = (trackId: string) => {
    setLocation(`/track/${trackId}`);
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <Header />

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="inline-block"
            >
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto overflow-hidden shadow-xl border-2 border-primary/10">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl">
                  P
                </div>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-foreground tracking-tight"
            >
              PIXEL
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              {t('heroSubtitle')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {t('heroDescription')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTrackClick('ux-track')}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 gap-2"
              >
                {t('startLearning')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.05)" }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg transition-all"
              >
                {t('learnMore')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* About / Vision Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              {t('whyPixel')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Feature Cards */}
              {[
                { icon: BookOpen, title: t('learnFromZero'), desc: t('learnFromZeroDesc'), color: 'primary' },
                { icon: Zap, title: t('practicalUnderstanding'), desc: t('practicalUnderstandingDesc'), color: 'secondary' },
                { icon: Award, title: t('organizedLearning'), desc: t('organizedLearningDesc'), color: 'blue-500' },
                { icon: Users, title: t('communitySupport'), desc: t('communitySupportDesc'), color: 'purple-500' }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  className="topic-card p-8 space-y-4 group"
                >
                  <div className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <p className="text-xl font-medium">
                {t('quote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section id="tracks" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            {t('learningJourney')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleTrackClick(track.id)}
                className="topic-card p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform"
                  style={{ backgroundColor: `${track.color}20` }}
                >
                  {track.emoji}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{track.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
                <div className="text-xs text-muted-foreground font-semibold">
                  {track.topics.length} {t('topics')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">PIXEL</h3>
              <p className="text-sm text-muted-foreground">
                {t('footerDesc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('tracks')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tracks.map((track) => (
                  <li key={track.id}>
                    <button 
                      onClick={() => handleTrackClick(track.id)}
                      className="hover:text-primary transition-colors"
                    >
                      {track.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('community')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t('github')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('feedback')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('about')}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
