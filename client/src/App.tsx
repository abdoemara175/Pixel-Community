import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import AllTracksPage from "./pages/AllTracksPage";
import TrackPage from "./pages/TrackPage";
import TopicPage from "./pages/TopicPage";

function Router() {
  return (
    <WouterRouter base="/Pixel-Community">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tracks" component={AllTracksPage} />
        <Route path="/track/:trackId" component={TrackPage} />
        <Route path="/track/:trackId/topic/:topicId" component={TopicPage} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider defaultLanguage="ar" switchable>
        <ThemeProvider defaultTheme="light" switchable>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
