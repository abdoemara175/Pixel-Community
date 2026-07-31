import Header from '@/components/Header';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { educationalContent as pixelContent } from '@/lib/educationalContent';
import {
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Clock,
  Compass,
  Brain,
  Search,
  Users,
  Route,
  FolderTree,
  PenTool,
  Layers,
  CheckCircle2,
  Palette,
  Eye,
  Pipette,
  Type,
  LayoutGrid,
  Box,
  Library,
  Zap,
  HeartHandshake
} from 'lucide-react';

function getTopicIcon(topicId: string, titleEn: string) {
  const key = `${topicId} ${titleEn}`.toLowerCase();
  if (key.includes('color')) return Pipette;
  if (key.includes('type') || key.includes('font')) return Type;
  if (key.includes('found')) return Compass;
  if (key.includes('think') || key.includes('brain')) return Brain;
  if (key.includes('research')) return Search;
  if (key.includes('persona')) return Users;
  if (key.includes('journey') || key.includes('flow') || key.includes('map')) return Route;
  if (key.includes('architecture') || key.includes('ia')) return FolderTree;
  if (key.includes('wireframe')) return PenTool;
  if (key.includes('proto')) return Layers;
  if (key.includes('test') || key.includes('usab')) return CheckCircle2;
  if (key.includes('principle') || key.includes('visual')) return Eye;
  if (key.includes('grid') || key.includes('layout')) return LayoutGrid;
  if (key.includes('component')) return Box;
  if (key.includes('system')) return Library;
  if (key.includes('animat') || key.includes('micro') || key.includes('motion')) return Zap;
  if (key.includes('access') || key.includes('a11y')) return HeartHandshake;
  if (key.includes('bonus') || key.includes('tip')) return Sparkles;
  return BookOpen;
}

export default function SectionPage() {
  const [, setLocation] = useLocation();
  const { sectionId } = useParams<{ sectionId: string }>();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  // Ensure page resets scroll position to top when sectionId changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [sectionId]);

  const section = pixelContent.sections.find(
    (s) => s.id === sectionId || (sectionId === 'ux-ui' && s.id === 'integration') || (sectionId === 'integration' && s.id === 'integration')
  );

  if (!section) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {isRtl ? 'القسم غير موجود' : 'Section not found'}
          </h1>
          <button
            onClick={() => setLocation('/')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isRtl ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Header Section */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b border-border/60 relative overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none -z-10 opacity-30"
          style={{ backgroundColor: section.color }}
        />

        <div className="container">
          {/* Navigation Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs md:text-sm mb-6 text-muted-foreground font-medium">
            <button
              onClick={() => setLocation('/')}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              {isRtl ? 'الرئيسية' : 'Home'}
            </button>
            <span>/</span>
            <span className="text-foreground font-bold truncate">
              {language === 'ar' ? section.nameAr : section.nameEn}
            </span>
          </div>

          {/* Section Main Title Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-card/80 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Glowing Accent Stripe */}
            <div
              className="absolute top-0 right-0 left-0 h-1.5"
              style={{ backgroundColor: section.color }}
            />

            <div className="flex items-center gap-5">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl shadow-xl border border-white/10 shrink-0"
                style={{
                  backgroundColor: `${section.color}25`,
                  boxShadow: `0 10px 30px -8px ${section.color}40`,
                }}
              >
                {section.emoji}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-black tracking-wide border shadow-sm"
                    style={{
                      backgroundColor: `${section.color}15`,
                      borderColor: `${section.color}40`,
                      color: section.color,
                    }}
                  >
                    {section.topics.length} {isRtl ? 'مواضيع تعليمية' : 'Topics'}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  {language === 'ar' ? section.nameAr : section.nameEn}
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-medium max-w-xl leading-relaxed">
                  {language === 'ar' ? section.descriptionAr : section.descriptionEn}
                </p>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setLocation('/')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-border bg-card hover:bg-muted transition-all text-sm font-bold shadow-sm self-start md:self-auto cursor-pointer"
            >
              {isRtl ? (
                <>
                  <span>العودة للرئيسية</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4 text-primary" />
                  <span>Back to Home</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-black text-foreground flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>{isRtl ? 'دروس ومواضيع المسار' : 'Track Topics'}</span>
            </h2>

            <span className="text-xs md:text-sm font-bold text-muted-foreground">
              {isRtl ? `إجمالي ${section.topics.length} موضوع` : `Total ${section.topics.length} Topics`}
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {section.topics.map((topic, index) => {
              const TopicIcon = getTopicIcon(topic.id, topic.titleEn);
              return (
                <motion.div
                  key={topic.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => setLocation(`/topics/${topic.id}`)}
                  className="group cursor-pointer relative"
                >
                  {/* Ambient Glowing Backlight Effect on Hover */}
                  <div
                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-70 transition-all duration-500 blur-xl -z-10"
                    style={{ backgroundColor: section.color }}
                  />

                  <div
                    className="h-full rounded-3xl p-6 sm:p-8 transition-all duration-500 border-2 bg-card/90 backdrop-blur-xl flex flex-col justify-between shadow-md group-hover:shadow-2xl relative overflow-hidden"
                    style={{
                      borderColor: `${section.color}30`,
                    }}
                  >
                    <div>
                      {/* Header: Topic Contextual Icon & Topic Tag */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-white shadow-md transition-transform group-hover:scale-110 duration-300"
                          style={{ backgroundColor: section.color }}
                        >
                          <TopicIcon className="w-5.5 h-5.5" />
                        </div>

                        <span className="text-xs font-bold text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {isRtl ? `درس #${index + 1}` : `Topic #${index + 1}`}
                        </span>
                      </div>

                    {/* Topic Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {language === 'ar' ? topic.titleAr : topic.titleEn}
                    </h3>

                    {/* Topic Preview Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 font-medium">
                      {topic.content.concept}
                    </p>
                  </div>

                  {/* Read More Footer Pill */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold text-primary group-hover:underline flex items-center gap-1">
                      {isRtl ? 'اقرأ الدرس بالكامل' : 'Read Full Topic'}
                    </span>

                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: `${section.color}20`,
                        color: section.color,
                      }}
                    >
                      {isRtl ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-muted/30 border-t border-border">
        <div className="container text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            © 2024 {isRtl ? 'منصة PIXEL' : 'PIXEL Platform'}
          </p>
        </div>
      </footer>
    </div>
  );
}
