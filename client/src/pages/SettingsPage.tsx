import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import {
  User,
  Shield,
  Sliders,
  Save,
  KeyRound,
  CheckCircle2,
  Globe,
  Moon,
  Sun,
  Target,
  GraduationCap
} from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { profile, isDemoMode, updateProfileRole } = useAuth();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isRtl = language === 'ar';

  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'preferences'>('profile');

  // Form states
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [teamTitle, setTeamTitle] = useState(profile?.team_title || '');
  const [phone, setPhone] = useState('010' + Math.floor(10000000 + Math.random() * 90000000));
  const [bio, setBio] = useState(isRtl ? 'مصمم تجربة وواجهة مستخدم شغوف بالتعلم والتطبيق العملي' : 'Passionate UI/UX designer learning and building real projects');
  
  // Security states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Preferences
  const [dailyGoal, setDailyGoal] = useState('2');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile?.id) {
      updateProfileRole(profile.id, profile.role, teamTitle || profile.team_title);
    }
    toast.success(isRtl ? 'تم حفظ التغييرات والملف الشخصي بنجاح!' : 'Profile settings saved successfully!');
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      toast.error(isRtl ? 'كلمة المرور الجديدة يجب أن لا تقل عن 6 أحرف' : 'New password must be at least 6 characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
      return;
    }

    toast.success(isRtl ? 'تم تغيير وتحديث كلمة المرور بنجاح!' : 'Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-24 text-center">
          <p className="text-muted-foreground">{isRtl ? 'يرجى تسجيل الدخول لعرض الإعدادات' : 'Please sign in to view settings'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Banner */}
      <section className="pt-20 md:pt-24 pb-8 bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-card/90 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/30 shrink-0">
                {fullName.charAt(0).toUpperCase() || 'P'}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/15 text-primary border border-primary/30 rounded-full text-xs font-extrabold flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {profile.role.toUpperCase()}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                  {isRtl ? 'إعدادات الحساب والملف الشخصي' : 'Account & Profile Settings'}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {isRtl ? 'إدارة بياناتك الشخصية، الأمان، وتفضيلات التعلم' : 'Manage your personal profile, security, and learning preferences'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Settings Tabs & Form */}
      <section className="py-8 md:py-12">
        <div className="container max-w-4xl space-y-8">
          {/* Tabs Selector */}
          <div className="flex bg-muted p-1.5 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-3 text-xs md:text-sm font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'profile' ? 'bg-card text-primary shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{isRtl ? 'الملف الشخصي' : 'Personal Profile'}</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`flex-1 py-3 text-xs md:text-sm font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'security' ? 'bg-card text-primary shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>{isRtl ? 'الأمان وكلمة السر' : 'Security & Password'}</span>
            </button>

            <button
              onClick={() => setActiveTab('preferences')}
              className={`flex-1 py-3 text-xs md:text-sm font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'preferences' ? 'bg-card text-primary shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>{isRtl ? 'تفضيلات النظام' : 'Preferences'}</span>
            </button>
          </div>

          {/* TAB 1: PERSONAL PROFILE */}
          {activeTab === 'profile' && (
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSaveProfile}
              className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-6"
            >
              <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <span>{isRtl ? 'تحديث البيانات الشخصية' : 'Update Personal Details'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {isRtl ? 'الاسم بالكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {isRtl ? 'البريد الإلكتروني (غير قابل للتعديل)' : 'Email Address (Read Only)'}
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/60 text-muted-foreground text-sm font-medium outline-none cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {isRtl ? 'المسمى الوظيفي / تخصص الطالب' : 'Title / Specialty'}
                  </label>
                  <input
                    type="text"
                    value={teamTitle}
                    onChange={(e) => setTeamTitle(e.target.value)}
                    placeholder={isRtl ? 'مثال: UI/UX Junior Designer' : 'e.g. UI/UX Student'}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {isRtl ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {isRtl ? 'نبذة مختصرة (Bio)' : 'Short Bio'}
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>{isRtl ? 'حفظ التعديلات' : 'Save Changes'}</span>
              </button>
            </motion.form>
          )}

          {/* TAB 2: SECURITY & PASSWORD */}
          {activeTab === 'security' && (
            <motion.form
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleUpdatePassword}
              className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-6"
            >
              <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-primary" />
                <span>{isRtl ? 'تغيير كلمة المرور' : 'Change Password'}</span>
              </h2>

              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {isRtl ? 'كلمة المرور الحالية' : 'Current Password'}
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {isRtl ? 'كلمة المرور الجديدة' : 'New Password'}
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {isRtl ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isRtl ? 'تحديث كلمة المرور' : 'Update Password'}</span>
              </button>
            </motion.form>
          )}

          {/* TAB 3: PREFERENCES */}
          {activeTab === 'preferences' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-6"
            >
              <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                <Sliders className="w-5 h-5 text-primary" />
                <span>{isRtl ? 'التفضيلات وتجربة الاستخدام' : 'User Experience & Language'}</span>
              </h2>

              <div className="space-y-6 divide-y divide-border">
                {/* Language Switch */}
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span>{isRtl ? 'لغة الواجهة (Language)' : 'Interface Language'}</span>
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {isRtl ? 'اختر بين اللغة العربية واللغة الإنجليزية' : 'Switch between Arabic and English'}
                    </p>
                  </div>

                  <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-bold rounded-xl text-xs cursor-pointer hover:bg-primary/20 transition-all"
                  >
                    {language === 'ar' ? 'English' : 'العربية'}
                  </button>
                </div>

                {/* Theme Switch */}
                <div className="pt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                      {theme === 'dark' ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                      <span>{isRtl ? 'المظهر والوضع الداكن' : 'Theme & Dark Mode'}</span>
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {isRtl ? 'التبديل بين الوضع الليلي والوضع الفاتح' : 'Toggle dark mode and light mode'}
                    </p>
                  </div>

                  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-muted border border-border text-foreground font-bold rounded-xl text-xs cursor-pointer hover:bg-muted/80 transition-all"
                  >
                    {theme === 'dark' ? (isRtl ? 'تفعيل الفاتح' : 'Light Mode') : (isRtl ? 'تفعيل الداكن' : 'Dark Mode')}
                  </button>
                </div>

                {/* Daily Target */}
                <div className="pt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                      <Target className="w-4 h-4 text-emerald-500" />
                      <span>{isRtl ? 'هدف التعلم اليومي' : 'Daily Learning Target'}</span>
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {isRtl ? 'حدد عدد الدروس المستهدف إنهاؤها يومياً' : 'Set target number of topics per day'}
                    </p>
                  </div>

                  <select
                    value={dailyGoal}
                    onChange={(e) => {
                      setDailyGoal(e.target.value);
                      toast.success(isRtl ? 'تم تحديث هدف التعلم اليومي' : 'Daily target updated');
                    }}
                    className="px-3 py-2 bg-background border border-border text-foreground font-bold rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="1">1 {isRtl ? 'درس/يوم' : 'Topic/day'}</option>
                    <option value="2">2 {isRtl ? 'دروس/يوم' : 'Topics/day'}</option>
                    <option value="3">3 {isRtl ? 'دروس/يوم' : 'Topics/day'}</option>
                    <option value="5">5 {isRtl ? 'دروس/يوم' : 'Topics/day'}</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
