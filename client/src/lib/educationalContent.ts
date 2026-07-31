/**
 * ====================================================================================
 * 📚 دليل تعديل وإدارة المحتوى التعليمي لمنصة PIXEL (Educational Content Manager)
 * ====================================================================================
 * 
 * مرحباً بك! هذا هو الملف الرئيسي والوحيد المخصص لجميع الدروس، المسارات، والمحتوى التعليمي للموقع.
 * يمكنك في أي وقت تعديل النص، تغيير العناوين، أو إضافة دروس جديدة بكل سهولة دون الخوف من أخطاء JSON!
 * 
 * 💡 كيفية التعديل والإضافة:
 * ----------------------------
 * 1. لإضافة موضوع/درس جديد (Topic):
 *    داخل قائمة `topics` في أي مسار، أضف كائناً جديداً بالشكل التالي:
 * 
 *    {
 *      id: 'اسم-الموضوع-بالإنجليزي',
 *      titleAr: 'عنوان الدرس بالعربي',
 *      titleEn: 'Topic Title in English',
 *      content: {
 *        introduction: 'ليه بنحتاج الدرس ده؟ مقدمة مشوقة...',
 *        concept: 'الشرح والمفهوم الأساسي بشكل مبسط...',
 *        whyItMatters: 'لماذا هذا الموضوع مهم لطلاب التصميم؟...',
 *        breakdown: '- نقطة 1\n- نقطة 2\n- نقطة 3',
 *        example: 'مثال واقعي تطبيقي...',
 *        badVsGood: 'Bad: تصميم سيء\nGood: تصميم ممتاز',
 *        commonMistakes: '- خطأ شائع 1\n- خطأ شائع 2',
 *        practicalTips: '- نصيحة 1\n- نصيحة 2',
 *        miniActivity: 'تمرين تطبيق عملي للطلاب...',
 *        summary: 'الخلاصة والجملة الرنانة للموضوع'
 *      }
 *    }
 * 
 * 2. يمكنك تغيير لون المسار (color) أو الرمز التعبيري (emoji) أو العناوين في أي وقت!
 * ====================================================================================
 */

export interface TopicContent {
  introduction: string;
  concept: string;
  whyItMatters: string;
  breakdown: string;
  example: string;
  badVsGood: string;
  commonMistakes: string;
  practicalTips: string;
  miniActivity: string;
  summary: string;
}

export interface Topic {
  id: string;
  titleAr: string;
  titleEn: string;
  content: TopicContent;
}

export interface Section {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  color: string;
  emoji: string;
  topics: Topic[];
}

export const educationalContent: { sections: Section[] } = {
  sections: [
    {
      id: "ux",
      nameAr: "مسار تجربة المستخدم (UX)",
      nameEn: "UX Track",
      descriptionAr: "تعلم أساسيات تجربة المستخدم والبحث والتحليل",
      descriptionEn: "Learn the fundamentals of user experience, research, and analysis",
      color: "#3B82F6",
      emoji: "👥",
      topics: [
        {
          id: "ux-foundations",
          titleAr: "UX Foundations",
          titleEn: "UX Foundations",
          content: {
            introduction: "ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟",
            concept: "UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.",
            whyItMatters: "لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو\nUX الجيد بيزود رضا المستخدم وبيخليه يرجع تاني",
            breakdown: "- Usability: هل سهل الاستخدام؟\n- Clarity: هل واضح؟\n- Efficiency: هل بيوصل لهدفه بسرعة؟\n- Satisfaction: هل التجربة مريحة؟",
            example: "تطبيق طلب أكل:\nلو خلّصت الطلب في خطوات قليلة → UX كويس\nلو تهت بين الصفحات → UX سيء",
            badVsGood: "Bad: خطوات كتير + لخبطة\nGood: خطوات واضحة وسريعة",
            commonMistakes: "- التركيز على الشكل بس\n- تجاهل تجربة المستخدم",
            practicalTips: "- خلي كل خطوة واضحة\n- قلل عدد الخطوات\n- اختبر على حد حقيقي",
            miniActivity: "قول مثال على App UX بتاعه سيء وليه",
            summary: "UX = سهولة + وضوح + راحة المستخدم)"
          }
        },
        {
          id: "design-thinking-process",
          titleAr: "Design Thinking Process",
          titleEn: "Design Thinking Process",
          content: {
            introduction: "ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟",
            concept: "Design Thinking هو أسلوب لحل المشاكل بيركز على فهم المستخدم قبل ما نبدأ نحل.",
            whyItMatters: "بيمنعك تشتغل على افتراضات\nوبيخليك تبني حلول مبنية على الواقع",
            breakdown: "- Empathize: افهم المستخدم\n- Define: حدد المشكلة\n- Ideate: فكر في حلول\n- Prototype: جرب\n- Test: اختبر",
            example: "طالب مش بينظم وقته → نفهم السبب → نحدد المشكلة → نجرب حل",
            badVsGood: "Bad: تبدأ تصميم على طول\nGood: تفهم المشكلة الأول",
            commonMistakes: "- تجاهل مرحلة الفهم\n- القفز للحل بسرعة",
            practicalTips: "- اسأل كتير قبل ما تصمم\n- خليك مرن",
            miniActivity: "اختار مشكلة وامشي عليها بالمراحل",
            summary: "افهم → حدد → حل → جرّب"
          }
        },
        {
          id: "user-research",
          titleAr: "User Research",
          titleEn: "User Research",
          content: {
            introduction: "هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟",
            concept: "User Research هو جمع معلومات عن المستخدمين عشان نفهم سلوكهم واحتياجاتهم.",
            whyItMatters: "بيخليك تبني على بيانات مش تخمين\nوبيوفر وقت ومجهود",
            breakdown: "- Survey: بيانات من عدد كبير\n- Interview: فهم عميق\n- Observation: ملاحظة السلوك",
            example: "تسأل الطلبة عن مشاكلهم في المذاكرة",
            badVsGood: "Bad: تسأل أسئلة عامة\nGood: تسأل عن سلوك حقيقي",
            commonMistakes: "- الاعتماد على رأيك\n- تجاهل النتائج",
            practicalTips: "- اسأل “بتعمل ايه؟” مش “شايف ايه؟”\n- سجل الإجابات",
            miniActivity: "اكتب 3 أسئلة تفهم بيها مشكلة",
            summary: "Research = فهم حقيقي للمستخدم"
          }
        },
        {
          id: "competitive-analysis",
          titleAr: "Competitive Analysis",
          titleEn: "Competitive Analysis",
          content: {
            introduction: "ليه نبدأ من الصفر… وفي ناس عملت نفس الفكرة قبلنا؟",
            concept: "تحليل المنافسين لفهم هم بيعملوا ايه صح وايه غلط.",
            whyItMatters: "يوفر وقت\nويساعدك تعمل حاجة أحسن",
            breakdown: "- Identify competitors\n- تحليل المميزات\n- تحليل العيوب\n- استخراج فرص",
            example: "تقارن بين 2 Apps لتنظيم الوقت",
            badVsGood: "Bad: تقلد المنافس\nGood: تتعلم منه",
            commonMistakes: "- النسخ\n- تحليل سطحي",
            practicalTips: "- ركز على تجربة الاستخدام\n- جرب المنتج بنفسك",
            miniActivity: "اذكر ميزة وعيب في App بتستخدمه",
            summary: "اتعلم من غيرك… مش تنسخه"
          }
        },
        {
          id: "problem-definition",
          titleAr: "Problem Definition",
          titleEn: "Problem Definition",
          content: {
            introduction: "ليه أحيانًا بنشتغل كتير… وفي الآخر نكتشف إننا بنحل مشكلة مش مهمة؟",
            concept: "تحديد المشكلة بشكل واضح بناءً على البحث.",
            whyItMatters: "بيحدد اتجاه الشغل كله\nولو غلط → كل اللي بعده غلط",
            breakdown: "- مين المستخدم؟\n- ايه المشكلة؟\n- ليه بتحصل؟",
            example: "طالب مش بينظم وقته بسبب عدم وجود طريقة واضحة",
            badVsGood: "Bad: “نعمل App”\nGood: “User عنده مشكلة”",
            commonMistakes: "- مشكلة عامة\n- بدون User",
            practicalTips: "- خليك محدد\n- اربط المشكلة بالمستخدم",
            miniActivity: "اكتب Problem Statement",
            summary: "مشكلة واضحة = حل صح"
          }
        },
        {
          id: "user-needs--pain-points",
          titleAr: "User Needs & Pain Points",
          titleEn: "User Needs & Pain Points",
          content: {
            introduction: "ليه المستخدم بيشتكي؟ وإيه اللي فعلاً محتاجه؟",
            concept: "Pain Points = المشاكل\nNeeds = اللي محتاجه عشان يحلها",
            whyItMatters: "بيوضح انت هتصمم ليه",
            breakdown: "- Goal: هدف المستخدم\n- Pain: المشكلة\n- Need: الحل",
            example: "بينسى المواعيد → محتاج Reminder",
            badVsGood: "Bad: تركز على Features\nGood: تركز على المشكلة",
            commonMistakes: "- تجاهل السبب الحقيقي",
            practicalTips: "- اسأل “ليه” أكتر من مرة",
            miniActivity: "اكتب Pain + Need",
            summary: "كل مشكلة = فرصة تصميم"
          }
        },
        {
          id: "personas",
          titleAr: "Personas",
          titleEn: "Personas",
          content: {
            introduction: "هل ينفع نصمم من غير ما نعرف بنصمم لمين؟",
            concept: "Persona هي شخصية خيالية تمثل المستخدم الحقيقي.",
            whyItMatters: "بتخليك تصمم بتركيز",
            breakdown: "- Name\n- Age\n- Goals\n- Pain Points\n- Behavior",
            example: "طالب بيعاني من تنظيم الوقت",
            badVsGood: "Bad: Persona عشوائية\nGood: مبنية على Data",
            commonMistakes: "- اختراع بيانات",
            practicalTips: "- خليها واقعية\n- اربطها بالبحث",
            miniActivity: "اعمل Persona بسيطة",
            summary: "Persona = المستخدم بقى واضح"
          }
        },
        {
          id: "empathy-map",
          titleAr: "Empathy Map",
          titleEn: "Empathy Map",
          content: {
            introduction: "هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟",
            concept: "Empathy Map أداة لفهم المستخدم بشكل أعمق (مشاعره وسلوكه)",
            whyItMatters: "بيخليك تشوف من وجهة نظر المستخدم",
            breakdown: "- Says\n- Thinks\n- Does\n- Feels",
            example: "“مش لاقي وقت” → توتر",
            badVsGood: "Bad: كلام عام\nGood: كلام حقيقي",
            commonMistakes: "- عدم الربط بالـ Persona",
            practicalTips: "- استخدم كلام المستخدم\n- اربط كل حاجة بالواقع",
            miniActivity: "اعمل Empathy Map",
            summary: "افهم المستخدم من جوه مش من بره"
          }
        },
        {
          id: "user-stories--jtbd",
          titleAr: "User Stories / JTBD",
          titleEn: "User Stories / JTBD",
          content: {
            introduction: "إزاي نحول احتياجات المستخدم لخطوات تنفيذية؟",
            concept: "User Stories و JTBD (Jobs To Be Done) طرق لفهم المستخدم من خلال الهدف اللي عايز يحققه، مش مجرد استخدامه للمنتج.",
            whyItMatters: "بيركزك على “ليه المستخدم بيستخدم المنتج”\nمش بس “بيستخدمه إزاي”",
            breakdown: "- User Story:\n  As a [User] I want to [Goal] so that [Benefit]\n- JTBD:\n  What job is the user trying to get done?",
            example: "طالب عايز ينظم وقته → مش عايز App… عايز ينجز مهامه",
            badVsGood: "Bad: “نضيف Feature جديدة”\nGood: “نحل مشكلة حقيقية”",
            commonMistakes: "- كتابة Stories عامة\n- تجاهل الهدف الحقيقي",
            practicalTips: "- ركز على الهدف مش الفعل\n- خليك بسيط وواضح",
            miniActivity: "اكتب User Story لمشكلة معينة",
            summary: "المستخدم “يوظف” المنتج عشان يحقق هدف"
          }
        },
        {
          id: "user-flow",
          titleAr: "User Flow",
          titleEn: "User Flow",
          content: {
            introduction: "هل المستخدم عارف يوصل لهدفه… ولا بيضيع في النص؟",
            concept: "User Flow هو المسار اللي المستخدم بيمشي فيه عشان يحقق هدف معين داخل المنتج.",
            whyItMatters: "بيوضح هل التجربة سهلة ولا معقدة",
            breakdown: "- Start (بداية)\n- Steps (خطوات)\n- Decision points\n- End (تحقيق الهدف)",
            example: "فتح App → اختيار منتج → إضافة للسلة → الدفع",
            badVsGood: "Bad: خطوات كتير ومتشعبة\nGood: مسار واضح ومباشر",
            commonMistakes: "- تعقيد المسار\n- عدم وضوح الخطوات",
            practicalTips: "- قلل عدد الخطوات\n- خليك مباشر",
            miniActivity: "ارسم Flow بسيط لطلب أكل",
            summary: "Flow واضح = تجربة أسهل"
          }
        },
        {
          id: "user-journey-map",
          titleAr: "User Journey Map",
          titleEn: "User Journey Map",
          content: {
            introduction: "هل التجربة كويسة من أول خطوة… ولا في مراحل بتبوظها؟",
            concept: "User Journey Map بيوضح تجربة المستخدم كاملة عبر مراحل مختلفة مع المنتج.",
            whyItMatters: "بيكشف المشاكل في كل مرحلة",
            breakdown: "- مراحل (Stages)\n- Actions\n- Thoughts\n- Feelings\n- Pain Points",
            example: "قبل الطلب → أثناء الاستخدام → بعد التجربة",
            badVsGood: "Bad: التركيز على لحظة واحدة\nGood: رؤية التجربة بالكامل",
            commonMistakes: "- تجاهل المشاعر\n- عدم ربط المراحل",
            practicalTips: "- فكر في الرحلة كاملة\n- اربط بين المراحل",
            miniActivity: "حدد 3 مراحل لتجربة مستخدم",
            summary: "Journey = التجربة من البداية للنهاية"
          }
        },
        {
          id: "information-architecture",
          titleAr: "Information Architecture",
          titleEn: "Information Architecture",
          content: {
            introduction: "ليه أحيانًا بنضيع في الموقع ومش عارفين نلاقي اللي عايزينه؟",
            concept: "Information Architecture (IA) هو تنظيم وترتيب المحتوى بطريقة تسهل الوصول ليه.",
            whyItMatters: "بيخلي المستخدم يلاقي اللي عايزه بسرعة",
            breakdown: "- تنظيم المحتوى\n- تصنيف (Categories)\n- ترتيب (Hierarchy)",
            example: "تقسيم المنتجات في متجر (ملابس – إلكترونيات…)",
            badVsGood: "Bad: كل حاجة عشوائية\nGood: تنظيم واضح",
            commonMistakes: "- تصنيف غلط\n- تنظيم معقد",
            practicalTips: "- فكر زي المستخدم\n- خلي التنظيم بسيط",
            miniActivity: "قسم محتوى App لفئات",
            summary: "تنظيم كويس = وصول أسرع"
          }
        },
        {
          id: "sitemap--navigation",
          titleAr: "Sitemap & Navigation",
          titleEn: "Sitemap & Navigation",
          content: {
            introduction: "هل المستخدم عارف يروح فين… ولا تايه في الموقع؟",
            concept: "Sitemap هو خريطة الموقع، وNavigation هو طريقة التنقل بين الصفحات.",
            whyItMatters: "بيحدد سهولة الحركة داخل المنتج",
            breakdown: "- Pages structure\n- Main navigation\n- روابط بين الصفحات",
            example: "Home → Products → Details → Checkout",
            badVsGood: "Bad: Navigation معقد\nGood: بسيط وواضح",
            commonMistakes: "- قوائم كتير\n- روابط مش واضحة",
            practicalTips: "- خليك بسيط\n- خلي أهم الحاجات واضحة",
            miniActivity: "ارسم Sitemap بسيط",
            summary: "Navigation واضح = تجربة مريحة"
          }
        },
        {
          id: "wireframing-low--mid-fidelity",
          titleAr: "Wireframing (Low / Mid Fidelity)",
          titleEn: "Wireframing (Low / Mid Fidelity)",
          content: {
            introduction: "هل لازم نبدأ بالتصميم النهائي من أول مرة؟",
            concept: "Wireframe هو رسم بسيط يوضح شكل وترتيب العناصر قبل التصميم النهائي.",
            whyItMatters: "بيوفر وقت\nوبيسمح بالتجربة والتعديل بسهولة",
            breakdown: "- Low Fidelity: Sketch بسيط\n- Mid Fidelity: تفاصيل أكتر",
            example: "مستطيلات بدل صور ونصوص",
            badVsGood: "Bad: تبدأ Design على طول\nGood: تبدأ Wireframe",
            commonMistakes: "- التركيز على الشكل\n- تجاهل الوظيفة",
            practicalTips: "- ركز على Layout\n- خليك بسيط",
            miniActivity: "ارسم Wireframe لشاشة",
            summary: "ابدأ بسيط قبل ما تعقد"
          }
        },
        {
          id: "ux-prototyping",
          titleAr: "UX Prototyping",
          titleEn: "UX Prototyping",
          content: {
            introduction: "إزاي نعرف التصميم هيشتغل فعلاً قبل ما يتنفذ؟",
            concept: "Prototype هو نموذج تفاعلي يحاكي تجربة المستخدم.",
            whyItMatters: "بيخليك تختبر قبل التنفيذ",
            breakdown: "- Clickable screens\n- Transitions\n- User interaction",
            example: "الضغط على زر يفتح صفحة تانية",
            badVsGood: "Bad: صور ثابتة\nGood: تجربة تفاعلية",
            commonMistakes: "- Prototype معقد زيادة\n- تجاهل الهدف",
            practicalTips: "- خليه بسيط\n- ركز على الفكرة",
            miniActivity: "اربط شاشتين مع بعض",
            summary: "Prototype = تجربة قبل التنفيذ"
          }
        },
        {
          id: "usability-testing",
          titleAr: "Usability Testing",
          titleEn: "Usability Testing",
          content: {
            introduction: "هل التصميم سهل فعلًا… ولا احنا شايفينه سهل بس؟",
            concept: "اختبار التصميم مع مستخدمين حقيقيين لمعرفة هل سهل الاستخدام ولا لأ.",
            whyItMatters: "بيكشف مشاكل حقيقية",
            breakdown: "- Give task\n- Observe\n- Collect feedback",
            example: "خلي حد يجرب App وشوف بيتلخبط فين",
            badVsGood: "Bad: تسأل رأيه بس\nGood: تراقب سلوكه",
            commonMistakes: "- الاعتماد على الرأي\n- تجاهل الملاحظات",
            practicalTips: "- اسكت وخلي المستخدم يتكلم\n- سجل الملاحظات",
            miniActivity: "خلي حد يجرب حاجة وصممتها",
            summary: "اختبر… متفترضش"
          }
        },
        {
          id: "ux-iteration--validation",
          titleAr: "UX Iteration & Validation",
          titleEn: "UX Iteration & Validation",
          content: {
            introduction: "هل أول تصميم دايمًا بيكون صح؟",
            concept: "Iteration يعني تحسين التصميم بناءً على Feedback وااختبارات.",
            whyItMatters: "بيخلي المنتج يتطور باستمرار",
            breakdown: "- Test\n- Feedback\n- Improve\n- Repeat",
            example: "تعدل على تصميم بعد اختبار",
            badVsGood: "Bad: تسيب التصميم زي ما هو\nGood: تطور باستمرار",
            commonMistakes: "- تجاهل الـ Feedback\n- الخوف من التعديل",
            practicalTips: "- خليك مرن\n- التعديل طبيعي",
            miniActivity: "اذكر حاجة ممكن تطورها في تصميم",
            summary: "Design = عملية مستمرة"
          }
        },
        {
          id: "ux-psychology-laws",
          titleAr: "قوانين تجربة المستخدم النفسية (Psychology Laws of UX)",
          titleEn: "Psychology Laws of UX",
          content: {
            introduction: "كيف تتنبأ بعقل وسلوك المستخدم وتصمم شاشات مريحة غريزياً؟",
            concept: "قوانين نفسية مبنية على العلوم السلوكية توضح كيف يعالج عقل الإنسان المعلومات في الواجهات الرقمية.",
            whyItMatters: "بتضمن اتخاذ المستخدم قرارات سريعة بدون توتر أو تفكير زاد",
            breakdown: "- Hick's Law: كلما زادت الخيارات زاد زمن اتخاذ القرار\n- Jakob's Law: التزامك بالأنماط المعروفة يسهل التعلم\n- Fitts's Law: المسافة وحجم الزر يحددان سرعة الوصول\n- Miller's Law: الذاكرة القصيرة تستوعب 7±2 عناصر فقط",
            example: "وضع زر الشراء كبيراً ومباشراً وقريباً لإبهام المستخدم في الجوال (Fitts's Law)",
            badVsGood: "Bad: إعطاء المستخدم 10 خيارات معقدة في القائمة الرئيسية\nGood: تبسيط الخيارات إلى 3 أو 4 بدائل مباشرة",
            commonMistakes: "- خرق التوقعات والأنماط المعيارية للمستخدمين بدون سبب محدد",
            practicalTips: "- قسّم القوائم الطويلة لمجموعات صغيرة (Chunking)\n- جعل الزر الأكثر استخداماً هو الأكبر والأقرب",
            miniActivity: "طبق قانون Hick's Law على قائمة خيارات معقدة",
            summary: "علم النفس + التصميم = تجربة بديهية ومريحة"
          }
        }
      ]
    },
    {
      id: "ui",
      nameAr: "مسار تصميم الواجهات (UI)",
      nameEn: "UI Track",
      descriptionAr: "تعلم أساسيات التصميم البصري والواجهات",
      descriptionEn: "Learn the fundamentals of visual design and interfaces",
      color: "#8B5CF6",
      emoji: "🎨",
      topics: [
        {
          id: "ui-foundations",
          titleAr: "UI Foundations",
          titleEn: "UI Foundations",
          content: {
            introduction: "ليه أول ما تفتح App بتحس إنه مريح أو شكله حلو؟",
            concept: "UI هو الشكل البصري للمنتج (الألوان، الخطوط، الأزرار…). المساحة اللي المستخدم بيشوفها ويتفاعل معاها.",
            whyItMatters: "بيخلق أول انطباع للمستخدم\nوبيخلي استخدام المنتج مريح وممتع بصرياً",
            breakdown: "- Visual Elements\n- Consistency\n- Clarity\n- Aesthetics",
            example: "تنسيق الأزرار والألوان في تطبيق مثل Spotify",
            badVsGood: "Bad: ألوان كتير ولخبطة\nGood: شكل منظم ومريح للعين",
            commonMistakes: "- التركيز على الشكل وتجاهل الوظيفة\n- عدم وجود تناسق",
            practicalTips: "- خلي التصميم بسيط\n- حافظ على Consistency",
            miniActivity: "افتح App وبص على عناصر الواجهة",
            summary: "UI = الشكل + التناسق + الإحساس البصري"
          }
        },
        {
          id: "visual-design-principles",
          titleAr: "Visual Design Principles",
          titleEn: "Visual Design Principles",
          content: {
            introduction: "ليه في تصاميم بتحسها منظمة وتصاميم تانية عشوائية؟",
            concept: "مبادئ بصرية بتنظم التصميم وتخليه مريح وسهل الفهم.",
            whyItMatters: "بتوجه عين المستخدم لأهم الحاجات الأول",
            breakdown: "- Contrast\n- Alignment\n- Repetition\n- Proximity",
            example: "العنوان أتقل وأكبر من النص العادي",
            badVsGood: "Bad: كل العناصر نفس الحجم\nGood: تسلسل بصري واضح",
            commonMistakes: "- عدم استخدام Contrast كافي\n- عشوائية المحاذاة",
            practicalTips: "- ركز على التسلسل البصري\n- استخدم المساحات الخالية (White Space)",
            miniActivity: "عدل على شاشة وخلي فيها Contrast واضح",
            summary: "مبادئ صح = تصميم مريح ومفهوم"
          }
        },
        {
          id: "color-system",
          titleAr: "Color System",
          titleEn: "Color System",
          content: {
            introduction: "ليه بعض المواقع مريحة للعين… والتانية مزعجة؟",
            concept: "نظام الألوان المستخدم في التصميم بشكل منظم وثابت.",
            whyItMatters: "الألوان بتعبر عن الماركة وتوجه مشاعر المستخدم",
            breakdown: "- Primary Color\n- Secondary Color\n- Neutral Colors\n- System Colors (Success, Error...)",
            example: "لون أساسي للأزرار + ألوان للنصوص",
            badVsGood: "Bad: استخدام ألوان كتير\nGood: پالت محدودة ومنظمة",
            commonMistakes: "- عدم التناسق\n- ألوان فاقعة زيادة",
            practicalTips: "- اختار 2-3 ألوان رئيسية\n- استخدم ألوان هادية للـ Neutral",
            miniActivity: "اعمل Color Palette بسيطة",
            summary: "ألوان منظمة = تصميم مريح"
          }
        },
        {
          id: "typography-system",
          titleAr: "Typography System",
          titleEn: "Typography System",
          content: {
            introduction: "ليه الخط بيفرّق جدًا في شكل التصميم وإحساسه؟",
            concept: "اختبار وتنسيق الخطوط وأحجامها داخل المنتج.",
            whyItMatters: "الخط الكويس بيسهل القراءة وبيحدد أهمية الكلام",
            breakdown: "- Font Family\n- Font Sizes\n- Font Weight\n- Line Height",
            example: "Title H1 > Title H2 > Body text",
            badVsGood: "Bad: خطوط كتير وأحجام عشوائية\nGood: نظام واضح بأحجام محددة",
            commonMistakes: "- استخدام خطوط مش مريحة\n- أحجام صغيرة زيادة",
            practicalTips: "- استخدم خط واحد أو اتنين بالكتير\n- ركز على Legibility",
            miniActivity: "اعمل Type Scale بسيط",
            summary: "Typography صح = قراءة أسهل"
          }
        },
        {
          id: "layout--grid-system",
          titleAr: "Layout & Grid System",
          titleEn: "Layout & Grid System",
          content: {
            introduction: "إزاي ترتب العناصر في الشاشة من غير ما تطلع شكلها عشوائي؟",
            concept: "Grid System هو شبكة وهمية بتساعدك ترتب المحتوى بنظام ودقة.",
            whyItMatters: "بيخلي التصميم منظم ومتناسق على كل الشاشات",
            breakdown: "- Columns\n- Margins\n- Gutters\n- Alignment",
            example: "تقسيم الشاشة لـ 12 عمود على Desktop",
            badVsGood: "Bad: عناصر مش محاذية\nGood: محاذاة مضبوطة على Grid",
            commonMistakes: "- تجاهل الـ Grid\n- مسافات غير متساوية",
            practicalTips: "- استخدم 8px Grid System\n- حافظ على التناسق",
            miniActivity: "رتب عناصر شاشة باستخدام Grid",
            summary: "Grid = نظام ودقة"
          }
        },
        {
          id: "spacing--padding",
          titleAr: "Spacing & Padding",
          titleEn: "Spacing & Padding",
          content: {
            introduction: "ليه المساحات الفاضية بتخلي التصميم شكله أشيك وأريح؟",
            concept: "المسافات بين العناصر (Margin) وداخل العناصر (Padding).",
            whyItMatters: "المساحة الفاضية بتنفس التصميم وبتفصل الأفكار عن بعض",
            breakdown: "- Spacing Scale\n- Padding inside buttons/cards\n- Margin between sections",
            example: "مسافة أكبر بين الأقسام ومسافة أقل بين العناصر القريبة",
            badVsGood: "Bad: كل حاجة ملزوقة في بعضها\nGood: مسافات مريحة وواضحة",
            commonMistakes: "- مسافات عشوائية\n- كتمة العناصر",
            practicalTips: "- استخدم مضاعفات رقم 8 (8, 16, 24, 32...)\n- ادّي تنفس للعناصر",
            miniActivity: "ظبط المسافات في Card معينة",
            summary: "White Space = شياكة ووضوح"
          }
        },
        {
          id: "ui-components",
          titleAr: "UI Components",
          titleEn: "UI Components",
          content: {
            introduction: "إيه هي مكعبات البناء اللي بنبني بيها أي واجهة؟",
            concept: "العناصر الأساسية القابلة لإعادة الاستخدام في الواجهة (Buttons, Inputs, Cards...).",
            whyItMatters: "بتسرع الشغل وتضمن Consistency في التصميم",
            breakdown: "- Buttons\n- Inputs & Forms\n- Cards & Badges\n- Modals & Dialogs",
            example: "زر الدخول في جميع صفحات التطبيق له نفس الشكل",
            badVsGood: "Bad: كل صفحة فيها أزرار مختلفة\nGood: مكونات موحدة وموصفة",
            commonMistakes: "- إعادة اختراع العجلة في كل شاشة",
            practicalTips: "- ابنِ Component Library مبسطة\n- صمم كل الحالات (Default, Hover, Active)",
            miniActivity: "صمم زر بحالاته المختلفة",
            summary: "Components = إعادة استخدام + سرعة"
          }
        },
        {
          id: "design-systems-intro",
          titleAr: "Design Systems Intro",
          titleEn: "Design Systems Intro",
          content: {
            introduction: "إزاي الشركات الكبيرة بتضمن إن منتجاتها كلها طالعة بنفس الروح؟",
            concept: "Design System هو دليل شامل ومكتبة مكونات توحد لغة التصميم والتطوير.",
            whyItMatters: "بيسهل التعاون بين المصمم والمطور وبيضمن الاتساق",
            breakdown: "- Design Tokens\n- Component Library\n- Guidelines & Documentation",
            example: "Design System بتاع Material Design أو Apple Human Interface",
            badVsGood: "Bad: عشوائية وااختلافات\nGood: مرجع واحد ثوابت لكل الفريق",
            commonMistakes: "- عمل Design System ضخم بدون داعي للمشاريع الصغيرة",
            practicalTips: "- ابدأ بـ UI Kit بسيط ثم طوره لـ Design System",
            miniActivity: "جمع الألوان والخطوط والأزرار في صفحة واحدة",
            summary: "Design System = مرجع موحد للجميع"
          }
        },
        {
          id: "ui-accessibility",
          titleAr: "إمكانية الوصول في الواجهات (UI Accessibility - A11y)",
          titleEn: "UI Accessibility (A11y)",
          content: {
            introduction: "هل تصميمك يقدر يستخدمه كل الناس بدون عوائق حتى ذوي الاحتياجات؟",
            concept: "UI Accessibility هي مراعاة إتاحة الواجهة لجميع المستخدمين بشمولية بغض النظر عن قدراتهم البصرية أو الحركية.",
            whyItMatters: "بتضمن وصول منتجك لـ 100% من الجمهور وبيطابق معايير الجودة العالمية (WCAG)",
            breakdown: "- Color Contrast: تباين ألوان لا يقل عن 4.5:1\n- Touch Target: مساحة ضغط لا تقل عن 44x44px للجوال\n- Text Scaling: دعم تكبير الخطوط\n- Screen Readers: نصوص توضيحية للأيقونات",
            example: "نص أبيض على زر أزرق داكن واضح جداً مقارنة بنص رمادي على أصفر",
            badVsGood: "Bad: نصوص باهتة ومساحات ضغط صغيرة\nGood: تباين واضح وأزرار سهلة اللمس",
            commonMistakes: "- الاعتماد على اللون فقط لإظهار الخطأ دون أيقونة أو نص",
            practicalTips: "- استخدم أدوات مثل Stark لفحص Contrast\n- لا تجعل مساحة الأزرار التفاعلية أصغر من 44px",
            miniActivity: "افحص نسبة التباين لأزرار تطبيقك المفضل",
            summary: "التصميم الشامل = م متاح للجميع بسهولة"
          }
        },
        {
          id: "micro-interactions",
          titleAr: "الحركات والتفاعلات الدقيقة (Micro-interactions)",
          titleEn: "Micro-interactions & Motion",
          content: {
            introduction: "ليه بعض الأزرار والتطبيقات بتحس إنها حيّة وبتتفاعل معاك بسلاسة؟",
            concept: "Micro-interactions هي الحركات والتأثيرات البصرية البسيطة اللي بتدي رد فعل فوري عند تفاعل المستخدم.",
            whyItMatters: "بتأكد للمستخدم إن الأكشن تم بنجاح وتمنح الواجهة لمسة احترافية فائقة",
            breakdown: "- Trigger: سبب الحركة (Hover / Click)\n- Feedback: رد الفعل البصري (تغيير اللون / تكبير خفيف)\n- Duration: سرعة الحركة بين 150ms إلى 300ms",
            example: "زر التحميل اللي بيتحول لشارة صح عند اكتمال الرفع",
            badVsGood: "Bad: حركات بطيئة ومزعجة تضيع وقت المستخدم\nGood: مؤثرات سريعة وسلسة وتفاعلية",
            commonMistakes: "- زيادة الحركات بشكل يسبب تشتيت العين أو بطء الاستجابة",
            practicalTips: "- اجعل زمن الانقال بين 200ms و 300ms\n- استخدم easing طبيعي",
            miniActivity: "لاحظ التفاعل البصري عند ضغط زر Like في إنستغرام",
            summary: "Micro-interactions = تفاعل حي واستجابة واضحة"
          }
        },
        {
          id: "responsive-ui-design",
          titleAr: "التصميم المتجاوب للشاشات (Responsive UI & Breakpoints)",
          titleEn: "Responsive UI & Breakpoints",
          content: {
            introduction: "إزاي التصميم بيكيف نفسه تلقائياً بين شاشة الجوال والتابلت والكومبيوتر؟",
            concept: "Responsive UI هو تصميم واجهة مرنة تعيد ترتيب عناصرها وتناسب مقاسات الشاشات المختلفة بذكاء.",
            whyItMatters: "أكثر من 60% من التصفح بيحصل على الجوال، فلا بد من تجربة ممتازة على كل الأجهزة",
            breakdown: "- Mobile Breakpoint: 320px - 480px\n- Tablet Breakpoint: 768px - 1024px\n- Desktop Breakpoint: 1200px+\n- Mobile-First Approach: التصميم للجوال أولاً",
            example: "تحويل الملاحة العريضة في Desktop إلى القائمة الجانبية (Hamburger Menu) في الجوال",
            badVsGood: "Bad: تصغير الشاشة كصورة ثابتة فيصغر الخط\nGood: إعادة ترتيب الكروت والعمود ليصبح رأسي",
            commonMistakes: "- التصميم للابتوب فقط وإهمال تجربة الجوال",
            practicalTips: "- صمم بالعمود الواحد (1 Column) للجوال\n- اجعل العناصر مرنة بالنِسَب % أو Grid",
            miniActivity: "افتح موقع على الكومبيوتر وصغر نافذة المتصفح لتلاحظ التجاوب",
            summary: "Responsive UI = تجربة سلسة على كل الشاشات"
          }
        },
        {
          id: "ui-states--edge-cases",
          titleAr: "حالات الواجهة والحالات الاستثنائية (UI States & Edge Cases)",
          titleEn: "UI States & Edge Cases",
          content: {
            introduction: "ماذا يحدث للشاشة لما النت يقطع أو ما يرجعش أي داتا؟",
            concept: "UI States هي الحالات المختلفة التي تمر بها أي شاشة في المنتج أثناء دورة حياتها.",
            whyItMatters: "تجنب الشاشات البيضاء أو الصامتة وتوجيه المستخدم دائماً للخطوة التالية",
            breakdown: "- Ideal State: الحالة المثالية الكاملة بالبيانات\n- Empty State: شاشة فارغة بدون بيانات مع زر إضافة\n- Loading State: حالة التحميل (Skeleton Loaders)\n- Error State: شاشة الخطأ مع خيار إعادة المحاولة",
            example: "عرض هيكل محتوى باهت (Skeleton) أثناء تحميل التغذية الإخبارية",
            badVsGood: "Bad: شاشة بيضاء فارغة تترك المستخدم حائراً\nGood: توضيح حالة التحميل أو رسالة لطيفة مع زر إعادة المحاولة",
            commonMistakes: "- النسيان والتركيز فقط على الحالة المثالية (Ideal State)",
            practicalTips: "- صمم Empty State مشجعة مع زر CTA واضح\n- استخدم Skeleton Loaders بدل الـ Spinner المزعج",
            miniActivity: "صمم شاشة Empty State لسلة تسوق فارغة",
            summary: "UI States = واجهة متكاملة تجيب على كل الاحتمالات"
          }
        },
        {
          id: "figma-auto-layout-variants",
          titleAr: "الـ Auto Layout والمتغيرات في فيجما (Figma Auto-Layout & Variants)",
          titleEn: "Figma Auto-Layout & Variants",
          content: {
            introduction: "كيف تبني مكونات في Figma تتمدد وتتجاوب تلقائياً مثل الكود الحقيقي؟",
            concept: "Auto Layout ميزة احترافية في Figma تحول العناصر إلى هيكل Flexbox مرن، وVariants تجمع حالات المكون في كائن واحد.",
            whyItMatters: "تعديل زر واحد أو تغيير نص يضبط مقاس الكارت تلقائياً ويوفر 80% من وقت التصميم",
            breakdown: "- Direction: أفقي (Horizontal) أو رأسي (Vertical)\n- Hug Content vs Fill Container: تمدد المكون حسب المحتوى أو الحاوية\n- Spacing & Padding: ضببط المسافات الداخلية والتوزيع\n- Component Variants: دمج حالات (Hover, Active, Disabled) في مكون واحد",
            example: "تغيير كلمة 'حفظ' إلى 'حفظ وتعديل البيانات' فيتوسع الزر والمسافات تلقائياً بدون تعديل يدوي",
            badVsGood: "Bad: ضبط مسافات وحجم الأزرار والكروت يدوياً بكسل ببكسل\nGood: الاعتماد التام على Auto Layout للـ Responsiveness",
            commonMistakes: "- فك الـ Auto Layout وتعديل الأبعاد يدويًا في كل شاشة",
            practicalTips: "- استخدم Shift + A لإضافة Auto Layout فوراً لأي مجموعة\n- سمِّ الحالات بوضوح مثل Property 1 = Hover",
            miniActivity: "صمم زر بـ Auto Layout وغير النص لتلاحظ التمدد التلقائي",
            summary: "Auto Layout = سرعة مذهلة واتساق تام كالكود"
          }
        }
      ]
    },
    {
      id: "integration",
      nameAr: "تكامل UX × UI",
      nameEn: "UX × UI Integration",
      descriptionAr: "تعلم كيف تربط بين تجربة المستخدم والتصميم البصري",
      descriptionEn: "Learn how to integrate UX and UI together",
      color: "#EC4899",
      emoji: "🔗",
      topics: [
        {
          id: "wireframe-to-ui",
          titleAr: "Wireframe to UI",
          titleEn: "Wireframe to UI",
          content: {
            introduction: "إزاي نحول الرسم الأبيض والأسود لتصميم كامل ينبض بالحياة؟",
            concept: "تحويل الهيكل البنائي (Wireframe) إلى واجهة بصرية جذابة ومكتملة (High-Fidelity UI).",
            whyItMatters: "بيضمن إن الشكل الجميل مبني على هيكل وتجربة صحيحة",
            breakdown: "- تطبيق الألوان والخطوط\n- إضافة الصور والأيقونات\n- ضبط المسافات والمحاذاة الدقيقة",
            example: "تحويل مربعات الـ Wireframe إلى كروت منتجات وصور حقيقية",
            badVsGood: "Bad: تغيير الأماكن والمسارات المحددة في الـ UX\nGood: تجميل الـ UX بدون الإخلال بالسهولة",
            commonMistakes: "- التركيز على التجميل ونسيان وظيفة العنصر",
            practicalTips: "- اتبع الـ Wireframe كخريطة أساسية\n- جرب الألوان والتدرجات بحذر",
            miniActivity: "حول Wireframe شاشة لـ UI جذاب",
            summary: "Wireframe + UI = منتج مكتمل وباهر"
          }
        },
        {
          id: "ux-ui-handoff",
          titleAr: "UX/UI Handoff to Developers",
          titleEn: "UX/UI Handoff to Developers",
          content: {
            introduction: "إزاي تسلم شغلك للمطور من غير ما يطلع الشغل مختلف عن التصميم؟",
            concept: "عملية تسليم الملفات والتصاميم من المصمم للمطور بطريقة واضحة وموثقة.",
            whyItMatters: "بيمنع سوء الفهم وبيسرع عملية البرمجة والتنفيذ",
            breakdown: "- Export Assets (SVG, PNG...)\n- Design Specs & Spacing\n- Interactive States & Flows",
            example: "استخدام أدوات مثل Figma Inspect لتوضيح الأبعاد للـ Developer",
            badVsGood: "Bad: تسليم صور ثابتة بدون تفاصيل\nGood: ملف منظم بشرائح تفاعلية ومقاسات دقيقة",
            commonMistakes: "- عدم توضيح حالات الأزرار والأخطاء (Error States)",
            practicalTips: "- اتكلم مع المطور من بدري\n- نظم ملفك والتسميات كويس",
            miniActivity: "جهز شاشة للتسليم واكتب ملاحظات للمطور",
            summary: "Handoff ممتاز = تنفيذ مطبق 100%"
          }
        }
      ]
    },
    {
      id: "bonus",
      nameAr: "محتوى إضافي ومتقدم",
      nameEn: "Bonus Content",
      descriptionAr: "نصائح وأفكار مهمة إضافية للطلاب والمصممين",
      descriptionEn: "Additional important tips, tricks and advanced ideas",
      color: "#F59E0B",
      emoji: "⭐",
      topics: [
        {
          id: "portfolio-tips",
          titleAr: "Portfolio & Case Studies",
          titleEn: "Portfolio & Case Studies",
          content: {
            introduction: "إزاي تعرض شغلك بطريقة تخلي العملاء أو الشركات يطلبوا يشتغلوا معاك؟",
            concept: "بناء المعرض الشخصي (Portfolio) وشرح خطوات حل المشكلة (Case Study).",
            whyItMatters: "الشركات بتهتم بـ 'طريقة تفكيرك' أكتر من مجرد الصور الحلوة",
            breakdown: "- المشكلة والسياق\n- خطوات البحث والـ UX\n- التصميم النهائي والنتائج",
            example: "كتابة Case Study لتطبيق حل مشكلة حقيقية لدى طلاب الجامعة",
            badVsGood: "Bad: عرض صور شاشات فقط\nGood: حكاية قصة المشروع من الفكرة حتى النتيجة",
            commonMistakes: "- الإطالة الزائدة في الكلام\n- عدم إبراز دورك الحقيقي",
            practicalTips: "- ركز على الجودة مش الكمية (2-3 مشاريع قوية يكفوا)\n- خلي المدخل بصري وجذاب",
            miniActivity: "اكتب مقدمة قصيرة لمشروعك القادم",
            summary: "Portfolio قوي = قصة مشكلتك وحلها الباهر"
          }
        },
        {
          id: "freelancing-client-management",
          titleAr: "العمل الحر وإدارة العملاء والأسعار (Freelancing & Client Management)",
          titleEn: "Freelancing & Client Management",
          content: {
            introduction: "كيف تبدأ مسيرتك كـ Freelancer وتحدد سعر ساعتك ومشروعك باحترافية؟",
            concept: "أساسيات تسعير خدمات الـ UI/UX، التواصل مع العملاء، وكتابة عقود العرض والتسليم (Scope of Work).",
            whyItMatters: "يحميك من إرهاق التعديلات اللانهائية ويضمن حقوقك المالية والأدبية",
            breakdown: "- Pricing: التسعير بالساعة مقابل التسعير بالمشروع (Value-Based Pricing)\n- Scope of Work: تحديد عدد الشاشات والتعديلات مسبقاً\n- Client Brief: استلام تفاصيل الفكرة والجمهور بدقة\n- Contracts: الدفعة المقدمة (30% - 50%) قبل البدء",
            example: "الاتفاق على 3 تعديلات فقط لكل شاشة، وما زاد عنها يحسب بسعر إضافي",
            badVsGood: "Bad: البدء في التصميم بدون دفعة مقدمة أو عقد يحدد عدد الشاشات\nGood: اتفاق مالي واضح وعقد يحدد النطاق والمواعيد",
            commonMistakes: "- قببول تعديلات غير محدودة بدون مقابل وتأخير الدفعات",
            practicalTips: "- لا تبدأ أي مشروع بدون عربون 50%\n- وضح الـ Deliverables بوضوح في عقد ملزم",
            miniActivity: "اكتب ملخص Scope of Work لمشروع تصميم تطبيق بسيط",
            summary: "احترافية التعامل = حماية حقوقك ونجاح عملك الحر"
          }
        }
      ]
    }
  ]
};

export default educationalContent;
