import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Users, BookOpen, Zap, Palette, User, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme, ACCENT_THEMES, type AccentColor } from "@/contexts/ThemeContext";
import { getTranslation, type Translations } from "@/lib/i18n";
import { toast } from "sonner";

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
  const { accent, setAccent } = useTheme();
  const t = (key: keyof Translations) => getTranslation(language, key);
  const isRtl = language === 'ar';

  const swatches: { id: AccentColor; gradient: string }[] = [
    { id: 'blue', gradient: 'from-[#4F46E5] to-[#6366F1]' },
    { id: 'purple', gradient: 'from-[#8B5CF6] to-[#A855F7]' },
    { id: 'pink', gradient: 'from-[#EC4899] to-[#F43F5E]' },
    { id: 'amber', gradient: 'from-[#F59E0B] to-[#EAB308]' },
  ];

  const handleSwatchClick = (swatchId: AccentColor) => {
    setAccent(swatchId);
    const themeInfo = ACCENT_THEMES[swatchId];
    toast.success(
      isRtl
        ? `تم تغيير اللون الرئيسي للموقع إلى ${themeInfo.nameAr}`
        : `Switched primary theme to ${themeInfo.nameEn}`,
      {
        description: isRtl ? 'تفاعلت العناصر والأزرار مع اللون الجديد' : 'All accent elements updated',
      }
    );
  };

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
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 transition-colors duration-300">
                <span className="text-primary-foreground font-bold text-lg">P</span>
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
                    <span className="text-primary transition-colors duration-300">
                      صمم.
                    </span>{" "}
                    أنشئ.
                  </>
                ) : (
                  <>
                    Learn.{" "}
                    <span className="text-primary transition-colors duration-300">
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-6 md:py-7 text-base md:text-lg font-bold rounded-xl transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 cursor-pointer"
              >
                {t('getStarted')}
                {isRtl ? <ArrowLeft className="ms-2 w-5 h-5" /> : <ArrowRight className="ms-2 w-5 h-5" />}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation('/tracks')}
                className="border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 px-6 md:px-8 py-6 md:py-7 text-base md:text-lg font-bold rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                {t('exploreTracks')}
              </Button>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 md:pt-8 border-t border-slate-200 dark:border-slate-800/80"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual Section (2 3D Floating Cards matching Design Reference) */}
          <div className="relative h-[480px] sm:h-[540px] w-full max-w-[460px] mx-auto flex items-center justify-center">
            {/* Top Offset Card: UI Design */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backfaceVisibility: "hidden", WebkitFontSmoothing: "antialiased" }}
              className="absolute top-0 end-0 w-[300px] sm:w-[330px] bg-white/95 dark:bg-[#0b1328]/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl shadow-slate-900/10 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-slate-200/90 dark:border-slate-700/80 ring-1 ring-slate-900/5 dark:ring-white/10 z-20 hover:scale-[1.02] transition-all duration-300 transform-gpu"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide font-sans">
                    {isRtl ? 'تصميم الواجهات' : 'UI Design'}
                  </h3>
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-sm transition-colors duration-300">
                    <Palette className="w-5 h-5 text-primary transition-colors duration-300" />
                  </div>
                </div>

                {/* Color Palette Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                      {isRtl ? 'لوحة الألوان التفاعلية' : 'COLOR PALETTE (INTERACTIVE)'}
                    </p>
                    <span className="text-[10px] font-semibold text-primary animate-pulse transition-colors duration-300">
                      {isRtl ? 'انقر لتغيير اللون' : 'Click to apply'}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2.5 pt-1">
                    {swatches.map((swatch) => {
                      const isSelected = accent === swatch.id;
                      return (
                        <motion.button
                          key={swatch.id}
                          type="button"
                          whileHover={{ scale: 1.12, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleSwatchClick(swatch.id)}
                          className={`relative h-10 rounded-xl bg-gradient-to-tr ${swatch.gradient} shadow-md transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'ring-2 ring-slate-900 dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-[#0b1328] scale-105 shadow-xl'
                              : 'hover:shadow-lg opacity-90 hover:opacity-100'
                          }`}
                          title={isRtl ? ACCENT_THEMES[swatch.id].nameAr : ACCENT_THEMES[swatch.id].nameEn}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Typography Section */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                    {isRtl ? 'الخطوط والطباعة' : 'TYPOGRAPHY'}
                  </p>
                  <div>
                    <p className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {isRtl ? 'العنوان الرئيسي' : 'Large Heading'}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                      {isRtl ? 'نص توضيحي عادي' : 'Regular text'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Offset Card: User Experience */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              style={{ backfaceVisibility: "hidden", WebkitFontSmoothing: "antialiased" }}
              className="absolute bottom-0 start-0 w-[300px] sm:w-[330px] bg-white/95 dark:bg-[#0b1328]/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl shadow-slate-900/10 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-slate-200/90 dark:border-slate-700/80 ring-1 ring-slate-900/5 dark:ring-white/10 z-10 hover:scale-[1.02] transition-all duration-300 transform-gpu"
            >
              <div className="space-y-5">
        {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide font-sans">
                    {isRtl ? 'تجربة المستخدم' : 'User Experience'}
                  </h3>
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-sm transition-colors duration-300">
                    <User className="w-5 h-5 text-primary transition-colors duration-300" />
                  </div>
                </div>

                {/* User Persona Section */}
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                    {isRtl ? 'شخصية المستخدم' : 'USER PERSONA'}
                  </p>
                  <div className="flex items-center gap-3 pt-0.5">
                    <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md transition-colors duration-300">
                      A
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {isRtl ? 'أحمد' : 'Ahmed'}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        {isRtl ? 'مصمم جرافيك' : 'Graphic Designer'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* User Flow Section */}
                <div className="space-y-2 pt-1">
                  <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                    {isRtl ? 'مسار المستخدم' : 'USER FLOW'}
                  </p>
                  <div className="flex items-center justify-between relative px-2 pt-1">
                    <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-primary/20 -z-0 transition-colors duration-300" />
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className="w-7 h-7 rounded-full bg-primary text-primary-foreground font-extrabold text-xs flex items-center justify-center shadow-md relative z-10 transition-colors duration-300"
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
