/**
 * Content Structure for PIXEL Platform
 * Organized by Sections and Topics with multilingual support
 */

export interface ContentPoint {
  label: string;
  ar: string;
  en: string;
}

export interface TopicContent {
  id: string;
  titleAr: string;
  titleEn: string;
  introduction: ContentPoint;
  concept: ContentPoint;
  whyItMatters: ContentPoint;
  breakdown: ContentPoint;
  example: ContentPoint;
  badVsGood: ContentPoint;
  commonMistakes: ContentPoint;
  practicalTips: ContentPoint;
  miniActivity: ContentPoint;
  summary: ContentPoint;
}

export interface Section {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  color: string;
  emoji: string;
  topics: TopicContent[];
}

export const contentStructure: Section[] = [
  {
    id: 'ux',
    nameAr: 'مسار تجربة المستخدم (UX)',
    nameEn: 'UX Track',
    descriptionAr: 'تعلم أساسيات تجربة المستخدم والبحث والتحليل',
    descriptionEn: 'Learn the fundamentals of user experience, research, and analysis',
    color: '#3B82F6',
    emoji: '👥',
    topics: [
      {
        id: 'ux-foundations',
        titleAr: 'أساسيات UX',
        titleEn: 'UX Foundations',
        introduction: {
          label: 'Introduction',
          ar: 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟',
          en: 'Why do we use some apps daily... while we delete others after the first use?',
        },
        concept: {
          label: 'Concept',
          ar: 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.',
          en: 'UX is the user experience while using a product, not just its appearance, but how it feels and whether the user can achieve their goal easily.',
        },
        whyItMatters: {
          label: 'Why it matters',
          ar: 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو\nUX الجيد بيزود رضا المستخدم وبيخليه يرجع تاني',
          en: 'If the user gets confused or tired during use → they will abandon the product even if it looks good\nGood UX increases user satisfaction and brings them back',
        },
        breakdown: {
          label: 'Breakdown',
          ar: '- Usability: هل سهل الاستخدام؟\n- Clarity: هل واضح؟\n- Efficiency: هل بيوصل لهدفه بسرعة؟\n- Satisfaction: هل التجربة مريحة؟',
          en: '- Usability: Is it easy to use?\n- Clarity: Is it clear?\n- Efficiency: Does it reach the goal quickly?\n- Satisfaction: Is the experience comfortable?',
        },
        example: {
          label: 'Example',
          ar: 'تطبيق طلب أكل:\nلو خلّصت الطلب في خطوات قليلة → UX كويس\nلو تهت بين الصفحات → UX سيء',
          en: 'Food ordering app:\nIf you complete the order in a few steps → Good UX\nIf you get lost between pages → Bad UX',
        },
        badVsGood: {
          label: 'Bad vs Good',
          ar: 'Bad: خطوات كتير + لخبطة\nGood: خطوات واضحة وسريعة',
          en: 'Bad: Many steps + confusion\nGood: Clear and fast steps',
        },
        commonMistakes: {
          label: 'Common Mistakes',
          ar: '- التركيز على الشكل بس\n- تجاهل تجربة المستخدم',
          en: '- Focusing only on appearance\n- Ignoring user experience',
        },
        practicalTips: {
          label: 'Practical Tips',
          ar: '- خلي كل خطوة واضحة\n- قلل عدد الخطوات\n- اختبر على حد حقيقي',
          en: '- Make each step clear\n- Reduce the number of steps\n- Test with real people',
        },
        miniActivity: {
          label: 'Mini Activity',
          ar: 'قول مثال على App UX بتاعه سيء وليه',
          en: 'Give an example of an app with bad UX and why',
        },
        summary: {
          label: 'Summary',
          ar: 'UX = سهولة + وضوح + راحة المستخدم',
          en: 'UX = Ease + Clarity + User Comfort',
        },
      },
      // More UX topics would be added here following the same structure
      // For brevity, showing the first topic as an example
    ],
  },
  {
    id: 'ui',
    nameAr: 'مسار واجهة المستخدم (UI)',
    nameEn: 'UI Track',
    descriptionAr: 'تعلم أساسيات التصميم البصري والواجهات',
    descriptionEn: 'Learn the fundamentals of visual design and interfaces',
    color: '#8B5CF6',
    emoji: '🎨',
    topics: [],
  },
  {
    id: 'ux-ui',
    nameAr: 'تكامل UX × UI',
    nameEn: 'UX × UI Integration',
    descriptionAr: 'تعلم كيفية دمج UX و UI معاً',
    descriptionEn: 'Learn how to integrate UX and UI together',
    color: '#EC4899',
    emoji: '🔗',
    topics: [],
  },
  {
    id: 'bonus',
    nameAr: 'محتوى إضافي',
    nameEn: 'Bonus Content',
    descriptionAr: 'نصائح وأفكار إضافية مهمة',
    descriptionEn: 'Additional important tips and ideas',
    color: '#F59E0B',
    emoji: '⭐',
    topics: [],
  },
];
