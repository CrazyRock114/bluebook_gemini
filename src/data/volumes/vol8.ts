import { Chapter } from "@/types/book";

export const VOL8_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "代数篇：恒等变形、求值与不等式",
    subtitle: "代数解题核心策略与柯西、均值不等式初步",
    bookPageRange: "001-034",
    pdfPageRange: "P10-P43",
    companionImage: "/book_samples/v8/ch1_start.png",
    introduction: "代数是数学的基础分支，研究的是事物的代数结构，表现为各种各样的变形和技巧，重在培养高阶运算能力与符号掌控力。数学竞赛问题的解决，往往不是由拥有的知识量单向决定的，而是需要透彻理解问题的本质，从繁杂的式子中洞察出对称性、齐次性与主元降维的战略突破口。",
    teacherTips: "冯志刚领队传授代数总纲：\n1. 均值不等式（AM-GM）：$a+b \\geq 2\\sqrt{ab}$ ($a,b > 0$)，和定积最大，积定和最小！\n2. 柯西不等式（Cauchy-Schwarz）：$(a^2+b^2)(x^2+y^2) \\geq (ax+by)^2$，当且仅当 $a/x = b/y$ 时等号成立；\n3. 换元降次：遇到对称分式，令 $p = x+y, q = xy$ 或令 $t = x+1/x$。",
    keyFormulas: [
      { name: "基本均值不等式 (AM-GM)", formula: "\\frac{a+b}{2} \\geq \\sqrt{ab} \\quad (a, b > 0, \\text{等号当且仅当 } a=b)" },
      { name: "柯西不等式 (二维)", formula: "(a_1^2 + a_2^2)(b_1^2 + b_2^2) \\geq (a_1 b_1 + a_2 b_2)^2" },
      { name: "柯西不等式分式形式", formula: "\\frac{x^2}{a} + \\frac{y^2}{b} \\geq \\frac{(x+y)^2}{a+b} \\quad (a, b > 0)" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "利用均值不等式与柯西不等式证明极值",
        content: "柯西不等式的分式形式（又称安德雷斯库不等式 Sedrakyan/Bergström Lemma）是证明分式不等式的无上神器。",
        examples: [
          {
            id: "ex8_1_1",
            index: 1,
            title: "分式柯西不等式秒解最小值",
            stem: "已知实数 $a, b > 0$ 且 $a + b = 1$，求 $\\frac{1}{a} + \\frac{1}{b}$ 的最小值。",
            analysis: "利用柯西不等式的分式形式：$\\frac{1^2}{a} + \\frac{1^2}{b} \\geq \\frac{(1+1)^2}{a+b}$！",
            solution: "由柯西不等式分式形式：\n$\\frac{1}{a} + \\frac{1}{b} = \\frac{1^2}{a} + \\frac{1^2}{b} \\geq \\frac{(1 + 1)^2}{a + b} = \\frac{4}{1} = 4$。\n当且仅当 $\\frac{1}{a} = \\frac{1}{b}$，即 $a = b = \\frac{1}{2}$ 时，等号成立。\n故 $\\frac{1}{a} + \\frac{1}{b}$ 的最小值为 4。",
            notes: "一行证明！若不用柯西，通分展开再用均值亦可。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v8_ch1_q1",
        index: 1,
        stem: "已知 $x, y > 0$ 且 $2x + 3y = 12$，求 $xy$ 的最大值及此时 $x, y$ 的值。",
        answer: "$xy$ 最大值为 6，此时 $x = 3, y = 2$",
        analysis: "由均值不等式：$12 = 2x + 3y \\geq 2\\sqrt{2x \\cdot 3y} = 2\\sqrt{6xy}$。\n$6 \\geq \\sqrt{6xy} \\implies 36 \\geq 6xy \\implies xy \\leq 6$。\n当 $2x = 3y = 6 \\implies x = 3, y = 2$ 时取到最大值 6。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "几何篇：面积法、几何变换与共圆",
    subtitle: "无辅之辅、等积变形与高级角转移",
    bookPageRange: "035-070",
    pdfPageRange: "P44-P79",
    companionImage: "/book_samples/v8/ch2_start.png",
    introduction: "在数学竞赛中，几何题的解决往往有赖于找到最关键的辅助线。然而‘面积法’却能做到‘以无辅胜有辅’！通过建立同一图形在不同视角下的面积等式，或者利用高相同面积比等于底边比（共边定理），几何线段关系被瞬间转化为代数恒等式。几何变换（旋转、轴对称、平移）则能巧妙重组分散的条件。",
    teacherTips: "几何篇两大元策略：\n1. 面积法（算两次）：同一个三角形面积，既可以表示为 $\\frac{1}{2}ah_a$，也可以表示为 $\\frac{1}{2}ab\\sin C$，还可以表示为 $pr$；\n2. 旋转构造法：遇到共端点的等长线段且夹角为特殊角（如 $60^\\circ$ 或 $90^\\circ$），绕该顶点旋转相应角度，使分散的线段拼接成全等或共圆三角形！",
    keyFormulas: [
      { name: "共边定理比例公式", formula: "\\frac{S_{\\triangle PAB}}{S_{\\triangle PAB'}} = \\frac{PB}{PB'} \\quad (A, B, B' \\text{ 共线})" },
      { name: "角平分线面积法推导", formula: "\\frac{S_{\\triangle ABD}}{S_{\\triangle ACD}} = \\frac{AB}{AC} = \\frac{BD}{CD}" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "利用面积法秒证角平分线定理",
        content: "角平分线上的点到角两边距离相等，分割所得的两个小三角形的高相等，因而面积比等于底边比。",
        examples: [
          {
            id: "ex8_2_1",
            index: 1,
            title: "面积法证明角平分线定理",
            stem: "在 $\\triangle ABC$ 中，$AD$ 是 $\\angle A$ 的角平分线，交 $BC$ 于 $D$。求证：$\\frac{BD}{DC} = \\frac{AB}{AC}$。",
            analysis: "考虑 $\\triangle ABD$ 和 $\\triangle ACD$ 的面积比。既可以以 $BC$ 为底，也可以以 $AB, AC$ 为底！",
            solution: "证明：\n考虑 $\\triangle ABD$ 与 $\\triangle ACD$ 的面积：\n视角一：以 $BD$ 和 $CD$ 为底，由于两三角形在点 $A$ 处的高相同（记为 $h$），\n所以 $\\frac{S_{\\triangle ABD}}{S_{\\triangle ACD}} = \\frac{BD \\cdot h / 2}{CD \\cdot h / 2} = \\frac{BD}{CD}$。\n视角二：因为 $AD$ 是角平分线，点 $D$ 到 $AB$ 的距离等于点 $D$ 到 $AC$ 的距离（记为 $d$），\n所以 $\\frac{S_{\\triangle ABD}}{S_{\\triangle ACD}} = \\frac{AB \\cdot d / 2}{AC \\cdot d / 2} = \\frac{AB}{AC}$。\n综合两式，即得：\n$\\frac{BD}{CD} = \\frac{AB}{AC}$。\n证毕。",
            notes: "三行证明著名的角平分线定理，面积法的代表杰作！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v8_ch2_q1",
        index: 1,
        stem: "在等边 $\\triangle ABC$ 内部有一点 $P$，已知点 $P$ 到三边的距离分别为 $h_1, h_2, h_3$。求证：$h_1 + h_2 + h_3$ 为定值，且等于等边三角形的高 $h$。",
        answer: "利用面积法相加证明（维维亚尼定理 Viviani's Theorem）",
        analysis: "连接 $PA, PB, PC$。三角形总面积 $S = S_{\\triangle PAB} + S_{\\triangle PBC} + S_{\\triangle PCA} = \\frac{1}{2}a(h_1+h_2+h_3)$。又 $S = \\frac{1}{2}ah$。故 $h_1+h_2+h_3 = h$（定值）。",
        difficulty: "基础",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "数论篇：整除、奇偶分析与不定方程",
    subtitle: "极端原理与无穷递降法的综合破局",
    bookPageRange: "071-104",
    pdfPageRange: "P80-P113",
    companionImage: "/book_samples/v8/ch3_start.png",
    introduction: "在数学竞赛数论压轴题中，单纯套用定理往往难以直接奏效。需要使用‘极端原理’（考虑最小的反例或最小的正整数解）以及费马创造的‘无穷递降法’（Infinite Descent）。如果假设存在一组正整数解，能推导出一组更小的正整数解，由于正整数集有良序性（不可能无限递降），从而严格证明原方程无解！",
    teacherTips: "数论竞赛综合三大元思维：\n1. 奇偶性与模 3、模 4 分析：任何平方数模 3 只能余 0 或 1，模 4 只能余 0 或 1！常用于证明平方和问题无解；\n2. 极端原理：设 $x_0$ 是满足条件的最小正整数，推导矛盾；\n3. 质因数 2 的幂次分析（2-adic 估值法）。",
    keyFormulas: [
      { name: "平方数模3与模4特征", formula: "x^2 \\equiv 0 \\text{ 或 } 1 \\pmod 3, \\quad x^2 \\equiv 0 \\text{ 或 } 1 \\pmod 4" },
      { name: "费马无穷递降法原理", formula: "(x, y, z) \\in \\mathbb{Z}^+ \\implies (x', y', z') \\in \\mathbb{Z}^+ \\text{ 且 } x' < x \\implies \\text{无正整数解}" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "利用模 3 奇偶分析证明方程无整数解",
        content: "当一个整数方程无法因式分解时，两边取同余，利用完全平方数的可能余数产生矛盾。",
        examples: [
          {
            id: "ex8_3_1",
            index: 1,
            title: "模 3 判定无解",
            stem: "证明方程 $x^2 - 3y = 2$ 没有整数解。",
            analysis: "两边对模 3 取同余！",
            solution: "证明：\n原方程两边对模 3 取同余：\n$x^2 - 3y \\equiv 2 \\pmod 3$\n因为 $3y \\equiv 0 \\pmod 3$，所以原方程等价于：\n$x^2 \\equiv 2 \\pmod 3$。\n但是，对于任意整数 $x$：\n当 $x \\equiv 0 \\pmod 3$ 时，$x^2 \\equiv 0 \\pmod 3$；\n当 $x \\equiv 1 \\pmod 3$ 时，$x^2 \\equiv 1 \\pmod 3$；\n当 $x \\equiv 2 \\pmod 3$ 时，$x^2 \\equiv 4 \\equiv 1 \\pmod 3$。\n即任意整数的平方除以 3 的余数只能是 0 或 1，绝不可能等于 2！\n这与 $x^2 \\equiv 2 \\pmod 3$ 产生矛盾！\n因此，该方程没有整数解。\n证毕。",
            notes: "完全平方数的模余特征是数论初阶必杀技。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v8_ch3_q1",
        index: 1,
        stem: "证明方程 $x^2 + y^2 = 2023$ 没有整数解。",
        answer: "两边模 4 分析产生矛盾（2023 模 4 余 3，而两平方和模 4 只能是 0, 1, 2）",
        analysis: "任意整数平方模 4 只能余 0 或 1。故 $x^2 + y^2 \\pmod 4$ 的可能取值只能是 $0+0=0, 0+1=1, 1+1=2$。但 $2023 = 4 \\times 505 + 3 \\equiv 3 \\pmod 4$。矛盾！故无整数解。",
        difficulty: "基础",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch4",
    number: 4,
    title: "第四部分 组合篇：抽屉原则、构造与反证法",
    subtitle: "奥数皇冠上的明珠——构造性思维",
    bookPageRange: "105-140",
    pdfPageRange: "P114-P149",
    companionImage: "/book_samples/v8/ch4_start.png",
    introduction: "组合数学是数学奥林匹克皇冠上的明珠。在这里，没有固定的公式套路，唯有纯粹的逻辑推理与惊人的创造力。反证法（假设结论不成立推导逻辑自相矛盾）与构造法（通过给出具体的排列、策略或染色方案）是解决高难度竞赛组合题的两大核心战略。",
    teacherTips: "冯志刚总教练寄语：\n‘敢于构造、善于反证！’\n证明‘存在性’往往只需给出一个精巧的反例或构造实例；证明‘不可能’则首选反证法结合抽屉原理与奇偶性分析。初中阶段完成小蓝本 8 卷的系统研读，数学思维将发生质的升华！",
    keyFormulas: [
      { name: "反证法逻辑架构", formula: "A \\implies B \\iff (A \\land \\neg B) \\implies \\bot (矛盾)" },
      { name: "极大极小元原理", formula: "\\text{有限离散集中必存在最大元素与最小元素}" }
    ],
    subsections: [
      {
        id: "4.1",
        number: "4.1",
        title: "构造法与反证法综合运用",
        content: "先假设命题不成立，利用有限集合中极值元素的存在性导出荒谬结论，从而完成严格证明。",
        examples: [
          {
            id: "ex8_4_1",
            index: 1,
            title: "极大元反证法证明图论结论",
            stem: "在某次会议中，每人至少有 2 个朋友（认识是相互的）。证明：必能找到若干个人围成一个圆圈，使得圈中每个人都与身旁的两人是朋友。",
            analysis: "考虑会议中最长的一条由朋友关系串联起来的单向路径！利用极大元！",
            solution: "证明：\n考虑所有人组成的朋友关系图。因为总人数是有限的，\n所以必然存在一条‘不能再延长’的最长朋友简单路径：\n$P = (v_1, v_2, v_3, \\dots, v_k)$，其中相邻两人是朋友。\n考察路径的终点端点 $v_k$：\n根据题意，$v_k$ 至少有 2 个朋友。\n路径中的 $v_{k-1}$ 已经是 $v_k$ 的一个朋友。\n那么 $v_k$ 的另一个朋友 $u$ 在哪里？\n如果 $u$ 不在路径 $P$ 中，那么我们可以把 $u$ 接在 $v_k$ 后面，得到一条更长的路径 $(v_1, \\dots, v_k, u)$，这与 $P$ 是‘最长简单路径’矛盾！\n因此，点 $v_k$ 的另一个朋友 $u$ 必须已经在路径 $P$ 之中，\n不妨设 $u = v_i$ ($1 \\leq i \\leq k-2$)。\n此时，从 $v_i$ 沿着路径走到 $v_k$，再由 $v_k$ 直接连回 $v_i$，\n即 $(v_i, v_{i+1}, \\dots, v_k, v_i)$ 就构成了一个封闭的圆圈！\n圈中每个人都与身旁的两人是朋友。\n证毕。",
            notes: "这就是组合极值原理（最长路径法）的经典震撼力量！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v8_ch4_q1",
        index: 1,
        stem: "平面上有 6 个点，任意三点不共线。用红、蓝两色任意给它们两两之间的连线（共 15 条线段）染色。证明：必存在一个三边同色的单色三角形。",
        answer: "见解析（拉姆齐定理 R(3,3)=6 标准证明）",
        analysis: "任取一点 $A$，从 $A$ 出发引出 5 条线段，由抽屉原理，必有至少 3 条同色（设 $AB, AC, AD$ 同为红色）。考察 $\\triangle BCD$ 的三边：若其中有一条为红色（如 $BC$ 为红），则 $\\triangle ABC$ 为全红三角形；若三边均不是红（全为蓝），则 $\\triangle BCD$ 本身是全蓝三角形。无论如何必有单色三角形！",
        difficulty: "竞赛",
        type: "恒等式证明"
      }
    ]
  }
];
