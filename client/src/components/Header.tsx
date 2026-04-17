/**
 * Header Component - PIXEL UX Learning Platform
 * 
 * Enhanced Navigation with:
 * - Smooth transitions and animations
 * - Advanced touch interactions
 * - Modern Frosted Glass (Blur) theme
 * - Responsive design with mobile optimization
 * - Active section highlighting
 * - Theme toggle (Dark/Light)
 * - Language toggle (Arabic/English)
 */

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Link } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation, type Translations } from '@/lib/i18n';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const t = (key: keyof Translations) => getTranslation(language, key);

  const navItems: NavItem[] = [
    { label: t('home'), href: '/', isExternal: false },
    { label: t('uxTrack'), href: '#ux-track', isExternal: false },
    { label: t('uiTrack'), href: '#ui-track', isExternal: false },
    { label: t('integrationTrack'), href: '#integration-track', isExternal: false },
    { label: t('bonusTrack'), href: '#bonus-track', isExternal: false },
    { label: t('contact'), href: '#contact', isExternal: false },
  ];

  const isRtl = language === 'ar';

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleNavClick = (href: string, isExternal?: boolean) => {
    if (!isExternal) {
      setActiveSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  // Handle smooth scroll to section
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal || !href.startsWith('#')) {
      return; // Let the browser or wouter handle external links or page routes
    }
    
    e.preventDefault();
    handleNavClick(href, isExternal);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Animation variants for staggered menu items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconButtonVariants: Variants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    tap: {
      scale: 0.92,
      transition: {
        duration: 0.15,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg'
          : 'bg-background/50 backdrop-blur-md border-b border-border/30 shadow-sm'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand - Enhanced Animation */}
          <Link href="/">
            <div className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="hidden sm:block text-left">
                <motion.h1
                  className="text-lg md:text-xl font-bold text-primary tracking-tight"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  PIXEL
                </motion.h1>
                <motion.p
                  className="text-xs md:text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {t('platformSubtitle')}
                </motion.p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced with smooth transitions */}
          <motion.nav
            className="hidden md:flex items-center gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href, item.isExternal)}
                variants={itemVariants}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative overflow-hidden ${
                  activeSection === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {/* Animated background indicator */}
                {activeSection === item.href && !item.isExternal && item.href.startsWith('#') && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* Theme & Language Controls - Enhanced with better touch feedback */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Theme Toggle - Enhanced animation */}
            <motion.button
              variants={iconButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 hover:bg-muted/50 active:bg-muted"
              aria-label={theme === 'light' ? 'تفعيل الوضع الداكن' : 'تفعيل الوضع الفاتح'}
              title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-foreground" />
                  ) : (
                    <Sun className="w-5 h-5 text-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Language Toggle - Enhanced animation */}
            <motion.button
              variants={iconButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={toggleLanguage}
              className="p-2 rounded-lg transition-all duration-200 hover:bg-muted/50 active:bg-muted flex items-center gap-1"
              aria-label={language === 'ar' ? 'تبديل إلى الإنجليزية' : 'تبديل إلى العربية'}
              title={language === 'ar' ? 'English' : 'العربية'}
            >
              <Globe className="w-5 h-5 text-foreground" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={language}
                  initial={{ opacity: 0, x: language === 'ar' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: language === 'ar' ? -10 : 10 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-xs font-semibold text-foreground hidden sm:inline"
                >
                  {language === 'ar' ? 'EN' : 'AR'}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button - Enhanced with smooth animation */}
            <motion.button
              variants={iconButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-muted/50 active:bg-muted"
              aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-foreground" />
                  ) : (
                    <Menu className="w-6 h-6 text-foreground" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation - Enhanced with smooth transitions */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden border-t border-border/50 pt-4 pb-4"
            >
              <motion.div
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href, item.isExternal)}
                    variants={itemVariants}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.href
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
