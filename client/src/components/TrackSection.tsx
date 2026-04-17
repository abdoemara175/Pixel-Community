import TopicCard from './TopicCard';
import type { Track } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, type Translations } from '@/lib/i18n';

interface TrackSectionProps {
  track: Track;
  id: string;
}

export default function TrackSection({ track, id }: TrackSectionProps) {
  const { language } = useLanguage();
  const t = (key: keyof Translations) => getTranslation(language, key);
  const isRtl = language === 'ar';

  const totalMinutes = track.topics.reduce((sum, topic) => sum + topic.estimatedTime, 0);

  return (
    <section id={id} className="py-12 md:py-16 border-b border-border last:border-b-0">
      <div className="container">
        {/* Track Header */}
        <div className={`mb-12 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-center gap-4 mb-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl shrink-0"
              style={{ 
                backgroundColor: `${track.color}20`, 
                [isRtl ? 'borderRight' : 'borderLeft']: `4px solid ${track.color}` 
              } as any}
            >
              {track.emoji}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{track.title}</h2>
              <p className="text-muted-foreground mt-2">{track.description}</p>
            </div>
          </div>
          <div className={`flex items-center gap-2 text-sm text-muted-foreground ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="inline-block px-3 py-1 bg-muted rounded-full">
              {track.topics.length} {t('topics')}
            </span>
            <span className="inline-block px-3 py-1 bg-muted rounded-full">
              {totalMinutes} {t('minutes')}
            </span>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-6">
          {track.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              trackColor={track.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
