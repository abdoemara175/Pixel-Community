import Header from '@/components/Header';
import TrackSection from '@/components/TrackSection';
import { getTracks } from '@/lib/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, type Translations } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AllTracksPage() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const t = (key: keyof Translations) => getTranslation(language, key);
  const tracks = getTracks(language);
  const isRtl = language === 'ar';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Back Button */}
      <div className="container py-4 md:py-6 pt-20 md:pt-24">
        <motion.button
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: isRtl ? 5 : -5 }}
          onClick={() => setLocation('/')}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm md:text-base"
        >
          {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {t('backHome')}
        </motion.button>
      </div>

      {/* Page Header */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              {t('allTracks')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {t('selectTrackToLearn')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {tracks.map((track, index) => (
          <TrackSection 
            key={track.id} 
            track={track} 
            id={track.id}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-muted/30 border-t border-border mt-auto">
        <div className="container text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            {t('copyright')} {t('allRightsReserved')}
          </p>
        </div>
      </footer>
    </div>
  );
}
