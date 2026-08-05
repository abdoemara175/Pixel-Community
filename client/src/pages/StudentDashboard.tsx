import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import StudentShowcase from '@/components/StudentShowcase';
import { educationalContent } from '@/lib/educationalContent';
import { supabase, isSupabaseConfigured, type AssignmentItem, type NotificationItem } from '@/lib/supabase';
import {
  User,
  GraduationCap,
  CheckCircle2,
  Clock,
  UploadCloud,
  FileText,
  Bell,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { toast } from 'sonner';

export default function StudentDashboard() {
  const { user, profile, isDemoMode } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const isRtl = language === 'ar';

  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [assignments, setAssignments] = useState<AssignmentItem[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>('ux-foundations');
  const [uploadFileName, setUploadFileName] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Load progress and assignments
  useEffect(() => {
    if (!profile) return;

    // Load from local storage / mock state initially
    const savedProgress = localStorage.getItem(`pixel_progress_${profile.id}`);
    if (savedProgress) {
      try {
        setCompletedTopics(JSON.parse(savedProgress));
      } catch {
        // ignore
      }
    } else {
      // Default completed topics demo
      setCompletedTopics(['ux-foundations', 'design-thinking-process', 'ui-foundations']);
    }

    // Default mock assignments
    const savedAssignments = localStorage.getItem(`pixel_assignments_${profile.id}`);
    if (savedAssignments) {
      try {
        setAssignments(JSON.parse(savedAssignments));
      } catch {
        // ignore
      }
    } else {
      const defaultAssign: AssignmentItem[] = [
        {
          id: '1',
          user_id: profile.id,
          topic_id: 'ux-foundations',
          file_name: 'UX_Foundations_Homework.pdf',
          file_url: '#',
          status: 'graded',
          grade: '95/100',
          feedback: 'عمل ممتاز جداً وتوزيع رائع لشخصية المستخدم!',
          submitted_at: new Date().toLocaleDateString(),
        },
      ];
      setAssignments(defaultAssign);
    }

    // Default notifications
    const defaultNotifs: NotificationItem[] = [
      {
        id: 'n1',
        user_id: profile.id,
        title: isRtl ? 'تم تصحيح الواجب' : 'Assignment Graded',
        message: isRtl
          ? 'حصلت على درجة 95/100 في واجب UX Foundations!'
          : 'You scored 95/100 on UX Foundations assignment!',
        read: false,
        created_at: 'منذ ساعتين',
      },
      {
        id: 'n2',
        user_id: profile.id,
        title: isRtl ? 'مرحباً بك في PIXEL' : 'Welcome to PIXEL',
        message: isRtl
          ? 'تصفح الدروس وابدأ في تطبيق تمارين الواجبات الميدانية'
          : 'Explore tracks and start submitting your work',
        read: true,
        created_at: 'أمس',
      },
    ];
    setNotifications(defaultNotifs);

    // If Supabase is connected, load live DB state
    if (isSupabaseConfigured && profile.id) {
      supabase
        .from('user_progress')
        .select('topic_id')
        .eq('user_id', profile.id)
        .eq('completed', true)
        .then(({ data }) => {
          if (data) {
            setCompletedTopics(data.map((d) => d.topic_id));
          }
        });

      supabase
        .from('assignments')
        .select('*')
        .eq('user_id', profile.id)
        .then(({ data }) => {
          if (data) {
            setAssignments(data as AssignmentItem[]);
          }
        });
    }
  }, [profile]);

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFileName) {
      toast.error(isRtl ? 'يرجى إدخال اسم أو رابط الملف' : 'Please provide file name or link');
      return;
    }

    setIsUploading(true);
    setTimeout(() => {
      const newAssign: AssignmentItem = {
        id: Date.now().toString(),
        user_id: profile?.id || 'user',
        topic_id: selectedTopic,
        file_name: uploadFileName,
        file_url: '#',
        status: 'submitted',
        submitted_at: new Date().toLocaleDateString(),
      };

      const updated = [newAssign, ...assignments];
      setAssignments(updated);
      localStorage.setItem(`pixel_assignments_${profile?.id}`, JSON.stringify(updated));
      setIsUploading(false);
      setUploadFileName('');
      toast.success(isRtl ? 'تم رفع الواجب بنجاح وإرساله للإدارة!' : 'Assignment submitted successfully!');
    }, 800);
  };

  // Calculate overall statistics
  const totalTopics = educationalContent.sections.reduce((acc, s) => acc + s.topics.length, 0);
  const completionPercentage = Math.round((completedTopics.length / Math.max(totalTopics, 1)) * 100);

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-24 text-center">
          <p className="text-muted-foreground">{isRtl ? 'يرجى تسجيل الدخول لعرض لوحة التحكم' : 'Please sign in to view dashboard'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20 md:pt-24 pb-8 bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-card/90 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/30 shrink-0">
                {profile.full_name?.charAt(0).toUpperCase() || 'S'}
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-primary/15 text-primary border border-primary/30 rounded-full text-xs font-extrabold flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {profile.team_title || (isRtl ? 'طالب شغوف' : 'Passionate Student')}
                  </span>
                  <span className="px-3 py-1 bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold">
                    ⛺ {profile.camp_name || 'Pixel Camp - Round 1'}
                  </span>
                  {isDemoMode && (
                    <span className="px-2.5 py-0.5 bg-secondary text-muted-foreground border border-border rounded-full text-[11px] font-bold">
                      Demo Mode
                    </span>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                  {isRtl ? `مرحباً، ${profile.full_name}` : `Welcome, ${profile.full_name}`}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {profile.email}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLocation('/tracks')}
                className="px-5 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{isRtl ? 'متابعة التعلم' : 'Continue Learning'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-8 md:py-12">
        <div className="container space-y-8">
          {/* Progress Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                %{completionPercentage}
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {isRtl ? 'نسبة الإنجاز الكلية' : 'Overall Completion'}
                </p>
                <p className="text-xl font-extrabold text-foreground">
                  {completedTopics.length} / {totalTopics} {isRtl ? 'دروس' : 'Topics'}
                </p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {isRtl ? 'الواجبات المرفوعة' : 'Uploaded Assignments'}
                </p>
                <p className="text-xl font-extrabold text-foreground">
                  {assignments.length} {isRtl ? 'واجبات' : 'Submitted'}
                </p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {isRtl ? 'الإشعارات التنبيهية' : 'Notifications'}
                </p>
                <p className="text-xl font-extrabold text-foreground">
                  {notifications.length} {isRtl ? 'تنبيهات' : 'Alerts'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (2 Cols): Upload Assignments & Submission History */}
            <div className="lg:col-span-2 space-y-8">
              {/* Assignment Upload Form */}
              <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-foreground">
                      {isRtl ? 'رفع الواجبات والتمارين التطبيقية' : 'Upload Assignment & Homework'}
                    </h2>
                    <p className="text-xs text-muted-foreground font-medium">
                      {isRtl ? 'قم برفع ملفك أو رابط مشروعك ليتم تقييمه من قبل الإدارة والمدرس' : 'Submit your task file or link for evaluation'}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleFileUpload} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {isRtl ? 'اختر الدرس / الموضوع' : 'Select Topic'}
                      </label>
                      <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-xs font-bold outline-none focus:ring-2 focus:ring-primary"
                      >
                        {educationalContent.sections.flatMap((s) =>
                          s.topics.map((t) => (
                            <option key={t.id} value={t.id}>
                              {s.emoji} {isRtl ? t.titleAr : t.titleEn}
                            </option>
                          ))
                        )}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {isRtl ? 'اسم الملف أو رابط Figma/GitHub' : 'File Name or Project Link'}
                      </label>
                      <input
                        type="text"
                        value={uploadFileName}
                        onChange={(e) => setUploadFileName(e.target.value)}
                        placeholder={isRtl ? 'مثال: UX_Task_Solution.pdf' : 'e.g. Figma_Link.pdf'}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-xs font-medium outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isUploading}
                    className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground font-bold text-xs rounded-xl shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>{isUploading ? (isRtl ? 'جاري الرفع...' : 'Uploading...') : (isRtl ? 'تأكيد رفع الواجب' : 'Submit Assignment')}</span>
                  </button>
                </form>
              </div>

              {/* Assignment Submissions List */}
              <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-5">
                <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span>{isRtl ? 'سجل الواجبات المرفوعة والتقييمات' : 'My Submitted Assignments'}</span>
                </h3>

                {assignments.length === 0 ? (
                  <p className="text-xs text-muted-foreground py-4 text-center">
                    {isRtl ? 'لم تقم برفع أي واجبات بعد' : 'No assignments uploaded yet'}
                  </p>
                ) : (
                  <div className="space-y-3">
                    {assignments.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl border border-border/80 bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-foreground">
                              {item.file_name}
                            </span>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                                item.status === 'graded'
                                  ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                                  : 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                              }`}
                            >
                              {item.status === 'graded'
                                ? (isRtl ? 'تم التصحيح' : 'Graded')
                                : (isRtl ? 'قيد التقييم' : 'Under Review')}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {isRtl ? `تاريخ الرفع: ${item.submitted_at}` : `Submitted on: ${item.submitted_at}`}
                          </p>
                          {item.feedback && (
                            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-2 rounded-lg mt-1">
                              💬 {isRtl ? `ملاحظات المدرس: ${item.feedback}` : `Feedback: ${item.feedback}`}
                            </p>
                          )}
                        </div>

                        {item.grade && (
                          <div className="text-start sm:text-end shrink-0">
                            <span className="text-xs font-bold text-muted-foreground block">
                              {isRtl ? 'الدرجة' : 'Grade'}
                            </span>
                            <span className="text-lg font-black text-primary">
                              {item.grade}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Community Student Showcase */}
              <StudentShowcase />
            </div>

            {/* Right Column (1 Col): Notifications & Fast Track Progress */}
            <div className="space-y-8">
              {/* Notifications Box */}
              <div className="bg-card border border-border p-6 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
                  <Bell className="w-4 h-4 text-primary" />
                  <span>{isRtl ? 'مركز الإشعارات' : 'Notifications'}</span>
                </h3>

                <div className="space-y-3">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-3.5 rounded-xl border border-border/60 bg-background space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-extrabold text-foreground">{n.title}</p>
                        <span className="text-[10px] text-muted-foreground">{n.created_at}</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                        {n.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
