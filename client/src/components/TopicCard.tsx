/**
 * TopicCard Component - PIXEL UX Learning Platform
 * 
 * Displays a single topic with:
 * - Title and emoji
 * - Description
 * - Estimated time
 * - Click to expand and view steps as cards
 * - Step-by-step content reveal in card format
 */

import { useState } from 'react';
import { ChevronDown, Clock, BookOpen, Lightbulb, Eye, Zap, CheckCircle, MessageCircle, Award, X } from 'lucide-react';
import type { Topic, Step } from '@/lib/content';

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

// Get step type label in Arabic
const getStepTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    introduction: 'مقدمة',
    concept: 'المفهوم',
    'why-it-matters': 'لماذا يهم؟',
    breakdown: 'التفاصيل',
    example: 'مثال عملي',
    'bad-vs-good': 'جيد مقابل سيء',
    mistakes: 'أخطاء شائعة',
    tips: 'نصائح عملية',
    activity: 'نشاط صغير',
    summary: 'الخلاصة',
  };
  return labels[type] || type;
};

// Get step type color
const getStepTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    introduction: 'bg-blue-50 border-blue-200 text-blue-700',
    concept: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    'why-it-matters': 'bg-emerald-50 border-emerald-200 text-emerald-700',
    breakdown: 'bg-slate-50 border-slate-200 text-slate-700',
    example: 'bg-cyan-50 border-cyan-200 text-cyan-700',
    'bad-vs-good': 'bg-amber-50 border-amber-200 text-amber-700',
    mistakes: 'bg-rose-50 border-rose-200 text-rose-700',
    tips: 'bg-teal-50 border-teal-200 text-teal-700',
    activity: 'bg-orange-50 border-orange-200 text-orange-700',
    summary: 'bg-pink-50 border-pink-200 text-pink-700',
  };
  return colors[type] || 'bg-gray-50 border-gray-200 text-gray-700';
};

// Step Card Component
const StepCard = ({ step, index, totalSteps, trackColor, isActive, onClick }: {
  step: Step;
  index: number;
  totalSteps: number;
  trackColor: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`topic-card p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isActive ? 'ring-2 ring-offset-2' : ''
      }`}
      style={isActive ? { outlineColor: trackColor, outlineStyle: 'solid', outlineWidth: '2px', outlineOffset: '2px' } : {}}
    >
      {/* Step Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
          style={{ backgroundColor: trackColor }}
        >
          {index + 1}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-foreground mb-1">{step.title}</h4>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${getStepTypeColor(step.type)}`}>
            {getStepIcon(step.type)}
            {getStepTypeLabel(step.type)}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="text-foreground text-sm leading-relaxed line-clamp-3 mb-4">
        {step.content}
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>الخطوة {index + 1} من {totalSteps}</span>
        <div className="flex gap-1">
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
const StepFullView = ({ step, index, totalSteps, trackColor, onNext, onPrev }: {
  step: Step;
  index: number;
  totalSteps: number;
  trackColor: string;
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div className="space-y-6">
      {/* Full Step Card */}
      <div className={`${getStepTypeColor(step.type)} rounded-lg p-8 border-2`}>
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0"
            style={{ backgroundColor: trackColor }}
          >
            {index + 1}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 font-medium">
              {getStepIcon(step.type)}
              {getStepTypeLabel(step.type)}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-foreground text-base leading-relaxed whitespace-pre-wrap mb-6">
          {step.content}
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>التقدم</span>
            <span>{Math.round(((index + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden">
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

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onPrev}
          disabled={index === 0}
          className="px-6 py-3 rounded-lg border-2 border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          ← السابق
        </button>

        <div className="flex gap-2">
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
              aria-label={`الخطوة ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={index === totalSteps - 1}
          className="px-6 py-3 rounded-lg font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          style={{ backgroundColor: trackColor }}
        >
          التالي →
        </button>
      </div>

      {/* Completion Message */}
      {index === totalSteps - 1 && (
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <p className="text-green-700 font-semibold text-lg">
            ✓ مبروك! لقد أكملت هذا الموضوع بنجاح
          </p>
          <p className="text-green-600 text-sm mt-2">
            انتقل إلى الموضوع التالي لمواصلة رحلة التعلم
          </p>
        </div>
      )}
    </div>
  );
};

export default function TopicCard({ topic, trackColor }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'full'>('grid'); // 'grid' or 'full'

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
    <div className="topic-card p-6 mb-6 animate-slide-in">
      {/* Header */}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          setCurrentStepIndex(0);
          setViewMode('grid');
        }}
        className="w-full text-left flex items-start justify-between gap-4 hover:opacity-80 transition-opacity"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{topic.emoji}</span>
            <h3 className="text-2xl font-bold text-foreground">{topic.title}</h3>
          </div>
          <p className="text-muted-foreground mb-3">{topic.description}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>وقت التعلم: {topic.estimatedTime} دقيقة</span>
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-primary transition-transform flex-shrink-0 mt-1 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border space-y-6">
          {/* View Mode Toggle */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              عرض شبكة
            </button>
            <button
              onClick={() => {
                setViewMode('full');
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'full'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              عرض كامل
            </button>
          </div>

          {/* Grid View - All Steps as Cards */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topic.steps.map((step, index) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={index}
                  totalSteps={totalSteps}
                  trackColor={trackColor}
                  isActive={index === currentStepIndex}
                  onClick={() => handleStepClick(index)}
                />
              ))}
            </div>
          )}

          {/* Full View - Single Step Expanded */}
          {viewMode === 'full' && (
            <StepFullView
              step={currentStep}
              index={currentStepIndex}
              totalSteps={totalSteps}
              trackColor={trackColor}
              onNext={handleNextStep}
              onPrev={handlePreviousStep}
            />
          )}
        </div>
      )}
    </div>
  );
}
