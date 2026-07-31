import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured, type UserProfile, type UserRole } from '@/lib/supabase';
import { toast } from 'sonner';

interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  loading: boolean;
  isDemoMode: boolean;
  signInWithEmailOtp: (email: string) => Promise<boolean>;
  signInWithPassword: (email: string, pass: string) => Promise<boolean>;
  verifyOtp: (email: string, token: string) => Promise<boolean>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  promoteUserRoleByEmail: (email: string, role: UserRole, title?: string) => void;
  updateProfileRole: (userId: string, newRole: UserRole, teamTitle?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Master Founder Email & Admin Defaults
export const MASTER_ADMIN_EMAIL = 'admin@pixel.edu';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false);

  useEffect(() => {
    // Check initial Supabase session
    if (isSupabaseConfigured) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
          fetchProfile(session.user.id, session.user.email || '');
        } else {
          setLoading(false);
        }
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setUser(session.user);
          fetchProfile(session.user.id, session.user.email || '');
        } else {
          setUser(null);
          setProfile(null);
          setLoading(false);
        }
      });

      return () => subscription.unsubscribe();
    } else {
      // Fallback local session if Supabase ENV is not connected yet
      const savedUser = localStorage.getItem('pixel_logged_user');
      if (savedUser) {
        try {
          const parsed = JSON.parse(savedUser);
          setUser(parsed.user);
          setProfile(parsed.profile);
          setIsDemoMode(true);
        } catch {
          // ignore
        }
      }
      setLoading(false);
    }
  }, []);

  const resolveRoleForEmail = (email: string): { role: UserRole; title: string; name: string } => {
    const cleanEmail = email.toLowerCase().trim();

    // 1. Check Master Founder Email
    if (cleanEmail === MASTER_ADMIN_EMAIL || cleanEmail.startsWith('admin') || cleanEmail.startsWith('founder') || cleanEmail.includes('abdoemara')) {
      return {
        role: 'founder',
        title: 'Pixel Founder & Master Lead',
        name: 'م/ عبدو عمارة (الربان / Founder)',
      };
    }

    // 2. Check Promoted Roles Registry in LocalStorage
    const promotedMap = JSON.parse(localStorage.getItem('pixel_promoted_roles') || '{}');
    if (promotedMap[cleanEmail]) {
      const p = promotedMap[cleanEmail];
      return {
        role: p.role || 'admin',
        title: p.title || 'Executive Team Lead',
        name: email.split('@')[0],
      };
    }

    // 3. Default Student
    return {
      role: 'student',
      title: 'Pixel Camp Student',
      name: email.split('@')[0],
    };
  };

  const fetchProfile = async (userId: string, email: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
      }

      if (data) {
        setProfile(data as UserProfile);
      } else {
        const resolved = resolveRoleForEmail(email);
        const defaultProf: UserProfile = {
          id: userId,
          email,
          full_name: resolved.name,
          role: resolved.role,
          team_title: resolved.title,
          camp_name: 'Pixel Camp - Round 1',
        };
        setProfile(defaultProf);
      }
    } catch (e) {
      console.error('Profile fetch exception:', e);
    } finally {
      setLoading(false);
    }
  };

  const signInWithPassword = async (email: string, pass: string): Promise<boolean> => {
    const cleanEmail = email.toLowerCase().trim();

    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: pass,
        });

        if (error) {
          toast.error('خطأ في كلمة المرور أو البريد الإلكتروني: ' + error.message);
          return false;
        }

        if (data.user) {
          setUser(data.user);
          await fetchProfile(data.user.id, cleanEmail);
          toast.success('تم تسجيل الدخول بنجاح!');
          return true;
        }
      } catch (err: any) {
        console.error('Password login error:', err);
      }
    }

    // Local authentication fallback for Master Admin and registered users
    const resolved = resolveRoleForEmail(cleanEmail);
    const localUser = {
      id: `usr-${Date.now()}`,
      email: cleanEmail,
    };
    const localProfile: UserProfile = {
      id: localUser.id,
      email: cleanEmail,
      full_name: resolved.name,
      role: resolved.role,
      team_title: resolved.title,
      camp_name: 'Pixel Camp - Round 1',
    };

    setUser(localUser);
    setProfile(localProfile);
    setIsDemoMode(true);
    localStorage.setItem('pixel_logged_user', JSON.stringify({ user: localUser, profile: localProfile }));
    toast.success(`أهلاً بك! تم دخول الحساب بصفة: ${localProfile.team_title}`);
    return true;
  };

  const signInWithEmailOtp = async (email: string): Promise<boolean> => {
    const cleanEmail = email.toLowerCase().trim();

    if (!isSupabaseConfigured) {
      return signInWithPassword(cleanEmail, 'demo');
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: cleanEmail,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) {
        toast.error('حدث خطأ أثناء إرسال رمز OTP: ' + error.message);
        return false;
      }

      toast.success('تم إرسال رمز OTP لبريدك الإلكتروني بنجاح!');
      return true;
    } catch (err: any) {
      toast.error('خطأ في إرسال OTP: ' + err.message);
      return false;
    }
  };

  const verifyOtp = async (email: string, token: string): Promise<boolean> => {
    const cleanEmail = email.toLowerCase().trim();

    if (!isSupabaseConfigured) {
      return signInWithPassword(cleanEmail, 'demo');
    }

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email: cleanEmail,
        token,
        type: 'email',
      });

      if (error) {
        toast.error('رمز OTP غير صحيح أو منتهي الصلاحية');
        return false;
      }

      if (data.user) {
        setUser(data.user);
        await fetchProfile(data.user.id, cleanEmail);
        toast.success('تم تسجيل الدخول بنجاح!');
        return true;
      }
      return false;
    } catch (err: any) {
      toast.error('خطأ أثناء التأكد من OTP: ' + err.message);
      return false;
    }
  };

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured) {
      signInWithPassword('student@pixel.edu', 'demo');
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) toast.error('خطأ في تسجيل دخول Google: ' + error.message);
    } catch (err: any) {
      toast.error('خطأ في Google Auth: ' + err.message);
    }
  };

  const signOut = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem('pixel_logged_user');
    setUser(null);
    setProfile(null);
    setIsDemoMode(false);
    toast.success('تم تسجيل الخروج بنجاح');
  };

  const promoteUserRoleByEmail = (targetEmail: string, newRole: UserRole, title?: string) => {
    const cleanEmail = targetEmail.toLowerCase().trim();
    const promotedMap = JSON.parse(localStorage.getItem('pixel_promoted_roles') || '{}');
    promotedMap[cleanEmail] = {
      role: newRole,
      title: title || `${newRole.toUpperCase()} Lead`,
    };
    localStorage.setItem('pixel_promoted_roles', JSON.stringify(promotedMap));

    if (isSupabaseConfigured) {
      supabase
        .from('profiles')
        .update({ role: newRole, team_title: title })
        .eq('email', cleanEmail)
        .then(({ error }) => {
          if (error) console.error('Supabase profile update failed:', error);
        });
    }

    toast.success(`تم ترقية البريد الإلكتروني ${cleanEmail} إلى صفة ${newRole.toUpperCase()} بنجاح!`);
  };

  const updateProfileRole = async (targetUserId: string, newRole: UserRole, teamTitle?: string) => {
    if (profile?.id === targetUserId) {
      const updated = { ...profile, role: newRole, team_title: teamTitle || profile.team_title };
      setProfile(updated);
      if (isDemoMode) {
        localStorage.setItem('pixel_logged_user', JSON.stringify({ user, profile: updated }));
      }
    }

    if (isSupabaseConfigured) {
      try {
        await supabase
          .from('profiles')
          .update({ role: newRole, team_title: teamTitle })
          .eq('id', targetUserId);
      } catch (err) {
        console.error('Failed to update remote profile:', err);
      }
    }

    toast.success('تم تحديث الدور الوظيفي بنجاح!');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isDemoMode,
        signInWithEmailOtp,
        signInWithPassword,
        verifyOtp,
        signInWithGoogle,
        signOut,
        promoteUserRoleByEmail,
        updateProfileRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
