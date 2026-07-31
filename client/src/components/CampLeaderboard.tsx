import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Crown, Star, Flame, Sparkles, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export interface LeaderboardMember {
  rank: number;
  name: string;
  avatar?: string;
  camp: string;
  points: number;
  completedTopics: number;
  quizScoreAverage: number;
  badge: string;
}

export const TOP_CAMP_STUDENTS: LeaderboardMember[] = [
  {
    rank: 1,
    name: 'أحمد محمود العلي',
    camp: 'Pixel Camp - Round 1',
    points: 1450,
    completedTopics: 18,
    quizScoreAverage: 98,
    badge: '🥇 المركز الأول (Champion)',
  },
  {
    rank: 2,
    name: 'سارة خالد المنصوري',
    camp: 'Pixel Camp - Round 1',
    points: 1320,
    completedTopics: 16,
    quizScoreAverage: 94,
    badge: '🥈 المركز الثاني (Star Designer)',
  },
  {
    rank: 3,
    name: 'عمر شريف النجار',
    camp: 'Pixel Camp - Round 1',
    points: 1210,
    completedTopics: 15,
    quizScoreAverage: 90,
    badge: '🥉 المركز الثالث (Top UXer)',
  },
];

export const CampLeaderboard: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <section className="my-10" id="leaderboard" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold mb-3">
          <Crown className="w-4 h-4" />
          <span>{isAr ? 'لوحة الشرف المتصدرة' : 'Top Performers Leaderboard'}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
          {isAr ? '🏆 أفضل 3 طلاب في Pixel Camp - Round 1' : '🏆 Top 3 Performers in Pixel Camp - Round 1'}
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          {isAr
            ? 'تكريم أكثر الأعضاء مساهمة وتفوقاً في حل اختبارات التحدي وتصميم التطبيقات'
            : 'Honoring the most active and top-scoring students in challenge quizzes and assignments'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {TOP_CAMP_STUDENTS.map((student) => {
          const isFirst = student.rank === 1;
          const isSecond = student.rank === 2;
          const isThird = student.rank === 3;

          return (
            <div
              key={student.rank}
              className={`relative rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                isFirst
                  ? 'bg-gradient-to-b from-amber-500/15 via-card to-card border-amber-500/40 shadow-xl shadow-amber-500/10 md:-translate-y-2'
                  : isSecond
                  ? 'bg-gradient-to-b from-slate-400/15 via-card to-card border-slate-400/40 shadow-lg'
                  : 'bg-gradient-to-b from-amber-700/15 via-card to-card border-amber-700/40 shadow-md'
              }`}
            >
              {/* Crown for rank 1 */}
              {isFirst && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-amber-950 p-2 rounded-full shadow-lg">
                  <Crown className="w-5 h-5 fill-amber-950" />
                </div>
              )}

              <div className="text-center pt-2">
                <div
                  className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-xl font-bold border-2 shadow-inner mb-3 ${
                    isFirst
                      ? 'bg-amber-500/20 text-amber-500 border-amber-500'
                      : isSecond
                      ? 'bg-slate-400/20 text-slate-400 border-slate-400'
                      : 'bg-amber-700/20 text-amber-600 border-amber-700'
                  }`}
                >
                  {isFirst ? (
                    <Trophy className="w-8 h-8" />
                  ) : isSecond ? (
                    <Medal className="w-8 h-8" />
                  ) : (
                    <Award className="w-8 h-8" />
                  )}
                </div>

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                    isFirst
                      ? 'bg-amber-500/20 text-amber-500'
                      : isSecond
                      ? 'bg-slate-400/20 text-slate-400'
                      : 'bg-amber-700/20 text-amber-600'
                  }`}
                >
                  {student.badge}
                </span>

                <h3 className="text-lg font-bold text-foreground mt-1">{student.name}</h3>
                <p className="text-xs text-muted-foreground">{student.camp}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-secondary/40 p-2 rounded-lg">
                  <span className="text-muted-foreground block">{isAr ? 'النقاط' : 'Points'}</span>
                  <span className="font-bold text-primary text-sm">{student.points} pts</span>
                </div>
                <div className="bg-secondary/40 p-2 rounded-lg">
                  <span className="text-muted-foreground block">{isAr ? 'متوسط الاختبارات' : 'Avg Quiz'}</span>
                  <span className="font-bold text-emerald-500 text-sm">{student.quizScoreAverage}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
