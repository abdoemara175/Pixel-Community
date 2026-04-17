import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Design Philosophy: Dynamic Modern Educational Platform
 * - Responsive to system/user theme (Light/Dark)
 * - Subtle gradients and glassmorphism in both modes
 * - High contrast accents for readability
 * - Smooth transitions between themes
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500 pt-20 pb-20">
      {/* Background decorative elements - Responsive to Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] dark:opacity-[0.03] pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            {/* Logo/Brand */}
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-sm font-bold text-slate-600 dark:text-slate-400 tracking-[0.2em] uppercase">
                Pixel Community
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] whitespace-nowrap">
                Learn.{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Design.
                </span>{" "}
                Create.
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-md font-medium"
            >
              Grow with a community that supports your journey.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              Learn UI/UX from scratch through a practical, structured experience designed for
              beginners and professionals alike.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 text-lg font-bold rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-7 text-lg font-bold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                Explore Tracks
              </Button>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-10 border-t border-slate-200 dark:border-slate-800/50"
            >
              {[
                { icon: Users, label: "+100 Students", value: "100" },
                { icon: BookOpen, label: "10+ Topics", value: "10+" },
                { icon: Zap, label: "Practical Learning", value: "100%" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  onHoverStart={() => setHoveredStat(idx)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="flex items-center space-x-4 cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      hoveredStat === idx
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                        : "bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50"
                    }`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{stat.value}</p>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual - Mock UI Screens with Theme Aesthetics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect behind cards */}
              <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
              
              {/* Large Card - Dashboard */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-6 z-20"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your Progress</h3>
                    <div className="w-8 h-8 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">📊</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-100 dark:bg-slate-800 h-2 rounded-full w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full" 
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">UI Fundamentals</p>
                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400">75%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-slate-50 dark:bg-slate-800/50 h-12 rounded-xl border border-slate-100 dark:border-slate-700/30" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Medium Card - Course Card */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-36 right-0 w-72 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-5 z-10"
              >
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-600/40 dark:to-indigo-600/40 rounded-xl border border-blue-200 dark:border-blue-500/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                       <div className="bg-blue-500 h-full w-1/3 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">Design Systems</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Master the fundamentals</p>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 cursor-pointer transition-colors">View Course →</span>
                  </div>
                </div>
              </motion.div>

              {/* Small Card - Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 left-12 w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-5 z-0"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-500/10 rounded-xl p-3 border border-blue-100 dark:border-blue-500/20">
                    <p className="text-2xl font-black text-blue-600 dark:text-blue-400">12</p>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Completed</p>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-500/10 rounded-xl p-3 border border-indigo-100 dark:border-indigo-500/20">
                    <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">8</p>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">In Progress</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
