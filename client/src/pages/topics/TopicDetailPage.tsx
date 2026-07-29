import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import EditTopicModal from '@/components/EditTopicModal';
import { educationalContent as pixelContent } from '@/lib/educationalContent';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Eye,
  Lightbulb,
  AlertTriangle,
  Award,
  Zap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
  List,
  Edit3
} from 'lucide-react';

export default function TopicDetailPage() {
  const [, setLocation] = useLocation();
  const { topicId } = useParams<{ topicId: string }>();
  const { language } = useLanguage();
  const { profile } = useAuth();
  const isRtl = language === 'ar';

  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewMode, setViewMode] = useState<'slides' | 'list'>('slides');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Find topic and its parent section
  let foundSection: typeof pixelContent.sections[0] | null = null;
  let foundTopic: typeof pixelContent.sections[0]['topics'][0] | null = null;
  let topicIndex = -1;

  for (const section of pixelContent.sections) {
    const idx = section.topics.findIndex((t) => t.id === topicId);
    if (idx !== -1) {
      foundSection = section;
      foundTopic = section.topics[idx];
      topicIndex = idx;
      break;
    }
  }

  if (!foundTopic || !foundSection) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {isRtl ? 'الموضوع غير موجود' : 'Topic not found'}
          </h1>
          <button
            onClick={() => setLocation('/')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isRtl ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const prevTopic = topicIndex > 0 ? foundSection.topics[topicIndex - 1] : null;
  const nextTopic =
    topicIndex < foundSection.topics.length - 1
      ? foundSection.topics[topicIndex + 1]
      : null;

  const contentBlocks = [
    {
      key: 'introduction',
      titleAr: 'مقدمة',
      titleEn: 'Introduction',
      icon: BookOpen,
      borderColor: 'border-blue-500/80 dark:border-blue-500/80',
      glowColor: 'shadow-blue-500/20',
      activeDotColor: 'bg-blue-500 shadow-blue-500/50',
      accentColorClass: 'text-blue-600 dark:text-blue-400',
      color: 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400',
      value: foundTopic.content.introduction,
    },
    {
      key: 'concept',
      titleAr: 'المفهوم الأساسي',
      titleEn: 'Core Concept',
      icon: Lightbulb,
      borderColor: 'border-indigo-500/80 dark:border-indigo-500/80',
      glowColor: 'shadow-indigo-500/20',
      activeDotColor: 'bg-indigo-500 shadow-indigo-500/50',
      accentColorClass: 'text-indigo-600 dark:text-indigo-400',
      color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
      value: foundTopic.content.concept,
    },
    {
      key: 'whyItMatters',
      titleAr: 'لماذا هذا مهم؟',
      titleEn: 'Why It Matters',
      icon: CheckCircle,
      borderColor: 'border-emerald-500/80 dark:border-emerald-500/80',
      glowColor: 'shadow-emerald-500/20',
      activeDotColor: 'bg-emerald-500 shadow-emerald-500/50',
      accentColorClass: 'text-emerald-600 dark:text-emerald-400',
      color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
      value: foundTopic.content.whyItMatters,
    },
    {
      key: 'breakdown',
      titleAr: 'التفصيل والشرح',
      titleEn: 'Breakdown',
      icon: Zap,
      borderColor: 'border-amber-500/80 dark:border-amber-500/80',
      glowColor: 'shadow-amber-500/20',
      activeDotColor: 'bg-amber-500 shadow-amber-500/50',
      accentColorClass: 'text-amber-600 dark:text-amber-400',
      color: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400',
      value: foundTopic.content.breakdown,
    },
    {
      key: 'example',
      titleAr: 'مثال توضيحي',
      titleEn: 'Real Example',
      icon: Eye,
      borderColor: 'border-cyan-500/80 dark:border-cyan-500/80',
      glowColor: 'shadow-cyan-500/20',
      activeDotColor: 'bg-cyan-500 shadow-cyan-500/50',
      accentColorClass: 'text-cyan-600 dark:text-cyan-400',
      color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
      value: foundTopic.content.example,
    },
    {
      key: 'badVsGood',
      titleAr: 'مقارنة (سيئ vs جيد)',
      titleEn: 'Bad vs Good',
      icon: Sparkles,
      borderColor: 'border-purple-500/80 dark:border-purple-500/80',
      glowColor: 'shadow-purple-500/20',
      activeDotColor: 'bg-purple-500 shadow-purple-500/50',
      accentColorClass: 'text-purple-600 dark:text-purple-400',
      color: 'bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400',
      value: foundTopic.content.badVsGood,
    },
    {
      key: 'commonMistakes',
      titleAr: 'أخطاء شائعة',
      titleEn: 'Common Mistakes',
      icon: AlertTriangle,
      borderColor: 'border-rose-500/80 dark:border-rose-500/80',
      glowColor: 'shadow-rose-500/20',
      activeDotColor: 'bg-rose-500 shadow-rose-500/50',
      accentColorClass: 'text-rose-600 dark:text-rose-400',
      color: 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400',
      value: foundTopic.content.commonMistakes,
    },
    {
      key: 'practicalTips',
      titleAr: 'نصائح عملية',
      titleEn: 'Practical Tips',
      icon: Sparkles,
      borderColor: 'border-teal-500/80 dark:border-teal-500/80',
      glowColor: 'shadow-teal-500/20',
      activeDotColor: 'bg-teal-500 shadow-teal-500/50',
      accentColorClass: 'text-teal-600 dark:text-teal-400',
      color: 'bg-teal-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400',
      value: foundTopic.content.practicalTips,
    },
    {
      key: 'miniActivity',
      titleAr: 'تمرين سريع',
      titleEn: 'Mini Activity',
      icon: Zap,
      borderColor: 'border-orange-500/80 dark:border-orange-500/80',
      glowColor: 'shadow-orange-500/20',
      activeDotColor: 'bg-orange-500 shadow-orange-500/50',
      accentColorClass: 'text-orange-600 dark:text-orange-400',
      color: 'bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400',
      value: foundTopic.content.miniActivity,
    },
    {
      key: 'summary',
      titleAr: 'الخلاصة',
      titleEn: 'Summary',
      icon: Award,
      borderColor: 'border-pink-500/80 dark:border-pink-500/80',
      glowColor: 'shadow-pink-500/20',
      activeDotColor: 'bg-pink-500 shadow-pink-500/50',
      accentColorClass: 'text-pink-600 dark:text-pink-400',
      color: 'bg-pink-500/10 border-pink-500/30 text-pink-600 dark:text-pink-400',
      value: foundTopic.content.summary,
    },
  ].filter((block) => Boolean(block.value && block.value.trim()));

  const totalSlides = contentBlocks.length;

  const goToNextSlide = () => {
    if (activeSlide < totalSlides - 1) {
      setDirection(1);
      setActiveSlide((prev) => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (activeSlide > 0) {
      setDirection(-1);
      setActiveSlide((prev) => prev - 1);
    }
  };

  // Keyboard navigation listener (Arrow keys)
  useEffect(() => {
    if (viewMode !== 'slides') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (isRtl) {
          goToPrevSlide();
        } else {
          goToNextSlide();
        }
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, viewMode, isRtl, totalSlides]);

  const innerContentVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? (isRtl ? -40 : 40) : (isRtl ? 40 : -40),
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? (isRtl ? 40 : -40) : (isRtl ? -40 : 40),
      opacity: 0,
    }),
  };

  const currentBlock = contentBlocks[activeSlide] || contentBlocks[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Banner */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-b border-border">
        <div className="container">
          {/* Navigation Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 text-muted-foreground">
            <button
              onClick={() => setLocation('/')}
              className="hover:text-primary transition-colors"
            >
              {isRtl ? 'الرئيسية' : 'Home'}
            </button>
            <span>/</span>
            <button
              onClick={() => setLocation(`/sections/${foundSection.id}`)}
              className="hover:text-primary transition-colors"
            >
              {isRtl ? foundSection.nameAr : foundSection.nameEn}
            </button>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              {isRtl ? foundTopic.titleAr : foundTopic.titleEn}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full text-white"
                  style={{ backgroundColor: foundSection.color }}
                >
                  {isRtl ? foundSection.nameAr : foundSection.nameEn}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {isRtl ? 'الموضوع' : 'Topic'} #{topicIndex + 1}
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-foreground">
                {isRtl ? foundTopic.titleAr : foundTopic.titleEn}
              </h1>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              {/* View Mode Toggle: Slides Deck vs List */}
              <div className="bg-card border border-border p-1 rounded-xl flex items-center gap-1 shadow-sm">
                <button
                  onClick={() => setViewMode('slides')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'slides'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  {isRtl ? 'عرض سلايدات' : 'Slides Deck'}
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    viewMode === 'list'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <List className="w-3.5 h-3.5" />
                  {isRtl ? 'عرض قائمة' : 'List View'}
                </button>
              </div>

              {/* Admin In-Place CMS Edit Button */}
              {profile?.role === 'admin' && (
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="px-3 py-2 bg-amber-500 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md hover:bg-amber-400 transition-all cursor-pointer"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>{isRtl ? 'تعديل الدرس' : 'Edit Topic'}</span>
                </button>
              )}

              <button
                onClick={() => setLocation(`/sections/${foundSection.id}`)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card hover:bg-muted transition-colors text-sm font-medium"
              >
                {isRtl ? (
                  <>
                    <span>العودة للقسم</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Section</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Content Section */}
      <section className="py-8 md:py-14">
        <div className="container max-w-4xl">
          {viewMode === 'slides' ? (
            /* ================= Presentation Slides View (Exact Reference Match) ================= */
            <div className="space-y-6">
              {/* Top Progress Header (Progress label & Percentage & Bar) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                  <span>{isRtl ? 'التقدم' : 'Progress'}</span>
                  <span className="text-primary font-black text-sm">
                    {Math.round(((activeSlide + 1) / totalSlides) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-700/60 shadow-inner">
                  <motion.div
                    className="bg-primary h-full rounded-full transition-all duration-300 shadow-md shadow-primary/30"
                    animate={{ width: `${((activeSlide + 1) / totalSlides) * 100}%` }}
                  />
                </div>
              </div>

              {/* Main Presentation Slide Card (Fixed Outer Frame with Animated Inner Content) */}
              <div
                className={`w-full rounded-[28px] border-2 ${currentBlock.borderColor} bg-card p-6 sm:p-10 md:p-12 shadow-2xl ${currentBlock.glowColor} flex flex-col justify-between relative overflow-hidden transition-all duration-500 min-h-[360px] sm:min-h-[400px]`}
              >
                <div className="relative flex-1 flex flex-col justify-between">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeSlide}
                      custom={direction}
                      variants={innerContentVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="space-y-5"
                    >
                      {/* Main Slide Title */}
                      <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${currentBlock.accentColorClass}`}>
                        {isRtl ? currentBlock.titleAr : currentBlock.titleEn}
                      </h2>

                      {/* Slide Body Content */}
                      <div className="text-foreground/90 text-lg sm:text-xl leading-relaxed whitespace-pre-line font-medium pt-2">
                        {currentBlock.value}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Bottom Dots Indicator Inside Card */}
                  <div className="flex items-center justify-center gap-2 pt-8 border-t border-border/40 mt-8">
                    {contentBlocks.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setDirection(idx > activeSlide ? 1 : -1);
                          setActiveSlide(idx);
                        }}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === activeSlide
                            ? `w-8 ${currentBlock.activeDotColor} shadow-md`
                            : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Navigation Buttons (Matching Reference Image) */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={isRtl ? goToNextSlide : goToPrevSlide}
                  disabled={isRtl ? activeSlide === totalSlides - 1 : activeSlide === 0}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all border-2 shadow-lg cursor-pointer ${
                    (isRtl ? activeSlide === totalSlides - 1 : activeSlide === 0)
                      ? 'opacity-40 cursor-not-allowed border-slate-300 dark:border-slate-800 bg-muted text-muted-foreground'
                      : 'border-slate-300 dark:border-slate-700 bg-card text-foreground hover:border-primary hover:bg-muted'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>{isRtl ? 'التالي' : 'Previous'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={isRtl ? goToPrevSlide : goToNextSlide}
                  disabled={isRtl ? activeSlide === 0 : activeSlide === totalSlides - 1}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all border-2 shadow-lg cursor-pointer ${
                    (isRtl ? activeSlide === 0 : activeSlide === totalSlides - 1)
                      ? 'opacity-40 cursor-not-allowed border-slate-300 dark:border-slate-800 bg-muted text-muted-foreground'
                      : 'border-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20'
                  }`}
                >
                  <span>{isRtl ? 'السابق' : 'Next'}</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          ) : (
            /* ================= Full List View Fallback ================= */
            <div className="space-y-8">
              {contentBlocks.map((block, index) => {
                const Icon = block.icon;
                return (
                  <motion.div
                    key={block.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2.5 rounded-xl border ${block.color} flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">
                        {isRtl ? block.titleAr : block.titleEn}
                      </h2>
                    </div>

                    <div className="text-foreground/90 text-base md:text-lg leading-relaxed whitespace-pre-line border-t border-border/50 pt-4 mt-2">
                      {block.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Bottom Next/Prev Topic Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 mt-10 border-t border-border">
            {prevTopic ? (
              <button
                onClick={() => setLocation(`/topics/${prevTopic.id}`)}
                className="w-full sm:w-auto flex items-center justify-start gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted transition-colors text-right cursor-pointer"
              >
                {isRtl ? <ArrowRight className="w-5 h-5 text-primary" /> : <ArrowLeft className="w-5 h-5 text-primary" />}
                <div>
                  <span className="text-xs text-muted-foreground block">
                    {isRtl ? 'الموضوع السابق' : 'Previous Topic'}
                  </span>
                  <span className="font-semibold text-foreground text-sm line-clamp-1">
                    {isRtl ? prevTopic.titleAr : prevTopic.titleEn}
                  </span>
                </div>
              </button>
            ) : <div />}

            {nextTopic ? (
              <button
                onClick={() => setLocation(`/topics/${nextTopic.id}`)}
                className="w-full sm:w-auto flex items-center justify-end gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted transition-colors text-left cursor-pointer"
              >
                <div className="text-left">
                  <span className="text-xs text-muted-foreground block">
                    {isRtl ? 'الموضوع التالي' : 'Next Topic'}
                  </span>
                  <span className="font-semibold text-foreground text-sm line-clamp-1">
                    {isRtl ? nextTopic.titleAr : nextTopic.titleEn}
                  </span>
                </div>
                {isRtl ? <ArrowLeft className="w-5 h-5 text-primary" /> : <ArrowRight className="w-5 h-5 text-primary" />}
              </button>
            ) : <div />}
          </div>
        </div>
      </section>

      <EditTopicModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        topic={foundTopic}
        onSave={(updated) => {
          Object.assign(foundTopic, updated);
        }}
      />

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {isRtl ? 'منصة PIXEL' : 'PIXEL Platform'}
          </p>
        </div>
      </footer>
    </div>
  );
}
