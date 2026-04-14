/**
 * PIXEL UX Learning Platform - Content Structure
 * 
 * This file defines the complete learning journey structure with:
 * - Multiple learning tracks (UX, UI, Integration, Bonus)
 * - Topics organized by track
 * - Step-by-step learning content for each topic
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

const getUXTrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'ux-foundations',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'أساسيات تجربة المستخدم' : 'UX Foundations',
      emoji: '🧠',
      description: lang === 'ar' ? 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها؟' : 'User Experience Foundations',
      estimatedTime: 15,
      steps: lang === 'ar' ? [
        { id: 'intro', title: '1. المقدمة', content: 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟', type: 'introduction' },
        { id: 'concept', title: '2. المفهوم', content: 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.', type: 'concept' },
        { id: 'why', title: '3. لماذا يهم', content: 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو\n\n✅ UX الجيد بيزود رضا المستخدم وبيخليه يرجع تاني', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. التفصيل', content: '• Usability: هل سهل الاستخدام؟\n• Clarity: هل واضح؟\n• Efficiency: هل بيوصل لهدفه بسرعة؟\n• Satisfaction: هل التجربة مريحة؟', type: 'breakdown' },
        { id: 'example', title: '5. مثال', content: 'تطبيق طلب أكل:\n\n✅ لو خلّصت الطلب في خطوات قليلة → UX كويس\n❌ لو تهت بين الصفحات → UX سيء', type: 'example' },
        { id: 'bad-vs-good', title: '6. السيء مقابل الجيد', content: '❌ Bad: خطوات كتير + لخبطة\n✅ Good: خطوات واضحة وسريعة', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. الأخطاء الشائعة', content: '• التركيز على الشكل بس\n• تجاهل تجربة المستخدم الحقيقية', type: 'mistakes' },
        { id: 'tips', title: '8. نصائح عملية', content: '• خلي كل خطوة واضحة\n• قلل عدد الخطوات قدر الإمكان\n• اختبر تصميمك على مستخدم حقيقي', type: 'tips' },
        { id: 'activity', title: '9. نشاط صغير', content: 'فكر في تطبيق بتستخدمه يومياً.. قول مثال على حاجة في الـ UX بتاعه سيئة ومضايقاك وليه؟', type: 'activity' },
        { id: 'summary', title: '10. الملخص', content: 'UX = سهولة + وضوح + راحة المستخدم', type: 'summary' },
      ] : [
        { id: 'intro', title: '1. Introduction', content: 'Why do we use some apps daily... and delete others after the first use?', type: 'introduction' },
        { id: 'concept', title: '2. Concept', content: 'UX is the user experience while using the product, not just its look, but how it feels and whether they can achieve their goal easily.', type: 'concept' },
        { id: 'why', title: '3. Why it matters', content: 'If the user gets confused or tired during use → they will leave the product even if it looks good. Good UX increases user satisfaction.', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. Breakdown', content: '• Usability\n• Clarity\n• Efficiency\n• Satisfaction', type: 'breakdown' },
        { id: 'example', title: '5. Example', content: 'Food delivery app: Few steps = Good UX, Getting lost = Bad UX', type: 'example' },
        { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: Too many steps + confusion\nGood: Clear and fast steps', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. Common Mistakes', content: 'Focusing only on looks, ignoring user experience', type: 'mistakes' },
        { id: 'tips', title: '8. Practical Tips', content: 'Make every step clear, reduce steps, test on real people', type: 'tips' },
        { id: 'activity', title: '9. Mini Activity', content: 'Give an example of an app with bad UX and why.', type: 'activity' },
        { id: 'summary', title: '10. Summary', content: 'UX = Ease + Clarity + User Comfort', type: 'summary' },
      ]
    },
    {
      id: 'design-thinking',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'عملية التفكير التصميمي' : 'Design Thinking Process',
      emoji: '💡',
      description: lang === 'ar' ? 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟' : 'Design Thinking Process',
      estimatedTime: 15,
      steps: lang === 'ar' ? [
        { id: 'intro', title: '1. المقدمة', content: 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟', type: 'introduction' },
        { id: 'concept', title: '2. المفهوم', content: 'Design Thinking هو أسلوب لحل المشاكل بيركز على فهم المستخدم قبل ما نبدأ نحل.', type: 'concept' },
        { id: 'why', title: '3. لماذا يهم', content: '• بيمنعك تشتغل على افتراضات\n• بيخليك تبني حلول مبنية على الواقع', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. التفصيل', content: '1. Empathize: افهم المستخدم\n2. Define: حدد المشكلة\n3. Ideate: فكر في حلول\n4. Prototype: جرب\n5. Test: اختبر', type: 'breakdown' },
        { id: 'example', title: '5. مثال', content: 'طالب مش بينظم وقته → نفهم السبب → نحدد المشكلة → نجرب حل', type: 'example' },
        { id: 'bad-vs-good', title: '6. السيء مقابل الجيد', content: '❌ Bad: تبدأ تصميم على طول\n✅ Good: تفهم المشكلة الأول', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. الأخطاء الشائعة', content: '• تجاهل مرحلة الفهم\n• القفز للحل بسرعة', type: 'mistakes' },
        { id: 'tips', title: '8. نصائح عملية', content: '• اسأل كتير قبل ما تصمم\n• خليك مرن ومستعد للتغيير', type: 'tips' },
        { id: 'activity', title: '9. نشاط صغير', content: 'اختار مشكلة بسيطة بتقابلك في يومك وامشي عليها بمراحل الـ Design Thinking', type: 'activity' },
        { id: 'summary', title: '10. الملخص', content: 'افهم → حدد → حل → جرّب', type: 'summary' },
      ] : [
        { id: 'intro', title: '1. Introduction', content: 'Why do we sometimes solve a problem... and discover we solved the wrong one?', type: 'introduction' },
        { id: 'concept', title: '2. Concept', content: 'Design Thinking is a problem-solving approach that focuses on understanding the user.', type: 'concept' },
        { id: 'why', title: '3. Why it matters', content: 'Prevents assumptions, builds real solutions.', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. Breakdown', content: 'Empathize, Define, Ideate, Prototype, Test', type: 'breakdown' },
        { id: 'example', title: '5. Example', content: 'Student time management problem solving.', type: 'example' },
        { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: Design immediately, Good: Understand first', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. Common Mistakes', content: 'Ignoring understanding, jumping to solutions', type: 'mistakes' },
        { id: 'tips', title: '8. Practical Tips', content: 'Ask a lot, be flexible', type: 'tips' },
        { id: 'activity', title: '9. Mini Activity', content: 'Choose a problem and walk through the stages.', type: 'activity' },
        { id: 'summary', title: '10. Summary', content: 'Understand → Define → Solve → Try', type: 'summary' },
      ]
    },
    {
      id: 'user-research',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'بحث المستخدم' : 'User Research',
      emoji: '🔍',
      description: lang === 'ar' ? 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟' : 'User Research',
      estimatedTime: 15,
      steps: lang === 'ar' ? [
        { id: 'intro', title: '1. المقدمة', content: 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟', type: 'introduction' },
        { id: 'concept', title: '2. المفهوم', content: 'User Research هو جمع معلومات عن المستخدمين عشان نفهم سلوكهم واحتياجاتهم.', type: 'concept' },
        { id: 'why', title: '3. لماذا يهم', content: '• بيخليك تبني على بيانات مش تخمين\n• بيوفر وقت ومجهود كبير في التصميم', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. التفصيل', content: '• Survey: بيانات من عدد كبير\n• Interview: فهم عميق ومباشر\n• Observation: ملاحظة السلوك الفعلي', type: 'breakdown' },
        { id: 'example', title: '5. مثال', content: 'بدل ما تخمن ليه الطلبة مش بيذاكروا، انزل واسألهم عن مشاكلهم الحقيقية.', type: 'example' },
        { id: 'bad-vs-good', title: '6. السيء مقابل الجيد', content: '❌ Bad: تسأل أسئلة عامة (بتحب الـ App؟)\n✅ Good: تسأل عن سلوك حقيقي (آخر مرة استخدمت الـ App عملت إيه؟)', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. الأخطاء الشائعة', content: '• الاعتماد على رأيك الشخصي\n• تجاهل نتائج البحث لو مش عاجباك', type: 'mistakes' },
        { id: 'tips', title: '8. نصائح عملية', content: '• اسأل “بتعمل ايه؟” مش “شايف ايه؟”\n• سجل كل الإجابات بدقة', type: 'tips' },
        { id: 'activity', title: '9. نشاط صغير', content: 'اكتب 3 أسئلة ممكن تسألهم لمستخدم عشان تفهم مشكلته مع تطبيقات التوصيل.', type: 'activity' },
        { id: 'summary', title: '10. الملخص', content: 'Research = فهم حقيقي للمستخدم', type: 'summary' },
      ] : [
        { id: 'intro', title: '1. Introduction', content: 'Have you ever designed something that turned out not suitable for the user?', type: 'introduction' },
        { id: 'concept', title: '2. Concept', content: 'User Research is collecting information about users to understand their behavior.', type: 'concept' },
        { id: 'why', title: '3. Why it matters', content: 'Build on data, save time and effort.', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. Breakdown', content: 'Survey, Interview, Observation', type: 'breakdown' },
        { id: 'example', title: '5. Example', content: 'Asking students about study problems.', type: 'example' },
        { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: General questions, Good: Real behavior questions', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. Common Mistakes', content: 'Relying on opinion, ignoring results', type: 'mistakes' },
        { id: 'tips', title: '8. Practical Tips', content: 'Ask "What do you do?", record answers', type: 'tips' },
        { id: 'activity', title: '9. Mini Activity', content: 'Write 3 questions to understand a problem.', type: 'activity' },
        { id: 'summary', title: '10. Summary', content: 'Research = Real understanding', type: 'summary' },
      ]
    }
  ];

  return {
    id: 'ux-track',
    title: lang === 'ar' ? 'مسار تجربة المستخدم (UX)' : 'UX Design Track',
    emoji: '🎨',
    color: '#4F46E5',
    description: lang === 'ar' ? 'تعلم كيف تفهم المستخدم وتبني منتجات سهلة الاستخدام.' : 'Learn how to understand users and build easy-to-use products.',
    topics
  };
};

const getUITrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'ui-design',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'تصميم الواجهة (UI)' : 'UI Design',
      emoji: '🎨',
      description: lang === 'ar' ? 'ازاي تخلي الـ App شكله حلو ومنظم؟' : 'UI Design Fundamentals',
      estimatedTime: 15,
      steps: lang === 'ar' ? [
        { id: 'intro', title: '1. المقدمة', content: 'ليه في Apps شكلها مريح للعين وApps تانية بتحس إنها زحمة؟', type: 'introduction' },
        { id: 'concept', title: '2. المفهوم', content: 'UI هو الواجهة اللي المستخدم بيشوفها ويتفاعل معاها (ألوان، خطوط، أزرار).', type: 'concept' },
        { id: 'why', title: '3. لماذا يهم', content: '• بيجذب المستخدم\n• بيسهل فهم الوظائف\n• بيبني ثقة في المنتج', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. التفصيل', content: '• Visual Hierarchy: ترتيب العناصر\n• Consistency: التناسق\n• Feedback: رد فعل النظام', type: 'breakdown' },
        { id: 'example', title: '5. مثال', content: 'زرار الـ "شراء" لازم يكون واضح ومختلف عن باقي الصفحة.', type: 'example' },
        { id: 'bad-vs-good', title: '6. السيء مقابل الجيد', content: '❌ Bad: ألوان كتير متداخلة\n✅ Good: لوحة ألوان متناسقة ومريحة', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. الأخطاء الشائعة', content: '• عدم الاهتمام بالمساحات الفاضية (White Space)\n• استخدام خطوط صعبة القراءة', type: 'mistakes' },
        { id: 'tips', title: '8. نصائح عملية', content: '• استخدم شبكة (Grid) لتنظيم العناصر\n• خليك بسيط (Less is More)', type: 'tips' },
        { id: 'activity', title: '9. نشاط صغير', content: 'افتح تطبيقك المفضل وقول إيه أكتر حاجة عاجباك في شكله؟', type: 'activity' },
        { id: 'summary', title: '10. الملخص', content: 'UI = جمال + وضوح + تناسق', type: 'summary' },
      ] : [
        { id: 'intro', title: '1. Introduction', content: 'Why do some apps look comfortable and others look crowded?', type: 'introduction' },
        { id: 'concept', title: '2. Concept', content: 'UI is the interface the user sees and interacts with.', type: 'concept' },
        { id: 'why', title: '3. Why it matters', content: 'Attracts users, eases understanding, builds trust.', type: 'why-it-matters' },
        { id: 'breakdown', title: '4. Breakdown', content: 'Hierarchy, Consistency, Feedback', type: 'breakdown' },
        { id: 'example', title: '5. Example', content: 'Clear "Buy" button.', type: 'example' },
        { id: 'bad-vs-good', title: '6. Bad vs Good', content: 'Bad: Clashing colors, Good: Harmonious palette', type: 'bad-vs-good' },
        { id: 'mistakes', title: '7. Common Mistakes', content: 'Ignoring white space, hard-to-read fonts', type: 'mistakes' },
        { id: 'tips', title: '8. Practical Tips', content: 'Use grids, keep it simple', type: 'tips' },
        { id: 'activity', title: '9. Mini Activity', content: 'What do you like most about your favorite app\'s look?', type: 'activity' },
        { id: 'summary', title: '10. Summary', content: 'UI = Beauty + Clarity + Consistency', type: 'summary' },
      ]
    }
  ];

  return {
    id: 'ui-track',
    title: lang === 'ar' ? 'مسار تصميم الواجهات (UI)' : 'UI Design Track',
    emoji: '✨',
    color: '#EC4899',
    description: lang === 'ar' ? 'تعلم كيف تصمم واجهات جذابة واحترافية.' : 'Learn how to design attractive and professional interfaces.',
    topics
  };
};

export const getTracks = (lang: Language): Track[] => [
  getUXTrack(lang),
  getUITrack(lang),
];
