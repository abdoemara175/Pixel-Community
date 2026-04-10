export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Pixel Community" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold text-primary">Pixel Community</h1>
            <p className="text-xs text-muted-foreground">UX Design Learning Hub</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#research" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Research
          </a>
          <a href="#analysis" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Analysis
          </a>
          <a href="#personas" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Personas
          </a>
          <a href="#resources" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Resources
          </a>
        </nav>
      </div>
    </header>
  );
}
