/**
 * TopicCard Component - PIXEL UX Learning Platform
 * 
 * Displays a single topic with:
 * - Title and emoji
 * - Description
 * - Estimated time
 * - Click to expand and view steps
 * - Step-by-step content reveal
 */

import { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';
import type { Topic } from '@/lib/content';

interface TopicCardProps {
  topic: Topic;
  trackColor: string;
}

export default function TopicCard({ topic, trackColor }: TopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStep = topic.steps[currentStepIndex];
  const totalSteps = topic.steps.length;
  const progress = ((currentStepIndex + 1) / totalSteps) * 100;

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

  return (
    <div className="topic-card p-6 mb-6 animate-slide-in">
      {/* Header */}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          setCurrentStepIndex(0);
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
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                الخطوة {currentStepIndex + 1} من {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: trackColor }}
              >
                {currentStepIndex + 1}
              </div>
              <h4 className="text-lg font-semibold text-foreground">{currentStep.title}</h4>
            </div>
            <p className="text-foreground leading-relaxed">{currentStep.content}</p>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {currentStep.type === 'introduction' && 'مقدمة'}
              {currentStep.type === 'concept' && 'مفهوم'}
              {currentStep.type === 'example' && 'مثال'}
              {currentStep.type === 'activity' && 'نشاط'}
              {currentStep.type === 'summary' && 'خلاصة'}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePreviousStep}
              disabled={currentStepIndex === 0}
              className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              السابق
            </button>

            <div className="flex gap-2">
              {topic.steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStepIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStepIndex
                      ? 'bg-primary'
                      : index < currentStepIndex
                        ? 'bg-primary/50'
                        : 'bg-border'
                  }`}
                  aria-label={`الخطوة ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextStep}
              disabled={currentStepIndex === totalSteps - 1}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              التالي
            </button>
          </div>

          {/* Completion Message */}
          {currentStepIndex === totalSteps - 1 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-700 font-medium">
                ✓ مبروك! لقد أكملت هذا الموضوع بنجاح
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
