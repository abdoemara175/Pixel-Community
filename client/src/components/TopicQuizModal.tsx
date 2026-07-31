import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle2, XCircle, Trophy, HelpCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { getQuizForTopic, type TopicQuiz } from '@/lib/quizData';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface TopicQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicId: string;
  topicTitleAr?: string;
  topicTitleEn?: string;
  onQuizPassed: () => void;
}

export const TopicQuizModal: React.FC<TopicQuizModalProps> = ({
  isOpen,
  onClose,
  topicId,
  topicTitleAr,
  topicTitleEn,
  onQuizPassed,
}) => {
  const { language } = useLanguage();
  const { user } = useAuth();
  const isAr = language === 'ar';

  const quiz: TopicQuiz = getQuizForTopic(topicId, topicTitleAr, topicTitleEn);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQ = quiz.questions[currentIndex];
  const isLast = currentIndex === quiz.questions.length - 1;

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    quiz.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
    const calculatedPercentage = Math.round((correctCount / quiz.questions.length) * 100);
    setScore(calculatedPercentage);
    setIsSubmitted(true);

    if (calculatedPercentage >= quiz.passingScore) {
      toast.success(
        isAr
          ? `🎉 مبروك! لقد اجتزت التحدي بنجاح بمعدل ${calculatedPercentage}%!`
          : `🎉 Congratulations! Passed with ${calculatedPercentage}%!`
      );

      // Save Achievement locally
      const savedAchievements = JSON.parse(localStorage.getItem('pixel_achievements') || '[]');
      const newAchievement = {
        topicId,
        badge_title: isAr ? `مبدع: ${topicTitleAr || topicId}` : `Master: ${topicTitleEn || topicId}`,
        unlocked_at: new Date().toISOString(),
      };
      if (!savedAchievements.some((a: any) => a.topicId === topicId)) {
        savedAchievements.push(newAchievement);
        localStorage.setItem('pixel_achievements', JSON.stringify(savedAchievements));
      }

      onQuizPassed();
    } else {
      toast.error(
        isAr
          ? `لم تتجاوز الاختبار (نسبتك ${calculatedPercentage}%، المطلوب ${quiz.passingScore}%). أعد المحاولة وقراءة المفاهيم بتركيز!`
          : `Did not pass (${calculatedPercentage}%, required ${quiz.passingScore}%). Review principles and try again!`
      );
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card text-card-foreground border border-border shadow-2xl p-6 rounded-2xl">
        <DialogHeader dir={isAr ? 'rtl' : 'ltr'}>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                {isAr ? quiz.titleAr : quiz.titleEn}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                {isAr
                  ? `اختبار جاد لقياس استيعابك للمفاهيم (درجة النجاح المطلوب: ${quiz.passingScore}%)`
                  : `Challenging quiz to verify concept mastery (Passing score: ${quiz.passingScore}%)`}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {!isSubmitted ? (
          <div className="space-y-6 mt-4" dir={isAr ? 'rtl' : 'ltr'}>
            {/* Question Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                <span>
                  {isAr ? `السؤال ${currentIndex + 1} من ${quiz.questions.length}` : `Question ${currentIndex + 1} of ${quiz.questions.length}`}
                </span>
                <span>
                  {Math.round(((currentIndex + 1) / quiz.questions.length) * 100)}%
                </span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / quiz.questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Question */}
            <div className="p-5 bg-secondary/40 rounded-xl border border-border/50">
              <h3 className="text-lg font-bold text-foreground leading-relaxed flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{isAr ? currentQ.questionAr : currentQ.questionEn}</span>
              </h3>

              {/* Options */}
              <div className="space-y-3 mt-4">
                {(isAr ? currentQ.optionsAr : currentQ.optionsEn).map((opt, idx) => {
                  const isSelected = selectedAnswers[currentQ.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQ.id, idx)}
                      className={`w-full text-start p-4 rounded-xl border transition-all text-sm font-medium flex items-center gap-3 ${
                        isSelected
                          ? 'border-primary bg-primary/10 text-primary font-semibold shadow-sm'
                          : 'border-border bg-card hover:bg-secondary/60 text-foreground'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border text-xs font-bold shrink-0 ${
                          isSelected
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-muted-foreground/40 text-muted-foreground'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-2">
              <Button
                variant="outline"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="gap-2"
              >
                {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                {isAr ? 'السؤال السابق' : 'Previous'}
              </Button>

              {!isLast ? (
                <Button
                  disabled={selectedAnswers[currentQ.id] === undefined}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isAr ? 'السؤال التالي' : 'Next'}
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Button>
              ) : (
                <Button
                  disabled={Object.keys(selectedAnswers).length < quiz.questions.length}
                  onClick={calculateScore}
                  className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                >
                  <Award className="w-4 h-4" />
                  {isAr ? 'إنهاء وحساب النتيجة' : 'Submit & Calculate Result'}
                </Button>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Results View */
          <div className="space-y-6 mt-4 text-center" dir={isAr ? 'rtl' : 'ltr'}>
            <div
              className={`p-6 rounded-2xl border ${
                score >= quiz.passingScore
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400'
              }`}
            >
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-3 bg-card shadow-md">
                {score >= quiz.passingScore ? (
                  <Trophy className="w-8 h-8 text-emerald-500" />
                ) : (
                  <XCircle className="w-8 h-8 text-rose-500" />
                )}
              </div>
              <h2 className="text-2xl font-extrabold">
                {score >= quiz.passingScore
                  ? isAr
                    ? 'مبروك! اجتزت التحدي بنجاح 🎓'
                    : 'Passed Successfully! 🎓'
                  : isAr
                  ? 'لم تتجاوز درجة النجاح ❌'
                  : 'Required Score Not Reached ❌'}
              </h2>
              <p className="text-3xl font-black mt-2">
                {score}%
              </p>
              <p className="text-sm mt-1 opacity-90">
                {score >= quiz.passingScore
                  ? isAr
                    ? 'تم فتح الموضوع التالي بنجاح وحفظ الشارة في ملفك الإنجازي!'
                    : 'Next topic unlocked & achievement badge awarded!'
                  : isAr
                  ? `الدرجة المطلوبة هي ${quiz.passingScore}%. ننصح بإعادة قراءة الشرح والمحاولة مجدداً.`
                  : `Required score is ${quiz.passingScore}%. Please review the topic and try again.`}
              </p>
            </div>

            {/* Answer Feedback Breakdown */}
            <div className="text-start space-y-4 max-h-60 overflow-y-auto p-3 bg-secondary/20 rounded-xl border border-border/50">
              <h4 className="text-sm font-bold text-foreground mb-2">
                {isAr ? 'مراجعة الإجابات التفاعلية:' : 'Answer Review:'}
              </h4>
              {quiz.questions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div key={q.id} className="p-3 rounded-lg border border-border bg-card text-xs space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-foreground">
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      )}
                      <span>
                        {idx + 1}. {isAr ? q.questionAr : q.questionEn}
                      </span>
                    </div>
                    <p className="text-muted-foreground ps-6">
                      {isAr ? q.explanationAr : q.explanationEn}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button variant="outline" onClick={handleReset}>
                {isAr ? 'إعادة الاختبار' : 'Retry Quiz'}
              </Button>
              {score >= quiz.passingScore ? (
                <Button onClick={onClose} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                  {isAr ? 'الانتقال للتعلم' : 'Continue Learning'}
                </Button>
              ) : (
                <Button onClick={onClose} variant="secondary">
                  {isAr ? 'إغلاق ومراجعة الشرح' : 'Close & Review'}
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
