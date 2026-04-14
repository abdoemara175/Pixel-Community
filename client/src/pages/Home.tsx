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
import { ArrowRight, Zap, Users, BookOpen, Award, Sparkles, Github, Mail, Linkedin, Twitter } from 'lucide-react';
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

      {/* Hero Section - Redesigned for better impact */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.08)_0%,transparent_70%)]" />
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - New Element */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('platformSubtitle')}</span>
            </motion.div>

            {/* Main Title - Replaced the big 'P' box with a cleaner typography approach */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
            >
              PIXEL
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold text-foreground mb-6"
            >
              {t('heroSubtitle')}
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {t('heroDescription')}
            </motion.p>

            {/* Actions - Reordered and styled */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTrackClick('ux-track')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all gap-2 text-lg"
              >
                {t('startLearning')}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--primary), 0.05)" }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border-2 border-primary/20 text-foreground font-semibold rounded-xl hover:border-primary/40 transition-all text-lg"
              >
                {t('learnMore')}
              </motion.a>
            </motion.div>
          </div>
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
                id={track.id}
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

      {/* Footer - Professional Design */}
      <footer className="bg-gradient-to-b from-background to-foreground/3 border-t border-border/50 py-16 md:py-20 mt-20">
        <div className="container">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-black text-foreground">PIXEL</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {t('footerDesc')}
              </p>
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Learning Tracks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-foreground text-lg">{t('tracks')}</h4>
              <ul className="space-y-3">
                {tracks.map((track) => (
                  <li key={track.id}>
                    <motion.button
                      whileHover={{ x: 4 }}
                      onClick={() => handleTrackClick(track.id)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                      {track.title}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Community & Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-foreground text-lg">{t('community')}</h4>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    {t('github')}
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    {t('feedback')}
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    {t('about')}
                  </motion.a>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-foreground text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#home"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    Home
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    About
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#tracks"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    Tracks
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 my-8" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>{t('copyright')}</p>
            <div className="flex gap-6">
              <motion.a
                whileHover={{ textDecoration: 'underline' }}
                href="#"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ textDecoration: 'underline' }}
                href="#"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
