/**
 * Home Page - PIXEL UX Learning Platform
 * 
 * Main learning platform with:
 * - Hero section introducing the platform
 * - About/Vision section
 * - Learning journey roadmap
 * - Track sections with topics
 * - Footer
 */

import Header from '@/components/Header';
import TrackSection from '@/components/TrackSection';
import { tracks } from '@/lib/content';
import { ArrowRight, Zap, Users, BookOpen, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-4xl font-bold text-white mx-auto">
                P
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              PIXEL
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              منصة تعلم تصميم UX/UI التفاعلية
            </p>
            <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
              تعلم. صمم. أنشئ. نما مع مجتمع يدعم رحلتك في عالم تصميم تجربة المستخدم والواجهات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#ux-track"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors gap-2"
              >
                ابدأ التعلم
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                تعرف أكثر
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Vision Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              لماذا PIXEL؟
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Feature Cards */}
              <div className="topic-card p-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">تعلم من الصفر</h3>
                <p className="text-muted-foreground">
                  لا تحتاج إلى خبرة سابقة. نبدأ من الأساسيات ونصعد تدريجياً إلى المفاهيم المتقدمة.
                </p>
              </div>

              <div className="topic-card p-8 space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">فهم عملي</h3>
                <p className="text-muted-foreground">
                  كل موضوع يتضمن أمثلة عملية وأنشطة تفاعلية تساعدك على التطبيق الفوري.
                </p>
              </div>

              <div className="topic-card p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">تعلم منظم</h3>
                <p className="text-muted-foreground">
                  محتوى منظم ومنهجي يتابع أفضل الممارسات في صناعة التصميم.
                </p>
              </div>

              <div className="topic-card p-8 space-y-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">دعم المجتمع</h3>
                <p className="text-muted-foreground">
                  تعلم مع مجتمع من المصممين الذين يشاركون نفس الرغبة في النمو والتطور.
                </p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <p className="text-xl font-medium">
                "الهدف ليس فقط قراءة UX/UI... بل فهم كيفية التفكير مثل المصمم"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="journey" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            رحلة التعلم
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="topic-card p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ backgroundColor: `${track.color}20` }}
                >
                  {track.emoji}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{track.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{track.description}</p>
                <div className="text-xs text-muted-foreground">
                  {track.topics.length} موضوع
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#ux-track"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              ابدأ الرحلة الآن
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Track Sections */}
      {tracks.map((track) => (
        <TrackSection
          key={track.id}
          track={track}
          id={track.id}
        />
      ))}

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">PIXEL</h3>
              <p className="text-sm text-muted-foreground">
                منصة تعليمية تفاعلية لتعلم تصميم UX/UI من الصفر.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">المسارات</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#ux-track" className="hover:text-primary transition-colors">مسار UX</a></li>
                <li><a href="#ui-track" className="hover:text-primary transition-colors">مسار UI</a></li>
                <li><a href="#integration-track" className="hover:text-primary transition-colors">التكامل</a></li>
                <li><a href="#bonus-track" className="hover:text-primary transition-colors">محتوى إضافي</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">المجتمع</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">التعليقات</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">حول</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 PIXEL Community. تم إنشاؤه بـ ❤️ لمصممي UX/UI في كل مكان.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
