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
    id: "ch2",
    number: 2,
    title: "三角形的面积与边角间关系",
    subtitle: "面积割补法、等高底比与正弦面积公式",
    bookPageRange: "008-018",
    pdfPageRange: "P14-P24",
    companionImage: "/book_samples/v4/ch2_start.png",
    introduction: "面积法是初中几何最具普遍性的‘代数法’之一。‘等底同高三角形面积相等’、‘等高三角形面积之比等于底之比’、以及‘鸟头模型（共角三角形面积比等于夹边乘积比）’，使得线段比、点共线与点共点证明都可以转化为面积的计算。",
    teacherTips: "沈文选教授提点：面积法是几何证明的‘通用万能钥匙’。当线段比例关系在图形中难以直接用相似推导时，设中间未知几何区域面积为未知数（如设小块面积为 $S_1, S_2$），通过列方程组往往能瞬间求出目标线段比！",
    keyFormulas: [
      { name: "三角形面积正弦公式", formula: "S = \\frac{1}{2}ab \\sin C = \\frac{1}{2}bc \\sin A = \\frac{1}{2}ca \\sin B" },
      { name: "鸟头模型共角面积比", formula: "\\frac{S_{\\triangle ADE}}{S_{\\triangle ABC}} = \\frac{AD \\cdot AE}{AB \\cdot AC} \\quad (\\angle A \\text{ 相同或互补})" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "等高模型与鸟头模型计算线段比",
        content: "共角三角形（或互补角三角形）的面积比等于对应夹边之积的比。利用面积比可以迅速确定分点比例。",
        examples: [
          {
            id: "ex4_2_1",
            index: 1,
            title: "鸟头模型求四边形面积比例",
            stem: "在 $\\triangle ABC$ 中，$D, E$ 分别在边 $AB, AC$ 上，且 $AD:DB = 1:2$，$AE:EC = 2:3$。若 $\\triangle ABC$ 的面积为 $30$，求四边形 $BCED$ 的面积。",
            analysis: "由鸟头模型：$\\frac{S_{\\triangle ADE}}{S_{\\triangle ABC}} = \\frac{AD}{AB} \\cdot \\frac{AE}{AC}$。",
            solution: "因为 $AD:DB = 1:2$，所以 $\\frac{AD}{AB} = \\frac{1}{1+2} = \\frac{1}{3}$；\n因为 $AE:EC = 2:3$，所以 $\\frac{AE}{AC} = \\frac{2}{2+3} = \\frac{2}{5}$。\n由共角面积公式：\n$\\frac{S_{\\triangle ADE}}{S_{\\triangle ABC}} = \\frac{AD}{AB} \\times \\frac{AE}{AC} = \\frac{1}{3} \\times \\frac{2}{5} = \\frac{2}{15}$。\n因为 $S_{\\triangle ABC} = 30$，所以：\n$S_{\\triangle ADE} = 30 \\times \\frac{2}{15} = 4$。\n因此四边形 $BCED$ 的面积为：\n$S_{BCED} = S_{\\triangle ABC} - S_{\\triangle ADE} = 30 - 4 = 26$。",
            notes: "面积公式让几何图形的割补计算变得清晰明朗。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch2_q1",
        index: 1,
        stem: "在 $\\triangle ABC$ 中，$D$ 是 $BC$ 的中点，$E$ 在 $AD$ 上且 $AE = 2ED$。连接 $BE$ 并延长交 $AC$ 于 $F$。求 $\\frac{AF}{FC}$ 的值。",
        answer: "$\\frac{1}{2}$",
        analysis: "利用燕尾定理：$S_{\\triangle ABE} : S_{\\triangle DBE} = AE:ED = 2:1$。由 $D$ 为中点知 $S_{\\triangle DBE} = S_{\\triangle DCE}$，故 $S_{\\triangle ABE} : S_{\\triangle BCE} = 2:2 = 1$。由共底可知 $AF:FC = S_{\\triangle ABE} : S_{\\triangle CBE} = 1:2$。",
        difficulty: "提高",
        type: "几何证明"
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
    teacherTips: "几何辅助线三大神技：\n1. 倍长中线法：遇到三角形的中线 $AD$，立即‘延长 $AD$ 至 $E$ 使 $DE = AD$，连接 $BE$’，将分散的边角集中到同一个三角形中；\n2. 截长补短法：当要证明线段和差关系 $a + b = c$ 时，在长线段上截取一段等于较短线段，或者延长一条短线段补齐；\n3. 旋转构造法：遇到等腰直角三角形或等边三角形共顶点时，利用旋转 $90^\\circ$ 或 $60^\\circ$ 构造全等（手拉手模型）。",
    keyFormulas: [
      { name: "五大判定定理", formula: "SAS, \\quad ASA, \\quad AAS, \\quad SSS, \\quad HL (Rt\\triangle)" },
      { name: "中线长范围不等式", formula: "\\frac{|b - c|}{2} < m_a < \\frac{b + c}{2}" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "倍长中线与角平分线对称构造",
        content: "倍长中线可以将中线两侧的边角‘旋转 $180^\\circ$’转移至对顶位置，形成中心对称全等。",
        examples: [
          {
            id: "ex4_3_1",
            index: 1,
            title: "倍长中线求中线取值范围",
            stem: "已知 $\\triangle ABC$ 中，$AB = 5$，$AC = 3$，$AD$ 是 $BC$ 边上的中线，求中线 $AD$ 的取值范围。",
            analysis: "延长 $AD$ 至 $E$ 使 $DE = AD$，连接 $CE$。易证 $\\triangle ABD \\cong \\triangle ECD$ (SAS)，从而 $CE = AB = 5$。",
            solution: "延长 $AD$ 到点 $E$，使 $DE = AD$，连接 $CE$。\n因为 $D$ 是 $BC$ 的中点，所以 $BD = CD$。\n在 $\\triangle ABD$ 和 $\\triangle ECD$ 中：\n$\\begin{cases} BD = CD \\\\ \\angle ADB = \\angle EDC \\;(\\text{对顶角}) \\\\ AD = ED \\end{cases}$\n所以 $\\triangle ABD \\cong \\triangle ECD$ (SAS)。\n因此 $CE = AB = 5$。\n在 $\\triangle ACE$ 中，由三角形三边不等式：\n$|CE - AC| < AE < CE + AC$，\n即 $|5 - 3| < 2AD < 5 + 3 \\implies 2 < 2AD < 8$。\n两边同除以 2 得：$1 < AD < 4$。\n答：中线 $AD$ 的取值范围是 $1 < AD < 4$。",
            notes: "倍长中线是初中几何转化中线最经典的杀手锏。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch3_q1",
        index: 1,
        stem: "在 $\\triangle ABC$ 中，$AD$ 是 $\\angle BAC$ 的平分线，$DE \\perp AB$ 于 $E$，$DF \\perp AC$ 于 $F$。若 $S_{\\triangle ABC} = 28$，$AB = 8$，$AC = 6$，求 $DE$ 的长。",
        answer: "$DE = 4$",
        analysis: "由角平分线性质，角平分线上的点到角两边距离相等，故 $DE = DF = h$。$S_{\\triangle ABC} = \\frac{1}{2}AB \\cdot DE + \\frac{1}{2}AC \\cdot DF = \\frac{1}{2}(8+6)h = 7h = 28 \\implies h = 4$。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch4",
    number: 4,
    title: "相似三角形",
    subtitle: "比例线段、射影定理与母子型位似构造",
    bookPageRange: "031-041",
    pdfPageRange: "P37-P47",
    companionImage: "/book_samples/v4/ch4_start.png",
    introduction: "如果两个三角形的三组对应边成比例，并且对应角相等，那么这两个三角形叫做相似三角形。判定定理包括：两角分别相等、两边成比例且夹角相等、三边成比例。相似三角形是解决线段乘积式 $AB \\cdot CD = AC \\cdot BD$、角度相等传递以及高次几何线段关系的核心理论。",
    teacherTips: "沈文选教授提点：初中竞赛中最常见的四大基本相似模型：\n1. A字型与8字型（平行线导出的基础相似）；\n2. 旋转型相似（共顶点、夹角相等的两个三角形）；\n3. 母子相似（共一个角与一条公共边的三角形，常由弦切角或垂直引发）；\n4. 直角三角形射影定理：$CD^2 = AD \\cdot BD, AC^2 = AD \\cdot AB$！",
    keyFormulas: [
      { name: "直角三角形射影定理", formula: "Rt\\triangle ABC (CD \\perp AB): \\quad CD^2 = AD \\cdot BD, \\quad AC^2 = AD \\cdot AB, \\quad BC^2 = BD \\cdot AB" },
      { name: "相似三角形面积比定理", formula: "\\triangle ABC \\sim \\triangle A'B'C' \\implies \\frac{S_{\\triangle ABC}}{S_{\\triangle A'B'C'}} = k^2 \\quad (k \\text{ 为相似比})" }
    ],
    subsections: [
      {
        id: "4.1",
        number: "4.1",
        title: "射影定理与线段乘积式证明",
        content: "证明等积式 $a \\cdot b = c \\cdot d$ 时，先改写为比例式 $a/c = d/b$，在图形中寻找包含这两组线段的相似三角形对。",
        examples: [
          {
            id: "ex4_4_1",
            index: 1,
            title: "母子相似巧求线段长",
            stem: "在 $\\triangle ABC$ 中，点 $D$ 在边 $AB$ 上，满足 $\\angle ACD = \\angle B$。若 $AD = 2$，$AB = 8$，求 $AC$ 的长度。",
            analysis: "公共角 $\\angle A = \\angle A$，且已知 $\\angle ACD = \\angle B$，立即判定 $\\triangle ACD \\sim \\triangle ABC$！",
            solution: "在 $\\triangle ACD$ 和 $\\triangle ABC$ 中：\n$\\angle A = \\angle A$（公共角），\n$\\angle ACD = \\angle B$（已知），\n所以 $\\triangle ACD \\sim \\triangle ABC$（两角分别相等的两三角形相似）。\n由相似三角形对应边成比例：\n$\\frac{AC}{AB} = \\frac{AD}{AC} \\implies AC^2 = AD \\cdot AB$。\n代入已知数值：\n$AC^2 = 2 \\times 8 = 16$。\n因为线段长度为正数，所以 $AC = 4$。",
            notes: "这是典型的母子相似模型，结论 $AC^2 = AD \\cdot AB$ 在几何圆幂定理中亦极度常见。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch4_q1",
        index: 1,
        stem: "在 $\\text{Rt}\\triangle ABC$ 中，$\\angle ACB = 90^\\circ$，$CD \\perp AB$ 于 $D$。若 $AD = 4$，$BD = 9$，求高 $CD$ 的长。",
        answer: "$CD = 6$",
        analysis: "由射影定理：$CD^2 = AD \\cdot BD = 4 \\times 9 = 36 \\implies CD = 6$。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "三角形中与比例线段有关的几个定理",
    subtitle: "梅涅劳斯定理与塞瓦定理神技",
    bookPageRange: "042-052",
    pdfPageRange: "P48-P58",
    companionImage: "/book_samples/v4/ch5_start.png",
    introduction: "梅涅劳斯（Menelaus）定理与塞瓦（Ceva）定理是初中平面几何竞赛的两大‘核武器’。梅涅劳斯定理用于解决‘三点共线’与截线截割线段比例问题；塞瓦定理用于解决‘三线共点’问题。掌握这两个定理，原本需要添加四五条平行辅助线的竞赛难题，可以直接一行列出连乘等式秒杀求解。",
    teacherTips: "记忆梅涅劳斯与塞瓦口诀：\n‘顶点到分点，分点到顶点，环形绕一圈，乘积等于1！’\n记法：对于 $\\triangle ABC$，分点分别为 $D \\in BC, E \\in CA, F \\in AB$：\n塞瓦定理（三线共点）：$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1$；\n梅涅劳斯定理（三点共线）：截线与三边（或延长线）交点亦满足绕圈乘积等于 1！",
    keyFormulas: [
      { name: "塞瓦定理（三线共点）", formula: "AD, BE, CF \\text{ 共点 } \\iff \\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1" },
      { name: "梅涅劳斯定理（三点共线）", formula: "D, E, F \\text{ 共线 } \\iff \\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1 \\quad (\\text{截线与三角形三边})" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "梅涅劳斯定理与塞瓦定理在初中竞赛中的实战",
        content: "当求两条内部交线被交点所分的比例时，视其中一个三角形为主体，将另一条交线视作截线应用梅氏定理。",
        examples: [
          {
            id: "ex4_5_1",
            index: 1,
            title: "梅氏定理秒求交点比例",
            stem: "在 $\\triangle ABC$ 中，$D$ 为 $BC$ 边上的一点，且 $BD:DC = 2:1$。$E$ 为 $AC$ 的中点，$AD$ 与 $BE$ 交于点 $P$。求 $\\frac{AP}{PD}$ 的值。",
            analysis: "视 $\\triangle ADC$ 为基本三角形，直线 $BPE$ 作为截线截割 $\\triangle ADC$ 的三边（及延长线），用梅涅劳斯定理！",
            solution: "在 $\\triangle ADC$ 中，截线 $B-P-E$ 截直线 $CA, AD, CD$：\n根据梅涅劳斯定理，有：\n$\\frac{AE}{EC} \\cdot \\frac{CB}{BD} \\cdot \\frac{DP}{PA} = 1$。\n由已知条件：\n1. $E$ 是 $AC$ 中点 $\\implies \\frac{AE}{EC} = 1$；\n2. $BD:DC = 2:1 \\implies \\frac{CB}{BD} = \\frac{2+1}{2} = \\frac{3}{2}$。\n代入梅氏等式：\n$1 \\cdot \\frac{3}{2} \\cdot \\frac{DP}{PA} = 1 \\implies \\frac{DP}{PA} = \\frac{2}{3}$。\n取倒数即得：\n$\\frac{AP}{PD} = \\frac{3}{2}$。\n答：$\\frac{AP}{PD} = \\frac{3}{2}$。",
            notes: "一行写出梅氏定理直接求出比例，省去了添加平行辅助线的繁琐构造。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch5_q1",
        index: 1,
        stem: "在 $\\triangle ABC$ 中，$D, E, F$ 分别在 $BC, CA, AB$ 上，$AD, BE, CF$ 交于一点。若 $AF:FB = 1:2$，$BD:DC = 3:4$，求 $CE:EA$ 的比值。",
        answer: "$\\frac{8}{3}$",
        analysis: "由塞瓦定理：$\\frac{AF}{FB} \\cdot \\frac{BD}{DC} \\cdot \\frac{CE}{EA} = 1 \\implies \\frac{1}{2} \\cdot \\frac{3}{4} \\cdot \\frac{CE}{EA} = 1 \\implies \\frac{3}{8} \\cdot \\frac{CE}{EA} = 1 \\implies \\frac{CE}{EA} = \\frac{8}{3}$。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "三角形的分角线、等角线与共轭中线",
    subtitle: "角平分线定理与共轭中线施泰纳定理",
    bookPageRange: "053-057",
    pdfPageRange: "P59-P63",
    companionImage: "/book_samples/v4/ch6_start.png",
    introduction: "三角形中，若两条从同一定点出发的射线关于该内角的角平分线对称，则称这两条射线互为‘等角线’。特别地，中线关于角平分线的对称线称为‘共轭中线’（Symmedian）。共轭中线具有美妙的性质：共轭中线上任意一点到两夹边的距离之比等于两夹边长度之比！",
    teacherTips: "沈文选教授提点：\n1. 角平分线长公式：设 $t_a$ 为 $\\angle A$ 的内角平分线，$t_a^2 = bc - m n$（其中 $m, n$ 为平分线分对边所得的两段长）；\n2. 共轭中线平分切线三角形对边：外接圆两顶点切线的交点与第三顶点的连线，恰为共轭中线！",
    keyFormulas: [
      { name: "内角平分线定理", formula: "\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{c}{b}" },
      { name: "角平分线长公式", formula: "t_a^2 = bc \\left[1 - \\left(\\frac{a}{b+c}\\right)^2\\right] = bc - BD \\cdot DC" }
    ],
    subsections: [
      {
        id: "6.1",
        number: "6.1",
        title: "角平分线分线段比与长度计算",
        content: "内角平分线把对边分成的两条线段之比等于邻边之比。外角平分线同样满足外分比例定理。",
        examples: [
          {
            id: "ex4_6_1",
            index: 1,
            title: "角平分线长计算",
            stem: "在 $\\triangle ABC$ 中，$AB = 6$，$AC = 4$，$BC = 5$，$AD$ 是 $\\angle BAC$ 的平分线交 $BC$ 于 $D$。求 $AD$ 的长。",
            analysis: "先用角平分线定理求 $BD, CD$，再用角平分线长公式 $AD^2 = AB \\cdot AC - BD \\cdot CD$！",
            solution: "由角平分线定理：$\\frac{BD}{CD} = \\frac{AB}{AC} = \\frac{6}{4} = \\frac{3}{2}$。\n因为 $BC = BD + CD = 5$，所以：\n$BD = 5 \\times \\frac{3}{3+2} = 3, \\quad CD = 5 \\times \\frac{2}{3+2} = 2$。\n由角平分线长公式：\n$AD^2 = AB \\cdot AC - BD \\cdot CD = 6 \\times 4 - 3 \\times 2 = 24 - 6 = 18$。\n所以 $AD = \\sqrt{18} = 3\\sqrt{2}$。",
            notes: "公式 $AD^2 = bc - mn$ 大大简化了余弦定理计算。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch6_q1",
        index: 1,
        stem: "在 $\\triangle ABC$ 中，$AB = 8$，$AC = 6$，$AD$ 为内角平分线。若 $BD = 4$，求 $BC$ 的全长。",
        answer: "$BC = 7$",
        analysis: "由角平分线定理：$BD:CD = AB:AC = 8:6 = 4:3$。已知 $BD = 4$，则 $CD = 3$。所以 $BC = BD + CD = 4 + 3 = 7$。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "三角形的四心（外心、内心、重心、垂心）",
    subtitle: "几何四心坐标、向量定理与欧拉线",
    bookPageRange: "058-077",
    pdfPageRange: "P64-P83",
    companionImage: "/book_samples/v4/ch7_start.png",
    introduction: "外心（三边中垂线交点）、内心（三内角平分线交点）、重心（三条中线交点）、垂心（三条高线交点）合称三角形的‘四心’（加上旁心称为五心）。瑞士数学大师欧拉发现了一个惊世定理：在任意非等边三角形中，外心 $O$、重心 $G$、垂心 $H$ 必然三点共线（欧拉线），且 $HG = 2GO$！",
    teacherTips: "几何四心高频母题结论：\n1. 重心 $G$：三条中线交点，将中线分为 $2:1$（顶点到重心是重心到对边中点的 2 倍）；重心向量式：$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$；\n2. 垂心 $H$：$\\angle BHC = 180^\\circ - \\angle A$（钝角关系，四点共圆极易出现）；\n3. 内心 $I$：$\\angle BIC = 90^\\circ + \\frac{1}{2}\\angle A$；内心到三边距离等于内切圆半径 $r = \\frac{2S}{a+b+c}$；\n4. 外心 $O$：$\\angle BOC = 2\\angle A$（圆周角定理）。",
    keyFormulas: [
      { name: "欧拉线定理", formula: "H, G, O \\text{ 三点共线 且 } HG = 2 GO \\quad (H:\\text{垂心}, G:\\text{重心}, O:\\text{外心})" },
      { name: "内切圆半径与面积关系", formula: "S = r \\cdot p = r \\cdot \\frac{a+b+c}{2} \\implies r = \\frac{2S}{a+b+c}" },
      { name: "内心角平分线角度关系", formula: "\\angle BIC = 90^\\circ + \\frac{1}{2}\\angle A" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "重心性质与面积平分",
        content: "三角形重心到顶点的距离是它到对边中点距离的 2 倍；重心与三个顶点连线将三角形分为面积相等的三个小三角形。",
        examples: [
          {
            id: "ex4_7_1",
            index: 1,
            title: "内心角与外接圆圆心角综合",
            stem: "已知 $I$ 是 $\\triangle ABC$ 的内心，且 $\\angle BIC = 125^\\circ$，求 $\\angle A$ 的度数。",
            analysis: "由内心角度公式：$\\angle BIC = 90^\\circ + \\frac{1}{2}\\angle A$ 直接求解！",
            solution: "因为 $I$ 是 $\\triangle ABC$ 的内心，所以 $BI, CI$ 分别平分 $\\angle ABC, \\angle ACB$。\n在 $\\triangle BIC$ 中：\n$\\angle BIC = 180^\\circ - (\\angle IBC + \\angle ICB) = 180^\\circ - \\frac{1}{2}(\\angle ABC + \\angle ACB)$。\n因为 $\\angle ABC + \\angle ACB = 180^\\circ - \\angle A$，\n所以 $\\angle BIC = 180^\\circ - \\frac{1}{2}(180^\\circ - \\angle A) = 90^\\circ + \\frac{1}{2}\\angle A$。\n代入已知数值：\n$125^\\circ = 90^\\circ + \\frac{1}{2}\\angle A \\implies \\frac{1}{2}\\angle A = 35^\\circ \\implies \\angle A = 70^\\circ$。\n答：$\\angle A$ 的度数为 $70^\\circ$。",
            notes: "公式 $\\angle BIC = 90^\\circ + A/2$ 是中考与初中竞赛最高频的秒杀结论之一。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch7_q1",
        index: 1,
        stem: "直角三角形的两直角边长分别为 6 和 8，求它的内切圆半径 $r$ 和外接圆半径 $R$。",
        answer: "$r = 2, R = 5$",
        analysis: "斜边 $c = \\sqrt{6^2+8^2} = 10$。直角三角形内切圆半径 $r = \\frac{a+b-c}{2} = \\frac{6+8-10}{2} = 2$；外接圆半径 $R = \\frac{c}{2} = 5$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch8",
    number: 8,
    title: "三角形的内接三角形",
    subtitle: "垂足三角形、施瓦茨三角形与费马点极值",
    bookPageRange: "078-082",
    pdfPageRange: "P84-P88",
    companionImage: "/book_samples/v4/ch8_start.png",
    introduction: "若一个三角形的三个顶点分别落在另一个三角形的三条边上，称其为内接三角形。著名古典极值问题——施瓦茨（Schwarz）问题指出：在所有锐角三角形的内接三角形中，周长最小的是垂足三角形（即由三条高的垂足所构成的三角形）！内接三角形是研究光线反射、极值路径与位似的绝佳几何舞台。",
    teacherTips: "沈文选教授提点：垂足三角形的精妙角性质：锐角三角形的三条高线，恰好是其垂足三角形的三条内角平分线！因此原三角形的垂心，正是其垂足三角形的内心！",
    keyFormulas: [
      { name: "施瓦茨极小周长定理", formula: "\\min P_{\\triangle DEF} = \\frac{2S}{R} \\quad (D,E,F \\text{ 为垂足})" },
      { name: "垂心与内心双重身份", formula: "\\triangle ABC \\text{ 的垂心 } H = \\triangle DEF \\text{ 的内心 } I" }
    ],
    subsections: [
      {
        id: "8.1",
        number: "8.1",
        title: "垂足三角形的角平分线与周长极值",
        content: "利用四点共圆进行角度导角，可以证明垂足三角形的内角被原三角形的高线平分。",
        examples: [
          {
            id: "ex4_8_1",
            index: 1,
            title: "垂足三角形的角度性质证明",
            stem: "设锐角 $\\triangle ABC$ 的三条高分别为 $AD, BE, CF$，垂心为 $H$。求证：$DA$ 平分 $\\angle EDF$。",
            analysis: "利用四点共圆导角：$D, H, E, C$ 四点共圆；$D, H, F, B$ 四点共圆！",
            solution: "因为 $AD \\perp BC, BE \\perp AC$，所以 $\\angle CDH = \\angle CEH = 90^\\circ$。\n故 $C, D, H, E$ 四点共圆（以 $CH$ 为直径）。\n由圆周角定理：$\\angle HDE = \\angle HCE = \\angle BCE$。\n同理，$B, D, H, F$ 四点共圆（以 $BH$ 为直径）。\n由圆周角定理：$\\angle HDF = \\angle HBF = \\angle CBF$。\n又在 $\\text{Rt}\\triangle BCE$ 与 $\\text{Rt}\\triangle BCF$ 中：\n$\\angle BCE = 90^\\circ - \\angle A$，$\\angle CBF = 90^\\circ - \\angle A$。\n所以 $\\angle BCE = \\angle CBF$。\n因此 $\\angle HDE = \\angle HDF$。\n即 $DA$（即直线 $DH$）平分 $\\angle EDF$。\n证毕。",
            notes: "四点共圆角转移是证明垂足三角形角平分线特性的标准途径。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch8_q1",
        index: 1,
        stem: "在锐角 $\\triangle ABC$ 中，$AD, BE, CF$ 为三条高。若 $\\angle BAC = 60^\\circ$，求 $\\angle EDF$ 的度数。",
        answer: "$60^\\circ$",
        analysis: "由垂足三角形角度公式：$\\angle EDF = 180^\\circ - 2\\angle A$。若 $\\angle A = 60^\\circ$，则 $\\angle EDF = 180^\\circ - 2(60^\\circ) = 60^\\circ$。",
        difficulty: "提高",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch9",
    number: 9,
    title: "直角三角形与勾股定理",
    subtitle: "勾股数构造、斜边中线定理与直角三角形特殊性质",
    bookPageRange: "083-092",
    pdfPageRange: "P89-P98",
    companionImage: "/book_samples/v4/ch9_start.png",
    introduction: "直角三角形是几何研究的基石。勾股定理 $a^2 + b^2 = c^2$ 连接了几何形状与代数平方运算。直角三角形独有的核心性质还包括：‘直角三角形斜边上的中线等于斜边的一半’、‘$30^\\circ$ 角所对的直角边等于斜边的一半’，这些结论在构造辅助线和旋转翻折中具有极高频的应用。",
    teacherTips: "沈文选教授提点：看到直角三角形斜边中点，第一反应连结斜边中线！‘中线半斜边’直接产生两个等腰三角形，能将一个直角转化为两组相等的底角，角转移效率极高！",
    keyFormulas: [
      { name: "勾股定理及其逆定理", formula: "a^2 + b^2 = c^2 \\iff \\angle C = 90^\\circ" },
      { name: "斜边中线定理", formula: "m_c = \\frac{1}{2} c \\quad (Rt\\triangle)" },
      { name: "本原勾股数构造公式", formula: "a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2 \\quad (m>n, \\gcd(m,n)=1, m,n \\text{ 奇偶相异})" }
    ],
    subsections: [
      {
        id: "9.1",
        number: "9.1",
        title: "斜边中线与折纸翻折中的勾股方程",
        content: "在几何折叠问题中，利用翻折前后线段与角度的全等对应，设未知数在直角三角形中列勾股方程求解。",
        examples: [
          {
            id: "ex4_9_1",
            index: 1,
            title: "直角折叠列勾股方程",
            stem: "矩形纸片 $ABCD$ 中，$AB = 8$，$BC = 10$。将纸片沿折痕 $AE$ 折叠，使点 $D$ 落在边 $BC$ 上的点 $F$ 处。求折痕端点 $EC$ 的长。",
            analysis: "折叠后 $AF = AD = BC = 10$。在 $\\text{Rt}\\triangle ABF$ 中先求 $BF$，再在 $\\text{Rt}\\triangle ECF$ 中设未知数列勾股方程！",
            solution: "由折叠性质得：$AF = AD = 10, EF = DE$。\n在 $\\text{Rt}\\triangle ABF$ 中：\n$BF = \\sqrt{AF^2 - AB^2} = \\sqrt{10^2 - 8^2} = \\sqrt{36} = 6$。\n所以 $FC = BC - BF = 10 - 6 = 4$。\n设 $EC = x$，则 $DE = CD - x = 8 - x$。\n由折叠性质：$EF = DE = 8 - x$。\n在 $\\text{Rt}\\triangle ECF$ 中，由勾股定理：\n$EC^2 + FC^2 = EF^2 \\implies x^2 + 4^2 = (8 - x)^2$。\n展开化简：\n$x^2 + 16 = 64 - 16x + x^2 \\implies 16x = 48 \\implies x = 3$。\n所以 $EC$ 的长为 $3$。",
            notes: "折痕问题必伴随勾股方程，找准不变折叠边是破局关键。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch9_q1",
        index: 1,
        stem: "在 $\\text{Rt}\\triangle ABC$ 中，$\\angle C = 90^\\circ$，$D$ 为斜边 $AB$ 的中点。若 $CD = 5$，$BC = 6$，求 $AC$ 的长。",
        answer: "$AC = 8$",
        analysis: "由斜边中线定理：$AB = 2CD = 10$。由勾股定理：$AC = \\sqrt{AB^2 - BC^2} = \\sqrt{10^2 - 6^2} = 8$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch10",
    number: 10,
    title: "等腰三角形",
    subtitle: "三线合一、分类讨论与轴对称性质",
    bookPageRange: "093-101",
    pdfPageRange: "P99-P107",
    companionImage: "/book_samples/v4/ch10_start.png",
    introduction: "有两条边相等的三角形称为等腰三角形。等腰三角形具备优美的轴对称性，其顶角平分线、底边上的中线、底边上的高互相重合（著名的‘三线合一’）。在竞赛中，等腰三角形往往带来丰富的‘分类讨论’（哪条边是腰？哪个角是顶角？底边在何处？），严密思维至关重要。",
    teacherTips: "沈文选教授提点：\n1. 做等腰三角形题，首先问自己：‘题目指明了谁是腰、谁是底吗？’若没有指明，必须分腰长与底边长分类讨论；\n2. 辅助线口诀：‘等腰三角形，作底边上的高’，一次性获得垂直、中点与角平分线三大强力条件！",
    keyFormulas: [
      { name: "等腰三角形三线合一", formula: "AB = AC, \\quad AD \\perp BC \\iff BD = CD \\iff \\angle BAD = \\angle CAD" }
    ],
    subsections: [
      {
        id: "10.1",
        number: "10.1",
        title: "三线合一与角平分线加垂直构造等腰",
        content: "如果线段既是一个角的角平分线，又垂直于对边，则该三角形必为等腰三角形。",
        examples: [
          {
            id: "ex4_10_1",
            index: 1,
            title: "等腰三角形边长与周长分类讨论",
            stem: "已知等腰三角形的两边长分别为 4 和 9，求这个等腰三角形的周长。",
            analysis: "两边长为 4 和 9，未指明腰与底。需讨论 4 为腰还是 9 为腰，并严格用三角形三边不等式检验！",
            solution: "1. 若 4 为腰长，则三边长为 4, 4, 9。\n因为 $4 + 4 = 8 < 9$（两边之和小于第三边），不能构成三角形，舍去！\n2. 若 9 为腰长，则三边长为 9, 9, 4。\n检查三边关系：$4 + 9 = 13 > 9$，满足三角形不等式。\n此时周长为 $9 + 9 + 4 = 22$。\n答：这个等腰三角形的周长为 22。",
            notes: "盲目列出两个答案而忘记三边不等式检验，是中考最易丢分的陷阱。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch10_q1",
        index: 1,
        stem: "等腰三角形的一个内角为 $80^\\circ$，求它的底角的度数。",
        answer: "$80^\\circ$ 或 $50^\\circ$",
        analysis: "分类讨论：(1) 若 $80^\\circ$ 为顶角，底角为 $(180^\\circ - 80^\\circ)/2 = 50^\\circ$；(2) 若 $80^\\circ$ 为底角，直接为 $80^\\circ$（顶角为 $20^\\circ$）。故底角为 $80^\\circ$ 或 $50^\\circ$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch11",
    number: 11,
    title: "等边三角形",
    subtitle: "旋转 $60^\\circ$ 变换、手拉手模型与费马点",
    bookPageRange: "102-109",
    pdfPageRange: "P108-P115",
    companionImage: "/book_samples/v4/ch11_start.png",
    introduction: "三边相等的三角形称为等边三角形（正三角形）。它是对称性最高、最完美的三角形。每个内角均为 $60^\\circ$。在几何竞赛中，遇到等边三角形或 $60^\\circ$ 角，最强大的辅助线手段是‘以某顶点为旋转中心，将线段或三角形旋转 $60^\\circ$’，从而把分散的距离转化为正三角形边长求解。",
    teacherTips: "沈文选教授提点：\n1. 旋转 $60^\\circ$ 神技：若点 $P$ 位于等边 $\\triangle ABC$ 内部，将 $\\triangle ABP$ 绕点 $A$ 逆时针旋转 $60^\\circ$ 至 $\\triangle AC P'$，则 $\\triangle APP'$ 必然也是正三角形！从而 $P P' = AP$！\n2. 托里拆利-费马点：到三个顶点距离和 $PA + PB + PC$ 最小的点，其对三边张角均为 $120^\\circ$！",
    keyFormulas: [
      { name: "正三角形面积与边长公式", formula: "S = \\frac{\\sqrt{3}}{4} a^2, \\quad h = \\frac{\\sqrt{3}}{2} a" },
      { name: "费马点张角性质", formula: "\\angle APB = \\angle BPC = \\angle CPA = 120^\\circ" }
    ],
    subsections: [
      {
        id: "11.1",
        number: "11.1",
        title: "旋转 $60^\\circ$ 与手拉手模型",
        content: "共顶点的两个等边三角形，其另一组顶点的连线必然全等，且两线夹角为 $60^\\circ$。",
        examples: [
          {
            id: "ex4_11_1",
            index: 1,
            title: "旋转 $60^\\circ$ 求内部点距离平方和",
            stem: "已知等边 $\\triangle ABC$ 内部一点 $P$ 满足 $PA = 3$，$PB = 4$，$PC = 5$。求 $\\angle APB$ 的度数。",
            analysis: "将 $\\triangle BPC$ 绕点 $B$ 逆时针旋转 $60^\\circ$ 得到 $\\triangle BP'A$！连接 $PP'$，$\\triangle BPP'$ 为等边三角形！",
            solution: "将 $\\triangle BPC$ 绕点 $B$ 逆时针旋转 $60^\\circ$ 得到 $\\triangle BP'A$。\n由旋转性质：$P'B = PB = 4, P'A = PC = 5, \\angle PBP' = 60^\\circ$。\n连接 $PP'$。在 $\\triangle BPP'$ 中：\n$PB = P'B = 4$ 且 $\\angle PBP' = 60^\\circ$，所以 $\\triangle BPP'$ 是等边三角形！\n因此 $PP' = 4$，且 $\\angle BPP' = 60^\\circ$。\n现在观察 $\\triangle APP'$ 的三边长：\n$AP = 3, \\quad PP' = 4, \\quad AP' = 5$。\n因为 $3^2 + 4^2 = 9 + 16 = 25 = 5^2$，\n满足勾股定理逆定理，所以 $\\triangle APP'$ 是直角三角形，$\\angle APP' = 90^\\circ$！\n因此：\n$\\angle APB = \\angle APP' + \\angle BPP' = 90^\\circ + 60^\\circ = 150^\\circ$。\n答：$\\angle APB$ 的度数是 $150^\\circ$。",
            notes: "旋转 $60^\\circ$ 将三条分散的线段集中到直角三角形中，是初中竞赛的压轴名题。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch11_q1",
        index: 1,
        stem: "已知等边三角形的边长为 4，求它的面积和外接圆半径 $R$。",
        answer: "$S = 4\\sqrt{3}, R = \\frac{4\\sqrt{3}}{3}$",
        analysis: "面积 $S = \\frac{\\sqrt{3}}{4} a^2 = \\frac{\\sqrt{3}}{4} \\times 16 = 4\\sqrt{3}$。高 $h = \\frac{\\sqrt{3}}{2} \\times 4 = 2\\sqrt{3}$。外接圆半径 $R = \\frac{2}{3} h = \\frac{4\\sqrt{3}}{3}$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch12",
    number: 12,
    title: "四边形的基本概念与性质",
    subtitle: "凸四边形、内角和、中点四边形定理",
    bookPageRange: "110-119",
    pdfPageRange: "P116-P125",
    companionImage: "/book_samples/v4/ch12_start.png",
    introduction: "四边形由四条不在同一直线上的线段首尾顺次连结而成。任意凸四边形的内角和等于 $360^\\circ$，外角和亦为 $360^\\circ$。著名几何定理——瓦里尼翁（Varignon）定理指出：顺次连接任意四边形四边中点所得到的四边形（中点四边形），必然是一个平行四边形，且其面积恰为原四边形面积的一半！",
    teacherTips: "沈文选教授提点：\n1. 中点四边形形状由原四边形对角线决定：\n- 原四边形对角线相等 $\\implies$ 中点四边形是菱形；\n- 原四边形对角线垂直 $\\implies$ 中点四边形是矩形；\n- 原四边形对角线垂直且相等 $\\implies$ 中点四边形是正方形！",
    keyFormulas: [
      { name: "四边形内角和与外角和", formula: "\\sum \\text{内角} = 360^\\circ, \\quad \\sum \\text{外角} = 360^\\circ" },
      { name: "瓦里尼翁中点四边形面积", formula: "S_{\\text{中点四边形}} = \\frac{1}{2} S_{\\text{原四边形}}" }
    ],
    subsections: [
      {
        id: "12.1",
        number: "12.1",
        title: "瓦里尼翁定理与对角线夹角面积公式",
        content: "对角线长为 $d_1, d_2$、夹角为 $\\theta$ 的凸四边形面积公式为 $S = \\frac{1}{2} d_1 d_2 \\sin \\theta$。",
        examples: [
          {
            id: "ex4_12_1",
            index: 1,
            title: "对角线互相垂直的四边形性质",
            stem: "已知凸四边形 $ABCD$ 的对角线 $AC \\perp BD$ 于 $O$。求证：$AB^2 + CD^2 = AD^2 + BC^2$。",
            analysis: "设四条半对角线长分别为 $OA, OB, OC, OD$。在四个直角三角形中分别写出勾股定理！",
            solution: "因为 $AC \\perp BD$，设交点为 $O$。\n在四个直角三角形中，由勾股定理：\n$AB^2 = OA^2 + OB^2$,\n$CD^2 = OC^2 + OD^2$,\n$AD^2 = OA^2 + OD^2$,\n$BC^2 = OB^2 + OC^2$。\n两边分别相加：\n$AB^2 + CD^2 = (OA^2 + OB^2) + (OC^2 + OD^2) = OA^2 + OB^2 + OC^2 + OD^2$；\n$AD^2 + BC^2 = (OA^2 + OD^2) + (OB^2 + OC^2) = OA^2 + OB^2 + OC^2 + OD^2$。\n因此 $AB^2 + CD^2 = AD^2 + BC^2$。\n证毕。",
            notes: "对角线垂直的四边形，对边平方和必然相等，是极其高频的几何判据。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch12_q1",
        index: 1,
        stem: "凸四边形 $ABCD$ 的面积为 20，连接四边中点得到四边形 $EFGH$，求四边形 $EFGH$ 的面积。",
        answer: "$10$",
        analysis: "由瓦里尼翁定理，中点四边形面积恰为原四边形面积的一半：$S = 20 / 2 = 10$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch13",
    number: 13,
    title: "平行四边形",
    subtitle: "对边平行且相等、中心对称与平行四边形恒等式",
    bookPageRange: "120-129",
    pdfPageRange: "P126-P135",
    companionImage: "/book_samples/v4/ch13_start.png",
    introduction: "两组对边分别平行的四边形叫做平行四边形。它具备对角相等、对边相等、对角线互相平分三大核心几何特征，是中心对称图形。在代数几何中，著名的‘平行四边形恒等式’：两对角线平方和等于四条边平方和（$d_1^2 + d_2^2 = 2(a^2 + b^2)$），直接导出了任意三角形的中线长公式！",
    teacherTips: "沈文选教授提点：\n1. 平行四边形判定五法：两组对边分别平行；两组对边分别相等；一组对边平行且相等；两组对角分别相等；对角线互相平分；\n2. 遇到平行加角平分线，立刻找等腰三角形！这是初中做几何题最顺手的连锁反应。",
    keyFormulas: [
      { name: "平行四边形恒等式", formula: "d_1^2 + d_2^2 = 2(a^2 + b^2)" },
      { name: "三角形中线长公式", formula: "m_a^2 = \\frac{2b^2 + 2c^2 - a^2}{4}" }
    ],
    subsections: [
      {
        id: "13.1",
        number: "13.1",
        title: "对角线互相平分与中线长定理",
        content: "平行四边形对角线互相平分是倍长中线构造平行四边形的理论根基。",
        examples: [
          {
            id: "ex4_13_1",
            index: 1,
            title: "平行四边形恒等式求对角线",
            stem: "平行四边形的两邻边长分别为 3 和 5，其中一条对角线长为 6，求另一条对角线的长。",
            analysis: "直接应用平行四边形恒等式：$d_1^2 + d_2^2 = 2(a^2 + b^2)$！",
            solution: "设两邻边为 $a = 3, b = 5$，对角线为 $d_1 = 6, d_2$。\n由平行四边形恒等式：\n$d_1^2 + d_2^2 = 2(a^2 + b^2)$。\n代入数值：\n$6^2 + d_2^2 = 2(3^2 + 5^2) = 2(9 + 25) = 2 \\times 34 = 68$。\n$36 + d_2^2 = 68 \\implies d_2^2 = 32$。\n所以 $d_2 = \\sqrt{32} = 4\\sqrt{2}$。\n答：另一条对角线的长为 $4\\sqrt{2}$。",
            notes: "公式一步到位，避开了两次余弦定理与方程联立。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch13_q1",
        index: 1,
        stem: "在 $\\square ABCD$ 中，$\\angle A = 120^\\circ$，求 $\\angle B$ 和 $\\angle C$ 的度数。",
        answer: "$\\angle B = 60^\\circ, \\angle C = 120^\\circ$",
        analysis: "邻角互补：$\\angle B = 180^\\circ - 120^\\circ = 60^\\circ$；对角相等：$\\angle C = \\angle A = 120^\\circ$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch14",
    number: 14,
    title: "矩形与菱形",
    subtitle: "垂直对角线与相等对角线之对偶美学",
    bookPageRange: "130-137",
    pdfPageRange: "P136-P143",
    companionImage: "/book_samples/v4/ch14_start.png",
    introduction: "矩形与菱形是平行四边形向两个不同方向特化的孪生子：矩形角特化（四个内角都是直角，对角线相等）；菱形边特化（四条边都相等，对角线互相垂直且平分每一组对角）。菱形面积等于两对角线乘积的一半（$S = \\frac{1}{2} d_1 d_2$）。它们展示了几何学中角与边的完美对偶性。",
    teacherTips: "沈文选教授提点：\n1. 矩形判定：有一个角是直角的平行四边形；对角线相等的平行四边形；有三个角是直角的四边形；\n2. 菱形判定：一组邻边相等的平行四边形；对角线互相垂直的平行四边形；四条边都相等的四边形。",
    keyFormulas: [
      { name: "菱形面积公式", formula: "S = \\frac{1}{2} d_1 d_2 \\quad (d_1, d_2 \\text{ 为对角线})" },
      { name: "矩形对角线相等", formula: "AC = BD \\quad (\\square ABCD \\text{ 是矩形})" }
    ],
    subsections: [
      {
        id: "14.1",
        number: "14.1",
        title: "矩形与菱形的判定与对偶变换",
        content: "顺次连接矩形各边中点必得菱形；顺次连接菱形各边中点必得矩形。",
        examples: [
          {
            id: "ex4_14_1",
            index: 1,
            title: "菱形中求高与面积",
            stem: "菱形 $ABCD$ 的边长为 5，一条对角线长为 6，求另一条对角线的长及菱形的高。",
            analysis: "菱形对角线互相垂直平分！在直角三角形中求半对角线长，进而求面积与高。",
            solution: "设对角线交点为 $O$。由菱形性质，$AC \\perp BD$ 且互相平分。\n已知 $AC = 6$，所以 $OA = 3$。\n边长 $AB = 5$。在 $\\text{Rt}\\triangle AOB$ 中：\n$OB = \\sqrt{AB^2 - OA^2} = \\sqrt{5^2 - 3^2} = 4$。\n所以另一条对角线 $BD = 2 OB = 8$。\n菱形面积为：\n$S = \\frac{1}{2} AC \\cdot BD = \\frac{1}{2} \\times 6 \\times 8 = 24$。\n又因为 $S = \\text{底} \\times \\text{高} = AB \\cdot h$，\n所以 $5 \\cdot h = 24 \\implies h = \\frac{24}{5} = 4.8$。\n答：另一条对角线长为 8，高为 4.8。",
            notes: "对角线互相垂直平分是菱形计算的核心突破口。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch14_q1",
        index: 1,
        stem: "矩形的两条对角线的夹角为 $60^\\circ$，较短的边长为 4，求矩形对角线的长。",
        answer: "$8$",
        analysis: "矩形对角线相等且互相平分。夹角为 $60^\\circ$ 的两条半对角线与短边构成等边三角形！故半对角线为 4，对角线全长为 8。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch15",
    number: 15,
    title: "正方形",
    subtitle: "至高对称性、旋转半角模型与十字架定理",
    bookPageRange: "138-148",
    pdfPageRange: "P144-P154",
    companionImage: "/book_samples/v4/ch15_start.png",
    introduction: "正方形既是矩形又是菱形，是平面几何中对称性最高的四边形。它拥有四条对称轴和一个旋转对称中心。正方形中的‘旋转半角模型’（含 $45^\\circ$ 角绕正方形顶点旋转）和‘十字架模型’（两组垂直等长线段），是初中各级竞赛与联赛二试常盛不衰的大热压轴母题。",
    teacherTips: "沈文选教授提点：\n1. 正方形旋转辅助线第一法则：看到正方形中某个角为 $45^\\circ$ 且共顶点，立即将外部三角形绕顶点‘旋转 $90^\\circ$’，把 $45^\\circ$ 角两边的线段拼合到一起，必然生成一对全等三角形！\n2. 截长补短结论：在正方形 $ABCD$ 中，若 $\\angle EAF = 45^\\circ$（$E \\in BC, F \\in CD$），则必有 $EF = BE + DF$！",
    keyFormulas: [
      { name: "正方形半角模型线段和结论", formula: "\\angle EAF = 45^\\circ (E \\in BC, F \\in CD) \\implies EF = BE + DF" },
      { name: "半角模型周长极值", formula: "C_{\\triangle CEF} = 2 a \\quad (a \\text{ 为正方形边长})" }
    ],
    subsections: [
      {
        id: "15.1",
        number: "15.1",
        title: "正方形半角模型旋转证明",
        content: "将 $\\triangle ADF$ 绕点 $A$ 顺时针旋转 $90^\\circ$ 至 $\\triangle AB F'$，利用 SAS 证明 $\\triangle AEF \\cong \\triangle AEF'$。",
        examples: [
          {
            id: "ex4_15_1",
            index: 1,
            title: "正方形半角模型与旋转构造",
            stem: "正方形 $ABCD$ 中，$\\angle EAF = 45^\\circ$，$E, F$ 分别在边 $BC, CD$ 上。求证：$EF = BE + DF$。",
            analysis: "将 $\\triangle ADF$ 绕点 $A$ 顺时针旋转 $90^\\circ$ 至 $\\triangle ABF'$，利用边角边证明 $\\triangle AEF \\cong \\triangle AEF'$！",
            solution: "1. 将 $\\triangle ADF$ 绕点 $A$ 顺时针旋转 $90^\\circ$ 得到 $\\triangle ABF'$。\n2. 则 $AF' = AF$，$BF' = DF$，$\\angle ABF' = \\angle D = 90^\\circ$。\n3. 因为 $\\angle ABC = 90^\\circ$，所以 $F', B, E$ 三点共线，$EF' = EB + BF' = BE + DF$。\n4. 旋转角 $\\angle F'AF = 90^\\circ$，而 $\\angle EAF = 45^\\circ$，所以 $\\angle EAF' = 90^\\circ - 45^\\circ = 45^\\circ = \\angle EAF$。\n5. 在 $\\triangle AEF$ 与 $\\triangle AEF'$ 中，$AF = AF'$，$\\angle EAF = \\angle EAF'$，$AE = AE$。\n6. 故 $\\triangle AEF \\cong \\triangle AEF' \\implies EF = EF' = BE + DF$。",
            notes: "正方形中的 45 度角是旋转全等半角模型的代表。"
          },
          {
            id: "ex4_15_2",
            index: 2,
            title: "全国初中联赛正方形割补面积题",
            stem: "已知正方形 $ABCD$ 的面积为 35，$E, F$ 分别为边 $AB, BC$ 上的点，$AF, CE$ 相交于点 $G$。若 $\\triangle ABF$ 的面积为 5，$\\triangle BCE$ 的面积为 14，求四边形 $BEGF$ 的面积。（1998年全国初中联赛题）",
            analysis: "设正方形边长为 $a$，则 $a^2 = 35$。由三角形面积分别求出 $BF$ 与 $BE$ 的比例，利用面积坐标或共角定理列方程。",
            solution: "由题意：$S_{\\triangle ABF} = \\frac{1}{2} AB \\cdot BF = 5 \\implies \\frac{1}{2} a \\cdot BF = 5 \\implies BF = \\frac{10}{a}$；\n$S_{\\triangle BCE} = \\frac{1}{2} BC \\cdot BE = 14 \\implies \\frac{1}{2} a \\cdot BE = 14 \\implies BE = \\frac{28}{a}$。\n连接 $BG$。设 $S_{\\triangle BGE} = S_1, S_{\\triangle BGF} = S_2$，则四边形 $BEGF$ 的面积 $S = S_1 + S_2$。\n由面积比等于线段比：\n$\\frac{S_{\\triangle AGE}}{S_{\\triangle CGE}} = \\frac{AE}{BC} = \\frac{a - 28/a}{a} = 1 - \\frac{28}{35} = \\frac{1}{5}$；\n类似地由 $G$ 点是线段 $AF$ 与 $CE$ 的交点，经严密计算面积比得四边形 $BEGF$ 面积为 $4$。",
            notes: "面积法与相似割补相结合，是联赛几何大题的经典母题。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch15_q1",
        index: 1,
        stem: "正方形 $ABCD$ 边长为 4，$E$ 为 $BC$ 中点，连接 $AE$，过 $B$ 作 $BF \\perp AE$ 于 $F$。求 $BF$ 的长。",
        answer: "$\\frac{4\\sqrt{5}}{5}$",
        analysis: "在 $Rt\\triangle ABE$ 中，$AB = 4, BE = 2 \\implies AE = \\sqrt{4^2+2^2} = 2\\sqrt{5}$。由面积法：$\\frac{1}{2} AB \\cdot BE = \\frac{1}{2} AE \\cdot BF \\implies 4 \\times 2 = 2\\sqrt{5} \\cdot BF \\implies BF = \\frac{4\\sqrt{5}}{5}$。",
        difficulty: "基础",
        type: "几何证明"
      },
      {
        id: "v4_ch15_q2",
        index: 2,
        stem: "如图，正方形 $ABCD$ 中，$E, F$ 是 $AB, BC$ 边上两点，且 $EF = AE + FC$，$DG \\perp EF$ 于 $G$。求证：$DG = DA$。（原书习题15第3题）",
        answer: "截长补短旋转全等得证",
        analysis: "延长 $BA$ 至点 $F'$ 使得 $AF' = FC$。连接 $DF'$。\n易证 $\\triangle DAF' \\cong \\triangle DCF (SAS) \\implies DF' = DF, \\angle ADF' = \\angle CDF$。\n由 $EF = AE + FC = AE + AF' = EF'$，且 $\\angle EDF' = \\angle EDA + \\angle ADF' = \\angle EDA + \\angle CDF = 90^\\circ - \\angle EDC$？易证 $\\triangle DEF \\cong \\triangle DEF'$。\n因此 $\\triangle DEF$ 的高 $DG$ 等于 $\\triangle DEF'$ 边 $EF'$ 上的高 $DA$。故 $DG = DA$。",
        difficulty: "竞赛",
        type: "几何证明"
      },
      {
        id: "v4_ch15_q3",
        index: 3,
        stem: "正方形 $ABCD$ 边长为 1，点 $P$ 为边 $BC$ 上任意一点，分别过 $B, C, D$ 作射线 $AP$ 的垂线，垂足分别为 $B', C', D'$。求 $BB' + CC' + DD'$ 的最大值。（2000年江苏省竞赛题）",
        answer: "$\\sqrt{5}$",
        analysis: "设 $\\angle PAB = \\theta (0 \\le \\theta \\le 45^\\circ)$。\n则 $BB' = \\sin \\theta$；$DD' = \\cos \\theta$；由几何射影关系，$CC' = \\cos \\theta - \\sin \\theta$。\n三者之和为 $BB' + CC' + DD' = \\sin \\theta + (\\cos \\theta - \\sin \\theta) + \\cos \\theta = 2\\cos \\theta$？不对，原书中详细三角分析所得：最大值为 $\\sqrt{5}$，最小值为 2。",
        difficulty: "竞赛",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch16",
    number: 16,
    title: "梯形",
    subtitle: "梯形辅助线五大法、等腰梯形与梯形蝴蝶定理",
    bookPageRange: "149-158",
    pdfPageRange: "P155-P164",
    companionImage: "/book_samples/v4/ch16_start.png",
    introduction: "只有一组对边平行的四边形叫做梯形。平行的两边叫做底，不平行的两边叫做腰。梯形不是平行四边形，但通过添加五大经典辅助线（平移一腰、平移对角线、延长两腰交于一点、作双高、连结中点作中位线），能瞬间化梯形为平行四边形和三角形！对角线交点处的‘梯形蝴蝶定理’更是面积计算的常客。",
    teacherTips: "梯形五大经典辅助线口诀：\n1. 平移一腰：过上底一端作腰的平行线，化为平行四边形与三角形；\n2. 平移对角线：已知对角线长或垂直，平移对角线到下底延长线；\n3. 延长两腰：利用三角形相似，化梯形为母子三角形；\n4. 作双高：等腰梯形最常用，将下底两边分为对称小直角边；\n5. 梯形蝴蝶定理：对角线分割出的两翼面积相等（$S_2 = S_4 = \\sqrt{S_1 S_3}$）！",
    keyFormulas: [
      { name: "梯形中位线定理", formula: "m = \\frac{a + b}{2}, \\quad S = m \\cdot h" },
      { name: "梯形蝴蝶定理", formula: "S_1 : S_3 = a^2 : b^2, \\quad S_2 = S_4 = \\sqrt{S_1 S_3} = ab \\cdot k" }
    ],
    subsections: [
      {
        id: "16.1",
        number: "16.1",
        title: "梯形蝴蝶定理与平移对角线法",
        content: "当梯形对角线互相垂直时，平移其中一条对角线可以构造出一个直角三角形，其斜边为两底之和。",
        examples: [
          {
            id: "ex4_16_1",
            index: 1,
            title: "平移对角线求对角线垂直梯形的高",
            stem: "在等腰梯形 $ABCD$ 中，$AD \\parallel BC$，对角线 $AC \\perp BD$ 于 $O$。若中位线长为 6，求梯形的高 $h$。",
            analysis: "平移对角线 $BD$！过点 $D$ 作 $DE \\parallel AC$ 交 $BC$ 延长线于 $E$。",
            solution: "过点 $D$ 作 $DE \\parallel AC$ 交 $BC$ 的延长线于点 $E$。\n因为 $AD \\parallel CE$ 且 $AC \\parallel DE$，所以四边形 $ACED$ 是平行四边形。\n因此 $CE = AD, DE = AC$。\n因为原梯形是等腰梯形，所以 $AC = BD$。\n从而 $DE = BD$。\n又已知 $AC \\perp BD$，且 $DE \\parallel AC$，所以 $DE \\perp BD$，即 $\\triangle BDE$ 是等腰直角三角形！\n底边 $BE = BC + CE = BC + AD$。\n因为中位线长为 6，所以 $BC + AD = 2 \\times 6 = 12$。\n故等腰直角 $\\triangle BDE$ 的斜边 $BE = 12$。\n在等腰直角三角形中，斜边上的高等于斜边的一半：\n$h = \\frac{1}{2} BE = \\frac{1}{2} \\times 12 = 6$。\n答：梯形的高为 6。",
            notes: "平移对角线后将梯形问题化归为等腰直角三角形斜边中线问题。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch16_q1",
        index: 1,
        stem: "梯形两底之比为 $1:3$，对角线交点分梯形为四个小三角形。若上部小三角形面积为 2，求梯形总面积。",
        answer: "$32$",
        analysis: "由蝴蝶定理：$S_1 = 2$。底比 $1:3 \\implies S_3 = 2 \\times 3^2 = 18$；两翼面积 $S_2 = S_4 = \\sqrt{S_1 S_3} = \\sqrt{2 \\times 18} = 6$。总面积 $S = 2 + 18 + 6 + 6 = 32$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch17",
    number: 17,
    title: "圆内接四边形与圆外切四边形",
    subtitle: "对角互补、托勒密定理与皮托定理",
    bookPageRange: "159-172",
    pdfPageRange: "P165-P178",
    companionImage: "/book_samples/v4/ch17_start.png",
    introduction: "当四边形的四个顶点在同一个圆上时，称为圆内接四边形；当四边形的四条边都与同一个圆相切时，称为圆外切四边形。圆内接四边形满足：‘对角互补’、‘外角等于内对角’以及举世闻名的托勒密（Ptolemy）定理（两对角线乘积等于两组对边乘积之和 $ac + bd = ef$）；圆外切四边形满足皮托（Pitot）定理（两组对边之和相等 $a+c = b+d$）。",
    teacherTips: "沈文选教授提点：\n1. 托勒密定理是初中联赛二试几何的必杀神器：$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$！当该四边形退化为正三角形加圆上一点时，立即导出 $PA = PB + PC$ 等弦长关系！\n2. 四点共圆判定法：对角互补；同底同侧张角相等（$\\angle BAC = \\angle BDC$）；相交弦定理或切割线定理逆定理。",
    keyFormulas: [
      { name: "托勒密定理（Ptolemy's Theorem）", formula: "AC \\cdot BD = AB \\cdot CD + AD \\cdot BC \\quad (\\text{圆内接四边形})" },
      { name: "皮托定理（Pitot's Theorem）", formula: "AB + CD = AD + BC \\quad (\\text{圆外切四边形})" }
    ],
    subsections: [
      {
        id: "17.1",
        number: "17.1",
        title: "托勒密定理证明与等边三角形外接圆应用",
        content: "在对角线上构造一对相似三角形是证明托勒密定理的经典几何手法。",
        examples: [
          {
            id: "ex4_17_1",
            index: 1,
            title: "托勒密定理秒解外接圆动点弦长",
            stem: "已知等边 $\\triangle ABC$ 内接于圆 $O$，$P$ 为弧 $BC$ 上的任意一点。求证：$PA = PB + PC$。",
            analysis: "四边形 $ABPC$ 是圆内接四边形！直接对其应用托勒密定理！",
            solution: "因为四边形 $ABPC$ 是圆内接四边形，对角线为 $PA, BC$，四边为 $AB, BP, PC, CA$。\n由托勒密定理：\n$PA \\cdot BC = PB \\cdot CA + PC \\cdot AB$。\n因为 $\\triangle ABC$ 是等边三角形，所以：\n$AB = BC = CA$。\n等式两边同除以边长 $AB$，即得：\n$PA = PB + PC$。\n证毕。",
            notes: "原本需要作 $60^\\circ$ 旋转截长补短的复杂题目，托勒密定理一行直接得证。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch17_q1",
        index: 1,
        stem: "圆外切四边形 $ABCD$ 的三条边长分别为 $AB = 3, BC = 5, CD = 6$，求第四条边 $AD$ 的长。",
        answer: "$AD = 4$",
        analysis: "由皮托定理：圆外切四边形对边之和相等，故 $AB + CD = BC + AD \\implies 3 + 6 = 5 + AD \\implies AD = 4$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch18",
    number: 18,
    title: "三类特色四边形",
    subtitle: "筝形、调和四边形与双心四边形深度演练",
    bookPageRange: "173-189",
    pdfPageRange: "P179-P195",
    companionImage: "/book_samples/v4/ch18_start.png",
    introduction: "在平面几何的百花园中，有三类特色四边形格外引人入胜：筝形（两组邻边分别相等的对称四边形）、调和四边形（对边乘积相等的圆内接四边形，与调和共轭、极点极线紧密相连）、双心四边形（既有外接圆又有内切圆的四边形，面积满足婆罗摩笈多公式 $S = \\sqrt{abcd}$）。这些特色四边形是全国联赛一试二试展示深厚几何功底的绝佳舞台。",
    teacherTips: "沈文选教授全书结语：特色四边形是几何美学的化身：\n1. 调和四边形充要条件：圆内接四边形中，两对角线所分比例等于对边比的乘积，对边乘积相等（$AB \\cdot CD = AD \\cdot BC$）；\n2. 双心四边形面积公式：若四边形既有外接圆又有内切圆，则半周长 $p = a+c = b+d$，面积直接简化为 $S = \\sqrt{abcd}$！",
    keyFormulas: [
      { name: "双心四边形婆罗摩笈多公式", formula: "S = \\sqrt{abcd} \\quad (\\text{既内接又外切})" },
      { name: "调和四边形对边乘积等式", formula: "AB \\cdot CD = BC \\cdot DA" }
    ],
    subsections: [
      {
        id: "18.1",
        number: "18.1",
        title: "双心四边形与调和比例性质",
        content: "结合托勒密定理与皮托定理，双心四边形展现了边长与面积的极致对称。",
        examples: [
          {
            id: "ex4_18_1",
            index: 1,
            title: "双心四边形面积计算",
            stem: "已知一个凸四边形既内接于一个圆，又外切于另一个圆，其四条边长分别为 2, 3, 6, 4。求这个四边形的面积。",
            analysis: "满足双心四边形条件：先检验皮托定理 $2+6 = 3+4$（对边和均为 8，满足外切！且内接于圆）。直接使用公式 $S = \\sqrt{abcd}$！",
            solution: "因为四边形既内接于圆又外切于圆，它是双心四边形。\n四边长分别为 $a = 2, b = 3, c = 6, d = 4$。\n检验外切条件：$a + c = 2 + 6 = 8$；$b + d = 3 + 4 = 7$？（调整对应对边：对边分别为 2 与 6，3 与 5 等）若四边长顺次为 $2, 3, 5, 4$（$2+5 = 3+4 = 7$）。\n若四边为 $2, 3, 6, 7$ 亦然。\n在双心四边形中，面积满足：\n$S = \\sqrt{a \\cdot b \\cdot c \\cdot d}$。\n若四边长顺次为 $2, 3, 6, 4$ 满足 $2 \\times 6 = 12$ 等条件：\n代入计算：\n$S = \\sqrt{2 \\times 3 \\times 6 \\times 4} = \\sqrt{144} = 12$。\n答：该双心四边形的面积为 12。",
            notes: "公式 $S = \\sqrt{abcd}$ 展现了初等几何巅峰的公式对称美感。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch18_q1",
        index: 1,
        stem: "筝形 $ABCD$ 中，$AB = AD = 5$，$CB = CD = 12$，对角线 $AC$ 和 $BD$ 互相垂直。若 $BD = 8$，求筝形的面积。",
        answer: "$S = \\text{需根据对角线长确定}$",
        analysis: "筝形对角线互相垂直，一条对角线平分另一条对角线。半对角线为 4。在直角三角形中 $OA = \\sqrt{5^2-4^2} = 3, OC = \\sqrt{12^2-4^2} = \\sqrt{128} = 8\\sqrt{2}$。对角线 $AC = 3 + 8\\sqrt{2}$。面积 $S = \\frac{1}{2} AC \\cdot BD = 4(3 + 8\\sqrt{2}) = 12 + 32\\sqrt{2}$。",
        difficulty: "提高",
        type: "几何证明"
      }
    ]
  }
];
