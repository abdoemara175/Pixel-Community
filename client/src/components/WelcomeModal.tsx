import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import AuthModal from '@/components/AuthModal';
import { Sparkles, UserCheck, ArrowRight, ArrowLeft, ShieldCheck, Compass, BookOpen } from 'lucide-react';

export default function WelcomeModal() {
  const { user, profile, loginAsDemo } = useAuth();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    // Show welcome overlay if user is not logged in AND hasn't chosen guest mode yet
    const guestState = localStorage.getItem('pixel_guest_mode');
    if (!user && !profile && !guestState) {
      setIsOpen(true);
    }
  }, [user, profile]);

  const handleContinueAsGuest = () => {
    localStorage.setItem('pixel_guest_mode', 'true');
    setIsOpen(false);
  };

  const handleOpenAuth = () => {
    setIsOpen(false);
    setIsAuthModalOpen(true);
  };

  if (!isOpen) {
    return <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />;
  }

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
          {/* Ambient Background Lights */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="relative w-full max-w-xl bg-card/95 border border-border/80 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden text-center"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Top Brand Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRtl ? 'منصة PIXEL التعليمية التفاعلية' : 'PIXEL Interactive Learning'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
              {isRtl ? (
                <>
                  مرحباً بك في <span className="text-primary">PIXEL</span> 👋
                </>
              ) : (
                <>
                  Welcome to <span className="text-primary">PIXEL</span> 👋
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground font-medium max-w-md mx-auto leading-relaxed mb-8">
              {isRtl
                ? 'وجهتك الأولى لتعلم وتطبيق تصميم تجربة المستخدم (UX) والواجهات (UI) بأسلوب تفاعلي وسلس.'
                : 'Your interactive platform to master UX/UI design with practical slides & hands-on tasks.'}
            </p>

            {/* Main Choice Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Option 1: Sign In / Register */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpenAuth}
                className="p-5 rounded-2xl bg-primary text-primary-foreground font-bold text-start flex flex-col justify-between shadow-xl shadow-primary/25 border border-primary/40 hover:bg-primary/90 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white mb-1 flex items-center justify-between">
                    <span>{isRtl ? 'تسجيل الدخول / حساب' : 'Sign In / Register'}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    )}
                  </h3>
                  <p className="text-xs text-white/80 font-normal leading-normal">
                    {isRtl ? 'لحفظ تقدمك، رفع الواجبات، والحصول على التقييمات' : 'Save progress, submit tasks & get feedback'}
                  </p>
                </div>
              </motion.button>

              {/* Option 2: Continue as Guest */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleContinueAsGuest}
                className="p-5 rounded-2xl bg-background border-2 border-border/80 hover:border-primary/50 text-foreground font-bold text-start flex flex-col justify-between shadow-md hover:bg-muted/40 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-foreground mb-1 flex items-center justify-between group-hover:text-primary transition-colors">
                    <span>{isRtl ? 'التصفح كـ ضيف' : 'Continue as Guest'}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground font-normal leading-normal">
                    {isRtl ? 'تصفح كل المسارات والدروس والسلايدات فوراً بدون حساب' : 'Explore all tracks, topics & slides immediately'}
                  </p>
                </div>
              </motion.button>
            </div>

            {/* Quick Demo Options */}
            <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-bold">{isRtl ? 'تجربة سريعة:' : 'Quick Demo:'}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    loginAsDemo('student');
                    setIsOpen(false);
                  }}
                  className="text-blue-600 dark:text-blue-400 font-extrabold hover:underline"
                >
                  {isRtl ? 'طالب تجريبي' : 'Demo Student'}
                </button>
                <span>•</span>
                <button
                  onClick={() => {
                    loginAsDemo('admin');
                    setIsOpen(false);
                  }}
                  className="text-purple-600 dark:text-purple-400 font-extrabold hover:underline"
                >
                  {isRtl ? 'أدمن تجريبي' : 'Demo Admin'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
