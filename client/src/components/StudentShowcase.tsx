import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Award, ExternalLink, Sparkles, UserCheck } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  studentNameAr: string;
  studentNameEn: string;
  topicTitleAr: string;
  topicTitleEn: string;
  grade: string;
  feedbackAr: string;
  feedbackEn: string;
  projectLink: string;
}

export default function StudentShowcase() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const showcases: ShowcaseItem[] = [
    {
      id: 'sc-1',
      studentNameAr: 'أحمد محمد',
      studentNameEn: 'Ahmed Mohamed',
      topicTitleAr: 'دراسة حالة وتطبيق أساسيات الـ UX',
      topicTitleEn: 'UX Foundations Case Study',
      grade: '98/100',
      feedbackAr: 'تحليل استثنائي لشخصيات المستخدمين وتسلسل المهام (Task Flows)!',
      feedbackEn: 'Exceptional user persona breakdown and task flow map!',
      projectLink: '#',
    },
    {
      id: 'sc-2',
      studentNameAr: 'سارة محمود',
      studentNameEn: 'Sara Mahmoud',
      topicTitleAr: 'تصميم نظام مكونات ومتغيرات Figma',
      topicTitleEn: 'Figma Auto-Layout & Variants System',
      grade: '95/100',
      feedbackAr: 'مرونة عالية جداً في بناء المكونات التفاعلية وحساب التجاوب.',
      feedbackEn: 'Great responsive component hierarchy and dynamic variant states.',
      projectLink: '#',
    },
    {
      id: 'sc-3',
      studentNameAr: 'عمر خالد',
      studentNameEn: 'Omar Khaled',
      topicTitleAr: 'ملف Handoff لمشروع متكامل للمطورين',
      topicTitleEn: 'Complete UX/UI Dev Handoff Package',
      grade: '96/100',
      feedbackAr: 'توثيق دقيق جداً للمقاسات والتسليم وملاحظات الـ Accessibility.',
      feedbackEn: 'Impeccable spacing tokens documentation and screen reader labels.',
      projectLink: '#',
    },
  ];

  return (
    <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm space-y-5" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-500 flex items-center justify-center">
            <Star className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-foreground">
              {isRtl ? 'معرض تطبيقات وتفوق الطلاب' : 'Top Student Community Showcase'}
            </h3>
            <p className="text-xs text-muted-foreground font-medium">
              {isRtl ? 'نماذج حقيقية من التمارين الممتازة المستلمة والمصححة من قبل المحاضرين' : 'Exemplary homework assignments reviewed by instructors'}
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          {isRtl ? 'أعمال ملهمة' : 'Inspiring Work'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {showcases.map((sc) => (
          <motion.div
            key={sc.id}
            whileHover={{ y: -3 }}
            className="p-4 rounded-2xl border border-border/80 bg-background space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-foreground flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-primary" />
                  {isRtl ? sc.studentNameAr : sc.studentNameEn}
                </span>

                <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-md text-[11px] font-black">
                  {sc.grade}
                </span>
              </div>

              <h4 className="text-xs font-extrabold text-primary line-clamp-1">
                {isRtl ? sc.topicTitleAr : sc.topicTitleEn}
              </h4>

              <p className="text-[11px] text-muted-foreground font-medium leading-relaxed bg-muted/40 p-2.5 rounded-xl border border-border/40 italic">
                💬 "{isRtl ? sc.feedbackAr : sc.feedbackEn}"
              </p>
            </div>

            <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px] font-bold text-muted-foreground">
              <span>{isRtl ? 'تطبيق معتمد' : 'Verified Assignment'}</span>
              <span className="text-primary flex items-center gap-1">
                {isRtl ? 'معاينة النموذج' : 'Preview'}
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
