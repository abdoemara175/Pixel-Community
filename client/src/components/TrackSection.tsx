/**
 * TrackSection Component - PIXEL UX Learning Platform
 * 
 * Displays a learning track with:
 * - Track title and description
 * - All topics in the track
 * - Visual styling based on track color
 */

import TopicCard from './TopicCard';
import type { Track } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';

interface TrackSectionProps {
  track: Track;
  id: string;
}

export default function TrackSection({ track, id }: TrackSectionProps) {
  const { language } = useLanguage();
  const t = (key: keyof ReturnType<typeof getTranslation>) => getTranslation(language, key as any);

  const totalMinutes = track.topics.reduce((sum, topic) => sum + topic.estimatedTime, 0);

  return (
    <section id={id} className="py-12 md:py-16 border-b border-border last:border-b-0">
      <div className="container">
        {/* Track Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${track.color}20`, borderLeft: `4px solid ${track.color}` }}
            >
              {track.emoji}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{track.title}</h2>
              <p className="text-muted-foreground mt-2">{track.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
