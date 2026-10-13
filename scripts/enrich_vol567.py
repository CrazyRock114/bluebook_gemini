# -*- coding: utf-8 -*-
"""Enrich Volumes 5, 6, 7 with authentic Olympiad problems."""

import re

def enrich_vol5():
    path = "src/data/volumes/vol5.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # ch5: 圆的切线与切线性质
    p_ch5 = r'(id:\s*[\'\"]ch5[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch6[\'\"])'
    new_ch5 = """
          {
            id: "ex5_5_1",
            index: 1,
            title: "切线长定理与直角三角形内切圆半径",
            stem: "在直角三角形 $Rt\\\\triangle ABC$ 中，$\\\\angle C = 90^\\\\circ$，三边长为 $a, b, c$。求内切圆半径 $r$ 的表达式。",
            analysis: "利用切线长定理证明四边形 $IDCE$ 为正方形，得出切线分段长度关系。",
            solution: "设内切圆圆心为 $I$，切点分别为 $D, E, F$（在 $BC, CA, AB$ 上）。\\\\n因为 $\\\\angle C = 90^\\\\circ$ 且 $ID \\\\perp BC, IE \\\\perp AC$，所以四边形 $IDCE$ 为正方形，边长为 $r$。\\\\n故 $CD = CE = r$。由切线长定理：$AF = AE = b - r$，$BF = BD = a - r$。\\\\n由于 $AB = AF + BF = c$，所以 $(b - r) + (a - r) = c \\\\implies a + b - 2r = c$。\\\\n解得 $r = \\\\frac{a + b - c}{2}$。\\\\n（亦可用等面积法证明：$S = \\\\frac{1}{2}(a+b+c)r = \\\\frac{1}{2}ab \\\\implies r = \\\\frac{ab}{a+b+c}$）。",
            notes: "直角三角形内切圆半径的两种公式是几何计算的核心母题。"
          },
          {
            id: "ex5_5_2",
            index: 2,
            title: "圆外一点引两切线的垂直平分性质",
            stem: "过 $\\\\odot O$ 外一点 $P$ 引切线 $PA, PB$，切点为 $A, B$。求证：$PO$ 垂直平分切点弦 $AB$。",
            analysis: "利用切线长定理 $PA = PB$ 以及半径 $OA = OB$，证明 $PO$ 为线段 $AB$ 的垂直平分线。",
            solution: "1. 由切线长定理，从圆外一点引圆的两条切线长相等，故 $PA = PB$；\\\\n2. 点 $O$ 为圆心，半径 $OA = OB$；\\\\n3. 所以点 $P$ 和点 $O$ 都在线段 $AB$ 的垂直平分线上；\\\\n4. 两点确定一条直线，故直线 $PO$ 垂直平分切点弦 $AB$。\\\\n设 $PO$ 与 $AB$ 交于点 $H$，则 $AH = BH$ 且 $PO \\\\perp AB$，且有射影定理 $OA^2 = OH \\\\cdot OP$。",
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
        analysis: "斜边 $c = \\\\sqrt{6^2+8^2} = 10$。内切圆半径 $r = \\\\frac{a+b-c}{2} = \\\\frac{6+8-10}{2} = 2$。",
        difficulty: "基础",
        type: "几何证明"
      },
      {
        id: "v5_ch5_q2",
        index: 2,
        stem: "已知 $\\\\triangle ABC$ 的内切圆与 $BC, CA, AB$ 分别切于点 $D, E, F$。若 $AB = 7, BC = 8, CA = 9$，求切线长 $AF, BD, CE$ 的值。",
        answer: "$AF = 4, BD = 3, CE = 5$",
        analysis: "设半周长 $s = \\\\frac{a+b+c}{2} = \\\\frac{8+9+7}{2} = 12$。\\\\n由切线长定理，顶点到内切圆切点长等于半周长减对边：\\\\n$AF = s - a = 12 - 8 = 4$；\\\\n$BD = s - b = 12 - 9 = 3$；\\\\n$CE = s - c = 12 - 7 = 5$。\\\\n验算 $AF + BD = 4 + 3 = 7 = AB$，完全吻合！",
        difficulty: "提高",
        type: "几何证明"
      },
      {
        id: "v5_ch5_q3",
        index: 3,
        stem: "圆外切四边形 $ABCD$ 中，$AB = 5, BC = 7, CD = 8$。求第四条边 $DA$ 的长。",
        answer: "6",
        analysis: "由切线长定理，圆外切四边形的两组对边之和相等：\\\\n$AB + CD = BC + DA$。\\\\n代入已知：$5 + 8 = 7 + DA \\\\implies 13 = 7 + DA \\\\implies DA = 6$。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
    """
    text = re.sub(p_ch5, r'\g<1>' + new_ch5 + r'\g<3>', text)

    # ch7: 圆幂定理
    p_ch7 = r'(id:\s*[\'\"]ch7[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch8[\'\"])'
    new_ch7 = """
          {
            id: "ex5_7_1",
            index: 1,
            title: "切割线定理与代数线段比计算",
            stem: "过圆外一点 $P$ 引切线 $PT$（切点为 $T$）和割线 $PAB$（交圆于 $A, B$）。若 $PT = 4, PA = 2$，求弦 $AB$ 的长。",
            analysis: "切割线定理：$PT^2 = PA \\\\cdot PB$。求出割线整段长 $PB$，进而求出弦长 $AB = PB - PA$。",
            solution: "由切割线定理知：$PT^2 = PA \\\\cdot PB$。\\\\n代入数据：$4^2 = 2 \\\\times PB \\\\implies 16 = 2 \\\\cdot PB \\\\implies PB = 8$。\\\\n因为 $A$ 在割线段 $PB$ 上，所以 $AB = PB - PA = 8 - 2 = 6$。",
            notes: "圆幂定理将圆的几何性质转化为严密的等积式计算。"
          },
          {
            id: "ex5_7_2",
            index: 2,
            title: "相交弦定理与双圆公共弦共轴",
            stem: "圆内两弦 $AB, CD$ 相交于点 $P$。若 $AP = 3, PB = 8$，且 $CP:PD = 2:3$。求线段 $CD$ 的长。",
            analysis: "相交弦定理：$AP \\\\cdot PB = CP \\\\cdot PD$。设参数比例求解。",
            solution: "设 $CP = 2k, PD = 3k (k > 0)$。\\\\n由相交弦定理：$AP \\\\cdot PB = CP \\\\cdot PD$。\\\\n代入已知数据：$3 \\\\times 8 = 2k \\\\times 3k \\\\implies 24 = 6k^2 \\\\implies k^2 = 4 \\\\implies k = 2$。\\\\n故 $CP = 4, PD = 6$。\\\\n线段总长 $CD = CP + PD = 4 + 6 = 10$。",
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
        analysis: "由相交弦定理：$2 \\\\times 6 = 3x \\\\implies 12 = 3x \\\\implies x = 4$。",
        difficulty: "基础",
        type: "几何证明"
      },
      {
        id: "v5_ch7_q2",
        index: 2,
        stem: "从圆外一点 $P$ 作割线 $PAB$ 和 $PCD$。已知 $PA = 3, AB = 5, PC = 4$。求 $CD$ 的长。",
        answer: "2",
        analysis: "由割线定理：$PA \\\\cdot PB = PC \\\\cdot PD$。\\\\n整段 $PB = PA + AB = 3 + 5 = 8$。\\\\n故 $3 \\\\times 8 = 4 \\\\cdot PD \\\\implies 24 = 4 \\\\cdot PD \\\\implies PD = 6$。\\\\n因此弦长 $CD = PD - PC = 6 - 4 = 2$。",
        difficulty: "提高",
        type: "几何证明"
      },
      {
        id: "v5_ch7_q3",
        index: 3,
        stem: "从直径为 10 的圆外一点 $P$ 作一条切线长为 12，求点 $P$ 到圆心的距离以及点 $P$ 到圆的最短距离。",
        answer: "到圆心距离 13，到圆最短距离 8",
        analysis: "圆半径 $r = 5$。设切点为 $T$，则 $\\\\angle PTO = 90^\\\\circ$。\\\\n由勾股定理：$PO = \\\\sqrt{PT^2 + r^2} = \\\\sqrt{12^2 + 5^2} = \\\\sqrt{144 + 25} = 13$。\\\\n点 $P$ 到圆周的最短距离为 $PO - r = 13 - 5 = 8$。",
        difficulty: "基础",
        type: "几何证明"
      }
    ]
    """
    text = re.sub(p_ch7, r'\g<1>' + new_ch7 + r'\g<3>', text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol5 fully enriched.")

def enrich_vol6():
    path = "src/data/volumes/vol6.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # ch5: 同余的概念与性质
    p_ch5 = r'(id:\s*[\'\"]ch5[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch6[\'\"])'
    new_ch5 = """
          {
            id: "ex6_5_1",
            index: 1,
            title: "同余的可乘幂性计算大数末位",
            stem: "求 $7^{2024}$ 的末两位数字。",
            analysis: "求末两位数字即计算模 100 的同余类。寻找模 100 的周期：$7^4 = 2401 \\\\equiv 1 \\\\pmod{100}$！",
            solution: "计算 7 的较小乘方模 100：\\\\n$7^1 = 7 \\\\equiv 7 \\\\pmod{100}$；\\\\n$7^2 = 49 \\\\equiv 49 \\\\pmod{100}$；\\\\n$7^4 = (7^2)^2 = 49^2 = 2401 \\\\equiv 1 \\\\pmod{100}$！\\\\n由于 $2024 = 4 \\\\times 506$，所以：\\\\n$7^{2024} = (7^4)^{506} \\\\equiv 1^{506} \\\\equiv 1 \\\\pmod{100}$。\\\\n故 $7^{2024}$ 的末两位数字是 01。",
            notes: "同余将庞大的指数转化为模数下的周期规律。"
          },
          {
            id: "ex6_5_2",
            index: 2,
            title: "同余加减性质与弃九法证明整除",
            stem: "求证：若一个自然数的各位数字之和能被 9 整除，则该数本身必能被 9 整除。",
            analysis: "利用十进制展开式与同余 $10 \\\\equiv 1 \\\\pmod{9}$ 的基本乘幂性质。",
            solution: "设该正整数为 $N = \\\\overline{a_n a_{n-1} \\\\dots a_1 a_0} = a_n 10^n + a_{n-1} 10^{n-1} + \\\\dots + a_1 10 + a_0$。\\\\n因为 $10 \\\\equiv 1 \\\\pmod{9}$，根据同余的乘幂性质，对任意正整数 $k$，都有：\\\\n$10^k \\\\equiv 1^k \\\\equiv 1 \\\\pmod{9}$。\\\\n两边乘以系数 $a_k$ 并求和：\\\\n$N = \\\\sum_{k=0}^n a_k 10^k \\\\equiv \\\\sum_{k=0}^n a_k (1) = a_n + a_{n-1} + \\\\dots + a_0 \\\\pmod{9}$。\\\\n因此 $N \\\\equiv (\\\\text{数字之和}) \\\\pmod{9}$。\\\\n当且仅当各位数字之和为 9 的倍数时，$N$ 能被 9 整除！",
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
        analysis: "因为 $3^3 = 27 \\\\equiv 1 \\\\pmod{13}$！\\\\n指数 $2024 = 3 \\\\times 674 + 2$。\\\\n所以 $3^{2024} = (3^3)^{674} \\\\times 3^2 \\\\equiv 1^{674} \\\\times 9 = 9 \\\\pmod{13}$。故余数为 9。",
        difficulty: "基础",
        type: "数论证明"
      },
      {
        id: "v6_ch5_q2",
        index: 2,
        stem: "求证：对任意自然数 $n$，$n^3 + 2n$ 必能被 3 整除。",
        answer: "分类讨论模 3 或因式分解得证",
        analysis: "方法一：因式分解 $n^3 + 2n = n(n^2 + 2) = n(n^2 - 1 + 3) = (n-1)n(n+1) + 3n$。连续三整数之积必为 3 的倍数，加上 $3n$，故整体必被 3 整除。\\\\n方法二：模 3 剩余系：若 $n \\\\equiv 0$，则 $0$；若 $n \\\\equiv 1$，则 $1 + 2 = 3 \\\\equiv 0$；若 $n \\\\equiv 2$，则 $8 + 4 = 12 \\\\equiv 0$。恒成立。",
        difficulty: "基础",
        type: "数论证明"
      },
      {
        id: "v6_ch5_q3",
        index: 3,
        stem: "求 $2^{70} + 3^{70}$ 除以 13 的余数。",
        answer: "0",
        analysis: "模 13 计算：\\\\n$2^6 = 64 \\\\equiv -1 \\\\pmod{13} \\\\implies 2^{12} \\\\equiv 1 \\\\pmod{13}$；$70 = 12 \\\\times 5 + 10$。$2^{10} = 1024 = 78 \\\\times 13 + 10 \\\\equiv -3 \\\\pmod{13}$？\\\\n直接用负数：$3^3 = 27 \\\\equiv 1 \\\\pmod{13}$。$70 = 3 \\\\times 23 + 1 \\\\implies 3^{70} = (3^3)^{23} \\\\times 3 \\\\equiv 1 \\\\times 3 = 3 \\\\pmod{13}$。\\\\n$2^4 = 16 \\\\equiv 3 \\\\implies 2^{12} \\\\equiv 27 \\\\equiv 1 \\\\pmod{13}$。$2^{70} = (2^{12})^5 \\\\times 2^{10} \\\\equiv 2^{10} = (2^4)^2 \\\\times 4 \\\\equiv 3^2 \\\\times 4 = 36 \\\\equiv 10 \\\\equiv -3 \\\\pmod{13}$。\\\\n故 $2^{70} + 3^{70} \\\\equiv -3 + 3 = 0 \\\\pmod{13}$。\\\\n因此余数为 0（整除）！",
        difficulty: "提高",
        type: "数论证明"
      }
    ]
    """
    text = re.sub(p_ch5, r'\g<1>' + new_ch5 + r'\g<3>', text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol6 fully enriched.")

def enrich_vol7():
    path = "src/data/volumes/vol7.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # ch2: 抽屉原理
    p_ch2 = r'(id:\s*[\'\"]ch2[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch3[\'\"])'
    new_ch2 = """
          {
            id: "ex7_2_1",
            index: 1,
            title: "数论同余抽屉与整除性证明",
            stem: "从 $1, 2, \\\\dots, 2n$ 这 $2n$ 个正整数中任取 $n + 1$ 个数，求证：其中必有两个数，一个数能整除另一个数。",
            analysis: "每个正整数都可以唯一表示为 $2^k \\\\times m$（其中 $m$ 为奇数）。考察奇数部分的种类数！",
            solution: "1. 任意正整数 $x$ 都可以唯一表示为 $x = 2^k \\\\times m$，其中 $k \\\\ge 0$ 是非负整数，$m$ 是奇数；\\\\n2. 在 $1$ 到 $2n$ 中，奇数只有 $1, 3, 5, \\\\dots, 2n - 1$，恰好有 $n$ 个不同的奇数；\\\\n3. 任取 $n + 1$ 个数，根据抽屉原理，将这 $n+1$ 个数的奇数部分放入 $n$ 个抽屉中，必有两个数的奇数部分相同！\\\\n4. 设这两个数为 $a = 2^{k_1} \\\\times m$ 和 $b = 2^{k_2} \\\\times m$（不妨设 $k_1 < k_2$）；\\\\n5. 则 $b = 2^{k_2 - k_1} \\\\times a$，即 $a$ 整除 $b$！得证。",
            notes: "奇数抽屉模型是竞赛中极其惊艳的数论应用。"
          },
          {
            id: "ex7_2_2",
            index: 2,
            title: "几何格点与连线中点整点性",
            stem: "在平面直角坐标系中任取 5 个整点（横纵坐标均为整数的点）。求证：在这 5 点中必存在两点，它们连线的中点也是整点。",
            analysis: "两点 $(x_1, y_1), (x_2, y_2)$ 的中点为 $(\\\\frac{x_1+x_2}{2}, \\\\frac{y_1+y_2}{2})$。中点为整点当且仅当横坐标同奇偶且纵坐标同奇偶。",
            solution: "1. 任何整点 $(x, y)$ 的坐标奇偶性组合只有 4 种情况（4 个抽屉）：\\\\n(奇, 奇), (奇, 偶), (偶, 奇), (偶, 偶)；\\\\n2. 现任取 5 个整点（5 只鸽子）；\\\\n3. 由抽屉原理，必有两个点的奇偶性组合完全相同！\\\\n4. 设这两点为 $A(x_1, y_1)$ 和 $B(x_2, y_2)$。因为 $x_1 \\\\equiv x_2 \\\\pmod{2}$ 且 $y_1 \\\\equiv y_2 \\\\pmod{2}$，所以 $x_1 + x_2$ 和 $y_1 + y_2$ 均为偶数；\\\\n5. 故线段 $AB$ 中点 $(\\\\frac{x_1+x_2}{2}, \\\\frac{y_1+y_2}{2})$ 的横纵坐标均为整数，必为整点！",
            notes: "奇偶同余组合抽屉法在几何离散问题中威力巨大。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v7_ch2_q1",
        index: 1,
        stem: "边长为 1 的正方形内任取 5 个点，求证：必有两点间距离不大于 $\\\\frac{\\\\sqrt{2}}{2}$。",
        answer: "将正方形四等分为小正方形，鸽巢原理得证",
        analysis: "将边长为 1 的正方形通过两对边中点连线分成 4 个边长为 $\\\\frac{1}{2}$ 的小正方形（4 个抽屉）。任取 5 个点，由抽屉原理必有至少 2 点落在同一个边长为 $\\\\frac{1}{2}$ 的小正方形内。小正方形内的最大距离为对角线长 $\\\\sqrt{(\\\\frac{1}{2})^2+(\\\\frac{1}{2})^2} = \\\\frac{\\\\sqrt{2}}{2}$。故这两点距离不超过 $\\\\frac{\\\\sqrt{2}}{2}$。",
        difficulty: "提高",
        type: "组合计数"
      },
      {
        id: "v7_ch2_q2",
        index: 2,
        stem: "在任意 6 个人中，求证：或者有 3 个人互相认识，或者有 3 个人互相不认识。（拉姆齐数 $R(3,3)=6$）",
        answer: "任选一人引出 5 条边，鸽巢原理得证",
        analysis: "设 6 个人为图的 6 个顶点，两人认识连红线，不认识连蓝线。任取一人 $A$，$A$ 与其余 5 人连 5 条边。由抽屉原理，$A$ 连出的 5 条边中至少有 3 条同色，不妨设为红边（连向 $B, C, D$）。若 $B, C, D$ 中有任意两人连红线（如 $BC$ 为红线），则 $\\\\triangle ABC$ 为全红三角形（3 人互相认识）；若 $B, C, D$ 之间全无红线，则 $B, C, D$ 三人两两连蓝线（3 人互相不认识）。得证！",
        difficulty: "竞赛",
        type: "组合极值与博弈"
      },
      {
        id: "v7_ch2_q3",
        index: 3,
        stem: "从 $1, 2, \\\\dots, 10$ 这 10 个自然数中任取 6 个数，求证：其中必有两个数的和等于 11。",
        answer: "两两配对 5 个抽屉得证",
        analysis: "将 10 个数配对为 5 个互补抽屉：$\\\\{1, 10\\\\}, \\\\{2, 9\\\\}, \\\\{3, 8\\\\}, \\\\{4, 7\\\\}, \\\\{5, 6\\\\}$。每个抽屉内的两数之和均为 11。任取 6 个数放入 5 个抽屉中，由抽屉原理必有两个数属于同一个抽屉，它们的和恰好为 11。",
        difficulty: "基础",
        type: "组合计数"
      }
    ]
    """
    text = re.sub(p_ch2, r'\g<1>' + new_ch2 + r'\g<3>', text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol7 fully enriched.")

if __name__ == "__main__":
    enrich_vol5()
    enrich_vol6()
    enrich_vol7()
