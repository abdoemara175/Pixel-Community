/**
 * PIXEL UX Learning Platform - Content Structure
 * 
 * This file defines the complete learning journey structure with:
 * - Multiple learning tracks (UX, UI, Integration, Bonus)
 * - Topics organized by track
 * - Step-by-step learning content for each topic
 * - Interactive activities and assessments
 */

export interface Step {
  id: string;
  title: string;
  content: string;
  type: 'introduction' | 'concept' | 'example' | 'activity' | 'summary';
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

// Helper to create empty topic
const createEmptyTopic = (id: string, title: string, emoji: string, description: string): Topic => ({
  id,
  trackId: 'ux-track',
  title,
  emoji,
  description,
  estimatedTime: 10,
  steps: [
    {
      id: 'placeholder',
      title: 'قريباً',
      content: 'سيتم إضافة المحتوى لهذا الموضوع قريباً.',
      type: 'introduction',
    }
  ],
});

// UX Track Topics (New List)
const uxFoundations = createEmptyTopic('ux-foundations', 'UX Foundations', '🧠', 'أساسيات تجربة المستخدم');
const designThinking = createEmptyTopic('design-thinking', 'Design Thinking Process', '💡', 'عملية التفكير التصميمي');
const userResearch = createEmptyTopic('user-research', 'User Research', '🔍', 'البحث عن المستخدمين');
const competitiveAnalysis = createEmptyTopic('competitive-analysis', 'Competitive Analysis', '📊', 'تحليل المنافسين');
const problemDefinition = createEmptyTopic('problem-definition', 'Problem Definition', '🎯', 'تحديد المشكلة');
const userNeeds = createEmptyTopic('user-needs', 'User Needs & Pain Points', '🩹', 'احتياجات المستخدم ونقاط الألم');
const personas = createEmptyTopic('personas', 'Personas', '👤', 'شخصيات المستخدمين');
const empathyMap = createEmptyTopic('empathy-map', 'Empathy Map', '🗺️', 'خريطة التعاطف');
const userStories = createEmptyTopic('user-stories', 'User Stories / JTBD', '📝', 'قصص المستخدمين');
const userFlow = createEmptyTopic('user-flow', 'User Flow', '🔄', 'تدفق المستخدم');
const userJourneyMap = createEmptyTopic('user-journey-map', 'User Journey Map', '🛤️', 'خريطة رحلة المستخدم');
const infoArchitecture = createEmptyTopic('info-architecture', 'Information Architecture', '🏗️', 'هندسة المعلومات');
const sitemapNav = createEmptyTopic('sitemap-nav', 'Sitemap & Navigation', '🗺️', 'خريطة الموقع والتنقل');
const wireframing = createEmptyTopic('wireframing', 'Wireframing (Low / Mid Fidelity)', '✏️', 'التخطيط الشبكي');
const uxPrototyping = createEmptyTopic('ux-prototyping', 'UX Prototyping', '📱', 'النماذج الأولية للـ UX');
const usabilityTesting = createEmptyTopic('usability-testing', 'Usability Testing', '🧪', 'اختبار الاستخدام');
const uxIteration = createEmptyTopic('ux-iteration', 'UX Iteration & Validation', '🔄', 'التكرار والتحقق من الصحة');
const uxDocumentation = createEmptyTopic('ux-documentation', 'UX Documentation & Handoff', '📄', 'التوثيق والتسليم');

// UI Track Topics (Keeping existing for now or adding placeholders if needed)
const uiFoundations: Topic = {
  id: 'ui-foundations',
  trackId: 'ui-track',
  title: 'أساسيات تصميم UI',
  emoji: '🎨',
  description: 'فهم المبادئ الأساسية لتصميم الواجهات',
  estimatedTime: 15,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'UI تعني "User Interface" - واجهة المستخدم. هي كل ما يراه ويتفاعل معه المستخدم على الشاشة.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'الفرق بين UX و UI',
      content: 'UX هو الشعور والتجربة الكلية، بينما UI هو التصميم البصري والعناصر التفاعلية.',
      type: 'concept',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'UI الجيد يجعل التفاعل مع المنتج سهلاً وممتعاً.',
      type: 'summary',
    },
  ],
};

const colorSystem: Topic = {
  id: 'color-system',
  trackId: 'ui-track',
  title: 'نظام الألوان',
  emoji: '🌈',
  description: 'تعلم كيفية اختيار واستخدام الألوان بفعالية',
  estimatedTime: 17,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'الألوان تؤثر على المشاعر والسلوك. اختيار الألوان الصحيحة يحسن من تجربة المستخدم.',
      type: 'introduction',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'نظام الألوان القوي يعزز العلامة التجارية ويسهل الاستخدام.',
      type: 'summary',
    },
  ],
};

const typography: Topic = {
  id: 'typography',
  trackId: 'ui-track',
  title: 'الخطوط والتايبوجرافي',
  emoji: '🔤',
  description: 'فهم كيفية استخدام الخطوط لتحسين القراءة والوضوح',
  estimatedTime: 16,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'التايبوجرافي هو فن ترتيب الخطوط لجعل النص مقروءاً وجذاباً.',
      type: 'introduction',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'الخطوط الجيدة تحسن من تجربة القراءة وتوصل الرسالة بوضوح.',
      type: 'summary',
    },
  ],
};

const layoutGrid: Topic = {
  id: 'layout-grid',
  trackId: 'ui-track',
  title: 'التخطيط والشبكات (Layout)',
  emoji: '📏',
  description: 'تعلم كيفية تنظيم العناصر على الشاشة باستخدام الشبكات',
  estimatedTime: 18,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'التخطيط الجيد ينظم المحتوى ويوجه عين المستخدم.',
      type: 'introduction',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'استخدام الشبكات يضمن تناسق التصميم عبر مختلف الشاشات.',
      type: 'summary',
    },
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
      uxFoundations,
      designThinking,
      userResearch,
      competitiveAnalysis,
      problemDefinition,
      userNeeds,
      personas,
      empathyMap,
      userStories,
      userFlow,
      userJourneyMap,
      infoArchitecture,
      sitemapNav,
      wireframing,
      uxPrototyping,
      usabilityTesting,
      uxIteration,
      uxDocumentation,
    ],
  },
  {
    id: 'ui-track',
    title: 'مسار UI',
    emoji: '🎨',
    color: '#1F4B8F',
    description: 'تعلم كيفية تصميم واجهات جميلة وجذابة وسهلة الاستخدام.',
    topics: [
      uiFoundations,
      colorSystem,
      typography,
      layoutGrid,
    ],
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
