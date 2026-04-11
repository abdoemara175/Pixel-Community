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
const uxFoundations: Topic = {
  id: 'ux-foundations',
  trackId: 'ux-track',
  title: 'UX Foundations',
  emoji: '🧠',
  description: 'أساسيات تجربة المستخدم',
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو\nUX الجيد بيزود رضا المستخدم وبيخليه يرجع تاني', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: '- Usability: هل سهل الاستخدام؟\n- Clarity: هل واضح؟\n- Efficiency: هل بيوصل لهدفه بسرعة؟\n- Satisfaction: هل التجربة مريحة؟', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: 'تطبيق طلب أكل:\nلو خلّصت الطلب في خطوات قليلة → UX كويس\nلو تهت بين الصفحات → UX سيء', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: خطوات كتير + لخبطة\nGood: خطوات واضحة وسريعة', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: '- التركيز على الشكل بس\n- تجاهل تجربة المستخدم', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: '- خلي كل خطوة واضحة\n- قلل عدد الخطوات\n- اختبر على حد حقيقي', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'قول مثال على App UX بتاعه سيء وليه', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'UX = سهولة + وضوح + راحة المستخدم', type: 'summary' },
  ],
};
const designThinking: Topic = {
  id: 'design-thinking',
  trackId: 'ux-track',
  title: 'Design Thinking Process',
  emoji: '💡',
  description: 'عملية التفكير التصميمي',
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'Design Thinking هو أسلوب لحل المشاكل بيركز على فهم المستخدم قبل ما نبدأ نحل.', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'بيمنعك تشتغل على افتراضات\nوبيخليك تبني حلول مبنية على الواقع', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: '- Empathize: افهم المستخدم\n- Define: حدد المشكلة\n- Ideate: فكر في حلول\n- Prototype: جرب\n- Test: اختبر', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: 'طالب مش بينظم وقته → نفهم السبب → نحدد المشكلة → نجرب حل', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: تبدأ تصميم على طول\nGood: تفهم المشكلة الأول', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: '- تجاهل مرحلة الفهم\n- القفز للحل بسرعة', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: '- اسأل كتير قبل ما تصمم\n- خليك مرن', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'اختار مشكلة وامشي عليها بالمراحل', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'افهم → حدد → حل → جرّب', type: 'summary' },
  ],
};
const userResearch = createEmptyTopicWith10Cards('user-research', 'User Research', '🔍', 'البحث عن المستخدمين');
const competitiveAnalysis: Topic = {
  id: 'competitive-analysis',
  trackId: 'ux-track',
  title: 'Competitive Analysis',
  emoji: '📊',
  description: 'تحليل المنافسين',
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'ليه نبدأ من الصفر… وفي ناس عملت نفس الفكرة قبلنا؟', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'تحليل المنافسين لفهم هم بيعملوا ايه صح وايه غلط.', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'يوفر وقت\nويساعدك تعمل حاجة أحسن', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: '- Identify competitors\n- تحليل المميزات\n- تحليل العيوب\n- استخراج فرص', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: 'تقارن بين 2 Apps لتنظيم الوقت', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: تقلد المنافس\nGood: تتعلم منه', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: '- النسخ\n- تحليل سطحي', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: '- ركز على تجربة الاستخدام\n- جرب المنتج بنفسك', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'اذكر ميزة وعيب في App بتستخدمه', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'اتعلم من غيرك… مش تنسخه', type: 'summary' },
  ],
};
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
