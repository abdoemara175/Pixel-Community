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

// Helper function to create a basic step structure
const createBasicSteps = (lang: Language, topicTitle: string): Step[] => [
  {
    id: 'introduction',
    title: lang === 'ar' ? '1. المقدمة' : '1. Introduction',
    content: lang === 'ar' ? `مقدمة عن ${topicTitle}` : `Introduction to ${topicTitle}`,
    type: 'introduction'
  },
  {
    id: 'concept',
    title: lang === 'ar' ? '2. المفهوم' : '2. Concept',
    content: lang === 'ar' ? `شرح مفهوم ${topicTitle}` : `Understanding ${topicTitle}`,
    type: 'concept'
  },
  {
    id: 'why-it-matters',
    title: lang === 'ar' ? '3. لماذا يهم' : '3. Why It Matters',
    content: lang === 'ar' ? `أهمية ${topicTitle}` : `Why ${topicTitle} matters`,
    type: 'why-it-matters'
  },
  {
    id: 'breakdown',
    title: lang === 'ar' ? '4. التفصيل' : '4. Breakdown',
    content: lang === 'ar' ? `تفاصيل ${topicTitle}` : `Breaking down ${topicTitle}`,
    type: 'breakdown'
  },
  {
    id: 'example',
    title: lang === 'ar' ? '5. مثال' : '5. Example',
    content: lang === 'ar' ? `مثال عملي على ${topicTitle}` : `Real-world example of ${topicTitle}`,
    type: 'example'
  },
  {
    id: 'bad-vs-good',
    title: lang === 'ar' ? '6. السيء مقابل الجيد' : '6. Bad vs Good',
    content: lang === 'ar' ? `مقارنة بين الطريقة الخاطئة والصحيحة` : `Comparing wrong and right approaches`,
    type: 'bad-vs-good'
  },
  {
    id: 'mistakes',
    title: lang === 'ar' ? '7. الأخطاء الشائعة' : '7. Common Mistakes',
    content: lang === 'ar' ? `الأخطاء الشائعة في ${topicTitle}` : `Common mistakes in ${topicTitle}`,
    type: 'mistakes'
  },
  {
    id: 'tips',
    title: lang === 'ar' ? '8. نصائح عملية' : '8. Practical Tips',
    content: lang === 'ar' ? `نصائح لإتقان ${topicTitle}` : `Tips to master ${topicTitle}`,
    type: 'tips'
  },
  {
    id: 'activity',
    title: lang === 'ar' ? '9. نشاط' : '9. Activity',
    content: lang === 'ar' ? `نشاط تطبيقي على ${topicTitle}` : `Hands-on activity for ${topicTitle}`,
    type: 'activity'
  },
  {
    id: 'summary',
    title: lang === 'ar' ? '10. الملخص' : '10. Summary',
    content: lang === 'ar' ? `ملخص ${topicTitle}` : `Summary of ${topicTitle}`,
    type: 'summary'
  },
];

// UX Track - 18 Topics
const getUXTrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'ux-foundations',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'UX Foundations' : 'UX Foundations',
      emoji: '🎯',
      description: lang === 'ar' ? 'أساسيات تجربة المستخدم' : 'Fundamentals of User Experience',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UX Foundations')
    },
    {
      id: 'design-thinking-process',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Design Thinking Process' : 'Design Thinking Process',
      emoji: '💡',
      description: lang === 'ar' ? 'عملية التفكير التصميمي' : 'The Design Thinking Methodology',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Design Thinking')
    },
    {
      id: 'user-research',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Research' : 'User Research',
      emoji: '🔍',
      description: lang === 'ar' ? 'البحث عن المستخدمين' : 'Understanding Your Users',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'User Research')
    },
    {
      id: 'competitive-analysis',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Competitive Analysis' : 'Competitive Analysis',
      emoji: '📊',
      description: lang === 'ar' ? 'تحليل المنافسين' : 'Analyzing the Competition',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Competitive Analysis')
    },
    {
      id: 'problem-definition',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Problem Definition' : 'Problem Definition',
      emoji: '🎯',
      description: lang === 'ar' ? 'تحديد المشكلة' : 'Defining the Right Problem',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Problem Definition')
    },
    {
      id: 'user-needs-pain-points',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Needs & Pain Points' : 'User Needs & Pain Points',
      emoji: '💔',
      description: lang === 'ar' ? 'احتياجات المستخدم ونقاط الألم' : 'Identifying User Needs',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'User Needs & Pain Points')
    },
    {
      id: 'personas',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Personas' : 'Personas',
      emoji: '👤',
      description: lang === 'ar' ? 'شخصيات المستخدمين' : 'Creating User Personas',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Personas')
    },
    {
      id: 'empathy-map',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Empathy Map' : 'Empathy Map',
      emoji: '🗺️',
      description: lang === 'ar' ? 'خريطة التعاطف' : 'Building Empathy Maps',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Empathy Map')
    },
    {
      id: 'user-stories-jtbd',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Stories / JTBD' : 'User Stories / JTBD',
      emoji: '📖',
      description: lang === 'ar' ? 'قصص المستخدمين' : 'Writing User Stories',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'User Stories')
    },
    {
      id: 'user-flow',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Flow' : 'User Flow',
      emoji: '🔄',
      description: lang === 'ar' ? 'تدفق المستخدم' : 'Mapping User Flows',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'User Flow')
    },
    {
      id: 'user-journey-map',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Journey Map' : 'User Journey Map',
      emoji: '🛤️',
      description: lang === 'ar' ? 'خريطة رحلة المستخدم' : 'Creating Journey Maps',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'User Journey Map')
    },
    {
      id: 'information-architecture',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Information Architecture' : 'Information Architecture',
      emoji: '🏗️',
      description: lang === 'ar' ? 'هندسة المعلومات' : 'Organizing Information',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Information Architecture')
    },
    {
      id: 'sitemap-navigation',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Sitemap & Navigation' : 'Sitemap & Navigation',
      emoji: '🗂️',
      description: lang === 'ar' ? 'خريطة الموقع والتنقل' : 'Structuring Navigation',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Sitemap & Navigation')
    },
    {
      id: 'wireframing',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Wireframing (Low / Mid Fidelity)' : 'Wireframing (Low / Mid Fidelity)',
      emoji: '📐',
      description: lang === 'ar' ? 'الرسم السلكي' : 'Creating Wireframes',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Wireframing')
    },
    {
      id: 'ux-prototyping',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'UX Prototyping' : 'UX Prototyping',
      emoji: '🎨',
      description: lang === 'ar' ? 'النماذج الأولية' : 'Building Prototypes',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UX Prototyping')
    },
    {
      id: 'usability-testing',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Usability Testing' : 'Usability Testing',
      emoji: '✅',
      description: lang === 'ar' ? 'اختبار قابلية الاستخدام' : 'Testing with Users',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Usability Testing')
    },
    {
      id: 'ux-iteration-validation',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'UX Iteration & Validation' : 'UX Iteration & Validation',
      emoji: '🔁',
      description: lang === 'ar' ? 'التحسين والتحقق' : 'Iterating Based on Feedback',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UX Iteration & Validation')
    },
    {
      id: 'ux-documentation-handoff',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'UX Documentation & Handoff' : 'UX Documentation & Handoff',
      emoji: '📋',
      description: lang === 'ar' ? 'التوثيق والتسليم' : 'Documenting Your Work',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UX Documentation & Handoff')
    },
  ];

  return {
    id: 'ux-track',
    title: lang === 'ar' ? 'UX Sections' : 'UX Track',
    emoji: '🎯',
    color: '#3B82F6',
    description: lang === 'ar' ? 'تعلم أساسيات تجربة المستخدم' : 'Learn User Experience Design',
    topics
  };
};

// UI Track - 18 Topics
const getUITrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'ui-foundations',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'UI Foundations' : 'UI Foundations',
      emoji: '✨',
      description: lang === 'ar' ? 'أساسيات تصميم الواجهة' : 'Fundamentals of Interface Design',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UI Foundations')
    },
    {
      id: 'visual-design-principles',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Visual Design Principles' : 'Visual Design Principles',
      emoji: '📏',
      description: lang === 'ar' ? 'مبادئ التصميم البصري' : 'Design Principles',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Visual Design Principles')
    },
    {
      id: 'color-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Color System' : 'Color System',
      emoji: '🎨',
      description: lang === 'ar' ? 'نظام الألوان' : 'Creating Color Systems',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Color System')
    },
    {
      id: 'typography-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Typography System' : 'Typography System',
      emoji: '🔤',
      description: lang === 'ar' ? 'نظام الطباعة' : 'Typography Fundamentals',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Typography System')
    },
    {
      id: 'layout-grid-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Layout & Grid System' : 'Layout & Grid System',
      emoji: '📐',
      description: lang === 'ar' ? 'نظام التخطيط والشبكة' : 'Grid & Layout Systems',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Layout & Grid System')
    },
    {
      id: 'spacing-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Spacing System' : 'Spacing System',
      emoji: '📏',
      description: lang === 'ar' ? 'نظام المسافات' : 'Spacing & Whitespace',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Spacing System')
    },
    {
      id: 'ui-components',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'UI Components' : 'UI Components',
      emoji: '🧩',
      description: lang === 'ar' ? 'مكونات الواجهة' : 'Building UI Components',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UI Components')
    },
    {
      id: 'forms-inputs',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Forms & Inputs' : 'Forms & Inputs',
      emoji: '📝',
      description: lang === 'ar' ? 'النماذج والمدخلات' : 'Designing Forms',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Forms & Inputs')
    },
    {
      id: 'states-feedback',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'States & Feedback' : 'States & Feedback',
      emoji: '💬',
      description: lang === 'ar' ? 'الحالات والتغذية الراجعة' : 'UI States & Feedback',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'States & Feedback')
    },
    {
      id: 'accessibility-ui',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Accessibility (UI)' : 'Accessibility (UI)',
      emoji: '♿',
      description: lang === 'ar' ? 'إمكانية الوصول' : 'Accessible Design',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Accessibility')
    },
    {
      id: 'design-system-basics',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Design System Basics' : 'Design System Basics',
      emoji: '📚',
      description: lang === 'ar' ? 'أساسيات أنظمة التصميم' : 'Introduction to Design Systems',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Design System Basics')
    },
    {
      id: 'ui-prototyping-interactions',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'UI Prototyping & Interactions' : 'UI Prototyping & Interactions',
      emoji: '⚙️',
      description: lang === 'ar' ? 'النماذج والتفاعلات' : 'Interactive Prototypes',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UI Prototyping & Interactions')
    },
    {
      id: 'micro-interactions',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Micro-Interactions' : 'Micro-Interactions',
      emoji: '✨',
      description: lang === 'ar' ? 'التفاعلات الدقيقة' : 'Designing Micro-interactions',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Micro-Interactions')
    },
    {
      id: 'responsive-design',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Responsive Design' : 'Responsive Design',
      emoji: '📱',
      description: lang === 'ar' ? 'التصميم المتجاوب' : 'Responsive Interfaces',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Responsive Design')
    },
    {
      id: 'mobile-vs-web-ui',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Mobile vs Web UI' : 'Mobile vs Web UI',
      emoji: '📲',
      description: lang === 'ar' ? 'الفروقات بين الويب والموبايل' : 'Platform Differences',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Mobile vs Web UI')
    },
    {
      id: 'common-ui-mistakes',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Common UI Mistakes' : 'Common UI Mistakes',
      emoji: '⚠️',
      description: lang === 'ar' ? 'الأخطاء الشائعة في الواجهات' : 'Learning from Mistakes',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Common UI Mistakes')
    },
    {
      id: 'redesign-case-study',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Redesign Case Study' : 'Redesign Case Study',
      emoji: '📖',
      description: lang === 'ar' ? 'دراسة حالة إعادة تصميم' : 'Real-world Redesign',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Redesign Case Study')
    },
  ];

  return {
    id: 'ui-track',
    title: lang === 'ar' ? 'UI Sections' : 'UI Track',
    emoji: '✨',
    color: '#EC4899',
    description: lang === 'ar' ? 'تعلم تصميم الواجهات' : 'Learn Interface Design',
    topics
  };
};

// UX × UI Integration Track - 4 Topics
const getIntegrationTrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'ux-ui-workflow',
      trackId: 'integration-track',
      title: lang === 'ar' ? 'UX → UI Workflow' : 'UX → UI Workflow',
      emoji: '🔄',
      description: lang === 'ar' ? 'سير العمل من UX إلى UI' : 'From Research to Design',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'UX → UI Workflow')
    },
    {
      id: 'case-study-walkthrough',
      trackId: 'integration-track',
      title: lang === 'ar' ? 'Case Study Walkthrough' : 'Case Study Walkthrough',
      emoji: '📚',
      description: lang === 'ar' ? 'شرح دراسة حالة كاملة' : 'Complete Project Walkthrough',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Case Study Walkthrough')
    },
    {
      id: 'wireframe-to-final-ui',
      trackId: 'integration-track',
      title: lang === 'ar' ? 'From Wireframe to Final UI' : 'From Wireframe to Final UI',
      emoji: '🎨',
      description: lang === 'ar' ? 'من الرسم السلكي للتصميم النهائي' : 'Design Evolution',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'From Wireframe to Final UI')
    },
    {
      id: 'design-decisions-explanation',
      trackId: 'integration-track',
      title: lang === 'ar' ? 'Design Decisions Explanation' : 'Design Decisions Explanation',
      emoji: '💭',
      description: lang === 'ar' ? 'شرح القرارات التصميمية' : 'Justifying Design Choices',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Design Decisions Explanation')
    },
  ];

  return {
    id: 'integration-track',
    title: lang === 'ar' ? 'تكامل UX × UI' : 'UX × UI Integration',
    emoji: '🔗',
    color: '#10B981',
    description: lang === 'ar' ? 'دمج UX و UI معاً' : 'Integrating UX and UI',
    topics
  };
};

// Bonus Track - 6 Topics
const getBonusTrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'thinking-like-designer',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Thinking Like a Designer' : 'Thinking Like a Designer',
      emoji: '🧠',
      description: lang === 'ar' ? 'التفكير مثل المصمم' : 'Design Mindset',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Thinking Like a Designer')
    },
    {
      id: 'real-world-constraints',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Real-World Constraints' : 'Real-World Constraints',
      emoji: '🌍',
      description: lang === 'ar' ? 'القيود الواقعية' : 'Practical Constraints',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Real-World Constraints')
    },
    {
      id: 'working-with-developers',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Working with Developers' : 'Working with Developers',
      emoji: '👨‍💻',
      description: lang === 'ar' ? 'التعاون مع المطورين' : 'Designer-Developer Collaboration',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Working with Developers')
    },
    {
      id: 'design-critique-feedback',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Design Critique & Feedback' : 'Design Critique & Feedback',
      emoji: '💬',
      description: lang === 'ar' ? 'النقد والتغذية الراجعة' : 'Giving and Receiving Feedback',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Design Critique & Feedback')
    },
    {
      id: 'portfolio-presentation',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Portfolio & Presentation' : 'Portfolio & Presentation',
      emoji: '🎯',
      description: lang === 'ar' ? 'المحفظة والعرض' : 'Showcasing Your Work',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Portfolio & Presentation')
    },
    {
      id: 'instructor-notes-tips',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Instructor Notes & Tips' : 'Instructor Notes & Tips',
      emoji: '📝',
      description: lang === 'ar' ? 'ملاحظات ونصائح المدرب' : 'Expert Tips & Insights',
      estimatedTime: 20,
      steps: createBasicSteps(lang, 'Instructor Notes & Tips')
    },
  ];

  return {
    id: 'bonus-track',
    title: lang === 'ar' ? 'محتوى إضافي' : 'Bonus Content',
    emoji: '🎁',
    color: '#F59E0B',
    description: lang === 'ar' ? 'محتوى إضافي وقيم' : 'Extra Learning Resources',
    topics
  };
};

export const getTracks = (lang: Language): Track[] => [
  getUXTrack(lang),
  getUITrack(lang),
  getIntegrationTrack(lang),
  getBonusTrack(lang),
];
