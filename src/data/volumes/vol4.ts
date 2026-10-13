import { Chapter } from "@/types/book";

export const VOL4_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "三角形的基本概念和性质",
    subtitle: "三边关系、内角和与内外角不等式",
    bookPageRange: "001-007",
    pdfPageRange: "P7-P13",
    companionImage: "/book_samples/v4/ch1_start.png",
    introduction: "每个三角形都有三条边和三个角，它们互相联系、互相制约。在边与边的关系方面：‘两边之和大于第三边，两边之差小于第三边’；在角与角的关系方面：‘三角形内角和等于 $180^\\circ$’，‘三角形的一个外角等于与它不相邻的两个内角之和’。这些基础几何公理蕴含着深邃的几何不等式结构。",
    teacherTips: "沈文选教授提点：\n1. 三边不等式化简技巧：设 $a, b, c$ 为三边长，则 $a+b-c > 0, b+c-a > 0, c+a-b > 0$！常结合绝对值化简或因式分解；\n2. 锐角、钝角三角形判别法则：设 $c$ 为最长边，若 $a^2 + b^2 > c^2$ 则为锐角三角形；若 $a^2 + b^2 = c^2$ 为直角三角形；若 $a^2 + b^2 < c^2$ 为钝角三角形！",
    keyFormulas: [
      { name: "三角形三边不等式", formula: "|a - b| < c < a + b" },
      { name: "海伦公式面积", formula: "S = \\sqrt{p(p-a)(p-b)(p-c)}, \\quad p = \\frac{a+b+c}{2}" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "利用三边不等式化简代数式",
        content: "在几何中，若已知 $a, b, c$ 为三角形三边长，利用 $a+b-c > 0$ 可以去除绝对值符号，并可设 $x = b+c-a, y = c+a-b, z = a+b-c$ 进行拉维代换（Ravi Substitution）。",
        examples: [
          {
            id: "ex4_1_1",
            index: 1,
            title: "三边关系化简绝对值",
            stem: "已知 $a, b, c$ 为 $\\triangle ABC$ 的三边长，化简式子：$|a + b - c| + |b - c - a| - |c - a + b|$。",
            analysis: "由三边不等式：$a+b>c \\implies a+b-c>0$；$b < c+a \\implies b-c-a < 0$；$c+b > a \\implies c-a+b > 0$。",
            solution: "因为 $a, b, c$ 是三角形的三边长，所以：\n(1) $a + b - c > 0 \\implies |a + b - c| = a + b - c$；\n(2) $b - c - a = b - (c+a) < 0 \\implies |b - c - a| = -(b - c - a) = a - b + c$；\n(3) $c - a + b = (b+c) - a > 0 \\implies |c - a + b| = c - a + b$。\n代入原式：\n原式 $= (a + b - c) + (a - b + c) - (c - a + b) = 3a - b - c$。",
            notes: "符号判断要准确对照‘两边之和大于第三边’。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch1_q1",
        index: 1,
        stem: "三角形的两边长分别为 3 和 7，第三边长 $x$ 为奇数，求 $x$ 的值。",
        answer: "$5, 7, 9$",
        analysis: "由三边不等式：$7 - 3 < x < 7 + 3 \\implies 4 < x < 10$。因 $x$ 为奇数，故 $x = 5, 7, 9$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "全等三角形",
    subtitle: "全等判定与倍长中线、截长补短辅助线",
    bookPageRange: "019-030",
    pdfPageRange: "P25-P36",
    companionImage: "/book_samples/v4/ch3_start.png",
    introduction: "能够完全重合的两个三角形叫做全等三角形。全等三角形对应边相等、对应角相等。判定公理有 SAS、ASA、AAS、SSS 以及直角三角形特有的 HL。在初中几何竞赛中，直接给出全等条件的题目极少，绝大多数都需要通过添加精妙的几何辅助线，‘无中生有’地构造出全等三角形。",
    teacherTips: "几何辅助线三大神技：\n1. 倍长中线法：遇到三角形的中线 $AD$，立即‘延长 $AD$ 至 $E$ 使 $DE = AD$，连接 $BE$’，将分散的边角集中到同一个三角形中；\n2. 截长补短法：当要证明线段和差关系 $a + b = c$ 时，在长线段上截取一段等于较短线段，或者延长一条短线段补齐；\n3. 旋转构造法：遇到等腰直角三角形或等边三角形共顶点时，利用旋转 $90^\\circ$ 或 $60^\\circ$ 构造全等。",
    keyFormulas: [
      { name: "五大判定定理", formula: "SAS, \\quad ASA, \\quad AAS, \\quad SSS, \\quad HL (Rt\\triangle)" },
      { name: "中线长公式", formula: "m_a = \\frac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "倍长中线与旋转构图",
        content: "倍长中线后，利用 SAS 得到对顶的全等三角形，从而完成线段平移与平行线构造。",
        examples: [
          {
            id: "ex4_3_1",
            index: 1,
            title: "倍长中线证线段不等式",
            stem: "在 $\\triangle ABC$ 中，$AD$ 是 $BC$ 边上的中线，求证：$AD < \\frac{AB + AC}{2}$。",
            analysis: "看到中线 $AD$，果断倍长中线！延长 $AD$ 到 $E$ 使 $DE = AD$。",
            solution: "证明：延长 $AD$ 到点 $E$，使 $DE = AD$，连接 $CE$。\n在 $\\triangle ABD$ 和 $\\triangle ECD$ 中：\n$\\begin{cases} AD = ED \\\\ \\angle ADB = \\angle EDC (对顶角) \\\\ BD = CD (D为中点) \\end{cases}$\n所以 $\\triangle ABD \\cong \\triangle ECD$ (SAS)。\n因此 $CE = AB$。\n在 $\\triangle ACE$ 中，由三角形两边之和大于第三边：\n$AE < AC + CE$\n因为 $AE = 2AD$ 且 $CE = AB$，所以：\n$2AD < AB + AC \\implies AD < \\frac{AB + AC}{2}$。\n证毕。",
            notes: "这是平面几何中使用倍长中线构造全等的最经典范例！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch3_q1",
        index: 1,
        stem: "在 $\\triangle ABC$ 中，$\\angle B = 2\\angle C$，$AD$ 平分 $\\angle BAC$ 交 $BC$ 于 $D$。求证：$AB + BD = AC$。",
        answer: "截长补短法证明（在 AC 上截取 AE = AB）",
        analysis: "在 $AC$ 上截取 $AE = AB$，连接 $DE$。易证 $\\triangle ABD \\cong \\triangle AED$ (SAS)，得 $\\angle AED = \\angle B = 2\\angle C$ 且 $DE = BD$。又 $\\angle AED = \\angle C + \\angle EDC \\implies \\angle EDC = \\angle C \\implies EC = DE = BD$。故 $AC = AE + EC = AB + BD$。",
        difficulty: "提高",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "三角形中与比例线段有关的几个定理",
    subtitle: "梅涅劳斯定理与塞瓦定理",
    bookPageRange: "042-052",
    pdfPageRange: "P48-P58",
    companionImage: "/book_samples/v4/ch4_start.png",
    introduction: "梅涅劳斯定理（Menelaus）与塞瓦定理（Ceva）是初中平面几何竞赛中的‘神之利器’。梅涅劳斯定理给出了三点共线的充要条件，塞瓦定理给出了三线共点的充要条件。这两个定理将繁杂的平行辅助线证明，简化为‘沿三角形三边首尾相接的线段比例之积等于 1’的纯代数计算！",
    teacherTips: "两大神定理速记口诀：\n1. 塞瓦定理（三线共点）：顶点到分点、分点到下一个顶点的比值相乘：$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$（顺时针首尾相连环环相扣！）；\n2. 梅涅劳斯定理（三点共线）：割线与三边（或延长线）交点所成的比例之积同样为 1！",
    keyFormulas: [
      { name: "塞瓦定理 (Ceva)", formula: "\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1 \\iff AD, BE, CF \\text{ 三线共点}" },
      { name: "梅涅劳斯定理 (Menelaus)", formula: "\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1 \\iff D, E, F \\text{ 三点共线}" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "塞瓦定理证明三角形三心共点",
        content: "利用塞瓦定理可以极快证明三角形三条中线共点（重心）、三条内角平分线共点（内心）、三条高共点（垂心）。",
        examples: [
          {
            id: "ex4_5_1",
            index: 1,
            title: "塞瓦定理证明重心存在",
            stem: "证明：三角形的三条中线交于同一点。",
            analysis: "中线将三边均分为 $1:1$ 的比例。利用塞瓦定理逆定理检验比例之积。",
            solution: "设 $D, E, F$ 分别为 $BC, CA, AB$ 的中点。\n则 $\\frac{BD}{DC} = 1$, $\\frac{CE}{EA} = 1$, $\\frac{AF}{FB} = 1$。\n三式相乘：\n$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1 \\cdot 1 \\cdot 1 = 1$。\n根据塞瓦定理的逆定理，$AD, BE, CF$ 必交于同一点。\n证毕。",
            notes: "一行证明三中线交于一点（重心）！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch5_q1",
        index: 1,
        stem: "在 $\\triangle ABC$ 中，$D$ 为 $BC$ 边中点，$E$ 在 $AC$ 上且 $AE = 2EC$，$AD$ 与 $BE$ 交于点 $P$。求 $\\frac{AP}{PD}$ 的比值。",
        answer: "$4 : 1$",
        analysis: "对 $\\triangle ADC$ 与截线 $B-P-E$ 应用梅涅劳斯定理：\n$\\frac{AP}{PD} \\cdot \\frac{DB}{BC} \\cdot \\frac{CE}{EA} = 1 \\implies \\frac{AP}{PD} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = 1 \\implies \\frac{AP}{PD} = 4$。",
        difficulty: "竞赛",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "三角形的四心",
    subtitle: "外心、内心、重心与垂心的和谐交融",
    bookPageRange: "058-077",
    pdfPageRange: "P64-P83",
    companionImage: "/book_samples/v4/ans_start.png",
    introduction: "三角形有四颗著名的‘心’：\n1. 外心 $O$：三边中垂线交点（外接圆圆心，到三顶点距离相等）；\n2. 内心 $I$：三内角平分线交点（内切圆圆心，到三边距离相等）；\n3. 重心 $G$：三条中线交点（分中线为 $2:1$）；\n4. 垂心 $H$：三条高线交点。\n欧拉定理更指出：外心 $O$、重心 $G$、垂心 $H$ 永远三点共线（欧拉线 Euler line），且 $HG = 2GO$！",
    teacherTips: "四心核心性质速记：\n1. 重心 $G$：重心分每条中线为 $2:1$（顶点到重心是重心到对边中点的 2 倍）；重心将三角形面积三等分！\n2. 内心 $I$：$\\angle BIC = 90^\\circ + \\frac{1}{2}\\angle A$；面积公式 $S = pr$ ($p$ 为半周长，$r$ 为内切圆半径)；\n3. 垂心 $H$：垂足四点共圆极多，对角互补；$\\angle BHC = 180^\\circ - \\angle A$；\n4. 欧拉线：$H, G, O$ 三点共线，且 $HG = 2GO$。",
    keyFormulas: [
      { name: "重心比例性质", formula: "AG = 2GD, \\quad BG = 2GE, \\quad CG = 2GF" },
      { name: "内心角度公式", formula: "\\angle BIC = 90^\\circ + \\frac{1}{2}\\angle A" },
      { name: "欧拉线定理", formula: "H, G, O \\text{ 共线，且 } HG : GO = 2 : 1" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "内心角平分线与面积公式",
        content: "内心到三边距离相等，连接内心与三顶点，将大三角形分割为三个高均为 $r$ 的小三角形，得到 $S = \\frac{1}{2}(a+b+c)r = pr$。",
        examples: [
          {
            id: "ex4_7_1",
            index: 1,
            title: "直角三角形内切圆半径公式",
            stem: "在直角三角形 $ABC$ 中，两直角边长为 $a, b$，斜边长为 $c$。求内切圆半径 $r$ 的表达式。",
            analysis: "利用切线长定理，或者利用面积公式 $S = pr$。",
            solution: "方法一（面积法）：\n直角三角形面积 $S = \\frac{1}{2}ab$。\n又 $S = \\frac{1}{2}(a+b+c)r$。\n所以 $\\frac{1}{2}ab = \\frac{1}{2}(a+b+c)r \\implies r = \\frac{ab}{a+b+c}$。\n方法二（切线长定理）：\n$r = \\frac{a+b-c}{2}$。\n（因为两直角边加起来等于斜边加上两倍内切圆半径）。\n两式完全等价，因为 $(a+b-c)(a+b+c) = (a+b)^2 - c^2 = a^2+2ab+b^2 - c^2 = 2ab$！",
            notes: "直角三角形的 $r = (a+b-c)/2$ 是必须秒答的竞赛公式。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch7_q1",
        index: 1,
        stem: "在 $\\triangle ABC$ 中，内心为 $I$，$\\angle A = 80^\\circ$，求 $\\angle BIC$ 的度数。",
        answer: "$130^\\circ$",
        analysis: "利用内心角度公式：$\\angle BIC = 90^\\circ + \\frac{1}{2}\\angle A = 90^\\circ + 40^\\circ = 130^\\circ$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  }
];
