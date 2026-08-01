import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  LayoutDashboard,
  Settings,
  Award,
  Bookmark,
  ShieldCheck,
  LogOut,
  ChevronDown,
  Sparkles,
  GraduationCap
} from 'lucide-react';

export default function UserDropdown() {
  const { profile, signOut } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isRtl = language === 'ar';

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!profile) return null;

  const isAdminOrStaff = ['founder', 'admin', 'lead', 'instructor_uiux', 'media', 'hr'].includes(profile.role);
  const initials = profile.full_name?.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'P';

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'founder':
        return 'bg-amber-500/15 text-amber-500 border-amber-500/30';
      case 'admin':
        return 'bg-purple-500/15 text-purple-500 border-purple-500/30';
      case 'lead':
        return 'bg-blue-500/15 text-blue-500 border-blue-500/30';
      default:
        return 'bg-primary/15 text-primary border-primary/30';
    }
  };

  return (
    <div className="relative ms-1" ref={dropdownRef} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* User Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 p-1.5 pe-3 bg-muted/60 hover:bg-muted border border-border/80 rounded-2xl transition-all cursor-pointer shadow-sm group"
      >
        {/* Avatar Circle */}
        <div className="w-8 h-8 rounded-xl bg-primary text-primary-foreground font-black text-xs flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
          {initials}
        </div>

        <div className="hidden sm:flex flex-col text-start leading-tight">
          <span className="text-xs font-black text-foreground truncate max-w-[120px]">
            {profile.full_name || 'طالب PIXEL'}
          </span>
          <span className="text-[10px] text-muted-foreground font-bold truncate max-w-[120px]">
            {profile.team_title || (isRtl ? 'متعلم جديد' : 'Student')}
          </span>
        </div>

        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>

      {/* Dropdown Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute end-0 top-full mt-2 w-72 bg-card/95 backdrop-blur-2xl border border-border/80 rounded-3xl shadow-2xl p-3 z-50 space-y-1"
          >
            {/* Header Profile Card */}
            <div className="p-3.5 bg-muted/50 rounded-2xl border border-border/50 flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground font-black text-base flex items-center justify-center shadow-md shrink-0">
                {initials}
              </div>

              <div className="space-y-1 overflow-hidden">
                <h4 className="text-sm font-black text-foreground truncate">
                  {profile.full_name}
                </h4>
                <p className="text-[11px] text-muted-foreground font-medium truncate">
                  {profile.email}
                </p>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-black border ${getRoleBadgeColor(profile.role)}`}>
                    {profile.role.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-bold truncate">
                    {profile.team_title}
                  </span>
                </div>
              </div>
            </div>

            <div className="my-1.5 border-t border-border/50" />

            {/* Menu Links */}
            <button
              onClick={() => {
                setLocation(isAdminOrStaff ? '/admin-dashboard' : '/student-dashboard');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary/10 text-foreground hover:text-primary transition-all text-xs font-bold cursor-pointer text-start"
            >
              <LayoutDashboard className="w-4 h-4 text-primary" />
              <span>{isRtl ? 'لوحة التحكّم والواجبات' : 'My Dashboard'}</span>
            </button>

            <button
              onClick={() => {
                setLocation('/settings');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary/10 text-foreground hover:text-primary transition-all text-xs font-bold cursor-pointer text-start"
            >
              <Settings className="w-4 h-4 text-blue-500" />
              <span>{isRtl ? 'إعدادات الحساب والملف الشخصي' : 'Profile & Settings'}</span>
            </button>

            <button
              onClick={() => {
                setLocation('/certificates');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary/10 text-foreground hover:text-primary transition-all text-xs font-bold cursor-pointer text-start"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>{isRtl ? 'شهادات الإتمام والجوائز' : 'My Certificates'}</span>
            </button>

            <button
              onClick={() => {
                setLocation('/bookmarks');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-primary/10 text-foreground hover:text-primary transition-all text-xs font-bold cursor-pointer text-start"
            >
              <Bookmark className="w-4 h-4 text-emerald-500" />
              <span>{isRtl ? 'الدروس المحفوظة للمراجعة' : 'Saved Bookmarks'}</span>
            </button>

            {isAdminOrStaff && (
              <>
                <div className="my-1.5 border-t border-border/50" />
                <button
                  onClick={() => {
                    setLocation('/admin-dashboard');
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 font-extrabold transition-all text-xs cursor-pointer text-start border border-purple-500/20"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isRtl ? 'لوحة الإدارة والتحكم (Admin CMS)' : 'Admin CMS Panel'}</span>
                </button>
              </>
            )}

            <div className="my-1.5 border-t border-border/50" />

            {/* Sign Out Button */}
            <button
              onClick={() => {
                setIsOpen(false);
                signOut();
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all text-xs font-bold cursor-pointer text-start"
            >
              <LogOut className="w-4 h-4" />
              <span>{isRtl ? 'تسجيل الخروج' : 'Sign Out'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
