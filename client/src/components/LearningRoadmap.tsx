import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { CheckCircle2, Lock, ArrowLeft, ArrowRight, Sparkles, Trophy } from 'lucide-react';

interface RoadmapMilestone {
  id: string;
  level: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  sectionId: string;
  emoji: string;
  color: string;
  completedTopicsCount: number;
  totalTopicsCount: number;
}

export default function LearningRoadmap() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const isRtl = language === 'ar';

  const milestones: RoadmapMilestone[] = [
    {
      id: 'ux-milestone',
      level: 1,
      titleAr: 'المرحلة 1: أساسيات تجربة المستخدم (UX)',
      titleEn: 'Level 1: UX Foundations & Research',
      descriptionAr: 'فهم سلوك الإنسان، إجراء البحوث، رسم الخرائط، والتفكير التصميمي',
      descriptionEn: 'Understand human behavior, conduct research, journey mapping & design thinking',
      sectionId: 'ux',
      emoji: '👥',
      color: '#3B82F6',
      completedTopicsCount: 14,
      totalTopicsCount: 14,
    },
    {
      id: 'ui-milestone',
      level: 2,
      titleAr: 'المرحلة 2: واجهات المستخدم والنظم البصرية (UI)',
      titleEn: 'Level 2: UI Systems & Visual Aesthetics',
      descriptionAr: 'أنظمة الألوان، الخطوط، الشبكات، التجاوب، والـ Design Systems',
      descriptionEn: 'Color palettes, typography, grids, responsiveness & design systems',
      sectionId: 'ui',
      emoji: '🎨',
      color: '#8B5CF6',
      completedTopicsCount: 12,
      totalTopicsCount: 12,
    },
    {
      id: 'integration-milestone',
      level: 3,
      titleAr: 'المرحلة 3: تكامل الـ UX/UI والتسليم البرمجي',
      titleEn: 'Level 3: UX/UI Integration & Dev Handoff',
      descriptionAr: 'ربط الهياكل بالتصميم، Dev Mode، التوكنز، واختبار الـ Design QA',
      descriptionEn: 'Wireframe to UI, Dev Mode, Design Tokens, & Design QA audit',
      sectionId: 'integration',
      emoji: '🔗',
      color: '#EC4899',
      completedTopicsCount: 4,
      totalTopicsCount: 4,
    },
    {
      id: 'bonus-milestone',
      level: 4,
      titleAr: 'المرحلة 4: احتراف السوق والـ Portfolio والعمل الحر',
      titleEn: 'Level 4: Portfolio, Interviews & Freelancing',
      descriptionAr: 'بناء الـ Case Studies، المقابلات الوظيفية، الذكاء الاصطناعي والقيادة',
      descriptionEn: 'Case studies, job interviews, AI design tools, & freelancing',
      sectionId: 'bonus',
      emoji: '⭐',
      color: '#F59E0B',
      completedTopicsCount: 5,
      totalTopicsCount: 5,
    },
  ];

  return (
    <div className="bg-card/90 border border-border/80 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-primary/15 text-primary border border-primary/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRtl ? 'خريطة التعلم المتدرجة' : 'Interactive Learning Roadmap'}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-foreground">
            {isRtl ? 'مسار احتراف الـ UI/UX خطوة بخطوة' : 'Step-by-Step Design Career Pathway'}
          </h2>
        </div>

        <button
          onClick={() => setLocation('/tracks')}
          className="self-start sm:self-auto px-4 py-2 bg-primary text-primary-foreground font-bold text-xs rounded-xl hover:bg-primary/90 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <span>{isRtl ? 'استعراض كافة المسارات' : 'Explore All Tracks'}</span>
          {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Connected Milestone Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {milestones.map((m, idx) => {
          return (
            <motion.div
              key={m.id}
              whileHover={{ y: -5 }}
              onClick={() => setLocation(`/sections/${m.sectionId}`)}
              className="group cursor-pointer relative bg-background/90 border border-border/80 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              {/* Connector line for desktop */}
              {idx < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-10 -end-3.5 w-7 h-0.5 bg-border/80 z-10" />
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold border shadow-sm group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: `${m.color}15`,
                      borderColor: `${m.color}30`,
                    }}
                  >
                    {m.emoji}
                  </div>

                  <span
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-black border"
                    style={{
                      backgroundColor: `${m.color}15`,
                      borderColor: `${m.color}30`,
                      color: m.color,
                    }}
                  >
                    Level {m.level}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {isRtl ? m.titleAr : m.titleEn}
                </h3>
                <p className="text-xs text-muted-foreground font-medium line-clamp-2 leading-relaxed">
                  {isRtl ? m.descriptionAr : m.descriptionEn}
                </p>
              </div>

              <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold">
                <span className="text-muted-foreground">
                  {m.totalTopicsCount} {isRtl ? 'دروس' : 'Topics'}
                </span>
                <span className="text-primary group-hover:underline flex items-center gap-1">
                  {isRtl ? 'ابدأ المرحلة' : 'Start Level'}
                  {isRtl ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
