import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/i18n";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <LanguageContext.Consumer>
          {(context) => {
            const language = context?.language || 'en';
            const isRtl = language === 'ar';
            const t = (key: any) => getTranslation(language, key);

            return (
              <div className="flex items-center justify-center min-h-screen p-8 bg-background">
                <div className={`flex flex-col items-center w-full max-w-2xl p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <AlertTriangle
                    size={48}
                    className="text-destructive mb-6 flex-shrink-0"
                  />

                  <h2 className="text-xl mb-4 font-bold text-foreground">
                    {t('unexpectedError')}
                  </h2>

                  <div className="p-4 w-full rounded bg-muted overflow-auto mb-6 text-left" dir="ltr">
                    <pre className="text-sm text-muted-foreground whitespace-break-spaces">
                      {this.state.error?.stack}
                    </pre>
                  </div>

                  <button
                    onClick={() => window.location.reload()}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-lg font-semibold",
                      "bg-primary text-primary-foreground",
                      "hover:opacity-90 cursor-pointer transition-colors shadow-sm",
                      isRtl ? 'flex-row-reverse' : 'flex-row'
                    )}
                  >
                    <RotateCcw size={18} className={isRtl ? 'ml-2' : 'mr-2'} />
                    {t('reloadPage')}
                  </button>
                </div>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
