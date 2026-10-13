import { Chapter } from "@/types/book";

export const VOL5_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "圆、扇形、弓形的周长和面积",
    subtitle: "曲线几何度量、弧度与阴影面积割补",
    bookPageRange: "001-009",
    pdfPageRange: "P7-P15",
    companionImage: "/book_samples/v5/ch1_start.png",
    introduction: "圆是平面上到定点的距离等于定长的所有点的集合。由圆周和半径围成的扇形、由弦和弧围成的弓形，构成了曲线几何图形面积计算的核心基石。求解不规则阴影图形面积时，运用割补法、旋转拼接、等积变形与容斥原理，是考查空间想象力和初等几何基本功的经典方式。",
    teacherTips: "柯新立老师提点：\n1. 弧长与扇形面积公式必须烂熟于心：$l = \\frac{n\\pi R}{180}, S = \\frac{n\\pi R^2}{360} = \\frac{1}{2} l R$；\n2. 阴影面积三大招法：‘整体减空白’、‘割补平移拼接’、‘容斥原理（重叠面积多退少补）’。",
    keyFormulas: [
      { name: "扇形弧长与面积公式", formula: "l = \\frac{n\\pi R}{180}, \\quad S = \\frac{1}{2} l R = \\frac{n\\pi R^2}{360}" },
      { name: "弓形面积公式", formula: "S_{\\text{弓}} = S_{\\text{扇}} \\pm S_{\\triangle}" }
    ],
    subsections: [
      {
        id: "1.1",
        number: "1.1",
        title: "阴影面积割补与等积代换",
        content: "将分散的不规则阴影图形通过对称、旋转或平移集中拼凑为规则扇形或三角形求解。",
        examples: [
          {
            id: "ex5_1_1",
            index: 1,
            title: "叶形阴影面积计算",
            stem: "在边长为 2 的正方形内部，分别以相邻两边为直径在正方形内作两个半圆。求两个半圆重叠部分（叶形阴影）的面积。",
            analysis: "设正方形四个顶点，两半圆面积和等于两半圆加上重叠部分减去外部空白，利用容斥原理！",
            solution: "半圆的半径为 $R = 2 / 2 = 1$。\n两个半圆的面积和为：\n$S_1 + S_2 = 2 \\times \\left( \\frac{1}{2} \\pi R^2 \\right) = \\pi \\times 1^2 = \\pi$。\n注意到正方形的对角线将正方形平分为两个等腰直角三角形，其面积为 $\\frac{1}{2} \\times 2 \\times 2 = 2$。\n两半圆所覆盖的区域恰好是一个等腰直角三角形加上重叠的叶形：\n$S_{\\text{重叠}} = S_1 + S_2 - S_{\\triangle} = \\pi - 2$。\n答：重叠部分叶形阴影的面积为 $\\pi - 2$。",
            notes: "容斥原理是解决重叠曲边图形面积的最高效利器。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch1_q1",
        index: 1,
        stem: "已知扇形的圆心角为 $120^\\circ$，弧长为 $2\\pi$，求该扇形的面积。",
        answer: "$3\\pi$",
        analysis: "由 $l = \\frac{120\\pi R}{180} = \\frac{2\\pi R}{3} = 2\\pi \\implies R = 3$。扇形面积 $S = \\frac{1}{2} l R = \\frac{1}{2} (2\\pi)(3) = 3\\pi$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "圆的对称性与垂径定理",
    subtitle: "轴对称、垂径定理与弦心距直角三角形",
    bookPageRange: "010-017",
    pdfPageRange: "P16-P23",
    companionImage: "/book_samples/v5/ch2_start.png",
    introduction: "圆是轴对称图形，任意一条经过圆心的直线都是它的对称轴；圆也是中心对称图形，对称中心就是圆心。著名的‘垂径定理’指出：垂直于弦的直径平分这条弦，并且平分弦所对的两条弧。在解题中，由圆心、弦中点、垂足构成的‘弦心距直角三角形’是连接半径、弦长与弦心距的万能桥梁。",
    teacherTips: "柯新立老师提点：\n1. 辅助线经典起手式：‘过圆心作弦的垂线段（弦心距）’，同时连结过弦端点的半径！这立即构造出包含 $r, d, a/2$ 的直角三角形，勾股定理 $r^2 = d^2 + (a/2)^2$ 解决 $90\\%$ 的弦长问题；\n2. 垂径定理逆定理：平分弦（不是直径）的直径垂直于弦。",
    keyFormulas: [
      { name: "垂径定理勾股核心等式", formula: "r^2 = d^2 + \\left(\\frac{a}{2}\\right)^2 \\quad (r:\\text{半径}, d:\\text{弦心距}, a:\\text{弦长})" }
    ],
    subsections: [
      {
        id: "2.1",
        number: "2.1",
        title: "弦心距直角三角形与双弦平行距离",
        content: "圆内两条平行弦，它们的弦心距可能在圆心同侧或异侧，必须分类讨论。",
        examples: [
          {
            id: "ex5_2_1",
            index: 1,
            title: "平行弦距离分类讨论",
            stem: "在半径为 5 的圆 $O$ 中，有两条平行弦 $AB = 6$，$CD = 8$。求平行弦 $AB$ 与 $CD$ 之间的距离。",
            analysis: "分别过圆心作两弦的垂线段。讨论两弦在圆心的同侧还是异侧！",
            solution: "过圆心 $O$ 作 $OE \\perp AB$ 于 $E$，$OF \\perp CD$ 于 $F$。\n由垂径定理：\n$AE = \\frac{1}{2} AB = 3, \\quad CF = \\frac{1}{2} CD = 4$。\n在 $\\text{Rt}\\triangle OAE$ 与 $\\text{Rt}\\triangle OCF$ 中，半径 $r = 5$：\n$OE = \\sqrt{5^2 - 3^2} = 4$；\n$OF = \\sqrt{5^2 - 4^2} = 3$。\n分类讨论两弦的相对位置：\n1. 当两弦在圆心同侧时：距离为 $OE - OF = 4 - 3 = 1$；\n2. 当两弦在圆心异侧时：距离为 $OE + OF = 4 + 3 = 7$。\n答：两平行弦之间的距离为 1 或 7。",
            notes: "位置不确定时务必全面分类讨论，避免漏解。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch2_q1",
        index: 1,
        stem: "圆 $O$ 的半径为 10，一条弦长为 16，求圆心到这条弦的距离（弦心距）。",
        answer: "$6$",
        analysis: "半弦长为 $16/2 = 8$。弦心距 $d = \\sqrt{10^2 - 8^2} = 6$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "与圆有关的角",
    subtitle: "圆心角、圆周角与弦切角定理",
    bookPageRange: "018-027",
    pdfPageRange: "P24-P33",
    companionImage: "/book_samples/v5/ch3_start.png",
    introduction: "与圆相关的角构成了一个严密的推导链条：圆心角的度数等于它所对的弧的度数；同弧所对的圆周角等于它所对的圆心角的一半；同弧或等弧所对的圆周角相等；半圆或直径所对的圆周角是直角（$90^\\circ$）；弦切角的度数等于它所夹的弧所对的圆周角。",
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
    id: "ch4",
    number: 4,
    title: "与圆相关的位置关系",
    subtitle: "点与圆、直线与圆、两圆相对位置判据",
    bookPageRange: "028-036",
    pdfPageRange: "P34-P42",
    companionImage: "/book_samples/v5/ch4_start.png",
    introduction: "点与圆（点在圆内、圆上、圆外）、直线与圆（相交、相切、相离）、两圆相对位置（外离、外切、相交、内切、内含）是初中几何研究相对运动的基础。利用圆心距 $d$ 与半径 $r_1, r_2$ 的数量关系，可以精确判别两圆交点个数与公切线公有情况。",
    teacherTips: "两圆相交公切线与连心线性质：\n1. 两圆相切（外切或内切），切点必然在连心线上！\n2. 两圆相交，连心线垂直平分公共弦！这是两圆相交题必画的黄金辅助线；\n3. 外公切线长公式：$l = \\sqrt{d^2 - (R - r)^2}$；内公切线长公式：$l = \\sqrt{d^2 - (R + r)^2}$。",
    keyFormulas: [
      { name: "两圆相切充要条件", formula: "\\text{外切} \\iff d = R + r; \\quad \\text{内切} \\iff d = |R - r|" },
      { name: "外公切线长公式", formula: "l_{\\text{外}} = \\sqrt{d^2 - (R - r)^2}" }
    ],
    subsections: [
      {
        id: "4.1",
        number: "4.1",
        title: "公切线长计算与连心线平分公共弦",
        content: "作平移辅助线将公切线与两半径转化为直角三角形是计算公切线长的通用模式。",
        examples: [
          {
            id: "ex5_4_1",
            index: 1,
            title: "外公切线长计算",
            stem: "两圆半径分别为 7 和 2，圆心距为 13。求这两圆的外公切线的长。",
            analysis: "平移较小圆的半径，构造直角三角形：直角边为外公切线，另一条直角边为两半径之差 $R - r$，斜边为圆心距 $d$！",
            solution: "设大圆半径 $R = 7$，小圆半径 $r = 2$，圆心距 $d = 13$。\n由外公切线长公式：\n$l = \\sqrt{d^2 - (R - r)^2}$。\n代入数值：\n$l = \\sqrt{13^2 - (7 - 2)^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$。\n答：外公切线的长为 12。",
            notes: "平移构造直角梯形化为直角三角形，是解析公切线的标准手法。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch4_q1",
        index: 1,
        stem: "两圆半径分别为 3 和 5，若两圆有 3 条公切线，求两圆的圆心距 $d$。",
        answer: "$d = 8$",
        analysis: "有且仅有 3 条公切线意味着两圆相外切！外切充要条件是 $d = R + r = 5 + 3 = 8$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "圆的切线与切线性质",
    subtitle: "切线判定定理、切线长定理与三角形内切圆",
    bookPageRange: "037-048",
    pdfPageRange: "P43-P54",
    companionImage: "/book_samples/v5/ch5_start.png",
    introduction: "直线和圆有唯一公共点时，称直线与圆相切。切线满足垂直于经过切点的半径；反之，经过半径外端并且垂直于这条半径的直线是圆的切线。从圆外一点引圆的两条切线，它们的切线长相等，圆心和这一点的连线平分两条切线的夹角（切线长定理）。",
    teacherTips: "证明切线的两大黄金套路：\n1. 有交点：连半径，证垂直（连结圆心与该点，证明半径垂直于已知直线）；\n2. 无交点：作垂直，证半径（过圆心作已知直线的垂线段，证明垂线段长度等于圆半径）。",
    keyFormulas: [
      { name: "切线长定理", formula: "PA = PB, \\quad \\angle APO = \\angle BPO \\quad (PA, PB \\text{ 为切线})" },
      { name: "直角三角形内切圆半径", formula: "r = \\frac{a + b - c}{2} = \\frac{ab}{a + b + c}" }
    ],
    subsections: [
      {
        id: "5.1",
        number: "5.1",
        title: "切线长定理与圆外切多边形周长",
        content: "圆外一点引出的切线长相等，结合线段代换可以迅速求出三角形和多边形的周长。",
        examples: [
          {
            id: "ex5_5_1",
            index: 1,
            title: "切线长定理与直角三角形内切圆半径",
            stem: "在直角三角形 $Rt\\triangle ABC$ 中，$\\angle C = 90^\\circ$，三边长为 $a, b, c$。求内切圆半径 $r$ 的表达式。",
            analysis: "利用切线长定理证明四边形 $IDCE$ 为正方形，得出切线分段长度关系。",
            solution: "设内切圆圆心为 $I$，切点分别为 $D, E, F$（在 $BC, CA, AB$ 上）。\n因为 $\\angle C = 90^\\circ$ 且 $ID \\perp BC, IE \\perp AC$，所以四边形 $IDCE$ 为正方形，边长为 $r$。\n故 $CD = CE = r$。由切线长定理：$AF = AE = b - r$，$BF = BD = a - r$。\n由于 $AB = AF + BF = c$，所以 $(b - r) + (a - r) = c \\implies a + b - 2r = c$。\n解得 $r = \\frac{a + b - c}{2}$。\n（亦可用等面积法证明：$S = \\frac{1}{2}(a+b+c)r = \\frac{1}{2}ab \\implies r = \\frac{ab}{a+b+c}$）。",
            notes: "直角三角形内切圆半径的两种公式是几何计算的核心母题。"
          },
          {
            id: "ex5_5_2",
            index: 2,
            title: "圆外一点引两切线的垂直平分性质",
            stem: "过 $\\odot O$ 外一点 $P$ 引切线 $PA, PB$，切点为 $A, B$。求证：$PO$ 垂直平分切点弦 $AB$。",
            analysis: "利用切线长定理 $PA = PB$ 以及半径 $OA = OB$，证明 $PO$ 为线段 $AB$ 的垂直平分线。",
            solution: "1. 由切线长定理，从圆外一点引圆的两条切线长相等，故 $PA = PB$；\n2. 点 $O$ 为圆心，半径 $OA = OB$；\n3. 所以点 $P$ 和点 $O$ 都在线段 $AB$ 的垂直平分线上；\n4. 两点确定一条直线，故直线 $PO$ 垂直平分切点弦 $AB$。\n设 $PO$ 与 $AB$ 交于点 $H$，则 $AH = BH$ 且 $PO \\perp AB$，且有射影定理 $OA^2 = OH \\cdot OP$。",
            notes: "圆幂与极点极线理论的萌芽定理。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch5_q1",
        index: 1,
        stem: "直角三角形两直角边长为 6 和 8，其内切圆半径为？",
        answer: "2",
        analysis: "斜边 $c = \\sqrt{6^2+8^2} = 10$。内切圆半径 $r = \\frac{a+b-c}{2} = \\frac{6+8-10}{2} = 2$。",
        difficulty: "基础",
        type: "几何证明"
      },
      {
        id: "v5_ch5_q2",
        index: 2,
        stem: "已知 $\\triangle ABC$ 的内切圆与 $BC, CA, AB$ 分别切于点 $D, E, F$。若 $AB = 7, BC = 8, CA = 9$，求切线长 $AF, BD, CE$ 的值。",
        answer: "$AF = 4, BD = 3, CE = 5$",
        analysis: "设半周长 $s = \\frac{a+b+c}{2} = \\frac{8+9+7}{2} = 12$。\n由切线长定理，顶点到内切圆切点长等于半周长减对边：\n$AF = s - a = 12 - 8 = 4$；\n$BD = s - b = 12 - 9 = 3$；\n$CE = s - c = 12 - 7 = 5$。\n验算 $AF + BD = 4 + 3 = 7 = AB$，完全吻合！",
        difficulty: "提高",
        type: "几何证明"
      },
      {
        id: "v5_ch5_q3",
        index: 3,
        stem: "圆外切四边形 $ABCD$ 中，$AB = 5, BC = 7, CD = 8$。求第四条边 $DA$ 的长。",
        answer: "6",
        analysis: "由切线长定理，圆外切四边形的两组对边之和相等：\n$AB + CD = BC + DA$。\n代入已知：$5 + 8 = 7 + DA \\implies 13 = 7 + DA \\implies DA = 6$。",
        difficulty: "基础",
        type: "几何证明"
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
    companionImage: "/book_samples/v5/ch6_start.png",
    introduction: "四点共圆是全国初中数学联赛和高中竞赛中出现率最高、威力最强的几何工具。若凸四边形对角互补，或者同底边的两个同侧三角形顶角相等，则四顶点共圆。一旦证明了四点共圆，圆的所有角度相等性质、圆幂定理立刻全部激活，题目瞬间瓦解！",
    teacherTips: "四点共圆三大判定准则：\n1. 对角互补：$\\angle B + \\angle D = 180^\\circ$；\n2. 同侧张角相等：$\\angle BAC = \\angle BDC$（两点位于线段 $BC$ 同侧，张角相等）；\n3. 相交线段乘积相等：$PA \\cdot PB = PC \\cdot PD$（圆幂定理的逆定理）。\n口诀：‘找直角、找补角、找等角，一旦共圆，所向披靡！’",
    keyFormulas: [
      { name: "四点共圆同侧角判定", formula: "\\angle BAC = \\angle BDC \\iff A, B, C, D \\text{ 四点共圆}" },
      { name: "四点共圆对角互补判定", formula: "\\angle B + \\angle D = 180^\\circ \\iff A, B, C, D \\text{ 四点共圆}" }
    ],
    subsections: [
      {
        id: "6.1",
        number: "6.1",
        title: "两直角共斜边与四点共圆",
        content: "若两个直角三角形具有公共斜边，则它们的四个顶点必然共圆，且公共斜边即为该外接圆的直径。",
        examples: [
          {
            id: "ex5_6_1",
            index: 1,
            title: "双高四点共圆角转移",
            stem: "在锐角 $\\triangle ABC$ 中，$BD, CE$ 分别是边 $AC, AB$ 上的高。求证：$\\angle ADE = \\angle ABC$。",
            analysis: "$\\angle BDC = \\angle BEC = 90^\\circ$，共斜边 $BC$，故 $B, C, D, E$ 四点共圆！",
            solution: "因为 $BD \\perp AC, CE \\perp AB$，所以 $\\angle BDC = \\angle BEC = 90^\\circ$。\n点 $D, E$ 在以 $BC$ 为直径的圆上，即 $B, C, D, E$ 四点共圆。\n由圆内接四边形性质：外角等于内对角，\n四边形 $BCDE$ 中，$\\angle ADE$ 是外角，对角是 $\\angle ABC$。\n因此 $\\angle ADE = \\angle ABC$。\n证毕。",
            notes: "双高产生四点共圆，进而导致截出的三角形与原三角形反向相似（$\\triangle ADE \\sim \\triangle ABC$）。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch6_q1",
        index: 1,
        stem: "四边形 $ABCD$ 中，$\\angle A = 80^\\circ, \\angle B = 70^\\circ, \\angle C = 100^\\circ$，问 $A, B, C, D$ 四点是否共圆？",
        answer: "是",
        analysis: "对角 $\\angle A + \\angle C = 80^\\circ + 100^\\circ = 180^\\circ$ 互补，故四顶点必然共圆。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "圆幂定理",
    subtitle: "相交弦定理、切割线定理与割线定理三合一",
    bookPageRange: "059-066",
    pdfPageRange: "P65-P72",
    companionImage: "/book_samples/v5/ch7_start.png",
    introduction: "相交弦定理（圆内两弦交点分成的两线段乘积相等）、切割线定理（切线长平方等于割线及其外分线段乘积）、割线定理（割线全长与外分线段乘积相等）统称为‘圆幂定理’。它们在本质上是同一个代数几何量——平面上一点 $P$ 对圆 $O$ 的幂：$\\mathcal{P}(P) = |PO^2 - R^2|$。",
    teacherTips: "统一视角看圆幂：\n设点 $P$ 到圆心距离为 $d$，圆半径为 $R$：\n过 $P$ 引任意与圆相交于 $A, B$ 的直线，乘积 $PA \\cdot PB$ 永远等于定值 $|d^2 - R^2|$！\n- 当 $P$ 在圆内时：$PA \\cdot PB = R^2 - d^2$（相交弦定理）；\n- 当 $P$ 在圆外时：$PA \\cdot PB = PT^2 = d^2 - R^2$（割线定理与切割线定理）！",
    keyFormulas: [
      { name: "圆幂统一定义", formula: "\\text{Power}(P) = PA \\cdot PB = |d^2 - R^2|" },
      { name: "相交弦定理", formula: "PA \\cdot PB = PC \\cdot PD \\quad (P \\text{ 在圆内})" },
      { name: "切割线定理", formula: "PT^2 = PA \\cdot PB \\quad (PT \\text{ 为切线})" }
    ],
    subsections: [
      {
        id: "7.1",
        number: "7.1",
        title: "圆幂定理在比例线段中的应用",
        content: "当图形中含有切线与交线时，利用圆幂定理可以将未知线段长转化为方程求解。",
        examples: [
          {
            id: "ex5_7_1",
            index: 1,
            title: "切割线定理与代数线段比计算",
            stem: "过圆外一点 $P$ 引切线 $PT$（切点为 $T$）和割线 $PAB$（交圆于 $A, B$）。若 $PT = 4, PA = 2$，求弦 $AB$ 的长。",
            analysis: "切割线定理：$PT^2 = PA \\cdot PB$。求出割线整段长 $PB$，进而求出弦长 $AB = PB - PA$。",
            solution: "由切割线定理知：$PT^2 = PA \\cdot PB$。\n代入数据：$4^2 = 2 \\times PB \\implies 16 = 2 \\cdot PB \\implies PB = 8$。\n因为 $A$ 在割线段 $PB$ 上，所以 $AB = PB - PA = 8 - 2 = 6$。",
            notes: "圆幂定理将圆的几何性质转化为严密的等积式计算。"
          },
          {
            id: "ex5_7_2",
            index: 2,
            title: "相交弦定理与双圆公共弦共轴",
            stem: "圆内两弦 $AB, CD$ 相交于点 $P$。若 $AP = 3, PB = 8$，且 $CP:PD = 2:3$。求线段 $CD$ 的长。",
            analysis: "相交弦定理：$AP \\cdot PB = CP \\cdot PD$。设参数比例求解。",
            solution: "设 $CP = 2k, PD = 3k (k > 0)$。\n由相交弦定理：$AP \\cdot PB = CP \\cdot PD$。\n代入已知数据：$3 \\times 8 = 2k \\times 3k \\implies 24 = 6k^2 \\implies k^2 = 4 \\implies k = 2$。\n故 $CP = 4, PD = 6$。\n线段总长 $CD = CP + PD = 4 + 6 = 10$。",
            notes: "相交弦定理是初中圆几何中出镜率最高的母定理之一。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch7_q1",
        index: 1,
        stem: "圆内两弦相交，一弦被分为 2 和 6，另一弦被分为 $x$ 和 3，求 $x$ 的值。",
        answer: "4",
        analysis: "由相交弦定理：$2 \\times 6 = 3x \\implies 12 = 3x \\implies x = 4$。",
        difficulty: "基础",
        type: "几何证明"
      },
      {
        id: "v5_ch7_q2",
        index: 2,
        stem: "从圆外一点 $P$ 作割线 $PAB$ 和 $PCD$。已知 $PA = 3, AB = 5, PC = 4$。求 $CD$ 的长。",
        answer: "2",
        analysis: "由割线定理：$PA \\cdot PB = PC \\cdot PD$。\n整段 $PB = PA + AB = 3 + 5 = 8$。\n故 $3 \\times 8 = 4 \\cdot PD \\implies 24 = 4 \\cdot PD \\implies PD = 6$。\n因此弦长 $CD = PD - PC = 6 - 4 = 2$。",
        difficulty: "提高",
        type: "几何证明"
      },
      {
        id: "v5_ch7_q3",
        index: 3,
        stem: "从直径为 10 的圆外一点 $P$ 作一条切线长为 12，求点 $P$ 到圆心的距离以及点 $P$ 到圆的最短距离。",
        answer: "到圆心距离 13，到圆最短距离 8",
        analysis: "圆半径 $r = 5$。设切点为 $T$，则 $\\angle PTO = 90^\\circ$。\n由勾股定理：$PO = \\sqrt{PT^2 + r^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = 13$。\n点 $P$ 到圆周的最短距离为 $PO - r = 13 - 5 = 8$。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch8",
    number: 8,
    title: "圆的幂及根轴应用",
    subtitle: "根轴方程、两圆等幂线与根心三线共点",
    bookPageRange: "067-076",
    pdfPageRange: "P73-P82",
    companionImage: "/book_samples/v5/ch8_start.png",
    introduction: "对于两个不相等的圆，到这两个圆的幂相等的点的轨迹是一条垂直于两圆连心线的直线，称为两圆的‘根轴’（等幂线）。如果两圆相交，它们的根轴就是公共弦所在的直线！对于三个两两相交的圆，它们的三条根轴若不平行，则必相交于一点，称为‘根心’。这为证明复杂三线共点或四点共圆提供了降维打击的极强武器。",
    teacherTips: "柯新立老师提点：\n1. 根轴性质：两圆相交时，公共弦所在直线即为根轴；两圆相切时，内公切线即为根轴；\n2. 根心定理（Radical Center）：三圆两两根轴必相交于同一点或两两平行。用根心可以一招秒杀联赛二试中的三公共弦共点题！",
    keyFormulas: [
      { name: "两圆根轴方程", formula: "d_1^2 - R_1^2 = d_2^2 - R_2^2 \\implies \\text{直线 } l \\perp O_1 O_2" },
      { name: "根心定理（三圆等幂中心）", formula: "\\text{Power}(K, \\odot_1) = \\text{Power}(K, \\odot_2) = \\text{Power}(K, \\odot_3)" }
    ],
    subsections: [
      {
        id: "8.1",
        number: "8.1",
        title: "公共弦相交与根心性质",
        content: "利用三圆根心证明三条公共弦共点，是高阶竞赛几何的标准示范。",
        examples: [
          {
            id: "ex5_8_1",
            index: 1,
            title: "三圆两两相交公共弦共点证明",
            stem: "已知三个圆 $\\odot O_1, \\odot O_2, \\odot O_3$ 两两相交，它们的公共弦所在直线分别为 $l_{12}, l_{23}, l_{31}$。求证：若这三条直线不平行，则它们必交于同一点。",
            analysis: "公共弦所在直线正是两圆的根轴！设其中两条直线的交点为 $P$，利用点对圆的幂相等性！",
            solution: "证明：\n设直线 $l_{12}$ 与 $l_{23}$ 相交于点 $K$。\n因为 $K$ 在 $\\odot O_1$ 与 $\\odot O_2$ 的公共弦 $l_{12}$ 上，由圆幂定理，点 $K$ 对这两圆的幂相等：\n$\\text{Power}(K, \\odot O_1) = \\text{Power}(K, \\odot O_2)$ (1)。\n同理，因为 $K$ 在 $\\odot O_2$ 与 $\\odot O_3$ 的公共弦 $l_{23}$ 上：\n$\\text{Power}(K, \\odot O_2) = \\text{Power}(K, \\odot O_3)$ (2)。\n比较 (1) 和 (2) 式，可得：\n$\\text{Power}(K, \\odot O_1) = \\text{Power}(K, \\odot O_3)$。\n这意味着点 $K$ 对 $\\odot O_1$ 和 $\\odot O_3$ 的幂也相等！\n而到 $\\odot O_1$ 与 $\\odot O_3$ 的幂相等的点的轨迹正是它们的根轴 $l_{31}$。\n因此点 $K$ 也必然在直线 $l_{31}$ 上。\n故三条公共弦所在直线必相交于同一点 $K$（此点即为三圆的根心）。\n证毕。",
            notes: "圆幂与根轴思想将复杂的共点证明转化为等式的传递性，极为优雅。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch8_q1",
        index: 1,
        stem: "若点 $P$ 到半径为 3 的圆 $O_1$ 的切线长为 4，且 $P$ 位于两圆的根轴上，求 $P$ 到半径为 5 的同心圆或相切圆的切线长。",
        answer: "$4$",
        analysis: "在根轴上的点到两圆的圆幂相等。切线长的平方等于圆幂，故切线长必须相等，亦为 4。",
        difficulty: "提高",
        type: "几何证明"
      }
    ]
  },
  {
    id: "ch9",
    number: 9,
    title: "托勒密定理及其应用",
    subtitle: "四边形对角线乘积和与托勒密不等式",
    bookPageRange: "077-086",
    pdfPageRange: "P83-P92",
    companionImage: "/book_samples/v5/ch9_start.png",
    introduction: "托勒密定理是圆几何学中最辉煌的明珠：任意圆内接四边形中，两对角线的乘积等于两组对边乘积之和（$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$）。对于非共圆的任意凸四边形，则有托勒密不等式：$AC \\cdot BD \\le AB \\cdot CD + AD \\cdot BC$，当且仅当四点共圆且 $A, B, C, D$ 顺次排列时取等号。",
    teacherTips: "托勒密定理两大应用流派：\n1. 求线段长与最值：遇到等边三角形或正方形外接圆上的动点，托勒密定理能瞬间将弦长转化为线段线性组合；\n2. 三角恒等式几何证明：利用圆内接四边形托勒密定理，可以纯几何推导正弦和角公式 $\\sin(\\alpha+\\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$！",
    keyFormulas: [
      { name: "托勒密定理等式", formula: "AC \\cdot BD = AB \\cdot CD + AD \\cdot BC \\quad (\\text{内接于圆})" },
      { name: "托勒密不等式", formula: "AC \\cdot BD \\leq AB \\cdot CD + AD \\cdot BC \\quad (\\forall \\text{凸四边形})" }
    ],
    subsections: [
      {
        id: "9.1",
        number: "9.1",
        title: "构造相似三角形证明托勒密定理",
        content: "在较长对角线上取一点构造一对相似三角形是证明托勒密定理的标准手法。",
        examples: [
          {
            id: "ex5_9_1",
            index: 1,
            title: "托勒密定理求圆内接四边形对角线",
            stem: "圆内接四边形 $ABCD$ 中，$AB = 2, BC = 3, CD = 4, DA = 5$。若已知对角线 $BD = 6$，求对角线 $AC$ 的长。",
            analysis: "直接运用托勒密定理：$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$！",
            solution: "因为四边形 $ABCD$ 内接于圆，由托勒密定理：\n$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$。\n代入已知边长数据：\n$AC \\times 6 = 2 \\times 4 + 5 \\times 3$。\n$6 AC = 8 + 15 = 23$。\n解得：\n$AC = \\frac{23}{6}$。\n答：对角线 $AC$ 的长为 $\\frac{23}{6}$。",
            notes: "公式直接将代数计算与圆几何紧密锚定。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch9_q1",
        index: 1,
        stem: "圆内接四边形 $ABCD$ 的四边长均为 1，且对角线互相垂直。求对角线的乘积 $AC \\cdot BD$。",
        answer: "$2$",
        analysis: "由托勒密定理：$AC \\cdot BD = AB \\cdot CD + AD \\cdot BC = 1 \\times 1 + 1 \\times 1 = 2$。",
        difficulty: "基础",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch10",
    number: 10,
    title: "三角形的外心与内心高级性质",
    subtitle: "鸡爪定理、曼海姆定理与欧拉外心内心距离公式",
    bookPageRange: "087-096",
    pdfPageRange: "P93-P102",
    companionImage: "/book_samples/v5/ch10_start.png",
    introduction: "外接圆（外心 $O$）与内切圆（内心 $I$）是三角形最重要的两个相伴圆。著名的‘鸡爪定理’（特里波特定理）指出：角平分线与外接圆的交点 $M$，到内心 $I$ 和两底角顶点 $B, C$ 的距离相等（$MB = MC = MI$）！这一结构犹如鸡爪的三趾，是初中联赛二试几何大题中最具标志性的明星考点。",
    teacherTips: "柯新立老师点拨：\n1. 鸡爪定理神勇无比：$AI$ 的延长线交外接圆于 $M$，则 $M$ 是以 $M$ 为圆心经过 $B, I, C$ 的圆的圆心（$MB = MI = MC = MI_a$）；\n2. 欧拉距离公式：外心 $O$ 与内心 $I$ 的距离满足 $OI^2 = R(R - 2r)$，从而立即导出欧拉不等式 $R \\ge 2r$！",
    keyFormulas: [
      { name: "鸡爪定理（特里波特定理）", formula: "MB = MI = MC = MI_a \\quad (M \\text{ 为劣弧 } BC \\text{ 中点})" },
      { name: "欧拉外心内心距离公式", formula: "d^2 = OI^2 = R(R - 2r) \\implies R \\geq 2r" }
    ],
    subsections: [
      {
        id: "10.1",
        number: "10.1",
        title: "鸡爪定理证明与共圆转移",
        content: "利用圆周角定理与三角形外角定理，计算 $\\angle MBI = \\angle MIB$ 即可证明等腰三角形 $MB = MI$。",
        examples: [
          {
            id: "ex5_10_1",
            index: 1,
            title: "鸡爪定理经典证明",
            stem: "在 $\\triangle ABC$ 中，$I$ 是内心，$AI$ 的延长线交 $\\triangle ABC$ 的外接圆于点 $M$。求证：$MB = MI$。",
            analysis: "证明 $\\angle MBI = \\angle MIB$！通过导角计算两角度数。",
            solution: "证明：\n因为 $I$ 是内心，所以 $AI, BI$ 分别平分 $\\angle BAC, \\angle ABC$。\n设 $\\angle BAC = 2\\alpha, \\angle ABC = 2\\beta$。\n则 $\\angle IAC = \\alpha, \\angle IBA = \\beta$。\n因为 $M$ 在外接圆上，同弧 $MC$ 所对圆周角相等：\n$\\angle MBC = \\angle MAC = \\angle IAC = \\alpha$。\n所以 $\\angle MBI = \\angle MBC + \\angle CBI = \\alpha + \\beta$。\n另一方面，在 $\\triangle ABI$ 中，$\\angle MIB$ 是外角：\n$\\angle MIB = \\angle IAB + \\angle IBA = \\alpha + \\beta$。\n因此 $\\angle MBI = \\angle MIB$。\n在 $\\triangle MBI$ 中，两底角相等，所以 $MB = MI$。\n同理可证 $MC = MI$。\n所以 $MB = MI = MC$。\n证毕。",
            notes: "鸡爪定理是连通外接圆与内切圆最坚固的桥梁。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch10_q1",
        index: 1,
        stem: "已知三角形的外接圆半径 $R = 5$，内切圆半径 $r = 2$。求外心 $O$ 与内心 $I$ 的距离 $OI$。",
        answer: "$\\sqrt{5}$",
        analysis: "由欧拉距离公式：$OI^2 = R(R - 2r) = 5(5 - 2 \\times 2) = 5(1) = 5 \\implies OI = \\sqrt{5}$。",
        difficulty: "提高",
        type: "代数求值"
      }
    ]
  },
  {
    id: "ch11",
    number: 11,
    title: "与圆有关的综合杂题",
    subtitle: "反演变换初阶、共轴圆族与联赛二试压轴大题",
    bookPageRange: "097-102",
    pdfPageRange: "P103-P108",
    companionImage: "/book_samples/v5/ans_start.png",
    introduction: "圆是初中竞赛几何的集大成者。当相交圆、切线、高线、调和点列以及动点轨迹交织在一起时，往往呈现极高的综合性与技巧性。掌握反演变换初步直觉（将圆变为直线，将切线保持为相切）、辅助圆构造与极点极线思维，能够让复杂纠缠的几何线条豁然开朗。",
    teacherTips: "柯新立老师全书结语：\n攻克圆的综合杂题有四大法宝：\n1. 构造辅助圆（见直角想直径圆，见等角想共圆）；\n2. 导角链条（弦切角 $\\to$ 圆周角 $\\to$ 四点共圆对角）；\n3. 线段链条（圆幂定理 $\\to$ 相似三角形 $\\to$ 射影定理）；\n4. 动静结合（先抓不变的圆心、半径与定角，再看动点的轨迹）。",
    keyFormulas: [
      { name: "圆几何综合四大定理", formula: "\\text{垂径定理} + \\text{弦切角定理} + \\text{圆幂定理} + \\text{托勒密定理}" }
    ],
    subsections: [
      {
        id: "11.1",
        number: "11.1",
        title: "辅助圆构造突破几何难关",
        content: "当图形中原本没有圆，但存在定角对定线段或定点等距时，主动添加辅助圆能将直线几何转化为圆周性质。",
        examples: [
          {
            id: "ex5_11_1",
            index: 1,
            title: "构造辅助圆求线段最值",
            stem: "线段 $AB = 6$，点 $P$ 在直线 $AB$ 上方运动，且始终保持 $\\angle APB = 90^\\circ$。若点 $C$ 是平面内一定点且到 $AB$ 中点 $O$ 的距离为 5，求线段 $PC$ 的最大值。",
            analysis: "$\\angle APB = 90^\\circ$，根据直径所对圆周角为直角，点 $P$ 的轨迹是以 $AB$ 中点 $O$ 为圆心、半径 $R = 3$ 的半圆！",
            solution: "因为 $\\angle APB = 90^\\circ$，且 $AB = 6$，\n根据直角三角形斜边中线定理，连结 $AB$ 中点 $O$：\n$OP = \\frac{1}{2} AB = 3$。\n因此点 $P$ 的运动轨迹是以 $O$ 为圆心、半径为 $R = 3$ 的圆（位于 $AB$ 上方）。\n点 $C$ 是定点，且 $OC = 5$。\n根据圆的几何性质，圆外一点到圆上各点的距离中：\n最大距离为 $PC_{\\max} = OC + R$。\n代入数值：\n$PC_{\\max} = 5 + 3 = 8$。\n答：线段 $PC$ 的最大值为 8。",
            notes: "定角 $90^\\circ$ 联想辅助圆，将动点问题转化为圆外定点到圆上点距离的最值。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v5_ch11_q1",
        index: 1,
        stem: "平面上两定点 $A, B$ 距离为 4。动点 $P$ 满足 $PA^2 + PB^2 = 20$，求点 $P$ 到线段 $AB$ 中点的距离。",
        answer: "$\\sqrt{6}$",
        analysis: "由中线定理（或极化恒等式）：$PA^2 + PB^2 = 2PO^2 + \\frac{1}{2} AB^2$。代入 $20 = 2PO^2 + \\frac{1}{2}(16) = 2PO^2 + 8 \\implies 2PO^2 = 12 \\implies PO = \\sqrt{6}$。轨迹为圆。",
        difficulty: "提高",
        type: "代数求值"
      }
    ]
  }
];
