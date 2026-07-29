import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import AllTracksPage from "./pages/AllTracksPage";
import SectionPage from "./pages/sections/SectionPage";
import TopicDetailPage from "./pages/topics/TopicDetailPage";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function Router() {
  return (
    <WouterRouter base="/Pixel-Community">
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tracks" component={AllTracksPage} />
        <Route path="/sections/:sectionId" component={SectionPage} />
        <Route path="/topics/:topicId" component={TopicDetailPage} />
        <Route path="/student-dashboard" component={StudentDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
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
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
