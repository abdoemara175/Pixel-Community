import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

/**
 * Design Philosophy: Modern, Clean, Educational
 * - Hero-first layout with clear visual hierarchy
 * - Emphasis on community and practical learning
 * - Smooth animations and interactive elements
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Hero />
    </div>
  );
}
