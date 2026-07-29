import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured, type UserProfile } from '@/lib/supabase';
import { toast } from 'sonner';

interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  loading: boolean;
  isDemoMode: boolean;
  signInWithEmailOtp: (email: string) => Promise<boolean>;
  verifyOtp: (email: string, token: string) => Promise<boolean>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  loginAsDemo: (role: 'student' | 'admin') => void;
  updateProfileRole: (newRole: 'student' | 'admin') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
      // Fallback Demo session if Supabase ENV is not connected yet
      const savedDemo = localStorage.getItem('pixel_demo_user');
      if (savedDemo) {
        try {
          const parsed = JSON.parse(savedDemo);
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
        // Create default student profile
        const defaultProf: UserProfile = {
          id: userId,
          email,
          full_name: email.split('@')[0],
          role: 'student',
        };
        setProfile(defaultProf);
      }
    } catch (e) {
      console.error('Profile fetch exception:', e);
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmailOtp = async (email: string): Promise<boolean> => {
    if (!isSupabaseConfigured) {
      toast.info('تطبيق النمط التجريبي (Demo Mode) بدون ربط مفاتيح Supabase', {
        description: 'يمكنك اختيار حزمة الطالب أو الأدمن للتجربة المباشرة!',
      });
      loginAsDemo('student');
      return true;
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
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
    if (!isSupabaseConfigured) {
      loginAsDemo('student');
      return true;
    }

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email',
      });

      if (error) {
        toast.error('رمز OTP غير صحيح أو منتهي الصلاحية');
        return false;
      }

      if (data.user) {
        setUser(data.user);
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
      toast.info('تسجيل دخول تجريبي بـ Google');
      loginAsDemo('student');
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
    localStorage.removeItem('pixel_demo_user');
    setUser(null);
    setProfile(null);
    setIsDemoMode(false);
    toast.success('تم تسجيل الخروج بنجاح');
  };

  const loginAsDemo = (role: 'student' | 'admin') => {
    const demoUser = {
      id: role === 'admin' ? 'demo-admin-id' : 'demo-student-id',
      email: role === 'admin' ? 'admin@pixel.edu' : 'student@pixel.edu',
    };
    const demoProfile: UserProfile = {
      id: demoUser.id,
      email: demoUser.email,
      full_name: role === 'admin' ? 'الأستاذ الأدمن (الإدارة)' : 'الطالب التجريبي',
      role,
      avatar_url: undefined,
    };

    setUser(demoUser);
    setProfile(demoProfile);
    setIsDemoMode(true);
    localStorage.setItem('pixel_demo_user', JSON.stringify({ user: demoUser, profile: demoProfile }));
    toast.success(`تم دخول الحساب التجريبي بنجاح بصفة: ${role === 'admin' ? 'أدمن / مدرس' : 'طالب'}`);
  };

  const updateProfileRole = (newRole: 'student' | 'admin') => {
    if (profile) {
      const updated = { ...profile, role: newRole };
      setProfile(updated);
      if (isDemoMode) {
        localStorage.setItem('pixel_demo_user', JSON.stringify({ user, profile: updated }));
      }
      toast.success(`تم التغيير إلى: ${newRole === 'admin' ? 'حساب أدمن' : 'حساب طالب'}`);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isDemoMode,
        signInWithEmailOtp,
        verifyOtp,
        signInWithGoogle,
        signOut,
        loginAsDemo,
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
