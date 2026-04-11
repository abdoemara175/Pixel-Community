/**
 * PIXEL UX Learning Platform - Content Structure
 * 
 * This file defines the complete learning journey structure with:
 * - Multiple learning tracks (UX, UI, Integration, Bonus)
 * - Topics organized by track
 * - Step-by-step learning content for each topic (10 cards per topic)
 */

export interface Step {
  id: string;
  title: string;
  content: string;
  type: 'introduction' | 'concept' | 'why-it-matters' | 'breakdown' | 'example' | 'bad-vs-good' | 'mistakes' | 'tips' | 'activity' | 'summary';
}

export interface Topic {
  id: string;
  trackId: string;
  title: string;
  emoji: string;
  description: string;
  steps: Step[];
  estimatedTime: number; // in minutes
}

export interface Track {
  id: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  topics: Topic[];
}

// Helper to create empty topic with 10 cards
const createEmptyTopicWith10Cards = (id: string, title: string, emoji: string, description: string): Topic => ({
  id,
  trackId: 'ux-track',
  title,
  emoji,
  description,
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'قريباً...', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'قريباً...', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'قريباً...', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: 'قريباً...', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: 'قريباً...', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'قريباً...', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: 'قريباً...', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: 'قريباً...', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'قريباً...', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'قريباً...', type: 'summary' },
  ],
});

// UX Track Topics
const uxFoundations = createEmptyTopicWith10Cards('ux-foundations', 'UX Foundations', '🧠', 'أساسيات تجربة المستخدم');
const designThinking = createEmptyTopicWith10Cards('design-thinking', 'Design Thinking Process', '💡', 'عملية التفكير التصميمي');
const userResearch = createEmptyTopicWith10Cards('user-research', 'User Research', '🔍', 'البحث عن المستخدمين');
const competitiveAnalysis = createEmptyTopicWith10Cards('competitive-analysis', 'Competitive Analysis', '📊', 'تحليل المنافسين');
const problemDefinition = createEmptyTopicWith10Cards('problem-definition', 'Problem Definition', '🎯', 'تحديد المشكلة');
const userNeeds = createEmptyTopicWith10Cards('user-needs', 'User Needs & Pain Points', '🩹', 'احتياجات المستخدم ونقاط الألم');
const personas = createEmptyTopicWith10Cards('personas', 'Personas', '👤', 'شخصيات المستخدمين');
const empathyMap = createEmptyTopicWith10Cards('empathy-map', 'Empathy Map', '🗺️', 'خريطة التعاطف');
const userStories = createEmptyTopicWith10Cards('user-stories', 'User Stories / JTBD', '📝', 'قصص المستخدمين');
const userFlow = createEmptyTopicWith10Cards('user-flow', 'User Flow', '🔄', 'تدفق المستخدم');
const userJourneyMap = createEmptyTopicWith10Cards('user-journey-map', 'User Journey Map', '🛤️', 'خريطة رحلة المستخدم');
const infoArchitecture = createEmptyTopicWith10Cards('info-architecture', 'Information Architecture', '🏗️', 'هندسة المعلومات');
const sitemapNav = createEmptyTopicWith10Cards('sitemap-nav', 'Sitemap & Navigation', '🗺️', 'خريطة الموقع والتنقل');
const wireframing = createEmptyTopicWith10Cards('wireframing', 'Wireframing (Low / Mid Fidelity)', '✏️', 'التخطيط الشبكي');
const uxPrototyping = createEmptyTopicWith10Cards('ux-prototyping', 'UX Prototyping', '📱', 'النماذج الأولية للـ UX');
const usabilityTesting = createEmptyTopicWith10Cards('usability-testing', 'Usability Testing', '🧪', 'اختبار الاستخدام');
const uxIteration = createEmptyTopicWith10Cards('ux-iteration', 'UX Iteration & Validation', '🔄', 'التكرار والتحقق من الصحة');
const uxDocumentation = createEmptyTopicWith10Cards('ux-documentation', 'UX Documentation & Handoff', '📄', 'التوثيق والتسليم');

// UI Track Topics (Keeping simplified for now)
const uiFoundations: Topic = {
  id: 'ui-foundations',
  trackId: 'ui-track',
  title: 'أساسيات تصميم UI',
  emoji: '🎨',
  description: 'فهم المبادئ الأساسية لتصميم الواجهات',
  estimatedTime: 15,
  steps: [
    { id: 'intro', title: 'مقدمة', content: 'قريباً...', type: 'introduction' },
    { id: 'summary', title: 'الخلاصة', content: 'قريباً...', type: 'summary' },
  ],
};

// Tracks Definition
export const tracks: Track[] = [
  {
    id: 'ux-track',
    title: 'مسار UX',
    emoji: '🧠',
    color: '#0E2A57',
    description: 'تعلم كيفية فهم المستخدمين وحل مشاكلهم بطريقة إبداعية ومنظمة.',
    topics: [
      uxFoundations, designThinking, userResearch, competitiveAnalysis, problemDefinition,
      userNeeds, personas, empathyMap, userStories, userFlow, userJourneyMap,
      infoArchitecture, sitemapNav, wireframing, uxPrototyping, usabilityTesting,
      uxIteration, uxDocumentation,
    ],
  },
  {
    id: 'ui-track',
    title: 'مسار UI',
    emoji: '🎨',
    color: '#1F4B8F',
    description: 'تعلم كيفية تصميم واجهات جميلة وجذابة وسهلة الاستخدام.',
    topics: [uiFoundations],
  },
  {
    id: 'integration-track',
    title: 'التكامل',
    emoji: '🔄',
    color: '#3B82F6',
    description: 'كيفية دمج UX و UI معاً لإنشاء منتج رقمي متكامل وناجح.',
    topics: [],
  },
  {
    id: 'bonus-track',
    title: 'محتوى إضافي',
    emoji: '🎁',
    color: '#8B5CF6',
    description: 'أدوات، نصائح مهنية، وموارد إضافية لتطوير مهاراتك كمصمم.',
    topics: [],
  },
];
