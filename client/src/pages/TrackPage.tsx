/**
 * Track Page - PIXEL UX Learning Platform
 * 
 * Displays all topics for a specific track
 * - Track header with title and description
 * - Grid of topic cards
 * - Navigation back to home
 */

import Header from '@/components/Header';
import { getTracks } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { ArrowRight, ChevronLeft } from 'lucide-react';

interface TrackPageProps {
  params: {
    trackId: string;
  };
}

export default function TrackPage({ params }: TrackPageProps) {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const t = (key: keyof ReturnType<typeof getTranslation>) => getTranslation(language, key as any);
  const tracks = getTracks(language);
  
  const track = tracks.find(tr => tr.id === params.trackId);

  if (!track) {
    return (
      <div className="min-h-screen bg-background pt-16 md:pt-20">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">{t('notFound')}</h1>
          <button
            onClick={() => setLocation('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            {t('backHome')}
          </button>
        </div>
      </div>
    );
  }

  const handleTopicClick = (topicId: string) => {
    setLocation(`/track/${params.trackId}/topic/${topicId}`);
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <Header />

      {/* Back Button */}
      <div className="container py-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          {t('backHome')}
        </motion.button>
      </div>

      {/* Track Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-block"
            >
              <div
                className="w-20 h-20 rounded-lg flex items-center justify-center text-4xl hover:scale-110 transition-transform"
                style={{ backgroundColor: `${track.color}20` }}
              >
                {track.emoji}
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              {track.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {track.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-semibold text-muted-foreground"
            >
              {track.topics.length} {t('topics')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {track.topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                onClick={() => handleTopicClick(topic.id)}
                className="topic-card p-6 cursor-pointer group transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${track.color}20` }}
                  >
                    {topic.emoji}
                  </div>
                  <ArrowRight className={`w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity ${language === 'ar' ? 'rotate-180' : ''}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {topic.description}
                </p>
                <div className="text-xs font-semibold text-muted-foreground">
                  {topic.steps.length} {t('steps')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 mt-20">
        <div className="container text-center text-sm text-muted-foreground">
          <p>{t('copyright')}</p>
        </div>
      </footer>
    </div>
  );
}
