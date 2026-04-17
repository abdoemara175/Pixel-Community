import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import SectionPage from "./pages/sections/SectionPage";
import TopicDetailPage from "./pages/topics/TopicDetailPage";

function Router() {
  return (
    <WouterRouter base="/Pixel-Community">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sections/:sectionId" component={SectionPage} />
        <Route path="/topics/:topicId" component={TopicDetailPage} />
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
