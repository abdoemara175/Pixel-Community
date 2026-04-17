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
      description: lang === 'ar' ? 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟' : 'Why do we use some apps daily... while others are deleted after the first use?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه في Apps بنستخدمها يوميًا… وApps تانية بنمسحها بعد أول استخدام؟' : 'Why do we use some apps daily... while others are deleted after the first use?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'UX هو تجربة المستخدم أثناء استخدام المنتج، مش بس شكله، لكن إحساسه وهو بيتعامل معاه وهل قدر يحقق هدفه بسهولة ولا لأ.' : 'UX is the user experience while using the product, not just its look, but how it feels when interacting with it and whether they could achieve their goal easily or not.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'لو المستخدم اتلخبط أو تعب أثناء الاستخدام → هيسيب المنتج حتى لو شكله حلو' : 'If the user gets confused or tired during use → they will leave the product even if it looks good.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Usability: هل سهل الاستخدام؟\n• Clarity: هل واضح؟\n• Efficiency: هل بيوصل لهدفه بسرعة؟\n• Satisfaction: هل التجربة مريحة؟' : '• Usability: Is it easy to use?\n• Clarity: Is it clear?\n• Efficiency: Does it reach the goal quickly?\n• Satisfaction: Is the experience comfortable?',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تطبيق طلب أكل:\nلو خلّصت الطلب في خطوات قليلة → UX كويس\nلو تهت بين الصفحات → UX سيء' : 'Food delivery app:\nIf you finish the order in a few steps → Good UX\nIf you get lost between pages → Bad UX',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: خطوات كتير + لخبطة' : 'Bad: Too many steps + confusion',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• التركيز على الشكل بس\n• تجاهل تجربة المستخدم' : '• Focusing only on the look\n• Ignoring user experience',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خلي كل خطوة واضحة\n• قلل عدد الخطوات\n• اختبر على حد حقيقي' : '• Make every step clear\n• Reduce the number of steps\n• Test on a real person',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'قول مثال على App UX بتاعه سيء وليه' : 'Give an example of an app with bad UX and why.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'UX = سهولة + وضوح + راحة المستخدم)' : 'UX = Ease + Clarity + User Comfort)',
          type: 'summary'
        },
      ]
    },
    {
      id: 'design-thinking-process',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Design Thinking Process' : 'Design Thinking Process',
      emoji: '💡',
      description: lang === 'ar' ? 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟' : 'Why do we sometimes solve a problem... and discover we solved the wrong one?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه أحيانًا بنحل مشكلة… ونكتشف إننا حلينا المشكلة الغلط؟' : 'Why do we sometimes solve a problem... and discover we solved the wrong one?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Design Thinking هو أسلوب لحل المشاكل بيركز على فهم المستخدم قبل ما نبدأ نحل.' : 'Design Thinking is a problem-solving approach that focuses on understanding the user before starting to solve.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيمنعك تشتغل على افتراضات\nوبيخليك تبني حلول مبنية على الواقع' : 'It prevents you from working on assumptions and makes you build solutions based on reality.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Empathize: افهم المستخدم\n• Define: حدد المشكلة\n• Ideate: فكر في حلول\n• Prototype: جرب\n• Test: اختبر' : '• Empathize: Understand the user\n• Define: Define the problem\n• Ideate: Think of solutions\n• Prototype: Try it out\n• Test: Test it',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'طالب مش بينظم وقته → نفهم السبب → نحدد المشكلة → نجرب حل' : 'A student not organizing their time → Understand the reason → Define the problem → Try a solution.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تبدأ تصميم على طول' : 'Bad: Starting design immediately',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل مرحلة الفهم\n• القفز للحل بسرعة' : '• Ignoring the understanding phase\n• Jumping to the solution quickly',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل كتير قبل ما تصمم\n• خليك مرن' : '• Ask a lot before you design\n• Be flexible',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اختار مشكلة وامشي عليها بالمراحل' : 'Choose a problem and walk through the phases.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'افهم → حدد → حل → جرّب' : 'Understand → Define → Solve → Try',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-research',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Research' : 'User Research',
      emoji: '🔍',
      description: lang === 'ar' ? 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟' : 'Have you ever designed something and it turned out unsuitable for the user?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل عمرك صممت حاجة وطلعت مش مناسبة للمستخدم؟' : 'Have you ever designed something and it turned out unsuitable for the user?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'User Research هو جمع معلومات عن المستخدمين عشان نفهم سلوكهم واحتياجاتهم.' : 'User Research is gathering information about users to understand their behavior and needs.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تبني على بيانات مش تخمين\nوبيوفر وقت ومجهود' : 'It makes you build on data, not guesswork, and saves time and effort.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Survey: بيانات من عدد كبير\n• Interview: فهم عميق\n• Observation: ملاحظة السلوك' : '• Survey: Data from a large number\n• Interview: Deep understanding\n• Observation: Observing behavior',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تسأل الطلبة عن مشاكلهم في المذاكرة' : 'Asking students about their problems with studying.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تسأل أسئلة عامة' : 'Bad: Asking general questions',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• الاعتماد على رأيك\n• تجاهل النتائج' : '• Relying on your opinion\n• Ignoring the results',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل “بتعمل ايه؟” مش “شايف ايه؟”\n• سجل الإجابات' : '• Ask "What do you do?" not "What do you see?"\n• Record the answers',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب 3 أسئلة تفهم بيها مشكلة' : 'Write 3 questions to understand a problem.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Research = فهم حقيقي للمستخدم' : 'Research = Real understanding of the user',
          type: 'summary'
        },
      ]
    },
    {
      id: 'competitive-analysis',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Competitive Analysis' : 'Competitive Analysis',
      emoji: '📊',
      description: lang === 'ar' ? 'ليه المستخدم يختار منتجك ويسيب المنافس؟' : 'Why would a user choose your product and leave the competitor?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه المستخدم يختار منتجك ويسيب المنافس؟' : 'Why would a user choose your product and leave the competitor?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Competitive Analysis هو دراسة المنافسين عشان تعرف نقط قوتهم وضعفهم.' : 'Competitive Analysis is studying competitors to know their strengths and weaknesses.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تعرف إيه اللي ناقص في السوق\nوإزاي تتميز عنهم' : 'It lets you know what is missing in the market and how to stand out from them.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Direct Competitors: نفس الخدمة\n• Indirect Competitors: خدمة بديلة\n• SWOT Analysis' : '• Direct Competitors: Same service\n• Indirect Competitors: Alternative service\n• SWOT Analysis',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'تحليل تطبيقات توصيل الأكل في منطقتك' : 'Analyzing food delivery apps in your area.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تقليد المنافس' : 'Bad: Copying the competitor',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل المنافسين\n• التركيز على الشكل بس' : '• Ignoring competitors\n• Focusing only on the look',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• شوف ريفيو المستخدمين للمنافس\n• حدد ميزتك التنافسية' : "• Look at users' reviews of the competitor\n• Define your competitive advantage",
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد منافس لـ App مشهور' : 'Identify a competitor for a famous app.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Analysis = تميز في السوق' : 'Analysis = Market differentiation',
          type: 'summary'
        },
      ]
    },
    {
      id: 'personas',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Personas' : 'Personas',
      emoji: '👤',
      description: lang === 'ar' ? 'هل أنت بتصمم لنفسك… ولا لشخص حقيقي؟' : 'Are you designing for yourself... or for a real person?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل أنت بتصمم لنفسك… ولا لشخص حقيقي؟' : 'Are you designing for yourself... or for a real person?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Persona هي شخصية خيالية بتمثل مجموعة من المستخدمين الحقيقيين.' : 'Persona is a fictional character representing a group of real users.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تتخيل المستخدم وأنت بتصمم\nوبيوحد رؤية الفريق' : 'It makes you imagine the user while designing and unifies the team vision.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Name & Photo\n• Demographics\n• Goals\n• Pain Points' : '• Name & Photo\n• Demographics\n• Goals\n• Pain Points',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? '“أحمد، 25 سنة، طالب، هدفه يذاكر بتركيز، مشكلته التشتت”' : '"Ahmed, 25, student, goal is to study with focus, problem is distraction."',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: شخصية بدون بيانات حقيقية' : 'Bad: A character without real data',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تأليف الـ Persona\n• كتر التفاصيل غير المهمة' : '• Making up the Persona\n• Too many unimportant details',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليها واقعية\n• اربطها بالبحث' : '• Keep it realistic\n• Link it to research',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اعمل Persona بسيطة' : 'Create a simple Persona.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Persona = المستخدم بقى واضح' : 'Persona = The user is now clear',
          type: 'summary'
        },
      ]
    },
    {
      id: 'empathy-map',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'Empathy Map' : 'Empathy Map',
      emoji: '🗺️',
      description: lang === 'ar' ? 'هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟' : 'Do we understand the user... or just see them from the outside?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل احنا فاهمين المستخدم… ولا بس شايفينه من بره؟' : 'Do we understand the user... or just see them from the outside?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Empathy Map أداة لفهم المستخدم بشكل أعمق (مشاعره وسلوكه)' : 'Empathy Map is a tool to understand the user more deeply (feelings and behavior).',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تشوف من وجهة نظر المستخدم' : "It makes you see from the user's perspective.",
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
          content: lang === 'ar' ? '“مش لاقي وقت” → توتر' : '"Not finding time" → Stress',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: كلام عام' : 'Bad: General talk',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• عدم الربط بالـ Persona' : '• Not linking to the Persona',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم كلام المستخدم\n• اربط كل حاجة بالواقع' : "• Use the user's words\n• Link everything to reality",
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اعمل Empathy Map' : 'Create an Empathy Map.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'افهم المستخدم من جوه مش من بره' : 'Understand the user from the inside, not the outside.',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-stories---jtbd',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Stories / JTBD' : 'User Stories / JTBD',
      emoji: '📖',
      description: lang === 'ar' ? 'User Stories و JTBD (Jobs To Be Done) طرق لفهم المستخدم من خلال الهدف اللي عايز يحققه، مش مجرد استخدامه للمنتج.' : 'User Stories and JTBD (Jobs To Be Done) are ways to understand the user through the goal they want to achieve, not just their use of the product.',
      estimatedTime: 15,
      steps: [
        {
          id: 'concept',
          title: lang === 'ar' ? '1. Concept' : '1. Concept',
          content: lang === 'ar' ? 'User Stories و JTBD (Jobs To Be Done) طرق لفهم المستخدم من خلال الهدف اللي عايز يحققه، مش مجرد استخدامه للمنتج.' : 'User Stories and JTBD (Jobs To Be Done) are ways to understand the user through the goal they want to achieve, not just their use of the product.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '2. Why It Matters' : '2. Why It Matters',
          content: lang === 'ar' ? 'بيركزك على “ليه المستخدم بيستخدم المنتج”\nمش بس “بيستخدمه إزاي”' : 'It focuses you on "why the user uses the product" not just "how they use it".',
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
          content: lang === 'ar' ? 'طالب عايز ينظم وقته → مش عايز App… عايز ينجز مهامه' : 'A student wanting to organize their time → Doesn’t want an app… wants to get tasks done.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '5. Bad Vs Good' : '5. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: “نضيف Feature جديدة”' : 'Bad: "Let’s add a new feature"',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '6. Mistakes' : '6. Mistakes',
          content: lang === 'ar' ? '• كتابة Stories عامة\n• تجاهل الهدف الحقيقي' : '• Writing general stories\n• Ignoring the real goal',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '7. Tips' : '7. Tips',
          content: lang === 'ar' ? '• ركز على الهدف مش الفعل\n• خليك بسيط وواضح' : '• Focus on the goal, not the action\n• Be simple and clear',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '8. Activity' : '8. Activity',
          content: lang === 'ar' ? 'اكتب User Story لمشكلة معينة' : 'Write a User Story for a specific problem.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'المستخدم “يوظف” المنتج عشان يحقق هدف' : 'The user "hires" the product to achieve a goal.',
          type: 'summary'
        },
      ]
    },
    {
      id: 'user-flow',
      trackId: 'ux-track',
      title: lang === 'ar' ? 'User Flow' : 'User Flow',
      emoji: '🌊',
      description: lang === 'ar' ? 'هل المستخدم عارف يوصل لهدفه… ولا بيضيع في النص؟' : 'Does the user know how to reach their goal... or do they get lost in the middle?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل المستخدم عارف يوصل لهدفه… ولا بيضيع في النص؟' : 'Does the user know how to reach their goal... or do they get lost in the middle?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'User Flow هو رسم توضيحي للخطوات اللي بيمشي فيها المستخدم داخل المنتج.' : 'User Flow is an illustration of the steps the user takes within the product.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تشوف التجربة كاملة\nوبيمنع وجود خطوات ملهاش لازمة' : 'It lets you see the whole experience and prevents unnecessary steps.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Start Point\n• Decision points\n• Actions\n• End Goal' : '• Start Point\n• Decision points\n• Actions\n• End Goal',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'خطوات شراء منتج من أول البحث لحد الدفع' : 'Steps to buy a product from search to payment.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: خطوات معقدة ولخبطة' : 'Bad: Complex steps and confusion',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• نسيان بعض الحالات (Error states)\n• تعقيد المسار' : '• Forgetting some cases (Error states)\n• Complicating the path',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خلي المسار مباشر\n• وضح كل احتمال' : '• Keep the path direct\n• Clarify every possibility',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'ارسم Flow بسيط لعملية Login' : 'Draw a simple flow for a login process.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Flow = طريق المستخدم للهدف' : "Flow = The user's path to the goal",
          type: 'summary'
        },
      ]
    },
  ];

  return {
    id: 'ux-track',
    title: lang === 'ar' ? 'UX Track' : 'UX Track',
    emoji: '🧠',
    color: '#3B82F6',
    description: lang === 'ar' ? 'Learn the foundations of User Experience' : 'Learn the foundations of User Experience',
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
      description: lang === 'ar' ? 'إيه اللي بيخلي التصميم شكله احترافي… وتصميم تاني شكله “هواة”؟' : 'What makes a design look professional... and another look "amateur"?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إيه اللي بيخلي التصميم شكله احترافي… وتصميم تاني شكله “هواة”؟' : 'What makes a design look professional... and another look "amateur"?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'UI هو الواجهة المرئية للمنتج (الألوان، الخطوط، الأزرار).' : 'UI is the visual interface of the product (colors, fonts, buttons).',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيجذب المستخدم\nوبيوصل إحساس المنتج' : 'It attracts the user and conveys the feel of the product.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Colors\n• Typography\n• Layout\n• Components' : '• Colors\n• Typography\n• Layout\n• Components',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'اختيار ألوان مريحة للعين' : 'Choosing eye-friendly colors.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: ألوان كتير ولخبطة' : 'Bad: Too many colors and confusion',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل التناسق\n• كتر التفاصيل' : '• Ignoring consistency\n• Too many details',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خليك بسيط\n• استخدم Hierarchy واضح' : '• Stay simple\n• Use a clear hierarchy',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد 3 ألوان متناسقة' : 'Identify 3 consistent colors.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'UI = جمال + وضوح' : 'UI = Beauty + Clarity',
          type: 'summary'
        },
      ]
    },
    {
      id: 'colors-theory',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Colors Theory' : 'Colors Theory',
      emoji: '🌈',
      description: lang === 'ar' ? 'ليه بنحس بالراحة في Apps… والتوتر في Apps تانية؟' : 'Why do we feel comfortable in some apps... and stressed in others?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه بنحس بالراحة في Apps… والتوتر في Apps تانية؟' : 'Why do we feel comfortable in some apps... and stressed in others?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'دراسة تأثير الألوان وكيفية تنسيقها.' : 'Studying the effect of colors and how to coordinate them.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيأثر على مشاعر المستخدم\nوبيوجه عينه للعناصر المهمة' : "It affects the user's emotions and guides their eye to important elements.",
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Primary colors\n• Secondary colors\n• Contrast\n• Color psychology' : '• Primary colors\n• Secondary colors\n• Contrast\n• Color psychology',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'الأحمر للتحذير، الأزرق للثقة' : 'Red for warning, blue for trust.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: ألوان فاقعة زيادة' : 'Bad: Overly bright colors',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• ضعف التباين (Contrast)\n• كتر الألوان' : '• Weak contrast\n• Too many colors',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم قاعدة 60-30-10\n• اتأكد من التباين' : '• Use the 60-30-10 rule\n• Ensure contrast',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اختار Palette لـ App طبي' : 'Choose a palette for a medical app.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'الألوان = إحساس + تنظيم' : 'Colors = Feeling + Organization',
          type: 'summary'
        },
      ]
    },
    {
      id: 'typography',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Typography' : 'Typography',
      emoji: '🔤',
      description: lang === 'ar' ? 'ليه نص سهل القراءة… ونص تاني مرهق؟' : 'Why is some text easy to read... and another exhausting?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه نص سهل القراءة… ونص تاني مرهق؟' : 'Why is some text easy to read... and another exhausting?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تنظيم الخطوط وأحجامها في التصميم.' : 'Organizing fonts and their sizes in design.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيأثر على القراءة والفهم' : 'It affects reading and understanding.',
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
          content: lang === 'ar' ? 'عنوان كبير + نص أصغر' : 'Big headline + smaller text.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: خطوط كتير' : 'Bad: Too many fonts',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• استخدام Fonts كتير\n• حجم غير مناسب' : '• Using too many fonts\n• Unsuitable size',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم 1–2 Font\n• اعمل Hierarchy واضح' : '• Use 1-2 fonts\n• Create a clear hierarchy',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد العناوين والنصوص' : 'Identify headlines and body text.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Typography = وضوح القراءة' : 'Typography = Reading clarity',
          type: 'summary'
        },
      ]
    },
    {
      id: 'layout-and-grid-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Layout & Grid System' : 'Layout & Grid System',
      emoji: '📐',
      description: lang === 'ar' ? 'ليه بعض التصميمات مرتبة… والتانية فوضوية؟' : 'Why are some designs organized... and others messy?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه بعض التصميمات مرتبة… والتانية فوضوية؟' : 'Why are some designs organized... and others messy?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'طريقة ترتيب العناصر باستخدام Grid.' : 'Method of arranging elements using a Grid.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي التصميم منظم وسهل' : 'It makes the design organized and easy.',
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
          content: lang === 'ar' ? 'تقسيم الصفحة لأعمدة' : 'Dividing the page into columns.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: عناصر عشوائية' : 'Bad: Random elements',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الـ Grid\n• عدم المحاذاة' : '• Ignoring the Grid\n• Lack of alignment',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم Grid\n• حافظ على الترتيب' : '• Use a Grid\n• Maintain order',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'رتب عناصر على Grid' : 'Arrange elements on a Grid.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Grid = تنظيم التصميم' : 'Grid = Design organization',
          type: 'summary'
        },
      ]
    },
    {
      id: 'spacing-system',
      trackId: 'ui-track',
      title: lang === 'ar' ? 'Spacing System' : 'Spacing System',
      emoji: '📏',
      description: lang === 'ar' ? 'ليه في تصميمات “مريحة”… والتانية مزنوقة؟' : 'Why are some designs "comfortable"... and others cramped?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه في تصميمات “مريحة”… والتانية مزنوقة؟' : 'Why are some designs "comfortable"... and others cramped?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تنظيم المسافات بين العناصر.' : 'Organizing spaces between elements.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي التصميم واضح ومريح' : 'It makes the design clear and comfortable.',
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
          content: lang === 'ar' ? 'مسافة ثابتة بين الـ Cards' : 'Consistent space between cards.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: مسافات عشوائية' : 'Bad: Random spaces',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• ضيق المسافات\n• عدم التناسق' : '• Narrow spaces\n• Inconsistency',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• استخدم قاعدة الـ 8px\n• سيب مساحة للتنفس (White space)' : '• Use the 8px rule\n• Leave breathing room (White space)',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حدد مسافات بين عناصر' : 'Define spaces between elements.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Spacing = راحة للعين' : 'Spacing = Eye comfort',
          type: 'summary'
        },
      ]
    },
  ];

  return {
    id: 'ui-track',
    title: lang === 'ar' ? 'UI Track' : 'UI Track',
    emoji: '🎨',
    color: '#6366F1',
    description: lang === 'ar' ? 'Learn the foundations of User Interface design' : 'Learn the foundations of User Interface design',
    topics
  };
};

const getIntegrationTrack = (lang: Language): Track => {
  const topics: Topic[] = [
    {
      id: 'case-study-walkthrough',
      trackId: 'ux-x-ui-integration-track',
      title: lang === 'ar' ? 'Case Study Walkthrough' : 'Case Study Walkthrough',
      emoji: '🚶',
      description: lang === 'ar' ? 'إزاي تحكي قصة تصميمك بشكل يخلي الناس تفهم شغلك؟' : 'How do you tell your design story in a way that makes people understand your work?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي تحكي قصة تصميمك بشكل يخلي الناس تفهم شغلك؟' : 'How do you tell your design story in a way that makes people understand your work?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Case Study هو عرض كامل لرحلة التصميم من المشكلة للحل.' : 'Case Study is a full presentation of the design journey from problem to solution.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيوضح طريقة تفكيرك مش بس النتيجة' : 'It clarifies your way of thinking, not just the result.',
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
          content: lang === 'ar' ? 'توضح مشكلة → تحليل → تصميم → النتيجة' : 'Clarifying problem → analysis → design → result.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تعرض صور بس' : 'Bad: Showing only pictures',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل المراحل\n• التركيز على الشكل فقط' : '• Ignoring phases\n• Focusing only on the look',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• احكي القصة خطوة خطوة\n• وضح قراراتك' : '• Tell the story step by step\n• Clarify your decisions',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب خطوات Case Study' : 'Write Case Study steps.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Case Study = قصة التصميم' : 'Case Study = Design story',
          type: 'summary'
        },
      ]
    },
    {
      id: 'from-wireframe-to-final-ui',
      trackId: 'ux-x-ui-integration-track',
      title: lang === 'ar' ? 'From Wireframe to Final UI' : 'From Wireframe to Final UI',
      emoji: '💎',
      description: lang === 'ar' ? 'إزاي نحول رسمة بسيطة… لتصميم شكله احترافي؟' : 'How do we turn a simple drawing... into a professional-looking design?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إزاي نحول رسمة بسيطة… لتصميم شكله احترافي؟' : 'How do we turn a simple drawing... into a professional-looking design?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تحويل Wireframe (هيكل بسيط) إلى UI Design كامل.' : 'Turning a Wireframe (simple structure) into a full UI Design.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيضمن إن التصميم مبني على أساس صح' : 'It ensures the design is built on a correct foundation.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• Layout ثابت من Wireframe\n• إضافة Colors\n• Typography\n• Components' : '• Consistent layout from Wireframe\n• Adding Colors\n• Typography\n• Components',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'مستطيلات → تتحول لButtons وCards' : 'Rectangles → turn into Buttons and Cards.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تغير كل حاجة' : 'Bad: Changing everything',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل الـ Wireframe\n• التركيز على الشكل فقط' : '• Ignoring the Wireframe\n• Focusing only on the look',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• خلي الـ Layout ثابت\n• اشتغل على التفاصيل' : '• Keep the layout consistent\n• Work on details',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حوّل Wireframe بسيط لـ UI' : 'Turn a simple Wireframe into UI.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Wireframe = الأساس… UI = الشكل' : 'Wireframe = Foundation… UI = Look',
          type: 'summary'
        },
      ]
    },
    {
      id: 'design-decisions-explanation',
      trackId: 'ux-x-ui-integration-track',
      title: lang === 'ar' ? 'Design Decisions Explanation' : 'Design Decisions Explanation',
      emoji: '🗣️',
      description: lang === 'ar' ? 'ليه اخترت اللون ده؟ أو الشكل ده؟' : 'Why did you choose this color? or this shape?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه اخترت اللون ده؟ أو الشكل ده؟' : 'Why did you choose this color? or this shape?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'شرح سبب كل قرار تصميمي بناءً على UX مش الذوق.' : 'Explaining the reason for every design decision based on UX, not taste.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخلي شغلك احترافي ومقنع' : 'It makes your work professional and convincing.',
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
          content: lang === 'ar' ? '“اخترت اللون الأزرق لأنه مريح ويوضح الـ CTA”' : '"I chose blue because it is comfortable and highlights the CTA."',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: “عجبني”' : 'Bad: "I liked it"',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• الاعتماد على الذوق\n• عدم التوضيح' : '• Relying on taste\n• Lack of clarification',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اربط كل قرار بالمستخدم\n• فكر بمنطق مش إحساس' : '• Link every decision to the user\n• Think with logic, not feeling',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اشرح قرار تصميم واحد' : 'Explain one design decision.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'كل قرار لازم يكون ليه سبب' : 'Every decision must have a reason.',
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
      emoji: '💭',
      description: lang === 'ar' ? 'إيه الفرق بين حد “بيصمم”… وحد “بيفكر كمصمم”؟' : 'What is the difference between someone who "designs"... and someone who "thinks like a designer"?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'إيه الفرق بين حد “بيصمم”… وحد “بيفكر كمصمم”؟' : 'What is the difference between someone who "designs"... and someone who "thinks like a designer"?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'Thinking Like a Designer هو إنك تركز على حل المشكلة مش مجرد الشكل.' : 'Thinking Like a Designer is focusing on solving the problem, not just the look.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تشتغل بعقلية حل المشكلات مش تنفيذ أوامر' : 'It makes you work with a problem-solving mindset, not just executing orders.',
          type: 'why-it-matters'
        },
        {
          id: 'breakdown',
          title: lang === 'ar' ? '4. Breakdown' : '4. Breakdown',
          content: lang === 'ar' ? '• فهم المشكلة\n• تحليل المستخدم\n• التفكير في حلول\n• تجربة وتحسين' : '• Understanding the problem\n• User analysis\n• Thinking of solutions\n• Experimenting and improving',
          type: 'breakdown'
        },
        {
          id: 'example',
          title: lang === 'ar' ? '5. Example' : '5. Example',
          content: lang === 'ar' ? 'بدل ما تقول “أعمل زرار حلو”\nتفكر: “إزاي أخلي المستخدم يوصل لهدفه بسهولة؟”' : 'Instead of saying "Let’s make a nice button", think: "How can I make the user reach their goal easily?"',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تفكير في الشكل' : 'Bad: Thinking about the look',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• التركيز على الشكل\n• تجاهل المشكلة' : '• Focusing on the look\n• Ignoring the problem',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل “ليه” دايمًا\n• فكر من منظور المستخدم' : '• Always ask "why"\n• Think from the user’s perspective',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'حلل مشكلة وفكر في حلها' : 'Analyze a problem and think of its solution.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Designer مش بيرسم… بيحل' : 'A designer doesn’t draw... they solve.',
          type: 'summary'
        },
      ]
    },
    {
      id: 'real-world-constraints',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Real-World Constraints' : 'Real-World Constraints',
      emoji: '🚧',
      description: lang === 'ar' ? 'هل التصميم دايمًا بيكون “مثالي”… ولا في قيود؟' : 'Is design always "perfect"... or are there constraints?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل التصميم دايمًا بيكون “مثالي”… ولا في قيود؟' : 'Is design always "perfect"... or are there constraints?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'قيود بتأثر على التصميم زي الوقت، الميزانية، والتقنية.' : 'Constraints that affect design like time, budget, and technology.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك واقعي في شغلك' : 'It makes you realistic in your work.',
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
          content: lang === 'ar' ? 'مش كل فكرة تقدر تتنفذ بسبب التطوير' : 'Not every idea can be implemented due to development.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تصميم بدون مراعاة القيود' : 'Bad: Design without considering constraints',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• تجاهل القيود\n• تصميم مثالي زيادة' : '• Ignoring constraints\n• Overly perfect design',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اشتغل على المتاح\n• فكر في التنفيذ' : '• Work with what’s available\n• Think about implementation',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اذكر قيد ممكن يقابلك' : 'Mention a constraint you might encounter.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'التصميم الحقيقي = توازن' : 'Real design = Balance',
          type: 'summary'
        },
      ]
    },
    {
      id: 'working-with-developers',
      trackId: 'bonus-track',
      title: lang === 'ar' ? 'Working with Developers' : 'Working with Developers',
      emoji: '👨‍💻',
      description: lang === 'ar' ? 'ليه أحيانًا التصميم بيتنفذ غلط؟' : 'Why is design sometimes implemented incorrectly?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'ليه أحيانًا التصميم بيتنفذ غلط؟' : 'Why is design sometimes implemented incorrectly?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'التعاون بين المصمم والمطور لضمان تنفيذ التصميم بشكل صحيح.' : 'Collaboration between designer and developer to ensure the design is implemented correctly.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيضمن إن التصميم يتحول لمنتج فعلي' : 'It ensures the design turns into an actual product.',
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
          content: lang === 'ar' ? 'تشرح للمطور الفكرة مش بس الشكل' : 'Explaining the idea to the developer, not just the look.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: تسليم بدون شرح' : 'Bad: Handoff without explanation',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• عدم التواصل\n• افتراض إن المطور فاهم' : '• Lack of communication\n• Assuming the developer understands',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اتكلم مع الـ Dev\n• وضح التفاصيل' : '• Talk to the Dev\n• Clarify details',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اكتب حاجة توضحها للمطور' : 'Write something to clarify for the developer.',
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
      description: lang === 'ar' ? 'هل النقد بيهدم شغلك… ولا بيطوره؟' : 'Does critique destroy your work... or develop it?',
      estimatedTime: 15,
      steps: [
        {
          id: 'introduction',
          title: lang === 'ar' ? '1. Introduction' : '1. Introduction',
          content: lang === 'ar' ? 'هل النقد بيهدم شغلك… ولا بيطوره؟' : 'Does critique destroy your work... or develop it?',
          type: 'introduction'
        },
        {
          id: 'concept',
          title: lang === 'ar' ? '2. Concept' : '2. Concept',
          content: lang === 'ar' ? 'تحليل التصميم وتقديم Feedback لتحسينه.' : 'Analyzing the design and providing Feedback to improve it.',
          type: 'concept'
        },
        {
          id: 'why-it-matters',
          title: lang === 'ar' ? '3. Why It Matters' : '3. Why It Matters',
          content: lang === 'ar' ? 'بيخليك تطور بسرعة' : 'It makes you develop quickly.',
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
          content: lang === 'ar' ? '“الزرار مش واضح” + اقتراح تحسين' : '"The button is not clear" + improvement suggestion.',
          type: 'example'
        },
        {
          id: 'bad-vs-good',
          title: lang === 'ar' ? '6. Bad Vs Good' : '6. Bad Vs Good',
          content: lang === 'ar' ? 'Bad: نقد بدون سبب' : 'Bad: Critique without a reason',
          type: 'bad-vs-good'
        },
        {
          id: 'mistakes',
          title: lang === 'ar' ? '7. Mistakes' : '7. Mistakes',
          content: lang === 'ar' ? '• نقد شخصي\n• رفض النقد' : '• Personal critique\n• Rejecting critique',
          type: 'mistakes'
        },
        {
          id: 'tips',
          title: lang === 'ar' ? '8. Tips' : '8. Tips',
          content: lang === 'ar' ? '• اسأل عن رأي غيرك\n• خليك open' : '• Ask for others’ opinions\n• Be open',
          type: 'tips'
        },
        {
          id: 'activity',
          title: lang === 'ar' ? '9. Activity' : '9. Activity',
          content: lang === 'ar' ? 'اطلب Feedback على تصميم' : 'Ask for Feedback on a design.',
          type: 'activity'
        },
        {
          id: 'summary',
          title: lang === 'ar' ? '10. Summary' : '10. Summary',
          content: lang === 'ar' ? 'Feedback = تطوير مستمر' : 'Feedback = Continuous development',
          type: 'summary'
        },
      ]
    },
  ];

  return {
    id: 'bonus-track',
    title: lang === 'ar' ? 'Bonus Content' : 'Bonus Content',
    emoji: '🎁',
    color: '#F59E0B',
    description: lang === 'ar' ? 'Extra content to boost your design skills' : 'Extra content to boost your design skills',
    topics
  };
};

export const getTracks = (lang: Language): Track[] => {
  return [
    getUXTrack(lang),
    getUITrack(lang),
    getIntegrationTrack(lang),
    getBonusTrack(lang),
  ];
};
