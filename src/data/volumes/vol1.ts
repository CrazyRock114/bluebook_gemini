import { Chapter } from "@/types/book";

export const VOL1_CHAPTERS: Chapter[] = [
  {
    id: "ch0",
    number: 0,
    title: "什么是因式分解",
    subtitle: "从算术的整数分解到代数的多项式变形",
    bookPageRange: "001-001",
    pdfPageRange: "P10-P10",
    companionImage: "/book_samples/v1/ch0_start.png",
    introduction: "在小学里，我们学过整数的因数分解。由乘法 $3 \\times 4 = 12$；反过来，$12$ 可以分解为 $12 = 3 \\times 4$。把一个合数表示成几个质数的乘积，在算术里称为因数分解（质因数分解）。类似地，在代数里，把一个多项式化为几个整式的乘积的形式，就叫做把这个多项式因式分解（也叫分解因式）。",
    teacherTips: "因式分解是整式乘法的逆运算！它不是简单的机械运算，而是带有强烈目的性的‘逆向重构’。在初中数学中，因式分解是解方程、化简代数式、研究函数最值乃至初等数论整除问题的无上利器。",
    keyFormulas: [
      { name: "因式分解定义", formula: "A = B \\cdot C", note: "其中 A, B, C 均为整式，且 B, C 的次数均低于 A" },
      { name: "与整式乘法的逆运算关系", formula: "(x+a)(x+b) = x^2+(a+b)x+ab \\iff x^2+(a+b)x+ab = (x+a)(x+b)" }
    ],
    subsections: [
      {
        id: "0.1",
        number: "0.1",
        title: "因式分解的本质与目标",
        content: "因式分解的核心要求是：**结果必须是几个整式的积的形式**，而且分解必须进行到每一个因式都不能再分解为止（在指定数集内不可约）。例如 $x^2 - 4 = (x+2)(x-2)$ 是因式分解；但 $x^2 - 4 + x = x(x-1) - 4$ 就不是因式分解，因为它的主体依然是多项式相减，而不是连乘积。",
        examples: [
          {
            id: "ex0_1",
            index: 1,
            title: "判断是否为因式分解",
            stem: "下列各式从左到右的变形，哪些属于因式分解？\n(1) $x^2 - y^2 - 1 = (x+y)(x-y) - 1$\n(2) $x^2 - 4x + 4 = (x-2)^2$\n(3) $x^2 - 2 = (x - \\sqrt{2})(x + \\sqrt{2})$\n(4) $x(x+1) = x^2 + x$",
            analysis: "紧扣因式分解的定义：必须是多项式变形为整式的积。(1)右边存在减1，不是积的形式；(2)是完全平方式乘积，属于有理数范围内的因式分解；(3)在实数范围内是因式分解（在有理数集内则不可约）；(4)是整式乘法展开，恰好是逆过程。",
            solution: "答：(2)在有理数集内属于因式分解；(3)在实数集范围内属于因式分解；(1)和(4)均不是因式分解。",
            notes: "在未特别指明数集时，通常默认在有理数集范围内进行因式分解。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch0_q1",
        index: 1,
        stem: "说明为什么 $x^2 + 2x - 3 = x(x+2) - 3$ 不是因式分解，并写出正确的因式分解结果。",
        answer: "$(x+3)(x-1)$",
        analysis: "因为 $x(x+2) - 3$ 整体是差的形式，末项有常数项 $-3$，未能转化为整式连乘积。正确分解利用十字相乘：$x^2 + 2x - 3 = (x+3)(x-1)$。",
        difficulty: "基础",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch1",
    number: 1,
    title: "提公因式",
    subtitle: "一提、二代、三分组之首要基本功",
    bookPageRange: "002-006",
    pdfPageRange: "P11-P15",
    companionImage: "/book_samples/v1/ch1_start.png",
    introduction: "学过因式分解的人爱说：‘一提、二代、三分组’。‘提’是指提取公因式。在因式分解时，首先应当想到的是有没有公因式可提。如果各项有公因式，先把它提出来，往往会使后面的工作变得十分顺手。",
    teacherTips: "单墫老师六大要诀：\n1. 一次提净（系数取最大公约数，字母取最低次幂）；\n2. 视‘多’为一（把多项式整体看作一个单项元）；\n3. 切勿漏1（某一项全被提出后，该项位置保留 1，绝非消失）；\n4. 注意符号（首项带负号，先提负号，括号内各项全部变号）；\n5. 仔细观察（辨析相反数关系，如 $(a-b)^2 = (b-a)^2$ 与 $(a-b)^3 = -(b-a)^3$）；\n6. 化‘分’为整（遇分数系数，可先提倒数分数使括号内系数化整）。",
    keyFormulas: [
      { name: "提公因式基本公式", formula: "ma + mb + mc = m(a + b + c)" },
      { name: "相反数幂次性质", formula: "(b - a)^{2k} = (a - b)^{2k}, \\quad (b - a)^{2k+1} = -(a - b)^{2k+1}" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "一次提净与视多为一",
        content: "提取公因式时，系数要取各项系数的最大公约数，相同字母或整式因式要取其最低次幂。如果未能一次提净，括号内仍残留公因式，就是不完全分解。同时，公因式不仅可以是单项式，也可以是多项式整体。",
        examples: [
          {
            id: "ex1_1",
            index: 1,
            title: "基础提净与切勿漏1",
            stem: "分解因式：$-2x(x+1) + a(x+1) + (x+1)$",
            analysis: "观察各项，均含有公共多项式因式 $(x+1)$。第三项本身就是 $(x+1)$，提取后留下系数 $+1$，切不可漏掉。",
            solution: "原式 $= (x+1)[-2x + a + 1] = (x+1)(a - 2x + 1)$",
            notes: "‘切勿漏1’是初学者最常犯的粗心错误之一。"
          },
          {
            id: "ex1_2",
            index: 2,
            title: "符号变换与相反数提取",
            stem: "分解因式：$6p(x-1)^3 - 8p^2(x-1)^2 - 2p(1-x)^2$",
            analysis: "注意到 $(1-x)^2 = [-(x-1)]^2 = (x-1)^2$。因此第三项可写为 $-2p(x-1)^2$。此时各项包含的公因式为 $2p(x-1)^2$。",
            solution: "原式 $= 6p(x-1)^3 - 8p^2(x-1)^2 - 2p(x-1)^2$\n$= 2p(x-1)^2 [3(x-1) - 4p - 1]$\n$= 2p(x-1)^2 (3x - 4p - 4)$",
            notes: "先统一相反数形式，再提取最大公因式。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch1_q1",
        index: 1,
        stem: "分解因式：$5x^2y - 10xyz + 5xy$",
        answer: "$5xy(x - 2z + 1)$",
        analysis: "各项公因式为 $5xy$。提取后括号内各项分别为 $x$、$-2z$ 和 $1$。注意末项保留 $+1$。\n原式 $= 5xy(x - 2z + 1)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "v1_ch1_q2",
        index: 2,
        stem: "分解因式：$a(x-a) + b(a-x) - (x-a)$",
        answer: "$(x-a)(a - b - 1)$",
        analysis: "注意 $b(a-x) = -b(x-a)$。于是原式 $= a(x-a) - b(x-a) - (x-a) = (x-a)(a - b - 1)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "v1_ch1_q3",
        index: 3,
        stem: "分解因式：$\\frac{3}{2}b^{3n-1} + \\frac{1}{6}b^{2n-1}$ ($n$ 为正整数)",
        answer: "$\\frac{1}{6}b^{2n-1}(9b^n + 1)$",
        analysis: "分数系数先提公分母倒数 $\\frac{1}{6}$，字母指数最低幂为 $2n-1$。$3n-1 = (2n-1) + n$。\n原式 $= \\frac{1}{6}b^{2n-1}(9b^n + 1)$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "v1_ch1_q4",
        index: 4,
        stem: "分解因式：$mn(m^2+n^2) - n^2(m^2+n^2)$",
        answer: "$n(m-n)(m^2+n^2)$",
        analysis: "先提公因式 $n(m^2+n^2)$，得 $n(m^2+n^2)(m - n) = n(m-n)(m^2+n^2)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "v1_ch1_q5",
        index: 5,
        stem: "分解因式：$(5a-2b)(2m+3p) - (2a-7b)(2m+3p)$",
        answer: "$3(a+b)(2m+3p)$",
        analysis: "公因式为 $(2m+3p)$。提取后：$(2m+3p)[(5a-2b) - (2a-7b)] = (2m+3p)(3a+5b)$？注意：$-2b - (-7b) = 5b$。等等：原式括号内为 $5a-2a = 3a$，$-2b+7b = 5b$，即 $(2m+3p)(3a+5b)$。",
        difficulty: "提高",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "应用公式",
    subtitle: "乘法公式的逆用与质数判别",
    bookPageRange: "007-013",
    pdfPageRange: "P16-P22",
    companionImage: "/book_samples/v1/ch2_start.png",
    introduction: "将乘法公式反过来写就得到因式分解中所用的公式。常用的核心公式有七个：平方差公式、完全平方公式、立方和公式、立方差公式、完全立方公式、三个数和的平方公式。熟练掌握公式的结构特征，是奥数迅速破题的关键。",
    teacherTips: "应用公式要‘问一知三’！公式中的字母 $a, b$ 可以代表任何单项式或复杂多项式。例如看到 $a^4 - b^4$ 要立刻联想到二次平方差连续分解；看到高次项更要敏感察觉立方和差的配偶结构。书中单墫老师巧妙运用因式分解证明了著名的费马数猜想反例：$2^{1984}+1$ 绝不是质数！",
    keyFormulas: [
      { name: "平方差公式", formula: "a^2 - b^2 = (a+b)(a-b)" },
      { name: "完全平方公式", formula: "a^2 \\pm 2ab + b^2 = (a \\pm b)^2" },
      { name: "立方和与立方差公式", formula: "a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)" },
      { name: "完全立方公式", formula: "a^3 \\pm 3a^2b + 3ab^2 \\pm b^3 = (a \\pm b)^3" },
      { name: "三数和平方公式", formula: "a^2+b^2+c^2+2ab+2bc+2ca = (a+b+c)^2" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "高阶平方差与立方和差",
        content: "对于形如 $A^2 - B^2$ 的式子，即使 $A$ 或 $B$ 是由多项式组成的复杂结构，也可以直接套用平方差公式。此外，立方和差公式经常用于构造高次整除性证明。",
        examples: [
          {
            id: "ex2_1",
            index: 1,
            title: "连续平方差分解",
            stem: "分解因式：$16c^4 - 81a^4b^4$",
            analysis: "观察到 $16c^4 = (4c^2)^2$，$81a^4b^4 = (9a^2b^2)^2$。应用平方差公式分解后，第二项又是平方差，可继续分解到底。",
            solution: "原式 $= (4c^2)^2 - (9a^2b^2)^2$\n$= (4c^2 + 9a^2b^2)(4c^2 - 9a^2b^2)$\n$= (4c^2 + 9a^2b^2)(2c + 3ab)(2c - 3ab)$",
            notes: "必须分解到每一个因式在有理数范围内都不能再分解为止。"
          },
          {
            id: "ex2_2",
            index: 2,
            title: "数论应用：$2^{1984}+1$ 不是质数",
            stem: "证明：$2^{1984} + 1$ 是合数（不是质数）。",
            analysis: "关键观察指数：$1984 = 64 \\times 31$。因为 $31$ 是奇数，所以可以设 $x = 2^{64}$，则原式 $= x^{31} + 1$。利用奇数次幂和公式 $x^{2k+1} + 1 = (x+1)(x^{2k} - x^{2k-1} + \\dots + 1)$！",
            solution: "因为 $1984 = 64 \\times 31$（$31$ 为大于1的奇数），\n令 $A = 2^{64}$，则 $2^{1984} + 1 = A^{31} + 1^31$。\n由立方和及奇次方和公式：\n$A^{31} + 1 = (A + 1)(A^{30} - A^{29} + \\dots - A + 1)$。\n因为 $A + 1 = 2^{64} + 1 > 1$，且后一个括号因子明显大于 1，\n所以 $2^{1984} + 1$ 有非平凡因数 $2^{64} + 1$。\n故 $2^{1984} + 1$ 必为合数。",
            notes: "单墫老师评注：只要指数含有大于1的奇因数，形如 $2^N+1$ 就不可能是质数！因此费马质数的形式指数必须是 2 的方幂。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch2_q1",
        index: 1,
        stem: "分解因式：$(a+b)^4 - (a-b)^4$",
        answer: "$8ab(a^2+b^2)$",
        analysis: "利用平方差：原式 $= [(a+b)^2 + (a-b)^2][(a+b)^2 - (a-b)^2] = [2(a^2+b^2)][4ab] = 8ab(a^2+b^2)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "v1_ch2_q2",
        index: 2,
        stem: "分解因式：$x^6 - y^6$",
        answer: "$(x+y)(x-y)(x^2+xy+y^2)(x^2-xy+y^2)$",
        analysis: "优先考虑平方差再立方：$x^6 - y^6 = (x^3+y^3)(x^3-y^3) = (x+y)(x^2-xy+y^2)(x-y)(x^2+xy+y^2)$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "v1_ch2_q3",
        index: 3,
        stem: "已知 $a+b+c=0$，证明：$a^3+b^3+c^3 = 3abc$。",
        answer: "见解析",
        analysis: "由 $c = -(a+b)$，代入得 $c^3 = -(a+b)^3 = -(a^3 + 3a^2b + 3ab^2 + b^3)$。\n所以 $a^3+b^3+c^3 = a^3+b^3 - (a^3+3a^2b+3ab^2+b^3) = -3ab(a+b) = -3ab(-c) = 3abc$。",
        difficulty: "提高",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "分组分解",
    subtitle: "无公因式、无公式时的化整为零之道",
    bookPageRange: "014-019",
    pdfPageRange: "P23-P28",
    companionImage: "/book_samples/v1/ch3_start.png",
    introduction: "像多项式 $ax - by - bx + ay$，四项没有公因式可以提取，也无法直接套用公式。对于这类项数较多的多项式，需要将各项合理分组，使各组之间产生新的公因式，或者使某组能应用公式，从而达到整体分解的目的。",
    teacherTips: "分组分解的三步曲：\n1. 分组（二二分组或一三分组）；\n2. 局部提公因式或套用公式；\n3. 整体提公因式或再套公式。\n殊途同归：同一种多项式往往有多种分组路径，但最终分解结果必然唯一！特别注意‘一三分组’常用于构造‘平方差’（即完全平方式减去另一个平方项）。",
    keyFormulas: [
      { name: "二二分组模型", formula: "ac + ad + bc + bd = a(c+d) + b(c+d) = (a+b)(c+d)" },
      { name: "一三分组模型（平方差）", formula: "a^2 - (b^2 - 2bc + c^2) = a^2 - (b-c)^2 = (a+b-c)(a-b+c)" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "二二分组与一三分组的决策",
        content: "四项式常见有两种结构：若含有三个平方项及一个交叉项（或形如 $a^2 \\pm 2ab + b^2 - c^2$），首选一三分组；若各项次数均衡，则首选二二分组试探。",
        examples: [
          {
            id: "ex3_1",
            index: 1,
            title: "一三分组构造平方差",
            stem: "分解因式：$x^2 - y^2 + 4x + 4$",
            analysis: "观察到 $x^2 + 4x + 4$ 构成完全平方式 $(x+2)^2$，与 $-y^2$ 正好构成平方差。",
            solution: "原式 $= (x^2 + 4x + 4) - y^2 = (x+2)^2 - y^2 = (x + 2 + y)(x + 2 - y) = (x+y+2)(x-y+2)$",
            notes: "先识别完全平方式的三项，将其划为一组。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch3_q1",
        index: 1,
        stem: "分解因式：$ab(c^2+d^2) + cd(a^2+b^2)$",
        answer: "$(ac+bd)(ad+bc)$",
        analysis: "展开后重组：原式 $= abc^2 + abd^2 + a^2cd + b^2cd = ac(bc+ad) + bd(ad+bc) = (ac+bd)(ad+bc)$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "v1_ch3_q2",
        index: 2,
        stem: "分解因式：$a^2 - b^2 - c^2 + 2bc$",
        answer: "$(a+b-c)(a-b+c)$",
        analysis: "后三项提负号构成完全平方：$a^2 - (b^2 - 2bc + c^2) = a^2 - (b-c)^2 = (a+b-c)(a-b+c)$。",
        difficulty: "基础",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch4",
    number: 4,
    title: "拆项与添项",
    subtitle: "无中生有的精妙配凑艺术",
    bookPageRange: "020-025",
    pdfPageRange: "P29-P35",
    companionImage: "/book_samples/v1/ch4_start.png",
    introduction: "当多项式的现有项数既无法直接分组、又无法套用公式时，常常将其中某一项拆成两项的和（拆项），或者无中生有地添上一对相反项（添项），制造出完全平方式或公式所需的缺项，从而化险为夷。",
    teacherTips: "拆项的精髓在于‘拆开中项’（如十字相乘法的理论推导）；添项的灵魂在于‘配方补缺’。最经典的当属苏菲·热尔曼恒等式（Sophie Germain's Identity）：$a^4 + 4b^4 = (a^2+2b^2)^2 - 4a^2b^2$，通过添减 $4a^2b^2$ 瞬间破局！",
    keyFormulas: [
      { name: "苏菲·热尔曼恒等式", formula: "a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)" },
      { name: "配方拆添模型", formula: "x^4 + x^2 + 1 = (x^2+1)^2 - x^2 = (x^2+x+1)(x^2-x+1)" }
    ],
    subsections: [
      {
        id: "4.1",
        number: "4.1",
        title: "添项配方与乘方差",
        content: "多项式缺少交叉项时，主动加上 $2AB$ 再减去 $2AB$，将前半部分配成完全平方，后半部分变为平方项相减。",
        examples: [
          {
            id: "ex4_1",
            index: 1,
            title: "经典配方：$x^4 + 4$",
            stem: "分解因式：$x^4 + 4$",
            analysis: "两项均为平方项，中间缺少 $2 \\cdot x^2 \\cdot 2 = 4x^2$。添上 $4x^2 - 4x^2$。",
            solution: "原式 $= x^4 + 4x^2 + 4 - 4x^2$\n$= (x^2+2)^2 - (2x)^2$\n$= (x^2 + 2x + 2)(x^2 - 2x + 2)$",
            notes: "这是因式分解中经久不衰的经典例题。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch4_q1",
        index: 1,
        stem: "分解因式：$x^4 + x^2y^2 + y^4$",
        answer: "$(x^2+xy+y^2)(x^2-xy+y^2)$",
        analysis: "原式 $= (x^4 + 2x^2y^2 + y^4) - x^2y^2 = (x^2+y^2)^2 - (xy)^2 = (x^2+xy+y^2)(x^2-xy+y^2)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "v1_ch4_q2",
        index: 2,
        stem: "分解因式：$x^5 + x + 1$",
        answer: "$(x^2+x+1)(x^3-x^2+1)$",
        analysis: "利用立方差添项：添入 $-x^2 + x^2$。原式 $= (x^5 - x^2) + (x^2+x+1) = x^2(x^3-1) + (x^2+x+1) = x^2(x-1)(x^2+x+1) + (x^2+x+1) = (x^2+x+1)[x^2(x-1)+1] = (x^2+x+1)(x^3-x^2+1)$。",
        difficulty: "竞赛",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "换元法",
    subtitle: "化繁为简、视整体为一个新变量",
    bookPageRange: "026-030",
    pdfPageRange: "P36-P40",
    companionImage: "/book_samples/v1/ch5_start.png",
    introduction: "面对结构复杂、项数繁多的多项式，如果发现某些部分具有相同的结构，可以把这个相同的局部设为一个新的字母（辅助元）。通过换元，原式的次数大大降低，形式高度简化，分解后再代回原元。",
    teacherTips: "换元法的核心有四种境界：\n1. 重复部分整体换元；\n2. 均值换元（若四个因式相乘，取中间平均数换元可产生偶次对称）；\n3. 倒数换元（倒数系数多项式提公因式后换 $t = x + 1/x$）；\n4. 双换元（设两个字母分别代表两处结构）。",
    keyFormulas: [
      { name: "四连续因式相乘配对模型", formula: "(x+a)(x+b)(x+c)(x+d) \\text{ 当 } a+d = b+c = k \\text{ 时，令 } t = x^2 + kx" },
      { name: "倒数变换模型", formula: "x^2 + \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)^2 - 2 = t^2 - 2" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "连续四项相乘配对换元",
        content: "形如 $(x+a)(x+b)(x+c)(x+d) + C$ 的式子，若 $a+d = b+c$，可将第一、四项与第二、三项分别相乘，得到相同的二次式部分，进而设新元化简。",
        examples: [
          {
            id: "ex5_1",
            index: 1,
            title: "配对相乘换元",
            stem: "分解因式：$(x+1)(x+2)(x+3)(x+4) - 120$",
            analysis: "观察常数项：$1+4 = 2+3 = 5$。将第1、4项结合，第2、3项结合。",
            solution: "原式 $= [(x+1)(x+4)][(x+2)(x+3)] - 120$\n$= (x^2+5x+4)(x^2+5x+6) - 120$\n令 $t = x^2+5x+5$，则原式 $= (t-1)(t+1) - 120 = t^2 - 1 - 120 = t^2 - 121 = (t+11)(t-11)$。\n代回 $t = x^2+5x+5$：\n原式 $= (x^2+5x+16)(x^2+5x-6) = (x^2+5x+16)(x+6)(x-1)$。",
            notes: "设均值 $t = x^2+5x+5$ 能够直接利用平方差展开，极为巧妙简洁。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch5_q1",
        index: 1,
        stem: "分解因式：$(x^2+x+1)(x^2+x+2) - 12$",
        answer: "$(x^2+x-2)(x^2+x+5) = (x+2)(x-1)(x^2+x+5)$",
        analysis: "令 $y = x^2+x+1$。原式 $= y(y+1) - 12 = y^2+y-12 = (y+4)(y-3)$。\n代回 $y = x^2+x+1$ 得：$(x^2+x+5)(x^2+x-2) = (x+2)(x-1)(x^2+x+5)$。",
        difficulty: "基础",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "二元二次式的分解",
    subtitle: "主元法与双十字相乘法",
    bookPageRange: "031-036",
    pdfPageRange: "P41-P45",
    companionImage: "/book_samples/v1/ch6_start.png",
    introduction: "形如 $Ax^2 + Bxy + Cy^2 + Dx + Ey + F$ 的多项式称为二元二次多项式。它是竞赛中极常见且非常实用的一种代数形式。掌握双十字相乘法与主元判别式法，可以秒解一切可分解的二元二次式。",
    teacherTips: "双十字相乘法口诀：\n先拆二次项（前三项 $Ax^2+Bxy+Cy^2$ 做十字相乘），再拆常数项 $F$（做两次辅助十字相乘，一次检验 $x$ 的一次项系数 $D$，一次检验 $y$ 的一次项系数 $E$）。若三处验算全部吻合，则横向写出因式！",
    keyFormulas: [
      { name: "二元二次式一般形式", formula: "Ax^2 + Bxy + Cy^2 + Dx + Ey + F = (a_1 x + b_1 y + c_1)(a_2 x + b_2 y + c_2)" }
    ],
    subsections: [
      {
        id: "6.1",
        number: "6.1",
        title: "双十字相乘法步骤演示",
        content: "1. 将前三项 $x^2, xy, y^2$ 按一元二次十字相乘法分解；\n2. 将常数项分解为两数乘积；\n3. 分别交叉相乘验算 $x$ 项与 $y$ 项的系数。",
        examples: [
          {
            id: "ex6_1",
            index: 1,
            title: "双十字相乘分解",
            stem: "分解因式：$x^2 + 2xy - 3y^2 + 3x + y + 2$",
            analysis: "前三项 $x^2+2xy-3y^2 = (x-y)(x+3y)$；常数项 $2 = 1 \\times 2$。\n交叉验算：$(x)(2) + (x)(1) = 3x$ 吻合；$(-y)(2) + (3y)(1) = y$ 吻合！",
            solution: "原式 $= (x - y + 1)(x + 3y + 2)$",
            notes: "整个过程一气呵成，极为简便。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch6_q1",
        index: 1,
        stem: "分解因式：$2x^2 - 7xy + 3y^2 - 5x + 5y + 2$",
        answer: "$(2x - y - 1)(x - 3y - 2)$",
        analysis: "前三项：$2x^2-7xy+3y^2 = (2x-y)(x-3y)$；常数项 $2 = (-1) \\times (-2)$。\n验算：$2x(-2) + x(-1) = -5x$；$(-y)(-2) + (-3y)(-1) = 5y$。全部吻合。\n原式 $= (2x - y - 1)(x - 3y - 2)$。",
        difficulty: "提高",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "综合运用",
    subtitle: "阵而后战，兵法之常；运用之妙，存乎一心",
    bookPageRange: "037-045",
    pdfPageRange: "P46-P54",
    companionImage: "/book_samples/v1/ch7_start.png",
    introduction: "我国古代名将岳飞说过：‘阵而后战，兵法之常，运用之妙，存乎一心。’因式分解也是这样，掌握了提公因式、公式、分组、拆添、换元等基础套路后，必须融会贯通，在复杂竞赛综合题中随机应变。",
    teacherTips: "综合题的常见破题信号：\n1. 对称与齐次：注意式子中各变量的对等地位；\n2. 主元思维：多变量式子中，挑出次数最低的字母视为主元降次整理；\n3. 条件因式分解：结合给定的等式条件（如 $a+b+c=0$ 或 $abc=1$）化简。",
    keyFormulas: [
      { name: "主元法整理原则", formula: "f(a,b,c) = A(b,c) a^2 + B(b,c) a + C(b,c)" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "主元法破解多元高次式",
        content: "当式中含有多个字母且难以直接分组时，选择次数最低的一个字母作为未知数，其余字母视为常数，按该字母的降幂排列整理。",
        examples: [
          {
            id: "ex7_1",
            index: 1,
            title: "选定低次字母为主元",
            stem: "分解因式：$a^2b + ab^2 + a^2c + ac^2 + b^2c + bc^2 + 2abc$",
            analysis: "各个字母次数相同（均为二次），任选 $a$ 为主元按降幂整理。",
            solution: "原式 $= a^2(b+c) + a(b^2+c^2+2bc) + bc(b+c)$\n$= a^2(b+c) + a(b+c)^2 + bc(b+c)$\n$= (b+c)[a^2 + a(b+c) + bc]$\n$= (b+c)(a+b)(a+c) = (a+b)(b+c)(c+a)$",
            notes: "这是极著名的轮换对称式因式分解模型。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch7_q1",
        index: 1,
        stem: "分解因式：$ab(a+b) + bc(b+c) + ca(c+a) + 3abc$",
        answer: "$(a+b+c)(ab+bc+ca)$",
        analysis: "将 $3abc$ 拆为 $abc+abc+abc$ 分别并入前三项，或者按 $a$ 的降幂整理：\n原式 $= a^2(b+c) + a(b^2+c^2+3bc) + bc(b+c)$。\n利用十字相乘分解得 $(a+b+c)(ab+bc+ca)$。",
        difficulty: "竞赛",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch8",
    number: 8,
    title: "多项式的一次因式",
    subtitle: "余数定理与因式定理",
    bookPageRange: "046-054",
    pdfPageRange: "P55-P63",
    companionImage: "/book_samples/v1/ch8_start.png",
    introduction: "设 $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$ 为整系数多项式。本单元介绍如何寻找它的一次因式 $(x - \\alpha)$。因式定理指出：$P(x)$ 能被 $(x - \\alpha)$ 整除的充分必要条件是 $P(\\alpha) = 0$。",
    teacherTips: "有理根定理（Rational Root Theorem）：\n整系数多项式若有有理根 $p/q$（互质），则分子 $p$ 必是常数项 $a_0$ 的约数，分母 $q$ 必是首项系数 $a_n$ 的约数！特别是当首项系数为 1 时，有理根只能是常数项的整数约数！这使得我们在有限个试根中必定能一击必中。",
    keyFormulas: [
      { name: "余数定理", formula: "P(x) = (x - c) Q(x) + P(c)" },
      { name: "因式定理", formula: "(x - c) \\mid P(x) \\iff P(c) = 0" },
      { name: "整系数有理根定理", formula: "x = \\frac{p}{q} \\implies p \\mid a_0, \\; q \\mid a_n" }
    ],
    subsections: [
      {
        id: "8.1",
        number: "8.1",
        title: "试根法与综合除法",
        content: "先根据有理根定理列出所有候选试根，代入验算 $P(c) = 0$。找到一个根后，用综合除法或竖式除法除以 $(x-c)$ 降次。",
        examples: [
          {
            id: "ex8_1",
            index: 1,
            title: "高次方程求一次因式",
            stem: "分解因式：$x^3 - 4x^2 + x + 6$",
            analysis: "首项系数为 1，常数项为 6。可能的整数根为 $\\pm 1, \\pm 2, \\pm 3, \\pm 6$。\n试根：$P(-1) = -1 - 4 - 1 + 6 = 0$！所以含因式 $(x+1)$。",
            solution: "由因式定理知 $P(x)$ 有因式 $(x+1)$。\n用多项式除法：\n$x^3 - 4x^2 + x + 6 = (x+1)(x^2 - 5x + 6)$\n对二次式继续十字相乘：$x^2 - 5x + 6 = (x-2)(x-3)$。\n所以原式 $= (x+1)(x-2)(x-3)$。",
            notes: "有理根定理是高次多项式因式分解的万能探测器。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch8_q1",
        index: 1,
        stem: "分解因式：$x^3 - 7x - 6$",
        answer: "$(x+1)(x+2)(x-3)$",
        analysis: "常数项 $-6$ 的约数：试 $x = -1$ 得 $(-1)^3 - 7(-1) - 6 = -1+7-6 = 0$。\n除以 $(x+1)$ 得 $x^2 - x - 6 = (x+2)(x-3)$。\n原式 $= (x+1)(x+2)(x-3)$。",
        difficulty: "基础",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch9",
    number: 9,
    title: "待定系数法",
    subtitle: "设其结构、比较系数、列方程求解",
    bookPageRange: "055-059",
    pdfPageRange: "P64-P68",
    companionImage: "/book_samples/v1/ch9_start.png",
    introduction: "待定系数法是数学解题中的通用重器。如果预先知道了多项式因式分解后的基本代数形式，可以先设出含有未知系数的因式，展开后比较两边同类项系数，建立关于待定系数的方程组，解方程即可确定因式。",
    teacherTips: "整系数性质（高斯引理）：一个整系数多项式如果能分解为两个有理系数多项式的乘积，那么它一定能分解为两个整系数多项式的乘积！因此设待定系数时，系数只需设为整数即可，大幅降低了计算量。",
    keyFormulas: [
      { name: "四次式分解设法", formula: "x^4 + ax^3 + bx^2 + cx + d = (x^2 + mx + n)(x^2 + px + q)" }
    ],
    subsections: [
      {
        id: "9.1",
        number: "9.1",
        title: "整系数四次式的待定系数分解",
        content: "对于没有一次因式的四次多项式，尝试设为其为两个二次多项式的积，展开对比对应系数。",
        examples: [
          {
            id: "ex9_1",
            index: 1,
            title: "待定系数分解四次式",
            stem: "分解因式：$x^4 - x^3 - 5x^2 - 6x - 4$",
            analysis: "经检验无一次有理因式。设原式 $= (x^2 + ax + b)(x^2 + cx + d)$，常数项 $bd = -4$。",
            solution: "设 $x^4 - x^3 - 5x^2 - 6x - 4 = (x^2+ax+b)(x^2+cx+d)$。\n由 $bd = -4$，取整数组合测试 $b=1, d=-4$ 或 $b=-1, d=4$ 或 $b=2, d=-2$。\n当取 $b=1, d=-4$ 时，可解得 $a=1, c=-2$。\n检验三次项与一次项均成立！\n故原式 $= (x^2 + x + 1)(x^2 - 2x - 4)$。",
            notes: "结合常数项的有限约数分解，待定系数法百发百中。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch9_q1",
        index: 1,
        stem: "已知多项式 $x^4 + 4x^3 + 6px^2 + 4qx + r$ 是一个完全平方式，求证：$p = 1, q = 1, r = 1$ 的充分性条件。",
        answer: "设其为 $(x^2+2x+1)^2$",
        analysis: "设原式 $= (x^2 + 2x + k)^2 = x^4 + 4x^3 + (2k+4)x^2 + 4kx + k^2$。\n比较系数得 $6p = 2k+4, 4q = 4k, r = k^2$。当 $k=1$ 时即得 $p=1, q=1, r=1$。",
        difficulty: "提高",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch10",
    number: 10,
    title: "轮换式与对称式",
    subtitle: "利用置换对称性降维打击",
    bookPageRange: "060-073",
    pdfPageRange: "P69-P82",
    companionImage: "/book_samples/v1/ch10_start.png",
    introduction: "如果把一个多元多项式中任意两个字母互换，多项式保持不变，称之为对称式；如果把字母循环轮换（如 $a \\to b \\to c \\to a$），多项式保持不变，称之为轮换对称式。对称性是数学中最高雅的结构美，利用对称式因式定理，可以秒杀极其繁冗的竞赛大题！",
    teacherTips: "单墫老师神技——因式定理结合对称性：\n对于含 $a, b, c$ 的轮换对称式 $P(a,b,c)$，如果代入 $a = -b$ 发现 $P(-b, b, c) = 0$，由因式定理，$P$ 必含因式 $(a+b)$！\n由轮换性，$P$ 必同时含有 $(b+c)$ 和 $(c+a)$！\n再根据齐次次数比较，只需乘上一个待定常数 $k$，代入一组简单数值（如 $a=1, b=1, c=0$）即可瞬间求出 $k$！完全免去了数页纸的暴力展开！",
    keyFormulas: [
      { name: "极著名的三次恒等式", formula: "a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-ab-bc-ca)" },
      { name: "三数和平方半正定展开", formula: "a^2+b^2+c^2-ab-bc-ca = \\frac{1}{2}[(a-b)^2 + (b-c)^2 + (c-a)^2]" }
    ],
    subsections: [
      {
        id: "10.1",
        number: "10.1",
        title: "利用对称性与因式定理巧定因式",
        content: "利用奇次或偶次轮换性质，探查单项零点，根据对称性成套锁定对称因式，最后通过比较系数确定常数倍数。",
        examples: [
          {
            id: "ex10_1",
            index: 1,
            title: "巧解轮换三次式",
            stem: "分解因式：$a(b^2-c^2) + b(c^2-a^2) + c(a^2-b^2)$",
            analysis: "令 $a = b$，原式 $= b(b^2-c^2) + b(c^2-b^2) + 0 = 0$！由因式定理含因式 $(a-b)$。\n由轮换性，必同时含因式 $(b-c)$ 和 $(c-a)$。\n原式为三次齐次式，因式积 $(a-b)(b-c)(c-a)$ 亦为三次齐次式，故两式只相差常数因子 $k$。",
            solution: "设 $a(b^2-c^2) + b(c^2-a^2) + c(a^2-b^2) = k(a-b)(b-c)(c-a)$。\n取 $a=2, b=1, c=0$ 代入：\n左边 $= 2(1-0) + 1(0-4) + 0 = 2 - 4 = -2$；\n右边 $= k(2-1)(1-0)(0-2) = -2k$。\n所以 $-2 = -2k \\implies k = 1$！\n故原式 $= (a-b)(b-c)(c-a)$。",
            notes: "整个解法行云流水，优雅绝伦！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch10_q1",
        index: 1,
        stem: "分解因式：$(a+b+c)^3 - a^3 - b^3 - c^3$",
        answer: "$3(a+b)(b+c)(c+a)$",
        analysis: "令 $a = -b$，原式 $= c^3 - (-b)^3 - b^3 - c^3 = 0$。由因式定理与轮换性，含 $(a+b)(b+c)(c+a)$。\n比较三次项或代入 $a=b=c=1$：左边 $= 27 - 3 = 24$；右边 $= k(2)(2)(2) = 8k \\implies k = 3$。\n故原式 $= 3(a+b)(b+c)(c+a)$。",
        difficulty: "竞赛",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch11",
    number: 11,
    title: "实数集与复数集内的分解",
    subtitle: "数系扩张与代数基本定理",
    bookPageRange: "074-082",
    pdfPageRange: "P83-P91",
    companionImage: "/book_samples/v1/ch11_start.png",
    introduction: "因式分解应当分解到‘底’，也就是分解为不可约多项式的乘积。而‘能否再分解’严格依赖于指定的数集。例如 $x^2 - 2$ 在有理数集 $\\mathbb{Q}$ 内不可约，但在实数集 $\\mathbb{R}$ 内可分解为 $(x-\\sqrt{2})(x+\\sqrt{2})$；$x^2 + 1$ 在实数集不可约，但在复数集 $\\mathbb{C}$ 内可分解为 $(x+i)(x-i)$。",
    teacherTips: "代数基本定理（高斯证明）：任何复系数 $n$ 次多项式在复数集 $\\mathbb{C}$ 内恰好有 $n$ 个复根（计入重根），因此在复数集内，任何多项式都能彻底分解为一次因式的乘积！而在实数集 $\\mathbb{R}$ 内，任何实系数多项式都能唯一分解为一次因式与判别式小于零的二次因式的乘积！",
    keyFormulas: [
      { name: "代数基本定理复数分解式", formula: "P(x) = a_n (x - x_1)(x - x_2) \\dots (x - x_n)" },
      { name: "实数集标准分解定理", formula: "P(x) = c \\prod (x - a_i) \\prod (x^2 + p_j x + q_j), \\quad (p_j^2 - 4q_j < 0)" }
    ],
    subsections: [
      {
        id: "11.1",
        number: "11.1",
        title: "跨数集分解的深度与界限",
        content: "解题时必须严格审题：是有理数集分解、实数集分解还是复数集分解。在复数集内，利用单位根 $\\omega = \\frac{-1+\\sqrt{3}i}{2}$ 可以将 $x^3 - 1$ 分解为 $(x-1)(x-\\omega)(x-\\omega^2)$。",
        examples: [
          {
            id: "ex11_1",
            index: 1,
            title: "分别在有理、实数、复数集分解",
            stem: "将多项式 $x^4 - 4$ 分别在：(1)有理数集；(2)实数集；(3)复数集 内因式分解。",
            analysis: "平方差先分解为 $(x^2+2)(x^2-2)$。根据各数集的数域封闭性决定是否继续向下开方。",
            solution: "(1) 在有理数集内：原式 $= (x^2+2)(x^2-2)$；\n(2) 在实数集内：$x^2-2 = (x+\\sqrt{2})(x-\\sqrt{2})$，故原式 $= (x^2+2)(x+\\sqrt{2})(x-\\sqrt{2})$；\n(3) 在复数集内：$x^2+2 = (x+\\sqrt{2}i)(x-\\sqrt{2}i)$，故原式 $= (x+\\sqrt{2})(x-\\sqrt{2})(x+\\sqrt{2}i)(x-\\sqrt{2}i)$。",
            notes: "数集越大，分解越彻底。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch11_q1",
        index: 1,
        stem: "在复数范围内分解因式：$x^2 + 4y^2$",
        answer: "$(x+2yi)(x-2yi)$",
        analysis: "利用平方差与虚数单位 $i^2 = -1$：$x^2 + 4y^2 = x^2 - (2yi)^2 = (x+2yi)(x-2yi)$。",
        difficulty: "基础",
        type: "因式分解"
      }
    ]
  },
  {
    id: "ch12",
    number: 12,
    title: "既约多项式",
    subtitle: "不可约性判定与艾森斯坦判别法",
    bookPageRange: "083-091",
    pdfPageRange: "P92-P100",
    companionImage: "/book_samples/v1/ch12_start.png",
    introduction: "一个次数大于0的多项式，如果不能分解为两个次数比它低的多项式的乘积，就称为不可约多项式（既约多项式）。这类似于整数中的‘质数’。本单元介绍在有理数集内如何判定一个整系数多项式是否既约，特别是享誉数学界的艾森斯坦判别法（Eisenstein's Criterion）。",
    teacherTips: "艾森斯坦判别法（艾氏判别法）：\n设整系数多项式 $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$。\n若存在质数 $p$，满足以下三个条件：\n1. $p \\nmid a_n$（不能整除首项系数）；\n2. $p$ 整除所有其余系数 $a_{n-1}, \\dots, a_1, a_0$；\n3. $p^2 \\nmid a_0$（常数项不能被 $p^2$ 整除）。\n则 $P(x)$ 在有理数集 $\\mathbb{Q}$ 上必然既约（不可约）！",
    keyFormulas: [
      { name: "艾森斯坦判别法三要素", formula: "p \\nmid a_n, \\quad p \\mid a_{n-1},\\dots,a_0, \\quad p^2 \\nmid a_0 \\implies P(x) \\text{ 在 } \\mathbb{Q} \\text{ 上既约}" },
      { name: "平移代换技巧", formula: "P(x) \\text{ 既约 } \\iff P(x+1) \\text{ 既约}" }
    ],
    subsections: [
      {
        id: "12.1",
        number: "12.1",
        title: "艾森斯坦判别法与分圆多项式",
        content: "若原多项式直接应用艾氏判别法不明显，可令 $x = y + 1$ 或 $x = y + c$ 做平移代换，新多项式满足艾氏条件则原式亦不可约。",
        examples: [
          {
            id: "ex12_1",
            index: 1,
            title: "判定五次多项式不可约",
            stem: "证明多项式 $x^5 - 4x + 2$ 在有理数集上是既约的。",
            analysis: "系数分别为：$a_5 = 1, a_4 = 0, a_3 = 0, a_2 = 0, a_1 = -4, a_0 = 2$。\n选择质数 $p = 2$ 进行艾森斯坦判定。",
            solution: "取素数 $p = 2$：\n(1) $p = 2 \\nmid a_5 = 1$；\n(2) $p = 2$ 整除 $0, 0, 0, -4, 2$；\n(3) $p^2 = 4 \\nmid a_0 = 2$。\n三个条件全部满足！\n根据艾森斯坦判别法，$x^5 - 4x + 2$ 在有理数集上是既约多项式。",
            notes: "单墫老师指出：如果一个多项式在有理数上既约，它就不能再分解，证明极其利落！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch12_q1",
        index: 1,
        stem: "证明多项式 $x^4 + 10x^3 + 25x^2 - 15x + 5$ 在有理数集上不可约。",
        answer: "取素数 $p=5$ 判定",
        analysis: "取质数 $p=5$：首项系数为 $1$（不能被5整除）；其余系数 $10, 25, -15, 5$ 均能被 5 整除；常数项 $5$ 不能被 $5^2 = 25$ 整除。满足艾森斯坦条件，故在有理数集上不可约。",
        difficulty: "竞赛",
        type: "恒等式证明"
      }
    ]
  }
];
