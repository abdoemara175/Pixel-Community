import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import { educationalContent } from '@/lib/educationalContent';
import { Bookmark, BookOpen, Trash2, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function BookmarksPage() {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const isRtl = language === 'ar';

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  useEffect(() => {
    if (!profile) return;
    const saved = localStorage.getItem(`pixel_bookmarks_${profile.id}`);
    if (saved) {
      try {
        setBookmarkedIds(JSON.parse(saved));
      } catch {
        // ignore
      }
    } else {
      // Default sample bookmarks
      setBookmarkedIds(['ux-foundations', 'design-thinking-process', 'figma-auto-layout-variants']);
    }
  }, [profile]);

  const handleRemoveBookmark = (topicId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = bookmarkedIds.filter((id) => id !== topicId);
    setBookmarkedIds(updated);
    if (profile) {
      localStorage.setItem(`pixel_bookmarks_${profile.id}`, JSON.stringify(updated));
    }
    toast.success(isRtl ? 'تم إزالة الدرس من المحفوظات' : 'Topic removed from bookmarks');
  };

  // Find all topic objects from educationalContent matching saved IDs
  const allTopics = educationalContent.sections.flatMap((s) => s.topics);
  const bookmarkedTopics = allTopics.filter((t) => bookmarkedIds.includes(t.id));

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-24 text-center">
          <p className="text-muted-foreground">{isRtl ? 'يرجى تسجيل الدخول لعرض المحفوظات' : 'Please sign in to view bookmarks'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Banner */}
      <section className="pt-20 md:pt-24 pb-8 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-background border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-card/90 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-emerald-500/20 shrink-0">
                📌
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-extrabold flex items-center gap-1">
                    <Bookmark className="w-3.5 h-3.5" />
                    {bookmarkedTopics.length} {isRtl ? 'مواضيع محفوظة' : 'Saved Topics'}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                  {isRtl ? 'الدروس المحفوظة للمراجعة' : 'Saved Bookmarked Topics'}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {isRtl ? 'جميع الدروس والمواضيع التي قمت بحفظها للرجوع إليها في أي وقت' : 'All topics you bookmarked for quick revision anytime'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookmarked Topics List */}
      <section className="py-8 md:py-12">
        <div className="container max-w-5xl space-y-6">
          {bookmarkedTopics.length === 0 ? (
            <div className="bg-card border border-border rounded-3xl p-12 text-center space-y-4">
              <Bookmark className="w-12 h-12 text-muted-foreground mx-auto" />
              <h3 className="text-lg font-bold text-foreground">
                {isRtl ? 'لا توجد دروس محفوظة حالياً' : 'No saved topics yet'}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isRtl ? 'يمكنك حفظ أي درس أثناء تصفحه بالضغط على أيقونة الحفظ' : 'You can bookmark any topic while reading to save it here'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookmarkedTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setLocation(`/topics/${topic.id}`)}
                  className="bg-card border border-border/80 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {topic.id}
                      </span>

                      <button
                        onClick={(e) => handleRemoveBookmark(topic.id, e)}
                        title={isRtl ? 'إزالة من المحفوظات' : 'Remove bookmark'}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors rounded-xl hover:bg-muted cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {isRtl ? topic.titleAr : topic.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 font-medium">
                      {topic.content.concept}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
                    <span>{isRtl ? 'اقرأ الدرس الآن' : 'Read Topic Now'}</span>
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
