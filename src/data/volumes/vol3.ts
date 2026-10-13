import { Chapter } from "@/types/book";

export const VOL3_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "一次函数的图象与性质",
    subtitle: "解析式、几何变换与斜率截距直觉",
    bookPageRange: "001-015",
    pdfPageRange: "P7-P21",
    companionImage: "/book_samples/v3/ch1_start.png",
    introduction: "函数 $y = kx + b$ ($k \\neq 0$) 称为一次函数。当 $b = 0$ 时，称为正比例函数。一次函数的图象是一条直线。$k$ 决定了直线的倾斜程度与增减性（$k > 0$ 时单调递增，$k < 0$ 时单调递减），$b$ 为直线在 $y$ 轴上的截距。一次函数是‘数形结合’思想在初中代数中的第一块基石。",
    teacherTips: "李惟峰老师点拨：\n1. 待定系数法求解析式：两条已知点坐标或一个点加斜率即可锁定直线方程；\n2. 直线平移规律：‘上加下减（常数项 $b$），左加右减（自变量 $x$）’；\n3. 两直线垂直的充要条件：$k_1 \\cdot k_2 = -1$（竞赛极其好用！）。",
    keyFormulas: [
      { name: "一次函数一般解析式", formula: "y = kx + b \\quad (k \\neq 0)" },
      { name: "两直线垂直充要条件", formula: "l_1 \\perp l_2 \\iff k_1 \\cdot k_2 = -1" },
      { name: "两直线平行充要条件", formula: "l_1 \\parallel l_2 \\iff k_1 = k_2 \\text{ 且 } b_1 \\neq b_2" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "数形结合与绝对值一次函数",
        content: "绝对值函数 $y = |x - a| + |x - b|$ 的几何意义是数轴上动点到两定点的距离之和，其最小值为两定点间的距离 $|a - b|$。",
        examples: [
          {
            id: "ex3_1_1",
            index: 1,
            title: "绝对值函数折线最值",
            stem: "求函数 $y = |x - 1| + |x - 2| + |x - 5|$ 的最小值及取得最小值时的 $x$ 值。",
            analysis: "利用数轴几何意义：点 $x$ 到 $1, 2, 5$ 的距离之和。中位数处距离和最小！",
            solution: "根据数轴距离的几何意义：\n当 $x = 2$（三数的中位数）时，距离之和最小。\n此时 $|x - 1| + |x - 5| = |2 - 1| + |2 - 5| = 1 + 3 = 4$；\n$|x - 2| = 0$。\n故当 $x = 2$ 时，函数取得最小值 $y_{\\min} = 4$。",
            notes: "多绝对值相加求最值，中位数点即为极小值点。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch1_q1",
        index: 1,
        stem: "已知直线 $y = 2x + 1$ 与直线 $y = kx + 4$ 的交点在第一象限，求 $k$ 的取值范围。",
        answer: "$-\\frac{1}{2} < k < 2$",
        analysis: "联立解得 $x = \\frac{3}{2 - k}, y = \\frac{2(2-k) + 6}{2-k}$ 等。交点在第一象限需横纵坐标均大于0，得 $-\\frac{1}{2} < k < 2$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "二次函数的图象与性质",
    subtitle: "抛物线顶点、对称轴与几何变换",
    bookPageRange: "016-032",
    pdfPageRange: "P22-P38",
    companionImage: "/book_samples/v3/ch2_start.png",
    introduction: "二次函数 $y = ax^2 + bx + c$ ($a \\neq 0$) 的图象是一条抛物线。它是初等代数中最核心、内容最丰富的一类函数。通过配方化为顶点式 $y = a(x - h)^2 + k$，可以立刻确定其顶点坐标 $(h, k)$、对称轴直线 $x = h$ 以及开口方向和极值。",
    teacherTips: "二次函数‘三大形式’灵活切换：\n1. 一般式：$y = ax^2 + bx + c$（适用于三点求解析式）；\n2. 顶点式：$y = a(x-h)^2 + k$（已知顶点坐标或最值时首选）；\n3. 交点式（零点式）：$y = a(x-x_1)(x-x_2)$（已知抛物线与 $x$ 轴两交点时首选，极其简便）。",
    keyFormulas: [
      { name: "顶点式", formula: "y = a(x-h)^2 + k, \\quad h = -\\frac{b}{2a}, \\; k = \\frac{4ac - b^2}{4a}" },
      { name: "交点式", formula: "y = a(x - x_1)(x - x_2)" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "二次函数对称性与最值",
        content: "若二次函数满足 $f(x_1) = f(x_2)$ ($x_1 \\neq x_2$)，则其对称轴必为直线 $x = \\frac{x_1 + x_2}{2}$。",
        examples: [
          {
            id: "ex3_2_1",
            index: 1,
            title: "利用对称性巧求解析式",
            stem: "已知二次函数 $f(x) = ax^2 + bx + c$ 满足 $f(-1) = f(3) = 0$，且最小值为 $-4$，求函数的解析式。",
            analysis: "已知两个零点 $-1$ 和 $3$，首选用交点式！",
            solution: "因为 $f(-1) = f(3) = 0$，设 $f(x) = a(x+1)(x-3)$。\n对称轴为 $x = \\frac{-1+3}{2} = 1$。\n因为函数有最小值，故 $a > 0$。\n当 $x = 1$ 时取到最小值 $-4$：\n$f(1) = a(1+1)(1-3) = -4a = -4 \\implies a = 1$。\n故解析式为 $f(x) = (x+1)(x-3) = x^2 - 2x - 3$。",
            notes: "交点式避免了三元一次方程组的繁琐计算。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch2_q1",
        index: 1,
        stem: "抛物线 $y = x^2 - 2x + c$ 的顶点在 $x$ 轴上，求 $c$ 的值。",
        answer: "$c = 1$",
        analysis: "配方 $y = (x-1)^2 + c - 1$。顶点为 $(1, c-1)$，在 $x$ 轴上则纵坐标为 0，即 $c - 1 = 0 \\implies c = 1$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "函数与一元二次方程",
    subtitle: "零点理论与根的分布定理",
    bookPageRange: "033-045",
    pdfPageRange: "P39-P51",
    companionImage: "/book_samples/v3/ch3_start.png",
    introduction: "一元二次方程 $ax^2 + bx + c = 0$ 的实数根，就是二次函数 $y = ax^2 + bx + c$ 的图象与 $x$ 轴交点的横坐标。从‘根’的代数概念，到‘零点’的函数图象概念，是初中生建立高阶数学观的关键飞跃。‘一元二次方程根的分布’更是初中联赛和高中导数的常青考点。",
    teacherTips: "一元二次方程根的分布四大考查要素：\n1. 判别式 $\\Delta$（确保根的存在性）；\n2. 对称轴位置 $x = -b/(2a)$（控制根的中心偏移）；\n3. 区间端点函数值符号 $a \\cdot f(k)$（通过正负性卡住根的范围）；\n4. 开口方向 $a$。记住口诀：‘画出图象，判别式、端点值、对称轴三位一体！’",
    keyFormulas: [
      { name: "根大于k的充分必要条件", formula: "\\Delta \\geq 0, \\quad -\\frac{b}{2a} > k, \\quad a \\cdot f(k) > 0" },
      { name: "根在区间(m, n)内的条件", formula: "\\Delta \\geq 0, \\quad m < -\\frac{b}{2a} < n, \\quad f(m) > 0, \\; f(n) > 0 \\quad (a>0)" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "二次方程根的区间分布",
        content: "若二次方程的一根大于 $k$，另一根小于 $k$，只需满足 $a \\cdot f(k) < 0$（此时判别式必然大于0，无需检验判别式）。",
        examples: [
          {
            id: "ex3_3_1",
            index: 1,
            title: "求使两根均大于1的参数范围",
            stem: "已知关于 $x$ 的方程 $x^2 - 2ax + 2a + 3 = 0$ 有两个不相等的实数根，且两根都大于 1，求实数 $a$ 的取值范围。",
            analysis: "设 $f(x) = x^2 - 2ax + 2a + 3$。利用根的分布三条件联立。",
            solution: "设 $f(x) = x^2 - 2ax + 2a + 3$。两根均大于 1 需满足：\n1. $\\Delta = 4a^2 - 4(2a+3) = 4(a^2 - 2a - 3) = 4(a-3)(a+1) > 0 \\implies a > 3$ 或 $a < -1$；\n2. 对称轴 $x = a > 1$；\n3. 端点值 $f(1) = 1 - 2a + 2a + 3 = 4 > 0$（恒成立）。\n综合以上条件：$a > 3$ 且 $a > 1 \\implies a > 3$。\n故 $a$ 的取值范围是 $a > 3$。",
            notes: "三位一体，逻辑严密。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch3_q1",
        index: 1,
        stem: "若方程 $x^2 + (m-2)x + 5 - m = 0$ 的一个根大于 2，另一个根小于 2，求实数 $m$ 的取值范围。",
        answer: "$m < -5$",
        analysis: "令 $f(x) = x^2 + (m-2)x + 5 - m$。一个根大于2一个根小于2，只需 $f(2) < 0$。\n$f(2) = 4 + 2(m-2) + 5 - m = m + 5 < 0 \\implies m < -5$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "函数的最值",
    subtitle: "闭区间二次函数最值与双动模型",
    bookPageRange: "059-072",
    pdfPageRange: "P65-P78",
    companionImage: "/book_samples/v3/ans_start.png",
    introduction: "在给定区间 $[m, n]$ 上求二次函数 $f(x) = ax^2 + bx + c$ 的最大值与最小值，是中考压轴与高中数学连接最紧密的内容。对称轴与给定区间的相对位置关系（在区间左侧、区间内部、还是区间右侧）决定了最值是在顶点处还是在端点处取得。",
    teacherTips: "闭区间二次函数最值分类三部曲（以开口向上 $a > 0$ 为例）：\n1. 轴在区间左侧：在左端点取最小，右端点取最大；\n2. 轴在区间内部：在对称轴顶点处取最小，离轴较远的端点取最大；\n3. 轴在区间右侧：在右端点取最小，左端点取最大。\n口诀：‘离轴近者小，离轴远者大！’",
    keyFormulas: [
      { name: "轴定区间动模型", formula: "x \\in [t, t+1], \\quad \\text{讨论 } t, t+1 \\text{ 与对称轴 } x_0 \\text{ 的相对位置}" },
      { name: "区间定轴动模型", formula: "x \\in [0, 2], \\quad \\text{讨论对称轴 } x = a \\text{ 分别处于 } a < 0, 0 \\le a \\le 2, a > 2" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "含参闭区间最值分类讨论",
        content: "当二次函数对称轴含有字母参数而在固定区间上求最值时，以区间中点与对称轴的关系分类讨论。",
        examples: [
          {
            id: "ex3_5_1",
            index: 1,
            title: "轴动区间定求最值",
            stem: "求函数 $f(x) = x^2 - 2ax + 1$ 在区间 $x \\in [0, 2]$ 上的最小值 $g(a)$。",
            analysis: "对称轴为直线 $x = a$。区间为 $[0, 2]$。讨论 $a < 0$, $0 \\leq a \\leq 2$, $a > 2$。",
            solution: "配方得 $f(x) = (x-a)^2 + 1 - a^2$。对称轴为 $x = a$。\n(1) 若 $a < 0$（对称轴在区间左侧）：$f(x)$ 在 $[0, 2]$ 上单调递增，最小值为 $f(0) = 1$；\n(2) 若 $0 \\leq a \\leq 2$（对称轴在区间内）：最小值为顶点值 $f(a) = 1 - a^2$；\n(3) 若 $a > 2$（对称轴在区间右侧）：$f(x)$ 在 $[0, 2]$ 上单调递减，最小值为 $f(2) = 4 - 4a + 1 = 5 - 4a$。\n综上：$g(a) = \\begin{cases} 1, & a < 0 \\\\ 1 - a^2, & 0 \\leq a \\leq 2 \\\\ 5 - 4a, & a > 2 \\end{cases}$。",
            notes: "分段函数表达清晰严整。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch5_q1",
        index: 1,
        stem: "已知函数 $y = -x^2 + 2x + 3$ 在区间 $[0, m]$ ($m > 0$) 上的最大值为 4，求 $m$ 的取值范围。",
        answer: "$m \\geq 1$",
        analysis: "配方 $y = -(x-1)^2 + 4$。顶点为 $(1, 4)$。若要最大值达到 4，区间 $[0, m]$ 必须包含顶点横坐标 $x = 1$，故只需 $m \\geq 1$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  }
];
