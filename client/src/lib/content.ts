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
      title: lang === 'ar' ? 'UX Foundations' : 'UX Foundations',
      emoji: '🧠',
      description: lang === 'ar' ? 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟' : 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟' : 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.' : 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو' : 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Usability: هل سهل الاستخدام؟\n• Clarity: هل واضح؟\n• Efficiency: هل بيوصل لهدفه بسرعة؟\n• Satisfaction: هل التجربة مريحة؟' : '• Usability: هل سهل الاستخدام؟\n• Clarity: هل واضح؟\n• Efficiency: هل بيوصل لهدفه بسرعة؟\n• Satisfaction: هل التجربة مريحة؟',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تطبيق طلب أكل:\nلو خلّصت الطلب في خطوات قليلة → UX كويس\nلو تهت بين الصفحات → UX سيء' : 'تطبيق طلب أكل:\nلو خلّصت الطلب في خطوات قليلة → UX كويس\nلو تهت بين الصفحات → UX سيء',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: خطوات كتير + لخبطة' : 'Bad: خطوات كتير + لخبطة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• التركيز على الشكل بس\n• تجاهل تجربة المستخدم' : '• التركيز على الشكل بس\n• تجاهل تجربة المستخدم',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خلي كل خطوة واضحة\n• قلل عدد الخطوات\n• اختبر على حد حقيقي' : '• خلي كل خطوة واضحة\n• قلل عدد الخطوات\n• اختبر على حد حقيقي',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'قول مثال على App UX بتاعه سيء وليه' : 'قول مثال على App UX بتاعه سيء وليه',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'UX = سهولة + وضوح + راحة المستخدم)' : 'UX = سهولة + وضوح + راحة المستخدم)',
          type: 'summary'
        },
      ]
    },
    {
      id: 'design-thinking-process',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Design Thinking Process' : 'Design Thinking Process',
      emoji: '💡',
      description: lang === 'ar' ? 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟' : 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟' : 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Design Thinking هو أسلوب لحل المشاكل بيركز على فهم المستخدم قبل ما نبدأ نحل.' : 'Design Thinking هو أسلوب لحل المشاكل بيركز على فهم المستخدم قبل ما نبدأ نحل.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيمنعك تشتغل على افتراضات\nوبيخليك تبني حلول مبنية على الواقع' : 'بيمنعك تشتغل على افتراضات\nوبيخليك تبني حلول مبنية على الواقع',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Empathize: افهم المستخدم\n• Define: حدد المشكلة\n• Ideate: فكر في حلول\n• Prototype: جرب\n• Test: اختبر' : '• Empathize: افهم المستخدم\n• Define: حدد المشكلة\n• Ideate: فكر في حلول\n• Prototype: جرب\n• Test: اختبر',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'طالب مش بينظم وقته → نفهم السبب → نحدد المشكلة → نجرب حل' : 'طالب مش بينظم وقته → نفهم السبب → نحدد المشكلة → نجرب حل',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تبدأ تصميم على طول' : 'Bad: تبدأ تصميم على طول',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل مرحلة الفهم\n• القفز للحل بسرعة' : '• تجاهل مرحلة الفهم\n• القفز للحل بسرعة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل كتير قبل ما تصمم\n• خليك مرن' : '• اسأل كتير قبل ما تصمم\n• خليك مرن',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اختار مشكلة وامشي عليها بالمراحل' : 'اختار مشكلة وامشي عليها بالمراحل',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'افهم → حدد → حل → جرّب' : 'افهم → حدد → حل → جرّب',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-research',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Research' : 'User Research',
      emoji: '🔍',
      description: lang === 'ar' ? 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟' : 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟' : 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'User Research هو جمع معلومات عن المستخدمين عشان نفهم سلوكهم واحتياجاتهم.' : 'User Research هو جمع معلومات عن المستخدمين عشان نفهم سلوكهم واحتياجاتهم.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تبني على بيانات مش تخمين\nوبيوفر وقت ومجهود' : 'بيخليك تبني على بيانات مش تخمين\nوبيوفر وقت ومجهود',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Survey: بيانات من عدد كبير\n• Interview: فهم عميق\n• Observation: ملاحظة السلوك' : '• Survey: بيانات من عدد كبير\n• Interview: فهم عميق\n• Observation: ملاحظة السلوك',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تسأل الطلبة عن مشاكلهم في المذاكرة' : 'تسأل الطلبة عن مشاكلهم في المذاكرة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تسأل أسئلة عامة' : 'Bad: تسأل أسئلة عامة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• الاعتماد على رأيك\n• تجاهل النتائج' : '• الاعتماد على رأيك\n• تجاهل النتائج',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل “بتعمل ايه؟” مش “شايف ايه؟”\n• سجل الإجابات' : '• اسأل “بتعمل ايه؟” مش “شايف ايه؟”\n• سجل الإجابات',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب 3 أسئلة تفهم بيها مشكلة' : 'اكتب 3 أسئلة تفهم بيها مشكلة',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Research = فهم حقيقي للمستخدم' : 'Research = فهم حقيقي للمستخدم',
          type: 'summary'
        },
      ]
    },
    {
      id: 'competitive-analysis',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Competitive Analysis' : 'Competitive Analysis',
      emoji: '📊',
      description: lang === 'ar' ? 'ليه نبدأ من الصفر… وفي ناس عملت نفس الفكرة قبلنا؟' : 'ليه نبدأ من الصفر… وفي ناس عملت نفس الفكرة قبلنا؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه نبدأ من الصفر… وفي ناس عملت نفس الفكرة قبلنا؟' : 'ليه نبدأ من الصفر… وفي ناس عملت نفس الفكرة قبلنا؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تحليل المنافسين لفهم هم بيعملوا ايه صح وايه غلط.' : 'تحليل المنافسين لفهم هم بيعملوا ايه صح وايه غلط.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'يوفر وقت\nويساعدك تعمل حاجة أحسن' : 'يوفر وقت\nويساعدك تعمل حاجة أحسن',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Identify competitors\n• تحليل المميزات\n• تحليل العيوب\n• استخراج فرص' : '• Identify competitors\n• تحليل المميزات\n• تحليل العيوب\n• استخراج فرص',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تقارن بين 2 Apps لتنظيم الوقت' : 'تقارن بين 2 Apps لتنظيم الوقت',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تقلد المنافس' : 'Bad: تقلد المنافس',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• النسخ\n• تحليل سطحي' : '• النسخ\n• تحليل سطحي',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• ركز على تجربة الاستخدام\n• جرب المنتج بنفسك' : '• ركز على تجربة الاستخدام\n• جرب المنتج بنفسك',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اذكر ميزة وعيب في App بتستخدمه' : 'اذكر ميزة وعيب في App بتستخدمه',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'اتعلم من غيرك… مش تنسخه' : 'اتعلم من غيرك… مش تنسخه',
          type: 'summary'
        },
      ]
    },
    {
      id: 'problem-definition',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Problem Definition' : 'Problem Definition',
      emoji: '🎯',
      description: lang === 'ar' ? 'ليه أحيانًا بنشتغل كتير… وفي الآخر نكتشف إننا بنحل مشكلة مش مهمة؟' : 'ليه أحيانًا بنشتغل كتير… وفي الآخر نكتشف إننا بنحل مشكلة مش مهمة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه أحيانًا بنشتغل كتير… وفي الآخر نكتشف إننا بنحل مشكلة مش مهمة؟' : 'ليه أحيانًا بنشتغل كتير… وفي الآخر نكتشف إننا بنحل مشكلة مش مهمة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تحديد المشكلة بشكل واضح بناءً على البحث.' : 'تحديد المشكلة بشكل واضح بناءً على البحث.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيحدد اتجاه الشغل كله\nولو غلط → كل اللي بعده غلط' : 'بيحدد اتجاه الشغل كله\nولو غلط → كل اللي بعده غلط',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• مين المستخدم؟\n• ايه المشكلة؟\n• ليه بتحصل؟' : '• مين المستخدم؟\n• ايه المشكلة؟\n• ليه بتحصل؟',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'طالب مش بينظم وقته بسبب عدم وجود طريقة واضحة' : 'طالب مش بينظم وقته بسبب عدم وجود طريقة واضحة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: “نعمل App”' : 'Bad: “نعمل App”',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• مشكلة عامة\n• بدون User' : '• مشكلة عامة\n• بدون User',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليك محدد\n• اربط المشكلة بالمستخدم' : '• خليك محدد\n• اربط المشكلة بالمستخدم',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب Problem Statement' : 'اكتب Problem Statement',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'مشكلة واضحة = حل صح' : 'مشكلة واضحة = حل صح',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-needs-and-pain-points',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Needs & Pain Points' : 'User Needs & Pain Points',
      emoji: '🩹',
      description: lang === 'ar' ? 'ليه المستخدم بيشتكي؟ وإيه اللي فعلاً محتاجه؟' : 'ليه المستخدم بيشتكي؟ وإيه اللي فعلاً محتاجه؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه المستخدم بيشتكي؟ وإيه اللي فعلاً محتاجه؟' : 'ليه المستخدم بيشتكي؟ وإيه اللي فعلاً محتاجه؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Pain Points = المشاكل' : 'Pain Points = المشاكل',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيوضح انت هتصمم ليه' : 'بيوضح انت هتصمم ليه',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Goal: هدف المستخدم\n• Pain: المشكلة\n• Need: الحل' : '• Goal: هدف المستخدم\n• Pain: المشكلة\n• Need: الحل',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'بينسى المواعيد → محتاج Reminder' : 'بينسى المواعيد → محتاج Reminder',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تركز على Features' : 'Bad: تركز على Features',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل السبب الحقيقي' : '• تجاهل السبب الحقيقي',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل “ليه” أكتر من مرة' : '• اسأل “ليه” أكتر من مرة',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب Pain + Need' : 'اكتب Pain + Need',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'كل مشكلة = فرصة تصميم' : 'كل مشكلة = فرصة تصميم',
          type: 'summary'
        },
      ]
    },
    {
      id: 'personas',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Personas' : 'Personas',
      emoji: '👤',
      description: lang === 'ar' ? 'هل ينفع نصمم من غير ما نعرف بنصمم لمين؟' : 'هل ينفع نصمم من غير ما نعرف بنصمم لمين؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل ينفع نصمم من غير ما نعرف بنصمم لمين؟' : 'هل ينفع نصمم من غير ما نعرف بنصمم لمين؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Persona هي شخصية خيالية تمثل المستخدم الحقيقي.' : 'Persona هي شخصية خيالية تمثل المستخدم الحقيقي.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بتخليك تصمم بتركيز' : 'بتخليك تصمم بتركيز',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Name\n• Age\n• Goals\n• Pain Points\n• Behavior' : '• Name\n• Age\n• Goals\n• Pain Points\n• Behavior',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'طالب بيعاني من تنظيم الوقت' : 'طالب بيعاني من تنظيم الوقت',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: Persona عشوائية' : 'Bad: Persona عشوائية',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• اختراع بيانات' : '• اختراع بيانات',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليها واقعية\n• اربطها بالبحث' : '• خليها واقعية\n• اربطها بالبحث',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اعمل Persona بسيطة' : 'اعمل Persona بسيطة',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Persona = المستخدم بقى واضح' : 'Persona = المستخدم بقى واضح',
          type: 'summary'
        },
      ]
    },
    {
      id: 'empathy-map',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Empathy Map' : 'Empathy Map',
      emoji: '🗺️',
      description: lang === 'ar' ? 'هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟' : 'هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟' : 'هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Empathy Map أداة لفهم المستخدم بشكل أعمق (مشاعره وسلوكه)' : 'Empathy Map أداة لفهم المستخدم بشكل أعمق (مشاعره وسلوكه)',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تشوف من وجهة نظر المستخدم' : 'بيخليك تشوف من وجهة نظر المستخدم',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Says\n• Thinks\n• Does\n• Feels' : '• Says\n• Thinks\n• Does\n• Feels',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? '“مش لاقي وقت” → توتر' : '“مش لاقي وقت” → توتر',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: كلام عام' : 'Bad: كلام عام',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• عدم الربط بالـ Persona' : '• عدم الربط بالـ Persona',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم كلام المستخدم\n• اربط كل حاجة بالواقع' : '• استخدم كلام المستخدم\n• اربط كل حاجة بالواقع',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اعمل Empathy Map' : 'اعمل Empathy Map',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'افهم المستخدم من جوه مش من بره' : 'افهم المستخدم من جوه مش من بره',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-stories---jtbd',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Stories / JTBD' : 'User Stories / JTBD',
      emoji: '📖',
      description: lang === 'ar' ? 'User Stories و JTBD (Jobs To Be Done) طرق لفهم المستخدم من خلال الهدف اللي عايز يحققه، مش مجرد استخدامه للمنتج.' : 'User Stories و JTBD (Jobs To Be Done) طرق لفهم المستخدم من خلال الهدف اللي عايز يحققه، مش مجرد استخدامه للمنتج.',
      estimatedTime: 15,
      steps: [
        {
          id: 'concept',
          title: lang === 'ar' ? '1. Concept' : '1. Concept',
          content: lang === 'ar' ? 'User Stories و JTBD (Jobs To Be Done) طرق لفهم المستخدم من خلال الهدف اللي عايز يحققه، مش مجرد استخدامه للمنتج.' : 'User Stories و JTBD (Jobs To Be Done) طرق لفهم المستخدم من خلال الهدف اللي عايز يحققه، مش مجرد استخدامه للمنتج.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '2. Why It Matters' : '2. Why It Matters',
          content: lang === 'ar' ? 'بيركزك على “ليه المستخدم بيستخدم المنتج”\nمش بس “بيستخدمه إزاي”' : 'بيركزك على “ليه المستخدم بيستخدم المنتج”\nمش بس “بيستخدمه إزاي”',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '3. Breakdown' : '3. Breakdown',
          content: lang === 'ar' ? '• User Story:\n  As a [User] I want to [Goal] so that [Benefit]\n• JTBD:\n  What job is the user trying to get done?' : '• User Story:\n  As a [User] I want to [Goal] so that [Benefit]\n• JTBD:\n  What job is the user trying to get done?',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '4. Example' : '4. Example',
          content: lang === 'ar' ? 'طالب عايز ينظم وقته → مش عايز App… عايز ينجز مهامه' : 'طالب عايز ينظم وقته → مش عايز App… عايز ينجز مهامه',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '5. Bad Vs Good' : '5. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: “نضيف Feature جديدة”' : 'Bad: “نضيف Feature جديدة”',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '6. Mistakes' : '6. Mistakes',
          content: lang === 'ar' ? '• كتابة Stories عامة\n• تجاهل الهدف الحقيقي' : '• كتابة Stories عامة\n• تجاهل الهدف الحقيقي',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '7. Tips' : '7. Tips',
          content: lang === 'ar' ? '• ركز على الهدف مش الفعل\n• خليك بسيط وواضح' : '• ركز على الهدف مش الفعل\n• خليك بسيط وواضح',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '8. Activity' : '8. Activity',
          content: lang === 'ar' ? 'اكتب User Story لمشكلة معينة' : 'اكتب User Story لمشكلة معينة',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '9. Summary' : '9. Summary',
          content: lang === 'ar' ? 'المستخدم “يوظف” المنتج عشان يحقق هدف' : 'المستخدم “يوظف” المنتج عشان يحقق هدف',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-flow',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Flow' : 'User Flow',
      emoji: '🌊',
      description: lang === 'ar' ? 'هل المستخدم عارف يوصل لهدفه… ولا بيضيع في النص؟' : 'هل المستخدم عارف يوصل لهدفه… ولا بيضيع في النص؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل المستخدم عارف يوصل لهدفه… ولا بيضيع في النص؟' : 'هل المستخدم عارف يوصل لهدفه… ولا بيضيع في النص؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'User Flow هو المسار اللي المستخدم بيمشي فيه عشان يحقق هدف معين داخل المنتج.' : 'User Flow هو المسار اللي المستخدم بيمشي فيه عشان يحقق هدف معين داخل المنتج.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيوضح هل التجربة سهلة ولا معقدة' : 'بيوضح هل التجربة سهلة ولا معقدة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Start (بداية)\n• Steps (خطوات)\n• Decision points\n• End (تحقيق الهدف)' : '• Start (بداية)\n• Steps (خطوات)\n• Decision points\n• End (تحقيق الهدف)',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'فتح App → اختيار منتج → إضافة للسلة → الدفع' : 'فتح App → اختيار منتج → إضافة للسلة → الدفع',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: خطوات كتير ومتشعبة' : 'Bad: خطوات كتير ومتشعبة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تعقيد المسار\n• عدم وضوح الخطوات' : '• تعقيد المسار\n• عدم وضوح الخطوات',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• قلل عدد الخطوات\n• خليك مباشر' : '• قلل عدد الخطوات\n• خليك مباشر',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'ارسم Flow بسيط لطلب أكل' : 'ارسم Flow بسيط لطلب أكل',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Flow واضح = تجربة أسهل' : 'Flow واضح = تجربة أسهل',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-journey-map',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Journey Map' : 'User Journey Map',
      emoji: '🛤️',
      description: lang === 'ar' ? 'هل التجربة كويسة من أول خطوة… ولا في مراحل بتبوظها؟' : 'هل التجربة كويسة من أول خطوة… ولا في مراحل بتبوظها؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل التجربة كويسة من أول خطوة… ولا في مراحل بتبوظها؟' : 'هل التجربة كويسة من أول خطوة… ولا في مراحل بتبوظها؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'User Journey Map بيوضح تجربة المستخدم كاملة عبر مراحل مختلفة مع المنتج.' : 'User Journey Map بيوضح تجربة المستخدم كاملة عبر مراحل مختلفة مع المنتج.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيكشف المشاكل في كل مرحلة' : 'بيكشف المشاكل في كل مرحلة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• مراحل (Stages)\n• Actions\n• Thoughts\n• Feelings\n• Pain Points' : '• مراحل (Stages)\n• Actions\n• Thoughts\n• Feelings\n• Pain Points',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'قبل الطلب → أثناء الاستخدام → بعد التجربة' : 'قبل الطلب → أثناء الاستخدام → بعد التجربة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: التركيز على لحظة واحدة' : 'Bad: التركيز على لحظة واحدة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل المشاعر\n• عدم ربط المراحل' : '• تجاهل المشاعر\n• عدم ربط المراحل',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• فكر في الرحلة كاملة\n• اربط بين المراحل' : '• فكر في الرحلة كاملة\n• اربط بين المراحل',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد 3 مراحل لتجربة مستخدم' : 'حدد 3 مراحل لتجربة مستخدم',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Journey = التجربة من البداية للنهاية' : 'Journey = التجربة من البداية للنهاية',
          type: 'summary'
        },
      ]
    },
    {
      id: 'information-architecture',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Information Architecture' : 'Information Architecture',
      emoji: '🏗️',
      description: lang === 'ar' ? 'ليه أحيانًا بنضيع في الموقع ومش عارفين نلاقي اللي عايزينه؟' : 'ليه أحيانًا بنضيع في الموقع ومش عارفين نلاقي اللي عايزينه؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه أحيانًا بنضيع في الموقع ومش عارفين نلاقي اللي عايزينه؟' : 'ليه أحيانًا بنضيع في الموقع ومش عارفين نلاقي اللي عايزينه؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Information Architecture (IA) هو تنظيم وترتيب المحتوى بطريقة تسهل الوصول ليه.' : 'Information Architecture (IA) هو تنظيم وترتيب المحتوى بطريقة تسهل الوصول ليه.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي المستخدم يلاقي اللي عايزه بسرعة' : 'بيخلي المستخدم يلاقي اللي عايزه بسرعة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• تنظيم المحتوى\n• تصنيف (Categories)\n• ترتيب (Hierarchy)' : '• تنظيم المحتوى\n• تصنيف (Categories)\n• ترتيب (Hierarchy)',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تقسيم المنتجات في متجر (ملابس – إلكترونيات…)' : 'تقسيم المنتجات في متجر (ملابس – إلكترونيات…)',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: كل حاجة عشوائية' : 'Bad: كل حاجة عشوائية',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تصنيف غلط\n• تنظيم معقد' : '• تصنيف غلط\n• تنظيم معقد',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• فكر زي المستخدم\n• خلي التنظيم بسيط' : '• فكر زي المستخدم\n• خلي التنظيم بسيط',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'قسم محتوى App لفئات' : 'قسم محتوى App لفئات',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'تنظيم كويس = وصول أسرع' : 'تنظيم كويس = وصول أسرع',
          type: 'summary'
        },
      ]
    },
    {
      id: 'sitemap-and-navigation',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Sitemap & Navigation' : 'Sitemap & Navigation',
      emoji: '🗺️',
      description: lang === 'ar' ? 'هل المستخدم عارف يروح فين… ولا تايه في الموقع؟' : 'هل المستخدم عارف يروح فين… ولا تايه في الموقع؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل المستخدم عارف يروح فين… ولا تايه في الموقع؟' : 'هل المستخدم عارف يروح فين… ولا تايه في الموقع؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Sitemap هو خريطة الموقع، وNavigation هو طريقة التنقل بين الصفحات.' : 'Sitemap هو خريطة الموقع، وNavigation هو طريقة التنقل بين الصفحات.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيحدد سهولة الحركة داخل المنتج' : 'بيحدد سهولة الحركة داخل المنتج',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Pages structure\n• Main navigation\n• روابط بين الصفحات' : '• Pages structure\n• Main navigation\n• روابط بين الصفحات',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'Home → Products → Details → Checkout' : 'Home → Products → Details → Checkout',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: Navigation معقد' : 'Bad: Navigation معقد',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• قوائم كتير\n• روابط مش واضحة' : '• قوائم كتير\n• روابط مش واضحة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليك بسيط\n• خلي أهم الحاجات واضحة' : '• خليك بسيط\n• خلي أهم الحاجات واضحة',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'ارسم Sitemap بسيط' : 'ارسم Sitemap بسيط',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Navigation واضح = تجربة مريحة' : 'Navigation واضح = تجربة مريحة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'wireframing-low---mid-fidelity',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Wireframing (Low / Mid Fidelity)' : 'Wireframing (Low / Mid Fidelity)',
      emoji: '✏️',
      description: lang === 'ar' ? 'هل لازم نبدأ بالتصميم النهائي من أول مرة؟' : 'هل لازم نبدأ بالتصميم النهائي من أول مرة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل لازم نبدأ بالتصميم النهائي من أول مرة؟' : 'هل لازم نبدأ بالتصميم النهائي من أول مرة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Wireframe هو رسم بسيط يوضح شكل وترتيب العناصر قبل التصميم النهائي.' : 'Wireframe هو رسم بسيط يوضح شكل وترتيب العناصر قبل التصميم النهائي.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيوفر وقت\nوبيسمح بالتجربة والتعديل بسهولة' : 'بيوفر وقت\nوبيسمح بالتجربة والتعديل بسهولة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Low Fidelity: Sketch بسيط\n• Mid Fidelity: تفاصيل أكتر' : '• Low Fidelity: Sketch بسيط\n• Mid Fidelity: تفاصيل أكتر',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'مستطيلات بدل صور ونصوص' : 'مستطيلات بدل صور ونصوص',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تبدأ Design على طول' : 'Bad: تبدأ Design على طول',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• التركيز على الشكل\n• تجاهل الوظيفة' : '• التركيز على الشكل\n• تجاهل الوظيفة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• ركز على Layout\n• خليك بسيط' : '• ركز على Layout\n• خليك بسيط',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'ارسم Wireframe لشاشة' : 'ارسم Wireframe لشاشة',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'ابدأ بسيط قبل ما تعقد' : 'ابدأ بسيط قبل ما تعقد',
          type: 'summary'
        },
      ]
    },
    {
      id: 'ux-prototyping',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'UX Prototyping' : 'UX Prototyping',
      emoji: '📱',
      description: lang === 'ar' ? 'إزاي نعرف التصميم هيشتغل فعلاً قبل ما يتنفذ؟' : 'إزاي نعرف التصميم هيشتغل فعلاً قبل ما يتنفذ؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي نعرف التصميم هيشتغل فعلاً قبل ما يتنفذ؟' : 'إزاي نعرف التصميم هيشتغل فعلاً قبل ما يتنفذ؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Prototype هو نموذج تفاعلي يحاكي تجربة المستخدم.' : 'Prototype هو نموذج تفاعلي يحاكي تجربة المستخدم.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تختبر قبل التنفيذ' : 'بيخليك تختبر قبل التنفيذ',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Clickable screens\n• Transitions\n• User interaction' : '• Clickable screens\n• Transitions\n• User interaction',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'الضغط على زر يفتح صفحة تانية' : 'الضغط على زر يفتح صفحة تانية',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: صور ثابتة' : 'Bad: صور ثابتة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• Prototype معقد زيادة\n• تجاهل الهدف' : '• Prototype معقد زيادة\n• تجاهل الهدف',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليه بسيط\n• ركز على الفكرة' : '• خليه بسيط\n• ركز على الفكرة',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اربط شاشتين مع بعض' : 'اربط شاشتين مع بعض',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Prototype = تجربة قبل التنفيذ' : 'Prototype = تجربة قبل التنفيذ',
          type: 'summary'
        },
      ]
    },
    {
      id: 'usability-testing',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Usability Testing' : 'Usability Testing',
      emoji: '🧪',
      description: lang === 'ar' ? 'هل التصميم سهل فعلًا… ولا احنا شايفينه سهل بس؟' : 'هل التصميم سهل فعلًا… ولا احنا شايفينه سهل بس؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل التصميم سهل فعلًا… ولا احنا شايفينه سهل بس؟' : 'هل التصميم سهل فعلًا… ولا احنا شايفينه سهل بس؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'اختبار التصميم مع مستخدمين حقيقيين لمعرفة هل سهل الاستخدام ولا لأ.' : 'اختبار التصميم مع مستخدمين حقيقيين لمعرفة هل سهل الاستخدام ولا لأ.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيكشف مشاكل حقيقية' : 'بيكشف مشاكل حقيقية',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Give task\n• Observe\n• Collect feedback' : '• Give task\n• Observe\n• Collect feedback',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'خلي حد يجرب App وشوف بيتلخبط فين' : 'خلي حد يجرب App وشوف بيتلخبط فين',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تسأل رأيه بس' : 'Bad: تسأل رأيه بس',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• الاعتماد على الرأي\n• تجاهل الملاحظات' : '• الاعتماد على الرأي\n• تجاهل الملاحظات',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسكت وخلي المستخدم يتكلم\n• سجل الملاحظات' : '• اسكت وخلي المستخدم يتكلم\n• سجل الملاحظات',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'خلي حد يجرب حاجة وصممتها' : 'خلي حد يجرب حاجة وصممتها',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'اختبر… متفترضش' : 'اختبر… متفترضش',
          type: 'summary'
        },
      ]
    },
    {
      id: 'ux-iteration-and-validation',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'UX Iteration & Validation' : 'UX Iteration & Validation',
      emoji: '♻️',
      description: lang === 'ar' ? 'هل أول تصميم دايمًا بيكون صح؟' : 'هل أول تصميم دايمًا بيكون صح؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل أول تصميم دايمًا بيكون صح؟' : 'هل أول تصميم دايمًا بيكون صح؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Iteration يعني تحسين التصميم بناءً على Feedback واختبارات.' : 'Iteration يعني تحسين التصميم بناءً على Feedback واختبارات.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي المنتج يتطور باستمرار' : 'بيخلي المنتج يتطور باستمرار',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Test\n• Feedback\n• Improve\n• Repeat' : '• Test\n• Feedback\n• Improve\n• Repeat',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تعدل على تصميم بعد اختبار' : 'تعدل على تصميم بعد اختبار',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تسيب التصميم زي ما هو' : 'Bad: تسيب التصميم زي ما هو',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الـ Feedback\n• الخوف من التعديل' : '• تجاهل الـ Feedback\n• الخوف من التعديل',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليك مرن\n• التعديل طبيعي' : '• خليك مرن\n• التعديل طبيعي',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اذكر حاجة ممكن تطورها في تصميم' : 'اذكر حاجة ممكن تطورها في تصميم',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Design = عملية مستمرة' : 'Design = عملية مستمرة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'ux-documentation-and-handoff',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'UX Documentation & Handoff' : 'UX Documentation & Handoff',
      emoji: '📑',
      description: lang === 'ar' ? 'إزاي تتأكد إن شغلك هيتنفذ صح من غير ما يتفهم غلط؟' : 'إزاي تتأكد إن شغلك هيتنفذ صح من غير ما يتفهم غلط؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي تتأكد إن شغلك هيتنفذ صح من غير ما يتفهم غلط؟' : 'إزاي تتأكد إن شغلك هيتنفذ صح من غير ما يتفهم غلط؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'توثيق التصميم وتسليمه للمطورين بشكل واضح.' : 'توثيق التصميم وتسليمه للمطورين بشكل واضح.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيضمن تنفيذ التصميم بشكل صحيح' : 'بيضمن تنفيذ التصميم بشكل صحيح',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Design specs\n• Assets\n• Notes / guidelines' : '• Design specs\n• Assets\n• Notes / guidelines',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تحديد المسافات والألوان والخطوط' : 'تحديد المسافات والألوان والخطوط',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تسليم بدون شرح' : 'Bad: تسليم بدون شرح',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• نقص التفاصيل\n• عدم التواصل' : '• نقص التفاصيل\n• عدم التواصل',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• وضح كل حاجة\n• تواصل مع الـ Dev' : '• وضح كل حاجة\n• تواصل مع الـ Dev',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب ملاحظات لتصميم' : 'اكتب ملاحظات لتصميم',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Documentation = تنفيذ صح' : 'Documentation = تنفيذ صح',
          type: 'summary'
        },
      ]
    },
  ];

  return {
    id: 'ux-track',
    title: lang === 'ar' ? 'UX' : 'UX',
    emoji: '🧠',
    color: '#4F46E5',
    description: lang === 'ar' ? 'Learn UX Foundations and Process' : 'Learn UX Foundations and Process',
    topics
  };
};

const getUITrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'ui-foundations',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'UI Foundations' : 'UI Foundations',
      emoji: '🎨',
      description: lang === 'ar' ? 'هل الشكل الحلو كفاية يخلي المستخدم يكمل استخدام المنتج؟' : 'هل الشكل الحلو كفاية يخلي المستخدم يكمل استخدام المنتج؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل الشكل الحلو كفاية يخلي المستخدم يكمل استخدام المنتج؟' : 'هل الشكل الحلو كفاية يخلي المستخدم يكمل استخدام المنتج؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'UI هو الشكل البصري للمنتج (الألوان، الخطوط، الأزرار…)، وهو اللي المستخدم بيشوفه ويتفاعل معاه.' : 'UI هو الشكل البصري للمنتج (الألوان، الخطوط، الأزرار…)، وهو اللي المستخدم بيشوفه ويتفاعل معاه.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'أول انطباع بييجي من UI\nولو سيء → المستخدم ممكن يمشي حتى لو UX كويس' : 'أول انطباع بييجي من UI\nولو سيء → المستخدم ممكن يمشي حتى لو UX كويس',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Visuals (ألوان / خطوط)\n• Layout (ترتيب العناصر)\n• Components (أزرار / Inputs)' : '• Visuals (ألوان / خطوط)\n• Layout (ترتيب العناصر)\n• Components (أزرار / Inputs)',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'App شكله نظيف وواضح → المستخدم مرتاح' : 'App شكله نظيف وواضح → المستخدم مرتاح',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: شكل مزعج أو غير منظم' : 'Bad: شكل مزعج أو غير منظم',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• Over design\n• عدم الاتساق' : '• Over design\n• عدم الاتساق',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليك بسيط\n• اهتم بالتفاصيل' : '• خليك بسيط\n• اهتم بالتفاصيل',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'قول رأيك في UI لأي App' : 'قول رأيك في UI لأي App',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'UI = الشكل اللي المستخدم بيتعامل معاه' : 'UI = الشكل اللي المستخدم بيتعامل معاه',
          type: 'summary'
        },
      ]
    },
    {
      id: 'visual-design-principles',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Visual Design Principles' : 'Visual Design Principles',
      emoji: '📏',
      description: lang === 'ar' ? 'ليه في تصميمات شكلها “مظبوط” حتى لو بسيطة؟' : 'ليه في تصميمات شكلها “مظبوط” حتى لو بسيطة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه في تصميمات شكلها “مظبوط” حتى لو بسيطة؟' : 'ليه في تصميمات شكلها “مظبوط” حتى لو بسيطة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'مبادئ بصرية بتنظم التصميم وتخليه مريح وسهل الفهم.' : 'مبادئ بصرية بتنظم التصميم وتخليه مريح وسهل الفهم.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بتخلي التصميم واضح ومقروء' : 'بتخلي التصميم واضح ومقروء',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Contrast\n• Alignment\n• Hierarchy\n• Consistency' : '• Contrast\n• Alignment\n• Hierarchy\n• Consistency',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'عنوان كبير + لون مختلف → يلفت الانتباه' : 'عنوان كبير + لون مختلف → يلفت الانتباه',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: كل حاجة شبه بعض' : 'Bad: كل حاجة شبه بعض',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل التباين\n• عدم التنظيم' : '• تجاهل التباين\n• عدم التنظيم',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خلي أهم حاجة واضحة\n• استخدم فرق في الحجم واللون' : '• خلي أهم حاجة واضحة\n• استخدم فرق في الحجم واللون',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد أهم عنصر في تصميم' : 'حدد أهم عنصر في تصميم',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'التصميم الجيد = منظم وواضح' : 'التصميم الجيد = منظم وواضح',
          type: 'summary'
        },
      ]
    },
    {
      id: 'color-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Color System' : 'Color System',
      emoji: '🌈',
      description: lang === 'ar' ? 'ليه بعض المواقع مريحة للعين… والتانية مزعجة؟' : 'ليه بعض المواقع مريحة للعين… والتانية مزعجة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه بعض المواقع مريحة للعين… والتانية مزعجة؟' : 'ليه بعض المواقع مريحة للعين… والتانية مزعجة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'نظام الألوان المستخدم في التصميم بشكل منظم وثابت.' : 'نظام الألوان المستخدم في التصميم بشكل منظم وثابت.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيأثر على إحساس المستخدم\nوبيوضح الهوية' : 'بيأثر على إحساس المستخدم\nوبيوضح الهوية',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Primary color\n• Secondary colors\n• Neutral colors' : '• Primary color\n• Secondary colors\n• Neutral colors',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'لون أساسي للأزرار + ألوان للنصوص' : 'لون أساسي للأزرار + ألوان للنصوص',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: ألوان عشوائية' : 'Bad: ألوان عشوائية',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• استخدام ألوان كتير\n• عدم التناسق' : '• استخدام ألوان كتير\n• عدم التناسق',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم 2–3 ألوان أساسية\n• حافظ على الاتساق' : '• استخدم 2–3 ألوان أساسية\n• حافظ على الاتساق',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اختار 3 ألوان لنظام بسيط' : 'اختار 3 ألوان لنظام بسيط',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'الألوان = إحساس + تنظيم' : 'الألوان = إحساس + تنظيم',
          type: 'summary'
        },
      ]
    },
    {
      id: 'typography',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Typography' : 'Typography',
      emoji: '🔤',
      description: lang === 'ar' ? 'ليه نص سهل القراءة… ونص تاني مرهق؟' : 'ليه نص سهل القراءة… ونص تاني مرهق؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه نص سهل القراءة… ونص تاني مرهق؟' : 'ليه نص سهل القراءة… ونص تاني مرهق؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تنظيم الخطوط وأحجامها في التصميم.' : 'تنظيم الخطوط وأحجامها في التصميم.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيأثر على القراءة والفهم' : 'بيأثر على القراءة والفهم',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Font type\n• Size\n• Weight\n• Line spacing' : '• Font type\n• Size\n• Weight\n• Line spacing',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'عنوان كبير + نص أصغر' : 'عنوان كبير + نص أصغر',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: خطوط كتير' : 'Bad: خطوط كتير',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• استخدام Fonts كتير\n• حجم غير مناسب' : '• استخدام Fonts كتير\n• حجم غير مناسب',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم 1–2 Font\n• اعمل Hierarchy واضح' : '• استخدم 1–2 Font\n• اعمل Hierarchy واضح',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد العناوين والنصوص' : 'حدد العناوين والنصوص',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Typography = وضوح القراءة' : 'Typography = وضوح القراءة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'layout-and-grid-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Layout & Grid System' : 'Layout & Grid System',
      emoji: '📐',
      description: lang === 'ar' ? 'ليه بعض التصميمات مرتبة… والتانية فوضوية؟' : 'ليه بعض التصميمات مرتبة… والتانية فوضوية؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه بعض التصميمات مرتبة… والتانية فوضوية؟' : 'ليه بعض التصميمات مرتبة… والتانية فوضوية؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'طريقة ترتيب العناصر باستخدام Grid.' : 'طريقة ترتيب العناصر باستخدام Grid.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي التصميم منظم وسهل' : 'بيخلي التصميم منظم وسهل',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Columns\n• Rows\n• Alignment' : '• Columns\n• Rows\n• Alignment',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تقسيم الصفحة لأعمدة' : 'تقسيم الصفحة لأعمدة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: عناصر عشوائية' : 'Bad: عناصر عشوائية',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الـ Grid\n• عدم المحاذاة' : '• تجاهل الـ Grid\n• عدم المحاذاة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم Grid\n• حافظ على الترتيب' : '• استخدم Grid\n• حافظ على الترتيب',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'رتب عناصر على Grid' : 'رتب عناصر على Grid',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Grid = تنظيم التصميم' : 'Grid = تنظيم التصميم',
          type: 'summary'
        },
      ]
    },
    {
      id: 'spacing-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Spacing System' : 'Spacing System',
      emoji: '📏',
      description: lang === 'ar' ? 'ليه في تصميمات “مريحة”… والتانية مزنوقة؟' : 'ليه في تصميمات “مريحة”… والتانية مزنوقة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه في تصميمات “مريحة”… والتانية مزنوقة؟' : 'ليه في تصميمات “مريحة”… والتانية مزنوقة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تنظيم المسافات بين العناصر.' : 'تنظيم المسافات بين العناصر.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي التصميم واضح ومريح' : 'بيخلي التصميم واضح ومريح',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Margin\n• Padding\n• Consistent spacing' : '• Margin\n• Padding\n• Consistent spacing',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'مسافة بين العناصر تخليها واضحة' : 'مسافة بين العناصر تخليها واضحة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: عناصر لازقة' : 'Bad: عناصر لازقة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• مسافات عشوائية\n• زحمة' : '• مسافات عشوائية\n• زحمة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم System ثابت\n• سيب مساحة للتنفس' : '• استخدم System ثابت\n• سيب مساحة للتنفس',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حسّن Spacing لتصميم' : 'حسّن Spacing لتصميم',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Spacing = راحة العين' : 'Spacing = راحة العين',
          type: 'summary'
        },
      ]
    },
    {
      id: 'ui-components',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'UI Components' : 'UI Components',
      emoji: '🧩',
      description: lang === 'ar' ? 'هل كل زر في التصميم شكله مختلف؟' : 'هل كل زر في التصميم شكله مختلف؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل كل زر في التصميم شكله مختلف؟' : 'هل كل زر في التصميم شكله مختلف؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'عناصر جاهزة بتتكرر في التصميم (Buttons, Cards, Inputs…)' : 'عناصر جاهزة بتتكرر في التصميم (Buttons, Cards, Inputs…)',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بتحافظ على الاتساق' : 'بتحافظ على الاتساق',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Buttons\n• Cards\n• Inputs' : '• Buttons\n• Cards\n• Inputs',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'زرار بنفس الشكل في كل الصفحات' : 'زرار بنفس الشكل في كل الصفحات',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: كل مرة شكل مختلف' : 'Bad: كل مرة شكل مختلف',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• عدم الاتساق\n• إعادة اختراع كل حاجة' : '• عدم الاتساق\n• إعادة اختراع كل حاجة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اعمل Components reusable\n• خليها ثابتة' : '• اعمل Components reusable\n• خليها ثابتة',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد Components في App' : 'حدد Components في App',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Components = اتساق وسهولة' : 'Components = اتساق وسهولة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'forms-and-inputs',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Forms & Inputs' : 'Forms & Inputs',
      emoji: '📝',
      description: lang === 'ar' ? 'ليه في Forms سهلة… والتانية مملة؟' : 'ليه في Forms سهلة… والتانية مملة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه في Forms سهلة… والتانية مملة؟' : 'ليه في Forms سهلة… والتانية مملة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تصميم الحقول اللي المستخدم بيدخل فيها بيانات.' : 'تصميم الحقول اللي المستخدم بيدخل فيها بيانات.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيأثر على إكمال المهمة' : 'بيأثر على إكمال المهمة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Input fields\n• Labels\n• Buttons' : '• Input fields\n• Labels\n• Buttons',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'Form تسجيل بسيط' : 'Form تسجيل بسيط',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: Form طويل ومعقد' : 'Bad: Form طويل ومعقد',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• طلب بيانات كتير\n• Labels غير واضحة' : '• طلب بيانات كتير\n• Labels غير واضحة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• قلل الحقول\n• وضح المطلوب' : '• قلل الحقول\n• وضح المطلوب',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حسّن Form بسيط' : 'حسّن Form بسيط',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Form جيد = تجربة سهلة' : 'Form جيد = تجربة سهلة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'states-and-feedback',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'States & Feedback' : 'States & Feedback',
      emoji: '🔄',
      description: lang === 'ar' ? 'هل المستخدم عارف إيه اللي حصل بعد ما ضغط زر؟' : 'هل المستخدم عارف إيه اللي حصل بعد ما ضغط زر؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل المستخدم عارف إيه اللي حصل بعد ما ضغط زر؟' : 'هل المستخدم عارف إيه اللي حصل بعد ما ضغط زر؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'توضيح حالة العنصر ورد الفعل (Hover, Loading, Error…)' : 'توضيح حالة العنصر ورد الفعل (Hover, Loading, Error…)',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيطمن المستخدم ويوجهه' : 'بيطمن المستخدم ويوجهه',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Hover\n• Active\n• Loading\n• Error' : '• Hover\n• Active\n• Loading\n• Error',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'زر يتحول لون عند الضغط' : 'زر يتحول لون عند الضغط',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: مفيش Feedback' : 'Bad: مفيش Feedback',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الحالات\n• Feedback ضعيف' : '• تجاهل الحالات\n• Feedback ضعيف',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• وضح كل حالة\n• خليه واضح' : '• وضح كل حالة\n• خليه واضح',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد حالات زر' : 'حدد حالات زر',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Feedback = وضوح التفاعل' : 'Feedback = وضوح التفاعل',
          type: 'summary'
        },
      ]
    },
    {
      id: 'accessibility-ui',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Accessibility (UI)' : 'Accessibility (UI)',
      emoji: '♿',
      description: lang === 'ar' ? 'هل كل الناس تقدر تستخدم تصميمك؟' : 'هل كل الناس تقدر تستخدم تصميمك؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل كل الناس تقدر تستخدم تصميمك؟' : 'هل كل الناس تقدر تستخدم تصميمك؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تصميم واجهات تناسب كل المستخدمين بما فيهم ذوي الاحتياجات.' : 'تصميم واجهات تناسب كل المستخدمين بما فيهم ذوي الاحتياجات.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي المنتج متاح للجميع' : 'بيخلي المنتج متاح للجميع',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Contrast\n• Font size\n• Readability' : '• Contrast\n• Font size\n• Readability',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'نص واضح + ألوان مناسبة' : 'نص واضح + ألوان مناسبة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: نص مش واضح' : 'Bad: نص مش واضح',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل التباين\n• خط صغير' : '• تجاهل التباين\n• خط صغير',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اختبر القراءة\n• استخدم Contrast كويس' : '• اختبر القراءة\n• استخدم Contrast كويس',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'قيم وضوح تصميم' : 'قيم وضوح تصميم',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Accessibility = استخدام للجميع' : 'Accessibility = استخدام للجميع',
          type: 'summary'
        },
      ]
    },
    {
      id: 'design-system-basics',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Design System Basics' : 'Design System Basics',
      emoji: '📚',
      description: lang === 'ar' ? 'إزاي نخلي كل التصميمات شبه بعض ومش عشوائية؟' : 'إزاي نخلي كل التصميمات شبه بعض ومش عشوائية؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي نخلي كل التصميمات شبه بعض ومش عشوائية؟' : 'إزاي نخلي كل التصميمات شبه بعض ومش عشوائية؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'نظام يجمع كل عناصر التصميم (ألوان، خطوط، Components)' : 'نظام يجمع كل عناصر التصميم (ألوان، خطوط، Components)',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'يوفر وقت ويحافظ على الاتساق' : 'يوفر وقت ويحافظ على الاتساق',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Colors\n• Typography\n• Components' : '• Colors\n• Typography\n• Components',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'Library جاهزة تستخدمها' : 'Library جاهزة تستخدمها',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: كل مرة تصميم جديد' : 'Bad: كل مرة تصميم جديد',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• عدم التنظيم\n• تكرار الشغل' : '• عدم التنظيم\n• تكرار الشغل',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اعمل System بسيط\n• استخدمه دايمًا' : '• اعمل System بسيط\n• استخدمه دايمًا',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اعمل Design System صغير' : 'اعمل Design System صغير',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'System = تنظيم وسرعة' : 'System = تنظيم وسرعة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'ui-prototyping-and-interactions',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'UI Prototyping & Interactions' : 'UI Prototyping & Interactions',
      emoji: '🖱️',
      description: lang === 'ar' ? 'هل التصميم ثابت… ولا فيه حياة؟' : 'هل التصميم ثابت… ولا فيه حياة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل التصميم ثابت… ولا فيه حياة؟' : 'هل التصميم ثابت… ولا فيه حياة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'إضافة تفاعلات وحركة للتصميم.' : 'إضافة تفاعلات وحركة للتصميم.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيوضح تجربة الاستخدام' : 'بيوضح تجربة الاستخدام',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Click\n• Transition\n• Animation' : '• Click\n• Transition\n• Animation',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'فتح صفحة عند الضغط' : 'فتح صفحة عند الضغط',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: بدون تفاعل' : 'Bad: بدون تفاعل',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• مبالغة في الحركة\n• تجاهل الهدف' : '• مبالغة في الحركة\n• تجاهل الهدف',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليه بسيط\n• يخدم الفكرة' : '• خليه بسيط\n• يخدم الفكرة',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اعمل Interaction بسيط' : 'اعمل Interaction بسيط',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Interaction = حياة للتصميم' : 'Interaction = حياة للتصميم',
          type: 'summary'
        },
      ]
    },
    {
      id: 'micro-interactions',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Micro-Interactions' : 'Micro-Interactions',
      emoji: '✨',
      description: lang === 'ar' ? 'ليه تفاصيل صغيرة بتفرق جدًا؟' : 'ليه تفاصيل صغيرة بتفرق جدًا؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه تفاصيل صغيرة بتفرق جدًا؟' : 'ليه تفاصيل صغيرة بتفرق جدًا؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'حركات صغيرة بتحصل أثناء التفاعل (زي Like animation)' : 'حركات صغيرة بتحصل أثناء التفاعل (زي Like animation)',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بتحسن التجربة' : 'بتحسن التجربة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Feedback\n• Animation صغيرة\n• Response سريع' : '• Feedback\n• Animation صغيرة\n• Response سريع',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'زرار Like يتحرك' : 'زرار Like يتحرك',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: مفيش تفاصيل' : 'Bad: مفيش تفاصيل',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• مبالغة\n• بطء' : '• مبالغة\n• بطء',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليه سريع وبسيط' : '• خليه سريع وبسيط',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اقترح Micro-interaction' : 'اقترح Micro-interaction',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'التفاصيل الصغيرة = تجربة أفضل' : 'التفاصيل الصغيرة = تجربة أفضل',
          type: 'summary'
        },
      ]
    },
    {
      id: 'responsive-design',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Responsive Design' : 'Responsive Design',
      emoji: '💻',
      description: lang === 'ar' ? 'هل التصميم شغال على كل الأجهزة؟' : 'هل التصميم شغال على كل الأجهزة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل التصميم شغال على كل الأجهزة؟' : 'هل التصميم شغال على كل الأجهزة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تصميم يتكيف مع الموبايل والتابلت والديسكتوب.' : 'تصميم يتكيف مع الموبايل والتابلت والديسكتوب.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'معظم المستخدمين على الموبايل' : 'معظم المستخدمين على الموبايل',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Breakpoints\n• Flexible layout' : '• Breakpoints\n• Flexible layout',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تصميم يتغير حسب الشاشة' : 'تصميم يتغير حسب الشاشة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تصميم ثابت' : 'Bad: تصميم ثابت',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الموبايل' : '• تجاهل الموبايل',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• ابدأ بالموبايل\n• اختبر على أكتر من جهاز' : '• ابدأ بالموبايل\n• اختبر على أكتر من جهاز',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'عدل تصميم للموبايل' : 'عدل تصميم للموبايل',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Responsive = لكل الأجهزة' : 'Responsive = لكل الأجهزة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'mobile-vs-web-ui',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Mobile vs Web UI' : 'Mobile vs Web UI',
      emoji: '📱',
      description: lang === 'ar' ? 'هل ينفع نفس التصميم لكل الأجهزة؟' : 'هل ينفع نفس التصميم لكل الأجهزة؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل ينفع نفس التصميم لكل الأجهزة؟' : 'هل ينفع نفس التصميم لكل الأجهزة؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'اختلاف تصميم الموبايل عن الويب حسب الاستخدام.' : 'اختلاف تصميم الموبايل عن الويب حسب الاستخدام.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'كل جهاز له طبيعة مختلفة' : 'كل جهاز له طبيعة مختلفة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Screen size\n• Interaction\n• Behavior' : '• Screen size\n• Interaction\n• Behavior',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'Menu في الموبايل vs الويب' : 'Menu في الموبايل vs الويب',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: نفس التصميم' : 'Bad: نفس التصميم',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الفرق' : '• تجاهل الفرق',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• صمم لكل حالة' : '• صمم لكل حالة',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'قارن بين Mobile و Web' : 'قارن بين Mobile و Web',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'كل منصة لها تصميمها' : 'كل منصة لها تصميمها',
          type: 'summary'
        },
      ]
    },
    {
      id: 'common-ui-mistakes',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Common UI Mistakes' : 'Common UI Mistakes',
      emoji: '⚠️',
      description: lang === 'ar' ? 'ليه في تصميمات بتبقى “غلط” رغم إنها شكلها حلو؟' : 'ليه في تصميمات بتبقى “غلط” رغم إنها شكلها حلو؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه في تصميمات بتبقى “غلط” رغم إنها شكلها حلو؟' : 'ليه في تصميمات بتبقى “غلط” رغم إنها شكلها حلو؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'أخطاء شائعة في تصميم الواجهات.' : 'أخطاء شائعة في تصميم الواجهات.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بتأثر على تجربة المستخدم' : 'بتأثر على تجربة المستخدم',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• زحمة\n• ألوان غلط\n• عدم الاتساق' : '• زحمة\n• ألوان غلط\n• عدم الاتساق',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تصميم مليان عناصر' : 'تصميم مليان عناصر',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: معقد' : 'Bad: معقد',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• Over design\n• عدم وضوح' : '• Over design\n• عدم وضوح',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• Keep it simple' : '• Keep it simple',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد خطأ في تصميم' : 'حدد خطأ في تصميم',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'البساطة = قوة' : 'البساطة = قوة',
          type: 'summary'
        },
      ]
    },
    {
      id: 'redesign-case-study',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Redesign Case Study' : 'Redesign Case Study',
      emoji: '🔄',
      description: lang === 'ar' ? 'إزاي نحول تصميم سيء لتصميم أفضل؟' : 'إزاي نحول تصميم سيء لتصميم أفضل؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي نحول تصميم سيء لتصميم أفضل؟' : 'إزاي نحول تصميم سيء لتصميم أفضل؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تحليل تصميم موجود وتحسينه.' : 'تحليل تصميم موجود وتحسينه.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيطور مهارتك' : 'بيطور مهارتك',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• تحليل المشكلة\n• اقتراح حل\n• تنفيذ' : '• تحليل المشكلة\n• اقتراح حل\n• تنفيذ',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تحسين App قديم' : 'تحسين App قديم',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تغيير الشكل بس' : 'Bad: تغيير الشكل بس',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• التركيز على الشكل\n• تجاهل السبب' : '• التركيز على الشكل\n• تجاهل السبب',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• ابدأ بالمشكلة\n• حلها مش تجملها' : '• ابدأ بالمشكلة\n• حلها مش تجملها',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اختار App وحسّنه' : 'اختار App وحسّنه',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Redesign = فهم + تحسين' : 'Redesign = فهم + تحسين',
          type: 'summary'
        },
      ]
    },
  ];

  return {
    id: 'ui-track',
    title: lang === 'ar' ? 'UI' : 'UI',
    emoji: '🎨',
    color: '#EC4899',
    description: lang === 'ar' ? 'Learn UI Design and Visuals' : 'Learn UI Design and Visuals',
    topics
  };
};

const getUXXUIIntegrationTrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'case-study-walkthrough',
      trackId: 'ux-x-ui-integration-track',
      title: lang === 'ar' ? 'Case Study Walkthrough' : 'Case Study Walkthrough',
      emoji: '🚶',
      description: lang === 'ar' ? 'إزاي تحكي قصة تصميمك بشكل يخلي الناس تفهم شغلك؟' : 'إزاي تحكي قصة تصميمك بشكل يخلي الناس تفهم شغلك؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي تحكي قصة تصميمك بشكل يخلي الناس تفهم شغلك؟' : 'إزاي تحكي قصة تصميمك بشكل يخلي الناس تفهم شغلك؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Case Study هو عرض كامل لرحلة التصميم من المشكلة للحل.' : 'Case Study هو عرض كامل لرحلة التصميم من المشكلة للحل.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيوضح طريقة تفكيرك مش بس النتيجة' : 'بيوضح طريقة تفكيرك مش بس النتيجة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Problem\n• Research\n• Solution\n• Result' : '• Problem\n• Research\n• Solution\n• Result',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'توضح مشكلة → تحليل → تصميم → النتيجة' : 'توضح مشكلة → تحليل → تصميم → النتيجة',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تعرض صور بس' : 'Bad: تعرض صور بس',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل المراحل\n• التركيز على الشكل فقط' : '• تجاهل المراحل\n• التركيز على الشكل فقط',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• احكي القصة خطوة خطوة\n• وضح قراراتك' : '• احكي القصة خطوة خطوة\n• وضح قراراتك',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب خطوات Case Study' : 'اكتب خطوات Case Study',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Case Study = قصة التصميم' : 'Case Study = قصة التصميم',
          type: 'summary'
        },
      ]
    },
    {
      id: 'from-wireframe-to-final-ui',
      trackId: 'ux-x-ui-integration-track',
      title: lang === 'ar' ? 'From Wireframe to Final UI' : 'From Wireframe to Final UI',
      emoji: '💎',
      description: lang === 'ar' ? 'إزاي نحول رسمة بسيطة… لتصميم شكله احترافي؟' : 'إزاي نحول رسمة بسيطة… لتصميم شكله احترافي؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي نحول رسمة بسيطة… لتصميم شكله احترافي؟' : 'إزاي نحول رسمة بسيطة… لتصميم شكله احترافي؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تحويل Wireframe (هيكل بسيط) إلى UI Design كامل.' : 'تحويل Wireframe (هيكل بسيط) إلى UI Design كامل.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيضمن إن التصميم مبني على أساس صح' : 'بيضمن إن التصميم مبني على أساس صح',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Layout ثابت من Wireframe\n• إضافة Colors\n• Typography\n• Components' : '• Layout ثابت من Wireframe\n• إضافة Colors\n• Typography\n• Components',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'مستطيلات → تتحول لButtons وCards' : 'مستطيلات → تتحول لButtons وCards',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تغير كل حاجة' : 'Bad: تغير كل حاجة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الـ Wireframe\n• التركيز على الشكل فقط' : '• تجاهل الـ Wireframe\n• التركيز على الشكل فقط',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خلي الـ Layout ثابت\n• اشتغل على التفاصيل' : '• خلي الـ Layout ثابت\n• اشتغل على التفاصيل',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حوّل Wireframe بسيط لـ UI' : 'حوّل Wireframe بسيط لـ UI',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Wireframe = الأساس… UI = الشكل' : 'Wireframe = الأساس… UI = الشكل',
          type: 'summary'
        },
      ]
    },
    {
      id: 'design-decisions-explanation',
      trackId: 'ux-x-ui-integration-track',
      title: lang === 'ar' ? 'Design Decisions Explanation' : 'Design Decisions Explanation',
      emoji: '🗣️',
      description: lang === 'ar' ? 'ليه اخترت اللون ده؟ أو الشكل ده؟' : 'ليه اخترت اللون ده؟ أو الشكل ده؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه اخترت اللون ده؟ أو الشكل ده؟' : 'ليه اخترت اللون ده؟ أو الشكل ده؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'شرح سبب كل قرار تصميمي بناءً على UX مش الذوق.' : 'شرح سبب كل قرار تصميمي بناءً على UX مش الذوق.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي شغلك احترافي ومقنع' : 'بيخلي شغلك احترافي ومقنع',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Decision\n• Reason\n• Impact' : '• Decision\n• Reason\n• Impact',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? '“اخترت اللون الأزرق لأنه مريح ويوضح الـ CTA”' : '“اخترت اللون الأزرق لأنه مريح ويوضح الـ CTA”',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: “عجبني”' : 'Bad: “عجبني”',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• الاعتماد على الذوق\n• عدم التوضيح' : '• الاعتماد على الذوق\n• عدم التوضيح',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اربط كل قرار بالمستخدم\n• فكر بمنطق مش إحساس' : '• اربط كل قرار بالمستخدم\n• فكر بمنطق مش إحساس',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اشرح قرار تصميم واحد' : 'اشرح قرار تصميم واحد',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'كل قرار لازم يكون ليه سبب' : 'كل قرار لازم يكون ليه سبب',
          type: 'summary'
        },
      ]
    },
  ];

  return {
    id: 'ux-x-ui-integration-track',
    title: lang === 'ar' ? 'UX x UI Integration' : 'UX x UI Integration',
    emoji: '🔗',
    color: '#10B981',
    description: lang === 'ar' ? 'Learn how UX and UI work together' : 'Learn how UX and UI work together',
    topics
  };
};

const getBonusTrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'thinking-like-a-designer',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Thinking Like a Designer' : 'Thinking Like a Designer',
      emoji: '🤔',
      description: lang === 'ar' ? 'إيه الفرق بين حد “بيصمم”… وحد “بيفكر كمصمم”؟' : 'إيه الفرق بين حد “بيصمم”… وحد “بيفكر كمصمم”؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إيه الفرق بين حد “بيصمم”… وحد “بيفكر كمصمم”؟' : 'إيه الفرق بين حد “بيصمم”… وحد “بيفكر كمصمم”؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Thinking Like a Designer هو إنك تركز على حل المشكلة مش مجرد الشكل.' : 'Thinking Like a Designer هو إنك تركز على حل المشكلة مش مجرد الشكل.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تشتغل بعقلية حل المشكلات مش تنفيذ أوامر' : 'بيخليك تشتغل بعقلية حل المشكلات مش تنفيذ أوامر',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• فهم المشكلة\n• تحليل المستخدم\n• التفكير في حلول\n• تجربة وتحسين' : '• فهم المشكلة\n• تحليل المستخدم\n• التفكير في حلول\n• تجربة وتحسين',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'بدل ما تقول “أعمل زرار حلو”\nتفكر: “إزاي أخلي المستخدم يوصل لهدفه بسهولة؟”' : 'بدل ما تقول “أعمل زرار حلو”\nتفكر: “إزاي أخلي المستخدم يوصل لهدفه بسهولة؟”',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تفكير في الشكل' : 'Bad: تفكير في الشكل',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• التركيز على الشكل\n• تجاهل المشكلة' : '• التركيز على الشكل\n• تجاهل المشكلة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل “ليه” دايمًا\n• فكر من منظور المستخدم' : '• اسأل “ليه” دايمًا\n• فكر من منظور المستخدم',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حلل مشكلة وفكر في حلها' : 'حلل مشكلة وفكر في حلها',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Designer مش بيرسم… بيحل' : 'Designer مش بيرسم… بيحل',
          type: 'summary'
        },
      ]
    },
    {
      id: 'real-world-constraints',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Real-World Constraints' : 'Real-World Constraints',
      emoji: '🚧',
      description: lang === 'ar' ? 'هل التصميم دايمًا بيكون “مثالي”… ولا في قيود؟' : 'هل التصميم دايمًا بيكون “مثالي”… ولا في قيود؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل التصميم دايمًا بيكون “مثالي”… ولا في قيود؟' : 'هل التصميم دايمًا بيكون “مثالي”… ولا في قيود؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'قيود بتأثر على التصميم زي الوقت، الميزانية، والتقنية.' : 'قيود بتأثر على التصميم زي الوقت، الميزانية، والتقنية.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك واقعي في شغلك' : 'بيخليك واقعي في شغلك',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Time constraints\n• Budget constraints\n• Technical limitations' : '• Time constraints\n• Budget constraints\n• Technical limitations',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'مش كل فكرة تقدر تتنفذ بسبب التطوير' : 'مش كل فكرة تقدر تتنفذ بسبب التطوير',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تصميم بدون مراعاة القيود' : 'Bad: تصميم بدون مراعاة القيود',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل القيود\n• تصميم مثالي زيادة' : '• تجاهل القيود\n• تصميم مثالي زيادة',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اشتغل على المتاح\n• فكر في التنفيذ' : '• اشتغل على المتاح\n• فكر في التنفيذ',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اذكر قيد ممكن يقابلك' : 'اذكر قيد ممكن يقابلك',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'التصميم الحقيقي = توازن' : 'التصميم الحقيقي = توازن',
          type: 'summary'
        },
      ]
    },
    {
      id: 'working-with-developers',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Working with Developers' : 'Working with Developers',
      emoji: '👨‍💻',
      description: lang === 'ar' ? 'ليه أحيانًا التصميم بيتنفذ غلط؟' : 'ليه أحيانًا التصميم بيتنفذ غلط؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه أحيانًا التصميم بيتنفذ غلط؟' : 'ليه أحيانًا التصميم بيتنفذ غلط؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'التعاون بين المصمم والمطور لضمان تنفيذ التصميم بشكل صحيح.' : 'التعاون بين المصمم والمطور لضمان تنفيذ التصميم بشكل صحيح.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيضمن إن التصميم يتحول لمنتج فعلي' : 'بيضمن إن التصميم يتحول لمنتج فعلي',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Communication\n• Documentation\n• Feedback' : '• Communication\n• Documentation\n• Feedback',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تشرح للمطور الفكرة مش بس الشكل' : 'تشرح للمطور الفكرة مش بس الشكل',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تسليم بدون شرح' : 'Bad: تسليم بدون شرح',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• عدم التواصل\n• افتراض إن المطور فاهم' : '• عدم التواصل\n• افتراض إن المطور فاهم',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اتكلم مع الـ Dev\n• وضح التفاصيل' : '• اتكلم مع الـ Dev\n• وضح التفاصيل',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب حاجة توضحها للمطور' : 'اكتب حاجة توضحها للمطور',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Design + Dev = Product' : 'Design + Dev = Product',
          type: 'summary'
        },
      ]
    },
    {
      id: 'design-critique-and-feedback',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Design Critique & Feedback' : 'Design Critique & Feedback',
      emoji: '💬',
      description: lang === 'ar' ? 'هل النقد بيهدم شغلك… ولا بيطوره؟' : 'هل النقد بيهدم شغلك… ولا بيطوره؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل النقد بيهدم شغلك… ولا بيطوره؟' : 'هل النقد بيهدم شغلك… ولا بيطوره؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تحليل التصميم وتقديم Feedback لتحسينه.' : 'تحليل التصميم وتقديم Feedback لتحسينه.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تطور بسرعة' : 'بيخليك تطور بسرعة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Observation\n• Analysis\n• Suggestions' : '• Observation\n• Analysis\n• Suggestions',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? '“الزرار مش واضح” + اقتراح تحسين' : '“الزرار مش واضح” + اقتراح تحسين',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: نقد بدون سبب' : 'Bad: نقد بدون سبب',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• نقد شخصي\n• رفض النقد' : '• نقد شخصي\n• رفض النقد',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل عن رأي غيرك\n• خليك open' : '• اسأل عن رأي غيرك\n• خليك open',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'قيم تصميم بسيط' : 'قيم تصميم بسيط',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Feedback = تطور' : 'Feedback = تطور',
          type: 'summary'
        },
      ]
    },
    {
      id: 'portfolio-and-presentation',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Portfolio & Presentation' : 'Portfolio & Presentation',
      emoji: '💼',
      description: lang === 'ar' ? 'إزاي تخلي شغلك يتشاف ويتفهم؟' : 'إزاي تخلي شغلك يتشاف ويتفهم؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي تخلي شغلك يتشاف ويتفهم؟' : 'إزاي تخلي شغلك يتشاف ويتفهم؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'عرض أعمالك بشكل احترافي يوضح مهاراتك.' : 'عرض أعمالك بشكل احترافي يوضح مهاراتك.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'ده اللي بيمثلك قدام أي فرصة' : 'ده اللي بيمثلك قدام أي فرصة',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Case studies\n• Organization\n• Storytelling' : '• Case studies\n• Organization\n• Storytelling',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'عرض مشروع مع شرح مراحله' : 'عرض مشروع مع شرح مراحله',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: صور بس' : 'Bad: صور بس',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• عرض بدون شرح\n• تنظيم ضعيف' : '• عرض بدون شرح\n• تنظيم ضعيف',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• احكي قصة شغلك\n• خليه واضح' : '• احكي قصة شغلك\n• خليه واضح',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب فكرة Portfolio' : 'اكتب فكرة Portfolio',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Portfolio = فرصك' : 'Portfolio = فرصك',
          type: 'summary'
        },
      ]
    },
    {
      id: 'instructor-notes-and-tips',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Instructor Notes & Tips' : 'Instructor Notes & Tips',
      emoji: '🎓',
      description: lang === 'ar' ? 'إيه الحاجات اللي بتفرق فعلًا في رحلتك كمصمم؟' : 'إيه الحاجات اللي بتفرق فعلًا في رحلتك كمصمم؟',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إيه الحاجات اللي بتفرق فعلًا في رحلتك كمصمم؟' : 'إيه الحاجات اللي بتفرق فعلًا في رحلتك كمصمم؟',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'نصايح عملية مبنية على تجربة تساعدك تتطور أسرع.' : 'نصايح عملية مبنية على تجربة تساعدك تتطور أسرع.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بتوفر وقت ومجهود' : 'بتوفر وقت ومجهود',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• الاستمرارية\n• التطبيق\n• التعلم من الأخطاء' : '• الاستمرارية\n• التطبيق\n• التعلم من الأخطاء',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'التدريب أهم من الكورسات' : 'التدريب أهم من الكورسات',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تكتفي بالمشاهدة' : 'Bad: تكتفي بالمشاهدة',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• الكسل\n• الاستعجال' : '• الكسل\n• الاستعجال',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اشتغل بإيدك\n• متستسلمش' : '• اشتغل بإيدك\n• متستسلمش',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد هدف أسبوعي' : 'حدد هدف أسبوعي',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'التطور = ممارسة مستمرة' : 'التطور = ممارسة مستمرة',
          type: 'summary'
        },
      ]
    },
  ];

  return {
    id: 'bonus-track',
    title: lang === 'ar' ? 'Bonus' : 'Bonus',
    emoji: '🎁',
    color: '#F59E0B',
    description: lang === 'ar' ? 'Extra resources for designers' : 'Extra resources for designers',
    topics
  };
};

export const getTracks = (lang: Language): Track[] => [
  getUXTrack(lang),
  getUITrack(lang),
  getUXXUIIntegrationTrack(lang),
  getBonusTrack(lang),
];
