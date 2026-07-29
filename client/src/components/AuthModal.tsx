import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Mail, ShieldCheck, UserCheck, KeyRound, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signInWithEmailOtp, verifyOtp, signInWithGoogle, loginAsDemo } = useAuth();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error(isRtl ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email');
      return;
    }

    setLoading(true);
    const success = await signInWithEmailOtp(email);
    setLoading(false);

    if (success) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpToken || otpToken.length < 4) {
      toast.error(isRtl ? 'ادخل رمز OTP المكون من الأرقام' : 'Enter valid OTP code');
      return;
    }

    setLoading(true);
    const success = await verifyOtp(email, otpToken);
    setLoading(false);

    if (success) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-card/95 border border-border/80 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-foreground">
              {isRtl ? 'تسجيل الدخول / إنشاء حساب' : 'Sign In / Register'}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
              {isRtl
                ? 'ادخل إلى لوحة التحكم ومتابعة الدروس عبر الإيميل و OTP أو Google'
                : 'Access your student dashboard and track progress'}
            </p>
          </div>

          {step === 'email' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <div className="relative">
                  <Mail className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@example.com"
                    required
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                {loading ? (
                  <span>{isRtl ? 'جاري إرسال OTP...' : 'Sending OTP...'}</span>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>{isRtl ? 'إرسال رمز التفعيل (OTP)' : 'Send Verification OTP'}</span>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <span className="relative px-3 bg-card text-xs font-semibold text-muted-foreground">
                  {isRtl ? 'أو عبر Google' : 'Or via Google'}
                </span>
              </div>

              {/* Google Button */}
              <button
                type="button"
                onClick={signInWithGoogle}
                className="w-full py-3 border border-border bg-background hover:bg-muted text-foreground font-bold rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.3 7.31 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.17 0 9.99 0 12s.46 3.83 1.26 5.42l4.02-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google OAuth</span>
              </button>

              {/* Quick Demo Mode Options */}
              <div className="pt-4 border-t border-border/80">
                <p className="text-[11px] font-bold text-center text-muted-foreground mb-2 flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {isRtl ? 'تجربة سريعة بدون إرسال إيميل (Demo Login)' : 'Quick Demo Login'}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      loginAsDemo('student');
                      onClose();
                    }}
                    className="py-2.5 px-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'دخول كطالب' : 'Demo Student'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      loginAsDemo('admin');
                      onClose();
                    }}
                    className="py-2.5 px-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-600 dark:text-purple-400 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'دخول كأدمن' : 'Demo Admin'}</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  {isRtl ? 'ادخل رمز OTP المرسل لـ' : 'Enter OTP sent to'} {email}
                </label>
                <input
                  type="text"
                  value={otpToken}
                  onChange={(e) => setOtpToken(e.target.value)}
                  placeholder="123456"
                  maxLength={6}
                  required
                  className="w-full text-center tracking-widest text-lg font-mono py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all cursor-pointer"
              >
                {loading ? (
                  <span>{isRtl ? 'جاري التحقق...' : 'Verifying...'}</span>
                ) : (
                  <span>{isRtl ? 'تأكيد الرمز والتسجيل' : 'Verify & Sign In'}</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep('email')}
                className="w-full text-xs font-bold text-muted-foreground hover:text-primary transition-colors text-center block pt-2"
              >
                {isRtl ? 'تغيير البريد الإلكتروني' : 'Change email address'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
