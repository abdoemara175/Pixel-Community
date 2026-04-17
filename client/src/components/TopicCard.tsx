import { useState } from 'react';
import { ChevronDown, Clock, BookOpen, Lightbulb, Eye, Zap, CheckCircle, MessageCircle, Award, X, ExternalLink } from 'lucide-react';
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
  const isRtl = language === 'ar';

  return (
    <div
      onClick={onClick}
      className={`topic-card p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isActive ? 'ring-2 ring-offset-2' : ''
      }`}
      style={isActive ? { outlineColor: trackColor, outlineStyle: 'solid', outlineWidth: '2px', outlineOffset: '2px' } : {}}
    >
      {/* Step Header - Badge as Main Title */}
      <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-semibold ${getStepTypeColor(step.type)} ${isRtl ? 'flex-row-reverse' : ''}`}>
          {getStepIcon(step.type)}
          {getStepTypeLabel(step.type, language)}
        </div>
      </div>

      {/* Step Content */}
      <div className={`text-foreground text-sm leading-relaxed line-clamp-3 mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>
        {step.content}
      </div>

      {/* Step Number Indicator */}
      <div className={`flex items-center gap-2 text-xs text-muted-foreground mb-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
          style={{ backgroundColor: trackColor }}
        >
          {index + 1}
        </div>
        <span>{t('step')} {index + 1}</span>
      </div>

      {/* Progress Indicator */}
      <div className={`flex items-center justify-between text-xs text-muted-foreground ${isRtl ? 'flex-row-reverse' : ''}`}>
        <span>{t('step')} {index + 1} {t('of')} {totalSteps}</span>
        <div className={`flex gap-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
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

  return (
    <div className="space-y-6">
      {/* Full Step Card */}
      <div className={`${getStepTypeColor(step.type)} rounded-lg p-8 border-2 ${isRtl ? 'text-right' : 'text-left'}`}>
        {/* Header - Badge as Main Title */}
        <div className={`flex items-center gap-4 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 text-lg font-bold ${getStepTypeColor(step.type)} ${isRtl ? 'flex-row-reverse' : ''}`}>
            {getStepIcon(step.type)}
            {getStepTypeLabel(step.type, language)}
          </div>
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: trackColor }}
          >
            {index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="text-foreground text-base leading-relaxed whitespace-pre-wrap mb-6">
          {step.content}
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className={`flex items-center justify-between text-sm font-medium ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span>{t('progress')}</span>
            <span>{Math.round(((index + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-card/50 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 rounded-full ${isRtl ? 'float-right' : ''}`}
              style={{
                width: `${((index + 1) / totalSteps) * 100}%`,
                backgroundColor: trackColor,
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className={`flex items-center justify-between gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <button
          onClick={onPrev}
          disabled={index === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium ${isRtl ? 'flex-row-reverse' : ''}`}
        >
          {isRtl ? '← ' : '← '}{t('previousStep')}
        </button>

        <div className={`flex gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === index
                  ? 'bg-primary'
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
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}
          style={{ backgroundColor: trackColor }}
        >
          {t('nextStep')}{isRtl ? ' →' : ' →'}
        </button>
      </div>

      {/* Completion Message */}
      {index === totalSteps - 1 && (
        <div className="bg-green-50 dark:bg-green-950 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
          <p className="text-green-700 dark:text-green-300 font-semibold text-lg">
            ✓ {t('congratsTopic')}
          </p>
          <p className="text-green-600 dark:text-green-400 text-sm mt-2">
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
  const isRtl = language === 'ar';

  const currentStep = topic.steps[currentStepIndex];
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
    <div className={`bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-lg ring-1 ring-border' : 'hover:border-primary/50 hover:shadow-md'}`}>
      {/* Card Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`p-6 cursor-pointer flex items-center justify-between hover:bg-muted/30 transition-colors ${isRtl ? 'flex-row-reverse' : ''}`}
      >
        <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
            {topic.emoji}
          </div>
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <h3 className="text-xl font-bold text-foreground">{topic.title}</h3>
            <div className={`flex items-center gap-3 text-sm text-muted-foreground mt-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {topic.estimatedTime} {t('minutes')}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {topic.steps.length} {t('steps')}
              </span>
            </div>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 border-t border-border bg-muted/10">
          <p className={`text-muted-foreground mb-8 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
            {topic.description}
          </p>

          {/* View Mode Toggle */}
          <div className={`flex items-center justify-between mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className={`flex p-1 bg-muted rounded-lg ${isRtl ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  viewMode === 'grid' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('gridView')}
              </button>
              <button
                onClick={() => setViewMode('full')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  viewMode === 'full' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('fullView')}
              </button>
            </div>
            <Link href={`/track/${topic.trackId}/topic/${topic.id}`}>
              <a className={`text-sm font-medium text-primary hover:underline flex items-center gap-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
                {t('viewInSeparatePage')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Link>
          </div>

          {/* Steps Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          ) : (
            <StepFullView
              step={currentStep}
              index={currentStepIndex}
              totalSteps={totalSteps}
              trackColor={trackColor}
              onNext={handleNextStep}
              onPrev={handlePreviousStep}
              language={language}
            />
          )}
        </div>
      )}
    </div>
  );
}
