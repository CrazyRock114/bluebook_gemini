import { Chapter } from "@/types/book";

export const VOL6_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "整除的概念、性质与素数合数",
    subtitle: "带余除法、最大公因数与算术基本定理",
    bookPageRange: "001-022",
    pdfPageRange: "P8-P29",
    companionImage: "/book_samples/v6/ch1_start.png",
    introduction: "任意两个整数相加、相减或相乘，结果仍然是整数。但是两个整数相除，结果却不一定是整数。数论的宏伟大厦，正是从研究整数之间的除法关系开始建立的。设 $a, b$ 为整数且 $a \\neq 0$，如果存在整数 $c$ 使得 $b = ac$，则称 $a$ 整除 $b$（记作 $a \\mid b$）。素数则是整数大厦中的‘原子’。",
    teacherTips: "冯志刚领队传授数论基石：\n1. 传递性与线性性质：若 $a \\mid b$ 且 $a \\mid c$，则对任意整数 $x, y$，均有 $a \\mid (bx + cy)$！这在消元化简中至关重要；\n2. 算术基本定理（唯一分解定理）：任何大于 1 的整数都能唯一分解为质因数的乘积 $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k}$；\n3. 约数个数公式：$d(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\dots (\\alpha_k + 1)$；\n4. 约数和公式：$\\sigma(n) = \\prod_{i=1}^k \\frac{p_i^{\\alpha_i + 1} - 1}{p_i - 1}$。",
    keyFormulas: [
      { name: "算术基本定理", formula: "n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k} \\quad (p_1 < p_2 < \\dots < p_k \\text{ 为质数})" },
      { name: "正约数个数公式", formula: "d(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\dots (\\alpha_k + 1)" },
      { name: "最大公因与最小公倍关系", formula: "(a, b) \\cdot [a, b] = a \\cdot b" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "带余除法与辗转相除法",
        content: "对任意整数 $a, b$ ($b > 0$)，存在唯一的整数 $q, r$ 使得 $a = bq + r$ ($0 \\leq r < b$)。辗转相除法保证了可以在有限步内求出最大公因数 $(a, b)$。",
        examples: [
          {
            id: "ex6_1_1",
            index: 1,
            title: "整除性整系数求值",
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
        stem: "若 $p$ 和 $p+2$ 都是大于 3 的质数（孪生素数），证明：$p+1$ 一定是 6 的倍数。",
        answer: "见解析",
        analysis: "在连续三个整数 $p, p+1, p+2$ 中：必有一个是 3 的倍数。因 $p, p+2$ 为大于 3 的质数，不能被 3 整除，故 $3 \\mid (p+1)$。又 $p$ 为奇质数，故 $p+1$ 是偶数，即 $2 \\mid (p+1)$。因为 $\\gcd(2, 3) = 1$，所以 $6 \\mid (p+1)$。",
        difficulty: "基础",
        type: "质数与整数"
      }
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "同余的概念、性质与费马小定理初阶",
    subtitle: "高斯同余算术与钟表数学",
    bookPageRange: "023-047",
    pdfPageRange: "P30-P54",
    companionImage: "/book_samples/v6/ch2_start.png",
    introduction: "同余是由德国数学王子高斯（Gauss）引入的伟大概念。我们可以将其形象理解为‘余数相同’。如果两个整数 $a, b$ 除以正整数 $m$ 所得的余数相同，就称 $a, b$ 对模 $m$ 同余，记作 $a \\equiv b \\pmod m$。这等价于 $m \\mid (a - b)$。同余将无限的整数集压缩为模 $m$ 下的有限个剩余类，是数论解题的核心武器！",
    teacherTips: "同余算术神级性质：\n1. 可加性、可减性、可乘性：若 $a \\equiv b \\pmod m, c \\equiv d \\pmod m$，则 $a \\pm c \\equiv b \\pm d \\pmod m$，$ac \\equiv bd \\pmod m$；\n2. 可乘方性：$a^k \\equiv b^k \\pmod m$（求末位数字、余数的核心！）；\n3. 费马小定理（Fermat's Little Theorem）：若 $p$ 为质数且 $p \\nmid a$，则 $a^{p-1} \\equiv 1 \\pmod p$！",
    keyFormulas: [
      { name: "同余定义", formula: "a \\equiv b \\pmod m \\iff m \\mid (a - b)" },
      { name: "费马小定理", formula: "a^{p-1} \\equiv 1 \\pmod p \\quad (p \\text{ 为质数}, \\gcd(a, p)=1)" },
      { name: "费马小定理推论", formula: "a^p \\equiv a \\pmod p \\quad (\\forall a \\in \\mathbb{Z})" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "利用同余求超大数的高次幂余数",
        content: "求 $a^n$ 除以 $m$ 的余数，利用同余的可乘方性，先找到较小的指数 $k$ 使得 $a^k \\equiv \\pm 1 \\pmod m$，然后化简指数。",
        examples: [
          {
            id: "ex6_2_1",
            index: 1,
            title: "求超大乘方的末位数字",
            stem: "求 $7^{2026}$ 除以 10 的余数（即个位数字）。",
            analysis: "模 10 探查 7 的各次幂规律：$7^1 \\equiv 7, 7^2 = 49 \\equiv 9 \\equiv -1 \\pmod{10}$！",
            solution: "因为 $7^2 = 49 \\equiv -1 \\pmod{10}$。\n所以：\n$7^{2026} = (7^2)^{1013} \\equiv (-1)^{1013} = -1 \\equiv 9 \\pmod{10}$。\n故 $7^{2026}$ 除以 10 的余数是 9（个位数字是 9）。",
            notes: "化归为 $-1$ 的奇偶次幂，瞬间算出！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch2_q1",
        index: 1,
        stem: "求 $3^{100}$ 除以 7 的余数。",
        answer: "$4$",
        analysis: "由费马小定理：$3^6 \\equiv 1 \\pmod 7$。指数 $100 = 6 \\times 16 + 4$。\n故 $3^{100} = (3^6)^{16} \\cdot 3^4 \\equiv 1^{16} \\cdot 81 \\equiv 81 \\pmod 7$。\n$81 = 7 \\times 11 + 4 \\equiv 4 \\pmod 7$。余数为 4。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "一次与多元不定方程",
    subtitle: "丢番图方程的构造与整点通解",
    bookPageRange: "048-068",
    pdfPageRange: "P55-P75",
    companionImage: "/book_samples/v6/ch3_start.png",
    introduction: "不定方程（Diophantine Equation）是指未知数的个数多于独立方程个数，且未知数限定在整数集内的方程。形如 $ax + by = c$ 的二元一次不定方程是最基础的形式。它连接了整除性、同余算术与欧几里得辗转相除法逆运算。",
    teacherTips: "冯志刚解题策略：\n解二元一次不定方程，若特解不明显，可取模化简！\n例如对 $ax + by = c$，两边对模 $a$ 取同余：$by \\equiv c \\pmod a$，未知数 $x$ 瞬间被消灭，只剩一个未知数 $y$！解出一维同余式即得特解，百试百灵！",
    keyFormulas: [
      { name: "二元一次不定方程同余化简法", formula: "ax + by = c \\implies by \\equiv c \\pmod a" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "模算术求不定方程整数解",
        content: "取系数较小的一项为模数，将方程降维为一元线性同余方程求解。",
        examples: [
          {
            id: "ex6_3_1",
            index: 1,
            title: "模法求解一次不定方程",
            stem: "求方程 $13x + 17y = 200$ 的一组整数解。",
            analysis: "两边对模 13 取同余消去 $13x$ 项。",
            solution: "两边对模 13 取同余：\n$17y \\equiv 200 \\pmod{13}$\n因为 $17 \\equiv 4 \\pmod{13}$，$200 = 13 \\times 15 + 5 \\equiv 5 \\pmod{13}$。\n所以方程化为：$4y \\equiv 5 \\pmod{13}$。\n两边同乘以 10（因 $4 \\times 10 = 40 = 13 \\times 3 + 1 \\equiv 1$）：\n$40y \\equiv 50 \\pmod{13} \\implies y \\equiv 50 \\equiv 11 \\pmod{13}$。\n取 $y = 11$ 代入原方程：\n$13x + 17(11) = 200 \\implies 13x + 187 = 200 \\implies 13x = 13 \\implies x = 1$！\n故一组特解为 $\\begin{cases} x = 1 \\\\ y = 11 \\end{cases}$。\n通解为：$x = 1 + 17t, \\; y = 11 - 13t$ ($t \\in \\mathbb{Z}$)。",
            notes: "模算术法避免了繁琐的拼凑试探。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch3_q1",
        index: 1,
        stem: "求 $5x + 7y = 1$ 的通解。",
        answer: "$x = 3 + 7t, \\; y = -2 - 5t \\quad (t \\in \\mathbb{Z})$",
        analysis: "观察特解：$5(3) + 7(-2) = 15 - 14 = 1$。特解为 $(3, -2)$。通解为 $x = 3 + 7t, y = -2 - 5t$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "高斯取整函数 [x] 及其数论应用",
    subtitle: "阶梯函数、勒让德公式与阶乘素因数幂次",
    bookPageRange: "093-118",
    pdfPageRange: "P100-P125",
    companionImage: "/book_samples/v6/ans_start.png",
    introduction: "设 $x$ 为任意实数，不超过 $x$ 的最大整数称为 $x$ 的整数部分，记作 $[x]$（高斯取整函数）。$\{x\} = x - [x]$ 称为 $x$ 的小数部分（$0 \\leq \\{x\\} < 1$）。高斯函数是连接实数连续分析与整数离散数论的金色桥梁。在竞赛中，勒让德公式（Legendre's Formula）利用取整函数，能瞬间算出 $n!$ 后面有多少个零！",
    teacherTips: "高斯函数两大经典公式：\n1. 厄尔米特恒等式（Hermite's Identity）：$[x] + [x + 1/n] + [x + 2/n] + \\dots + [x + (n-1)/n] = [nx]$；\n2. 勒让德公式（Legendre）：质数 $p$ 在 $n!$ 的质因数分解中的最高幂次为：$v_p(n!) = \\left[\\frac{n}{p}\\right] + \\left[\\frac{n}{p^2}\\right] + \\left[\\frac{n}{p^3}\\right] + \\dots$（有限项和）。",
    keyFormulas: [
      { name: "高斯取整不等式", formula: "x - 1 < [x] \\leq x < [x] + 1" },
      { name: "勒让德公式 (Legendre)", formula: "v_p(n!) = \\sum_{k=1}^{\\infty} \\left[\\frac{n}{p^k}\\right]" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "勒让德公式求阶乘末尾零的个数",
        content: "阶乘 $n!$ 末尾 0 的个数取决于质因数 5 的幂次 $v_5(n!)$（因 2 的幂次远多于 5）。",
        examples: [
          {
            id: "ex6_5_1",
            index: 1,
            title: "求 100! 末尾有多少个连续的0",
            stem: "计算 $100! = 1 \\times 2 \\times 3 \\times \\dots \\times 100$ 的末尾连续有多少个零？",
            analysis: "末尾 0 的个数等于 $100!$ 中包含因子 10 的个数，即 $\\min(v_2(100!), v_5(100!)) = v_5(100!)$。",
            solution: "应用勒让德公式计算 5 的幂次：\n$v_5(100!) = \\left[\\frac{100}{5}\\right] + \\left[\\frac{100}{5^2}\\right] + \\left[\\frac{100}{5^3}\\right] + \\dots$\n$= \\left[\\frac{100}{5}\\right] + \\left[\\frac{100}{25}\\right] + 0$\n$= 20 + 4 = 24$。\n因此 $100!$ 含有 24 个质因数 5，与充足的因数 2 配对后，产生 24 个 10。\n答：$100!$ 的末尾连续有 24 个零。",
            notes: "勒让德公式口算秒杀百位阶乘！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v6_ch5_q1",
        index: 1,
        stem: "解方程：$2[x] = x + 3$。",
        answer: "$x = 3$ 或 $x = 5$",
        analysis: "由 $x = 2[x] - 3$，因为 $[x]$ 为整数，所以 $x$ 必为整数！\n故 $[x] = x$。代入得 $2x = x + 3 \\implies x = 3$。\n若 $x$ 为非整数：设 $x = n + \\alpha$ ($0 \\leq \\alpha < 1$)，代入 $2n = n + \\alpha + 3 \\implies \\alpha = n - 3$。因 $0 \\leq \\alpha < 1$，故 $n = 3, \\alpha = 0 \\implies x = 3$。",
        difficulty: "提高",
        type: "代数求值"
      }
    ]
  }
];
