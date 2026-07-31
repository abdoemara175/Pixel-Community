import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Mail, ShieldCheck, Lock, User, Phone, KeyRound, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = 'sign_in' | 'sign_up' | 'forgot_password';

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const {
    signInWithPassword,
    signUpWithPassword,
    resetPasswordRequest,
    confirmPasswordReset,
    signInWithGoogle,
  } = useAuth();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const [mode, setMode] = useState<AuthMode>('sign_in');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  // Forgot Password step states
  const [resetStep, setResetStep] = useState<'request' | 'confirm'>('request');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen || typeof document === 'undefined') return null;

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
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

  // Handle Sign Up
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      toast.error(isRtl ? 'يرجى كتابة الاسم بالكامل' : 'Please enter your full name');
      return;
    }
    if (!email || !email.includes('@')) {
      toast.error(isRtl ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email');
      return;
    }
    if (!password || password.length < 6) {
      toast.error(isRtl ? 'كلمة المرور يجب أن لا تقل عن 6 أحرف' : 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    const success = await signUpWithPassword(email, password, fullName, phone);
    setLoading(false);

    if (success) {
      onClose();
    }
  };

  // Handle Forgot Password Step 1 (Request reset code to email or phone)
  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error(isRtl ? 'يرجى كتابة البريد الإلكتروني أو رقم الهاتف' : 'Please enter email or phone number');
      return;
    }

    setLoading(true);
    const success = await resetPasswordRequest(email);
    setLoading(false);

    if (success) {
      setResetStep('confirm');
    }
  };

  // Handle Forgot Password Step 2 (Confirm code & new password)
  const handleConfirmReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await confirmPasswordReset(email, resetCode, newPassword);
    setLoading(false);

    if (success) {
      setMode('sign_in');
      setResetStep('request');
      setResetCode('');
      setNewPassword('');
    }
  };

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-card/95 border border-border/80 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden my-auto"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon & Title Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto mb-3 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-foreground">
              {mode === 'forgot_password'
                ? isRtl ? 'استعادة كلمة السر' : 'Reset Password'
                : mode === 'sign_up'
                ? isRtl ? 'إنشاء حساب جديد' : 'Create Account'
                : isRtl ? 'تسجيل الدخول' : 'Sign In'}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">
              {mode === 'forgot_password'
                ? isRtl ? 'ادخل بريدك أو رقم هاتفك لتلقي رمز التأكيد وإعادة ضبط كلمة السر' : 'Enter your email or phone to receive a reset code'
                : mode === 'sign_up'
                ? isRtl ? 'انضم لمجتمع PIXEL وسجل بياناتك لبدء رحلة التعلم' : 'Join PIXEL community and start your learning journey'
                : isRtl ? 'أهلاً بك مجدداً! ادخل إلى حسابك التعليمي لمتابعة الدروس' : 'Welcome back! Access your learning account'}
            </p>
          </div>

          {/* Mode Switcher Tabs (Sign In / Sign Up) - Hidden during Forgot Password */}
          {mode !== 'forgot_password' && (
            <div className="flex bg-muted p-1 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setMode('sign_in')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  mode === 'sign_in' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'
                }`}
              >
                {isRtl ? 'تسجيل الدخول' : 'Sign In'}
              </button>
              <button
                type="button"
                onClick={() => setMode('sign_up')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  mode === 'sign_up' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'
                }`}
              >
                {isRtl ? 'حساب جديد' : 'Sign Up'}
              </button>
            </div>
          )}

          {/* 1. SIGN IN FORM */}
          {mode === 'sign_in' && (
            <form onSubmit={handleLogin} className="space-y-4">
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
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-foreground">
                    {isRtl ? 'كلمة المرور' : 'Password'}
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode('forgot_password')}
                    className="text-xs font-bold text-primary hover:underline cursor-pointer"
                  >
                    {isRtl ? 'نسيت كلمة السر؟' : 'Forgot Password?'}
                  </button>
                </div>
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
                  {isRtl ? 'أو الدخول بنقرة واحدة' : 'Or fast login with'}
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
                <span>{isRtl ? 'جوجل' : 'Google'}</span>
              </button>
            </form>
          )}

          {/* 2. SIGN UP FORM */}
          {mode === 'sign_up' && (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  {isRtl ? 'الاسم بالكامل' : 'Full Name'}
                </label>
                <div className="relative">
                  <User className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={isRtl ? 'مثال: أحمد محمد' : 'John Doe'}
                    required
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

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
                    placeholder="student@domain.com"
                    required
                    className="w-full ps-10 pe-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  {isRtl ? 'رقم الهاتف (اختياري / للتأكيد)' : 'Phone Number (Optional)'}
                </label>
                <div className="relative">
                  <Phone className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01012345678"
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
                    minLength={6}
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
                  <span>{isRtl ? 'جاري إنشاء الحساب...' : 'Creating account...'}</span>
                ) : (
                  <span>{isRtl ? 'إنشاء حساب جديد' : 'Create New Account'}</span>
                )}
              </button>
            </form>
          )}

          {/* 3. FORGOT PASSWORD FORM */}
          {mode === 'forgot_password' && (
            <div className="space-y-4">
              {resetStep === 'request' ? (
                <form onSubmit={handleRequestReset} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {isRtl ? 'البريد الإلكتروني أو رقم الهاتف' : 'Email Address or Phone Number'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={isRtl ? 'ادخل الإيميل أو رقم الهاتف' : 'Enter email or phone'}
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
                      <span>{isRtl ? 'جاري إرسال كود التأكيد...' : 'Sending reset code...'}</span>
                    ) : (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>{isRtl ? 'إرسال كود التأكيد وإعادة التعيين' : 'Send Reset Code'}</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleConfirmReset} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {isRtl ? 'رمز التأكيد (OTP)' : 'Verification Code'}
                    </label>
                    <input
                      type="text"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                      placeholder="123456"
                      maxLength={6}
                      required
                      className="w-full text-center tracking-widest text-lg font-mono py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {isRtl ? 'كلمة المرور الجديدة' : 'New Password'}
                    </label>
                    <div className="relative">
                      <Lock className="absolute start-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        minLength={6}
                        className="w-full ps-10 pe-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span>{isRtl ? 'جاري التحديث...' : 'Updating password...'}</span>
                    ) : (
                      <span>{isRtl ? 'تأكيد وتحديث كلمة المرور' : 'Confirm & Update Password'}</span>
                    )}
                  </button>
                </form>
              )}

              <button
                type="button"
                onClick={() => {
                  setMode('sign_in');
                  setResetStep('request');
                }}
                className="w-full text-xs font-bold text-muted-foreground hover:text-primary transition-colors text-center flex items-center justify-center gap-1.5 pt-2 cursor-pointer"
              >
                {isRtl ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                <span>{isRtl ? 'العودة لشاشة تسجيل الدخول' : 'Back to Sign In'}</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
