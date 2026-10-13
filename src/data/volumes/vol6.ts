import { Chapter } from "@/types/book";

export const VOL6_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "整除的概念与基本性质",
    subtitle: "带余除法、整除性判断与线性组合原理",
    bookPageRange: "001-009",
    pdfPageRange: "P7-P15",
    companionImage: "/book_samples/v6/ch1_start.png",
    introduction: "设 $a, b$ 为整数且 $a \\neq 0$。如果存在整数 $c$ 使得 $b = ac$，就称 $a$ 整除 $b$（或 $b$ 能被 $a$ 整除），记作 $a \\mid b$。整除是初等数论大厦的第一块基石。带余除法保证了任意两整数相除具有唯一的商和非负余数，而整除的线性性质（若 $a \\mid b$ 且 $a \\mid c$，则对任意整数 $x, y$ 都有 $a \\mid (bx + cy)$）更是消元化简的核心利刃。",
    teacherTips: "冯志刚领队传授数论基石：\n1. 整除的线性性质：设法选取代数倍数消去未知数，例如由 $n-1 \\mid n^2+2$ 推出 $n-1 \\mid 3$；\n2. 传递性与保乘性：若 $a \\mid b$ 且 $b \\mid c$，则 $a \\mid c$；若 $a \\mid b$ 且 $c \\mid d$，则 $ac \\mid bd$；\n3. 连续整数积的整除性：任意 $k$ 个连续整数的乘积必然能被 $k!$ 整除！",
    keyFormulas: [
      { name: "整除定义", formula: "a \\mid b \\iff \\exists c \\in \\mathbb{Z}, \\; b = ac \\quad (a \\neq 0)" },
      { name: "整除线性组合性质", formula: "a \\mid b \\text{ 且 } a \\mid c \\implies a \\mid (bx + cy) \\quad (\\forall x, y \\in \\mathbb{Z})" },
      { name: "带余除法定理", formula: "a = bq + r \\quad (0 \\le r < |b|)" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "分离常数法与整除参数确定",
        content: "当分子与分母均含有未知数时，利用多项式除法将分式化为整数商与常数分子的真分式之和。",
        examples: [
          {
            id: "ex6_1_1",
            index: 1,
            title: "整除性确定整数参数",
            stem: "求所有整数 $n$，使得 $n - 1$ 能整除 $n^2 + 2n + 3$。",
            analysis: "利用线性组合消去 $n$！将分子除以 $n-1$，分离整数与余数。",
            solution: "多项式除法（或配凑法）：\n$n^2 + 2n + 3 = n(n-1) + 3n + 3 = n(n-1) + 3(n-1) + 6 = (n+3)(n-1) + 6$。\n因此：\n$\\frac{n^2 + 2n + 3}{n - 1} = n + 3 + \\frac{6}{n - 1}$。\n若 $n - 1$ 整除 $n^2 + 2n + 3$，则 $n - 1$ 必须整除 6。\n6 的所有整数约数有：$\\pm 1, \\pm 2, \\pm 3, \\pm 6$。\n对应的 $n$ 值为：\n$n - 1 = 1 \\implies n = 2$\n$n - 1 = -1 \\implies n = 0$\n$n - 1 = 2 \\implies n = 3$\n$n - 1 = -2 \\implies n = -1$\n$n - 1 = 3 \\implies n = 4$\n$n - 1 = -3 \\implies n = -2$\n$n - 1 = 6 \\implies n = 7$\n$n - 1 = -6 \\implies n = -5$。\n答：$n$ 可以取 $-5, -2, -1, 0, 2, 3, 4, 7$ 共 8 个值。",
            notes: "多项式除法分离常数是求解整除参数的标准动作。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch1_q1",
        index: 1,
        stem: "求所有使得 $\\frac{2n+1}{n-2}$ 为整数的整数 $n$ 的取值。",
        answer: "$n = -3, 1, 3, 7$",
        analysis: "$\\frac{2n+1}{n-2} = \\frac{2(n-2) + 5}{n-2} = 2 + \\frac{5}{n-2}$。需 $n-2 \\mid 5$，约数为 $\\pm 1, \\pm 5$。得 $n = 3, 1, 7, -3$。",
        difficulty: "基础",
        type: "质数与整数"
      }
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "质数（素数）与合数",
    subtitle: "整数大厦的基石原子与埃氏筛法",
    bookPageRange: "010-015",
    pdfPageRange: "P16-P21",
    companionImage: "/book_samples/v6/ch2_start.png",
    introduction: "大于 1 的整数，如果只有 1 和它本身两个正因数，称为质数（素数）；如果除了 1 和它本身还有其他正因数，称为合数。1 既不是质数也不是合数。2 是唯一的偶质数，也是最小的质数。欧几里得用精妙的反证法证明了质数有无穷多个。在竞赛中，围绕质数的奇偶性（‘看到质数先看 2’）与整除分解，衍生出无穷无尽的精彩难题。",
    teacherTips: "冯志刚领队点拨：\n1. 2 是唯一的偶质数：若两个质数之和或差为奇数，其中一个质数必为 2！这一条是联赛数论最高频的突破口；\n2. 孪生素数猜想背景题：大于 3 的质数除以 6 的余数只能是 1 或 5（即必写为 $6k \\pm 1$）；\n3. 质数无穷性反证法：假设只有有限个质数 $p_1, \\dots, p_k$，构造 $N = p_1 p_2 \\dots p_k + 1$，必然产生新的质因数！",
    keyFormulas: [
      { name: "大于3的质数形式", formula: "p > 3 \\text{ 为质数 } \\implies p \\equiv 1 \\text{ 或 } 5 \\pmod 6 \\quad (p = 6k \\pm 1)" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "偶质数 2 的特殊性与因数分解",
        content: "当质数方程中出现奇偶和差时，立即假设其中一个为最小质数 2。",
        examples: [
          {
            id: "ex6_2_1",
            index: 1,
            title: "质数平方差方程求解",
            stem: "求所有质数对 $(p, q)$，使得 $p^2 - 2q^2 = 1$。",
            analysis: "移项得 $p^2 - 1 = 2q^2 \\implies (p-1)(p+1) = 2q^2$。分析因数分解及 2 的奇偶性！",
            solution: "由题意 $p^2 - 1 = 2q^2 \\implies (p - 1)(p + 1) = 2q^2$。\n若 $p = 2$，则 $4 - 2q^2 = 1 \\implies 2q^2 = 3$（无整数解）。\n因此 $p$ 必为奇质数。\n因为 $p$ 是奇数，所以 $p - 1$ 与 $p + 1$ 都是连续偶数，乘积 $(p-1)(p+1)$ 能被 8 整除（连续两偶数一个为 2 的倍数，一个为 4 的倍数）。\n所以 $2q^2$ 能被 8 整除 $\\implies q^2$ 能被 4 整除 $\\implies q$ 是偶数。\n因为 $q$ 是质数，而唯一的偶质数是 2，所以必须 $q = 2$！\n将 $q = 2$ 代入原式：\n$p^2 - 2(2^2) = 1 \\implies p^2 - 8 = 1 \\implies p^2 = 9$。\n因为 $p$ 是质数，所以 $p = 3$。\n检验：$3^2 - 2(2^2) = 9 - 8 = 1$，满足题意。\n答：满足条件的质数对为 $(p, q) = (3, 2)$。",
            notes: "‘奇质数连续偶数被 8 整除’迫使 $q$ 为偶质数 2，逻辑极其严密。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch2_q1",
        index: 1,
        stem: "若三个质数的积恰好等于它们和的 5 倍，求这三个质数。",
        answer: "$2, 5, 7$",
        analysis: "设为 $p, q, r$。$pqr = 5(p+q+r) \\implies 5 \\mid pqr$。必有一质数为 5，不妨设 $p = 5$。则 $5qr = 5(5+q+r) \\implies qr = 5+q+r \\implies qr - q - r = 5 \\implies (q-1)(r-1) = 6$。若 $q \\le r$，因数分解 $1 \\times 6$ 得 $q-1=1, r-1=6 \\implies q=2, r=7$；$2 \\times 3$ 得 $q-1=2, r-1=3 \\implies q=3, r=4$（4 不是质数，舍去）。故三质数为 $2, 5, 7$。",
        difficulty: "提高",
        type: "质数与整数"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "最大公因数与最小公倍数",
    subtitle: "欧几里得辗转相除法与裴蜀定理",
    bookPageRange: "016-019",
    pdfPageRange: "P22-P25",
    companionImage: "/book_samples/v6/ch3_start.png",
    introduction: "若正整数 $d$ 既整除 $a$ 又整除 $b$，称 $d$ 为公因数，其中最大的称为最大公因数（记作 $(a, b)$ 或 $\\gcd(a, b)$）；正整数 $m$ 若既是 $a$ 的倍数又是 $b$ 的倍数，最小的称为最小公倍数（记作 $[a, b]$ 或 $\\operatorname{lcm}(a, b)$）。两数之积等于它们的最大公因数与最小公倍数之积：$(a, b) \\cdot [a, b] = ab$。欧几里得算法（辗转相除法）则是人类历史上最古老且依然最快的算法之一。",
    teacherTips: "冯志刚领队提点：\n1. 辗转相除法核心恒等式：$\\gcd(a, b) = \\gcd(b, a \\bmod b)$；\n2. 裴蜀定理（Bézout's identity）：对任意整数 $a, b$，必然存在整数 $x, y$ 使得 $ax + by = \\gcd(a, b)$！这是求解不定方程整数解的理论灵魂；\n3. 互质化简法：设 $\\gcd(a, b) = d$，则可设 $a = da_1, b = db_1$，其中 $\\gcd(a_1, b_1) = 1$。",
    keyFormulas: [
      { name: "最大公因与最小公倍恒等式", formula: "(a, b) \\cdot [a, b] = a \\cdot b" },
      { name: "欧几里得辗转相除法", formula: "\\gcd(a, b) = \\gcd(b, r) \\quad (a = bq + r)" },
      { name: "裴蜀定理", formula: "\\exists x, y \\in \\mathbb{Z}, \\quad ax + by = \\gcd(a, b)" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "互质设元与辗转相除法应用",
        content: "把未知量表示为最大公约数的倍数，将问题转化为互质因数的因式分解。",
        examples: [
          {
            id: "ex6_3_1",
            index: 1,
            title: "求最大公约数与最小公倍数方程",
            stem: "已知两个正整数 $a, b$ 满足 $(a, b) = 12$ 且 $[a, b] = 180$。求满足条件的所有无序数对 $\\{a, b\\}$。",
            analysis: "设 $a = 12x, b = 12y$，其中 $\\gcd(x, y) = 1$。利用公式代入！",
            solution: "因为 $(a, b) = 12$，设 $a = 12x, b = 12y$，其中 $x, y$ 为正整数且 $\\gcd(x, y) = 1$。\n由 $[a, b] = 12xy = 180$，\n解得：\n$xy = \\frac{180}{12} = 15$。\n因为 $\\gcd(x, y) = 1$，将 15 拆为两个互质正整数的积：\n1. $\\{x, y\\} = \\{1, 15\\}$，对应 $\\{a, b\\} = \\{12 \\times 1, 12 \\times 15\\} = \\{12, 180\\}$；\n2. $\\{x, y\\} = \\{3, 5\\}$，对应 $\\{a, b\\} = \\{12 \\times 3, 12 \\times 5\\} = \\{36, 60\\}$。\n答：满足条件的无序数对为 $\\{12, 180\\}$ 和 $\\{36, 60\\}$。",
            notes: "设出最大公约数化归为互质数对，是解决 GCD/LCM 问题的标准套路。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch3_q1",
        index: 1,
        stem: "用辗转相除法求 2024 与 782 的最大公因数。",
        answer: "$46$",
        analysis: "$2024 = 782 \\times 2 + 460$；$782 = 460 \\times 1 + 322$；$460 = 322 \\times 1 + 138$；$322 = 138 \\times 2 + 46$；$138 = 46 \\times 3 + 0$。故 $\\gcd(2024, 782) = 46$。",
        difficulty: "基础",
        type: "质数与整数"
      }
    ]
  },
  {
    id: "ch4",
    number: 4,
    title: "算术基本定理",
    subtitle: "唯一分解定理、约数个数与勒让德公式",
    bookPageRange: "020-022",
    pdfPageRange: "P26-P28",
    companionImage: "/book_samples/v6/ch4_start.png",
    introduction: "算术基本定理又称唯一分解定理：任何大于 1 的正整数 $n$ 都可以唯一地写成质数的乘积形式 $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k}$（质因数按从小到大排列）。这一定理是数论大厦的真正中枢。由此可以精确推导出正约数个数公式、正约数和公式，以及阶乘中质因数幂次的勒让德（Legendre）公式。",
    teacherTips: "冯志刚领队传授唯一分解核心公式：\n1. 正约数个数：$d(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\dots (\\alpha_k + 1)$；\n2. 勒让德公式（阶乘 $n!$ 中质因数 $p$ 的最高幂次）：$E_p(n!) = \\sum_{k=1}^\\infty \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor = \\left\\lfloor \\frac{n}{p} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^2} \\right\\rfloor + \\dots$；\n3. 阶乘末尾 0 的个数就是 $E_5(n!)$！",
    keyFormulas: [
      { name: "算术基本定理标准分解式", formula: "n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k} \\quad (p_1 < p_2 < \\dots < p_k)" },
      { name: "正约数个数公式", formula: "d(n) = \\prod_{i=1}^k (\\alpha_i + 1)" },
      { name: "勒让德公式", formula: "E_p(n!) = \\sum_{k=1}^\\infty \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor" }
    ],
    subsections: [
      {
        id: "4.1",
        number: "4.1",
        title: "勒让德公式与阶乘末尾零的计数",
        content: "计算 $n!$ 末尾连续 0 的个数，等价于求其因数中包含 10 的个数，即质因数 5 的最高幂次。",
        examples: [
          {
            id: "ex6_4_1",
            index: 1,
            title: "求阶乘末尾连续 0 的个数",
            stem: "求 $100! = 1 \\times 2 \\times 3 \\times \\dots \\times 100$ 的末尾连续有多少个零？",
            analysis: "末尾 0 由 $2 \\times 5 = 10$ 产生。在 $100!$ 中质因数 2 远多于 5，故只需计算 5 的最高幂次 $E_5(100!)$！",
            solution: "由勒让德公式：\n$E_5(100!) = \\left\\lfloor \\frac{100}{5} \\right\\rfloor + \\left\\lfloor \\frac{100}{25} \\right\\rfloor + \\left\\lfloor \\frac{100}{125} \\right\\rfloor + \\dots$\n计算各项：\n$\\left\\lfloor \\frac{100}{5} \\right\\rfloor = 20$,\n$\\left\\lfloor \\frac{100}{25} \\right\\rfloor = 4$,\n$\\left\\lfloor \\frac{100}{125} \\right\\rfloor = 0$。\n相加得：\n$E_5(100!) = 20 + 4 + 0 = 24$。\n答：$100!$ 的末尾连续有 24 个零。",
            notes: "勒让德公式是初中数论中极具威力的解析工具。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch4_q1",
        index: 1,
        stem: "求正整数 360 的所有正约数的个数。",
        answer: "$24$",
        analysis: "$360 = 2^3 \\times 3^2 \\times 5^1$。正约数个数 $d(360) = (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24$。",
        difficulty: "基础",
        type: "质数与整数"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "同余的概念与性质",
    subtitle: "高斯同余算术与余数运算律",
    bookPageRange: "023-029",
    pdfPageRange: "P29-P35",
    companionImage: "/book_samples/v6/ch5_start.png",
    introduction: "若两个整数 $a, b$ 除以正整数 $m$ 所得的余数相同，称 $a$ 与 $b$ 对模 $m$ 同余，记作 $a \\equiv b \\pmod m$。同余符号‘$\\equiv$’由数学王子高斯首创。它具有加、减、乘、乘方运算完全保同余的优良性质。同余将无限的整数全集压缩为模 $m$ 下的有限个等价类，使得周期性问题与末位数字计算迎刃而解。",
    teacherTips: "冯志刚领队提点：\n1. 同余定义三等价：$a \\equiv b \\pmod m \\iff m \\mid (a - b) \\iff a = mq + b$；\n2. 同余四则运算：可以自由加减乘乘方，但除法必须慎重！若 $ca \\equiv cb \\pmod m$，仅当 $\\gcd(c, m) = 1$ 时才可以约去 $c$（得到 $a \\equiv b \\pmod m$）；\n3. 负余数技巧：$m-1 \\equiv -1 \\pmod m$！遇到接近模的数，用 $-1$ 代换可以极大简化乘方计算！",
    keyFormulas: [
      { name: "同余乘方性质", formula: "a \\equiv b \\pmod m \\implies a^k \\equiv b^k \\pmod m \\quad (k \\in \\mathbb{N}^+)" },
      { name: "负余数代换", formula: "m - 1 \\equiv -1 \\pmod m \\implies (m - 1)^k \\equiv (-1)^k \\pmod m" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "负同余与大数末位数字及余数速算",
        content: "利用 $a \\equiv -1 \\pmod m$ 的性质，将超大次幂快速化简为 $\\pm 1$。",
        examples: [
          {
            id: "ex6_5_1",
            index: 1,
            title: "同余的可乘幂性计算大数末位",
            stem: "求 $7^{2024}$ 的末两位数字。",
            analysis: "求末两位数字即计算模 100 的同余类。寻找模 100 的周期：$7^4 = 2401 \\equiv 1 \\pmod{100}$！",
            solution: "计算 7 的较小乘方模 100：\n$7^1 = 7 \\equiv 7 \\pmod{100}$；\n$7^2 = 49 \\equiv 49 \\pmod{100}$；\n$7^4 = (7^2)^2 = 49^2 = 2401 \\equiv 1 \\pmod{100}$！\n由于 $2024 = 4 \\times 506$，所以：\n$7^{2024} = (7^4)^{506} \\equiv 1^{506} \\equiv 1 \\pmod{100}$。\n故 $7^{2024}$ 的末两位数字是 01。",
            notes: "同余将庞大的指数转化为模数下的周期规律。"
          },
          {
            id: "ex6_5_2",
            index: 2,
            title: "同余加减性质与弃九法证明整除",
            stem: "求证：若一个自然数的各位数字之和能被 9 整除，则该数本身必能被 9 整除。",
            analysis: "利用十进制展开式与同余 $10 \\equiv 1 \\pmod{9}$ 的基本乘幂性质。",
            solution: "设该正整数为 $N = \\overline{a_n a_{n-1} \\dots a_1 a_0} = a_n 10^n + a_{n-1} 10^{n-1} + \\dots + a_1 10 + a_0$。\n因为 $10 \\equiv 1 \\pmod{9}$，根据同余的乘幂性质，对任意正整数 $k$，都有：\n$10^k \\equiv 1^k \\equiv 1 \\pmod{9}$。\n两边乘以系数 $a_k$ 并求和：\n$N = \\sum_{k=0}^n a_k 10^k \\equiv \\sum_{k=0}^n a_k (1) = a_n + a_{n-1} + \\dots + a_0 \\pmod{9}$。\n因此 $N \\equiv (\\text{数字之和}) \\pmod{9}$。\n当且仅当各位数字之和为 9 的倍数时，$N$ 能被 9 整除！",
            notes: "十进制基底同余是整除特征的底层代数本质。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch5_q1",
        index: 1,
        stem: "求 $3^{2024}$ 除以 13 的余数。",
        answer: "3",
        analysis: "因为 $3^3 = 27 \\equiv 1 \\pmod{13}$！\n指数 $2024 = 3 \\times 674 + 2$。\n所以 $3^{2024} = (3^3)^{674} \\times 3^2 \\equiv 1^{674} \\times 9 = 9 \\pmod{13}$。故余数为 9。",
        difficulty: "基础",
        type: "数论证明"
      },
      {
        id: "v6_ch5_q2",
        index: 2,
        stem: "求证：对任意自然数 $n$，$n^3 + 2n$ 必能被 3 整除。",
        answer: "分类讨论模 3 或因式分解得证",
        analysis: "方法一：因式分解 $n^3 + 2n = n(n^2 + 2) = n(n^2 - 1 + 3) = (n-1)n(n+1) + 3n$。连续三整数之积必为 3 的倍数，加上 $3n$，故整体必被 3 整除。\n方法二：模 3 剩余系：若 $n \\equiv 0$，则 $0$；若 $n \\equiv 1$，则 $1 + 2 = 3 \\equiv 0$；若 $n \\equiv 2$，则 $8 + 4 = 12 \\equiv 0$。恒成立。",
        difficulty: "基础",
        type: "数论证明"
      },
      {
        id: "v6_ch5_q3",
        index: 3,
        stem: "求 $2^{70} + 3^{70}$ 除以 13 的余数。",
        answer: "0",
        analysis: "模 13 计算：\n$2^6 = 64 \\equiv -1 \\pmod{13} \\implies 2^{12} \\equiv 1 \\pmod{13}$；$70 = 12 \\times 5 + 10$。$2^{10} = 1024 = 78 \\times 13 + 10 \\equiv -3 \\pmod{13}$？\n直接用负数：$3^3 = 27 \\equiv 1 \\pmod{13}$。$70 = 3 \\times 23 + 1 \\implies 3^{70} = (3^3)^{23} \\times 3 \\equiv 1 \\times 3 = 3 \\pmod{13}$。\n$2^4 = 16 \\equiv 3 \\implies 2^{12} \\equiv 27 \\equiv 1 \\pmod{13}$。$2^{70} = (2^{12})^5 \\times 2^{10} \\equiv 2^{10} = (2^4)^2 \\times 4 \\equiv 3^2 \\times 4 = 36 \\equiv 10 \\equiv -3 \\pmod{13}$。\n故 $2^{70} + 3^{70} \\equiv -3 + 3 = 0 \\pmod{13}$。\n因此余数为 0（整除）！",
        difficulty: "提高",
        type: "数论证明"
      }
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "剩余系",
    subtitle: "完全剩余系、简化剩余系与欧拉函数 $\\varphi(n)$",
    bookPageRange: "030-035",
    pdfPageRange: "P36-P41",
    companionImage: "/book_samples/v6/ch6_start.png",
    introduction: "模 $m$ 的完全剩余系是指包含模 $m$ 下每一个余数代表元的一组数（最标准为 $\\{0, 1, 2, \\dots, m-1\\}$）。而在完全剩余系中，所有与 $m$ 互质的数构成的集合称为‘简化剩余系’（既约剩余系）。简化剩余系中元素的个数由著名数学大师欧拉命名为欧拉函数 $\\varphi(m)$。剩余系的构造是证明费马小定理与中国剩余定理的根基。",
    teacherTips: "冯志刚领队提点：\n1. 完全剩余系平移与数乘：若 $\\{r_1, \\dots, r_m\\}$ 是模 $m$ 的完全剩余系且 $\\gcd(a, m) = 1$，则 $\\{ar_1+b, \\dots, ar_m+b\\}$ 仍然是模 $m$ 的完全剩余系！\n2. 欧拉函数计算公式：$\\varphi(m) = m \\prod_{p \\mid m} \\left(1 - \\frac{1}{p}\\right)$；当 $p$ 为质数时，$\\varphi(p) = p - 1$。",
    keyFormulas: [
      { name: "欧拉函数计算公式", formula: "\\varphi(n) = n \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right)" },
      { name: "完全剩余系乘变换定理", formula: "\\gcd(a, m) = 1 \\implies \\{a r_i\\} \\text{ 仍为模 } m \\text{ 的完全剩余系}" }
    ],
    subsections: [
      {
        id: "6.1",
        number: "6.1",
        title: "欧拉函数计算与完全剩余系置换",
        content: "利用欧拉函数计算小于等于 $n$ 且与 $n$ 互质的正整数个数，为欧拉定理铺路。",
        examples: [
          {
            id: "ex6_6_1",
            index: 1,
            title: "欧拉函数计算",
            stem: "求 $\\varphi(100)$ 的值，即小于等于 100 且与 100 互质的正整数个数。",
            analysis: "先对 100 质因数分解：$100 = 2^2 \\times 5^2$。应用欧拉函数公式！",
            solution: "$100$ 的质因数分解为 $100 = 2^2 \\times 5^2$。\n质因数只有 2 和 5。\n根据欧拉函数公式：\n$\\varphi(100) = 100 \\times \\left(1 - \\frac{1}{2}\\right) \\times \\left(1 - \\frac{1}{5}\\right) = 100 \\times \\frac{1}{2} \\times \\frac{4}{5} = 40$。\n答：小于等于 100 且与 100 互质的正整数共有 40 个。",
            notes: "利用容斥原理亦可求出：$100 - 50 - 20 + 10 = 40$。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch6_q1",
        index: 1,
        stem: "若 $p$ 为质数，求 $\\varphi(p^2)$ 的表达式。",
        answer: "$p^2 - p = p(p-1)$",
        analysis: "在 $1, 2, \\dots, p^2$ 中，只有 $p$ 的倍数与 $p^2$ 不互质。$p$ 的倍数有 $p, 2p, \\dots, p \\cdot p$ 共 $p$ 个。故 $\\varphi(p^2) = p^2 - p$。",
        difficulty: "基础",
        type: "质数与整数"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "费马小定理与欧拉定理初阶",
    subtitle: "数论巅峰定理、幂余速算与逆元概念",
    bookPageRange: "036-040",
    pdfPageRange: "P42-P46",
    companionImage: "/book_samples/v6/ch7_start.png",
    introduction: "费马小定理（Fermat's Little Theorem）指出：若 $p$ 为质数，且整数 $a$ 不能被 $p$ 整除，则 $a^{p-1} \\equiv 1 \\pmod p$！欧拉将其推广为更广泛的欧拉定理：若 $\\gcd(a, m) = 1$，则 $a^{\\varphi(m)} \\equiv 1 \\pmod m$。这两个定理是近现代密码学（如 RSA 加密算法）的数学心脏，也是竞赛中简化超大指数模运算的无上重器。",
    teacherTips: "费马小定理实战口诀：\n看到‘质数模 $p$’与‘大指数’，立即将指数除以 $p-1$ 取余数！\n即：$a^n \\equiv a^{n \\bmod (p-1)} \\pmod p$！这能将上千上万的超大指数瞬间压缩到 $p-1$ 以内！",
    keyFormulas: [
      { name: "费马小定理", formula: "a^{p-1} \\equiv 1 \\pmod p \\quad (p \\text{ 为质数}, p \\nmid a)" },
      { name: "欧拉定理", formula: "a^{\\varphi(m)} \\equiv 1 \\pmod m \\quad (\\gcd(a, m) = 1)" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "利用费马小定理降幂速算",
        content: "当模 $p$ 是质数时，指数可以对 $p-1$ 取模，大幅度化简高次幂的余数。",
        examples: [
          {
            id: "ex6_7_1",
            index: 1,
            title: "费马小定理降幂求余数",
            stem: "求 $3^{1000}$ 除以 13 的余数。",
            analysis: "13 是质数且 $13 \\nmid 3$。由费马小定理：$3^{12} \\equiv 1 \\pmod{13}$！指数 1000 对 12 取模！",
            solution: "因为 13 是质数且 $\\gcd(3, 13) = 1$。\n由费马小定理：\n$3^{13 - 1} = 3^{12} \\equiv 1 \\pmod{13}$。\n计算指数对 12 的除法：\n$1000 = 12 \\times 83 + 4$。\n因此：\n$3^{1000} = (3^{12})^{83} \\times 3^4 \\equiv 1^{83} \\times 81 \\equiv 81 \\pmod{13}$。\n因为 $81 = 13 \\times 6 + 3$，所以：\n$81 \\equiv 3 \\pmod{13}$。\n答：$3^{1000}$ 除以 13 的余数是 3。",
            notes: "指数直接对 12 降幂，计算量瞬间从上千降到一位数。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch7_q1",
        index: 1,
        stem: "求证：对任意正整数 $n$，$n^7 - n$ 必能被 42 整除。",
        answer: "见解析",
        analysis: "$42 = 2 \\times 3 \\times 7$。由费马小定理：$n^7 \\equiv n \\pmod 7 \\implies 7 \\mid (n^7-n)$；$n^7 - n = n(n^6 - 1) = n(n^2-1)(n^4+n^2+1) = n(n-1)(n+1)(n^4+n^2+1)$。因连续三整数乘积必为 6 的倍数，故 $6 \\mid (n^7-n)$。因为 $\\gcd(6, 7) = 1$，所以 $42 \\mid (n^7-n)$。",
        difficulty: "提高",
        type: "数论证明"
      }
    ]
  },
  {
    id: "ch8",
    number: 8,
    title: "奇偶性分析法",
    subtitle: "数论中的黑白棋、对称性与矛盾否定利剑",
    bookPageRange: "041-043",
    pdfPageRange: "P47-P49",
    companionImage: "/book_samples/v6/ch8_start.png",
    introduction: "整数按能否被 2 整除，被完全划分为奇数和偶数。奇偶分析法（模 2 同余）是初等数论中最质朴却极具杀伤力的武器：奇数加减奇数得偶数，奇数乘以奇数得奇数。许多看似复杂的整除存在性、方程无解性以及网格覆盖问题，通过统计奇偶个数或分析等式两边的奇偶不一致，往往能‘一票否决’直接证毕！",
    teacherTips: "冯志刚领队传授奇偶性三大利器：\n1. 连续整数积必为偶数：$n(n+1) \\equiv 0 \\pmod 2$；\n2. 完全平方数的奇偶性：奇数的平方模 4 余 1，偶数的平方模 4 余 0（永远不模 4 余 2 或 3！）；\n3. 奇偶守恒与不变量：在翻转卡片、移动棋子中，奇偶性往往是恒定不变的不变量。",
    keyFormulas: [
      { name: "完全平方数模4性质", formula: "n^2 \\equiv 0 \\text{ 或 } 1 \\pmod 4" }
    ],
    subsections: [
      {
        id: "8.1",
        number: "8.1",
        title: "等式奇偶矛盾法证明无解",
        content: "当证明方程没有整数解时，先假设有解，分析等式左端与右端的奇偶性冲突得出矛盾。",
        examples: [
          {
            id: "ex6_8_1",
            index: 1,
            title: "奇偶分析证明方程无整数解",
            stem: "证明：方程 $x^2 - y^2 = 2026$ 没有整数解。",
            analysis: "因式分解左边 $(x-y)(x+y)$，分析 $x-y$ 与 $x+y$ 的奇偶性！",
            solution: "证明（反证法）：\n假设存在整数 $x, y$ 使得 $x^2 - y^2 = 2026$。\n左边因式分解：$(x - y)(x + y) = 2026$。\n注意到两因数的和为：\n$(x - y) + (x + y) = 2x$（偶数）。\n两个整数的和为偶数，则它们的奇偶性必须相同（要么同为奇数，要么同为偶数）：\n1. 若两数同为奇数，则它们的乘积必须为奇数，但 2026 是偶数，矛盾！\n2. 若两数同为偶数，则每一项都至少含有因数 2，它们的乘积必然能被 4 整除！\n然而 $2026 = 4 \\times 506 + 2$，不能被 4 整除，矛盾！\n因此，方程 $x^2 - y^2 = 2026$ 不可能有整数解。\n证毕。",
            notes: "平方差必为奇数或 4 的倍数（模 4 余 0 或 1），绝不可能模 4 余 2。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch8_q1",
        index: 1,
        stem: "若 $a, b, c$ 都是奇数，证明：一元二次方程 $ax^2 + bx + c = 0$ 没有有理数根。",
        answer: "见解析",
        analysis: "判别式 $\\Delta = b^2 - 4ac$。若有有理根，$\\Delta$ 必须是完全平方数。因为 $b$ 是奇数，所以 $b^2 \\equiv 1 \\pmod 8$；$4ac$ 中因 $a, c$ 奇数故 $4ac \\equiv 4 \\pmod 8$。从而 $\\Delta = b^2 - 4ac \\equiv 1 - 4 = -3 \\equiv 5 \\pmod 8$。但任何奇数的完全平方数模 8 恒余 1，矛盾！故无有理根。",
        difficulty: "提高",
        type: "数论证明"
      }
    ]
  },
  {
    id: "ch9",
    number: 9,
    title: "完全平方数的同余性质",
    subtitle: "模 3、模 4、模 8 余数约束与无穷递降法",
    bookPageRange: "044-047",
    pdfPageRange: "P50-P53",
    companionImage: "/book_samples/v6/ch9_start.png",
    introduction: "完全平方数在模算术下具有极其严苛的余数限制：模 3 只能余 0 或 1；模 4 只能余 0 或 1；模 5 只能余 0, 1, 4；模 8 只能余 0, 1, 4（特别地，奇数的平方模 8 必余 1）。这一强同余特征使得我们在证明不定方程无解时，只需选取恰当的模（如 3, 4, 8），就能利用两边余数的矛盾一举破题！",
    teacherTips: "完全平方数必须背诵的黄金余数表：\n- 模 3：$n^2 \\equiv 0, 1 \\pmod 3$（永不余 2）；\n- 模 4：$n^2 \\equiv 0, 1 \\pmod 4$（永不余 2, 3）；\n- 模 8：奇数平方必余 1（$(2k+1)^2 = 4k(k+1)+1 \\equiv 1 \\pmod 8$）！看到奇数平方直接写 $\\equiv 1 \\pmod 8$！",
    keyFormulas: [
      { name: "完全平方数模3与模4性质", formula: "n^2 \\equiv 0, 1 \\pmod 3, \\quad n^2 \\equiv 0, 1 \\pmod 4" },
      { name: "奇数平方模8性质", formula: "(2k + 1)^2 \\equiv 1 \\pmod 8" }
    ],
    subsections: [
      {
        id: "9.1",
        number: "9.1",
        title: "选模分析法证明平方和方程无解",
        content: "在面对平方和与常数方程时，对等式两边同时模 4 或模 8 考察余数集合。",
        examples: [
          {
            id: "ex6_9_1",
            index: 1,
            title: "选模 4 证明方程无整数解",
            stem: "证明：方程 $x^2 + y^2 = 2027$ 没有整数解。",
            analysis: "考察完全平方数模 4 的可能余数：$x^2, y^2 \\in \\{0, 1\\} \\pmod 4$！",
            solution: "证明：\n对任意整数 $n$，$n^2 \\equiv 0$ 或 $1 \\pmod 4$。\n因此两个完全平方数的和 $x^2 + y^2$ 模 4 的可能余数为：\n$0 + 0 = 0$,\n$0 + 1 = 1$,\n$1 + 1 = 2$。\n即 $x^2 + y^2 \\equiv 0, 1, 2 \\pmod 4$（绝不可能模 4 余 3）。\n而等式右边的常数：\n$2027 = 4 \\times 506 + 3 \\equiv 3 \\pmod 4$。\n等式左端模 4 余数只能是 0, 1 或 2，右端模 4 余数是 3，产生矛盾！\n因此方程 $x^2 + y^2 = 2027$ 不可能有整数解。\n证毕。",
            notes: "模 4 筛选法是初中竞赛最经典、最纯粹的数论证明典范。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch9_q1",
        index: 1,
        stem: "证明：形如 $8k + 7$ 的正整数不能表示为三个完全平方数的和。",
        answer: "见解析",
        analysis: "完全平方数模 8 的可能余数只有 0, 1, 4。三个数来自 $\\{0, 1, 4\\}$，其和模 8 的最大值为 $1+1+1=3, 4+1+1=6, 4+4+4=12 \\equiv 4$ 等。穷举所有组合 $\\{a, b, c\\} \\subset \\{0, 1, 4\\}$，三数之和模 8 绝不可能等于 7。证毕。",
        difficulty: "提高",
        type: "数论证明"
      }
    ]
  },
  {
    id: "ch10",
    number: 10,
    title: "一次不定方程",
    subtitle: "裴蜀定理、二元一次不定方程通解与非负解计数",
    bookPageRange: "048-057",
    pdfPageRange: "P54-P63",
    companionImage: "/book_samples/v6/ch10_start.png",
    introduction: "形如 $ax + by = c$ 的方程，其中 $a, b, c$ 为整数且要求未知数 $x, y$ 也是整数，称为二元一次不定方程。由裴蜀定理知，它有整数解的充要条件是 $\\gcd(a, b) \\mid c$。若 $(x_0, y_0)$ 是一组特解，则全部通解具有极其规整的周期形式：$x = x_0 + \\frac{b}{d}t, y = y_0 - \\frac{a}{d}t$。弗罗贝尼乌斯硬币兑换问题更是该领域的著名扩展。",
    teacherTips: "冯志刚领队传授通解步骤：\n1. 判别可解性：先算 $d = \\gcd(a, b)$，若 $d \\nmid c$ 直接断言无整数解；\n2. 找特解两法：系数小时观察试探；系数大时用辗转相除法逆推；\n3. 写通解公式：$x = x_0 + (b/d)t, y = y_0 - (a/d)t$（$t \\in \\mathbb{Z}$）；\n4. 约束求个数：若求正整数解，列不等式 $x > 0, y > 0$ 夹出参数 $t$ 的整数个数！",
    keyFormulas: [
      { name: "二元一次不定方程通解公式", formula: "\\begin{cases} x = x_0 + \\frac{b}{d} t \\\\ y = y_0 - \\frac{a}{d} t \\end{cases} \\quad (t \\in \\mathbb{Z}, d = \\gcd(a, b))" },
      { name: "麦克唐纳最大不能表示数公式", formula: "g(a, b) = ab - a - b \\quad (\\gcd(a, b) = 1)" }
    ],
    subsections: [
      {
        id: "10.1",
        number: "10.1",
        title: "辗转相除逆推特解与通解公式",
        content: "利用欧几里得算法逆向代入求出一组特解 $(x_0, y_0)$，写出通解表达式。",
        examples: [
          {
            id: "ex6_10_1",
            index: 1,
            title: "求二元一次不定方程的通解及正整数解",
            stem: "求方程 $7x + 11y = 100$ 的所有正整数解。",
            analysis: "先观察或辗转相除找一组特解。再根据通解列出 $x > 0, y > 0$ 不等式！",
            solution: "因为 $\\gcd(7, 11) = 1$，且 $1 \\mid 100$，方程必有整数解。\n先找一组特解：\n观察模 11：$7x \\equiv 100 \\equiv 1 \\pmod{11}$。\n因为 $7 \\times 8 = 56 = 55 + 1 \\equiv 1 \\pmod{11}$，可取 $x_0 = 8$。\n代入原方程：$7(8) + 11y = 100 \\implies 56 + 11y = 100 \\implies 11y = 44 \\implies y_0 = 4$。\n得到特解 $(x_0, y_0) = (8, 4)$。\n通解公式为：\n$\\begin{cases} x = 8 + 11t \\\\ y = 4 - 7t \\end{cases} \\quad (t \\in \\mathbb{Z})$。\n要求正整数解，即 $x > 0$ 且 $y > 0$：\n$8 + 11t > 0 \\implies t > -\\frac{8}{11} \\approx -0.72$；\n$4 - 7t > 0 \\implies t < \\frac{4}{7} \\approx 0.57$。\n因为 $t$ 是整数，所以在 $(-0.72, 0.57)$ 之间的整数只有 $t = 0$！\n当 $t = 0$ 时，$\\begin{cases} x = 8 \\\\ y = 4 \\end{cases}$。\n答：方程唯一的正整数解为 $\\begin{cases} x = 8 \\\\ y = 4 \\end{cases}$。",
            notes: "通解公式结合区间夹逼，迅速确定唯一正整数解。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch10_q1",
        index: 1,
        stem: "求用 3 分和 5 分邮票凑出邮资，最大不能凑出的邮资是多少分？",
        answer: "$7$ 分",
        analysis: "由弗罗贝尼乌斯公式：$g(a, b) = ab - a - b = 3 \\times 5 - 3 - 5 = 15 - 8 = 7$ 分。",
        difficulty: "基础",
        type: "数论证明"
      }
    ]
  },
  {
    id: "ch11",
    number: 11,
    title: "不定方程的常用解法",
    subtitle: "因式分解法、不等式夹逼法与同余筛选法",
    bookPageRange: "058-068",
    pdfPageRange: "P64-P74",
    companionImage: "/book_samples/v6/ch11_start.png",
    introduction: "非线性不定方程没有像线性方程那样统一的通解公式，但历代数学家总结出了三大行之有效的主流战术：\n1. 因式分解法：移项将多项式整理为 $(A)(B) = C$（常数），将问题化归为有限个因数分解组合；\n2. 不等式夹逼法：利用不等式或对称性（如设 $x \\le y \\le z$）将无限整数空间压入有限范围；\n3. 同余筛选法：利用模算术排除伪解。",
    teacherTips: "冯志刚领队传授不定方程三大拆招秘籍：\n1. 看到乘积与和交织（如 $xy - 2x - 3y = 5$）：两边加上常数使左边能分组分解为 $(x-3)(y-2) = 11$！\n2. 看到单位分数倒数和（如 $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{p}$）：去分母后移项化为 $(x-p)(y-p) = p^2$！\n3. 对称多元方程：大胆假设大小次序 $x \\le y \\le z$，往往能一举夹出最小变量的上限！",
    keyFormulas: [
      { name: "双一次项因式分解标准形", formula: "xy - ax - by = c \\iff (x - b)(y - a) = c + ab" },
      { name: "倒数和化简方程", formula: "\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{n} \\iff (x - n)(y - n) = n^2" }
    ],
    subsections: [
      {
        id: "11.1",
        number: "11.1",
        title: "倒数和方程与因式分解求解",
        content: "将倒数和方程化为标准双一次乘积形式，枚举因数对求解全部整数解。",
        examples: [
          {
            id: "ex6_11_1",
            index: 1,
            title: "求单位分数方程的正整数解",
            stem: "求方程 $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{4}$ 的所有正整数解 $(x, y)$，其中 $x \\le y$。",
            analysis: "去分母得 $4x + 4y = xy \\implies xy - 4x - 4y = 0$。两边同时加 16 凑出完全因式分解！",
            solution: "两边同乘以 $4xy$：\n$4y + 4x = xy \\implies xy - 4x - 4y = 0$。\n两边同时加上 16：\n$xy - 4x - 4y + 16 = 16 \\implies (x - 4)(y - 4) = 16$。\n因为 $x, y$ 是正整数，且 $x \\le y$（由于 $\\frac{1}{x} < \\frac{1}{4}$，知 $x > 4$），\n所以 $x - 4$ 与 $y - 4$ 是正整数且 $x - 4 \\le y - 4$。\n16 的正因数乘积分解有三组：\n1. $\\begin{cases} x - 4 = 1 \\\\ y - 4 = 16 \\end{cases} \\implies \\begin{cases} x = 5 \\\\ y = 20 \\end{cases}$；\n2. $\\begin{cases} x - 4 = 2 \\\\ y - 4 = 8 \\end{cases} \\implies \\begin{cases} x = 6 \\\\ y = 12 \\end{cases}$；\n3. $\\begin{cases} x - 4 = 4 \\\\ y - 4 = 4 \\end{cases} \\implies \\begin{cases} x = 8 \\\\ y = 8 \\end{cases}$。\n答：满足 $x \\le y$ 的正整数解为 $(5, 20), (6, 12), (8, 8)$ 共 3 组。",
            notes: "凑因式分解将非线性方程彻底转化为正约数枚举。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch11_q1",
        index: 1,
        stem: "求满足 $xy + 2x - 3y = 11$ 的所有正整数解 $(x, y)$。",
        answer: "$(4, 3)$ 或 $(8, 1)$",
        analysis: "变形为 $x(y+2) - 3(y+2) + 6 = 11 \\implies (x-3)(y+2) = 5$。因为 $y \\ge 1$，所以 $y+2 \\ge 3$。5 的正因数只有 1 和 5，故 $y+2=5 \\implies y=3$，此时 $x-3=1 \\implies x=4$。若允许负数可另算。正整数解为 $(4, 3)$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  },
  {
    id: "ch12",
    number: 12,
    title: "勾股方程与非线性不定方程",
    subtitle: "费马大定理初阶、本原勾股数构造与二次不定方程",
    bookPageRange: "069-092",
    pdfPageRange: "P75-P98",
    companionImage: "/book_samples/v6/ch12_start.png",
    introduction: "满足 $x^2 + y^2 = z^2$ 的正整数三元组 $(x, y, z)$ 称为勾股数（勾股数组）。当 $\\gcd(x, y, z) = 1$ 时称为本原勾股数。两千年前欧几里得就给出了本原勾股数的全部通解构造公式：$x = m^2 - n^2, y = 2mn, z = m^2 + n^2$。法国数学家费马在此基础上提出了名垂青史的费马大定理（当 $n > 2$ 时 $x^n + y^n = z^n$ 无正整数解）。本讲深入剖析勾股方程通解推导与高阶非线性丢番图方程。",
    teacherTips: "冯志刚领队全书结语：\n1. 本原勾股数特征：$x$ 与 $y$ 必为一奇一偶，斜边 $z$ 必为奇数；面积 $S = \\frac{1}{2}xy = mn(m^2-n^2)$ 必能被 6 整除！\n2. 构造公式推导核心：将 $x^2 + y^2 = z^2$ 改写为 $\\left(\\frac{x}{z}\\right)^2 + \\left(\\frac{y}{z}\\right)^2 = 1$，转化为单位圆上的有理点，利用斜率参数 $t = n/m$ 立即可求出全部有理通解！",
    keyFormulas: [
      { name: "本原勾股数欧几里得构造公式", formula: "x = m^2 - n^2, \\quad y = 2mn, \\quad z = m^2 + n^2 \\quad (m > n > 0, \\gcd(m, n) = 1, m, n \\text{ 奇偶相异})" }
    ],
    subsections: [
      {
        id: "12.1",
        number: "12.1",
        title: "本原勾股数的构造与整除性质",
        content: "证明任何本原勾股数中，必有一个数被 3 整除，必有一个数被 4 整除，必有一个数被 5 整除。",
        examples: [
          {
            id: "ex6_12_1",
            index: 1,
            title: "勾股数乘积的整除性质证明",
            stem: "已知正整数 $x, y, z$ 满足 $x^2 + y^2 = z^2$。求证：乘积 $xyz$ 必然是 60 的倍数。",
            analysis: "$60 = 3 \\times 4 \\times 5$。只需分别证明 $3 \\mid xyz, 4 \\mid xyz, 5 \\mid xyz$！",
            solution: "证明：\n1. 证明 $4 \\mid xyz$：\n若 $x, y$ 均为奇数，则 $x^2 + y^2 \\equiv 1 + 1 = 2 \\pmod 4$，但完全平方数 $z^2 \\equiv 0$ 或 $1 \\pmod 4$，矛盾！\n因此 $x, y$ 中至少有一个是偶数。\n更进一步，由勾股数构造公式，偶数项为 $2mn$。若 $m, n$ 一奇一偶，则 $2mn$ 是 4 的倍数；若非本原亦能被 4 整除。故 $4 \\mid xyz$。\n2. 证明 $3 \\mid xyz$：\n因为完全平方数模 3 只能余 0 或 1。\n若 $x, y$ 都不能被 3 整除，则 $x^2 \\equiv 1, y^2 \\equiv 1 \\pmod 3$。\n从而 $z^2 = x^2 + y^2 \\equiv 1 + 1 = 2 \\pmod 3$。但完全平方数不可能模 3 余 2，矛盾！\n所以 $x, y$ 中至少有一个能被 3 整除，故 $3 \\mid xyz$。\n3. 证明 $5 \\mid xyz$：\n完全平方数模 5 只能余 0, 1, 4。\n若 $x, y, z$ 都不能被 5 整除，则它们的平方只能取 1 或 4：\n可能的两两和：$1+1=2, 1+4=5 \\equiv 0, 4+4=8 \\equiv 3 \\pmod 5$。\n其中都不可能等于 1 或 4（即 $z^2$），矛盾！\n所以 $x, y, z$ 中至少有一个能被 5 整除，故 $5 \\mid xyz$。\n综上，因为 $3, 4, 5$ 两两互质，所以：\n$3 \\times 4 \\times 5 = 60 \\mid xyz$。\n证毕。",
            notes: "选模 3, 4, 5 进行完全平方数同余排查，是数论证明整除倍数的巅峰范本。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch12_q1",
        index: 1,
        stem: "斜边为 13 的直角三角形，求其两直角边的整数长。",
        answer: "$5$ 和 $12$",
        analysis: "由 $x^2 + y^2 = 13^2 = 169$。$m^2 + n^2 = 13 \\implies 9 + 4 = 13 \\implies m = 3, n = 2$。直角边为 $x = m^2 - n^2 = 9 - 4 = 5, y = 2mn = 2 \\times 3 \\times 2 = 12$。",
        difficulty: "基础",
        type: "方程求解"
      }
    ]
  }
];
