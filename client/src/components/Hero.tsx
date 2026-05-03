import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Users, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, type Translations } from "@/lib/i18n";

/**
 * Design Philosophy: Dynamic Modern Educational Platform
 * - Responsive to system/user theme (Light/Dark)
 * - Subtle gradients and glassmorphism in both modes
 * - High contrast accents for readability
 * - Smooth transitions between themes
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {

  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const t = (key: keyof Translations) => getTranslation(language, key);
  const isRtl = language === 'ar';

  // Memoize stats to prevent re-renders on hover
  const stats = [
    { icon: Users, label: t('studentsCount') },
    { icon: BookOpen, label: t('topicsCount') },
    { icon: Zap, label: t('practicalContent') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pt-20 pb-20 md:pt-24 md:pb-24">
      {/* Background decorative elements - Responsive to Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] dark:opacity-[0.03] pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 md:space-y-8 text-start"
          >
            {/* Logo/Brand */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-sm font-bold text-slate-600 dark:text-slate-400 tracking-[0.2em] uppercase">
                Pixel Community
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                {isRtl ? (
                  <>
                    تعلم.{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                      صمم.
                    </span>{" "}
                    أنشئ.
                  </>
                ) : (
                  <>
                    Learn.{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                      Design.
                    </span>{" "}
                    Create.
                  </>
                )}
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-md font-medium"
            >
              {t('heroSubtitle')}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              {t('heroDescription')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-2 md:pt-4">
              <Button
                size="lg"
                onClick={() => setLocation('/tracks')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 md:px-8 py-6 md:py-7 text-base md:text-lg font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 cursor-pointer"
              >
                {t('getStarted')}
                {isRtl ? <ArrowLeft className="ms-2 w-5 h-5" /> : <ArrowRight className="ms-2 w-5 h-5" />}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 px-6 md:px-8 py-6 md:py-7 text-base md:text-lg font-bold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                {t('exploreTracks')}
              </Button>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 md:gap-8 pt-8 md:pt-10 border-t border-slate-200 dark:border-slate-800/50"
            >
              {stats.map((stat, idx) => {
                // Extract value from label (e.g., "55 طالب" -> "55", "45 موضوع" -> "45", "80% محتوى عملي" -> "80%")
                const parts = stat.label.split(' ');
                const value = parts[0];
                const labelText = parts.slice(1).join(' ');

                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 md:gap-4 cursor-pointer group"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-slate-100 dark:bg-[#f8fafc] rounded-md flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105 flex-shrink-0">
                      <stat.icon className="w-5 h-5 text-slate-700 dark:text-slate-800" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{value}</p>
                      <p className="text-[10px] md:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">{labelText}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Visual - Mock UI Screens with Theme Aesthetics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isRtl ? -40 : 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect behind cards */}
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />

              {/* Large Card - Dashboard */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 inset-x-0 w-80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-6 z-20"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('yourProgress')}</h3>
                    <div className="w-8 h-8 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">📊</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-100 dark:bg-slate-800 h-2 rounded-full w-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t('uiFundamentals')}</p>
                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400">75%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-800/50 h-12 rounded-xl border border-slate-100 dark:border-slate-700/30" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Medium Card - Course Card */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-36 inset-x-0 w-72 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-5 z-10"
              >
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-600/40 dark:to-indigo-600/40 rounded-xl border border-blue-200 dark:border-blue-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-1/3 rounded-full" />
                    </div>
                  </div>
                  <div className="text-start">
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{t('designSystems')}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('masterFundamentals')}</p>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800" />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">+5</p>
                  </div>
                </div>
              </motion.div>

              {/* Small Card - Stats Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 inset-x-0 w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-4 z-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{t('achievements')}</p>
                    <span className="text-lg">🏆</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-800/50 h-10 rounded-lg border border-slate-100 dark:border-slate-700/30" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
