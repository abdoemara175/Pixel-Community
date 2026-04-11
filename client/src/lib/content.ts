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

// UX Track Topics
const uxFoundations: Topic = {
  id: 'ux-foundations',
  trackId: 'ux-track',
  title: 'أساسيات تصميم UX',
  emoji: '🎯',
  description: 'فهم المبادئ الأساسية لتصميم تجربة المستخدم',
  estimatedTime: 18,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة (Hook)',
      content: 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟ الفرق هو في تجربة المستخدم (UX). في هذا الموضوع، سنتعلم لماذا UX مهم جداً وكيف يؤثر على نجاح المنتج.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'المفهوم الأساسي',
      content: 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ. UX تعني "User Experience" - وهي تركز على كيفية شعور المستخدم وتفاعله مع المنتج الرقمي بشكل عام.',
      type: 'concept',
    },
    {
      id: 'why',
      title: 'لماذا يهم UX؟',
      content: 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو. UX الجيد بيزود رضا المستخدم وبيخليه يرجع تاني. الإحصائيات تثبت أن UX الجيد يزيد من رضا المستخدمين، يقلل من معدل الخروج، ويزيد من التحويلات والإيرادات.',
      type: 'concept',
    },
    {
      id: 'breakdown',
      title: 'تفكيك المفهوم',
      content: 'UX يتكون من عدة عناصر مهمة:\n\n• Usability (سهولة الاستخدام): هل سهل الاستخدام؟\n• Clarity (الوضوح): هل واضح؟\n• Efficiency (الكفاءة): هل بيوصل لهدفه بسرعة؟\n• Satisfaction (الرضا): هل التجربة مريحة؟\n\nكل هذه العناصر مع بعضها بتكون تجربة المستخدم الكاملة.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'تطبيق طلب أكل:\n\n✓ UX كويس: لو خلّصت الطلب في خطوات قليلة، الواجهة واضحة، والدفع سريع → المستخدم سعيد ويرجع تاني\n\n✗ UX سيء: لو تهت بين الصفحات، الخطوات كتيرة، الأزرار غير واضحة → المستخدم يترك التطبيق ويروح منافس تاني',
      type: 'example',
    },
    {
      id: 'bad-vs-good',
      title: 'السيء مقابل الجيد',
      content: 'Bad UX:\n• خطوات كتير وملخبطة\n• تصميم غير واضح\n• وقت طويل للوصول للهدف\n• المستخدم يشعر بالإحباط\n\nGood UX:\n• خطوات واضحة وسريعة\n• تصميم منظم وسهل الفهم\n• وصول سريع للهدف\n• المستخدم يشعر بالراحة والرضا',
      type: 'concept',
    },
    {
      id: 'mistakes',
      title: 'الأخطاء الشائعة',
      content: 'الأخطاء التي يقع فيها المصممون الجدد:\n\n1. التركيز على الشكل بس - نسيان أن الوظيفة مهمة جداً\n2. تجاهل تجربة المستخدم الفعلية - عدم اختبار مع مستخدمين حقيقيين\n3. تعقيد الواجهة - إضافة ميزات كتيرة تشتت المستخدم\n4. عدم الاستماع لتعليقات المستخدمين\n\nتجنب هذه الأخطاء يساعدك على إنشاء منتجات أفضل.',
      type: 'concept',
    },
    {
      id: 'tips',
      title: 'نصائح عملية',
      content: 'نصائح لتحسين UX:\n\n✓ خلي كل خطوة واضحة - استخدم تسميات واضحة للأزرار والحقول\n✓ قلل عدد الخطوات - كل خطوة إضافية تزيد من احتمالية ترك المستخدم\n✓ اختبر على حد حقيقي - لا تعتمد على رأيك فقط\n✓ اسمع لتعليقات المستخدمين - هم الخبراء في تجربتهم\n✓ اجعل الأخطاء واضحة - ساعد المستخدم لما يخطئ',
      type: 'concept',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'فكر في تطبيق أو موقع ويب استخدمته مؤخراً وكان UX بتاعه سيء.\n\nأجب على الأسئلة دي:\n1. ما هو التطبيق/الموقع؟\n2. ما الذي جعل تجربتك سيئة؟\n3. ما الخطوات التي كانت معقدة؟\n4. كيف كنت ستحسنها؟\n\nهذا التمرين يساعدك على تطوير عينك الناقدة للـ UX.',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'UX = سهولة + وضوح + راحة المستخدم\n\nتذكر:\n• UX ليس عن الشكل فقط، بل عن التجربة الكاملة\n• المستخدم هو مركز كل شيء\n• الاختبار والتعليقات أساسية لتحسين UX\n• UX الجيد يزيد من نجاح المنتج\n\nفي الموضوع القادم، سنتعلم عملية التفكير التصميمي التي تساعدك على حل المشاكل بطريقة منظمة.',
      type: 'summary',
    },
  ],
};

const designThinking: Topic = {
  id: 'design-thinking',
  trackId: 'ux-track',
  title: 'عملية التفكير التصميمي',
  emoji: '💡',
  description: 'تعلم منهجية التفكير التصميمي خطوة بخطوة',
  estimatedTime: 20,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'التفكير التصميمي هو منهجية منظمة لحل المشاكل بطريقة إبداعية وتركز على المستخدم.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'المراحل الخمس',
      content: '1. التعاطف (Empathize) 2. التعريف (Define) 3. التوليد (Ideate) 4. النماذج (Prototype) 5. الاختبار (Test)',
      type: 'concept',
    },
    {
      id: 'empathize',
      title: 'مرحلة التعاطف',
      content: 'فهم احتياجات المستخدمين وآلامهم من خلال البحث والملاحظة والمقابلات.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'عند تصميم تطبيق للطلاب، نبدأ بفهم تحدياتهم في الدراسة والتنظيم.',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'اختر مشكلة بسيطة في حياتك اليومية وطبق مراحل التفكير التصميمي عليها.',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'التفكير التصميمي يساعدك على حل المشاكل بطريقة منظمة وتركز على احتياجات المستخدم الحقيقية.',
      type: 'summary',
    },
  ],
};

const userResearch: Topic = {
  id: 'user-research',
  trackId: 'ux-track',
  title: 'البحث عن المستخدمين',
  emoji: '🔍',
  description: 'تعلم كيفية إجراء بحث فعال عن المستخدمين',
  estimatedTime: 18,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'البحث عن المستخدمين هو أساس أي تصميم UX ناجح. يساعدك على فهم من هم مستخدموك وماذا يريدون.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'أنواع البحث',
      content: 'البحث الكمي (الأرقام والإحصائيات) والبحث النوعي (المقابلات والملاحظات).',
      type: 'concept',
    },
    {
      id: 'methods',
      title: 'طرق البحث',
      content: 'المقابلات، المسوحات، الملاحظة المباشرة، اختبار الاستخدام، تحليل السلوك.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'عند تصميم تطبيق تسوق، نجري مقابلات مع المتسوقين لفهم عاداتهم وتفضيلاتهم.',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'قم بإجراء مقابلة بسيطة مع صديق عن تطبيق يستخدمه. ما الذي يحب وما الذي لا يحب فيه؟',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'البحث الجيد يعطيك رؤى قيمة تساعدك على اتخاذ قرارات تصميمية مستنيرة.',
      type: 'summary',
    },
  ],
};

const personas: Topic = {
  id: 'personas',
  trackId: 'ux-track',
  title: 'إنشاء شخصيات المستخدمين',
  emoji: '👤',
  description: 'تعلم كيفية إنشاء شخصيات المستخدمين الفعالة',
  estimatedTime: 16,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'الشخصيات هي تمثيلات خيالية لمستخدميك الحقيقيين تساعدك على التركيز على احتياجاتهم.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'ما هي الشخصية؟',
      content: 'شخصية المستخدم هي ملف تفصيلي يتضمن الديموغرافيا، الأهداف، الألم، والسلوكيات.',
      type: 'concept',
    },
    {
      id: 'elements',
      title: 'عناصر الشخصية',
      content: 'الاسم، الصورة، العمر، المهنة، الأهداف، التحديات، التفضيلات، السلوكيات.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'شخصية "فاطمة" - موظفة 28 سنة، تريد تطبيق يساعدها على إدارة وقتها بكفاءة.',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'أنشئ شخصية لتطبيق توصيل الطعام. فكر في احتياجاتهم وتحدياتهم.',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'الشخصيات تساعدك على اتخاذ قرارات تصميمية متمركزة حول المستخدم.',
      type: 'summary',
    },
  ],
};

// UI Track Topics
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
      id: 'elements',
      title: 'عناصر UI الأساسية',
      content: 'الأزرار، الحقول، الأيقونات، الألوان، الخطوط، الفراغات، والصور.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'تطبيق WhatsApp: الأيقونات الواضحة، الألوان المتناسقة، والتخطيط المنظم.',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'حلل واجهة تطبيقك المفضل. ما العناصر التي تراها؟',
      type: 'activity',
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
      id: 'concept',
      title: 'نظرية الألوان',
      content: 'الألوان الدافئة تثير الحماس، الألوان الباردة تثير الهدوء. التناسق اللوني مهم جداً.',
      type: 'concept',
    },
    {
      id: 'palette',
      title: 'بناء لوحة الألوان',
      content: 'اختر لون أساسي، ثم أضف ألوان ثانوية وألوان محايدة للتوازن.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'Facebook يستخدم الأزرق لأنه يثير الثقة والهدوء. Twitter يستخدم الأزرق السماوي.',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'أنشئ لوحة ألوان لتطبيق صحة وعافية. ما الألوان التي تختارها ولماذا؟',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'نظام الألوان المتناسق يعزز الهوية البصرية ويحسن من تجربة المستخدم.',
      type: 'summary',
    },
  ],
};

const typography: Topic = {
  id: 'typography',
  trackId: 'ui-track',
  title: 'الطباعة والخطوط',
  emoji: '✍️',
  description: 'تعلم كيفية اختيار واستخدام الخطوط بفعالية',
  estimatedTime: 16,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'الطباعة الجيدة تجعل النص سهل القراءة وجميل المظهر.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'أنواع الخطوط',
      content: 'Serif (بخطوط)، Sans-serif (بدون خطوط)، Display (عرض)، Script (خط يدوي).',
      type: 'concept',
    },
    {
      id: 'hierarchy',
      title: 'التسلسل الهرمي',
      content: 'استخدم أحجام وأوزان مختلفة لإنشاء تسلسل واضح: عنوان، عنوان فرعي، نص أساسي.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'Medium.com يستخدم خطوط واضحة وسهلة القراءة لتشجيع القراءة.',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'اختر خطين متناسبين لموقع ويب. واحد للعناوين وواحد للنص الأساسي.',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'الطباعة الجيدة تحسن من قابلية القراءة والمظهر البصري للمنتج.',
      type: 'summary',
    },
  ],
};

// Integration Track Topics
const wireframeToUI: Topic = {
  id: 'wireframe-to-ui',
  trackId: 'integration-track',
  title: 'من الرسم التخطيطي إلى الواجهة',
  emoji: '🔄',
  description: 'تعلم كيفية تحويل الرسوم التخطيطية إلى واجهات جميلة',
  estimatedTime: 20,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'الرسم التخطيطي (Wireframe) هو الهيكل الأساسي، والواجهة (UI) هي التصميم النهائي الجميل.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'المراحل',
      content: '1. الرسم التخطيطي (بدون ألوان) 2. التصميم (مع ألوان وتفاصيل) 3. التطوير (الكود)',
      type: 'concept',
    },
    {
      id: 'process',
      title: 'العملية',
      content: 'ابدأ بالهيكل، أضف الألوان والخطوط، ثم أضف الصور والتفاصيل الدقيقة.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'تصميم صفحة تسجيل الدخول: من الرسم البسيط إلى واجهة احترافية.',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'خذ رسماً تخطيطياً بسيطاً وحوله إلى واجهة جميلة.',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'التحول من الرسم التخطيطي إلى الواجهة يتطلب فهماً عميقاً لكل من UX و UI.',
      type: 'summary',
    },
  ],
};

// Bonus Track Topics
const designCritique: Topic = {
  id: 'design-critique',
  trackId: 'bonus-track',
  title: 'نقد التصميم البناء',
  emoji: '💬',
  description: 'تعلم كيفية تقديم وتلقي نقد تصميمي فعال',
  estimatedTime: 14,
  steps: [
    {
      id: 'intro',
      title: 'مقدمة',
      content: 'النقد البناء هو أداة قوية لتحسين التصميم والنمو كمصمم.',
      type: 'introduction',
    },
    {
      id: 'concept',
      title: 'مبادئ النقد',
      content: 'كن محترماً، ركز على العمل وليس الشخص، قدم اقتراحات بناءة.',
      type: 'concept',
    },
    {
      id: 'example',
      title: 'مثال عملي',
      content: 'بدلاً من "هذا التصميم سيء"، قل "يمكننا تحسين التباين بين النص والخلفية".',
      type: 'example',
    },
    {
      id: 'activity',
      title: 'نشاط تفاعلي',
      content: 'اطلب من صديق أن ينقد تصميماً لك. ركز على الاستماع والتعلم.',
      type: 'activity',
    },
    {
      id: 'summary',
      title: 'الخلاصة',
      content: 'النقد البناء يساعدك على النمو والتطور كمصمم.',
      type: 'summary',
    },
  ],
};

// Create tracks
export const tracks: Track[] = [
  {
    id: 'ux-track',
    title: 'مسار UX',
    emoji: '🎯',
    color: '#0E2A57',
    description: 'تعلم أساسيات تصميم تجربة المستخدم',
    topics: [uxFoundations, designThinking, userResearch, personas],
  },
  {
    id: 'ui-track',
    title: 'مسار UI',
    emoji: '🎨',
    color: '#1F4B8F',
    description: 'تعلم أساسيات تصميم الواجهات',
    topics: [uiFoundations, colorSystem, typography],
  },
  {
    id: 'integration-track',
    title: 'التكامل',
    emoji: '🔄',
    color: '#2563EB',
    description: 'تعلم كيفية دمج UX و UI معاً',
    topics: [wireframeToUI],
  },
  {
    id: 'bonus-track',
    title: 'محتوى إضافي',
    emoji: '⭐',
    color: '#7C3AED',
    description: 'محتوى إضافي ومتقدم',
    topics: [designCritique],
  },
];

// Flat array of all topics for easy access
export const allTopics: Topic[] = [
  uxFoundations,
  designThinking,
  userResearch,
  personas,
  uiFoundations,
  colorSystem,
  typography,
  wireframeToUI,
  designCritique,
];
