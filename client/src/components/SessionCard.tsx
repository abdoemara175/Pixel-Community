import { SessionContent } from "@/lib/content";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SessionCardProps {
  content: SessionContent;
  index: number;
}

export default function SessionCard({ content, index }: SessionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 ${
        !isEven ? "md:grid-cols-2 md:[direction:rtl]" : ""
      }`}
    >
      {/* Content Side */}
      <div className={isEven ? "md:col-start-1" : "md:col-start-2"}>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-4xl">{content.emoji}</span>
            <div>
              <h2 className="text-3xl font-bold text-primary">{content.title}</h2>
              <p className="text-sm text-secondary mt-1">{content.concept}</p>
            </div>
          </div>

          {/* Why Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">Why?</h3>
            <ul className="space-y-1">
              {content.why.map((item, i) => (
                <li key={i} className="text-sm text-foreground flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expandable Section */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors border border-border"
          >
            <span className="font-semibold text-foreground">More Details</span>
            <ChevronDown
              className={`w-5 h-5 text-secondary transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {isExpanded && (
            <div className="space-y-4 pt-4 border-t border-border">
              {/* Example */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Example:</h4>
                <p className="text-sm text-foreground bg-muted p-3 rounded-lg whitespace-pre-wrap">
                  {content.example}
                </p>
              </div>

              {/* Mistakes */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Common Mistakes:</h4>
                <ul className="space-y-1">
                  {content.mistakes.map((mistake, i) => (
                    <li key={i} className="text-sm text-destructive flex items-start gap-2">
                      <span className="mt-1">✕</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tip */}
              <div className="bg-accent/10 p-3 rounded-lg border border-accent/30">
                <p className="text-sm font-semibold text-accent-foreground">💡 {content.tip}</p>
              </div>

              {/* Task */}
              <div className="bg-primary/10 p-3 rounded-lg border border-primary/30">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Task:</span> {content.task}
                </p>
              </div>

              {/* Summary */}
              <div className="bg-secondary/10 p-3 rounded-lg border border-secondary/30">
                <p className="text-sm font-semibold text-secondary">{content.summary}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Visual Side */}
      <div className={`hidden md:flex items-center justify-center ${isEven ? "md:col-start-2" : "md:col-start-1"}`}>
        <div className="relative w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border-2 border-dashed border-primary/30 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-6xl mb-4">{content.emoji}</p>
            <p className="text-sm font-semibold text-foreground text-center whitespace-pre-wrap">
              {content.diagram}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
