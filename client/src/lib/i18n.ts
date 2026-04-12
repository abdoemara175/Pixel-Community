/**
 * Internationalization (i18n) System
 * Manages Arabic and English translations for the PIXEL platform
 */

export type Language = 'ar' | 'en';

export interface Translations {
  // Header & Navigation
  home: string;
  uxTrack: string;
  uiTrack: string;
  integration: string;
  bonus: string;
  contact: string;
  platformSubtitle: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startLearning: string;
  learnMore: string;

  // About Section
  whyPixel: string;
  learnFromZero: string;
  learnFromZeroDesc: string;
  practicalUnderstanding: string;
  practicalUnderstandingDesc: string;
  organizedLearning: string;
  organizedLearningDesc: string;
  communitySupport: string;
  communitySupportDesc: string;
  quote: string;

  // Learning Journey
  learningJourney: string;
  startJourneyNow: string;
  topics: string;

  // Footer
  footerDesc: string;
  tracks: string;
  community: string;
  github: string;
  feedback: string;
  about: string;
  copyright: string;

  // Topic Card
  estimatedTime: string;
  minutes: string;
  viewLessons: string;
  closeLessons: string;
  step: string;
  of: string;
  nextStep: string;
  previousStep: string;
  markAsComplete: string;
  completed: string;
  progress: string;

  // Step Types
  introduction: string;
  concept: string;
  whyItMatters: string;
  breakdown: string;
  example: string;
  badVsGood: string;
  commonMistakes: string;
  practicalTips: string;
  miniActivity: string;
  summary: string;

  // Track Descriptions
  uxFoundationsDesc: string;
  designThinkingDesc: string;
  userResearchDesc: string;
  competitiveAnalysisDesc: string;
  problemDefinitionDesc: string;
  userNeedsDesc: string;
  personasDesc: string;
  empathyMapDesc: string;
  userStoriesDesc: string;
  userFlowDesc: string;
  userJourneyMapDesc: string;
  infoArchitectureDesc: string;
  sitemapNavDesc: string;
  wireframingDesc: string;
  prototypingDesc: string;
  usabilityTestingDesc: string;
  uiDesignDesc: string;
  colorTypographyDesc: string;
  componentSystemDesc: string;
  designSystemsDesc: string;
  accessibilityDesc: string;
  responsiveDesignDesc: string;
  interactionDesignDesc: string;
  animationMicrointeractionsDesc: string;
  designToolsDesc: string;
  handoffDesc: string;
  caseStudiesDesc: string;
  bestPracticesDesc: string;
}

const translations: Record<Language, Translations> = {
  ar: {
    // Header & Navigation
    home: 'الرئيسية',
    uxTrack: 'مسار UX',
    uiTrack: 'مسار UI',
    integration: 'التكامل',
    bonus: 'محتوى إضافي',
    contact: 'تواصل',
    platformSubtitle: 'منصة تعلم UX/UI',

    // Hero Section
    heroTitle: 'PIXEL',
    heroSubtitle: 'منصة تعلم تصميم UX/UI التفاعلية',
    heroDescription: 'تعلم. صمم. أنشئ. نما مع مجتمع يدعم رحلتك في عالم تصميم تجربة المستخدم والواجهات',
    startLearning: 'ابدأ التعلم',
    learnMore: 'تعرف أكثر',

    // About Section
    whyPixel: 'لماذا PIXEL؟',
    learnFromZero: 'تعلم من الصفر',
    learnFromZeroDesc: 'لا تحتاج إلى خبرة سابقة. نبدأ من الأساسيات ونصعد تدريجياً إلى المفاهيم المتقدمة.',
    practicalUnderstanding: 'فهم عملي',
    practicalUnderstandingDesc: 'كل موضوع يتضمن أمثلة عملية وأنشطة تفاعلية تساعدك على التطبيق الفوري.',
    organizedLearning: 'تعلم منظم',
    organizedLearningDesc: 'محتوى منظم ومنهجي يتابع أفضل الممارسات في صناعة التصميم.',
    communitySupport: 'دعم المجتمع',
    communitySupportDesc: 'تعلم مع مجتمع من المصممين الذين يشاركون نفس الرغبة في النمو والتطور.',
    quote: '"الهدف ليس فقط قراءة UX/UI... بل فهم كيفية التفكير مثل المصمم"',

    // Learning Journey
    learningJourney: 'رحلة التعلم',
    startJourneyNow: 'ابدأ الرحلة الآن',
    topics: 'موضوع',

    // Footer
    footerDesc: 'منصة تعليمية تفاعلية لتعلم تصميم UX/UI من الصفر.',
    tracks: 'المسارات',
    community: 'المجتمع',
    github: 'GitHub',
    feedback: 'التعليقات',
    about: 'حول',
    copyright: '© 2026 PIXEL Community. تم إنشاؤه بـ ❤️ لمصممي UX/UI في كل مكان.',

    // Topic Card
    estimatedTime: 'الوقت المتوقع',
    minutes: 'دقيقة',
    viewLessons: 'عرض الدروس',
    closeLessons: 'إغلاق الدروس',
    step: 'الخطوة',
    of: 'من',
    nextStep: 'الخطوة التالية',
    previousStep: 'الخطوة السابقة',
    markAsComplete: 'تحديد كمكتمل',
    completed: 'مكتمل',
    progress: 'التقدم',

    // Step Types
    introduction: 'المقدمة',
    concept: 'المفهوم',
    whyItMatters: 'لماذا يهم',
    breakdown: 'التفصيل',
    example: 'مثال',
    badVsGood: 'السيء مقابل الجيد',
    commonMistakes: 'الأخطاء الشائعة',
    practicalTips: 'نصائح عملية',
    miniActivity: 'نشاط صغير',
    summary: 'الملخص',

    // Track Descriptions
    uxFoundationsDesc: 'أساسيات تجربة المستخدم',
    designThinkingDesc: 'عملية التفكير التصميمي',
    userResearchDesc: 'البحث عن المستخدمين',
    competitiveAnalysisDesc: 'تحليل المنافسين',
    problemDefinitionDesc: 'تحديد المشكلة',
    userNeedsDesc: 'احتياجات المستخدم ونقاط الألم',
    personasDesc: 'شخصيات المستخدمين',
    empathyMapDesc: 'خريطة التعاطف',
    userStoriesDesc: 'قصص المستخدمين',
    userFlowDesc: 'تدفق المستخدم',
    userJourneyMapDesc: 'خريطة رحلة المستخدم',
    infoArchitectureDesc: 'هندسة المعلومات',
    sitemapNavDesc: 'خريطة الموقع والتنقل',
    wireframingDesc: 'الرسم السلكي',
    prototypingDesc: 'النماذج الأولية',
    usabilityTestingDesc: 'اختبار قابلية الاستخدام',
    uiDesignDesc: 'تصميم الواجهة',
    colorTypographyDesc: 'الألوان والطباعة',
    componentSystemDesc: 'نظام المكونات',
    designSystemsDesc: 'أنظمة التصميم',
    accessibilityDesc: 'إمكانية الوصول',
    responsiveDesignDesc: 'التصميم المتجاوب',
    interactionDesignDesc: 'تصميم التفاعل',
    animationMicrointeractionsDesc: 'الحركات والتفاعلات الدقيقة',
    designToolsDesc: 'أدوات التصميم',
    handoffDesc: 'التسليم',
    caseStudiesDesc: 'دراسات الحالة',
    bestPracticesDesc: 'أفضل الممارسات',
  },
  en: {
    // Header & Navigation
    home: 'Home',
    uxTrack: 'UX Track',
    uiTrack: 'UI Track',
    integration: 'Integration',
    bonus: 'Bonus Content',
    contact: 'Contact',
    platformSubtitle: 'UX/UI Learning Platform',

    // Hero Section
    heroTitle: 'PIXEL',
    heroSubtitle: 'Interactive UX/UI Design Learning Platform',
    heroDescription: 'Learn. Design. Create. Grow with a community that supports your journey in the world of user experience and interface design.',
    startLearning: 'Start Learning',
    learnMore: 'Learn More',

    // About Section
    whyPixel: 'Why PIXEL?',
    learnFromZero: 'Learn from Zero',
    learnFromZeroDesc: 'No prior experience needed. We start from the basics and gradually progress to advanced concepts.',
    practicalUnderstanding: 'Practical Understanding',
    practicalUnderstandingDesc: 'Each topic includes practical examples and interactive activities to help you apply learning immediately.',
    organizedLearning: 'Organized Learning',
    organizedLearningDesc: 'Structured and methodical content that follows industry best practices in design.',
    communitySupport: 'Community Support',
    communitySupportDesc: 'Learn with a community of designers who share the same desire to grow and develop.',
    quote: '"The goal is not just to read UX/UI... but to understand how to think like a designer"',

    // Learning Journey
    learningJourney: 'Learning Journey',
    startJourneyNow: 'Start Your Journey Now',
    topics: 'topic',

    // Footer
    footerDesc: 'Interactive educational platform to learn UX/UI design from scratch.',
    tracks: 'Tracks',
    community: 'Community',
    github: 'GitHub',
    feedback: 'Feedback',
    about: 'About',
    copyright: '© 2026 PIXEL Community. Created with ❤️ for UX/UI designers everywhere.',

    // Topic Card
    estimatedTime: 'Estimated Time',
    minutes: 'minutes',
    viewLessons: 'View Lessons',
    closeLessons: 'Close Lessons',
    step: 'Step',
    of: 'of',
    nextStep: 'Next Step',
    previousStep: 'Previous Step',
    markAsComplete: 'Mark as Complete',
    completed: 'Completed',
    progress: 'Progress',

    // Step Types
    introduction: 'Introduction',
    concept: 'Concept',
    whyItMatters: 'Why It Matters',
    breakdown: 'Breakdown',
    example: 'Example',
    badVsGood: 'Bad vs Good',
    commonMistakes: 'Common Mistakes',
    practicalTips: 'Practical Tips',
    miniActivity: 'Mini Activity',
    summary: 'Summary',

    // Track Descriptions
    uxFoundationsDesc: 'User Experience Foundations',
    designThinkingDesc: 'Design Thinking Process',
    userResearchDesc: 'User Research',
    competitiveAnalysisDesc: 'Competitive Analysis',
    problemDefinitionDesc: 'Problem Definition',
    userNeedsDesc: 'User Needs & Pain Points',
    personasDesc: 'Personas',
    empathyMapDesc: 'Empathy Map',
    userStoriesDesc: 'User Stories / JTBD',
    userFlowDesc: 'User Flow',
    userJourneyMapDesc: 'User Journey Map',
    infoArchitectureDesc: 'Information Architecture',
    sitemapNavDesc: 'Sitemap & Navigation',
    wireframingDesc: 'Wireframing',
    prototypingDesc: 'Prototyping',
    usabilityTestingDesc: 'Usability Testing',
    uiDesignDesc: 'UI Design Fundamentals',
    colorTypographyDesc: 'Color & Typography',
    componentSystemDesc: 'Component System',
    designSystemsDesc: 'Design Systems',
    accessibilityDesc: 'Accessibility (A11y)',
    responsiveDesignDesc: 'Responsive Design',
    interactionDesignDesc: 'Interaction Design',
    animationMicrointeractionsDesc: 'Animation & Microinteractions',
    designToolsDesc: 'Design Tools & Software',
    handoffDesc: 'Handoff & Collaboration',
    caseStudiesDesc: 'Case Studies',
    bestPracticesDesc: 'Best Practices & Tips',
  },
};

export function getTranslation(lang: Language, key: keyof Translations): string {
  return translations[lang][key];
}

export function getAllTranslations(lang: Language): Translations {
  return translations[lang];
}
