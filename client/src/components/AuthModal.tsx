import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Mail, ShieldCheck, KeyRound, Lock } from 'lucide-react';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { signInWithPassword, signInWithEmailOtp, verifyOtp, signInWithGoogle } = useAuth();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpToken, setOtpToken] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error(isRtl ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email');
      return;
    }
    if (!password) {
      toast.error(isRtl ? 'يرجى إدخال كلمة المرور' : 'Please enter your password');
      return;
    }

    setLoading(true);
    const success = await signInWithPassword(email, password);
    setLoading(false);

    if (success) {
      onClose();
    }
  };

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
            className="absolute top-5 end-5 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-foreground">
              {isRtl ? 'تسجيل الدخول / حساب جديد' : 'Sign In / Account'}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
              {isRtl
                ? 'ادخل إلى حسابك التعليمي لمتابعة الدروس والتطبيقات والتقييمات'
                : 'Access your learning account and track progress'}
            </p>
          </div>

          {/* Login Method Toggle */}
          <div className="flex bg-muted p-1 rounded-xl mb-5">
            <button
              type="button"
              onClick={() => setLoginMethod('password')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                loginMethod === 'password' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'
              }`}
            >
              {isRtl ? 'كلمة المرور' : 'Password'}
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod('otp')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                loginMethod === 'otp' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'
              }`}
            >
              {isRtl ? 'رمز OTP لليميل' : 'Email OTP'}
            </button>
          </div>

          {loginMethod === 'password' ? (
            /* Password Login Form */
            <form onSubmit={handlePasswordLogin} className="space-y-4">
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
                    placeholder="name@domain.com"
                    required
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  {isRtl ? 'كلمة المرور' : 'Password'}
                </label>
                <div className="relative">
                  <Lock className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                {loading ? (
                  <span>{isRtl ? 'جاري التحقق...' : 'Signing in...'}</span>
                ) : (
                  <span>{isRtl ? 'تسجيل الدخول' : 'Sign In'}</span>
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
            </form>
          ) : step === 'email' ? (
            /* OTP Form Step 1 */
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
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
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
            </form>
          ) : (
            /* OTP Form Step 2 */
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
