import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, type Translations } from "@/lib/i18n";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();
  const t = (key: keyof Translations) => getTranslation(language, key);

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-4 py-8">
      <Card className="w-full max-w-lg shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <CardContent className="pt-6 md:pt-8 pb-6 md:pb-8 text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 dark:bg-red-900/30 rounded-full animate-pulse" />
              <AlertCircle className="relative h-14 w-14 md:h-16 md:w-16 text-red-500 dark:text-red-400" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">404</h1>

          <h2 className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-3 md:mb-4">
            {t('pageNotFound')}
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            {t('notFoundDesc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Home className="w-4 h-4" />
              {t('goHome')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
