import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import EditTopicModal from '@/components/EditTopicModal';
import { educationalContent } from '@/lib/educationalContent';
import { type AssignmentItem } from '@/lib/supabase';
import {
  ShieldCheck,
  Users,
  FileText,
  BookOpen,
  Edit3,
  CheckCircle,
  Clock,
  Sparkles,
  Send,
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const [activeTab, setActiveTab] = useState<'assignments' | 'cms' | 'students'>('assignments');
  const [editingTopic, setEditingTopic] = useState<any>(null);
  const [assignments, setAssignments] = useState<AssignmentItem[]>([]);
  const [gradingId, setGradingId] = useState<string | null>(null);
  const [gradeInput, setGradeInput] = useState('');
  const [feedbackInput, setFeedbackInput] = useState('');

  // Sample Students
  const students = [
    { id: '1', name: 'أحمد علي', email: 'ahmed@student.edu', progress: '85%', assignments: 3 },
    { id: '2', name: 'سارة محمود', email: 'sara@student.edu', progress: '60%', assignments: 2 },
    { id: '3', name: 'محمد حسن', email: 'mohamed@student.edu', progress: '40%', assignments: 1 },
  ];

  useEffect(() => {
    // Default assignments for evaluation
    const defaultAssigns: AssignmentItem[] = [
      {
        id: '101',
        user_id: 'std-1',
        user_name: 'أحمد علي',
        topic_id: 'ux-foundations',
        file_name: 'Ahmed_UX_Assignment.pdf',
        file_url: '#',
        status: 'submitted',
        submitted_at: 'اليوم، 02:15 م',
      },
      {
        id: '102',
        user_id: 'std-2',
        user_name: 'سارة محمود',
        topic_id: 'color-system',
        file_name: 'Sara_ColorPalette_FigmaLink.pdf',
        file_url: '#',
        status: 'graded',
        grade: '90/100',
        feedback: 'تناسق ألوان ممتاز وتطبيق جيد لدرجات HSL',
        submitted_at: 'أمس، 11:30 ص',
      },
    ];

    setAssignments(defaultAssigns);
  }, []);

  const handleGradeSubmit = (assignmentId: string) => {
    if (!gradeInput) {
      toast.error(isRtl ? 'ادخل الدرجة المستحقة' : 'Please enter grade');
      return;
    }

    const updated = assignments.map((item) =>
      item.id === assignmentId
        ? {
            ...item,
            status: 'graded' as const,
            grade: gradeInput,
            feedback: feedbackInput || (isRtl ? 'تم التصحيح بنجاح' : 'Graded successfully'),
          }
        : item
    );

    setAssignments(updated);
    setGradingId(null);
    setGradeInput('');
    setFeedbackInput('');
    toast.success(isRtl ? 'تم إرسال التقييم وتحديث درجة الطالب!' : 'Grade submitted!');
  };

  const handleSaveTopicContent = (updatedTopic: any) => {
    // Update local topic model in educationalContent
    educationalContent.sections.forEach((sec) => {
      const idx = sec.topics.findIndex((t) => t.id === updatedTopic.id);
      if (idx !== -1) {
        sec.topics[idx] = updatedTopic;
      }
    });

    toast.success(isRtl ? 'تم حفظ المحتوى الجديد وتحديث الموقع!' : 'Topic saved!');
  };

  const isTeamMember = profile && ['founder', 'admin', 'lead', 'instructor_uiux', 'media', 'hr'].includes(profile.role);

  if (!profile || !isTeamMember) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-24 text-center">
          <ShieldCheck className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black text-foreground mb-2">
            {isRtl ? 'صفحة خاصة بالفريق القيادي والمدربين فقط' : 'Team Leads & Admins Only'}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isRtl ? 'يمكنك تحويل حسابك التجريبي إلى أحد أدوار القيادة من خلال تسجيل الدخول التجريبي' : 'You can switch role via Demo Login options'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Header */}
      <section className="pt-20 md:pt-24 pb-8 bg-gradient-to-b from-purple-500/10 via-primary/5 to-background border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-card/90 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-purple-500/30">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <div className="space-y-1">
                <span className="px-3 py-1 bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30 rounded-full text-xs font-extrabold inline-block">
                  Admin CMS & Dashboard
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                  {isRtl ? 'لوحة تحكم الإدارة والمدرس' : 'Admin & Teacher Control Center'}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {isRtl ? 'إدارة محتوى الدروس، تصحيح واجبات الطلاب، ومتابعة نسبة التفاعل' : 'Manage topics, grade homework, and track students'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-6 border-b border-border bg-card/50">
        <div className="container flex items-center gap-3">
          <button
            onClick={() => setActiveTab('assignments')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'assignments'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{isRtl ? 'تصحيح الواجبات' : 'Grade Assignments'}</span>
          </button>

          <button
            onClick={() => setActiveTab('cms')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'cms'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>{isRtl ? 'إدارة وتعديل المحتوى (CMS)' : 'Content CMS'}</span>
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'students'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{isRtl ? 'قائمة الطلاب' : 'Students List'}</span>
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-12">
        <div className="container space-y-8">
          {/* TAB 1: Assignments Evaluation */}
          {activeTab === 'assignments' && (
            <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>{isRtl ? 'الواجبات المرفوعة بانتظار التقييم' : 'Submitted Assignments for Review'}</span>
                </h2>
              </div>

              <div className="space-y-4">
                {assignments.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl border border-border bg-background space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-foreground">
                            {item.user_name || 'طالب'}
                          </span>
                          <span className="text-xs text-muted-foreground">({item.topic_id})</span>
                        </div>
                        <p className="text-xs font-semibold text-primary mt-0.5">
                          📄 {item.file_name}
                        </p>
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-black self-start sm:self-auto ${
                          item.status === 'graded'
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 animate-pulse'
                        }`}
                      >
                        {item.status === 'graded'
                          ? (isRtl ? `مصحح (${item.grade})` : `Graded (${item.grade})`)
                          : (isRtl ? 'يحتاج تصحيح' : 'Needs Review')}
                      </span>
                    </div>

                    {item.feedback && (
                      <p className="text-xs font-medium text-muted-foreground bg-muted/40 p-2.5 rounded-xl">
                        💬 {isRtl ? `التقييم الحالي: ${item.feedback}` : `Feedback: ${item.feedback}`}
                      </p>
                    )}

                    {/* Form to submit grade */}
                    {gradingId === item.id ? (
                      <div className="pt-3 border-t border-border/80 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder={isRtl ? 'الدرجة (مثال: 95/100)' : 'Grade (e.g. 95/100)'}
                            value={gradeInput}
                            onChange={(e) => setGradeInput(e.target.value)}
                            className="px-4 py-2 rounded-xl border border-border bg-card text-xs font-bold outline-none"
                          />
                          <input
                            type="text"
                            placeholder={isRtl ? 'الملاحظات والتعليق للطالب' : 'Feedback notes for student'}
                            value={feedbackInput}
                            onChange={(e) => setFeedbackInput(e.target.value)}
                            className="px-4 py-2 rounded-xl border border-border bg-card text-xs font-medium outline-none"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleGradeSubmit(item.id)}
                            className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>{isRtl ? 'إرسال التقييم للطالب' : 'Send Grade'}</span>
                          </button>
                          <button
                            onClick={() => setGradingId(null)}
                            className="px-4 py-2 border border-border text-xs font-bold text-muted-foreground rounded-xl hover:bg-muted"
                          >
                            {isRtl ? 'إلغاء' : 'Cancel'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setGradingId(item.id);
                          setGradeInput(item.grade || '');
                          setFeedbackInput(item.feedback || '');
                        }}
                        className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-bold text-xs rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer mt-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>{isRtl ? 'تقييم كراسة الواجب' : 'Grade Assignment'}</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Content CMS */}
          {activeTab === 'cms' && (
            <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                    <Edit3 className="w-5 h-5 text-primary" />
                    <span>{isRtl ? 'إدارة وتعديل محتوى الدروس' : 'Educational Content CMS'}</span>
                  </h2>
                  <p className="text-xs text-muted-foreground font-medium mt-1">
                    {isRtl ? 'اختر أي درس لتعديل عنوانه وشرحه ومحتواه مباشرة' : 'Click edit on any topic to update content'}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {educationalContent.sections.map((section) => (
                  <div key={section.id} className="space-y-3">
                    <h3 className="text-sm font-black text-foreground flex items-center gap-2 border-b border-border pb-2">
                      <span>{section.emoji}</span>
                      <span>{isRtl ? section.nameAr : section.nameEn}</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.topics.map((t) => (
                        <div
                          key={t.id}
                          className="p-4 rounded-2xl border border-border bg-background flex items-center justify-between gap-3"
                        >
                          <div>
                            <p className="text-xs font-bold text-foreground">
                              {isRtl ? t.titleAr : t.titleEn}
                            </p>
                            <p className="text-[11px] text-muted-foreground line-clamp-1">
                              {t.content.concept}
                            </p>
                          </div>

                          <button
                            onClick={() => setEditingTopic(t)}
                            className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-bold text-xs rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>{isRtl ? 'تعديل' : 'Edit'}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Students & Team Role Management */}
          {activeTab === 'students' && (
            <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{isRtl ? 'إدارة أدمن النظام وأعضاء الفريق والطلاب' : 'Team Roles & Students Management'}</span>
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    {isRtl ? 'إضافة وترقية أي حساب مسجل إلى أدمن أو مدرب أو مسؤول HR/ميديا' : 'Promote any registered student to Admin or Team Lead'}
                  </p>
                </div>
              </div>

              {/* Add / Promote Admin Box */}
              <div className="p-5 rounded-2xl bg-secondary/30 border border-border space-y-3">
                <h3 className="text-xs font-black text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>{isRtl ? 'إضافة / ترقية أدمن أو مسؤول جديد' : 'Promote Registered Email to Admin'}</span>
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const emailInput = (form.elements.namedItem('promoteEmail') as HTMLInputElement).value;
                    const roleSelect = (form.elements.namedItem('promoteRole') as HTMLSelectElement).value;
                    const titleInput = (form.elements.namedItem('promoteTitle') as HTMLInputElement).value;

                    if (!emailInput || !emailInput.includes('@')) {
                      toast.error(isRtl ? 'يرجى إدخال إيميل صحيح' : 'Please enter valid email');
                      return;
                    }

                    // Call promote logic
                    const promotedMap = JSON.parse(localStorage.getItem('pixel_promoted_roles') || '{}');
                    promotedMap[emailInput.toLowerCase().trim()] = {
                      role: roleSelect,
                      title: titleInput || roleSelect.toUpperCase(),
                    };
                    localStorage.setItem('pixel_promoted_roles', JSON.stringify(promotedMap));

                    toast.success(isRtl ? `تم ترقية ${emailInput} كـ ${roleSelect} بنجاح!` : `Promoted ${emailInput} successfully!`);
                    form.reset();
                  }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  <input
                    type="email"
                    name="promoteEmail"
                    placeholder={isRtl ? 'إيميل العضو المسجل' : 'Registered Member Email'}
                    required
                    className="px-4 py-2.5 rounded-xl border border-border bg-background text-xs font-medium outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select
                    name="promoteRole"
                    className="px-4 py-2.5 rounded-xl border border-border bg-background text-xs font-bold outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="admin">{isRtl ? 'أدمن النظام (Admin)' : 'Admin'}</option>
                    <option value="instructor_uiux">{isRtl ? 'مدرب UI/UX' : 'UI/UX Instructor'}</option>
                    <option value="lead">{isRtl ? 'قائد تنفيذي' : 'Executive Lead'}</option>
                    <option value="hr">{isRtl ? 'مسؤول HR' : 'HR Lead'}</option>
                    <option value="media">{isRtl ? 'مسؤول الميديا' : 'Media Lead'}</option>
                  </select>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-primary text-primary-foreground font-bold text-xs rounded-xl shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isRtl ? 'تأكيد الترقية كـ أدمن' : 'Promote to Admin'}</span>
                  </button>
                </form>
              </div>

              <div className="space-y-4">
                {[
                  { id: 'u1', name: 'عبدو عمارة', email: 'abdoemara@pixel.edu', role: 'founder', title: 'Pixel Founder & Master Lead', camp: 'Pixel Camp - Round 1', progress: '100%' },
                  { id: 'u2', name: 'سارة خالد المنصوري', email: 'sara.lead@pixel.edu', role: 'instructor_uiux', title: 'Lead UI/UX Instructor', camp: 'Pixel Camp - Round 1', progress: '94%' },
                  { id: 'u3', name: 'عمر النجار', email: 'omar.hr@pixel.edu', role: 'hr', title: 'Human Resources Lead', camp: 'Pixel Camp - Round 1', progress: '90%' },
                  { id: 'u4', name: 'مريم محمود', email: 'mariam.media@pixel.edu', role: 'media', title: 'Media & Branding Lead', camp: 'Pixel Camp - Round 1', progress: '88%' },
                  { id: 'u5', name: 'أحمد محمود العلي', email: 'ahmed@student.edu', role: 'student', title: 'Pixel Camp Student', camp: 'Pixel Camp - Round 1', progress: '85%' },
                ].map((st) => (
                  <div
                    key={st.id}
                    className="p-4 md:p-5 rounded-2xl border border-border bg-background flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary font-bold flex items-center justify-center text-lg shrink-0">
                        {st.name.charAt(0)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-sm text-foreground">{st.name}</span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-primary/15 text-primary border border-primary/30">
                            {st.title}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{st.email} • {st.camp}</p>
                      </div>
                    </div>

                    {/* Role Control Selector */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground block mb-1">
                          {isRtl ? 'تعديل الدور' : 'Change Role'}
                        </span>
                        <select
                          defaultValue={st.role}
                          onChange={(e) => {
                            toast.success(isRtl ? `تم تحديث دور ${st.name} إلى ${e.target.value}` : `Updated role for ${st.name}`);
                          }}
                          className="px-3 py-1.5 rounded-xl border border-border bg-card text-foreground text-xs font-bold outline-none"
                        >
                          <option value="founder">{isRtl ? 'الربان (Founder)' : 'Founder'}</option>
                          <option value="admin">{isRtl ? 'أدمن النظام' : 'Admin'}</option>
                          <option value="lead">{isRtl ? 'قائد تنفيذي' : 'Lead'}</option>
                          <option value="instructor_uiux">{isRtl ? 'مدرب UI/UX' : 'UI/UX Instructor'}</option>
                          <option value="media">{isRtl ? 'مسؤول الميديا' : 'Media Lead'}</option>
                          <option value="hr">{isRtl ? 'مسؤول HR' : 'HR Lead'}</option>
                          <option value="student">{isRtl ? 'طالب (Student)' : 'Student'}</option>
                        </select>
                      </div>

                      <div className="text-start md:text-end border-s border-border ps-3">
                        <span className="text-[10px] font-bold text-muted-foreground block">
                          {isRtl ? 'نسبة الإنجاز' : 'Progress'}
                        </span>
                        <span className="text-xs font-black text-emerald-500">
                          {st.progress}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Edit Topic Modal */}
      <EditTopicModal
        isOpen={Boolean(editingTopic)}
        onClose={() => setEditingTopic(null)}
        topic={editingTopic}
        onSave={handleSaveTopicContent}
      />
    </div>
  );
}
