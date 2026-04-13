import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import TrackPage from "./pages/TrackPage";
import TopicPage from "./pages/TopicPage";


function AppRouter() {
  return (
    <Router base="/Pixel-Community">
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/track/:trackId"} component={TrackPage} />
        <Route path={"/track/:trackId/topic/:topicId"} component={TopicPage} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

/**
 * PIXEL UX Learning Platform
 * 
 * Modern minimalist educational design
 * Color palette: Deep Navy primary (#0E2A57), Bright Blue secondary (#1F4B8F)
 * 
 * NOTE: About Theme
 * - Light theme by default for educational clarity
 * - Color palette defined in index.css with OKLCH format
 * - Fonts: Poppins (display), Inter (body)
 */

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider
        defaultLanguage="ar"
        switchable={true}
      >
        <ThemeProvider
          defaultTheme="light"
          switchable={true}
        >
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
