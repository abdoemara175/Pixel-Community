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
import { BookOpen, Lightbulb, CheckCircle, ChevronDown, Eye, Zap, X, Award, MessageCircle, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import type { Step } from '@/lib/content';

interface TopicPageProps {
  params: {
    trackId: string;
    topicId: string;
  };
}

const getStepIcon = (type: string) => {
  switch (type) {
    case 'introduction':
      return <BookOpen className="w-6 h-6" />;
    case 'concept':
      return <Lightbulb className="w-6 h-6" />;
    case 'why-it-matters':
      return <CheckCircle className="w-6 h-6" />;
    case 'breakdown':
      return <ChevronDown className="w-6 h-6" />;
    case 'example':
      return <Eye className="w-6 h-6" />;
    case 'bad-vs-good':
      return <Zap className="w-6 h-6" />;
    case 'mistakes':
      return <X className="w-6 h-6" />;
    case 'tips':
      return <CheckCircle className="w-6 h-6" />;
    case 'activity':
      return <Zap className="w-6 h-6" />;
    case 'summary':
      return <Award className="w-6 h-6" />;
    default:
      return <MessageCircle className="w-6 h-6" />;
  }
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

const getStepTypeLabel = (type: string, language: 'ar' | 'en' = 'en') => {
  const t = (key: keyof Translations) => getTranslation(language, key);
  const map: Record<string, keyof Translations> = {
    introduction: 'introduction',
    concept: 'concept',
    'why-it-matters': 'whyItMatters',
    breakdown: 'breakdown',
    example: 'example',
    'bad-vs-good': 'badVsGood',
    mistakes: 'commonMistakes',
    tips: 'practicalTips',
    activity: 'miniActivity',
    summary: 'summary',
  };
  const key = map[type];
  return key ? t(key) : type;
};

export default function TopicPage({ params }: TopicPageProps) {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const t = (key: keyof Translations) => getTranslation(language, key);
  const tracks = getTracks(language);
  const isRtl = language === 'ar';
  
  const track = tracks.find(tr => tr.id === params.trackId);
  const topic = track?.topics.find(tp => tp.id === params.topicId);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStepIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        if (isRtl) {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (event.key === 'ArrowLeft') {
        if (isRtl) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex, language, topic?.steps.length]);

  if (!track || !topic) {
    return (
      <div className="min-h-screen bg-background pt-16 md:pt-20">
        <Header />
        <div className="container py-12 md:py-20 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t('notFound')}</h1>
          <button
            onClick={() => setLocation('/')}
            className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base"
          >
            {isRtl ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
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
      <div className="container py-4 md:py-6">
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground overflow-x-auto"
        >
          <button
            onClick={() => setLocation('/')}
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            {t('home')}
          </button>
          <span className="text-muted-foreground">/</span>
          <button
            onClick={() => setLocation(`/track/${params.trackId}`)}
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            {track.title}
          </button>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium truncate">{topic.title}</span>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-3 md:py-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs md:text-sm">
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
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`${getStepTypeColor(currentStep.type)} rounded-lg p-6 md:p-8 lg:p-12 border-2 space-y-4 md:space-y-6 text-start`}
            >
              {/* Step Header - Badge as Main Title */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
                  <div className={`inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-full border-2 text-lg md:text-2xl lg:text-3xl font-bold ${getStepTypeColor(currentStep.type)}`}>
                    {getStepIcon(currentStep.type)}
                    <span className="truncate">{getStepTypeLabel(currentStep.type, language)}</span>
                  </div>
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-xl md:text-2xl flex-shrink-0 text-white font-bold"
                    style={{ backgroundColor: track.color }}
                  >
                    {currentStepIndex + 1}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="prose dark:prose-invert max-w-none text-sm md:text-base">
                <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {currentStep.type === 'activity' ? (
                    <div className="bg-white/50 dark:bg-black/20 p-4 md:p-6 rounded-xl border-2 border-dashed border-primary/30 shadow-inner">
                      <p className="font-bold text-primary mb-3 md:mb-4 flex items-center gap-2">
                        <span className="text-xl md:text-2xl">🎯</span> {t('interactiveActivity')}
                      </p>
                      {currentStep.content}
                      <div className="mt-4 md:mt-6">
                        <textarea 
                          className="w-full p-3 md:p-4 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all text-start text-sm md:text-base"
                          placeholder={t('activityPlaceholder')}
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
              <div className="flex gap-2 pt-4 md:pt-6 flex-wrap">
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
              className="bg-green-50 dark:bg-green-950 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 md:p-8 text-center mt-6 md:mt-8"
            >
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-600 dark:text-green-400 mx-auto mb-3 md:mb-4" />
              <p className="text-green-700 dark:text-green-300 font-semibold text-base md:text-lg mb-2">
                ✓ {t('congratsTopic')}
              </p>
              <p className="text-green-600 dark:text-green-400 text-sm md:text-base">
                {t('nextTopicPrompt')}
              </p>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 mt-8 md:mt-12">
            <button
              onClick={handlePrev}
              disabled={isFirstStep}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-border text-foreground font-semibold hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              {t('previousStep')}
            </button>
            <button
              onClick={() => setLocation('/')}
              className="px-4 md:px-6 py-2 md:py-3 text-muted-foreground font-medium hover:text-primary transition-colors text-sm md:text-base"
            >
              {t('backToTopics')}
            </button>
            <button
              onClick={handleNext}
              disabled={isLastStep}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 md:px-8 py-2 md:py-3 rounded-lg font-bold text-white shadow-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              style={{ backgroundColor: track.color }}
            >
              {t('nextStep')}
              {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-border mt-12 md:mt-20">
        <div className="container text-center">
          <p className="text-muted-foreground text-xs md:text-sm">
            {t('copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
