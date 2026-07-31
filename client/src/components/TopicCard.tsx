import { useState, useEffect } from 'react';
import { ChevronDown, Clock, BookOpen, Lightbulb, Eye, Zap, CheckCircle, MessageCircle, Award, X, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import type { Topic, Step } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, type Translations } from '@/lib/i18n';

interface TopicCardProps {
  topic: Topic;
  trackColor: string;
}

// Icon mapping for different step types
const getStepIcon = (type: string) => {
  switch (type) {
    case 'introduction':
      return <BookOpen className="w-5 h-5" />;
    case 'concept':
      return <Lightbulb className="w-5 h-5" />;
    case 'why-it-matters':
      return <CheckCircle className="w-5 h-5" />;
    case 'breakdown':
      return <ChevronDown className="w-5 h-5" />;
    case 'example':
      return <Eye className="w-5 h-5" />;
    case 'bad-vs-good':
      return <Zap className="w-5 h-5" />;
    case 'mistakes':
      return <X className="w-5 h-5" />;
    case 'tips':
      return <CheckCircle className="w-5 h-5" />;
    case 'activity':
      return <Zap className="w-5 h-5" />;
    case 'summary':
      return <Award className="w-5 h-5" />;
    default:
      return <MessageCircle className="w-5 h-5" />;
  }
};

// Get step type label based on language using i18n
const getStepTypeLabel = (type: string, language: 'ar' | 'en') => {
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

// Get step type color (light theme and dark theme compatible)
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

// Step Card Component
const StepCard = ({ step, index, totalSteps, trackColor, isActive, onClick, language }: {
  step: Step;
  index: number;
  totalSteps: number;
  trackColor: string;
  isActive: boolean;
  onClick: () => void;
  language: 'ar' | 'en';
}) => {
  const t = (key: keyof Translations) => getTranslation(language, key);

  return (
    <div
      onClick={onClick}
      className="card-base p-4 md:p-6 cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300"
      style={isActive ? { outlineColor: trackColor, outlineStyle: 'solid', outlineWidth: '2px', outlineOffset: '2px' } : {}}
    >
      {/* Step Header - Badge as Main Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border-2 text-xs md:text-sm font-semibold ${getStepTypeColor(step.type)}`}>
          {getStepIcon(step.type)}
          <span className="truncate">{getStepTypeLabel(step.type, language)}</span>
        </div>
      </div>

      {/* Step Content */}
      <div className="text-foreground text-xs md:text-sm leading-relaxed line-clamp-3 mb-4 text-start">
        {step.content}
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="truncate">{t('step')} {index + 1} {t('of')} {totalSteps}</span>
        <div className="flex gap-1 flex-shrink-0">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full transition-all"
              style={{
                width: i === index ? '12px' : '6px',
                backgroundColor: i <= index ? trackColor : '#e5e7eb',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Full Step View Component
const StepFullView = ({ step, index, totalSteps, trackColor, onNext, onPrev, language }: {
  step: Step;
  index: number;
  totalSteps: number;
  trackColor: string;
  onNext: () => void;
  onPrev: () => void;
  language: 'ar' | 'en';
}) => {
  const t = (key: keyof Translations) => getTranslation(language, key);
  const isRtl = language === 'ar';

  // Keyboard Navigation with Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight') {
        if (isRtl) onPrev();
        else onNext();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) onNext();
        else onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, totalSteps, isRtl, onNext, onPrev]);

  return (
    <div className="space-y-6">
      {/* Full Step Card */}
      <div className={`${getStepTypeColor(step.type)} rounded-xl p-6 md:p-8 border-2 text-start relative group shadow-sm`}>
        {/* Header - Badge as Main Title */}
        <div className="flex items-center justify-between mb-6">
          <div className={`inline-flex items-center gap-3 px-4 md:px-6 py-3 rounded-full border-2 text-base md:text-lg font-bold ${getStepTypeColor(step.type)}`}>
            {getStepIcon(step.type)}
            <span>{getStepTypeLabel(step.type, language)}</span>
          </div>

          <span className="text-xs font-semibold opacity-70">
            {t('step')} {index + 1} {t('of')} {totalSteps}
          </span>
        </div>

        {/* Content */}
        <div className="text-foreground text-base md:text-lg leading-relaxed whitespace-pre-wrap mb-6 font-medium">
          {step.content}
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>{t('progress')}</span>
            <span>{Math.round(((index + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-card/50 rounded-full h-3 overflow-hidden border border-border/30">
            <div
              className="h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((index + 1) / totalSteps) * 100}%`,
                backgroundColor: trackColor,
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons with prominent Arrows */}
      <div className="flex items-center justify-between gap-4 bg-card p-3 rounded-xl border border-border shadow-sm">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-border text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all font-bold text-sm md:text-base shadow-sm"
        >
          {isRtl ? <ArrowRight className="w-5 h-5 text-primary" /> : <ArrowLeft className="w-5 h-5 text-primary" />}
          <span>{t('previous')}</span>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                i === index
                  ? 'bg-primary scale-125'
                  : i < index
                    ? 'bg-primary/50'
                    : 'bg-border'
              }`}
              aria-label={`${t('step')} ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={index === totalSteps - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-primary-foreground hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm md:text-base shadow-md"
          style={{ backgroundColor: trackColor }}
        >
          <span>{t('next')}</span>
          {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
        </button>
      </div>

      {/* Completion Message */}
      {index === totalSteps - 1 && (
        <div className="bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl p-4 md:p-6 text-center shadow-sm">
          <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
          <p className="text-emerald-800 dark:text-emerald-200 font-bold text-lg">
            ✓ {t('congratsTopic')}
          </p>
          <p className="text-emerald-700 dark:text-emerald-300 text-sm mt-1">
            {t('nextTopicPrompt')}
          </p>
        </div>
      )}
    </div>
  );
};

export default function TopicCard({ topic, trackColor }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'full'>('grid');
  const { language } = useLanguage();
  const t = (key: keyof Translations) => getTranslation(language, key);

  const totalSteps = topic.steps.length;

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
    setViewMode('full');
  };

  return (
    <div className={`card-base border border-border overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg ring-1 ring-border' : 'hover:border-primary/50 hover:shadow-md'}`}>
      {/* Card Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 md:p-6 cursor-pointer flex items-center justify-between hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-3 md:gap-4 min-w-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-muted flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
            {topic.emoji}
          </div>
          <div className="min-w-0">
            <h3 className="text-base md:text-lg font-bold text-foreground truncate">{topic.title}</h3>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{topic.estimatedTime} {t('minutes')}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <BookOpen className="w-3 h-3" />
                <span>{topic.steps.length} {t('steps')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={`/track/${topic.trackId}/topic/${topic.id}`}>
            <button
              onClick={(e) => e.stopPropagation()}
              className="hidden sm:flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              {t('viewInSeparatePage')}
              <ExternalLink className="w-3 h-3" />
            </button>
          </Link>
          <div className={`p-2 rounded-full hover:bg-muted transition-colors ${isExpanded ? 'rotate-180' : ''}`}>
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 md:p-6 border-t border-border bg-muted/10">
          {/* View Mode Toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex bg-muted p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${viewMode === 'grid' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {t('gridView')}
              </button>
              <button
                onClick={() => setViewMode('full')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${viewMode === 'full' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {t('fullView')}
              </button>
            </div>
            <Link href={`/track/${topic.trackId}/topic/${topic.id}`}>
              <button className="sm:hidden flex items-center gap-1 text-xs font-semibold text-primary">
                <ExternalLink className="w-3 h-3" />
              </button>
            </Link>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topic.steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  totalSteps={totalSteps}
                  trackColor={trackColor}
                  isActive={currentStepIndex === index}
                  onClick={() => handleStepClick(index)}
                  language={language}
                />
              ))}
            </div>
          )}

          {/* Full View */}
          {viewMode === 'full' && (
            <div className="max-w-2xl mx-auto">
              <StepFullView
                step={topic.steps[currentStepIndex]}
                index={currentStepIndex}
                totalSteps={totalSteps}
                trackColor={trackColor}
                onNext={handleNextStep}
                onPrev={handlePreviousStep}
                language={language}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
