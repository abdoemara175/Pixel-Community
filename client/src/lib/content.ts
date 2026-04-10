export interface SessionContent {
  id: string;
  title: string;
  emoji: string;
  concept: string;
  why: string[];
  diagram: string;
  example: string;
  mistakes: string[];
  tip: string;
  task: string;
  summary: string;
}

export const sessionContent: SessionContent[] = [
  {
    id: "user-research",
    title: "User Research",
    emoji: "📦",
    concept: "عملية جمع معلومات عن المستخدمين لفهم سلوكهم واحتياجاتهم باستخدام Survey و Interview",
    why: [
      "فهم المستخدم الحقيقي",
      "تقليل الافتراضات",
      "اتخاذ قرارات مبنية على بيانات"
    ],
    diagram: "Survey → Patterns\nInterview → Deep Insights",
    example: "تسأل المستخدمين:\nهل بتنظم وقتك؟ ايه أكبر مشكلة عندك؟",
    mistakes: [
      "أسئلة عامة",
      "تجاهل النتائج",
      "الاعتماد على رأيك الشخصي"
    ],
    tip: "ركز على السلوك الحقيقي مش الرأي",
    task: "اكتب 5 أسئلة تفهم بيها مشكلة معينة",
    summary: "Research = بيانات + فهم حقيقي"
  },
  {
    id: "competitive-analysis",
    title: "Competitive Analysis",
    emoji: "📦",
    concept: "تحليل المنافسين لفهم نقاط القوة والضعف والفرص",
    why: [
      "التعلم من المنافسين",
      "تحسين المنتج",
      "تجنب الأخطاء"
    ],
    diagram: "Competitors → Analysis → Insights → Opportunities",
    example: "تحليل 2 Apps لتنظيم الوقت ومقارنة بينهم",
    mistakes: [
      "تقليد المنافسين",
      "تجاهل التحليل"
    ],
    tip: "اتعلم من المنافسين… متقلدهمش",
    task: "حلل App واكتب 2 مميزات و2 عيوب",
    summary: "المنافسين = مصدر تعلم مش نسخ"
  },
  {
    id: "problem-definition",
    title: "Problem Definition",
    emoji: "📦",
    concept: "تحديد المشكلة بشكل واضح بناءً على البحث",
    why: [
      "توجيه التصميم",
      "تقليل التشتت",
      "تحديد هدف واضح"
    ],
    diagram: "User + Need + Problem = Problem Statement",
    example: "الطلاب يعانون من تنظيم الوقت بسبب عدم وجود طريقة سهلة لإدارة المهام",
    mistakes: [
      "مشكلة عامة",
      "بدون User واضح",
      "بدون سبب"
    ],
    tip: "خلي المشكلة محددة وقابلة للحل",
    task: "اكتب Problem Statement لفكرة",
    summary: "Problem واضح = Design صح"
  },
  {
    id: "user-needs",
    title: "User Needs & Pain Points",
    emoji: "📦",
    concept: "Pain Points = المشاكل، Needs = الاحتياجات لحل المشاكل",
    why: [
      "فهم المستخدم",
      "اكتشاف فرص التصميم"
    ],
    diagram: "Pain → Need → Solution",
    example: "Pain: بينسى المواعيد\nNeed: Reminder بسيط",
    mistakes: [
      "التركيز على Features",
      "تجاهل السبب الحقيقي"
    ],
    tip: "اسأل \"ليه\" أكتر من مرة",
    task: "اكتب Pain + Need لمستخدم",
    summary: "كل Pain = فرصة Design"
  },
  {
    id: "personas",
    title: "Personas",
    emoji: "📦",
    concept: "شخصية خيالية تمثل المستخدم الحقيقي بناءً على بيانات",
    why: [
      "توضيح المستخدم",
      "تحسين قرارات التصميم",
      "توحيد رؤية الفريق"
    ],
    diagram: "Name / Age / Goals / Pain / Behavior",
    example: "طالب بيعاني من تنظيم الوقت",
    mistakes: [
      "Persona عشوائية",
      "بدون Data"
    ],
    tip: "خليها واقعية ومبنية على Research",
    task: "اعمل Persona كاملة",
    summary: "Persona = المستخدم بقى شخص واضح"
  },
  {
    id: "empathy-map",
    title: "Empathy Map",
    emoji: "📦",
    concept: "أداة لفهم المستخدم بعمق من خلال مشاعره وسلوكه",
    why: [
      "فهم أعمق للمستخدم",
      "تحسين تجربة المستخدم"
    ],
    diagram: "Says | Thinks\nDoes | Feels",
    example: "Says: مش لاقي وقت\nFeels: ضغط",
    mistakes: [
      "كلام عام",
      "مش مرتبط بالـ Persona"
    ],
    tip: "اكتب كلام حقيقي المستخدم ممكن يقوله",
    task: "اعمل Empathy Map للـ Persona",
    summary: "Empathy Map = فهم إنساني للمستخدم"
  }
];
