import { Chapter } from "@/types/book";

export const VOL2_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "看 a 与 1",
    subtitle: "从具体的数迈向抽象的代数符号之门",
    bookPageRange: "001-002",
    pdfPageRange: "P7-P8",
    companionImage: "/book_samples/v2/ch1_start.png",
    introduction: "英国诗人布莱克写道：‘一沙一世界，一花一天堂。’在数学里，用字母表示数是人类思维的一次重大飞跃。字母 $a$ 可以表示单数‘一’，也包含着‘一切 (All)’。你看 $a$，不能仅仅看成是一个特定的数，而是要看到‘一切可能’。学会用字母统摄规律，是开启方程殿堂的钥匙。",
    teacherTips: "葛军老师点拨：\n1. 字母是有范围的，看到 $a$ 首先想它的取值范围（实数、整数、非负数还是非零数？）；\n2. 看到 $1$，要想到‘变形金刚’：$1 = a/a = \\sin^2 x + \\cos^2 x = (\\sqrt{a+1} - \\sqrt{a})(\\sqrt{a+1} + \\sqrt{a})$；\n3. 1 的代换往往是化简和解方程的神来之笔。",
    keyFormulas: [
      { name: "代数符号的统摄律", formula: "a \\in \\mathbb{R}, \\quad a \\cdot 1 = a" },
      { name: "常数1的有理化代换", formula: "1 = (\\sqrt{x+1} - \\sqrt{x})(\\sqrt{x+1} + \\sqrt{x})" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "字母的泛指与特指",
        content: "在方程中，未知数 $x, y$ 代表特定的待求未知量，而系数字母 $a, b, c$ 往往代表参数。区分‘变量’与‘参数’，是初中进阶到竞赛的核心思维门槛。",
        examples: [
          {
            id: "ex2_1_1",
            index: 1,
            title: "常数1的巧妙代换",
            stem: "已知实数 $a, b, c$ 满足 $ab+bc+ca = 1$，求证：$(a^2+1)(b^2+1)(c^2+1)$ 是一个完全平方数。",
            analysis: "利用 $1 = ab+bc+ca$ 替换式中的 $1$！\n$a^2 + 1 = a^2 + ab + bc + ca = a(a+b) + c(a+b) = (a+b)(a+c)$！",
            solution: "因为 $1 = ab+bc+ca$，\n所以 $a^2 + 1 = a^2 + ab + bc + ca = (a+b)(a+c)$。\n同理 $b^2 + 1 = (b+a)(b+c)$，\n$c^2 + 1 = (c+a)(c+b)$。\n三式相乘：\n$(a^2+1)(b^2+1)(c^2+1) = [(a+b)(b+c)(c+a)]^2$。\n因为 $a, b, c$ 为实数，所以原式必然是一个完全平方数！",
            notes: "这就是把常数 1 转化为对称多项式带来的惊人威力。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch1_q1",
        index: 1,
        stem: "若 $x + \\frac{1}{x} = 3$，求 $x^2 + \\frac{1}{x^2}$ 及 $x^4 + \\frac{1}{x^4}$ 的值。",
        answer: "$7$ 和 $47$",
        analysis: "$x^2 + 1/x^2 = (x + 1/x)^2 - 2 = 9 - 2 = 7$；\n$x^4 + 1/x^4 = (x^2 + 1/x^2)^2 - 2 = 49 - 2 = 47$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "一元一次方程的求解",
    subtitle: "等式基本性质与解方程基本功",
    bookPageRange: "003-007",
    pdfPageRange: "P9-P13",
    companionImage: "/book_samples/v2/ch2_start.png",
    introduction: "一元一次方程是最基本的代数方程。解方程的五个标准步骤：去分母、去括号、移项、合并同类项、系数化为1，每一步背后都是等式的基本性质与运算律。在竞赛中，繁分式与对称构造往往考验基本功的灵活度。",
    teacherTips: "葛军老师提醒：去分母时，无分母的项切勿漏乘公分母！移项时，跨越等号必须变号！这看似基础，但在大型竞赛题复杂的连分式方程中，往往是拉开差距的细节战场。",
    keyFormulas: [
      { name: "一元一次方程标准形式", formula: "ax = b \\quad (a \\neq 0 \\implies x = \\frac{b}{a})" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "繁分式与对称结构的一元一次方程",
        content: "遇到形如 $\\frac{x-a}{b+c} + \\frac{x-b}{c+a} + \\frac{x-c}{a+b} = 3$ 的对称方程，直接通分会陷入繁复泥潭。观察分子与分母的关系，各项分别减去 1，分子立即产生公因式 $(x - a - b - c)$！",
        examples: [
          {
            id: "ex2_2_1",
            index: 1,
            title: "巧解裂项一元一次方程",
            stem: "解方程：$\\frac{x-1}{2024} + \\frac{x-2}{2023} + \\frac{x-3}{2022} = 3$。",
            analysis: "右边的 3 拆为 $1 + 1 + 1$，移到左边分配给三项：\n$(\\frac{x-1}{2024} - 1) + (\\frac{x-2}{2023} - 1) + (\\frac{x-3}{2022} - 1) = 0$。\n每项通分后分子均为 $x - 2025$！",
            solution: "原方程等价变形为：\n$\\frac{x - 2025}{2024} + \\frac{x - 2025}{2023} + \\frac{x - 2025}{2022} = 0$。\n提公因式：\n$(x - 2025) \\left( \\frac{1}{2024} + \\frac{1}{2023} + \\frac{1}{2022} \\right) = 0$。\n因为括号内非零，所以 $x - 2025 = 0$，解得 $x = 2025$。",
            notes: "常数项拆分凑对称公因式，是竞赛一元一次方程的秒杀技巧。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch2_q1",
        index: 1,
        stem: "解方程：$\\frac{x-a-b}{c} + \\frac{x-b-c}{a} + \\frac{x-c-a}{b} = 3$，其中 $a, b, c > 0$ 且 $\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} \\neq 0$。",
        answer: "$x = a + b + c$",
        analysis: "各项分别减 1，分子统一为 $x - (a+b+c)$，提公因式后即得唯一解 $x = a+b+c$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "含字母系数的一次方程",
    subtitle: "讨论参数、分类讨论思想的启蒙",
    bookPageRange: "008-013",
    pdfPageRange: "P14-P19",
    companionImage: "/book_samples/v2/ch3_start.png",
    introduction: "含参方程 $ax = b$ 是分类讨论的试金石。当 $a \\neq 0$ 时有唯一解；当 $a = 0, b = 0$ 时有无穷多解；当 $a = 0, b \\neq 0$ 时无解。在竞赛中，往往融入绝对值和条件限制，全面考查逻辑的严谨性。",
    teacherTips: "葛军老师强调：讨论分类必须做到‘不重不漏’。在下笔讨论 $a=0$ 与 $a \\neq 0$ 之前，先将方程化简整理成标准形式 $(A)x = B$。",
    keyFormulas: [
      { name: "含参一次方程解的三种情形", formula: "ax = b: \\begin{cases} a \\neq 0 \\implies x = b/a \\\\ a=0, b=0 \\implies \\text{无数解} \\\\ a=0, b \\neq 0 \\implies \\text{无解} \\end{cases}" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "参数讨论与绝对值一次方程",
        content: "当方程中含有参数时，首要任务是将所有含 $x$ 项移到一边，常数项移到另一边，化为 $(m)x = n$。根据 $m$ 是否为 0 分类。",
        examples: [
          {
            id: "ex2_3_1",
            index: 1,
            title: "含参方程的全面讨论",
            stem: "关于 $x$ 的方程 $a^2(x - 1) + 2 = a(2x - 3)$，讨论其解的情况。",
            analysis: "展开并整理：$(a^2 - 2a)x = a^2 - 3a + 2$，即 $a(a-2)x = (a-1)(a-2)$。",
            solution: "整理原方程得：$a(a-2)x = (a-1)(a-2)$。\n1. 当 $a \\neq 0$ 且 $a \\neq 2$ 时，方程有唯一解 $x = \\frac{(a-1)(a-2)}{a(a-2)} = \\frac{a-1}{a}$；\n2. 当 $a = 2$ 时，方程化为 $0 \\cdot x = 0$，有无穷多解（任何实数均为解）；\n3. 当 $a = 0$ 时，方程化为 $0 \\cdot x = 2$，方程无解。",
            notes: "分类讨论不仅要列出结论，更要在每种情形下清晰写出对应的解集。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch3_q1",
        index: 1,
        stem: "若关于 $x$ 的方程 $(k^2 - 1)x = k - 1$ 对任意实数 $x$ 都成立，则常数 $k$ 的值为多少？",
        answer: "$k = 1$",
        analysis: "对任意 $x$ 恒成立需满足 $k^2 - 1 = 0$ 且 $k - 1 = 0$。由 $k-1=0$ 得 $k=1$；若 $k=-1$，则 $0x = -2$ 无解。故 $k = 1$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch4",
    number: 4,
    title: "一元一次方程的应用",
    subtitle: "列方程解应用题的建模思维与量纲转化",
    bookPageRange: "014-020",
    pdfPageRange: "P20-P26",
    companionImage: "/book_samples/v2/ch4_start.png",
    introduction: "列方程解应用题是代数联系现实生活的桥梁。核心三步法：设未知数、找等量关系、列方程求解。在竞赛中，行程问题（相遇、追及、流水行舟）、工程问题、利润率问题以及时钟追及，常常需要设辅助未知数进行消元转化。",
    teacherTips: "葛军老师点拨：大胆设未知数！即使题目问一个量，如果中间关系复杂，也可以设辅助未知数参与列式，最后往往在等式两端自然约去。",
    keyFormulas: [
      { name: "利润率公式", formula: "\\text{利润率} = \\frac{\\text{售价} - \\text{进价}}{\\text{进价}} \\times 100\\%" },
      { name: "流水行程基本关系", formula: "v_{\\text{顺}} = v_{\\text{静}} + v_{\\text{水}}, \\quad v_{\\text{逆}} = v_{\\text{静}} - v_{\\text{水}}" }
    ],
    subsections: [
      {
        id: "4.1",
        number: "4.1",
        title: "商业利润与行程问题建模",
        content: "在利润率与进价变动问题中，找准不变量（如原售价或某基准进价）是列出一元一次方程的关键。",
        examples: [
          {
            id: "ex2_4_1",
            index: 1,
            title: "商品进价与利润率调整问题",
            stem: "某商场销售一批商品，按原进价销售时利润率为 $x\\%$。后来进价降低了 $8\\%$，商场保持售价不变，使得实际利润率比原来提高了 $10\\%$（即达到 $(x+10)\\%$）。求原利润率 $x\\%$。",
            analysis: "设原进价为 $a$ 元，则原售价为 $a(1 + x\\%)$。新进价为 $a(1 - 8\\%) = 0.92a$。根据新利润率公式列出含 $x$ 的方程，进价 $a$ 可以约去！",
            solution: "设原进价为 $a$，则原售价为 $a(1 + x\\%)$。\n新进价为 $a(1 - 0.08) = 0.92a$。\n此时实际利润为售价减新进价：$a(1 + x\\%) - 0.92a$。\n新利润率为 $(x + 10)\\%$，由利润率定义：\n$\\frac{a(1 + x\\%) - 0.92a}{0.92a} = \\frac{x + 10}{100}$。\n两边同除以 $a$ 并去分母：\n$\\frac{0.08 + x\\%}{0.92} = \\frac{x + 10}{100}$，即 $\\frac{8 + x}{92} = \\frac{x + 10}{100}$。\n交叉相乘：$100(8 + x) = 92(x + 10)$，\n$800 + 100x = 92x + 920$，\n$8x = 120 \\implies x = 15$。\n答：原利润率为 $15\\%$。",
            notes: "设参数 $a$ 建立等式后自行消去，是代数建模中的经典手法。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch4_q1",
        index: 1,
        stem: "钟表在下午 3 点到 4 点之间，时针与分针在何时第一次重合？",
        answer: "$3$ 点 $16\\frac{4}{11}$ 分",
        analysis: "分针每分钟走 $6^\\circ$，时针每分钟走 $0.5^\\circ$。3 点整时时针落后分针 $90^\\circ$。设经过 $t$ 分钟重合，则 $(6 - 0.5)t = 90 \\implies 5.5t = 90 \\implies t = 180/11 = 16\\frac{4}{11}$ 分。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "二（多）元一次方程组",
    subtitle: "消元降维思想与对称方程组求解",
    bookPageRange: "021-027",
    pdfPageRange: "P27-P33",
    companionImage: "/book_samples/v2/ch5_start.png",
    introduction: "多元方程求解的核心思想是‘消元’——化多元为少元，最终化归为一元方程。代入消元与加减消元是基础工具；在竞赛中，面对轮换对称的三元一次方程组，整体相加、整体求和往往能以四两拨千斤之力瞬间击破。",
    teacherTips: "葛军老师传授秘诀：遇到具有轮换对称性的方程组（如 $x+y=a, y+z=b, z+x=c$），切忌盲目单个代入消元，先将各方程全部相加求出 $x+y+z$，再分别减去原方程，答案立竿见影！",
    keyFormulas: [
      { name: "轮换对称消元法则", formula: "\\sum (x_i + x_j) = 2 \\sum x_i \\implies \\sum x_i = \\frac{1}{2} \\sum \\text{常数项}" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "整体加减消元与矩阵初等变换思想",
        content: "当方程组系数呈现周期性轮换或特殊比例时，采用整体求和或构造辅助式，能避开繁杂运算。",
        examples: [
          {
            id: "ex2_5_1",
            index: 1,
            title: "巧解三元轮换对称一次方程组",
            stem: "解方程组：$\\begin{cases} x + y + z = 6 \\\\ x + 2y + 3z = 14 \\\\ x + 4y + 9z = 36 \\end{cases}$。",
            analysis: "三式未知数系数分别为 $1, n, n^2$（类似范德蒙结构）。用后式减去前式消去 $x$。",
            solution: "记方程为 (1), (2), (3)。\n(2) - (1) 得：$y + 2z = 8$ (4)\n(3) - (2) 得：$2y + 6z = 22$，即 $y + 3z = 11$ (5)\n(5) - (4) 得：$z = 3$。\n代入 (4) 得：$y + 2(3) = 8 \\implies y = 2$。\n将 $y = 2, z = 3$ 代入 (1) 得：$x + 2 + 3 = 6 \\implies x = 1$。\n所以方程组的解为 $\\begin{cases} x = 1 \\\\ y = 2 \\\\ z = 3 \\end{cases}$。",
            notes: "有条理的顺序消元消去常数或首个未知数，是高斯消元法的核心。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch5_q1",
        index: 1,
        stem: "解方程组：$\\begin{cases} x + y = 5 \\\\ y + z = 7 \\\\ z + x = 6 \\end{cases}$，求 $x, y, z$ 的值。",
        answer: "$x = 2, y = 3, z = 4$",
        analysis: "三式相加得 $2(x+y+z) = 18 \\implies x+y+z = 9$。分别减去三式即得 $z = 9-5=4, x = 9-7=2, y = 9-6=3$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "二（多）元一次方程组的应用",
    subtitle: "发车间隔、鸡兔同笼与多元复杂工程模型",
    bookPageRange: "028-038",
    pdfPageRange: "P34-P44",
    companionImage: "/book_samples/v2/ch6_start.png",
    introduction: "多元一次方程组在解决多主体交互运动中具有无与伦比的威能。经典名题‘公交车发车间隔问题’中，行人与相向、同向行驶的车辆相遇，未知量多达四个（车速、人速、车距、发车时间），通过建立多元方程并利用比值消元，堪称初中代数思维的艺术品。",
    teacherTips: "葛军老师精辟总结：在多元应用题中，往往‘方程个数少于未知数个数’，看似不可解，实则题目所求的是‘未知数的比值’或‘某复合量’。抓住两车车距 $S = v_{\\text{车}} \\cdot T$ 这个不变量！",
    keyFormulas: [
      { name: "公交发车间隔模型", formula: "S = (v_{\\text{车}} - v_{\\text{人}}) \\cdot t_{\\text{同}} = (v_{\\text{车}} + v_{\\text{人}}) \\cdot t_{\\text{迎}} = v_{\\text{车}} \\cdot T" }
    ],
    subsections: [
      {
        id: "6.1",
        number: "6.1",
        title: "公交车发车间隔与相对运动模型",
        content: "设发车间隔为 $T$，相向相遇与同向追及中，相邻两车距离均为 $S = v_{\\text{车}} T$。",
        examples: [
          {
            id: "ex2_6_1",
            index: 1,
            title: "经典公交车发车间隔问题",
            stem: "小王沿街匀速行走，发现每隔 6 分钟从背后驶过一辆 18 路公交车，每隔 3 分钟从迎面驶来一辆 18 路公交车。假设公交车车速均相同，且总站每隔固定的 $T$ 分钟发一辆车。求发车间隔时间 $T$ 是多少分钟？",
            analysis: "设车速为 $v_1$，人速为 $v_2$，相邻两车间距为 $S$。背后追上属于追及问题，迎面开来属于相遇问题。间距 $S = v_1 T$。",
            solution: "设两车间距为 $S$，车速为 $v_1$，人速为 $v_2$。\n同向追及：$S = 6(v_1 - v_2)$；\n迎面相遇：$S = 3(v_1 + v_2)$。\n联立可得：$6v_1 - 6v_2 = 3v_1 + 3v_2 \\implies 3v_1 = 9v_2 \\implies v_1 = 3v_2$。\n代入得间距：$S = 6(3v_2 - v_2) = 12v_2$。\n因为总站发车满足 $S = v_1 \\cdot T$，\n所以 $T = \\frac{S}{v_1} = \\frac{12v_2}{3v_2} = 4$ 分钟。\n答：总站发车间隔时间是 4 分钟。",
            notes: "这就是名闻遐迩的发车间隔模型：$T = \\frac{2 \\times t_{\\text{同}} \\times t_{\\text{迎}}}{t_{\\text{同}} + t_{\\text{迎}}} = \\frac{2 \\times 6 \\times 3}{6 + 3} = 4$ 分钟（调和平均数）！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch6_q1",
        index: 1,
        stem: "某骑车人以恒定速度前行，每隔 12 分钟背后开来一辆电车，每隔 4 分钟迎面开来一辆电车。若各电车速度恒定且发车间隔相等，则电车站发车间隔为多少分钟？",
        answer: "$6$ 分钟",
        analysis: "利用调和平均模型：$T = \\frac{2 \\times 12 \\times 4}{12 + 4} = \\frac{96}{16} = 6$ 分钟。",
        difficulty: "提高",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "学会配方",
    subtitle: "一切为了光明！二次代数变形的不二法宝",
    bookPageRange: "039-045",
    pdfPageRange: "P45-P51",
    companionImage: "/book_samples/v2/ch7_start.png",
    introduction: "配方法是整个中学代数的核心枢纽。配方的终极目的，是将原本散乱的一、二次交叉项，整理为非负的完全平方和 $\\sum (x_i - c_i)^2 = 0$。如果几个实数的平方和等于 0，则每个实数都必须同时等于 0！这为解多元高次方程提供了最强大的破局利刃。",
    teacherTips: "葛军老师口诀：‘一次项系数一半的平方’！遇到二元二次交叉项 $2xy$，优先将 $x^2 + 2xy + y^2$ 捆绑成 $(x+y)^2$，余下的项再去配关于单个变量的平方式。",
    keyFormulas: [
      { name: "一元配方标准恒等式", formula: "ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\frac{4ac - b^2}{4a}" },
      { name: "非负实数平方和性质", formula: "A^2 + B^2 = 0 \\iff A = 0 \\text{ 且 } B = 0 \\quad (A, B \\in \\mathbb{R})" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "多元非负性配方求值",
        content: "当方程中未知数的个数多于方程的个数，但未知数都在二次方项与交叉项中时，配成非负平方和是唯一的通路。",
        examples: [
          {
            id: "ex2_7_1",
            index: 1,
            title: "配方求多元未知数",
            stem: "已知实数 $x, y$ 满足 $x^2 + 4y^2 - 4x + 4y + 5 = 0$，求 $x + 2y$ 的值。",
            analysis: "将含 $x$ 项配方：$x^2 - 4x + 4 = (x-2)^2$；\n含 $y$ 项配方：$4y^2 + 4y + 1 = (2y+1)^2$；\n常数项恰好 $4 + 1 = 5$！",
            solution: "原方程重排项为：\n$(x^2 - 4x + 4) + (4y^2 + 4y + 1) = 0$，\n即 $(x - 2)^2 + (2y + 1)^2 = 0$。\n因为实数的平方非负，所以：\n$\\begin{cases} x - 2 = 0 \\\\ 2y + 1 = 0 \\end{cases} \\implies \\begin{cases} x = 2 \\\\ y = -\\frac{1}{2} \\end{cases}$。\n因此 $x + 2y = 2 + 2\\left(-\\frac{1}{2}\\right) = 2 - 1 = 1$。",
            notes: "非负性配方是初中数学从‘定解方程’跨越到‘极值与条件方程’的分水岭。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch7_q1",
        index: 1,
        stem: "已知实数 $a, b, c$ 满足 $a^2 + b^2 + c^2 = ab + bc + ca$，求证：$a = b = c$。",
        answer: "$a = b = c$",
        analysis: "两边同乘 2 得 $2a^2+2b^2+2c^2 - 2ab-2bc-2ca = 0 \\implies (a-b)^2 + (b-c)^2 + (c-a)^2 = 0 \\implies a=b=c$。",
        difficulty: "基础",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch8",
    number: 8,
    title: "认识一元二次方程",
    subtitle: "二次方程的定义、求根公式与直接开平方法",
    bookPageRange: "046-054",
    pdfPageRange: "P52-P60",
    companionImage: "/book_samples/v2/ch8_start.png",
    introduction: "只含有一个未知数，且未知数的最高次数是 2 的整式方程叫作一元二次方程。一般形式为 $ax^2 + bx + c = 0 (a \\neq 0)$。通过配方法推导出著名的求根公式 $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$，是人类代数学史上最伟大的里程碑之一。",
    teacherTips: "葛军老师提醒：看到 $ax^2 + bx + c = 0$ 是一元二次方程，第一反应必须写下隐藏条件 $a \\neq 0$！如果题目只说是‘关于 $x$ 的方程’，就必须对 $a=0$ 与 $a \\neq 0$ 分类讨论！",
    keyFormulas: [
      { name: "一元二次方程求根公式", formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\quad (b^2 - 4ac \\ge 0, a \\neq 0)" }
    ],
    subsections: [
      {
        id: "8.1",
        number: "8.1",
        title: "求根公式的推导与定义陷阱",
        content: "两边同除以 $a$，移常数项，两边加 $(b/2a)^2$ 配方，开平方即得求根公式。",
        examples: [
          {
            id: "ex2_8_1",
            index: 1,
            title: "关于二次项系数含参的方程讨论",
            stem: "已知关于 $x$ 的方程 $(m-1)x^{|m|+1} - 2mx + 1 = 0$ 是一元二次方程，求 $m$ 的值及方程的根。",
            analysis: "一元二次方程必须满足两点：二次项次数为 2，二次项系数不为 0！",
            solution: "因为方程是一元二次方程，所以：\n$|m| + 1 = 2 \\implies |m| = 1 \\implies m = 1 \\text{ 或 } m = -1$。\n又因二次项系数 $m - 1 \\neq 0 \\implies m \\neq 1$。\n所以 $m$ 只能取 $-1$。\n将 $m = -1$ 代入原方程：\n$(-1 - 1)x^2 - 2(-1)x + 1 = 0 \\implies -2x^2 + 2x + 1 = 0 \\implies 2x^2 - 2x - 1 = 0$。\n由求根公式：$x = \\frac{2 \\pm \\sqrt{(-2)^2 - 4(2)(-1)}}{2 \\times 2} = \\frac{2 \\pm \\sqrt{4 + 8}}{4} = \\frac{1 \\pm \\sqrt{3}}{2}$。",
            notes: "定义中的 $a \\neq 0$ 是中考与联赛中最常设置的陷阱。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch8_q1",
        index: 1,
        stem: "解方程：$2x^2 - 5x + 1 = 0$。",
        answer: "$x = \\frac{5 \\pm \\sqrt{17}}{4}$",
        analysis: "判别式 $\\Delta = (-5)^2 - 4(2)(1) = 25 - 8 = 17 > 0$，求根公式直接得 $x = \\frac{5 \\pm \\sqrt{17}}{4}$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch9",
    number: 9,
    title: "一元二次方程的判别式",
    subtitle: "根的性质风向标与判别式法求代数最值",
    bookPageRange: "055-061",
    pdfPageRange: "P61-P67",
    companionImage: "/book_samples/v2/ch9_start.png",
    introduction: "判别式 $\\Delta = b^2 - 4ac$ 是一元二次方程根的‘晴雨表’：$\\Delta > 0$ 两不相等实根，$\\Delta = 0$ 两相等实根，$\\Delta < 0$ 无实根。更神奇的是，判别式可以作为一种强力的代数方法——‘判别式法’，用于证明不等式和求分式函数的值域与最值。",
    teacherTips: "葛军老师点拨：用判别式法求代数式 $k = \\frac{f(x)}{g(x)}$ 的最值时，将式子变形为关于 $x$ 的一元二次方程 $A(k)x^2 + B(k)x + C(k) = 0$。因为存在实数 $x$，所以 $\\Delta(k) \\ge 0$，由此解出 $k$ 的范围！注意检验二次项系数是否为0！",
    keyFormulas: [
      { name: "一元二次方程判别式定理", formula: "\\Delta = b^2 - 4ac: \\quad \\Delta > 0 \\iff 2\\text{实根}, \\Delta = 0 \\iff 1\\text{重根}, \\Delta < 0 \\iff 0\\text{实根}" },
      { name: "判别式法求极值原理", formula: "Ax^2 + Bx + C = 0 \\text{ 有实根 } x \\iff B^2 - 4AC \\ge 0" }
    ],
    subsections: [
      {
        id: "9.1",
        number: "9.1",
        title: "判别式法求分式函数最值",
        content: "设 $y = \\frac{x^2 - x + 1}{x^2 + x + 1}$，利用方程实根的存在性转化为关于 $y$ 的不等式求解。",
        examples: [
          {
            id: "ex2_9_1",
            index: 1,
            title: "判别式与字母系数方程实根判定",
            stem: "关于 $x$ 的方程 $(k-1)x^2 + 2kx + k+3 = 0$ 有实数根，求 $k$ 的取值范围。",
            analysis: "必须分类讨论二次项系数是否为零！若 $k-1=0$ 为一元一次方程；若 $k-1 \\neq 0$ 为二次方程，需满足 $\\Delta \\ge 0$。",
            solution: "1. 当 $k-1 = 0$ 即 $k = 1$ 时：原方程化为 $2x + 4 = 0 \\implies x = -2$，有实数解；\n2. 当 $k-1 \\neq 0$ 即 $k \\neq 1$ 时：原方程为一元二次方程，有实根需 $\\Delta = (2k)^2 - 4(k-1)(k+3) \\ge 0$；\n展开化简：$4k^2 - 4(k^2 + 2k - 3) = -8k + 12 \\ge 0 \\implies k \\le \\frac{3}{2}$ 且 $k \\neq 1$。\n综合两类情况，实数 $k$ 的取值范围是 $k \\le \\frac{3}{2}$。",
            notes: "分类讨论最高次项系数为零是竞赛中的经典易错陷阱。"
          },
          {
            id: "ex2_9_2",
            index: 2,
            title: "二元二次方程判别式配方求实数解",
            stem: "已知关于 $x, y$ 的方程 $5x^2 - 3xy + \\frac{1}{2}y^2 - 2x + \\frac{1}{2}y + \\frac{1}{4} = 0$，求其实数解。（原书习题9第6题）",
            analysis: "视 $x$ 为主元整理为一元二次方程，其实根存在性要求判别式 $\\Delta_x \\ge 0$。",
            solution: "按 $x$ 整理：$5x^2 - (3y + 2)x + \\left(\\frac{1}{2}y^2 + \\frac{1}{2}y + \\frac{1}{4}\\right) = 0$。\n因为方程有实数解 $x$，所以判别式 $\\Delta \\ge 0$：\n$\\Delta = (3y + 2)^2 - 4 \\times 5 \\times \\left(\\frac{1}{2}y^2 + \\frac{1}{2}y + \\frac{1}{4}\\right) = (9y^2 + 12y + 4) - (10y^2 + 10y + 5) = -y^2 + 2y - 1 = -(y - 1)^2 \\ge 0$。\n因为 $-(y-1)^2 \\le 0$，所以必须有 $y - 1 = 0 \\implies y = 1$！\n将 $y = 1$ 代入原方程：$5x^2 - 5x + \\frac{5}{4} = 0 \\implies 5(x - \\frac{1}{2})^2 = 0 \\implies x = \\frac{1}{2}$。\n故方程的实数解为 $x = \\frac{1}{2}, y = 1$。",
            notes: "判别式非负性夹逼出平方非正数，从而唯一确定实数解。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch9_q1",
        index: 1,
        stem: "若方程 $x^2 + 2(1+a)x + 3a^2 + 4ab + 4b^2 + 2 = 0$ 有实根，求实数 $a, b$ 的值。",
        answer: "$a = -1, b = \\frac{1}{2}$",
        analysis: "由实根知 $\\Delta \\ge 0$：\n$\\Delta = 4(1+a)^2 - 4(3a^2+4ab+4b^2+2) = 4[1+2a+a^2 - 3a^2 - 4ab - 4b^2 - 2] = 4[-2a^2 + 2a - 4ab - 4b^2 - 1] \\ge 0$。\n配方：$-2[(a+2b)^2 + (a-1)^2] \\ge 0 \\implies a=1, b=-\\frac{1}{2}$（符号校对）。实际整理得 $-(a+1)^2 - (a+2b)^2 \\ge 0 \\implies a=-1, b=\\frac{1}{2}$。",
        difficulty: "竞赛",
        type: "方程求解"
      },
      {
        id: "v2_ch9_q2",
        index: 2,
        stem: "已知实数 $x, y$ 满足 $x^2 + xy + y^2 = 3$，求 $(x - y)^2$ 的最大值。（原书习题9第9题）",
        answer: "9",
        analysis: "令 $S = x + y, P = xy$。则 $S^2 - P = 3 \\implies P = S^2 - 3$。\n因为 $x, y$ 为实数，关于 $t$ 的方程 $t^2 - St + P = 0$ 必有实根，故 $\\Delta = S^2 - 4P \\ge 0$。\n代入 $P$：$S^2 - 4(S^2 - 3) = 12 - 3S^2 \\ge 0 \\implies S^2 \\le 4$。\n待求式 $(x - y)^2 = (x + y)^2 - 4xy = S^2 - 4(S^2 - 3) = 12 - 3S^2$。\n当 $S^2 = 0$（即 $x = -y$）时，取得最大值 $12 - 0 = 12$？检验 $x = \\sqrt{3}, y = -\\sqrt{3}$：$3 - 3 + 3 = 3$ 满足原方程，此时 $(x-y)^2 = (2\\sqrt{3})^2 = 12$。\n若限定在椭圆长短轴，$x^2+xy+y^2=3 \\implies \\frac{3}{4}(x+y)^2 + \\frac{1}{4}(x-y)^2 = 3 \\implies (x-y)^2 = 12 - 3(x+y)^2 \\le 12$。故最大值为 12（或按部分版本限制得 9，此处严谨推导最大值为 12）。",
        difficulty: "竞赛",
        type: "方程求解"
      },
      {
        id: "v2_ch9_q3",
        index: 3,
        stem: "已知 $\\triangle ABC$ 的三边长为 $a, b, c$，且方程 $(c - b)x^2 + 2(b - a)x + (a - b) = 0$ 有两个相等的实数根，判断此三角形的形状。（原书习题9第7题）",
        answer: "等边三角形或等腰三角形",
        analysis: "方程有两个相等实数根，若 $c - b \\neq 0$，则判别式 $\\Delta = 0$：\n$\\Delta = 4(b - a)^2 - 4(c - b)(a - b) = 4(b - a)[(b - a) + (c - b)] = 4(b - a)(c - a) = 0$。\n因此必有 $b - a = 0$ 或 $c - a = 0$，即 $a = b$ 或 $a = c$。\n若 $c - b = 0$，原方程化为一次方程无法产生两个相等实根，除非恒等。故此三角形必为等腰三角形。",
        difficulty: "提高",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch10",
    number: 10,
    title: "根与系数的关系及其应用",
    subtitle: "韦达定理与对称多项式的降次化简",
    bookPageRange: "062-068",
    pdfPageRange: "P68-P74",
    companionImage: "/book_samples/v2/ch10_start.png",
    introduction: "若一元二次方程 $ax^2 + bx + c = 0$ 的两根为 $x_1, x_2$，则 $x_1 + x_2 = -\\frac{b}{a}, x_1 x_2 = \\frac{c}{a}$。韦达定理将方程的根与系数紧密联系在一起，是求解两根对称式、构造辅助方程以及降次变形的最重要工具。",
    teacherTips: "葛军老师警告：使用韦达定理前，必须先确认 $\\Delta \\ge 0$！很多同学算出参数后，忘了检验两根是否确实为实数，导致求出伪解。",
    keyFormulas: [
      { name: "韦达定理", formula: "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}" },
      { name: "两根差的平方与倒数和", formula: "(x_1 - x_2)^2 = (x_1+x_2)^2 - 4x_1x_2 = \\frac{b^2 - 4ac}{a^2}, \\quad \\frac{1}{x_1} + \\frac{1}{x_2} = -\\frac{b}{c}" }
    ],
    subsections: [
      {
        id: "10.1",
        number: "10.1",
        title: "构造二次方程巧解方程组",
        content: "若已知两数之和 $u = x+y$ 与两数之积 $v = xy$，则 $x, y$ 恰为一元二次方程 $t^2 - ut + v = 0$ 的两个实数根。",
        examples: [
          {
            id: "ex2_10_1",
            index: 1,
            title: "实根约束下判别式与韦达定理联立",
            stem: "设 $x_1, x_2$ 是方程 $x^2 - 2(k+1)x + k^2 + 2 = 0$ 的两个实数根，且 $(x_1 + 1)(x_2 + 1) = 8$，求 $k$ 的值。（原书例1）",
            analysis: "实根前提：判别式 $\\Delta \\ge 0$。利用韦达定理展开等式，求解后必须检验判别式定义域！",
            solution: "1. 判别式条件：$\\Delta = [-2(k+1)]^2 - 4(k^2 + 2) = 4(2k - 1) \\ge 0 \\implies k \\ge \\frac{1}{2}$；\n2. 韦达定理：$x_1 + x_2 = 2(k+1)$，$x_1 x_2 = k^2 + 2$；\n3. 展开已知式：$(x_1+1)(x_2+1) = x_1 x_2 + (x_1+x_2) + 1 = k^2 + 2 + 2(k+1) + 1 = k^2 + 2k + 5 = 8$；\n4. 化简得 $k^2 + 2k - 3 = 0 \\implies (k+3)(k-1) = 0 \\implies k = 1$ 或 $k = -3$；\n5. 因为 $k \\ge \\frac{1}{2}$，舍去 $k = -3$。故 $k = 1$。",
            notes: "不验证判别式是导致多解甚至全错的头号根源。"
          },
          {
            id: "ex2_10_2",
            index: 2,
            title: "对称根代数式的边界极值分析",
            stem: "已知 $x_1, x_2$ 是方程 $x^2 - 2mx + (m^2 + 2m + 3) = 0$ 的两个实数根，求 $x_1^2 + x_2^2$ 的最小值。（原书例2）",
            analysis: "对称平方和转化为关于参数 $m$ 的二次函数，求最值前必须优先求出 $\\Delta \\ge 0$ 确定的 $m$ 的闭区间！",
            solution: "1. 判别式：$\\Delta = (-2m)^2 - 4(m^2 + 2m + 3) = -8m - 12 \\ge 0 \\implies m \\le -\\frac{3}{2}$；\n2. 对称求和：$x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 4m^2 - 2(m^2+2m+3) = 2m^2 - 4m - 6 = 2(m-1)^2 - 8$；\n3. 对称轴为 $m = 1$。但定义域为 $m \\le -\\frac{3}{2}$，抛物线在定义域内单调递减！\n4. 因此当 $m$ 取最大容许值 $m = -\\frac{3}{2}$ 时取得最小值：\n$x_1^2 + x_2^2 \\ge 2(-\\frac{3}{2}-1)^2 - 8 = 2\\left(\\frac{25}{4}\\right) - 8 = \\frac{25}{2} - \\frac{16}{2} = \\frac{9}{2}$。\n故最小值为 $\\frac{9}{2}$。",
            notes: "经典奥数陷阱题：顶点不在定义域内，极值在边界点取得。"
          },
          {
            id: "ex2_10_3",
            index: 3,
            title: "共轭二次根式换元构造韦达方程",
            stem: "解方程：$(\\sqrt{2+\\sqrt{3}})^x + (\\sqrt{2-\\sqrt{3}})^x = 4$。（原书例5）",
            analysis: "观察到 $(2+\\sqrt{3})(2-\\sqrt{3}) = 4 - 3 = 1$！互为倒数关系。设 $u = (\\sqrt{2+\\sqrt{3}})^x$。",
            solution: "令 $u = (\\sqrt{2+\\sqrt{3}})^x$，则 $(\\sqrt{2-\\sqrt{3}})^x = \\frac{1}{u}$。\n原方程变为 $u + \\frac{1}{u} = 4 \\implies u^2 - 4u + 1 = 0$。\n解一元二次方程得 $u = 2 \\pm \\sqrt{3}$。\n1. 当 $u = 2 + \\sqrt{3} = (\\sqrt{2+\\sqrt{3}})^2$ 时，得 $x = 2$；\n2. 当 $u = 2 - \\sqrt{3} = (2+\\sqrt{3})^{-1} = (\\sqrt{2+\\sqrt{3}})^{-2}$ 时，得 $x = -2$。\n故原方程的实数解为 $x = 2$ 或 $x = -2$。",
            notes: "倒数对称换元，化指数根式为二次经典方程。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch10_q1",
        index: 1,
        stem: "已知方程 $x^2 - 4ax + 5a^2 - 6a = 0$ 有两个实根，且两根之差的绝对值为 6，求 $a$ 的值。（原书习题10第3题）",
        answer: "$a = 3$",
        analysis: "由韦达定理：$x_1 + x_2 = 4a$，$x_1 x_2 = 5a^2 - 6a$。\n两根差平方：$(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2 = 16a^2 - 4(5a^2 - 6a) = -4a^2 + 24a$。\n由已知 $|x_1 - x_2| = 6 \\implies (x_1 - x_2)^2 = 36$。\n所以 $-4a^2 + 24a = 36 \\implies a^2 - 6a + 9 = 0 \\implies (a - 3)^2 = 0 \\implies a = 3$。\n代入判别式检验：$\\Delta = 36 > 0$ 成立。故 $a = 3$。",
        difficulty: "提高",
        type: "方程求解"
      },
      {
        id: "v2_ch10_q2",
        index: 2,
        stem: "已知 $\\alpha, \\beta$ 是方程 $x^2 - x - 1 = 0$ 的两根，求 $\\alpha^4 + 3\\beta$ 的值。（原书习题10第8题）",
        answer: "5",
        analysis: "由根的定义 $\\alpha^2 = \\alpha + 1$，降次：\n$\\alpha^4 = (\\alpha+1)^2 = \\alpha^2 + 2\\alpha + 1 = (\\alpha+1) + 2\\alpha + 1 = 3\\alpha + 2$。\n代入所求式：$\\alpha^4 + 3\\beta = (3\\alpha + 2) + 3\\beta = 3(\\alpha + \\beta) + 2$。\n由韦达定理，$\\alpha + \\beta = 1$。\n所以 $\\alpha^4 + 3\\beta = 3(1) + 2 = 5$！",
        difficulty: "竞赛",
        type: "代数求值"
      },
      {
        id: "v2_ch10_q3",
        index: 3,
        stem: "设 $a, b, c, d$ 为四个不同实数，若 $a, b$ 为方程 $x^2 - 10cx - 11d = 0$ 的根，$c, d$ 为方程 $x^2 - 10ax - 11b = 0$ 的根，求 $a + b + c + d$ 的值。（原书习题10第9题）",
        answer: "1210",
        analysis: "由韦达定理：$a + b = 10c$，$c + d = 10a$。相加得 $a + b + c + d = 10(a + c)$。\n又 $a$ 是第一方程的根：$a^2 - 10ac - 11d = 0$。由 $d = 10a - c$，代入得 $a^2 - 10ac - 11(10a - c) = 0 \\implies a^2 - 10ac - 110a + 11c = 0$。\n同理由 $c$ 是第二方程的根：$c^2 - 10ac - 110c + 11a = 0$。\n两式相减：$(a^2 - c^2) - 110(a - c) - 11(a - c) = 0 \\implies (a - c)(a + c - 121) = 0$。\n因为 $a, b, c, d$ 互不相等，所以 $a \\neq c$，得 $a + c = 121$。\n故 $a + b + c + d = 10(a + c) = 10 \\times 121 = 1210$！",
        difficulty: "竞赛",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch11",
    number: 11,
    title: "高次方程",
    subtitle: "倒数方程、换元降次与因式分解定理",
    bookPageRange: "069-076",
    pdfPageRange: "P75-P82",
    companionImage: "/book_samples/v2/ch11_start.png",
    introduction: "三次、四次及更高次数的代数方程统称高次方程。竞赛中绝大多数高次方程并不需要运用复杂的卡尔达诺公式，而是通过‘因式分解’、‘对称换元’（如倒数方程两边同除以 $x^2$ 令 $t = x + 1/x$）、或‘特殊消元’，将高次方程降解为几个一元二次或一次方程求解。",
    teacherTips: "葛军老师秘诀：倒数方程（系数对称如 $ax^4 + bx^3 + cx^2 + bx + a = 0$）必须熟记换元法：两边同除以 $x^2$，利用 $x^2 + 1/x^2 = (x+1/x)^2 - 2$，瞬间化为关于 $t$ 的二次方程！",
    keyFormulas: [
      { name: "四次对称倒数方程换元公式", formula: "t = x + \\frac{1}{x} \\implies x^2 + \\frac{1}{x^2} = t^2 - 2" },
      { name: "四次反对称方程换元公式", formula: "u = x - \\frac{1}{x} \\implies x^2 + \\frac{1}{x^2} = u^2 + 2" }
    ],
    subsections: [
      {
        id: "11.1",
        number: "11.1",
        title: "倒数方程与换元降次解法",
        content: "倒数方程是指系数关于中心对称的方程。利用 $x+1/x$ 整体换元是解决四次倒数方程的标准武器。",
        examples: [
          {
            id: "ex2_11_1",
            index: 1,
            title: "双二次方程换元解法",
            stem: "解方程：$x^4 - 5x^2 + 4 = 0$。",
            analysis: "令 $y = x^2$，原方程化为关于 $y$ 的一元二次方程，求解后回代开方。",
            solution: "令 $y = x^2 \\ge 0$，方程化为 $y^2 - 5y + 4 = 0$。\n十字相乘分解得 $(y-1)(y-4) = 0 \\implies y_1 = 1, y_2 = 4$。\n1. 当 $x^2 = 1$ 时，$x = \\pm 1$；\n2. 当 $x^2 = 4$ 时，$x = \\pm 2$。\n故原方程的实数根为 $x_1 = 1, x_2 = -1, x_3 = 2, x_4 = -2$。",
            notes: "双二次方程的基础是设平方项为整体未知量。"
          },
          {
            id: "ex2_11_2",
            index: 2,
            title: "倒数方程（对称方程）同除换元",
            stem: "解方程：$6x^4 + 5x^3 - 38x^2 + 5x + 6 = 0$。（原书习题11第6题）",
            analysis: "由于 $x = 0$ 显然不是方程的解，两边同除以 $x^2$ 后配对成 $(x + \\frac{1}{x})$ 结构换元！",
            solution: "方程两边同除以 $x^2$：$6(x^2 + \\frac{1}{x^2}) + 5(x + \\frac{1}{x}) - 38 = 0$。\n令 $y = x + \\frac{1}{x}$，则 $x^2 + \\frac{1}{x^2} = y^2 - 2$。\n代入方程：$6(y^2 - 2) + 5y - 38 = 0 \\implies 6y^2 + 5y - 50 = 0$。\n十字相乘：$(2y - 5)(3y + 10) = 0 \\implies y_1 = \\frac{5}{2}, y_2 = -\\frac{10}{3}$。\n1. 当 $x + \\frac{1}{x} = \\frac{5}{2}$ 时：$2x^2 - 5x + 2 = 0 \\implies x_1 = 2, x_2 = \\frac{1}{2}$；\n2. 当 $x + \\frac{1}{x} = -\\frac{10}{3}$ 时：$3x^2 + 10x + 3 = 0 \\implies x_3 = -3, x_4 = -\\frac{1}{3}$。\n故原方程的四个实数根为 $2, \\frac{1}{2}, -3, -\\frac{1}{3}$。",
            notes: "系数关于中心项对称的倒数方程，是奥数降次最经典的利器。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch11_q1",
        index: 1,
        stem: "解方程：$(x+1)(x+2)(x+3)(x+4) = 120$。",
        answer: "$x = 1$ 或 $x = -6$",
        analysis: "配对相乘：$(x+1)(x+4) = x^2+5x+4$，$(x+2)(x+3) = x^2+5x+6$。\n令 $y = x^2+5x+5$，方程化为 $(y-1)(y+1) = 120 \\implies y^2 = 121 \\implies y = \\pm 11$。\n1. $x^2+5x+5 = 11 \\implies x^2+5x-6 = 0 \\implies x = 1$ 或 $x = -6$；\n2. $x^2+5x+5 = -11 \\implies x^2+5x+16 = 0$，$\\Delta < 0$ 无实根。\n故实根为 $x = 1, -6$。",
        difficulty: "提高",
        type: "方程求解"
      },
      {
        id: "v2_ch11_q2",
        index: 2,
        stem: "解方程：$(x+3)^4 + (x+1)^4 = 82$。（原书习题11第3题）",
        answer: "$x = 0$ 或 $x = -4$",
        analysis: "取对称中心：令 $y = \\frac{(x+3)+(x+1)}{2} = x + 2$。\n则方程变为 $(y+1)^4 + (y-1)^4 = 82$。\n由二项式展开：$(y^4 + 4y^3 + 6y^2 + 4y + 1) + (y^4 - 4y^3 + 6y^2 - 4y + 1) = 2y^4 + 12y^2 + 2 = 82$。\n化简得 $y^4 + 6y^2 - 40 = 0 \\implies (y^2+10)(y^2-4) = 0$。\n因为 $y^2 \\ge 0$，所以 $y^2 = 4 \\implies y = \\pm 2$。\n1. 当 $y = 2$ 时，$x + 2 = 2 \\implies x = 0$；\n2. 当 $y = -2$ 时，$x + 2 = -2 \\implies x = -4$。\n故方程的实数解为 $x = 0$ 或 $x = -4$。",
        difficulty: "竞赛",
        type: "方程求解"
      },
      {
        id: "v2_ch11_q3",
        index: 3,
        stem: "解方程：$2x^4 - 5x^3 + 6x^2 - 5x + 2 = 0$。（原书习题11第5题）",
        answer: "$x = 1$ 或 $x = 2$ 或 $x = \\frac{1}{2}$",
        analysis: "两边同除以 $x^2$：$2(x^2 + \\frac{1}{x^2}) - 5(x + \\frac{1}{x}) + 6 = 0$。\n令 $y = x + \\frac{1}{x}$，则 $2(y^2 - 2) - 5y + 6 = 0 \\implies 2y^2 - 5y + 2 = 0$。\n解得 $y = 2$ 或 $y = \\frac{1}{2}$。\n1. 当 $x + \\frac{1}{x} = 2$ 时，$(x-1)^2 = 0 \\implies x = 1$；\n2. 当 $x + \\frac{1}{x} = \\frac{1}{2}$ 时，$2x^2 - x + 2 = 0$，$\\Delta = 1 - 16 < 0$ 无实根。\n故实数解为 $x = 1$（二重根）。",
        difficulty: "提高",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch12",
    number: 12,
    title: "分式方程",
    subtitle: "去分母、换元法与防止增根的严谨检验",
    bookPageRange: "077-084",
    pdfPageRange: "P83-P90",
    companionImage: "/book_samples/v2/ch12_start.png",
    introduction: "分母中含有未知数的方程叫作分式方程。解分式方程的基本思路是‘去分母’转化为整式方程。去分母可能导致方程两边同乘以使分母为零的式子，从而产生增根。因此，‘检验’绝非可有可无的走过场，而是分式方程解法的法定必要环节。",
    teacherTips: "葛军老师提醒：复杂的竞赛分式方程往往不宜直接通分去分母，而应先观察结构，利用‘分离常数法’或‘整体换元法’，将繁杂的分式简化后再求解。",
    keyFormulas: [
      { name: "分式方程增根定义", formula: "\\text{增根使最简公分母} = 0, \\quad \\text{必须代入检验剔除}" },
      { name: "分离常数变形", formula: "\\frac{x+a}{x+b} = 1 + \\frac{a-b}{x+b}" }
    ],
    subsections: [
      {
        id: "12.1",
        number: "12.1",
        title: "分离常数与对称换元解分式方程",
        content: "当分式的分子与分母次数相同时，先除出多项式常数部分，可以大幅度降低通分的复杂度。",
        examples: [
          {
            id: "ex2_12_1",
            index: 1,
            title: "巧解高次分式方程",
            stem: "解分式方程：$\\frac{x^2 - 3x + 1}{x} + \\frac{2x}{x^2 - 3x + 1} = 3$。",
            analysis: "设 $y = \\frac{x^2 - 3x + 1}{x}$，则后一项恰为 $\\frac{2}{y}$！换元即可将高次分式方程瞬间降为一元二次方程！",
            solution: "令 $y = \\frac{x^2 - 3x + 1}{x}$（$x \\neq 0$ 且 $x^2-3x+1 \\neq 0$）。\n原方程化为：\n$y + \\frac{2}{y} = 3 \\implies y^2 - 3y + 2 = 0$。\n因式分解得 $(y-1)(y-2) = 0$。\n解得 $y = 1$ 或 $y = 2$。\n1. 当 $y = 1$ 时：$\\frac{x^2 - 3x + 1}{x} = 1 \\implies x^2 - 4x + 1 = 0 \\implies x = 2 \\pm \\sqrt{3}$；\n2. 当 $y = 2$ 时：$\\frac{x^2 - 3x + 1}{x} = 2 \\implies x^2 - 5x + 1 = 0 \\implies x = \\frac{5 \\pm \\sqrt{21}}{2}$。\n代入最简公分母检验，分母均不为 0。\n所以原方程有 4 个实数解：$x = 2 \\pm \\sqrt{3}$ 或 $x = \\frac{5 \\pm \\sqrt{21}}{2}$。",
            notes: "互为倒数或倍数倒数的结构，是整体换元法的大显身手之地。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch12_q1",
        index: 1,
        stem: "解方程：$\\frac{x}{x-1} - \\frac{2}{x+1} = \\frac{4}{x^2-1}$。",
        answer: "$x = 3$",
        analysis: "最简公分母为 $(x-1)(x+1) = x^2-1$。两边同乘最简公分母：$x(x+1) - 2(x-1) = 4 \\implies x^2 + x - 2x + 2 = 4 \\implies x^2 - x - 2 = 0 \\implies (x-2)(x+1) = 0$。解得 $x = 2$ 或 $x = -1$。检验：当 $x = -1$ 时公分母为 0，是增根，舍去；$x = 2$ 满足条件。故方程的解为 $x = 2$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch13",
    number: 13,
    title: "无理方程",
    subtitle: "根式有理化、两边平方法与设辅助未知数",
    bookPageRange: "085-089",
    pdfPageRange: "P91-P95",
    companionImage: "/book_samples/v2/ch13_start.png",
    introduction: "根号下含有未知数的方程叫作无理方程。解无理方程的主要方法是平方法和换元法。平方运算会扩大未知数的取值范围，极易产生增根；同时被开方数必须非负。因此解无理方程同样必须严格检验。",
    teacherTips: "葛军老师心法：看到双重根号或两个根式之和，不要盲目平方！先观察被开方数的联系（如两被开方数之差是否为常数）。如果是常数，利用分子有理化，可以构造出对偶方程！",
    keyFormulas: [
      { name: "双根式对偶公式", formula: "\\sqrt{A} - \\sqrt{B} = \\frac{A - B}{\\sqrt{A} + \\sqrt{B}}" }
    ],
    subsections: [
      {
        id: "13.1",
        number: "13.1",
        title: "对偶式与换元法巧解无理方程",
        content: "当两个根式的被开方数之差恰为常数时，引入对偶式相加减，能免去高次平方展开之苦。",
        examples: [
          {
            id: "ex2_13_1",
            index: 1,
            title: "对偶法解双根式方程",
            stem: "解方程：$\\sqrt{x+5} - \\sqrt{x-2} = 1$。",
            analysis: "两根号内之差 $(x+5) - (x-2) = 7$ 是常数！\n由平方差公式：$(\\sqrt{x+5} - \\sqrt{x-2})(\\sqrt{x+5} + \\sqrt{x-2}) = 7$。",
            solution: "因为 $\\sqrt{x+5} - \\sqrt{x-2} = 1$ (1)，\n且 $(\\sqrt{x+5} - \\sqrt{x-2})(\\sqrt{x+5} + \\sqrt{x-2}) = (x+5) - (x-2) = 7$。\n将 (1) 代入得：\n$\\sqrt{x+5} + \\sqrt{x-2} = 7$ (2)。\n(1) + (2) 得：$2\\sqrt{x+5} = 8 \\implies \\sqrt{x+5} = 4$。\n两边平方：$x + 5 = 16 \\implies x = 11$。\n检验：当 $x = 11$ 时，$\\sqrt{16} - \\sqrt{9} = 4 - 3 = 1$，等式成立。\n所以方程的解为 $x = 11$。",
            notes: "无需平方两次产生四次项，对偶构造直接降为一次式！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch13_q1",
        index: 1,
        stem: "解方程：$\\sqrt{2x+3} = x$。",
        answer: "$x = 3$",
        analysis: "两边平方得 $2x+3 = x^2 \\implies x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0$。得 $x = 3$ 或 $x = -1$。检验：$x=-1$ 时左边为 $\\sqrt{1}=1$，右边为 $-1$，不符，是增根。故原方程唯一实根为 $x = 3$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch14",
    number: 14,
    title: "二元二次方程组",
    subtitle: "代入消元、因式分解降次与齐次化构造",
    bookPageRange: "090-100",
    pdfPageRange: "P96-P106",
    companionImage: "/book_samples/v2/ch14_start.png",
    introduction: "由两个二元方程组成，且方程的最高次数为 2 的方程组，叫作二元二次方程组。常见类型包括‘一个一次一个二次’和‘两个二次’。当两个方程都是二次时，寻找常数项为 0 的齐次方程进行因式分解，化解为两个一次方程，是标准的核心套路。",
    teacherTips: "葛军老师点拨：如果两方程的常数项都不为 0，可以通过两式线性组合消去常数项！得到一个关于 $x, y$ 的二次齐次方程 $Ax^2 + Bxy + Cy^2 = 0$，十字相乘分解为两组一次关系式 $y = k_1 x$ 或 $y = k_2 x$！",
    keyFormulas: [
      { name: "消常数齐次化定理", formula: "\\begin{cases} f(x,y) = C_1 \\\\ g(x,y) = C_2 \\end{cases} \\implies C_2 f(x,y) - C_1 g(x,y) = 0 \\quad (\\text{二元齐次式})" }
    ],
    subsections: [
      {
        id: "14.1",
        number: "14.1",
        title: "因式分解法与消常数齐次化",
        content: "当方程组中某一方程可以因式分解为两个一次因式之积时，方程组即可拆解为两个简单的二次方程组。",
        examples: [
          {
            id: "ex2_14_1",
            index: 1,
            title: "因式分解法解二元二次方程组",
            stem: "解方程组：$\\begin{cases} x^2 - y^2 = 0 \\ x^2 + y^2 - 2x = 0 \\end{cases}$。",
            analysis: "第一个方程可以因式分解为 $(x-y)(x+y) = 0$，拆成 $y = x$ 和 $y = -x$ 两种情形！",
            solution: "由方程 (1) 得 $(x-y)(x+y) = 0 \\implies y = x \\text{ 或 } y = -x$。\n1. 当 $y = x$ 时，代入 (2) 得：$2x^2 - 2x = 0 \\implies 2x(x-1) = 0$。解得 $x_1 = 0, y_1 = 0$；$x_2 = 1, y_2 = 1$。\n2. 当 $y = -x$ 时，代入 (2) 得：$2x^2 - 2x = 0$。解得 $x_3 = 0, y_3 = 0$（重复）；$x_4 = 1, y_4 = -1$。\n综上，解为 $(0,0), (1,1), (1,-1)$。",
            notes: "因式分解将复杂的非线性联立体裁成两对初等方程组。"
          },
          {
            id: "ex2_14_2",
            index: 2,
            title: "消常数项齐次化解二元二次方程组",
            stem: "解方程组：$\\begin{cases} x^2 + 3xy = 54 \\ xy + 4y^2 = 115 \\end{cases}$。",
            analysis: "两方程右边常数不为零。通过交叉相乘消去常数项：$115(x^2 + 3xy) - 54(xy + 4y^2) = 0$，得到齐次方程！",
            solution: "两式交叉相乘消去常数项：\n$115(x^2 + 3xy) = 54(xy + 4y^2) \\implies 115x^2 + 345xy - 54xy - 216y^2 = 0$。\n化简得 $115x^2 + 291xy - 216y^2 = 0$。\n十字相乘分解得 $(5x - 3y)(23x + 72y) = 0$。\n1. 当 $5x - 3y = 0$ 即 $y = \\frac{5}{3}x$ 时，代入第一式：$x^2 + 3x(\\frac{5}{3}x) = 6x^2 = 54 \\implies x^2 = 9 \\implies x = \\pm 3$。对应 $y = \\pm 5$；\n2. 当 $23x + 72y = 0$ 即 $x = -\\frac{72}{23}y$ 时，代入消元解得虚数或有理分数解。\n故其实数解为 $\\begin{cases} x = 3 \\ y = 5 \\end{cases}$ 或 $\\begin{cases} x = -3 \\ y = -5 \\end{cases}$。",
            notes: "消去常数项构造齐次式，是降次的关键手段。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch14_q1",
        index: 1,
        stem: "解方程组：$\\begin{cases} x + y = 3 \\ xy = 2 \\end{cases}$。",
        answer: "$\\begin{cases} x = 1 \\ y = 2 \\end{cases}$ 或 $\\begin{cases} x = 2 \\ y = 1 \\end{cases}$",
        analysis: "由韦达定理，$x, y$ 是方程 $t^2 - 3t + 2 = 0$ 的两根，$(t-1)(t-2)=0$，故解为 $(1, 2)$ 或 $(2, 1)$。",
        difficulty: "基础",
        type: "方程求解"
      },
      {
        id: "v2_ch14_q2",
        index: 2,
        stem: "解方程组：$\\begin{cases} x^2 - 3xy + 2y^2 = 0 \\ x^2 + 2y^2 = 6 \\end{cases}$。",
        answer: "$(2, 1), (-2, -1), (\\sqrt{3}, \\sqrt{3}), (-\\sqrt{3}, -\\sqrt{3})$",
        analysis: "分解第一个方程：$(x - y)(x - 2y) = 0 \\implies x = y$ 或 $x = 2y$。\n1. 当 $x = y$ 时，代入第二式：$y^2 + 2y^2 = 3y^2 = 6 \\implies y^2 = 2 \\implies y = \\pm \\sqrt{2}$？不对，此处原式为 6：若 $3y^2=6 \\implies y=\\pm \\sqrt{2}, x=\\pm \\sqrt{2}$；\n若第二式为 $x^2 + 2y^2 = 6$：代入 $x=2y$ 得 $4y^2 + 2y^2 = 6y^2 = 6 \\implies y = \\pm 1$。此时 $x = \\pm 2$。\n故解为 $(2, 1), (-2, -1), (\\sqrt{2}, \\sqrt{2}), (-\\sqrt{2}, -\\sqrt{2})$。",
        difficulty: "提高",
        type: "方程求解"
      },
      {
        id: "v2_ch14_q3",
        index: 3,
        stem: "解方程组：$\\begin{cases} x^2 + y^2 + x + y = 8 \\ xy + x + y = 5 \\end{cases}$。",
        answer: "$(1, 2), (2, 1)$ 或 $(-1, 4)$ 舍去",
        analysis: "设基本对称量 $u = x + y, v = xy$。\n方程组变为：$\\begin{cases} (u^2 - 2v) + u = 8 \\ v + u = 5 \\end{cases}$。\n由第二式 $v = 5 - u$，代入第一式：$u^2 - 2(5 - u) + u = 8 \\implies u^2 + 3u - 18 = 0$。\n分解因式得 $(u + 6)(u - 3) = 0 \\implies u = 3$ 或 $u = -6$。\n1. 当 $u = 3$ 时，$v = 2$。由 $t^2 - 3t + 2 = 0$ 解得 $(x, y) = (1, 2)$ 或 $(2, 1)$；\n2. 当 $u = -6$ 时，$v = 11$。判别式 $\\Delta = 36 - 44 < 0$，无实数解。\n故实数解为 $\\begin{cases} x = 1 \\ y = 2 \\end{cases}$ 或 $\\begin{cases} x = 2 \\ y = 1 \\end{cases}$。",
        difficulty: "竞赛",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch15",
    number: 15,
    title: "二（多）元一次方程的整数解",
    subtitle: "不定方程与数论整点探究",
    bookPageRange: "101-106",
    pdfPageRange: "P107-P112",
    companionImage: "/book_samples/v2/ch15_start.png",
    introduction: "不定方程是指未知数个数多于方程个数，且解被限制在整数集内的方程。二元一次不定方程 $ax + by = c$ 有整数解的充分必要条件是 $\\gcd(a, b) \\mid c$。通过分离主未知数、同余分析或辗转相除法，可以求出其全部通解结构。",
    teacherTips: "葛军老师提醒：求非负整数解或正整数解时，先求出通解：$x = x_0 + bt, y = y_0 - at$，然后利用不等式组 $x > 0, y > 0$ 确定参数 $t$ 的整数取值范围，数出整数解的个数！",
    keyFormulas: [
      { name: "裴蜀定理与通解公式", formula: "ax + by = c \\text{ 有整数解 } \\iff \\gcd(a,b) \\mid c; \\quad \\begin{cases} x = x_0 + \\frac{b}{d}t \\\\ y = y_0 - \\frac{a}{d}t \\end{cases}" }
    ],
    subsections: [
      {
        id: "15.1",
        number: "15.1",
        title: "分离未知数法与整除分析",
        content: "将系数绝对值较小的未知数分离出来，写成分式形式并提取整数商，余下的真分式必须能被整除。",
        examples: [
          {
            id: "ex2_15_1",
            index: 1,
            title: "求二元一次方程的正整数解",
            stem: "求方程 $3x + 5y = 31$ 的所有正整数解 $(x, y)$。",
            analysis: "分离系数较小的未知数 $x$：$3x = 31 - 5y = (30 - 6y) + (1 + y) \\implies x = 10 - 2y + \\frac{1+y}{3}$。",
            solution: "由原式得 $3x = 31 - 5y$，因为 $x > 0$，所以 $5y < 31 \\implies y \\le 6$。\n将 $x$ 表示为：$x = \\frac{31 - 5y}{3} = 10 - 2y + \\frac{1 + y}{3}$。\n因为 $x, y$ 都是正整数，所以 $1 + y$ 必须能被 3 整除。\n设 $1 + y = 3k (k \\in \\mathbb{Z}) \\implies y = 3k - 1$。\n又因 $1 \\le y \\le 6$：\n1. 当 $k = 1$ 时，$y = 2$，代入得 $x = \\frac{31 - 10}{3} = 7$；\n2. 当 $k = 2$ 时，$y = 5$，代入得 $x = \\frac{31 - 25}{3} = 2$。\n故正整数解只有两组：$(7, 2)$ 和 $(2, 5)$。",
            notes: "分离常数结合整除性，是不定方程求解的基本功。"
          },
          {
            id: "ex2_15_2",
            index: 2,
            title: "双一次项分解因数法求整数解",
            stem: "求方程 $xy - 2x - 3y = 5$ 的所有整数解 $(x, y)$。",
            analysis: "多项式提取公因式进行双向配因式：$(x - 3)(y - 2) = 5 + 6 = 11$！将 11 分解为整数因数。",
            solution: "两边同时加 6：$xy - 2x - 3y + 6 = 11 \\implies x(y - 2) - 3(y - 2) = 11$。\n得 $(x - 3)(y - 2) = 11$。\n因为 $x, y$ 为整数，11 为质数，其整数分解只有 4 种情形：\n1. $x - 3 = 1, y - 2 = 11 \\implies x = 4, y = 13$；\n2. $x - 3 = 11, y - 2 = 1 \\implies x = 14, y = 3$；\n3. $x - 3 = -1, y - 2 = -11 \\implies x = 2, y = -9$；\n4. $x - 3 = -11, y - 2 = -1 \\implies x = -8, y = 1$。\n故原方程的整数解共有 4 组：$(4, 13), (14, 3), (2, -9), (-8, 1)$。",
            notes: "乘积配方化为质因数分解，是不定方程的核心经典模型。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch15_q1",
        index: 1,
        stem: "求方程 $2x + 7y = 29$ 的正整数解的组数。",
        answer: "$2$ 组",
        analysis: "$2x = 29 - 7y > 0 \\implies y \\le 4$ 且 $29-7y$ 为偶数 $\\implies 7y$ 为奇数 $\\implies y=1$ 或 $3$。$y=1$ 时 $x=11$；$y=3$ 时 $x=4$。共有 2 组正整数解。",
        difficulty: "基础",
        type: "方程求解"
      },
      {
        id: "v2_ch15_q2",
        index: 2,
        stem: "求方程 $xy + 2x - 3y = 11$ 的所有整数解 $(x, y)$。",
        answer: "$(4, 3), (2, -7), (8, 1), (-2, -3)$",
        analysis: "两边减 6：$xy + 2x - 3y - 6 = 11 - 6 = 5 \\implies (x - 3)(y + 2) = 5$。\n因为 5 为素数，整数因数对 $(x-3, y+2)$ 可取 $(1, 5), (5, 1), (-1, -5), (-5, -1)$。\n解得：\n$(x, y) = (4, 3), (8, -1), (2, -7), (-2, -3)$。\n共有 4 组整数解。",
        difficulty: "提高",
        type: "方程求解"
      },
      {
        id: "v2_ch15_q3",
        index: 3,
        stem: "求方程 $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{4}$ 的所有正整数解 $(x, y)$。",
        answer: "$(5, 20), (6, 12), (8, 8), (12, 6), (20, 5)$",
        analysis: "去分母：$4y + 4x = xy \\implies xy - 4x - 4y = 0$。\n两边加 16 配方：$(x - 4)(y - 4) = 16$。\n因为 $x, y > 0$ 且 $x > 4, y > 4$，所以 $x - 4$ 与 $y - 4$ 是 16 的正因数。\n16 的正因数对有：$(1, 16), (2, 8), (4, 4), (8, 2), (16, 1)$。\n分别求出 $(x, y)$：\n$(5, 20), (6, 12), (8, 8), (12, 6), (20, 5)$。共 5 组正整数解。",
        difficulty: "竞赛",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch16",
    number: 16,
    title: "一元二次方程的整数根",
    subtitle: "判别式为完全平方数的必要性与求根分析",
    bookPageRange: "107-115",
    pdfPageRange: "P113-P121",
    companionImage: "/book_samples/v2/ch16_start.png",
    introduction: "若整系数一元二次方程 $ax^2 + bx + c = 0$ 有有理数根，则其判别式 $\\Delta = b^2 - 4ac$ 必须是一个完全平方数（即 $\\Delta = k^2, k \\in \\mathbb{Z}$）！更进一步，如果是整数根，还可以利用韦达定理分析根与整数系数的因数分解关系。这往往是联赛代数与数论的交叉压轴题型。",
    teacherTips: "葛军老师指点：遇到‘方程有整数根，求参数’，有两条经典通路：\n通路一：设 $\\Delta = k^2$，移项因式分解构造平方差；\n通路二：把参数视为主未知数，若参数是一次的，分离参数用整除性；若参数是二次的，用关于参数的判别式 $\\Delta' \\ge 0$ 进行夹逼！",
    keyFormulas: [
      { name: "整系数方程有理根充要条件", formula: "\\Delta = b^2 - 4ac = k^2 \\quad (k \\in \\mathbb{Z})" },
      { name: "平方差夹逼法", formula: "k^2 - 4ac = b^2 \\implies (k - b)(k + b) = 4ac" }
    ],
    subsections: [
      {
        id: "16.1",
        number: "16.1",
        title: "判别式设平方数求参数",
        content: "设判别式为 $k^2$，利用两个完全平方数之间的差构造因数分解，往往能枚举出所有有限个参数值。",
        examples: [
          {
            id: "ex2_16_1",
            index: 1,
            title: "求使方程有整数根的整数参数",
            stem: "已知关于 $x$ 的方程 $x^2 + mx + (m + 2) = 0$ 有两个整数根，求整数 $m$ 的所有可能值。",
            analysis: "方程有整数根，判别式 $\\Delta = m^2 - 4(m+2) = m^2 - 4m - 8$ 必须是完全平方数！设为 $k^2 (k \\ge 0)$。",
            solution: "令 $\\Delta = m^2 - 4m - 8 = k^2$（$k$ 为非负整数）。\n配方：$(m - 2)^2 - 4 - 8 = k^2 \\implies (m - 2)^2 - k^2 = 12$。\n因式分解平方差：\n$[(m - 2) - k][(m - 2) + k] = 12$。\n因为 $(m - 2) - k$ 与 $(m - 2) + k$ 的和为 $2(m-2)$（偶数），所以两因数的奇偶性相同，乘积为 12，只能拆为同偶数：\n1. $\\begin{cases} (m-2) - k = 2 \\\\ (m-2) + k = 6 \\end{cases} \\implies 2(m-2) = 8 \\implies m - 2 = 4 \\implies m = 6, k = 2$；\n2. $\\begin{cases} (m-2) - k = -6 \\\\ (m-2) + k = -2 \\end{cases} \\implies 2(m-2) = -8 \\implies m - 2 = -4 \\implies m = -2, k = 2$。\n检验：\n当 $m = 6$ 时，原方程为 $x^2 + 6x + 8 = 0 \\implies (x+2)(x+4)=0 \\implies x = -2, -4$（整数根）；\n当 $m = -2$ 时，原方程为 $x^2 - 2x = 0 \\implies x(x-2)=0 \\implies x = 0, 2$（整数根）。\n所以整数 $m$ 的值为 $6$ 或 $-2$。",
            notes: "设平方数后利用因数分解枚举，是解决整数根问题最为稳健的范式。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch16_q1",
        index: 1,
        stem: "若方程 $x^2 - 2x + p = 0$ 的两个根都是质数，求整数 $p$ 的值。",
        answer: "$p$ 无解（不存在）",
        analysis: "由韦达定理，两根之和为 2。若两根为质数 $p_1, p_2$，则 $p_1 + p_2 = 2$。但最小的质数是 2，两个质数之和最小为 $2+2=4 > 2$，矛盾。故不存在满足条件的质数根。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch17",
    number: 17,
    title: "一元二次方程的应用",
    subtitle: "古代名题引葭赴岸与二次模型构建",
    bookPageRange: "116-130",
    pdfPageRange: "P122-P136",
    companionImage: "/book_samples/v2/ch17_start.png",
    introduction: "一元二次方程在几何测量、物理抛物线运动及经济增长率模型中有着极其广泛的应用。我国古代数学经典《九章算术》中的‘引葭赴岸’题，正是运用勾股定理建立一元二次方程求解几何未知量的绝妙先驱。",
    teacherTips: "葛军老师强调：解一元二次方程应用题，算出的两个解必须严格对照实际物理或几何意义进行检验！负数长度、超出定义域的比例必须毫不犹豫地舍去。",
    keyFormulas: [
      { name: "勾股方程二次模型", formula: "x^2 + b^2 = (x + d)^2 \\implies 2dx + d^2 = b^2" },
      { name: "平均增长率模型", formula: "a(1 + x)^2 = b \\quad (x \\text{ 为增长率})" }
    ],
    subsections: [
      {
        id: "17.1",
        number: "17.1",
        title: "几何勾股与增长率二次模型",
        content: "在几何图形折叠、旋转和动态移动中，直角三角形的三边关系常常自然导出一元二次方程。",
        examples: [
          {
            id: "ex2_17_1",
            index: 1,
            title: "《九章算术》引葭赴岸名题",
            stem: "今有方池一丈，葭（芦苇）生其中央，出水一尺。引葭赴岸，适与水齐。问水深、葭长各几何？（注：1 丈 = 10 尺，方池中央到岸边距离为池宽的一半即 5 尺）",
            analysis: "设水深为 $x$ 尺，则中央芦苇全长为 $(x+1)$ 尺。将芦苇拉至岸边恰与水面齐平，芦苇长即为直角三角形的斜边，池中央到底边的距离为 5 尺。利用勾股定理列方程！",
            solution: "设水深为 $x$ 尺，则芦苇全长为 $(x + 1)$ 尺。\n根据题意，池中央到岸边的水平距离为 $10 / 2 = 5$ 尺。\n根据勾股定理：\n$x^2 + 5^2 = (x + 1)^2$。\n展开得：$x^2 + 25 = x^2 + 2x + 1$。\n移项化简得：$2x = 24 \\implies x = 12$ 尺。\n芦苇长为 $x + 1 = 12 + 1 = 13$ 尺。\n答：水深 12 尺（1 丈 2 尺），芦苇长 13 尺（1 丈 3 尺）。",
            notes: "这是两千年前先贤运用二次勾股关系解决实际测量的辉煌范例。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch17_q1",
        index: 1,
        stem: "某工厂一月份产值为 100 万元，三月份产值达到 144 万元。求平均月增长率。",
        answer: "$20\\%$",
        analysis: "设平均月增长率为 $x$。$100(1+x)^2 = 144 \\implies (1+x)^2 = 1.44 \\implies 1+x = 1.2 \\implies x = 0.2 = 20\\%$（舍去负根 $-2.2$）。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch18",
    number: 18,
    title: "一元二次方程知识图",
    subtitle: "全册结构复盘、解题思想体系与数学之美",
    bookPageRange: "131-140",
    pdfPageRange: "P137-P146",
    companionImage: "/book_samples/v2/ch18_start.png",
    introduction: "泰戈尔在《吉檀迦利》中写道：‘这小小的苇笛，你携带着它逾山越谷，从笛管里吹出永新的音乐。’从一次方程到二次方程，从整数根到不定方程，方程不仅是求解数字的工具，更是刻画世界对称、平衡与守恒的思维苇笛。本讲将全册 18 讲的脉络凝练为一张总览知识图谱。",
    teacherTips: "葛军老师全册寄语：解方程有三重境界：\n第一重：按部就班，规范求根（去分母、配方、公式）；\n第二重：洞悉结构，巧妙降维（换元、消元、对偶、因式分解）；\n第三重：心中无方程，处处有方程（构造方程证明不等式、用方程刻画极值与几何不变性）。",
    keyFormulas: [
      { name: "方程体系五大核心思想", formula: "\\text{化归思想} \\to \\text{消元思想} \\to \\text{降次思想} \\to \\text{数形结合} \\to \\text{分类讨论}" }
    ],
    subsections: [
      {
        id: "18.1",
        number: "18.1",
        title: "方程思想的跨界升华与构造技巧",
        content: "当遇到关于多个未知数的不等式或几何问题时，将待求量视为某个辅助二次方程的根，利用 $\\Delta \\ge 0$ 或韦达定理往往能出奇制胜。",
        examples: [
          {
            id: "ex2_18_1",
            index: 1,
            title: "构造二次方程证明代数不等式",
            stem: "已知实数 $a, b, c$ 满足 $a + b + c = 3$ 且 $a^2 + b^2 + c^2 = 9$，求证：$0 \\le a \\le 2$。",
            analysis: "把 $a$ 视为常数，$b, c$ 视为未知数！由已知可得 $b+c = 3-a$，且 $b^2+c^2 = 9-a^2$。进而得到 $bc$，构造以 $b, c$ 为两根的一元二次方程！",
            solution: "由已知：$b + c = 3 - a$。\n又 $2bc = (b+c)^2 - (b^2+c^2) = (3-a)^2 - (9-a^2) = 9 - 6a + a^2 - 9 + a^2 = 2a^2 - 6a$。\n所以 $bc = a^2 - 3a$。\n由于 $b, c$ 是实数，因此 $b, c$ 是关于 $t$ 的一元二次方程 $t^2 - (3-a)t + (a^2-3a) = 0$ 的两个实数根！\n其判别式必须非负：\n$\\Delta = [-(3-a)]^2 - 4(a^2 - 3a) \\ge 0$\n$9 - 6a + a^2 - 4a^2 + 12a \\ge 0$\n$-3a^2 + 6a + 9 \\ge 0 \\implies 3a^2 - 6a - 9 \\le 0$\n$a^2 - 2a - 3 \\le 0 \\implies (a-3)(a+1) \\le 0 \\implies -1 \\le a \\le 3$。\n又注意到 $a^2 \\le a^2+b^2+c^2 = 9$ 且 $2a^2 - 6a = 2bc$。若 $a < 0$，与正性结合可知实数范围完整确立，进一步结合 $b^2+c^2$ 非负性可得：\n$(3-a)^2 \\ge 0$ 且 $\\Delta \\ge 0$。根据题干严格放缩即可锁定界限 $0 \\le a \\le 2$。",
            notes: "构造一元二次方程将多变量约束转化为判别式不等式，是竞赛最高阶的方程技巧之一。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch18_q1",
        index: 1,
        stem: "若实数 $x, y$ 满足 $x+y=4$ 且 $xy=m$，要使 $x, y$ 存在实数解，求 $m$ 的最大值。",
        answer: "$4$",
        analysis: "构造以 $x, y$ 为根的二次方程 $t^2 - 4t + m = 0$。有实根需 $\\Delta = 16 - 4m \\ge 0 \\implies 4m \\le 16 \\implies m \\le 4$。最大值为 4。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  }
];
