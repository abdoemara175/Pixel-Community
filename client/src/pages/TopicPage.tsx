/**
 * Topic Page - PIXEL UX Learning Platform
 * 
 * Displays full content of a specific topic
 * - Step-by-step content cards
 * - Navigation between steps
 * - Progress indicator
 * - Back navigation
 */

import Header from '@/components/Header';
import { getTracks } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, type Translations } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Step } from '@/lib/content';

interface TopicPageProps {
  params: {
    trackId: string;
    topicId: string;
  };
}

const getStepIcon = (type: string) => {
  const icons: Record<string, string> = {
    introduction: '📚',
    concept: '💡',
    'why-it-matters': '✅',
    breakdown: '📋',
    example: '👀',
    'bad-vs-good': '⚡',
    mistakes: '❌',
    tips: '💡',
    activity: '🎯',
    summary: '🏆',
  };
  return icons[type] || '📝';
};

const getStepTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    introduction: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
    concept: 'bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300',
    'why-it-matters': 'bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300',
    breakdown: 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300',
    example: 'bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300',
    'bad-vs-good': 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300',
    mistakes: 'bg-rose-50 dark:bg-rose-950 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300',
    tips: 'bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300',
    activity: 'bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300',
    summary: 'bg-pink-50 dark:bg-pink-950 border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-300',
  };
  return colors[type] || 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300';
};

export default function TopicPage({ params }: TopicPageProps) {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const t = (key: keyof Translations) => getTranslation(language, key);
  const tracks = getTracks(language);
  
  const track = tracks.find(tr => tr.id === params.trackId);
  const topic = track?.topics.find(tp => tp.id === params.topicId);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStepIndex]);

  if (!track || !topic) {
    return (
      <div className="min-h-screen bg-background pt-16 md:pt-20">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t('notFound')}</h1>
          <button
            onClick={() => setLocation('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            {t('backHome')}
          </button>
        </div>
      </div>
    );
  }

  const currentStep = topic.steps[currentStepIndex];
  const totalSteps = topic.steps.length;
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <Header />

      {/* Navigation Breadcrumb */}
      <div className="container py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <button
            onClick={() => setLocation('/')}
            className="hover:text-primary transition-colors"
          >
            {t('home')}
          </button>
          <span>/</span>
          <button
            onClick={() => setLocation(`/track/${params.trackId}`)}
            className="hover:text-primary transition-colors"
          >
            {track.title}
          </button>
          <span>/</span>
          <span className="text-foreground font-medium">{topic.title}</span>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {t('step')} {currentStepIndex + 1} {t('of')} {totalSteps}
              </span>
              <span className="font-semibold text-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-full"
                style={{ backgroundColor: track.color }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`${getStepTypeColor(currentStep.type)} rounded-lg p-8 md:p-12 border-2 space-y-6`}
            >
              {/* Step Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 text-white font-bold"
                style={{ backgroundColor: track.color }}
              >
                {getStepIcon(currentStep.type)}
              </div>
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                      {currentStep.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="prose dark:prose-invert max-w-none">
                <div className="text-foreground text-lg leading-relaxed whitespace-pre-wrap">
                  {currentStep.type === 'activity' ? (
                    <div className="bg-white/50 dark:bg-black/20 p-6 rounded-xl border-2 border-dashed border-primary/30 shadow-inner">
                      <p className="font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="text-2xl">🎯</span> {language === 'ar' ? 'نشاط تفاعلي:' : 'Interactive Activity:'}
                      </p>
                      {currentStep.content}
                      <div className="mt-6">
                        <textarea 
                          className="w-full p-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                          placeholder={language === 'ar' ? 'اكتب إجابتك هنا للتفكير...' : 'Write your answer here to reflect...'}
                          rows={3}
                        />
                      </div>
                    </div>
                  ) : (
                    currentStep.content.split('\n').map((line, i) => {
                      if (line.startsWith('✅')) {
                        return <p key={i} className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20 my-2">{line}</p>;
                      }
                      if (line.startsWith('❌')) {
                        return <p key={i} className="flex items-start gap-2 text-rose-600 dark:text-rose-400 font-medium bg-rose-500/10 p-3 rounded-lg border border-rose-500/20 my-2">{line}</p>;
                      }
                      if (line.startsWith('•')) {
                        return <li key={i} className="list-none flex items-start gap-2 my-1"><span className="text-primary">•</span> {line.substring(1).trim()}</li>;
                      }
                      return <p key={i} className="my-2">{line}</p>;
                    })
                  )}
                </div>
              </div>

              {/* Step Indicators */}
              <div className="flex gap-2 pt-6">
                {topic.steps.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentStepIndex(index)}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentStepIndex
                        ? 'bg-foreground'
                        : index < currentStepIndex
                          ? 'bg-foreground/50'
                          : 'bg-foreground/20'
                    }`}
                    aria-label={`${t('step')} ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Completion Message */}
          {isLastStep && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-green-50 dark:bg-green-950 border-2 border-green-200 dark:border-green-800 rounded-lg p-8 text-center mt-8"
            >
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <p className="text-green-700 dark:text-green-300 font-semibold text-lg mb-2">
                ✓ {language === 'ar' ? 'مبروك! لقد أكملت هذا الموضوع بنجاح' : 'Congratulations! You completed this topic successfully'}
              </p>
              <p className="text-green-600 dark:text-green-400 text-sm">
                {language === 'ar' ? 'انتقل إلى الموضوع التالي لمواصلة رحلة التعلم' : 'Move to the next topic to continue your learning journey'}
              </p>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className={`flex items-center justify-between gap-4 mt-12 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <motion.button
              initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={!isFirstStep ? { x: language === 'ar' ? 5 : -5 } : {}}
              onClick={handlePrev}
              disabled={isFirstStep}
              className={`px-6 py-3 rounded-lg border-2 border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              {language === 'ar' ? '→' : '←'}
              {t('previousStep')}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={!isLastStep ? { x: language === 'ar' ? -5 : 5 } : {}}
              onClick={handleNext}
              disabled={isLastStep}
              className={`px-6 py-3 rounded-lg font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              style={{ backgroundColor: track.color }}
            >
              {t('nextStep')}
              {language === 'ar' ? '←' : '→'}
            </motion.button>
          </div>

          {/* Back to Track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setLocation(`/track/${params.trackId}`)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              {language === 'ar' ? 'العودة إلى المواضيع' : 'Back to Topics'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 mt-20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t('copyright')}</p>
        </div>
      </footer>
    </div>
  );
}
