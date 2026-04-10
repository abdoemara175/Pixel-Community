import Header from "@/components/Header";
import SessionCard from "@/components/SessionCard";
import { sessionContent } from "@/lib/content";

/**
 * Pixel Community - UX Design Learning Hub
 * Modern minimalist design with pixel-inspired accents
 * Color palette: Deep Navy primary, Cyan secondary, Warm Orange accents
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 md:py-32">
        <div className="container text-center space-y-6">
          <div className="inline-block">
            <img src="/logo.png" alt="Pixel Community" className="h-20 w-20 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            Pixel Community
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Learn UX Design from the ground up. Understand user research, competitive analysis, personas, and empathy mapping through interactive sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#content"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Learning
            </a>
            <a
              href="#resources"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Resources
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section id="content" className="py-12">
        <div className="container">
          {sessionContent.map((content, index) => (
            <SessionCard key={content.id} content={content} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12 mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Pixel Community</h3>
              <p className="text-sm text-muted-foreground">
                Interactive UX Design learning platform for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Topics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#research" className="hover:text-primary transition-colors">User Research</a></li>
                <li><a href="#analysis" className="hover:text-primary transition-colors">Competitive Analysis</a></li>
                <li><a href="#personas" className="hover:text-primary transition-colors">Personas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Feedback</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Pixel Community. Made with ❤️ for UX designers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
