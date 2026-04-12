/**
 * PIXEL UX Learning Platform - Content Structure
 * 
 * This file defines the complete learning journey structure with:
 * - Multiple learning tracks (UX, UI, Integration, Bonus)
 * - Topics organized by track
 * - Step-by-step learning content for each topic (10 cards per topic)
 * - Multi-language support (Arabic and English)
 */

import { Language } from './i18n';

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
const createEmptyTopicWith10Cards = (id: string, trackId: string, title: string, emoji: string, description: string, lang: Language): Topic => ({
  id,
  trackId,
  title,
  emoji,
  description,
  estimatedTime: 20,
  steps: [
    { id: 'intro', title: lang === 'ar' ? '1. المقدمة' : '1. Introduction', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'introduction' },
    { id: 'concept', title: lang === 'ar' ? '2. المفهوم' : '2. Concept', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'concept' },
    { id: 'why', title: lang === 'ar' ? '3. لماذا يهم' : '3. Why it matters', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'why-it-matters' },
    { id: 'breakdown', title: lang === 'ar' ? '4. التفصيل' : '4. Breakdown', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'breakdown' },
    { id: 'example', title: lang === 'ar' ? '5. مثال' : '5. Example', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'example' },
    { id: 'bad-vs-good', title: lang === 'ar' ? '6. السيء مقابل الجيد' : '6. Bad vs Good', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'bad-vs-good' },
    { id: 'mistakes', title: lang === 'ar' ? '7. الأخطاء الشائعة' : '7. Common Mistakes', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'mistakes' },
    { id: 'tips', title: lang === 'ar' ? '8. نصائح عملية' : '8. Practical Tips', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'tips' },
    { id: 'activity', title: lang === 'ar' ? '9. نشاط صغير' : '9. Mini Activity', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'activity' },
    { id: 'summary', title: lang === 'ar' ? '10. الملخص' : '10. Summary', content: lang === 'ar' ? 'قريباً...' : 'Coming soon...', type: 'summary' },
  ],
});

const getUXTrack = (lang: Language): Track => {
  const uxFoundations: Topic = {
    id: 'ux-foundations',
    trackId: 'ux-track',
    title: lang === 'ar' ? 'أساسيات تجربة المستخدم' : 'UX Foundations',
    emoji: '🧠',
    description: lang === 'ar' ? 'أساسيات تجربة المستخدم' : 'User Experience Foundations',
    estimatedTime: 20,
    steps: lang === 'ar' ? [
      { id: 'intro', title: '1. المقدمة', content: 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟', type: 'introduction' },
      { id: 'concept', title: '2. المفهوم', content: 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.', type: 'concept' },
      { id: 'why', title: '3. لماذا يهم', content: 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو\nUX الجيد بيزود رضا المستخدم وبيخليه يرجع تاني', type: 'why-it-matters' },
      { id: 'breakdown', title: '4. التفصيل', content: '- Usability: هل سهل الاستخدام؟\n- Clarity: هل واضح؟\n- Efficiency: هل بيوصل لهدفه بسرعة؟\n- Satisfaction: هل التجربة مريحة؟', type: 'breakdown' },
      { id: 'example', title: '5. مثال', content: 'تطبيق طلب أكل:\nلو خلّصت الطلب في خطوات قليلة → UX كويس\nلو تهت بين الصفحات → UX سيء', type: 'example' },
      { id: 'bad-vs-good', title: '6. السيء مقابل الجيد', content: 'Bad: خطوات كتير + لخبطة\nGood: خطوات واضحة وسريعة', type: 'bad-vs-good' },
      { id: 'mistakes', title: '7. الأخطاء الشائعة', content: '- التركيز على الشكل بس\n- تجاهل تجربة المستخدم', type: 'mistakes' },
      { id: 'tips', title: '8. نصائح عملية', content: '- خلي كل خطوة واضحة\n- قلل عدد الخطوات\n- اختبر على حد حقيقي', type: 'tips' },
      { id: 'activity', title: '9. نشاط صغير', content: 'قول مثال على App UX بتاعه سيء وليه', type: 'activity' },
      { id: 'summary', title: '10. الملخص', content: 'UX = سهولة + وضوح + راحة المستخدم', type: 'summary' },
    ] : [
      { id: 'intro', title: '1. Introduction', content: 'Why do we use some apps daily... and delete others after the first use?', type: 'introduction' },
      { id: 'concept', title: '2. Concept', content: 'UX is the user experience while using the product, not just its look, but how it feels and whether they can achieve their goal easily.', type: 'concept' },
      { id: 'why', title: '3. Why it matters', content: 'If the user gets confused or tired during use → they will leave the product even if it looks good. Good UX increases user satisfaction and keeps them coming back.', type: 'why-it-matters' },
      { id: 'breakdown', title: '4. Breakdown', content: '- Usability: Is it easy to use?\n- Clarity: Is it clear?\n- Efficiency: Does it reach the goal quickly?\n- Satisfaction: Is the experience comfortable?', type: 'breakdown' },
      { id: 'example', title: '5. Example', content: 'Food delivery app:\nIf you finish the order in few steps → Good UX\nIf you get lost between pages → Bad UX', type: 'example' },
      { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: Too many steps + confusion\nGood: Clear and fast steps', type: 'bad-vs-good' },
      { id: 'mistakes', title: '7. Common Mistakes', content: '- Focusing only on looks\n- Ignoring user experience', type: 'mistakes' },
      { id: 'tips', title: '8. Practical Tips', content: '- Make every step clear\n- Reduce the number of steps\n- Test on a real person', type: 'tips' },
      { id: 'activity', title: '9. Mini Activity', content: 'Give an example of an app with bad UX and why.', type: 'activity' },
      { id: 'summary', title: '10. Summary', content: 'UX = Ease + Clarity + User Comfort', type: 'summary' },
    ],
  };

  const designThinking: Topic = {
    id: 'design-thinking',
    trackId: 'ux-track',
    title: lang === 'ar' ? 'عملية التفكير التصميمي' : 'Design Thinking Process',
    emoji: '💡',
    description: lang === 'ar' ? 'عملية التفكير التصميمي' : 'Design Thinking Process',
    estimatedTime: 20,
    steps: lang === 'ar' ? [
      { id: 'intro', title: '1. المقدمة', content: 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟', type: 'introduction' },
      { id: 'concept', title: '2. المفهوم', content: 'Design Thinking هو أسلوب لحل المشاكل بيركز على فهم المستخدم قبل ما نبدأ نحل.', type: 'concept' },
      { id: 'why', title: '3. لماذا يهم', content: 'بيمنعك تشتغل على افتراضات\nوبيخليك تبني حلول مبنية على الواقع', type: 'why-it-matters' },
      { id: 'breakdown', title: '4. التفصيل', content: '- Empathize: افهم المستخدم\n- Define: حدد المشكلة\n- Ideate: فكر في حلول\n- Prototype: جرب\n- Test: اختبر', type: 'breakdown' },
      { id: 'example', title: '5. مثال', content: 'طالب مش بينظم وقته → نفهم السبب → نحدد المشكلة → نجرب حل', type: 'example' },
      { id: 'bad-vs-good', title: '6. السيء مقابل الجيد', content: 'Bad: تبدأ تصميم على طول\nGood: تفهم المشكلة الأول', type: 'bad-vs-good' },
      { id: 'mistakes', title: '7. الأخطاء الشائعة', content: '- تجاهل مرحلة الفهم\n- القفز للحل بسرعة', type: 'mistakes' },
      { id: 'tips', title: '8. نصائح عملية', content: '- اسأل كتير قبل ما تصمم\n- خليك مرن', type: 'tips' },
      { id: 'activity', title: '9. نشاط صغير', content: 'اختار مشكلة وامشي عليها بالمراحل', type: 'activity' },
      { id: 'summary', title: '10. الملخص', content: 'افهم → حدد → حل → جرّب', type: 'summary' },
    ] : [
      { id: 'intro', title: '1. Introduction', content: 'Why do we sometimes solve a problem... and discover we solved the wrong one?', type: 'introduction' },
      { id: 'concept', title: '2. Concept', content: 'Design Thinking is a problem-solving approach that focuses on understanding the user before starting to solve.', type: 'concept' },
      { id: 'why', title: '3. Why it matters', content: 'It prevents you from working on assumptions and makes you build solutions based on reality.', type: 'why-it-matters' },
      { id: 'breakdown', title: '4. Breakdown', content: '- Empathize: Understand the user\n- Define: Define the problem\n- Ideate: Think of solutions\n- Prototype: Try it out\n- Test: Test it', type: 'breakdown' },
      { id: 'example', title: '5. Example', content: 'A student not organizing their time → Understand the reason → Define the problem → Try a solution', type: 'example' },
      { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: Start designing immediately\nGood: Understand the problem first', type: 'bad-vs-good' },
      { id: 'mistakes', title: '7. Common Mistakes', content: '- Ignoring the understanding phase\n- Jumping to the solution quickly', type: 'mistakes' },
      { id: 'tips', title: '8. Practical Tips', content: '- Ask a lot before you design\n- Be flexible', type: 'tips' },
      { id: 'activity', title: '9. Mini Activity', content: 'Choose a problem and walk through the stages.', type: 'activity' },
      { id: 'summary', title: '10. Summary', content: 'Understand → Define → Solve → Try', type: 'summary' },
    ],
  };

  return {
    id: 'ux-track',
    title: lang === 'ar' ? 'مسار تجربة المستخدم (UX)' : 'UX Design Track',
    emoji: '🎨',
    color: '#4F46E5',
    description: lang === 'ar' ? 'تعلم كيف تفهم المستخدم وتبني منتجات سهلة الاستخدام.' : 'Learn how to understand users and build easy-to-use products.',
    topics: [
      uxFoundations,
      designThinking,
      createEmptyTopicWith10Cards('user-research', 'ux-track', lang === 'ar' ? 'البحث عن المستخدمين' : 'User Research', '🔍', lang === 'ar' ? 'البحث عن المستخدمين' : 'User Research', lang),
      createEmptyTopicWith10Cards('competitive-analysis', 'ux-track', lang === 'ar' ? 'تحليل المنافسين' : 'Competitive Analysis', '📊', lang === 'ar' ? 'تحليل المنافسين' : 'Competitive Analysis', lang),
      createEmptyTopicWith10Cards('problem-definition', 'ux-track', lang === 'ar' ? 'تحديد المشكلة' : 'Problem Definition', '🎯', lang === 'ar' ? 'تحديد المشكلة' : 'Problem Definition', lang),
      createEmptyTopicWith10Cards('user-needs', 'ux-track', lang === 'ar' ? 'احتياجات المستخدم' : 'User Needs', '🩹', lang === 'ar' ? 'احتياجات المستخدم ونقاط الألم' : 'User Needs & Pain Points', lang),
      createEmptyTopicWith10Cards('personas', 'ux-track', lang === 'ar' ? 'شخصيات المستخدمين' : 'Personas', '👤', lang === 'ar' ? 'شخصيات المستخدمين' : 'Personas', lang),
      createEmptyTopicWith10Cards('empathy-map', 'ux-track', lang === 'ar' ? 'خريطة التعاطف' : 'Empathy Map', '🗺️', lang === 'ar' ? 'خريطة التعاطف' : 'Empathy Map', lang),
    ],
  };
};

const getUITrack = (lang: Language): Track => ({
  id: 'ui-track',
  title: lang === 'ar' ? 'مسار واجهة المستخدم (UI)' : 'UI Design Track',
  emoji: '✨',
  color: '#EC4899',
  description: lang === 'ar' ? 'تعلم كيف تصمم واجهات جذابة واحترافية.' : 'Learn how to design attractive and professional interfaces.',
  topics: [
    createEmptyTopicWith10Cards('ui-design', 'ui-track', lang === 'ar' ? 'أساسيات UI' : 'UI Fundamentals', '🎨', lang === 'ar' ? 'تصميم الواجهة' : 'UI Design Fundamentals', lang),
    createEmptyTopicWith10Cards('color-typography', 'ui-track', lang === 'ar' ? 'الألوان والخطوط' : 'Color & Typography', '🔤', lang === 'ar' ? 'الألوان والطباعة' : 'Color & Typography', lang),
    createEmptyTopicWith10Cards('component-system', 'ui-track', lang === 'ar' ? 'نظام المكونات' : 'Component System', '🧩', lang === 'ar' ? 'نظام المكونات' : 'Component System', lang),
    createEmptyTopicWith10Cards('design-systems', 'ui-track', lang === 'ar' ? 'أنظمة التصميم' : 'Design Systems', '📐', lang === 'ar' ? 'أنظمة التصميم' : 'Design Systems', lang),
  ],
});

const getIntegrationTrack = (lang: Language): Track => ({
  id: 'integration-track',
  title: lang === 'ar' ? 'مسار التكامل' : 'Integration Track',
  emoji: '🔗',
  color: '#10B981',
  description: lang === 'ar' ? 'كيف يربط المصمم عمله مع المطورين.' : 'How designers bridge their work with developers.',
  topics: [
    createEmptyTopicWith10Cards('handoff', 'integration-track', lang === 'ar' ? 'التسليم للمطورين' : 'Developer Handoff', '📦', lang === 'ar' ? 'التسليم' : 'Handoff & Collaboration', lang),
    createEmptyTopicWith10Cards('design-tools', 'integration-track', lang === 'ar' ? 'أدوات التصميم' : 'Design Tools', '🛠️', lang === 'ar' ? 'أدوات التصميم والسوفتوير' : 'Design Tools & Software', lang),
  ],
});

const getBonusTrack = (lang: Language): Track => ({
  id: 'bonus-track',
  title: lang === 'ar' ? 'محتوى إضافي' : 'Bonus Content',
  emoji: '🎁',
  color: '#F59E0B',
  description: lang === 'ar' ? 'نصائح ودراسات حالة لتطوير مهاراتك.' : 'Tips and case studies to develop your skills.',
  topics: [
    createEmptyTopicWith10Cards('case-studies', 'bonus-track', lang === 'ar' ? 'دراسات حالة' : 'Case Studies', '📁', lang === 'ar' ? 'دراسات الحالة' : 'Case Studies', lang),
    createEmptyTopicWith10Cards('best-practices', 'bonus-track', lang === 'ar' ? 'أفضل الممارسات' : 'Best Practices', '🌟', lang === 'ar' ? 'أفضل الممارسات والنصائح' : 'Best Practices & Tips', lang),
  ],
});

export const getTracks = (lang: Language): Track[] => [
  getUXTrack(lang),
  getUITrack(lang),
  getIntegrationTrack(lang),
  getBonusTrack(lang),
];
