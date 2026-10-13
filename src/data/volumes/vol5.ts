import { Chapter } from "@/types/book";

export const VOL5_CHAPTERS: Chapter[] = [
  {
    id: "ch3",
    number: 3,
    title: "与圆有关的角",
    subtitle: "圆心角、圆周角与弦切角定理",
    bookPageRange: "018-027",
    pdfPageRange: "P24-P33",
    companionImage: "/book_samples/v5/ch1_start.png",
    introduction: "圆是平面几何中对称性最完美的图形。与圆相关的角构成了一个严密的推导链条：圆心角的度数等于它所对的弧的度数；同弧所对的圆周角等于它所对的圆心角的一半；同弧或等弧所对的圆周角相等；半圆或直径所对的圆周角是直角（$90^\\circ$）；弦切角的度数等于它所夹的弧所对的圆周角。",
    teacherTips: "柯新立老师提点：\n1. 看到直径，秒连圆周角构造 $90^\\circ$ 直角三角形！这是出现频次最高的辅助线；\n2. 弦切角定理是连接切线与圆周角的无上利剑（弦切角 $\\angle TAB = \\angle ACB$）；\n3. 圆内角等于它所对两弧度数和的一半，圆外角等于所截两弧度数差的一半。",
    keyFormulas: [
      { name: "圆周角定理", formula: "\\angle ACB = \\frac{1}{2}\\angle AOB" },
      { name: "弦切角定理", formula: "\\angle TAB = \\angle ACB \\quad (TA \\text{ 为切线})" },
      { name: "直径所对圆周角", formula: "AB \\text{ 为直径 } \\iff \\angle ACB = 90^\\circ" }
    ],
    subsections: [
      {
        id: "3.1",
        number: "3.1",
        title: "弦切角定理与角转移技术",
        content: "切线与弦所夹的角，等于该弦所对的圆周角。利用弦切角定理可以把切线处的角度无损转移到圆周上任意一点，进而判定相似三角形或平行线。",
        examples: [
          {
            id: "ex5_3_1",
            index: 1,
            title: "弦切角证明角相等",
            stem: "过圆 $O$ 上一点 $A$ 作切线 $AT$。弦 $AB$ 平分 $\\angle CAT$，$C$ 在圆上。求证：$\\triangle ABC$ 是等腰三角形。",
            analysis: "利用弦切角定理：$\\angle TAB = \\angle C$。再利用角平分线传递。",
            solution: "证明：\n因为 $AT$ 是圆 $O$ 的切线，由弦切角定理：\n$\\angle TAB = \\angle C$。\n又因为 $AB$ 平分 $\\angle CAT$，所以：\n$\\angle CAB = \\angle TAB$。\n因此 $\\angle CAB = \\angle C$。\n在 $\\triangle ABC$ 中，由于两个底角相等，\n所以 $AB = BC$，即 $\\triangle ABC$ 是等腰三角形。\n证毕。",
            notes: "两行解决，角转移一击命中。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch3_q1",
        index: 1,
        stem: "圆内接四边形 $ABCD$ 中，$\\angle A : \\angle B : \\angle C = 2 : 3 : 4$，求 $\\angle D$ 的度数。",
        answer: "$90^\\circ$",
        analysis: "圆内接四边形对角互补：$\\angle A + \\angle C = 180^\\circ$。由比值 $2k + 4k = 180^\\circ \\implies k = 30^\\circ$。\n故 $\\angle B = 3k = 90^\\circ$。对角互补得 $\\angle D = 180^\\circ - 90^\\circ = 90^\\circ$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "四点共圆的判定与性质",
    subtitle: "奥数几何压轴题的核心命脉",
    bookPageRange: "049-058",
    pdfPageRange: "P55-P64",
    companionImage: "/book_samples/v5/ch5_start.png",
    introduction: "四点共圆是全国初中数学联赛和高中竞赛中出现率最高、威力最强的几何工具。若凸四边形对角互补，或者同底边的两个同侧三角形顶角相等，则四顶点共圆。一旦证明了四点共圆，圆的所有角度相等性质、圆幂定理立刻全部激活，题目瞬间瓦解！",
    teacherTips: "四点共圆三大判定准则：\n1. 对角互补：$\\angle B + \\angle D = 180^\\circ$；\n2. 同侧张角相等：$\\angle BAC = \\angle BDC$（两点位于线段 $BC$ 同侧，张角相等）；\n3. 相交线段乘积相等：$PA \\cdot PB = PC \\cdot PD$（圆幂定理的逆定理）。\n口诀：‘找直角、找补角、找等角，一旦共圆，所向披靡！’",
    keyFormulas: [
      { name: "同侧张角共圆准则", formula: "\\angle BAC = \\angle BDC \\iff A, B, C, D \\text{ 四点共圆}" },
      { name: "对角互补准则", formula: "\\angle A + \\angle C = 180^\\circ \\iff A, B, C, D \\text{ 四点共圆}" }
    ],
    subsections: [
      {
        id: "6.1",
        number: "6.1",
        title: "高线垂足四点共圆模型",
        content: "锐角三角形的三条高线两两相交，共产生 6 个四点共圆。垂足与顶点之间的角转移是竞赛基础母题。",
        examples: [
          {
            id: "ex5_6_1",
            index: 1,
            title: "证明四点共圆导角",
            stem: "在锐角 $\\triangle ABC$ 中，$BD, CE$ 为高，垂足为 $D, E$。求证：$B, C, D, E$ 四点共圆，并证明 $\\triangle ADE \\sim \\triangle ABC$。",
            analysis: "$BD, CE$ 是高，所以 $\\angle BDC = \\angle BEC = 90^\\circ$。同底边 $BC$ 同侧张角均为直角！",
            solution: "证明：\n(1) 因为 $BD \\perp AC, CE \\perp AB$，所以 $\\angle BDC = \\angle BEC = 90^\\circ$。\n点 $D, E$ 在线段 $BC$ 同侧，且对 $BC$ 张角均为直角，\n所以 $B, C, D, E$ 四点共圆（以 $BC$ 为直径的圆）。\n(2) 由四点共圆性质，四边形对角互补，外角等于内对角：\n$\\angle AED = \\angle C$。\n又 $\\angle DAE = \\angle BAC$（公共角），\n所以 $\\triangle ADE \\sim \\triangle ACB$ (两角对应相等)。\n证毕。",
            notes: "注意相似三角形的顶点对应次序是反向的（$\\triangle ADE \\sim \\triangle ACB$）。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch6_q1",
        index: 1,
        stem: "四边形 $ABCD$ 中，$\\angle B = \\angle D = 90^\\circ$，$AB = AD$。求证：$AC$ 平分 $\\angle BAD$。",
        answer: "利用 A, B, C, D 四点共圆及等弦对等角证明",
        analysis: "$\\angle B + \\angle D = 180^\\circ \\implies A, B, C, D$ 四点共圆。因 $AB = AD$，在同一外接圆中等弦所对圆周角相等，即 $\\angle ACB = \\angle ACD$。又直角三角形全等易得 $AC$ 平分 $\\angle BAD$。",
        difficulty: "基础",
        type: "恒等式证明"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "圆幂定理",
    subtitle: "相交弦定理、切割线定理与割线定理大一统",
    bookPageRange: "059-066",
    pdfPageRange: "P65-P72",
    companionImage: "/book_samples/v5/ch7_start.png",
    introduction: "从圆内或圆外一点 $P$ 引割线或切线，所截得的线段乘积具有惊人的恒定性。这在历史上被分别称为：相交弦定理（点在圆内）、割线定理（点在圆外）、切割线定理（一条割线一条切线）。在现代几何中，它们被统称为‘圆幂定理’：点 $P$ 到圆心的距离 $d$ 与圆半径 $R$ 满足 $PA \\cdot PB = |d^2 - R^2|$！",
    teacherTips: "圆幂三合一速记：\n1. 相交弦定理：圆内交点 $P$，两弦 $AB, CD$，则 $PA \\cdot PB = PC \\cdot PD$；\n2. 切割线定理：圆外点 $P$ 引切线 $PT$，割线 $PAB$，则 $PT^2 = PA \\cdot PB$；\n3. 割线定理：圆外点 $P$ 引两割线，则 $PA \\cdot PB = PC \\cdot PD$。\n利用圆幂定理可以神速证明四点共圆（圆幂逆定理）！",
    keyFormulas: [
      { name: "点关于圆的幂", formula: "\\mathcal{P}(P, \\odot O) = PO^2 - R^2 = PA \\cdot PB" },
      { name: "切割线定理", formula: "PT^2 = PA \\cdot PB" },
      { name: "相交弦定理", formula: "PA \\cdot PB = PC \\cdot PD" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "利用圆幂逆定理证明四点共圆",
        content: "若两条线段 $AB$ 和 $CD$ 相交于点 $P$，且满足 $PA \\cdot PB = PC \\cdot PD$，则 $A, B, C, D$ 四点共圆。",
        examples: [
          {
            id: "ex5_7_1",
            index: 1,
            title: "切割线定理求线段长",
            stem: "从圆外一点 $P$ 向圆作切线 $PT$（切点为 $T$）和割线 $PAB$。已知 $PT = 6$，$PA = 4$，求弦 $AB$ 的长度。",
            analysis: "直接应用切割线定理 $PT^2 = PA \\cdot PB$。",
            solution: "由切割线定理：\n$PT^2 = PA \\cdot PB$\n代入数值：$6^2 = 4 \\cdot PB \\implies 36 = 4PB \\implies PB = 9$。\n因为点 $A$ 在线段 $PB$ 上，所以：\n$AB = PB - PA = 9 - 4 = 5$。\n答：弦 $AB$ 的长为 5。",
            notes: "公式直接代入，分清全长 $PB$ 与弦长 $AB$。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch7_q1",
        index: 1,
        stem: "圆内两弦 $AB, CD$ 交于点 $P$。$PA = 3, PB = 8, PC = 4$，求 $PD$ 的长。",
        answer: "$6$",
        analysis: "由相交弦定理：$PA \\cdot PB = PC \\cdot PD \\implies 3 \\times 8 = 4 \\times PD \\implies PD = 6$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch9",
    number: 9,
    title: "托勒密定理及其应用",
    subtitle: "圆内接四边形对角线之积等于对边乘积和",
    bookPageRange: "077-086",
    pdfPageRange: "P83-P92",
    companionImage: "/book_samples/v5/ans_start.png",
    introduction: "古希腊天文学家托勒密（Ptolemy）发现了关于圆内接四边形的绝美定理：圆内接四边形的两条对角线长度之乘积，等于两组对边长度乘积之和！即 $AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$。如果四边形不能内接于圆，则对角线之积严格小于对边乘积和（托勒密不等式）。此定理在推导正弦三角函数和角公式、解决几何极值问题中极其强悍。",
    teacherTips: "托勒密定理应用秘籍：\n1. 构造旋转相似三角形证明：在对角线 $AC$ 上找一点 $E$ 使得 $\\angle ABE = \\angle DBC$；\n2. 巧求等边三角形外接圆动点距离和：若点 $P$ 在等边 $\\triangle ABC$ 的外接圆劣弧 $BC$ 上，应用托勒密定理立刻得到 $PA = PB + PC$！（秒杀经典大题）；\n3. 正方形外接圆同样适用。",
    keyFormulas: [
      { name: "托勒密定理 (Ptolemy)", formula: "AC \\cdot BD = AB \\cdot CD + BC \\cdot AD \\iff A, B, C, D \\text{ 共圆}" },
      { name: "托勒密不等式", formula: "AC \\cdot BD \\leq AB \\cdot CD + BC \\cdot AD \\quad (当且仅当共圆时取等号)" }
    ],
    subsections: [
      {
        id: "9.1",
        number: "9.1",
        title: "等边三角形外接圆与托勒密定理",
        content: "当一个顶点与等边三角形三顶点共圆时，托勒密定理可以给出三条弦长之间的线性关系。",
        examples: [
          {
            id: "ex5_9_1",
            index: 1,
            title: "等边三角形的托勒密线段和",
            stem: "设等边 $\\triangle ABC$ 内接于圆 $O$。点 $P$ 是劣弧 $BC$ 上的任意一点。求证：$PA = PB + PC$。",
            analysis: "考虑圆内接四边形 $ABPC$。应用托勒密定理！",
            solution: "证明：\n在圆内接四边形 $ABPC$ 中，由托勒密定理：\n$PA \\cdot BC = PB \\cdot AC + PC \\cdot AB$。\n因为 $\\triangle ABC$ 是等边三角形，所以：\n$AB = BC = AC = a$。\n代入上式得：\n$PA \\cdot a = PB \\cdot a + PC \\cdot a$\n两边同除以 $a$：\n$PA = PB + PC$。\n证毕。",
            notes: "原本需要复杂的旋转全等辅助线，应用托勒密定理只需一行！"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch9_q1",
        index: 1,
        stem: "若点 $P$ 在正方形 $ABCD$ 的外接圆劣弧 $CD$ 上，已知 $PA = 7, PB = 5$，求 $PD$ 的长。",
        answer: "利用托勒密定理列式求解",
        analysis: "在圆内接四边形 $PBCD$ 和 $PABC$ 中分别应用托勒密定理，设边长为 $a$，对角线为 $\\sqrt{2}a$，解出 $PD$。",
        difficulty: "竞赛",
        type: "代数求值"
      }
    ]
  }
];
