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
    <section id={id} className="py-12 md:py-16 lg:py-20 border-b border-border last:border-b-0">
      <div className="container">
        {/* Track Header */}
        <div className="mb-8 md:mb-12 text-start">
          <div className="flex items-start gap-3 md:gap-4 mb-4">
            <div
              className="w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
              style={{ 
                backgroundColor: `${track.color}20`, 
                borderInlineStart: `4px solid ${track.color}` 
              }}
            >
              {track.emoji}
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{track.title}</h2>
              <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">{track.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <span className="inline-block px-3 py-1 bg-muted rounded-full whitespace-nowrap">
              {track.topics.length} {t('topics')}
            </span>
            <span className="inline-block px-3 py-1 bg-muted rounded-full whitespace-nowrap">
              {totalMinutes} {t('minutes')}
            </span>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-4 md:space-y-6">
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
