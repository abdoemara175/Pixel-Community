import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { educationalContent } from '@/lib/educationalContent';
import { Search, X, BookOpen, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle global shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Flatten all topics with section meta
  const allTopics = educationalContent.sections.flatMap((section) =>
    section.topics.map((t) => ({
      ...t,
      sectionNameAr: section.nameAr,
      sectionNameEn: section.nameEn,
      sectionColor: section.color,
      sectionEmoji: section.emoji,
    }))
  );

  // Filter topics based on search query
  const filteredTopics = query.trim()
    ? allTopics.filter((t) => {
        const q = query.toLowerCase();
        return (
          t.titleAr.toLowerCase().includes(q) ||
          t.titleEn.toLowerCase().includes(q) ||
          t.content.concept.toLowerCase().includes(q) ||
          t.sectionNameAr.toLowerCase().includes(q)
        );
      })
    : allTopics.slice(0, 6); // default show top 6 topics

  // Keyboard navigation within list
  const handleKeyDownInMenu = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(filteredTopics.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredTopics.length) % Math.max(filteredTopics.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredTopics[selectedIndex]) {
        handleSelect(filteredTopics[selectedIndex].id);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (topicId: string) => {
    setLocation(`/topics/${topicId}`);
    onClose();
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[99999] flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -15 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-card/98 border border-border/80 rounded-3xl shadow-2xl overflow-hidden my-auto"
          onKeyDown={handleKeyDownInMenu}
        >
          {/* Input Bar */}
          <div className="p-4 border-b border-border/60 flex items-center gap-3 bg-muted/30">
            <Search className="w-5 h-5 text-primary shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder={isRtl ? 'ابحث عن أي درس أو مفهوم تصميمي... (Ctrl + K)' : 'Search any topic or UX term... (Ctrl + K)'}
              className="w-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm font-medium outline-none"
            />
            {query ? (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold bg-muted border border-border/80 text-muted-foreground rounded-md">
                ESC
              </span>
            )}
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-3 space-y-1">
            {filteredTopics.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground space-y-2">
                <Search className="w-8 h-8 mx-auto text-muted-foreground/50" />
                <p className="text-xs font-bold">
                  {isRtl ? 'لم يتم العثور على دروس تظابق بحثك' : 'No topics match your search query'}
                </p>
              </div>
            ) : (
              filteredTopics.map((topic, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={topic.id}
                    onClick={() => handleSelect(topic.id)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`p-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-primary/10 border border-primary/30 text-primary shadow-sm'
                        : 'hover:bg-muted/50 text-foreground border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 border"
                        style={{
                          backgroundColor: `${topic.sectionColor}15`,
                          borderColor: `${topic.sectionColor}30`,
                        }}
                      >
                        {topic.sectionEmoji}
                      </div>

                      <div className="space-y-0.5 overflow-hidden">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] font-extrabold px-2 py-0.5 rounded-md border"
                            style={{
                              backgroundColor: `${topic.sectionColor}15`,
                              borderColor: `${topic.sectionColor}30`,
                              color: topic.sectionColor,
                            }}
                          >
                            {isRtl ? topic.sectionNameAr : topic.sectionNameEn}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold truncate">
                          {isRtl ? topic.titleAr : topic.titleEn}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 text-muted-foreground">
                      <span className="text-[10px] font-bold hidden sm:inline">
                        {isRtl ? 'افتح' : 'Open'}
                      </span>
                      {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts hint */}
          <div className="p-3 bg-muted/40 border-t border-border/50 text-[11px] text-muted-foreground flex items-center justify-between font-bold px-4">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              {isRtl ? 'استخدم الأسهم 🪟 للتنقل و Enter للاختيار' : 'Use arrows to navigate & Enter to select'}
            </span>
            <span>{educationalContent.sections.reduce((acc, s) => acc + s.topics.length, 0)} {isRtl ? 'دروس متاحة' : 'Topics'}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
