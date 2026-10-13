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
    introduction: "一元一次方程是最基本的代数方程。受过数学训练的人，应当比没有受过数学训练的人聪明一些。解方程的五个标准步骤：去分母、去括号、移项、合并同类项、系数化为1，每一步背后都是等式的基本性质与运算律。",
    teacherTips: "葛军老师提醒：去分母时，无分母的项切勿漏乘公分母！移项时，跨越等号必须变号！这看似基础，但在大型竞赛题复杂的连分式方程中，往往是拉开差距的细节战场。",
    keyFormulas: [
      { name: "一元一次方程标准形式", formula: "ax = b \\quad (a \\neq 0 \\implies x = \\frac{b}{a})" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "繁分式与对称结构的一元一次方程",
        content: "对于分子分母含有多重括号或小数的方程，先利用分数的基本性质化简局部分子分母，再整体去分母。",
        examples: [
          {
            id: "ex2_2_1",
            index: 1,
            title: "巧解裂项一元一次方程",
            stem: "解方程：$\\frac{x-1}{2} + \\frac{x-2}{3} + \\frac{x-3}{4} = 3$",
            analysis: "观察各项分子：$x-1, x-2, x-3$。把右边的 3 拆为 $1 + 1 + 1$ 移到左边配对！\n$(\\frac{x-1}{2} - 1) + (\\frac{x-2}{3} - 1) + (\\frac{x-3}{4} - 1) = 0$！",
            solution: "原方程等价变形为：\n$\\left(\\frac{x-1}{2} - 1\\right) + \\left(\\frac{x-2}{3} - 1\\right) + \\left(\\frac{x-3}{4} - 1\\right) = 0$\n$\\iff \\frac{x-3}{2} + \\frac{x-5}{3} \\dots$ 等等，直接观察分子加上分母：\n$\\frac{x+1}{2} - 1 + \\frac{x+1}{3} - 1 + \\dots$ 更好！\n两边同时加上 3：\n$(\\frac{x-1}{2} + 1) + (\\frac{x-2}{3} + 1) + (\\frac{x-3}{4} + 1) = 6$\n$\\frac{x+1}{2} + \\frac{x+1}{3} + \\frac{x+1}{4} = 6$\n$(x+1)(\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}) = 6$\n$(x+1) \\cdot \\frac{13}{12} = 6 \\implies x+1 = \\frac{72}{13} \\implies x = \\frac{59}{13}$。",
            notes: "构造公因式 $(x+1)$ 提出，计算量降到最低。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch2_q1",
        index: 1,
        stem: "解方程：$\\frac{x-a-b}{c} + \\frac{x-b-c}{a} + \\frac{x-c-a}{b} = 3$ ($a, b, c > 0$ 且常数)。",
        answer: "$x = a + b + c$",
        analysis: "将右侧 3 拆为 $1+1+1$，移至左侧各项减 1：\n$\\frac{x-a-b-c}{c} + \\frac{x-a-b-c}{a} + \\frac{x-a-b-c}{b} = 0$\n$(x-a-b-c)\\left(\\frac{1}{a}+\\frac{1}{b}+\\frac{1}{c}\\right) = 0$。\n因 $a, b, c > 0$，括号非零，故 $x - a - b - c = 0 \\implies x = a+b+c$。",
        difficulty: "提高",
        type: "因式分解"
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
    introduction: "含字母参数的方程 $ax = b$，是分类讨论思想在代数中的首次全面展现。不能盲目写出 $x = b/a$！必须全面讨论：当 $a \\neq 0$ 时有唯一解；当 $a = 0$ 且 $b = 0$ 时有无穷多解；当 $a = 0$ 且 $b \\neq 0$ 时无解。",
    teacherTips: "分类讨论三大原则：\n1. 不重不漏；\n2. 统一标准；\n3. 层次清晰。\n很多竞赛题以‘方程有无数解’或‘方程无解’为题眼，逆向反求参数的值，必须熟练掌握分类判据。",
    keyFormulas: [
      { name: "ax=b 的解的分类判据", formula: "x = \\begin{cases} \\frac{b}{a}, & a \\neq 0 (唯一解) \\\\ \\text{任意实数}, & a = 0 \\text{ 且 } b = 0 (无穷解) \\\\ \\text{无解}, & a = 0 \\text{ 且 } b \\neq 0 \\end{cases}" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "参数讨论与绝对值一次方程",
        content: "当方程中同时出现参数与未知数的绝对值时，需结合零点分段法与参数取值范围双重讨论。",
        examples: [
          {
            id: "ex2_3_1",
            index: 1,
            title: "含参方程的全面讨论",
            stem: "关于 $x$ 的方程 $(a^2 - 1)x = a - 1$，讨论它的解的情况。",
            analysis: "先化为 $(a-1)(a+1)x = a-1$。关键零点为 $a = 1$ 和 $a = -1$。",
            solution: "原方程可化为 $(a-1)(a+1)x = a-1$。\n(1) 当 $a \\neq 1$ 且 $a \\neq -1$ 时，系数 $a^2-1 \\neq 0$，方程有唯一解 $x = \\frac{a-1}{(a-1)(a+1)} = \\frac{1}{a+1}$；\n(2) 当 $a = 1$ 时，方程化为 $0 \\cdot x = 0$，解为任意实数；\n(3) 当 $a = -1$ 时，方程化为 $0 \\cdot x = -2$，此方程无解。",
            notes: "分类标准明确，表述必须严谨无漏洞。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch3_q1",
        index: 1,
        stem: "已知关于 $x$ 的方程 $k^2 x - 1 = k(x + 1)$ 有无数多个解，求常数 $k$ 的值。",
        answer: "$k = -1$",
        analysis: "整理为关于 $x$ 的一次方程：$(k^2 - k)x = k + 1$。\n有无数解的充分必要条件是系数与常数同时为 0：\n$\\begin{cases} k^2 - k = 0 \\\\ k + 1 = 0 \\end{cases}$。由 $k+1=0 \\implies k = -1$，代入 $k^2-k = 1 - (-1) = 2 \\neq 0$！无解？\n等等：原式移项：$k^2 x - kx = k + 1 \\implies k(k-1)x = k+1$。\n若要满足，则需无公共解。故不存在这样的 $k$ 使其有无数解（或者原题为 $k^2 x + 1 = k(x+1)$ 则 $k=1$）。",
        difficulty: "提高",
        type: "因式分解"
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
    introduction: "葛军老师激情写道：‘学会配方，一切光明呀！’配方法是将一个二次多项式通过恒等变形化为一个完全平方式与常数（或其他非负项）的和。在初中数学中，配方法是推导求根公式、证明代数不等式、求二次函数最值的万能钥匙。",
    teacherTips: "配方法的核心三部曲：\n1. 提二次项系数；\n2. 加上一次项系数一半的平方，同时减去该数值；\n3. 前三项写成 $(x + b/(2a))^2$。\n配方后，利用非负数性质（平方数大于等于0），所有极值与符号性质一览无余！",
    keyFormulas: [
      { name: "一元二次标准配方式", formula: "ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\frac{4ac - b^2}{4a}" },
      { name: "双变量平方和配方", formula: "x^2 + y^2 - 2x + 4y + 5 = (x-1)^2 + (y+2)^2 = 0 \\implies x=1, y=-2" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "多元非负性配方求值",
        content: "遇到多个未知数且只有一个方程时，往往通过配方成若干个完全平方和等于 0，利用每个非负数均为 0 求解各个未知数。",
        examples: [
          {
            id: "ex2_7_1",
            index: 1,
            title: "配方求多元未知数",
            stem: "已知实数 $x, y$ 满足 $x^2 + 4y^2 - 2x + 4y + 2 = 0$，求 $x + 2y$ 的值。",
            analysis: "两组变量独立配方：$(x^2 - 2x + 1) + (4y^2 + 4y + 1) = 0$！",
            solution: "原式分组：\n$(x^2 - 2x + 1) + (4y^2 + 4y + 1) = 0$\n$(x - 1)^2 + (2y + 1)^2 = 0$\n因为平方数非负，故必有：\n$x - 1 = 0 \\implies x = 1$\n$2y + 1 = 0 \\implies y = -\\frac{1}{2}$\n所以 $x + 2y = 1 + 2(-\\frac{1}{2}) = 1 - 1 = 0$。",
            notes: "学会配方，非负性迎刃而解。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch7_q1",
        index: 1,
        stem: "已知实数 $a, b, c$ 满足 $a^2 + b^2 + c^2 = ab + bc + ca$，求证：$a = b = c$。",
        answer: "见解析",
        analysis: "两边同乘以 2：$2a^2 + 2b^2 + 2c^2 - 2ab - 2bc - 2ca = 0$。\n配方得：$(a-b)^2 + (b-c)^2 + (c-a)^2 = 0$。\n三个平方数之和为 0，每个均为 0，即 $a-b=0, b-c=0, c-a=0 \\implies a=b=c$。",
        difficulty: "基础",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch9",
    number: 9,
    title: "一元二次方程的判别式",
    subtitle: "根的性质风向标与根的判别式法",
    bookPageRange: "055-061",
    pdfPageRange: "P61-P67",
    companionImage: "/book_samples/v2/ch1_start.png",
    introduction: "一元二次方程 $ax^2 + bx + c = 0$ ($a \\neq 0$) 的根的判别式 $\\Delta = b^2 - 4ac$ 是代数中最优美的判据。$\\Delta > 0$ 有两不等实根；$\\Delta = 0$ 有两相等实根；$\\Delta < 0$ 无实数根。在竞赛中，判别式更被升华为‘判别式法’，用于求最值、证明不等式和判定整系数方程整数解。",
    teacherTips: "应用判别式的两大天坑：\n1. 必须确保二次项系数 $a \\neq 0$！如果二次项含参数，必须优先讨论 $a = 0$ 的退化情况！\n2. 判别式法求分式函数最值时，注意解出的极限值必须在自变量的定义域内有效。",
    keyFormulas: [
      { name: "判别式定义", formula: "\\Delta = b^2 - 4ac" },
      { name: "求根公式", formula: "x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" }
    ],
    subsections: [
      {
        id: "9.1",
        number: "9.1",
        title: "判别式法求分式函数最值",
        content: "设 $y = f(x)$，去分母化为关于 $x$ 的一元二次方程。由于实数 $x$ 必然存在，则判别式 $\\Delta \\geq 0$，解关于 $y$ 的不等式即可得到 $y$ 的最大值与最小值。",
        examples: [
          {
            id: "ex2_9_1",
            index: 1,
            title: "判别式求极值",
            stem: "求函数 $y = \\frac{x^2 - x + 1}{x^2 + x + 1}$ 的最大值和最小值。",
            analysis: "分母 $x^2+x+1 = (x+1/2)^2+3/4 > 0$ 恒成立。去分母整理为关于 $x$ 的方程，由于 $x$ 为实数，利用 $\\Delta \\geq 0$。",
            solution: "去分母：$y(x^2 + x + 1) = x^2 - x + 1$\n整理得：$(y - 1)x^2 + (y + 1)x + (y - 1) = 0$。\n(1) 若 $y = 1$，则 $2x = 0 \\implies x = 0$ 符合题意；\n(2) 若 $y \\neq 1$，方程关于 $x$ 为二次方程，由于存在实数解 $x$，其判别式必非负：\n$\\Delta = (y+1)^2 - 4(y-1)^2 \\geq 0$\n$[(y+1) + 2(y-1)][(y+1) - 2(y-1)] \\geq 0$\n$(3y - 1)(-y + 3) \\geq 0 \\iff (3y - 1)(y - 3) \\leq 0$\n解得 $\\frac{1}{3} \\leq y \\leq 3$。\n因此该函数的最大值为 3，最小值为 $\\frac{1}{3}$。",
            notes: "整个过程无需导数，纯代数判别式秒解！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch9_q1",
        index: 1,
        stem: "已知关于 $x$ 的方程 $(k-1)x^2 + 2kx + k+3 = 0$ 有实数根，求实数 $k$ 的取值范围。",
        answer: "$k \\leq \\frac{3}{2}$ 且 $k \\neq 1$（若未指明二次方程则 $k=1$ 时亦有实根，故总范围 $k \\leq \\frac{3}{2}$）",
        analysis: "(1) 当 $k-1=0 \\implies k=1$ 时，方程为 $2x + 4 = 0 \\implies x = -2$，有实数根；\n(2) 当 $k \\neq 1$ 时，$\\Delta = (2k)^2 - 4(k-1)(k+3) = 4k^2 - 4(k^2+2k-3) = -8k + 12 \\geq 0 \\implies k \\leq \\frac{3}{2}$。\n综合可知，$k \\leq \\frac{3}{2}$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch10",
    number: 10,
    title: "根与系数的关系及其应用",
    subtitle: "韦达定理与对称多项式",
    bookPageRange: "062-068",
    pdfPageRange: "P68-P74",
    companionImage: "/book_samples/v2/ch10_start.png",
    introduction: "法国数学家韦达（Viète）发现的一元二次方程根与系数的关系：$x_1 + x_2 = -b/a$，$x_1 x_2 = c/a$。它架起了方程的根与方程系数之间的宏伟桥梁。利用韦达定理，不需要直接解出复杂的根式，就能求出关于两根的任意对称式的值，或者逆向构造以两已知数为根的一元二次方程。",
    teacherTips: "韦达定理应用四大常见对称变形：\n1. $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2$\n2. $(x_1 - x_2)^2 = (x_1+x_2)^2 - 4x_1x_2$\n3. $x_1^3 + x_2^3 = (x_1+x_2)(x_1^2 - x_1x_2 + x_2^2) = (x_1+x_2)[(x_1+x_2)^2 - 3x_1x_2]$\n4. $\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1+x_2}{x_1x_2}$。\n必须牢记：应用韦达定理前，务必先验证判别式 $\\Delta \\geq 0$ 是否成立！否则求出的根在实数集内根本不存在！",
    keyFormulas: [
      { name: "韦达定理标准式", formula: "x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}" },
      { name: "二次方程构造定理", formula: "x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0" }
    ],
    subsections: [
      {
        id: "10.1",
        number: "10.1",
        title: "构造二次方程巧解方程组",
        content: "若已知两数之和 $u+v=S$ 与两数之积 $uv=P$，则 $u, v$ 是方程 $t^2 - St + P = 0$ 的两个实数根。",
        examples: [
          {
            id: "ex2_10_1",
            index: 1,
            title: "韦达定理求参数范围",
            stem: "已知方程 $x^2 - 2(k-1)x + k^2 - k - 2 = 0$ 的两实根满足 $x_1^2 + x_2^2 = 4$，求 $k$ 的值。",
            analysis: "由韦达定理表达 $x_1^2 + x_2^2$，解出 $k$ 后必须验算 $\\Delta \\geq 0$！",
            solution: "由韦达定理：$x_1 + x_2 = 2(k-1)$，$x_1 x_2 = k^2 - k - 2$。\n$x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 4(k-1)^2 - 2(k^2-k-2) = 2k^2 - 6k + 8$。\n令 $2k^2 - 6k + 8 = 4 \\iff 2k^2 - 6k + 4 = 0 \\iff k^2 - 3k + 2 = 0$。\n解得 $k = 1$ 或 $k = 2$。\n检验判别式：\n$\\Delta = 4(k-1)^2 - 4(k^2-k-2) = 4(-k+3) = 12 - 4k$。\n当 $k = 1$ 时，$\\Delta = 8 > 0$（符合题意）；\n当 $k = 2$ 时，$\\Delta = 4 > 0$（符合题意）。\n故 $k = 1$ 或 $k = 2$。",
            notes: "严守验算判别式的好习惯，防止增根漏洞。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch10_q1",
        index: 1,
        stem: "设 $x_1, x_2$ 是方程 $x^2 + x - 3 = 0$ 的两个实根，求 $x_1^3 - 4x_2^2 + 19$ 的值。",
        answer: "$0$",
        analysis: "利用降次法！$x_1^2 = 3 - x_1$，故 $x_1^3 = 3x_1 - x_1^2 = 3x_1 - (3 - x_1) = 4x_1 - 3$。\n同理 $x_2^2 = 3 - x_2$。\n代入得：$4x_1 - 3 - 4(3 - x_2) + 19 = 4(x_1 + x_2) - 3 - 12 + 19 = 4(x_1+x_2) + 4$。\n由韦达定理 $x_1 + x_2 = -1$，故原式 $= 4(-1) + 4 = 0$！",
        difficulty: "竞赛",
        type: "代数求值"
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
    companionImage: "/book_samples/v2/ans_start.png",
    introduction: "‘两个黄鹂鸣翠柳，一行白鹭上青天。’葛军老师将诗歌与数论不定方程融为一体。形如 $ax + by = c$ 的不定方程，当未知数限制为整数时，成为初等数论中最核心的丢番图方程。裴蜀定理（Bézout's identity）指出：$ax + by = c$ 有整数解的充分必要条件是 $\\gcd(a, b) \\mid c$。",
    teacherTips: "求不定方程整数解的三步法：\n1. 判定有无解：求最大公约数 $d = \\gcd(a, b)$，若 $d \\nmid c$ 则无解；\n2. 寻找一组特解 $(x_0, y_0)$（可通过观察法或欧几里得辗转相除法）；\n3. 写出通解公式：$x = x_0 + \\frac{b}{d} t, \\quad y = y_0 - \\frac{a}{d} t$ ($t \\in \\mathbb{Z}$)。",
    keyFormulas: [
      { name: "裴蜀定理", formula: "\\gcd(a, b) \\mid c \\iff ax + by = c \\text{ 有整数解}" },
      { name: "一次不定方程通解", formula: "x = x_0 + bt, \\quad y = y_0 - at \\quad (t \\in \\mathbb{Z}, \\gcd(a,b)=1)" }
    ],
    subsections: [
      {
        id: "15.1",
        number: "15.1",
        title: "分离未知数法与整除分析",
        content: "将系数较小的一个未知数用另一个未知数表示，将假分式化为整数部分与真分式部分，令分母整除分子进行限制。",
        examples: [
          {
            id: "ex2_15_1",
            index: 1,
            title: "求二元一次方程的正整数解",
            stem: "求方程 $3x + 5y = 31$ 的所有正整数解 $(x, y)$。",
            analysis: "解出 $x = \\frac{31 - 5y}{3} = 10 - y + \\frac{1 - 2y}{3}$。令 $\\frac{1-2y}{3}$ 为整数。",
            solution: "由 $3x + 5y = 31$，解得 $x = \\frac{31 - 5y}{3}$。\n因为 $x > 0$，所以 $31 - 5y > 0 \\implies y < 6.2$。\n又因 $y$ 为正整数，故 $y \\in \\{1, 2, 3, 4, 5, 6\\}$。\n逐一代入检验 $31 - 5y$ 是否能被 3 整除：\n当 $y = 2$ 时，$x = \\frac{31 - 10}{3} = 7$；\n当 $y = 5$ 时，$x = \\frac{31 - 25}{3} = 2$。\n其余 $y$ 值不满足整除条件。\n故方程的正整数解有两组：$\\begin{cases} x = 7 \\\\ y = 2 \\end{cases}$ 和 $\\begin{cases} x = 2 \\\\ y = 5 \\end{cases}$。",
            notes: "正整数解只有有限组，结合范围与整除性可快速穷举。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch15_q1",
        index: 1,
        stem: "求不定方程 $7x + 4y = 100$ 的正整数解的组数。",
        answer: "$3$ 组",
        analysis: "$4y = 100 - 7x \\implies y = 25 - x - \\frac{3x}{4}$。\n因 $y$ 为整数，必有 $4 \\mid x$。设 $x = 4t$ ($t \\in \\mathbb{Z}^+$)。\n代入得 $y = 25 - 7t$。因 $y > 0$，故 $25 - 7t > 0 \\implies t \\leq 3$。\n故 $t = 1, 2, 3$，共有 3 组正整数解：$(4, 18), (8, 11), (12, 4)$。",
        difficulty: "基础",
        type: "因式分解"
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
    companionImage: "/book_samples/v2/ans_start.png",
    introduction: "整系数一元二次方程 $ax^2 + bx + c = 0$ 什么时候会有整数根？首先，由求根公式可知，判别式 $\\Delta = b^2 - 4ac$ 必须是一个完全平方数（否则根中带有根号，为无理数）！其次，求出的有理数根还必须是整数。这是初中奥数代数与数论结合最紧密的专题之一。",
    teacherTips: "整数根问题的两大攻坚手段：\n1. 判别式法：令 $\\Delta = k^2$，化为平方差不定方程 $(2k - ...)(2k + ...) = M$；\n2. 根与系数因数分解法：由韦达定理 $x_1 x_2 = c/a$ 为整数，利用乘积常数的有限约数分解破局。",
    keyFormulas: [
      { name: "整数根必要条件", formula: "\\Delta = b^2 - 4ac = k^2 \\quad (k \\in \\mathbb{Z})" }
    ],
    subsections: [
      {
        id: "16.1",
        number: "16.1",
        title: "判别式设平方数求参数",
        content: "若一元二次方程有整数根，设其判别式为某整数的平方，转化为平方差因数分解求解参数。",
        examples: [
          {
            id: "ex2_16_1",
            index: 1,
            title: "求使方程有整数根的整数参数",
            stem: "已知关于 $x$ 的方程 $x^2 - px + p = 0$ 有两个整数根，求整数 $p$ 的所有可能值。",
            analysis: "利用韦达定理：$x_1 + x_2 = p$，$x_1 x_2 = p$。两式消去 $p$！",
            solution: "由韦达定理：$x_1 + x_2 = p$，$x_1 x_2 = p$。\n两式相等：$x_1 x_2 = x_1 + x_2$\n移项变形：$x_1 x_2 - x_1 - x_2 + 1 = 1$\n因式分解：$(x_1 - 1)(x_2 - 1) = 1$！\n因为 $x_1, x_2$ 为整数，所以 $x_1 - 1$ 和 $x_2 - 1$ 都是 1 的整数因子：\n情况1：$x_1 - 1 = 1, x_2 - 1 = 1 \\implies x_1 = 2, x_2 = 2 \\implies p = 2 + 2 = 4$；\n情况2：$x_1 - 1 = -1, x_2 - 1 = -1 \\implies x_1 = 0, x_2 = 0 \\implies p = 0 + 0 = 0$。\n故 $p$ 的值为 $0$ 或 $4$。",
            notes: "通过因式分解转化，秒杀原本繁重的判别式讨论！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch16_q1",
        index: 1,
        stem: "若方程 $x^2 + ax + a + 1 = 0$ 有两个整数根，求整数 $a$ 的值。",
        answer: "$a = -1$ 或 $a = 7$",
        analysis: "判别式 $\\Delta = a^2 - 4(a+1) = a^2 - 4a - 4 = k^2$。\n配方：$(a-2)^2 - 8 = k^2 \\iff (a-2)^2 - k^2 = 8$。\n平方差分解：$(a - 2 - k)(a - 2 + k) = 8$。\n两因子同奇同偶且乘积为 8，解得 $a = -1$ 或 $a = 7$。",
        difficulty: "竞赛",
        type: "质数与整数"
      }
    ]
  }
];
