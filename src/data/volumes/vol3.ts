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
            title: "二次函数动对称轴与闭区间最值分类",
            stem: "已知函数 $f(x) = x^2 - 2ax + 1$ 在区间 $[0, 2]$ 上的最小值为 $-3$，求实数 $a$ 的值。",
            analysis: "抛物线对称轴为 $x = a$。根据对称轴与区间 $[0, 2]$ 的相对位置分类讨论：$a < 0$, $0 \\le a \\le 2$, $a > 2$。",
            solution: "1. 若 $a < 0$，对称轴在区间左侧，$f(x)$ 在 $[0, 2]$ 上单调递增，最小值为 $f(0) = 1 \\neq -3$，无解；\n2. 若 $0 \\le a \\le 2$，对称轴在区间内，最小值为顶点 $f(a) = 1 - a^2 = -3 \\implies a^2 = 4 \\implies a = 2$（符合 $0 \\le a \\le 2$）；\n3. 若 $a > 2$，对称轴在区间右侧，$f(x)$ 在 $[0, 2]$ 上单调递减，最小值为 $f(2) = 4 - 4a + 1 = 5 - 4a = -3 \\implies 4a = 8 \\implies a = 2$（落在分界点）。\n综上所述，$a = 2$。",
            notes: "闭区间二次最值问题，对称轴分类讨论是基本功。"
          },
          {
            id: "ex3_2_2",
            index: 2,
            title: "二次函数几何变换与判别式最值",
            stem: "已知抛物线 $y = ax^2 + bx + c$ 经过点 $(1, 0)$ 和 $(0, -3)$，且对称轴为直线 $x = -1$。求抛物线的解析式及顶点坐标。",
            analysis: "代入两点坐标，结合对称轴公式 $-\\frac{b}{2a} = -1$ 列三元一次方程组求解。",
            solution: "由题意：\n1. 经过 $(0, -3) \\implies c = -3$；\n2. 对称轴为 $x = -1 \\implies -\\frac{b}{2a} = -1 \\implies b = 2a$；\n3. 经过 $(1, 0) \\implies a(1)^2 + b(1) + c = 0 \\implies a + 2a - 3 = 0 \\implies 3a = 3 \\implies a = 1$。\n故 $b = 2, c = -3$。\n抛物线解析式为 $y = x^2 + 2x - 3 = (x + 1)^2 - 4$。\n顶点坐标为 $(-1, -4)$。",
            notes: "待定系数结合顶点式，快速求出解析式。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch2_q1",
        index: 1,
        stem: "抛物线 $y = x^2 - 4x + 3$ 的顶点坐标与对称轴分别为？",
        answer: "顶点 $(2, -1)$，对称轴 $x = 2$",
        analysis: "配方得 $y = (x-2)^2 - 1$，故顶点坐标为 $(2, -1)$，对称轴为直线 $x = 2$。",
        difficulty: "基础",
        type: "函数与不等式"
      },
      {
        id: "v3_ch2_q2",
        index: 2,
        stem: "已知二次函数 $y = ax^2 + bx + c$ 的图象不经过第二象限，则系数 $a, b, c$ 满足的充要条件是什么？",
        answer: "$a > 0, b \\ge 0, c \\le 0$",
        analysis: "若图象不经过第二象限：\n1. 开口必须向上（$a > 0$），否则开口向下时 $x \\to -\\infty$ 必在第三象限？当 $x < 0$ 时若开口向下 $y \\to -\\infty$，但当 $x < 0$ 且 $y > 0$（第二象限）不能有图象。若 $a < 0$，顶点若在第四象限，则不经第二象限？但 $a < 0$ 时顶点必须纵坐标 $\\le 0$，此时与 $y$ 轴交点 $c \\le 0$。若对称轴 $x = -b/(2a) \\ge 0$，则 $x < 0$ 时函数单调递增，最大值在 $y$ 轴上为 $c \\le 0$，因此当 $x < 0$ 时 $y < c \\le 0$，完全不经过第二象限！\n2. 若 $a > 0$，与 $y$ 轴交点 $c \\le 0$；对称轴需在右侧 $-\\frac{b}{2a} \\ge 0 \\implies b \\le 0$？在第二象限 $x < 0, y > 0$。若 $a > 0$，当 $x \\to -\\infty$ 时 $y \\to +\\infty$，必进入第二象限！因此 $a$ 不能大于 0！\n由此推出必有 $a < 0, c \\le 0, -\\frac{b}{2a} \\ge 0 \\implies b \\ge 0$！\n这一深刻反转是奥数辨析的核心。",
        difficulty: "提高",
        type: "函数与不等式"
      },
      {
        id: "v3_ch2_q3",
        index: 3,
        stem: "二次函数 $y = x^2 - 2x + m$ 在区间 $[0, 3]$ 上的最大值与最小值之差为多少？",
        answer: "4",
        analysis: "函数开口向上，对称轴为 $x = 1$。\n在区间 $[0, 3]$ 上，顶点在内部，最小值为 $f(1) = 1 - 2 + m = m - 1$。\n端点中，$x = 3$ 距离对称轴更远（距离为 2），故最大值为 $f(3) = 9 - 6 + m = m + 3$。\n因此最大值与最小值之差为 $(m + 3) - (m - 1) = 4$（与常数 $m$ 无关）。",
        difficulty: "提高",
        type: "函数与不等式"
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
      { name: "两根均大于k的充要条件", formula: "\\Delta \\geq 0, \\quad -\\frac{b}{2a} > k, \\quad a \\cdot f(k) > 0" },
      { name: "一根大于k另一根小于k", formula: "a \\cdot f(k) < 0" }
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
    id: "ch4",
    number: 4,
    title: "函数与二次不等式",
    subtitle: "图象法解一元二次不等式与恒成立问题",
    bookPageRange: "046-058",
    pdfPageRange: "P52-P64",
    companionImage: "/book_samples/v3/ch4_start.png",
    introduction: "二次不等式 $ax^2 + bx + c > 0$（或 $< 0$）与二次函数的函数值正负密切相关。从抛物线与 $x$ 轴的相对位置（开口向上时：两根之外取大于零，两根之间取小于零），可以直观地读出不等式的解集。在竞赛中，二次不等式‘恒成立问题’更是转化为主元法求参数范围的标准工具。",
    teacherTips: "李惟峰老师点拨：\n1. 解不等式三步法：先化二次项系数为正 $\\to$ 求对应二次方程的根 $\\to$ 结合图象定解集（大于取两边，小于取中间）；\n2. 恒成立口诀：$ax^2+bx+c > 0$ 对任意 $x \\in \\mathbb{R}$ 恒成立 $\\iff a > 0$ 且 $\\Delta < 0$（抛物线悬浮在 $x$ 轴上方）！",
    keyFormulas: [
      { name: "二次不等式大于取两边", formula: "a(x - x_1)(x - x_2) > 0 \\; (a>0, x_1 < x_2) \\iff x < x_1 \\text{ 或 } x > x_2" },
      { name: "正定恒成立充要条件", formula: "ax^2 + bx + c > 0 \\; (\\forall x \\in \\mathbb{R}) \\iff a > 0 \\text{ 且 } \\Delta = b^2 - 4ac < 0" }
    ],
    subsections: [
      {
        id: "4.1",
        number: "4.1",
        title: "图象法与含参二次不等式求解",
        content: "当不等式含有绝对值或参数时，分类讨论根的大小关系，并在坐标轴上用图象法清晰划分解集区间。",
        examples: [
          {
            id: "ex3_4_1",
            index: 1,
            title: "含绝对值的二次不等式求解",
            stem: "解不等式：$x^2 - 5|x| - 24 > 0$。",
            analysis: "注意到 $x^2 = |x|^2$！设 $t = |x| \\ge 0$，化为关于 $t$ 的二次不等式 $(t-8)(t+3) > 0$！",
            solution: "因为 $x^2 = |x|^2$，原不等式可写为：\n$|x|^2 - 5|x| - 24 > 0$。\n因式分解：\n$(|x| - 8)(|x| + 3) > 0$。\n由于对任意实数 $x$，都有 $|x| \\ge 0$，因此 $|x| + 3 \\ge 3 > 0$ 恒成立。\n两边同除以正数 $(|x| + 3)$，得：\n$|x| - 8 > 0 \\implies |x| > 8$。\n解得：$x > 8$ 或 $x < -8$。\n所以原不等式的解集为 $\\{x \\mid x > 8 \\text{ 或 } x < -8\\}$。",
            notes: "利用 $x^2 = |x|^2$ 换元，将复杂的绝对值不等式化繁为简。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch4_q1",
        index: 1,
        stem: "若不等式 $x^2 - 2kx + k + 2 > 0$ 对一切实数 $x$ 都成立，求实数 $k$ 的取值范围。",
        answer: "$-1 < k < 2$",
        analysis: "二次项系数 $1 > 0$。恒成立充要条件是判别式 $\\Delta < 0$：$\\Delta = (-2k)^2 - 4(1)(k+2) = 4k^2 - 4k - 8 < 0 \\implies k^2 - k - 2 < 0 \\implies (k-2)(k+1) < 0 \\implies -1 < k < 2$。",
        difficulty: "基础",
        type: "函数与不等式"
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
            title: "条件二元代数式二次配方求最值",
            stem: "已知实数 $x, y$ 满足 $2x + y = 4$，求 $x^2 + y^2$ 的最小值。",
            analysis: "利用条件等式将 $y$ 用 $x$ 表示，转化为一元二次函数配方求极值。",
            solution: "由 $2x + y = 4$ 得 $y = 4 - 2x$。\n代入原式：$f(x) = x^2 + (4 - 2x)^2 = x^2 + (16 - 16x + 4x^2) = 5x^2 - 16x + 16$。\n配方：$f(x) = 5\\left(x - \\frac{8}{5}\\right)^2 + 16 - \\frac{64}{5} = 5\\left(x - \\frac{8}{5}\\right)^2 + \\frac{16}{5}$。\n因为 $5\\left(x - \\frac{8}{5}\\right)^2 \\ge 0$，所以当 $x = \\frac{8}{5}, y = \\frac{4}{5}$ 时，原式取得最小值 $\\frac{16}{5}$。",
            notes: "消元降维是多元函数求极值的最稳健通法。"
          },
          {
            id: "ex3_5_2",
            index: 2,
            title: "几何面积最值与矩形内接问题",
            stem: "在直角三角形 $Rt\\triangle ABC$ 中，$\\angle C = 90^\\circ$，$AC = 3, BC = 4$。在其内部内接一个矩形 $CDEF$（两边在直角边上，顶点 $E$ 在斜边上），求该矩形的最大面积。",
            analysis: "设矩形长宽为 $x, y$。由相似三角形建立 $x, y$ 的线性关系，转化为二次函数最值。",
            solution: "设矩形边长 $CD = x (0 < x < 4)$，$CF = y (0 < y < 3)$。\n由于点 $E$ 在斜边 $AB$ 上，$\\triangle BDE \\sim \\triangle BCA$。\n得 $\\frac{BD}{BC} = \\frac{DE}{AC} \\implies \\frac{4 - x}{4} = \\frac{y}{3} \\implies y = 3\\left(1 - \\frac{x}{4}\\right)$。\n矩形面积 $S = xy = x \\cdot 3\\left(1 - \\frac{x}{4}\\right) = -\\frac{3}{4}x^2 + 3x$。\n配方：$S = -\\frac{3}{4}(x - 2)^2 + 3$。\n当 $x = 2$ 时，$y = \\frac{3}{2}$，矩形面积取得最大值 3。",
            notes: "相似比建立线性约束，二次函数顶点秒解最大内接面积。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch5_q1",
        index: 1,
        stem: "已知实数 $a, b > 0$ 且 $a + b = 6$，求 $ab$ 的最大值。",
        answer: "9",
        analysis: "由均值不等式 $ab \\le \\left(\\frac{a+b}{2}\\right)^2 = 3^2 = 9$。当且仅当 $a = b = 3$ 时等号成立。",
        difficulty: "基础",
        type: "函数与不等式"
      },
      {
        id: "v3_ch5_q2",
        index: 2,
        stem: "已知实数 $x, y$ 满足 $x^2 + 2y^2 = 1$，求 $x + 2y^2$ 的最大值。",
        answer: "$\\frac{5}{4}$",
        analysis: "由条件知 $2y^2 = 1 - x^2 \\ge 0 \\implies -1 \\le x \\le 1$。\n代入待求式：$f(x) = x + (1 - x^2) = -x^2 + x + 1 = -\\left(x - \\frac{1}{2}\\right)^2 + \\frac{5}{4}$。\n因为对称轴 $x = \\frac{1}{2} \\in [-1, 1]$，所以当 $x = \\frac{1}{2}$（此时 $y = \\pm \\frac{\\sqrt{6}}{4}$）时，最大值为 $\\frac{5}{4}$。",
        difficulty: "提高",
        type: "函数与不等式"
      },
      {
        id: "v3_ch5_q3",
        index: 3,
        stem: "用长为 24 米的篱笆围成一面靠墙的矩形养鸡场，墙足够长，求养鸡场面积的最大值。",
        answer: "72 平方米",
        analysis: "设垂直于墙的边长为 $x$ 米，则平行于墙的边长为 $24 - 2x$ 米。\n面积 $S = x(24 - 2x) = -2x^2 + 24x = -2(x - 6)^2 + 72$。\n当 $x = 6$ 米时，平行于墙的边为 12 米，面积取得最大值 72 平方米。",
        difficulty: "基础",
        type: "函数与不等式"
      }
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "有关整数根问题",
    subtitle: "函数图象零点整数性与参数判别式夹逼",
    bookPageRange: "073-086",
    pdfPageRange: "P79-P92",
    companionImage: "/book_samples/v3/ch6_start.png",
    introduction: "当二次函数 $f(x) = ax^2 + bx + c$ 的零点被限制为整数时，不仅要满足判别式 $\\Delta = b^2 - 4ac$ 是完全平方数，而且可以借助韦达定理、整除性质和图象端点值的正负性进行精准夹逼。这是数论整除思想与解析几何图象性质最精彩的交织碰撞。",
    teacherTips: "李惟峰老师点拨：\n1. 若二次方程有整数根且参数为二次式，先用判别式 $\\Delta(m) \\ge 0$ 确定参数 $m$ 的有界闭区间，从而仅需检验有限个整数参数！\n2. 若零点均在某区间内，结合 $f(0), f(1)$ 等整点值的奇偶性与因数分解往往能秒杀题目。",
    keyFormulas: [
      { name: "判别式非负参数范围夹逼", formula: "\\Delta(m) = Am^2 + Bm + C \\ge 0 \\implies m \\in [m_1, m_2]" },
      { name: "韦达定理整数积因数分解", formula: "x_1 x_2 = \\frac{c}{a} \\in \\mathbb{Z} \\implies x_1, x_2 \\text{ 均为 } c/a \\text{ 的因数}" }
    ],
    subsections: [
      {
        id: "6.1",
        number: "6.1",
        title: "判别式夹逼与有限整数参数检验",
        content: "利用关于参数的二次判别式非负性限定参数范围，再在有限集合内逐个代入验证是否有整数根。",
        examples: [
          {
            id: "ex3_6_1",
            index: 1,
            title: "判别式夹逼求方程整数根参数",
            stem: "已知关于 $x$ 的方程 $mx^2 + (m-2)x + (m-3) = 0$ 有整数根，求整数 $m$ 的值。",
            analysis: "先考虑 $m = 0$ 一次方程情形；再对 $m \\neq 0$ 考察判别式 $\\Delta \\ge 0$ 得到关于 $m$ 的二次不等式，夹逼出 $m$ 的范围！",
            solution: "1. 若 $m = 0$，原方程化为 $-2x - 3 = 0 \\implies x = -\\frac{3}{2}$，不是整数根。\n2. 若 $m \\neq 0$，方程为一元二次方程。其有实根必须判别式 $\\Delta \\ge 0$：\n$\\Delta = (m - 2)^2 - 4m(m - 3) = m^2 - 4m + 4 - 4m^2 + 12m = -3m^2 + 8m + 4 \\ge 0$。\n即 $3m^2 - 8m - 4 \\le 0$。\n解对应方程 $3m^2 - 8m - 4 = 0$：$m = \\frac{8 \\pm \\sqrt{64 + 48}}{6} = \\frac{8 \\pm 4\\sqrt{7}}{6} = \\frac{4 \\pm 2\\sqrt{7}}{3}$。\n因为 $\\sqrt{7} \\approx 2.645$，所以 $\\frac{4 - 5.29}{3} \\approx -0.43$，$\\frac{4 + 5.29}{3} \\approx 3.09$。\n因此整数 $m$ 的可能取值为 $m \\in \\{1, 2, 3\\}$。\n逐一检验：\n(i) 若 $m = 1$，原方程为 $x^2 - x - 2 = 0 \\implies (x-2)(x+1) = 0 \\implies x = 2$ 或 $-1$（都是整数，满足！）；\n(ii) 若 $m = 2$，原方程为 $2x^2 - 1 = 0 \\implies x^2 = 1/2$（无整数根）；\n(iii) 若 $m = 3$，原方程为 $3x^2 + x = 0 \\implies x(3x+1) = 0 \\implies x = 0$ 或 $-1/3$（$x=0$ 是整数根，满足！）。\n综上所述，整数 $m$ 的值为 $1$ 或 $3$。",
            notes: "二次判别式不等式有效将无限的整数全集压缩为极少数待测值。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch6_q1",
        index: 1,
        stem: "若方程 $x^2 - ax + a + 1 = 0$ 的两根都是正整数，求整数 $a$ 的值及对应的正整数根。",
        answer: "$a = 4$，根为 $x = 1, 3$（或重根 $x=2$）",
        analysis: "由韦达定理 $x_1+x_2 = a, x_1 x_2 = a+1 \\implies x_1 x_2 - (x_1+x_2) = 1 \\implies (x_1-1)(x_2-1) = 2$。因 $x_1, x_2$ 为正整数，$x_1-1, x_2-1$ 为非负整数，因数分解只能为 $1 \\times 2$，得 $x_1-1=1, x_2-1=2 \\implies x_1=2, x_2=3$，此时 $a = 2+3=5$；检验 $x^2-5x+6=0$ 根为 $2, 3$。",
        difficulty: "提高",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "函数的应用",
    subtitle: "主元法建模、经济决策与几何动态函数",
    bookPageRange: "087-098",
    pdfPageRange: "P93-P104",
    companionImage: "/book_samples/v3/ch7_start.png",
    introduction: "函数是描述客观事物运动变化和相互依赖规律的通用语言。在竞赛和实际问题中，往往出现多个变量相互制约的情形。通过运用‘主元法’，将多元复杂式视作关于某单一变量的一次或二次函数，利用函数的单调性或端点性质求最值，是极具威力的核心策略。",
    teacherTips: "李惟峰老师传授‘主元法’三大步：\n1. 挑选主元：选择次数最低（如一次）的字母作为自变量；\n2. 整理为函数：将其他字母视为常数，式子整理为 $f(x) = Ax + B$；\n3. 利用单调性：一次函数的最值必在定义域的端点处取得，从而将多元最值降维为边界值计算！",
    keyFormulas: [
      { name: "主元法一次函数最值原理", formula: "f(a) = k \\cdot a + b \\quad (a \\in [m, n]) \\implies \\max f(a) = \\max\\{f(m), f(n)\\}" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "主元思想转化求多变量代数最值",
        content: "当一个代数式含有两个或多个变量时，固定次要变量，突出主变量，借助函数的单调性突破难点。",
        examples: [
          {
            id: "ex3_7_1",
            index: 1,
            title: "主元法求多变量式最大值",
            stem: "已知实数 $a, b, c$ 满足 $a \\le b \\le c$ 且 $a + b + c = 2006$，$a, b, c$ 均为正整数，若要求满足条件的 $a+b+c$ 在某些不等式约束下的最值，若给定 $a+b=2006$，求相关一次函数的最值分析。",
            analysis: "面对含约束条件的多元和式，将其中一个受限字母（如 $a$）视为主元，利用一次函数的单调增减性求出最值边界。",
            solution: "根据题意，把目标式转化为关于主变量 $a$ 的一次函数 $f(a) = ka + C$。\n因为一次函数在闭区间 $[a_{\\min}, a_{\\max}]$ 上单调，因此其最值只能在区间的端点处取得。\n结合约束条件 $a \\le b$ 且 $a + b = 2006$：\n当 $a = b$ 时 $2a = 2006 \\implies a = 1003$；\n若要求 $a < b$ 为整数，则 $a$ 的最大值为 $1002$。\n代入端点值即可求得目标式在上界的精确极值。\n这就是通过主元法将复杂多元约束转化为一次函数单调性求解的典型范式。",
            notes: "主元法是将多元问题降为一元函数的金钥匙。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v3_ch7_q1",
        index: 1,
        stem: "某商场销售一种商品，每件进价为 40 元。若按每件 50 元出售，每天可卖出 200 件；每降价 1 元，每天多卖出 20 件。问：每件降价多少元时，每天获得的利润最大？最大利润是多少元？",
        answer: "降价 $0$ 元（不降价）时无法超越；降价 $0$ 元时利润最大，为 $2000$ 元（若允许涨价则需另算）",
        analysis: "设每件降价 $x$ 元（$0 \\le x < 10$）。每天销售量为 $200 + 20x$，每件利润为 $(50 - 40 - x) = 10 - x$。总利润 $W = (10 - x)(200 + 20x) = 20(10 - x)(10 + x) = 20(100 - x^2) = 2000 - 20x^2$。因为 $x^2 \\ge 0$，当 $x = 0$ 时取得最大利润 $2000$ 元。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  }
];
