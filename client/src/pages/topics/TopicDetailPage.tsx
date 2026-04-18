import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import pixelContent from '@/lib/pixelContent.json';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function TopicDetailPage() {
  const [, setLocation] = useLocation();
  const { topicId } = useParams<{ topicId: string }>();
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);

  // Find the topic and section
  let topic: any = null;
  let section: any = null;

  for (const sec of pixelContent.sections) {
    const foundTopic = sec.topics.find((t) => t.id === topicId);
    if (foundTopic) {
      topic = foundTopic;
      section = sec;
      break;
    }
  }

  if (!topic || !section) {
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

  const contentPoints = [
    { key: 'introduction', label: isRtl ? 'المقدمة' : 'Introduction', icon: '📖' },
    { key: 'concept', label: isRtl ? 'المفهوم' : 'Concept', icon: '💡' },
    { key: 'whyItMatters', label: isRtl ? 'لماذا مهم' : 'Why it matters', icon: '⭐' },
    { key: 'breakdown', label: isRtl ? 'التفصيل' : 'Breakdown', icon: '🔍' },
    { key: 'example', label: isRtl ? 'مثال' : 'Example', icon: '📝' },
    { key: 'badVsGood', label: isRtl ? 'السيء vs الجيد' : 'Bad vs Good', icon: '⚖️' },
    { key: 'commonMistakes', label: isRtl ? 'الأخطاء الشائعة' : 'Common Mistakes', icon: '⚠️' },
    { key: 'practicalTips', label: isRtl ? 'نصائح عملية' : 'Practical Tips', icon: '💪' },
    { key: 'miniActivity', label: isRtl ? 'نشاط صغير' : 'Mini Activity', icon: '🎯' },
    { key: 'summary', label: isRtl ? 'الملخص' : 'Summary', icon: '✅' },
  ];

  // Keyboard navigation with language awareness
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        // In RTL (Arabic), Right arrow goes to previous slide
        // In LTR (English), Right arrow goes to next slide
        if (isRtl) {
          setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
        } else {
          setCurrentSlide((prev) => (prev < contentPoints.length - 1 ? prev + 1 : prev));
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        // In RTL (Arabic), Left arrow goes to next slide
        // In LTR (English), Left arrow goes to previous slide
        if (isRtl) {
          setCurrentSlide((prev) => (prev < contentPoints.length - 1 ? prev + 1 : prev));
        } else {
          setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isRtl, contentPoints.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < contentPoints.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const currentPoint = contentPoints[currentSlide];
  const progress = ((currentSlide + 1) / contentPoints.length) * 100;

  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      x: direction < 0 ? 100 : -100,
    }),
  };

  const colors = [
    'from-blue-500/20 to-blue-600/20',
    'from-purple-500/20 to-purple-600/20',
    'from-pink-500/20 to-pink-600/20',
    'from-orange-500/20 to-orange-600/20',
    'from-green-500/20 to-green-600/20',
    'from-red-500/20 to-red-600/20',
    'from-cyan-500/20 to-cyan-600/20',
    'from-yellow-500/20 to-yellow-600/20',
    'from-indigo-500/20 to-indigo-600/20',
    'from-teal-500/20 to-teal-600/20',
  ];

  const badgeColors = [
    'bg-blue-500/20 text-blue-400',
    'bg-purple-500/20 text-purple-400',
    'bg-pink-500/20 text-pink-400',
    'bg-orange-500/20 text-orange-400',
    'bg-green-500/20 text-green-400',
    'bg-red-500/20 text-red-400',
    'bg-cyan-500/20 text-cyan-400',
    'bg-yellow-500/20 text-yellow-400',
    'bg-indigo-500/20 text-indigo-400',
    'bg-teal-500/20 text-teal-400',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb & Header */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-2 text-muted-foreground mb-6 text-sm">
            <button
              onClick={() => setLocation('/')}
              className="hover:text-primary transition-colors"
            >
              {isRtl ? 'الرئيسية' : 'Home'}
            </button>
            <span>/</span>
            <button
              onClick={() => setLocation(`/sections/${section.id}`)}
              className="hover:text-primary transition-colors"
            >
              {section.name}
            </button>
            <span>/</span>
            <span className="text-foreground">{topic.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {topic.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {topic.description}
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">
              {isRtl ? 'التقدم' : 'Progress'}
            </span>
            <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Slides Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="relative h-[500px] md:h-[600px]">
            <AnimatePresence mode="wait" custom={currentSlide}>
              <motion.div
                key={currentSlide}
                custom={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.3 },
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                }}
                className="absolute inset-0"
              >
                <div
                  className={`h-full bg-gradient-to-br ${colors[currentSlide]} rounded-2xl border border-border p-8 md:p-12 flex flex-col justify-between`}
                >
                  {/* Badge and Title */}
                  <div>
                    <div className={`inline-block ${badgeColors[currentSlide]} px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                      {currentPoint.label}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                      {currentPoint.label}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="text-lg md:text-xl text-foreground/90 leading-relaxed max-h-[250px] overflow-y-auto">
                    {topic.content[currentPoint.key as keyof typeof topic.content]}
                  </div>

                  {/* Dots Navigation */}
                  <div className="flex items-center justify-center gap-2 mt-8">
                    {contentPoints.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentSlide
                            ? 'bg-primary w-8'
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4 mt-12">
            <motion.button
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                currentSlide === 0
                  ? 'opacity-50 cursor-not-allowed border-border'
                  : 'border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary'
              }`}
            >
              {isRtl ? (
                <>
                  <span>{isRtl ? 'السابق' : 'Previous'}</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isRtl ? 'السابق' : 'Previous'}</span>
                </>
              )}
            </motion.button>

            <span className="text-sm text-muted-foreground">
              {currentSlide + 1} / {contentPoints.length}
            </span>

            <motion.button
              onClick={handleNext}
              disabled={currentSlide === contentPoints.length - 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                currentSlide === contentPoints.length - 1
                  ? 'opacity-50 cursor-not-allowed border-border'
                  : 'border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary'
              }`}
            >
              {isRtl ? (
                <>
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isRtl ? 'التالي' : 'Next'}</span>
                </>
              ) : (
                <>
                  <span>{isRtl ? 'التالي' : 'Next'}</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-muted/30 border-t border-border">
        <div className="container text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            © 2024 {isRtl ? 'منصة PIXEL' : 'PIXEL Platform'}
          </p>
        </div>
      </footer>
    </div>
  );
}
