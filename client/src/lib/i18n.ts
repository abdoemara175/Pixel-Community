/**
 * Internationalization (i18n) System
 * Manages Arabic and English translations for the PIXEL platform
 */

export type Language = 'ar' | 'en';

export interface Translations {
  // Header & Navigation
  home: string;
  allTracks: string;
  uxTrack: string;
  uiTrack: string;
  integrationTrack: string;
  bonusTrack: string;
  contact: string;
  platformSubtitle: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startLearning: string;
  learnMore: string;
  getStarted: string;
  exploreTracks: string;
  selectTrackToLearn: string;
  studentsCount: string;
  topicsCount: string;
  practicalContent: string;
  yourProgress: string;
  uiFundamentals: string;
  designSystems: string;
  masterFundamentals: string;
  viewCourse: string;
  completedStatus: string;
  inProgressStatus: string;

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
  organizedLearningTitle: string;
  communitySupportTitle: string;
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
  allRightsReserved: string;

  // Topic Card & Page
  estimatedTime: string;
  minutes: string;
  viewLessons: string;
  closeLessons: string;
  step: string;
  of: string;
  next: string;
  previous: string;
  nextStep: string;
  previousStep: string;
  markAsComplete: string;
  completed: string;
  progress: string;
  steps: string;
  backHome: string;
  notFound: string;
  backToTopics: string;
  interactiveActivity: string;
  activityPlaceholder: string;
  congratsTopic: string;
  nextTopicPrompt: string;
  gridView: string;
  fullView: string;
  viewInSeparatePage: string;

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

  // 404 Page
  pageNotFound: string;
  notFoundDesc: string;
  goHome: string;

  // Error Boundary
  unexpectedError: string;
  reloadPage: string;

  // Manus Dialog
  loginWithManusDesc: string;
  loginWithManusBtn: string;

  // Track Descriptions & Navigation
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
    allTracks: 'جميع المسارات',
    uxTrack: 'مسار تجربة المستخدم (UX)',
    uiTrack: 'مسار واجهة المستخدم (UI)',
    integrationTrack: 'تكامل UX × UI',
    bonusTrack: 'محتوى إضافي',
    contact: 'تواصل',
    platformSubtitle: 'منصة تعلم UX/UI',

    // Hero Section
    heroTitle: 'PIXEL',
    heroSubtitle: 'منصة تعلم تصميم UX/UI التفاعلية',
    heroDescription: 'تعلم. صمم. أنشئ. نما مع مجتمع يدعم رحلتك في عالم تصميم تجربة المستخدم والواجهات',
    startLearning: 'ابدأ التعلم',
    learnMore: 'تعرف أكثر',
    getStarted: 'ابدأ الآن',
    exploreTracks: 'استكشف المسارات',
    selectTrackToLearn: 'اختر المسار الذي تريد تعلمه وابدأ رحلتك التعليمية',
    studentsCount: '55 طالب',
    topicsCount: '45 موضوع',
    practicalContent: '80% محتوى عملي',
    yourProgress: 'تقدمك',
    uiFundamentals: 'أساسيات واجهة المستخدم',
    designSystems: 'أنظمة التصميم',
    masterFundamentals: 'أتقن الأساسيات',
    viewCourse: 'عرض المسار ←',
    completedStatus: 'مكتمل',
    inProgressStatus: 'قيد التنفيذ',

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
    organizedLearningTitle: 'تعلم منظم',
    communitySupportTitle: 'دعم المجتمع',
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
    copyright: '© 2026 Pixel Community. تم إنشاؤه بـ ❤️ لمصممي UX/UI في كل مكان.',
    allRightsReserved: 'جميع الحقوق محفوظة.',

    // Topic Card & Page
    estimatedTime: 'الوقت المتوقع',
    minutes: 'دقيقة',
    viewLessons: 'عرض الدروس',
    closeLessons: 'إغلاق الدروس',
    step: 'الخطوة',
    of: 'من',
    next: 'التالي',
    previous: 'السابق',
    nextStep: 'الخطوة التالية',
    previousStep: 'الخطوة السابقة',
    markAsComplete: 'تحديد كمكتمل',
    completed: 'مكتمل',
    progress: 'التقدم',
    steps: 'خطوات',
    backHome: 'العودة للرئيسية',
    notFound: 'الصفحة غير موجودة',
    backToTopics: 'العودة إلى المواضيع',
    interactiveActivity: 'نشاط تفاعلي:',
    activityPlaceholder: 'اكتب إجابتك هنا للتفكير...',
    congratsTopic: 'مبروك! لقد أكملت هذا الموضوع بنجاح',
    nextTopicPrompt: 'انتقل إلى الموضوع التالي لمواصلة رحلة التعلم',
    gridView: 'عرض الشبكة',
    fullView: 'عرض كامل',
    viewInSeparatePage: 'عرض في صفحة مستقلة',

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

    // 404 Page
    pageNotFound: 'الصفحة غير موجودة',
    notFoundDesc: 'عذراً، الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها أو حذفها.',
    goHome: 'العودة للرئيسية',

    // Error Boundary
    unexpectedError: 'حدث خطأ غير متوقع.',
    reloadPage: 'إعادة تحميل الصفحة',

    // Manus Dialog
    loginWithManusDesc: 'يرجى تسجيل الدخول باستخدام Manus للمتابعة',
    loginWithManusBtn: 'تسجيل الدخول باستخدام Manus',

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
    allTracks: 'All Tracks',
    uxTrack: 'UX Track',
    uiTrack: 'UI Track',
    integrationTrack: 'UX × UI Integration',
    bonusTrack: 'Bonus Content',
    contact: 'Contact',
    platformSubtitle: 'UX/UI Learning Platform',

    // Hero Section
    heroTitle: 'PIXEL',
    heroSubtitle: 'Interactive UX/UI Design Learning Platform',
    heroDescription: 'Learn. Design. Create. Grow with a community that supports your journey in the world of user experience and interface design.',
    startLearning: 'Start Learning',
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    exploreTracks: 'Explore Tracks',
    selectTrackToLearn: 'Choose the track you want to learn and start your educational journey',
    studentsCount: '55 Students',
    topicsCount: '45 Topics',
    practicalContent: '80% Practical Content',
    yourProgress: 'Your Progress',
    uiFundamentals: 'UI Fundamentals',
    designSystems: 'Design Systems',
    masterFundamentals: 'Master the fundamentals',
    viewCourse: 'View Course →',
    completedStatus: 'Completed',
    inProgressStatus: 'In Progress',

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
    organizedLearningTitle: 'Organized Learning',
    communitySupportTitle: 'Community Support',
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
    copyright: '© 2026 Pixel Community. Created with ❤️ for UX/UI designers everywhere.',
    allRightsReserved: 'All rights reserved.',

    // Topic Card & Page
    estimatedTime: 'Estimated Time',
    minutes: 'minutes',
    viewLessons: 'View Lessons',
    closeLessons: 'Close Lessons',
    step: 'Step',
    of: 'of',
    next: 'Next',
    previous: 'Previous',
    nextStep: 'Next Step',
    previousStep: 'Previous Step',
    markAsComplete: 'Mark as Complete',
    completed: 'Completed',
    progress: 'Progress',
    steps: 'steps',
    backHome: 'Back to Home',
    notFound: 'Page Not Found',
    backToTopics: 'Back to Topics',
    interactiveActivity: 'Interactive Activity:',
    activityPlaceholder: 'Write your answer here to reflect...',
    congratsTopic: 'Congratulations! You completed this topic successfully',
    nextTopicPrompt: 'Move to the next topic to continue your learning journey',
    gridView: 'Grid View',
    fullView: 'Full View',
    viewInSeparatePage: 'View in separate page',

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

    // 404 Page
    pageNotFound: 'Page Not Found',
    notFoundDesc: "Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.",
    goHome: 'Go Home',

    // Error Boundary
    unexpectedError: 'An unexpected error occurred.',
    reloadPage: 'Reload Page',

    // Manus Dialog
    loginWithManusDesc: 'Please login with Manus to continue',
    loginWithManusBtn: 'Login with Manus',

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
