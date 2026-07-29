import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Save, Edit3, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface EditTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: any;
  onSave: (updatedTopic: any) => void;
}

export default function EditTopicModal({ isOpen, onClose, topic, onSave }: EditTopicModalProps) {
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const [titleAr, setTitleAr] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    if (topic) {
      setTitleAr(topic.titleAr || '');
      setTitleEn(topic.titleEn || '');
      setContent(topic.content ? { ...topic.content } : {});
    }
  }, [topic]);

  if (!isOpen || !topic) return null;

  const handleFieldChange = (key: string, value: string) => {
    setContent((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...topic,
      titleAr,
      titleEn,
      content,
    };
    onSave(updated);
    toast.success(isRtl ? 'تم حفظ وتحديث الدرس بنجاح!' : 'Topic updated successfully!');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-card border border-border rounded-3xl p-6 md:p-8 shadow-2xl overflow-y-auto"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
              <Edit3 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-foreground">
                {isRtl ? 'تعديل محتوى الدرس (Admin CMS Editor)' : 'Edit Topic Content (Admin CMS)'}
              </h2>
              <p className="text-xs text-muted-foreground font-medium">
                {isRtl ? 'قم بتحديث العناوين، الشرح، والأمثلة للتغيير المباشر في الموقع' : 'Update topic titles, explanations and examples'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Titles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  {isRtl ? 'عنوان الدرس بالعربي' : 'Arabic Title'}
                </label>
                <input
                  type="text"
                  value={titleAr}
                  onChange={(e) => setTitleAr(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs font-bold outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  {isRtl ? 'عنوان الدرس بالإنجليزي' : 'English Title'}
                </label>
                <input
                  type="text"
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs font-bold outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Content Fields */}
            <div className="space-y-4 pt-2 border-t border-border">
              <p className="text-xs font-black text-primary flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {isRtl ? 'تفاصيل ومكونات الدرس التعليمي:' : 'Topic Content Blocks:'}
              </p>

              {[
                { key: 'introduction', labelAr: 'المقدمة', labelEn: 'Introduction' },
                { key: 'concept', labelAr: 'المفهوم الأساسي', labelEn: 'Core Concept' },
                { key: 'whyItMatters', labelAr: 'لماذا هذا مهم؟', labelEn: 'Why It Matters' },
                { key: 'breakdown', labelAr: 'التفصيل والشرح', labelEn: 'Breakdown' },
                { key: 'example', labelAr: 'مثال توضيحي', labelEn: 'Real Example' },
                { key: 'badVsGood', labelAr: 'مقارنة سيئ vs جيد', labelEn: 'Bad vs Good' },
                { key: 'commonMistakes', labelAr: 'أخطاء شائعة', labelEn: 'Common Mistakes' },
                { key: 'practicalTips', labelAr: 'نصائح عملية', labelEn: 'Practical Tips' },
                { key: 'miniActivity', labelAr: 'تمرين سريع', labelEn: 'Mini Activity' },
                { key: 'summary', labelAr: 'الخلاصة', labelEn: 'Summary' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs font-bold text-foreground mb-1">
                    {isRtl ? field.labelAr : field.labelEn}
                  </label>
                  <textarea
                    rows={2}
                    value={content[field.key] || ''}
                    onChange={(e) => handleFieldChange(field.key, e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-border bg-background text-foreground text-xs font-medium outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-border text-xs font-bold text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                {isRtl ? 'إلغاء' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-lg hover:bg-primary/90 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>{isRtl ? 'حفظ التعديلات' : 'Save Changes'}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
