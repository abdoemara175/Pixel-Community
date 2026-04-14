import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrackSection from "@/components/TrackSection";
import { getTracks } from "@/lib/content";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Modern, Clean, Educational
 * - Hero-first layout with clear visual hierarchy
 * - Emphasis on community and practical learning
 * - Smooth animations and interactive elements
 */
export default function Home() {
  const { language } = useLanguage();
  const tracks = getTracks(language);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        
        {tracks.map((track) => (
          <TrackSection 
            key={track.id} 
            track={track} 
            id={track.id} 
          />
        ))}
      </main>
      
      {/* Simple Footer */}
      <footer id="contact" className="py-12 bg-muted/30 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} PIXEL COMMUNITY. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
