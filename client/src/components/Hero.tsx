import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Design Philosophy: Modern Educational Platform
 * - Asymmetric layout: Text left, Visual right
 * - Smooth entrance animations (Fade + Slide up)
 * - Mock UI screens on right to convey "learning" concept
 * - Clear CTAs with hover effects
 * - Mini stats for social proof
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 pb-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10" />

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
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-sm font-semibold text-slate-600 tracking-wide">
                PIXEL COMMUNITY
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Learn.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Design.
                </span>{" "}
                Create.
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 leading-relaxed max-w-md"
            >
              Grow with a community that supports your journey.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-500 max-w-lg leading-relaxed"
            >
              Learn UI/UX from scratch through a practical, structured experience designed for
              beginners and professionals alike.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Explore Tracks
              </Button>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-8 border-t border-slate-200"
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
                  className="flex items-center space-x-3 cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      hoveredStat === idx
                        ? "bg-blue-100 text-blue-600"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual - Mock UI Screens */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Large Card - Dashboard */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-20"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Your Progress</h3>
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">📊</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-full" />
                    <p className="text-sm text-slate-600">UI Fundamentals: 75%</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="bg-slate-100 h-12 rounded-lg" />
                    <div className="bg-slate-100 h-12 rounded-lg" />
                    <div className="bg-slate-100 h-12 rounded-lg" />
                  </div>
                </div>
              </motion.div>

              {/* Medium Card - Course Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                className="absolute top-32 right-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-5 z-10"
              >
                <div className="space-y-3">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg" />
                  <h4 className="font-semibold text-slate-900">Design Systems</h4>
                  <p className="text-xs text-slate-500">Master the fundamentals</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-medium text-slate-600">4 lessons</span>
                    <span className="text-xs font-medium text-blue-600">→</span>
                  </div>
                </div>
              </motion.div>

              {/* Small Card - Stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}
                className="absolute bottom-0 left-12 w-64 bg-white rounded-2xl shadow-lg border border-slate-200 p-4 z-0"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-600">12</p>
                    <p className="text-xs text-slate-600">Completed</p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-indigo-600">8</p>
                    <p className="text-xs text-slate-600">In Progress</p>
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
