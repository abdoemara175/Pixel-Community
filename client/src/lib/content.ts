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
const problemDefinition: Topic = {
  id: 'problem-definition',
  trackId: 'ux-track',
  title: 'Problem Definition',
  emoji: '🎯',
  description: 'تحديد المشكلة',
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'ليه أحيانًا بنشتغل كتير… وفي الآخر نكتشف إننا بنحل مشكلة مش مهمة؟', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'تحديد المشكلة بشكل واضح بناءً على البحث.', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'بيحدد اتجاه الشغل كله\nولو غلط → كل اللي بعده غلط', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: '- مين المستخدم؟\n- ايه المشكلة؟\n- ليه بتحصل؟', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: 'طالب مش بينظم وقته بسبب عدم وجود طريقة واضحة', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: “نعمل App”\nGood: “User عنده مشكلة”', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: '- مشكلة عامة\n- بدون User', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: '- خليك محدد\n- اربط المشكلة بالمستخدم', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'اكتب Problem Statement لمشكلة واجهتك', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'مشكلة واضحة = حل صح', type: 'summary' },
  ],
};
const userNeeds: Topic = {
  id: 'user-needs',
  trackId: 'ux-track',
  title: 'User Needs & Pain Points',
  emoji: '🩹',
  description: 'احتياجات المستخدم ونقاط الألم',
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'ليه المستخدم بيشتكي؟ وإيه اللي فعلاً محتاجه؟', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'Pain Points = المشاكل\nNeeds = اللي محتاجه عشان يحلها', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'بيوضح انت هتصمم ليه', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: '- Goal: هدف المستخدم\n- Pain: المشكلة\n- Need: الحل', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: 'بينسى المواعيد → محتاج Reminder', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: تركز على Features\nGood: تركز على المشكلة', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: '- تجاهل السبب الحقيقي', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: '- اسأل “ليه” أكتر من مرة', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'اكتب Pain + Need لمشكلة شائعة', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'كل مشكلة = فرصة تصميم', type: 'summary' },
  ],
};
const personas: Topic = {
  id: 'personas',
  trackId: 'ux-track',
  title: 'Personas',
  emoji: '👤',
  description: 'شخصيات المستخدمين',
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'هل ينفع نصمم من غير ما نعرف بنصمم لمين؟', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'Persona هي شخصية خيالية تمثل المستخدم الحقيقي.', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'بتخليك تصمم بتركيز', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: '- Name\n- Age\n- Goals\n- Pain Points\n- Behavior', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: 'طالب بيعاني من تنظيم الوقت', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: Persona عشوائية\nGood: مبنية على Data', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: '- اختراع بيانات', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: '- خليها واقعية\n- اربطها بالبحث', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'اعمل Persona بسيطة لمستخدم تطبيقك', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'Persona = المستخدم بقى واضح', type: 'summary' },
  ],
};
const empathyMap: Topic = {
  id: 'empathy-map',
  trackId: 'ux-track',
  title: 'Empathy Map',
  emoji: '🗺️',
  description: 'خريطة التعاطف',
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: '1. Introduction', content: 'هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟', type: 'introduction' },
    { id: 'concept', title: '2. Concept', content: 'Empathy Map أداة لفهم المستخدم بشكل أعمق (مشاعره وسلوكه)', type: 'concept' },
    { id: 'why', title: '3. Why it matters', content: 'بيخليك تشوف من وجهة نظر المستخدم', type: 'why-it-matters' },
    { id: 'breakdown', title: '4. Breakdown', content: '- Says\n- Thinks\n- Does\n- Feels', type: 'breakdown' },
    { id: 'example', title: '5. Example', content: '“مش لاقي وقت” → توتر', type: 'example' },
    { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: كلام عام\nGood: كلام حقيقي', type: 'bad-vs-good' },
    { id: 'mistakes', title: '7. Common Mistakes', content: '- عدم الربط بالـ Persona', type: 'mistakes' },
    { id: 'tips', title: '8. Practical Tips', content: '- استخدم كلام المستخدم\n- اربط كل حاجة بالواقع', type: 'tips' },
    { id: 'activity', title: '9. Mini Activity', content: 'اعمل Empathy Map بسيطة لمستخدمك', type: 'activity' },
    { id: 'summary', title: '10. Summary', content: 'افهم المستخدم من جوه مش من بره', type: 'summary' },
  ],
};
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
