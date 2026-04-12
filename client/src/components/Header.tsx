/**
 * Header Component - PIXEL UX Learning Platform
 * 
 * Sticky navigation with:
 * - Logo and branding
 * - Track navigation links
 * - Mobile hamburger menu
 * - Active section highlighting
 * - Theme toggle (Dark/Light)
 * - Language toggle (Arabic/English)
 */

import { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Link } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const t = (key: keyof typeof getTranslation) => getTranslation(language, key as any);

  const navItems = [
    { label: t('home'), href: '#home' },
    { label: t('uxTrack'), href: '#ux-track' },
    { label: t('uiTrack'), href: '#ui-track' },
    { label: t('integration'), href: '#integration-track' },
    { label: t('bonus'), href: '#bonus-track' },
    { label: t('contact'), href: '#contact' },
  ];

  const isRtl = language === 'ar';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md border border-border overflow-hidden">
              <img 
                src="/pixel-new-logo.png" 
                alt="PIXEL Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-primary tracking-tight">PIXEL</h1>
              <p className="text-xs md:text-sm text-muted-foreground">{t('platformSubtitle')}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Theme & Language Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="تبديل الوضع"
              title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-foreground" />
                  ) : (
                    <Sun className="w-5 h-5 text-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="p-2 hover:bg-muted rounded-md transition-colors flex items-center gap-1"
              aria-label="تبديل اللغة"
              title={language === 'ar' ? 'English' : 'العربية'}
            >
              <Globe className="w-5 h-5 text-foreground" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span 
                  key={language}
                  initial={{ opacity: 0, x: language === 'ar' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: language === 'ar' ? -10 : 10 }}
                  className="text-xs font-semibold text-foreground hidden sm:inline"
                >
                  {language === 'ar' ? 'EN' : 'AR'}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="تبديل القائمة"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
