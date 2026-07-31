/**
 * Serious & Challenging Educational Quizzes for PIXEL Topics
 * Passing requirement: >= 80%
 */

export interface Question {
  id: number;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
}

export interface TopicQuiz {
  topicId: string;
  titleAr: string;
  titleEn: string;
  questions: Question[];
  passingScore: number; // e.g. 80
}

export const QUIZZES_DATA: Record<string, TopicQuiz> = {
  'ux-foundations': {
    topicId: 'ux-foundations',
    titleAr: 'اختبار التحدي: أساسيات تجربة المستخدم (UX Foundations)',
    titleEn: 'Challenging Quiz: UX Foundations',
    passingScore: 80,
    questions: [
      {
        id: 1,
        questionAr: 'ما الفرق الجوهري بين تجربة المستخدم (UX) وواجهة المستخدم (UI) في التفكير الهندسي؟',
        questionEn: 'What is the fundamental difference between UX and UI in design thinking?',
        optionsAr: [
          'الـ UX يتعلق بالألوان والخطوط بينما الـ UI يختص بالأبنية الهيكلية',
          'الـ UX هو الفهم والبحث وتسهيل رحلة المستخدم بينما الـ UI هو التجسيد البصري والتفاعلي للمكونات',
          'الـ UX يستعمله المصممون فقط بينما الـ UI يستعمله المبرمجون فقط',
          'لا يوجد أي فرق وهما مصطلحان لنفس الشيء تماماً'
        ],
        optionsEn: [
          'UX is about colors/fonts while UI is about structure',
          'UX is research, understanding, and flow optimization while UI is the visual and interactive representation',
          'UX is used by designers only while UI is used by programmers only',
          'There is no difference; they mean the exact same thing'
        ],
        correctIndex: 1,
        explanationAr: 'تجربة المستخدم تجيب على سؤال "كيف يعمل النظام وكيف يشعر المستخدم"، بينما واجهة المستخدم تجيب على سؤال "كيف يبدو النظام ويتفاعل بصرياً".',
        explanationEn: 'UX answers "how the system works and feels", while UI answers "how it looks and interacts visually".'
      },
      {
        id: 2,
        questionAr: 'عند تصميم منصة جديدة، ما هي الخطوة الأولى التي يجب البدء بها قبل رسم أي سكتش أو واجهة؟',
        questionEn: 'When designing a new platform, what is the absolute first step before drawing any sketch?',
        optionsAr: [
          'اختيار نظام الألوان والأيقونات',
          'فهم أهداف المستخدم والمشكلة الحقيقية واحتياجات العمل (User & Business Needs)',
          'تصميم اللوجو والهوية البصرية',
          'كتابة كود المكونات البرمجية'
        ],
        optionsEn: [
          'Selecting color palette and icons',
          'Understanding user pain points, real problems, and business needs',
          'Designing the logo and brand identity',
          'Writing component code'
        ],
        correctIndex: 1,
        explanationAr: 'البحث وفهم المشكلة الحقيقية هو الحجر الأساس في تجربة المستخدم لتجنب بناء حلول ممتازة لمشاكل غير موجودة.',
        explanationEn: 'Researching and understanding the real problem is the foundation of UX to avoid building great solutions for non-existent problems.'
      },
      {
        id: 3,
        questionAr: 'ماذا يقصد بمبدأ Usability (قابلية الاستخدام) في UX؟',
        questionEn: 'What does Usability mean in UX design?',
        optionsAr: [
          'مدى سرعة تنزيل التطبيق من المتجر',
          'مدى قدرة المستخدم على تحقيق أهدافه بفاعلية وكفاءة ورضا دون عناء',
          'عدد الأزرار التفاعلية المتاحة في الشاشة الواحدة',
          'مدى إعجاب المصمم بالشاشة'
        ],
        optionsEn: [
          'How fast the app downloads from the store',
          'How effectively, efficiently, and satisfyingly users can achieve their goals without effort',
          'The number of interactive buttons available per screen',
          'How much the designer likes the screen'
        ],
        correctIndex: 1,
        explanationAr: 'قابلية الاستخدام تعني تحقيق الهدف بفاعلية وكفاءة ورضا دون إحباط.',
        explanationEn: 'Usability measures effectiveness, efficiency, and satisfaction in reaching user goals.'
      },
      {
        id: 4,
        questionAr: 'أي من العناصر التالية يعتبر خطأ شائعاً يضر بالـ UX؟',
        questionEn: 'Which of the following is a common mistake that harms UX?',
        optionsAr: [
          'إتاحة زر إلغاء أو تراجع واضح للمستخدم',
          'إجبار المستخدم على اتخاذ قرارات معقدة وكثيرة في شاشة واحدة (High Cognitive Load)',
          'استخدام التسلسل البصري الواضح للأزرار والعناوين',
          'إجراء اختبارات قابلية الاستخدام مع مستخدمين حقيقيين'
        ],
        optionsEn: [
          'Providing a clear cancel or undo button for the user',
          'Forcing the user to make many complex decisions on a single screen (High Cognitive Load)',
          'Using a clear visual hierarchy for buttons and titles',
          'Conducting usability tests with real users'
        ],
        correctIndex: 1,
        explanationAr: 'زيادة الحمل المعرفي (Cognitive Load) تشتت الذهن وتسبب الإحباط وتجعل المستخدم يغادر التطبيق.',
        explanationEn: 'High Cognitive Load overwhelms users and causes drop-offs.'
      },
      {
        id: 5,
        questionAr: 'ما هي النتيجة المباشرة لتطبيقات UX الناجحة في المنتجات الرقمية؟',
        questionEn: 'What is the direct impact of successful UX design in digital products?',
        optionsAr: [
          'زيادة رضا المستخدمين ونسبة الاحتفاظ بهم (User Retention) وتقليل أخطاء الاستخدام',
          'مضاعفة عدد الإعلانات في الواجهة',
          'زيادة تعقيد الخطوات للتسجيل',
          'استبدال المطورين بالمصممين'
        ],
        optionsEn: [
          'Higher user satisfaction, better user retention, and lower error rates',
          'Doubling the number of ad banners',
          'Increasing signup complexity',
          'Replacing developers with designers'
        ],
        correctIndex: 0,
        explanationAr: 'التجربة الناجحة تبني ولاء المستخدم للمنتج وترفع معدل النجاح والاحتفاظ.',
        explanationEn: 'Great UX builds user loyalty and dramatically increases conversion & retention.'
      }
    ]
  },
  'ui-design': {
    topicId: 'ui-design',
    titleAr: 'اختبار التحدي: أساسيات واجهة المستخدم (UI Principles)',
    titleEn: 'Challenging Quiz: UI Principles',
    passingScore: 80,
    questions: [
      {
        id: 1,
        questionAr: 'ما هو التسلسل الهرمي البصري (Visual Hierarchy) وكيف يؤثر على عين المستخدم؟',
        questionEn: 'What is Visual Hierarchy and how does it direct the user eye?',
        optionsAr: [
          'استخدام نفس الحجم واللون لجميع العناصر بالواجهة',
          'ترتيب العناصر حسب الأهمية باستخدام الحجم والتباين والألوان لتوجيه عين القارئ طبيعياً',
          'جعل الخواص مجتمعة في منتصف الشاشة',
          'إلغاء المساحات البيضاء وتعبئة كل بكسل'
        ],
        optionsEn: [
          'Using the same size and color for all screen elements',
          'Organizing elements by importance using size, contrast, and color to guide the eye naturally',
          'Centering every single element in the screen',
          'Eliminating whitespace to fill every pixel'
        ],
        correctIndex: 1,
        explanationAr: 'التسلسل الهرمي يحدد ما يراه المستخدم أولاً وثانياً وثالثاً بوضوح وسلاسة.',
        explanationEn: 'Visual Hierarchy defines what the user sees first, second, and third effortlessly.'
      },
      {
        id: 2,
        questionAr: 'ما أهمية المساحات البيضاء (Whitespace / Negative Space) في التصميم الاحترافي؟',
        questionEn: 'What is the role of Whitespace (Negative Space) in professional UI design?',
        optionsAr: [
          'مساحات ضائعة يجب ملؤها فوراً بالصور والنصوص',
          'تمنح العناصر متنفساً وتزيد من قابلية القراءة وتفصل بين الأفكار بوضوح',
          'تستعمل فقط في التصاميم المطبوعة وليس في مواقع الويب',
          'تبطئ تحميل الصفحة وتستهلك الذاكرة'
        ],
        optionsEn: [
          'Wasted space that should be filled immediately with images and text',
          'Gives elements breathing room, increases readability, and clearly separates content',
          'Used only in print design, not web apps',
          'Slows down page load times'
        ],
        correctIndex: 1,
        explanationAr: 'المساحة البيضاء ليست مساحة فارغة، بل هي عنصر تصميم فعال يخلق التوازن والتركيز.',
        explanationEn: 'Whitespace is an active design element that creates balance, focus, and elegance.'
      },
      {
        id: 3,
        questionAr: 'ما هي نسبة التباين الأدنى المقبولة وفقاً لمعايير إمكانية الوصول (WCAG AA) للنصوص العادية؟',
        questionEn: 'What is the minimum acceptable contrast ratio for normal text under WCAG AA standards?',
        optionsAr: [
          '1.5:1',
          '3:1',
          '4.5:1',
          '10:1'
        ],
        optionsEn: [
          '1.5:1',
          '3:1',
          '4.5:1',
          '10:1'
        ],
        correctIndex: 2,
        explanationAr: 'تطلب معايير WCAG AA نسبة تباين لا تقل عن 4.5:1 للنصوص العادية لضمان وضوح القراءة للجميع.',
        explanationEn: 'WCAG AA requires a minimum 4.5:1 contrast ratio for standard body text readability.'
      },
      {
        id: 4,
        questionAr: 'عند اختيار نظام الألوان (Color Palette)، ما هي القاعدة الشهيرة لتوزيع التوازن البصري؟',
        questionEn: 'When building a color palette, what is the famous ratio for visual balance?',
        optionsAr: [
          '50% رئيسي، 50% فرعي',
          '60% لون مهيمن، 30% لون ثنائي، 10% لون محفز (Accent Color)',
          '90% محفز، 10% خلفية',
          'استخدام 8 ألوان بنفس النسبة'
        ],
        optionsEn: [
          '50% primary, 50% secondary',
          '60% dominant base, 30% secondary, 10% accent color',
          '90% accent, 10% background',
          'Use 8 colors equally'
        ],
        correctIndex: 1,
        explanationAr: 'قاعدة 60-30-10 تضمن توازناً بصرياً يمنع تشتيت المستخدم وتبرز أزرار العمل الرئيسية (CTAs).',
        explanationEn: 'The 60-30-10 rule balances visual attention and highlights primary calls to action.'
      },
      {
        id: 5,
        questionAr: 'لماذا يُفضل استخدام المكونات القابلة للإعادة (Reusable Components) في UI؟',
        questionEn: 'Why is it essential to use Reusable Components in UI design systems?',
        optionsAr: [
          'لتطابق الواجهات وتسهيل التطوير والصيانة وسرعة التعديل المستقبلي',
          'لأنها تجبر المصمم على استخدام زر واحد فقط',
          'لإلغاء التفاعل مع المستخدمين',
          'لأن المتصفحات لا تقبل الأزرار المختلفة'
        ],
        optionsEn: [
          'To maintain strict UI consistency, accelerate development, and make updates seamless',
          'Because it forces designers to use only one button type',
          'To eliminate user interaction',
          'Because browsers reject custom buttons'
        ],
        correctIndex: 0,
        explanationAr: 'المكونات الموحدة تضمن الاتساق التام في التطبيق وتوفر مئات الساعات في التطوير والتحديث.',
        explanationEn: 'Reusable components preserve UI consistency and dramatically save dev & maintenance effort.'
      }
    ]
  }
};

// Fallback Quiz for topics without specific custom quizzes yet
export function getQuizForTopic(topicId: string, topicTitleAr?: string, topicTitleEn?: string): TopicQuiz {
  if (QUIZZES_DATA[topicId]) {
    return QUIZZES_DATA[topicId];
  }

  // Generic challenging quiz tailored to the topic
  return {
    topicId,
    titleAr: `اختبار التحدي المتقدم: ${topicTitleAr || topicId}`,
    titleEn: `Challenging Assessment: ${topicTitleEn || topicId}`,
    passingScore: 80,
    questions: [
      {
        id: 1,
        questionAr: `ما هو الهدف الأساسي من تطبيق مفاهيم ${topicTitleAr || topicId} في تصميم واجهات المستخدم؟`,
        questionEn: `What is the core objective of applying ${topicTitleEn || topicId} concepts in UI/UX?`,
        optionsAr: [
          'تحسين تجربة المستخدم وتقليل الأخطاء وتسهيل التفاعل المباشر',
          'زيادة التعقيد في الواجهة لإظهار المهارات المتقدمة',
          'تغيير الواجهات بشكل يومي دون هدف محدد',
          'إلغاء نصوص المساعدة والقوائم'
        ],
        optionsEn: [
          'Enhancing user experience, mitigating errors, and streamlining direct interaction',
          'Increasing interface complexity to showcase skills',
          'Changing design daily without specific metrics',
          'Eliminating support labels and menus'
        ],
        correctIndex: 0,
        explanationAr: 'الهدف الدائم هو تبسيط تجربة المستخدم وتحقيق أهدافه بفاعلية وسرعة.',
        explanationEn: 'The overarching goal is to streamline the user experience and drive efficient goal completion.'
      },
      {
        id: 2,
        questionAr: 'كيف تضمن تطبيق أفضل الممارسات عند تصميم وتنفيذ هذا المفهوم؟',
        questionEn: 'How do you enforce best practices when designing and executing this concept?',
        optionsAr: [
          'بالاعتماد على التخمين والآراء الشخصية فقط',
          'مراعاة معايير الوصول (Accessibility)، والتسلسل البصري، واختبار الواجهة مع مستخدمين حقيقيين',
          'إهمال الجوال والتركيز على شاشات الكومبيوتر الكبيرة فقط',
          'نسخ واجهات عشوائية دون فهم السياق'
        ],
        optionsEn: [
          'Relying solely on guesses and personal preference',
          'Adhering to accessibility standards, visual hierarchy, and testing with real users',
          'Ignoring mobile devices and focusing only on desktop 4K screens',
          'Copying random screenshots without understanding context'
        ],
        correctIndex: 1,
        explanationAr: 'الالتزام بالمعايير العالمية والاختبار المستمر هو الضامن الوحيد لجودة المنتج.',
        explanationEn: 'Adhering to global standards and iterative testing guarantees product excellence.'
      },
      {
        id: 3,
        questionAr: 'ما هي العلامة الرئيسية الدالة على نجاح تطبيق هذا الدرس في منتجك؟',
        questionEn: 'What key metric indicates successful implementation of this lesson in your product?',
        optionsAr: [
          'سهولة الاستخدام، وضوح التصفح، وانخفاض معدل الخطأ لدى المستخدمين',
          'زيادة عدد الشكاوى الواردة للدعم الفني',
          'صعوبة وصول المستخدم لمعلوماته الشخصية',
          'بطء الاستجابة عند الضغط على الأزرار'
        ],
        optionsEn: [
          'Ease of use, seamless navigation, and lower user error rate',
          'Increased volume of customer support complaints',
          'Difficulty accessing personal profile data',
          'Slower interaction feedback'
        ],
        correctIndex: 0,
        explanationAr: 'سلاسة التصفح وانخفاض نسبة الأخطاء يثبت نجاح التطبيق العملي.',
        explanationEn: 'Smooth navigation and low user error rates prove successful practical implementation.'
      }
    ]
  };
}
