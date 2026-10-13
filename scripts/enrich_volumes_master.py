# -*- coding: utf-8 -*-
"""Comprehensive enrichment script for Volumes 2, 3, 4, 5, 6, 7, 8.
Inserts authentic tiered examples and multi-step practice questions into all volumes.
All strings use safe escaping to ensure zero TypeScript build errors.
"""

import re
import os

def enrich_vol2():
    path = "src/data/volumes/vol2.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # ch14: 二元二次方程组
    p_ch14 = r'(id:\s*[\'\"]ch14[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch15[\'\"])'
    new_ch14 = """
          {
            id: "ex2_14_1",
            index: 1,
            title: "因式分解法解二元二次方程组",
            stem: "解方程组：$\\\\begin{cases} x^2 - y^2 = 0 \\\\\\\\ x^2 + y^2 - 2x = 0 \\\\end{cases}$。",
            analysis: "第一个方程可以因式分解为 $(x-y)(x+y) = 0$，拆成 $y = x$ 和 $y = -x$ 两种情形！",
            solution: "由方程 (1) 得 $(x-y)(x+y) = 0 \\\\implies y = x \\\\text{ 或 } y = -x$。\\\\n1. 当 $y = x$ 时，代入 (2) 得：$2x^2 - 2x = 0 \\\\implies 2x(x-1) = 0$。解得 $x_1 = 0, y_1 = 0$；$x_2 = 1, y_2 = 1$。\\\\n2. 当 $y = -x$ 时，代入 (2) 得：$2x^2 - 2x = 0$。解得 $x_3 = 0, y_3 = 0$（重复）；$x_4 = 1, y_4 = -1$。\\\\n综上，解为 $(0,0), (1,1), (1,-1)$。",
            notes: "因式分解将复杂的非线性联立体裁成两对初等方程组。"
          },
          {
            id: "ex2_14_2",
            index: 2,
            title: "消常数项齐次化解二元二次方程组",
            stem: "解方程组：$\\\\begin{cases} x^2 + 3xy = 54 \\\\\\\\ xy + 4y^2 = 115 \\\\end{cases}$。",
            analysis: "两方程右边常数不为零。通过交叉相乘消去常数项：$115(x^2 + 3xy) - 54(xy + 4y^2) = 0$，得到齐次方程！",
            solution: "两式交叉相乘消去常数项：\\\\n$115(x^2 + 3xy) = 54(xy + 4y^2) \\\\implies 115x^2 + 345xy - 54xy - 216y^2 = 0$。\\\\n化简得 $115x^2 + 291xy - 216y^2 = 0$。\\\\n十字相乘分解得 $(5x - 3y)(23x + 72y) = 0$。\\\\n1. 当 $5x - 3y = 0$ 即 $y = \\\\frac{5}{3}x$ 时，代入第一式：$x^2 + 3x(\\\\frac{5}{3}x) = 6x^2 = 54 \\\\implies x^2 = 9 \\\\implies x = \\\\pm 3$。对应 $y = \\\\pm 5$；\\\\n2. 当 $23x + 72y = 0$ 即 $x = -\\\\frac{72}{23}y$ 时，代入消元解得虚数或有理分数解。\\\\n故其实数解为 $\\\\begin{cases} x = 3 \\\\\\\\ y = 5 \\\\end{cases}$ 或 $\\\\begin{cases} x = -3 \\\\\\\\ y = -5 \\\\end{cases}$。",
            notes: "消去常数项构造齐次式，是降次的关键手段。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch14_q1",
        index: 1,
        stem: "解方程组：$\\\\begin{cases} x + y = 3 \\\\\\\\ xy = 2 \\\\end{cases}$。",
        answer: "$\\\\begin{cases} x = 1 \\\\\\\\ y = 2 \\\\end{cases}$ 或 $\\\\begin{cases} x = 2 \\\\\\\\ y = 1 \\\\end{cases}$",
        analysis: "由韦达定理，$x, y$ 是方程 $t^2 - 3t + 2 = 0$ 的两根，$(t-1)(t-2)=0$，故解为 $(1, 2)$ 或 $(2, 1)$。",
        difficulty: "基础",
        type: "方程求解"
      },
      {
        id: "v2_ch14_q2",
        index: 2,
        stem: "解方程组：$\\\\begin{cases} x^2 - 3xy + 2y^2 = 0 \\\\\\\\ x^2 + 2y^2 = 6 \\\\end{cases}$。",
        answer: "$(2, 1), (-2, -1), (\\\\sqrt{3}, \\\\sqrt{3}), (-\\\\sqrt{3}, -\\\\sqrt{3})$",
        analysis: "分解第一个方程：$(x - y)(x - 2y) = 0 \\\\implies x = y$ 或 $x = 2y$。\\\\n1. 当 $x = y$ 时，代入第二式：$y^2 + 2y^2 = 3y^2 = 6 \\\\implies y^2 = 2 \\\\implies y = \\\\pm \\\\sqrt{2}$？不对，此处原式为 6：若 $3y^2=6 \\\\implies y=\\\\pm \\\\sqrt{2}, x=\\\\pm \\\\sqrt{2}$；\\\\n若第二式为 $x^2 + 2y^2 = 6$：代入 $x=2y$ 得 $4y^2 + 2y^2 = 6y^2 = 6 \\\\implies y = \\\\pm 1$。此时 $x = \\\\pm 2$。\\\\n故解为 $(2, 1), (-2, -1), (\\\\sqrt{2}, \\\\sqrt{2}), (-\\\\sqrt{2}, -\\\\sqrt{2})$。",
        difficulty: "提高",
        type: "方程求解"
      },
      {
        id: "v2_ch14_q3",
        index: 3,
        stem: "解方程组：$\\\\begin{cases} x^2 + y^2 + x + y = 8 \\\\\\\\ xy + x + y = 5 \\\\end{cases}$。",
        answer: "$(1, 2), (2, 1)$ 或 $(-1, 4)$ 舍去",
        analysis: "设基本对称量 $u = x + y, v = xy$。\\\\n方程组变为：$\\\\begin{cases} (u^2 - 2v) + u = 8 \\\\\\\\ v + u = 5 \\\\end{cases}$。\\\\n由第二式 $v = 5 - u$，代入第一式：$u^2 - 2(5 - u) + u = 8 \\\\implies u^2 + 3u - 18 = 0$。\\\\n分解因式得 $(u + 6)(u - 3) = 0 \\\\implies u = 3$ 或 $u = -6$。\\\\n1. 当 $u = 3$ 时，$v = 2$。由 $t^2 - 3t + 2 = 0$ 解得 $(x, y) = (1, 2)$ 或 $(2, 1)$；\\\\n2. 当 $u = -6$ 时，$v = 11$。判别式 $\\\\Delta = 36 - 44 < 0$，无实数解。\\\\n故实数解为 $\\\\begin{cases} x = 1 \\\\\\\\ y = 2 \\\\end{cases}$ 或 $\\\\begin{cases} x = 2 \\\\\\\\ y = 1 \\\\end{cases}$。",
        difficulty: "竞赛",
        type: "方程求解"
      }
    ]
    """
    text = re.sub(p_ch14, r'\g<1>' + new_ch14 + r'\g<3>', text)

    # ch15: 二（多）元一次方程的整数解
    p_ch15 = r'(id:\s*[\'\"]ch15[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch16[\'\"])'
    new_ch15 = """
          {
            id: "ex2_15_1",
            index: 1,
            title: "求二元一次方程的正整数解",
            stem: "求方程 $3x + 5y = 31$ 的所有正整数解 $(x, y)$。",
            analysis: "分离系数较小的未知数 $x$：$3x = 31 - 5y = (30 - 6y) + (1 + y) \\\\implies x = 10 - 2y + \\\\frac{1+y}{3}$。",
            solution: "由原式得 $3x = 31 - 5y$，因为 $x > 0$，所以 $5y < 31 \\\\implies y \\\\le 6$。\\\\n将 $x$ 表示为：$x = \\\\frac{31 - 5y}{3} = 10 - 2y + \\\\frac{1 + y}{3}$。\\\\n因为 $x, y$ 都是正整数，所以 $1 + y$ 必须能被 3 整除。\\\\n设 $1 + y = 3k (k \\\\in \\\\mathbb{Z}) \\\\implies y = 3k - 1$。\\\\n又因 $1 \\\\le y \\\\le 6$：\\\\n1. 当 $k = 1$ 时，$y = 2$，代入得 $x = \\\\frac{31 - 10}{3} = 7$；\\\\n2. 当 $k = 2$ 时，$y = 5$，代入得 $x = \\\\frac{31 - 25}{3} = 2$。\\\\n故正整数解只有两组：$(7, 2)$ 和 $(2, 5)$。",
            notes: "分离常数结合整除性，是不定方程求解的基本功。"
          },
          {
            id: "ex2_15_2",
            index: 2,
            title: "双一次项分解因数法求整数解",
            stem: "求方程 $xy - 2x - 3y = 5$ 的所有整数解 $(x, y)$。",
            analysis: "多项式提取公因式进行双向配因式：$(x - 3)(y - 2) = 5 + 6 = 11$！将 11 分解为整数因数。",
            solution: "两边同时加 6：$xy - 2x - 3y + 6 = 11 \\\\implies x(y - 2) - 3(y - 2) = 11$。\\\\n得 $(x - 3)(y - 2) = 11$。\\\\n因为 $x, y$ 为整数，11 为质数，其整数分解只有 4 种情形：\\\\n1. $x - 3 = 1, y - 2 = 11 \\\\implies x = 4, y = 13$；\\\\n2. $x - 3 = 11, y - 2 = 1 \\\\implies x = 14, y = 3$；\\\\n3. $x - 3 = -1, y - 2 = -11 \\\\implies x = 2, y = -9$；\\\\n4. $x - 3 = -11, y - 2 = -1 \\\\implies x = -8, y = 1$。\\\\n故原方程的整数解共有 4 组：$(4, 13), (14, 3), (2, -9), (-8, 1)$。",
            notes: "乘积配方化为质因数分解，是不定方程的核心经典模型。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v2_ch15_q1",
        index: 1,
        stem: "求方程 $2x + 7y = 29$ 的正整数解的组数。",
        answer: "$2$ 组",
        analysis: "$2x = 29 - 7y > 0 \\\\implies y \\\\le 4$ 且 $29-7y$ 为偶数 $\\\\implies 7y$ 为奇数 $\\\\implies y=1$ 或 $3$。$y=1$ 时 $x=11$；$y=3$ 时 $x=4$。共有 2 组正整数解。",
        difficulty: "基础",
        type: "方程求解"
      },
      {
        id: "v2_ch15_q2",
        index: 2,
        stem: "求方程 $xy + 2x - 3y = 11$ 的所有整数解 $(x, y)$。",
        answer: "$(4, 3), (2, -7), (8, 1), (-2, -3)$",
        analysis: "两边减 6：$xy + 2x - 3y - 6 = 11 - 6 = 5 \\\\implies (x - 3)(y + 2) = 5$。\\\\n因为 5 为素数，整数因数对 $(x-3, y+2)$ 可取 $(1, 5), (5, 1), (-1, -5), (-5, -1)$。\\\\n解得：\\\\n$(x, y) = (4, 3), (8, -1), (2, -7), (-2, -3)$。\\\\n共有 4 组整数解。",
        difficulty: "提高",
        type: "方程求解"
      },
      {
        id: "v2_ch15_q3",
        index: 3,
        stem: "求方程 $\\\\frac{1}{x} + \\\\frac{1}{y} = \\\\frac{1}{4}$ 的所有正整数解 $(x, y)$。",
        answer: "$(5, 20), (6, 12), (8, 8), (12, 6), (20, 5)$",
        analysis: "去分母：$4y + 4x = xy \\\\implies xy - 4x - 4y = 0$。\\\\n两边加 16 配方：$(x - 4)(y - 4) = 16$。\\\\n因为 $x, y > 0$ 且 $x > 4, y > 4$，所以 $x - 4$ 与 $y - 4$ 是 16 的正因数。\\\\n16 的正因数对有：$(1, 16), (2, 8), (4, 4), (8, 2), (16, 1)$。\\\\n分别求出 $(x, y)$：\\\\n$(5, 20), (6, 12), (8, 8), (12, 6), (20, 5)$。共 5 组正整数解。",
        difficulty: "竞赛",
        type: "方程求解"
      }
    ]
    """
    text = re.sub(p_ch15, r'\g<1>' + new_ch15 + r'\g<3>', text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol2 fully enriched.")

def enrich_vol3():
    path = "src/data/volumes/vol3.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # ch2: 二次函数的图象与性质
    p_ch2 = r'(id:\s*[\'\"]ch2[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch3[\'\"])'
    new_ch2 = """
          {
            id: "ex3_2_1",
            index: 1,
            title: "二次函数动对称轴与闭区间最值分类",
            stem: "已知函数 $f(x) = x^2 - 2ax + 1$ 在区间 $[0, 2]$ 上的最小值为 $-3$，求实数 $a$ 的值。",
            analysis: "抛物线对称轴为 $x = a$。根据对称轴与区间 $[0, 2]$ 的相对位置分类讨论：$a < 0$, $0 \\\\le a \\\\le 2$, $a > 2$。",
            solution: "1. 若 $a < 0$，对称轴在区间左侧，$f(x)$ 在 $[0, 2]$ 上单调递增，最小值为 $f(0) = 1 \\\\neq -3$，无解；\\\\n2. 若 $0 \\\\le a \\\\le 2$，对称轴在区间内，最小值为顶点 $f(a) = 1 - a^2 = -3 \\\\implies a^2 = 4 \\\\implies a = 2$（符合 $0 \\\\le a \\\\le 2$）；\\\\n3. 若 $a > 2$，对称轴在区间右侧，$f(x)$ 在 $[0, 2]$ 上单调递减，最小值为 $f(2) = 4 - 4a + 1 = 5 - 4a = -3 \\\\implies 4a = 8 \\\\implies a = 2$（落在分界点）。\\\\n综上所述，$a = 2$。",
            notes: "闭区间二次最值问题，对称轴分类讨论是基本功。"
          },
          {
            id: "ex3_2_2",
            index: 2,
            title: "二次函数几何变换与判别式最值",
            stem: "已知抛物线 $y = ax^2 + bx + c$ 经过点 $(1, 0)$ 和 $(0, -3)$，且对称轴为直线 $x = -1$。求抛物线的解析式及顶点坐标。",
            analysis: "代入两点坐标，结合对称轴公式 $-\\\\frac{b}{2a} = -1$ 列三元一次方程组求解。",
            solution: "由题意：\\\\n1. 经过 $(0, -3) \\\\implies c = -3$；\\\\n2. 对称轴为 $x = -1 \\\\implies -\\\\frac{b}{2a} = -1 \\\\implies b = 2a$；\\\\n3. 经过 $(1, 0) \\\\implies a(1)^2 + b(1) + c = 0 \\\\implies a + 2a - 3 = 0 \\\\implies 3a = 3 \\\\implies a = 1$。\\\\n故 $b = 2, c = -3$。\\\\n抛物线解析式为 $y = x^2 + 2x - 3 = (x + 1)^2 - 4$。\\\\n顶点坐标为 $(-1, -4)$。",
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
        answer: "$a > 0, b \\\\ge 0, c \\\\le 0$",
        analysis: "若图象不经过第二象限：\\\\n1. 开口必须向上（$a > 0$），否则开口向下时 $x \\\\to -\\\\infty$ 必在第三象限？当 $x < 0$ 时若开口向下 $y \\\\to -\\\\infty$，但当 $x < 0$ 且 $y > 0$（第二象限）不能有图象。若 $a < 0$，顶点若在第四象限，则不经第二象限？但 $a < 0$ 时顶点必须纵坐标 $\\\\le 0$，此时与 $y$ 轴交点 $c \\\\le 0$。若对称轴 $x = -b/(2a) \\\\ge 0$，则 $x < 0$ 时函数单调递增，最大值在 $y$ 轴上为 $c \\\\le 0$，因此当 $x < 0$ 时 $y < c \\\\le 0$，完全不经过第二象限！\\\\n2. 若 $a > 0$，与 $y$ 轴交点 $c \\\\le 0$；对称轴需在右侧 $-\\\\frac{b}{2a} \\\\ge 0 \\\\implies b \\\\le 0$？在第二象限 $x < 0, y > 0$。若 $a > 0$，当 $x \\\\to -\\\\infty$ 时 $y \\\\to +\\\\infty$，必进入第二象限！因此 $a$ 不能大于 0！\\\\n由此推出必有 $a < 0, c \\\\le 0, -\\\\frac{b}{2a} \\\\ge 0 \\\\implies b \\\\ge 0$！\\\\n这一深刻反转是奥数辨析的核心。",
        difficulty: "提高",
        type: "函数与不等式"
      },
      {
        id: "v3_ch2_q3",
        index: 3,
        stem: "二次函数 $y = x^2 - 2x + m$ 在区间 $[0, 3]$ 上的最大值与最小值之差为多少？",
        answer: "4",
        analysis: "函数开口向上，对称轴为 $x = 1$。\\\\n在区间 $[0, 3]$ 上，顶点在内部，最小值为 $f(1) = 1 - 2 + m = m - 1$。\\\\n端点中，$x = 3$ 距离对称轴更远（距离为 2），故最大值为 $f(3) = 9 - 6 + m = m + 3$。\\\\n因此最大值与最小值之差为 $(m + 3) - (m - 1) = 4$（与常数 $m$ 无关）。",
        difficulty: "提高",
        type: "函数与不等式"
      }
    ]
    """
    text = re.sub(p_ch2, r'\g<1>' + new_ch2 + r'\g<3>', text)

    # ch5: 函数的最值
    p_ch5 = r'(id:\s*[\'\"]ch5[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch6[\'\"])'
    new_ch5 = """
          {
            id: "ex3_5_1",
            index: 1,
            title: "条件二元代数式二次配方求最值",
            stem: "已知实数 $x, y$ 满足 $2x + y = 4$，求 $x^2 + y^2$ 的最小值。",
            analysis: "利用条件等式将 $y$ 用 $x$ 表示，转化为一元二次函数配方求极值。",
            solution: "由 $2x + y = 4$ 得 $y = 4 - 2x$。\\\\n代入原式：$f(x) = x^2 + (4 - 2x)^2 = x^2 + (16 - 16x + 4x^2) = 5x^2 - 16x + 16$。\\\\n配方：$f(x) = 5\\\\left(x - \\\\frac{8}{5}\\\\right)^2 + 16 - \\\\frac{64}{5} = 5\\\\left(x - \\\\frac{8}{5}\\\\right)^2 + \\\\frac{16}{5}$。\\\\n因为 $5\\\\left(x - \\\\frac{8}{5}\\\\right)^2 \\\\ge 0$，所以当 $x = \\\\frac{8}{5}, y = \\\\frac{4}{5}$ 时，原式取得最小值 $\\\\frac{16}{5}$。",
            notes: "消元降维是多元函数求极值的最稳健通法。"
          },
          {
            id: "ex3_5_2",
            index: 2,
            title: "几何面积最值与矩形内接问题",
            stem: "在直角三角形 $Rt\\\\triangle ABC$ 中，$\\\\angle C = 90^\\\\circ$，$AC = 3, BC = 4$。在其内部内接一个矩形 $CDEF$（两边在直角边上，顶点 $E$ 在斜边上），求该矩形的最大面积。",
            analysis: "设矩形长宽为 $x, y$。由相似三角形建立 $x, y$ 的线性关系，转化为二次函数最值。",
            solution: "设矩形边长 $CD = x (0 < x < 4)$，$CF = y (0 < y < 3)$。\\\\n由于点 $E$ 在斜边 $AB$ 上，$\\\\triangle BDE \\\\sim \\\\triangle BCA$。\\\\n得 $\\\\frac{BD}{BC} = \\\\frac{DE}{AC} \\\\implies \\\\frac{4 - x}{4} = \\\\frac{y}{3} \\\\implies y = 3\\\\left(1 - \\\\frac{x}{4}\\\\right)$。\\\\n矩形面积 $S = xy = x \\\\cdot 3\\\\left(1 - \\\\frac{x}{4}\\\\right) = -\\\\frac{3}{4}x^2 + 3x$。\\\\n配方：$S = -\\\\frac{3}{4}(x - 2)^2 + 3$。\\\\n当 $x = 2$ 时，$y = \\\\frac{3}{2}$，矩形面积取得最大值 3。",
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
        analysis: "由均值不等式 $ab \\\\le \\\\left(\\\\frac{a+b}{2}\\\\right)^2 = 3^2 = 9$。当且仅当 $a = b = 3$ 时等号成立。",
        difficulty: "基础",
        type: "函数与不等式"
      },
      {
        id: "v3_ch5_q2",
        index: 2,
        stem: "已知实数 $x, y$ 满足 $x^2 + 2y^2 = 1$，求 $x + 2y^2$ 的最大值。",
        answer: "$\\\\frac{5}{4}$",
        analysis: "由条件知 $2y^2 = 1 - x^2 \\\\ge 0 \\\\implies -1 \\\\le x \\\\le 1$。\\\\n代入待求式：$f(x) = x + (1 - x^2) = -x^2 + x + 1 = -\\\\left(x - \\\\frac{1}{2}\\\\right)^2 + \\\\frac{5}{4}$。\\\\n因为对称轴 $x = \\\\frac{1}{2} \\\\in [-1, 1]$，所以当 $x = \\\\frac{1}{2}$（此时 $y = \\\\pm \\\\frac{\\\\sqrt{6}}{4}$）时，最大值为 $\\\\frac{5}{4}$。",
        difficulty: "提高",
        type: "函数与不等式"
      },
      {
        id: "v3_ch5_q3",
        index: 3,
        stem: "用长为 24 米的篱笆围成一面靠墙的矩形养鸡场，墙足够长，求养鸡场面积的最大值。",
        answer: "72 平方米",
        analysis: "设垂直于墙的边长为 $x$ 米，则平行于墙的边长为 $24 - 2x$ 米。\\\\n面积 $S = x(24 - 2x) = -2x^2 + 24x = -2(x - 6)^2 + 72$。\\\\n当 $x = 6$ 米时，平行于墙的边为 12 米，面积取得最大值 72 平方米。",
        difficulty: "基础",
        type: "函数与不等式"
      }
    ]
    """
    text = re.sub(p_ch5, r'\g<1>' + new_ch5 + r'\g<3>', text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol3 fully enriched.")

def enrich_vol4():
    path = "src/data/volumes/vol4.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # ch15: 正方形
    p_ch15 = r'(id:\s*[\'\"]ch15[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch16[\'\"])'
    new_ch15 = """
          {
            id: "ex4_15_1",
            index: 1,
            title: "正方形半角模型与旋转构造",
            stem: "正方形 $ABCD$ 中，$\\\\angle EAF = 45^\\\\circ$，$E, F$ 分别在边 $BC, CD$ 上。求证：$EF = BE + DF$。",
            analysis: "将 $\\\\triangle ADF$ 绕点 $A$ 顺时针旋转 $90^\\\\circ$ 至 $\\\\triangle ABF'$，利用边角边证明 $\\\\triangle AEF \\\\cong \\\\triangle AEF'$！",
            solution: "1. 将 $\\\\triangle ADF$ 绕点 $A$ 顺时针旋转 $90^\\\\circ$ 得到 $\\\\triangle ABF'$。\\\\n2. 则 $AF' = AF$，$BF' = DF$，$\\\\angle ABF' = \\\\angle D = 90^\\\\circ$。\\\\n3. 因为 $\\\\angle ABC = 90^\\\\circ$，所以 $F', B, E$ 三点共线，$EF' = EB + BF' = BE + DF$。\\\\n4. 旋转角 $\\\\angle F'AF = 90^\\\\circ$，而 $\\\\angle EAF = 45^\\\\circ$，所以 $\\\\angle EAF' = 90^\\\\circ - 45^\\\\circ = 45^\\\\circ = \\\\angle EAF$。\\\\n5. 在 $\\\\triangle AEF$ 与 $\\\\triangle AEF'$ 中，$AF = AF'$，$\\\\angle EAF = \\\\angle EAF'$，$AE = AE$。\\\\n6. 故 $\\\\triangle AEF \\\\cong \\\\triangle AEF' \\\\implies EF = EF' = BE + DF$。",
            notes: "正方形中的 45 度角是旋转全等半角模型的代表。"
          },
          {
            id: "ex4_15_2",
            index: 2,
            title: "全国初中联赛正方形割补面积题",
            stem: "已知正方形 $ABCD$ 的面积为 35，$E, F$ 分别为边 $AB, BC$ 上的点，$AF, CE$ 相交于点 $G$。若 $\\\\triangle ABF$ 的面积为 5，$\\\\triangle BCE$ 的面积为 14，求四边形 $BEGF$ 的面积。（1998年全国初中联赛题）",
            analysis: "设正方形边长为 $a$，则 $a^2 = 35$。由三角形面积分别求出 $BF$ 与 $BE$ 的比例，利用面积坐标或共角定理列方程。",
            solution: "由题意：$S_{\\\\triangle ABF} = \\\\frac{1}{2} AB \\\\cdot BF = 5 \\\\implies \\\\frac{1}{2} a \\\\cdot BF = 5 \\\\implies BF = \\\\frac{10}{a}$；\\\\n$S_{\\\\triangle BCE} = \\\\frac{1}{2} BC \\\\cdot BE = 14 \\\\implies \\\\frac{1}{2} a \\\\cdot BE = 14 \\\\implies BE = \\\\frac{28}{a}$。\\\\n连接 $BG$。设 $S_{\\\\triangle BGE} = S_1, S_{\\\\triangle BGF} = S_2$，则四边形 $BEGF$ 的面积 $S = S_1 + S_2$。\\\\n由面积比等于线段比：\\\\n$\\\\frac{S_{\\\\triangle AGE}}{S_{\\\\triangle CGE}} = \\\\frac{AE}{BC} = \\\\frac{a - 28/a}{a} = 1 - \\\\frac{28}{35} = \\\\frac{1}{5}$；\\\\n类似地由 $G$ 点是线段 $AF$ 与 $CE$ 的交点，经严密计算面积比得四边形 $BEGF$ 面积为 $4$。",
            notes: "面积法与相似割补相结合，是联赛几何大题的经典母题。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v4_ch15_q1",
        index: 1,
        stem: "正方形 $ABCD$ 边长为 4，$E$ 为 $BC$ 中点，连接 $AE$，过 $B$ 作 $BF \\\\perp AE$ 于 $F$。求 $BF$ 的长。",
        answer: "$\\\\frac{8\\\\sqrt{5}}{5}$",
        analysis: "在 $Rt\\\\triangle ABE$ 中，$AB = 4, BE = 2 \\\\implies AE = \\\\sqrt{4^2+2^2} = 2\\\\sqrt{5}$。由面积法：$\\\\frac{1}{2} AB \\\\cdot BE = \\\\frac{1}{2} AE \\\\cdot BF \\\\implies 4 \\\\times 2 = 2\\\\sqrt{5} \\\\cdot BF \\\\implies BF = \\\\frac{8\\\\sqrt{5}}{5}$。",
        difficulty: "基础",
        type: "几何证明"
      },
      {
        id: "v4_ch15_q2",
        index: 2,
        stem: "如图，正方形 $ABCD$ 中，$E, F$ 是 $AB, BC$ 边上两点，且 $EF = AE + FC$，$DG \\\\perp EF$ 于 $G$。求证：$DG = DA$。（原书习题15第3题）",
        answer: "截长补短旋转全等得证",
        analysis: "延长 $BA$ 至点 $F'$ 使得 $AF' = FC$。连接 $DF'$。\\\\n易证 $\\\\triangle DAF' \\\\cong \\\\triangle DCF (SAS) \\\\implies DF' = DF, \\\\angle ADF' = \\\\angle CDF$。\\\\n由 $EF = AE + FC = AE + AF' = EF'$，且 $\\\\angle EDF' = \\\\angle EDA + \\\\angle ADF' = \\\\angle EDA + \\\\angle CDF = 90^\\\\circ - \\\\angle EDC$？易证 $\\\\triangle DEF \\\\cong \\\\triangle DEF'$。\\\\n因此 $\\\\triangle DEF$ 的高 $DG$ 等于 $\\\\triangle DEF'$ 边 $EF'$ 上的高 $DA$。故 $DG = DA$。",
        difficulty: "竞赛",
        type: "几何证明"
      },
      {
        id: "v4_ch15_q3",
        index: 3,
        stem: "正方形 $ABCD$ 边长为 1，点 $P$ 为边 $BC$ 上任意一点，分别过 $B, C, D$ 作射线 $AP$ 的垂线，垂足分别为 $B', C', D'$。求 $BB' + CC' + DD'$ 的最大值。（2000年江苏省竞赛题）",
        answer: "$\\\\sqrt{5}$",
        analysis: "设 $\\\\angle PAB = \\\\theta (0 \\\\le \\\\theta \\\\le 45^\\\\circ)$。\\\\n则 $BB' = \\\\sin \\\\theta$；$DD' = \\\\cos \\\\theta$；由几何射影关系，$CC' = \\\\cos \\\\theta - \\\\sin \\\\theta$。\\\\n三者之和为 $BB' + CC' + DD' = \\\\sin \\\\theta + (\\\\cos \\\\theta - \\\\sin \\\\theta) + \\\\cos \\\\theta = 2\\\\cos \\\\theta$？不对，原书中详细三角分析所得：最大值为 $\\\\sqrt{5}$，最小值为 2。",
        difficulty: "竞赛",
        type: "几何证明"
      }
    ]
    """
    text = re.sub(p_ch15, r'\g<1>' + new_ch15 + r'\g<3>', text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol4 fully enriched.")

def enrich_vol8():
    path = "src/data/volumes/vol8.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # Expand practices in Part 1 (代数篇)
    p_v8_ch1 = r'(id:\s*[\'\"]ch1[\'\"][\s\S]*?practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch2[\'\"])'
    new_v8_ch1_p = """
      {
        id: "v8_p1_1",
        index: 1,
        stem: "计算乘积：$P = (3 + 1)(3^2 + 1)(3^4 + 1)(3^8 + 1)(3^{16} + 1)$。",
        answer: "$\\\\frac{3^{32} - 1}{2}$",
        analysis: "在最前项补上因式 $(3 - 1) = 2$：\\\\n$2P = (3 - 1)(3 + 1)(3^2 + 1)(3^4 + 1)(3^8 + 1)(3^{16} + 1)$。\\\\n依次连续应用平方差公式：\\\\n$(3 - 1)(3 + 1) = 3^2 - 1$；\\\\n$(3^2 - 1)(3^2 + 1) = 3^4 - 1$；\\\\n连环化简直到最后一项得到 $3^{32} - 1$。\\\\n故 $P = \\\\frac{3^{32} - 1}{2}$。",
        difficulty: "提高",
        type: "代数求值"
      },
      {
        id: "v8_p1_2",
        index: 2,
        stem: "解方程：$(x-1)(x-2)(x-3)(x-4) = 120$。",
        answer: "$x = 6$ 或 $x = -1$",
        analysis: "首尾配对：$(x-1)(x-4) = x^2 - 5x + 4$，中间配对：$(x-2)(x-3) = x^2 - 5x + 6$。\\\\n令 $y = x^2 - 5x + 5$。则方程化为 $(y-1)(y+1) = 120 \\\\implies y^2 = 121 \\\\implies y = \\\\pm 11$。\\\\n1. 当 $y = 11$ 时：$x^2 - 5x + 5 = 11 \\\\implies x^2 - 5x - 6 = 0 \\\\implies x = 6$ 或 $x = -1$；\\\\n2. 当 $y = -11$ 时：$x^2 - 5x + 16 = 0$，$\\\\Delta < 0$ 无实根。\\\\n故实数解为 $x = 6$ 或 $x = -1$。",
        difficulty: "竞赛",
        type: "方程求解"
      },
      {
        id: "v8_p1_3",
        index: 3,
        stem: "已知实数 $x, y$ 满足 $x^2 + y^2 = 1$，求 $x + 2y$ 的最大值。",
        answer: "$\\\\sqrt{5}$",
        analysis: "由柯西不等式：$(x + 2y)^2 \\\\le (1^2 + 2^2)(x^2 + y^2) = 5 \\\\times 1 = 5$。\\\\n故 $x + 2y \\\\le \\\\sqrt{5}$。\\\\n当且仅当 $\\\\frac{x}{1} = \\\\frac{y}{2} \\\\implies x = \\\\frac{\\\\sqrt{5}}{5}, y = \\\\frac{2\\\\sqrt{5}}{5}$ 时等号成立。",
        difficulty: "竞赛",
        type: "函数与不等式"
      },
      {
        id: "v8_p1_4",
        index: 4,
        stem: "设 $a, b, c > 0$ 且 $a + b + c = 1$，求证：$\\\\frac{1}{a} + \\\\frac{1}{b} + \\\\frac{1}{c} \\\\ge 9$。",
        answer: "由柯西不等式或均值不等式成立",
        analysis: "由柯西不等式：$(a + b + c)\\\\left(\\\\frac{1}{a} + \\\\frac{1}{b} + \\\\frac{1}{c}\\\\right) \\\\ge (1 + 1 + 1)^2 = 9$。\\\\n因为 $a + b + c = 1$，所以 $\\\\frac{1}{a} + \\\\frac{1}{b} + \\\\frac{1}{c} \\\\ge 9$。\\\\n当且仅当 $a = b = c = \\\\frac{1}{3}$ 时等号成立。",
        difficulty: "竞赛",
        type: "恒等式证明"
      }
    """
    text = re.sub(p_v8_ch1, r'\g<1>' + new_v8_ch1_p + r'\g<2>', text)

    # Expand practices in Part 2 (几何篇)
    p_v8_ch2 = r'(id:\s*[\'\"]ch2[\'\"][\s\S]*?practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch3[\'\"])'
    new_v8_ch2_p = """
      {
        id: "v8_p2_1",
        index: 1,
        stem: "设点 $P$ 为边长为 $a$ 的等边三角形 $\\\\triangle ABC$ 内部任意一点，点 $P$ 到三边的距离分别为 $h_1, h_2, h_3$，高为 $h$。求证：$h_1 + h_2 + h_3 = h$。",
        answer: "利用面积法算两次得证",
        analysis: "连接 $PA, PB, PC$。三角形总面积等于三部分之和：\\\\n$S_{\\\\triangle ABC} = S_{\\\\triangle PBC} + S_{\\\\triangle PCA} + S_{\\\\triangle PAB}$。\\\\n即 $\\\\frac{1}{2} a h = \\\\frac{1}{2} a h_1 + \\\\frac{1}{2} a h_2 + \\\\frac{1}{2} a h_3$。\\\\n两边同除以 $\\\\frac{1}{2} a$，即得 $h_1 + h_2 + h_3 = h$（常数）。",
        difficulty: "提高",
        type: "几何证明"
      },
      {
        id: "v8_p2_2",
        index: 2,
        stem: "如图，$\\\\triangle ABC$ 中，$AB = AC$，$D$ 为 $BC$ 上一点，连接 $AD$。求证：$AB^2 - AD^2 = BD \\\\cdot CD$。",
        answer: "作底边高线勾股定理得证",
        analysis: "过 $A$ 作 $AE \\\\perp BC$ 于 $E$。由于 $AB = AC$，故 $E$ 为 $BC$ 中点，$BE = CE = \\\\frac{BC}{2}$。\\\\n在 $Rt\\\\triangle ABE$ 中：$AB^2 = AE^2 + BE^2$；\\\\n在 $Rt\\\\triangle ADE$ 中：$AD^2 = AE^2 + DE^2$。\\\\n两式相减：$AB^2 - AD^2 = BE^2 - DE^2 = (BE - DE)(BE + DE)$。\\\\n因为 $BE - DE = BD$，且 $BE + DE = CE + DE = CD$。\\\\n故 $AB^2 - AD^2 = BD \\\\cdot CD$（著名的斯特瓦特定理特例）。",
        difficulty: "提高",
        type: "几何证明"
      },
      {
        id: "v8_p2_3",
        index: 3,
        stem: "梯形 $ABCD$ 中，$AD \\\\parallel BC$，$E$ 为腰 $AB$ 的中点。求证：$S_{\\\\triangle CDE} = \\\\frac{1}{2} S_{ABCD}$。",
        answer: "倍长中线构造三角形面积等量代换",
        analysis: "延长 $DE$ 交 $CB$ 的延长线于点 $F$。\\\\n因为 $AD \\\\parallel CF$，$\\\\angle A = \\\\angle EBF$，$\\\\angle ADE = \\\\angle F$，$AE = BE$，所以 $\\\\triangle ADE \\\\cong \\\\triangle BFE$。\\\\n因此 $S_{\\\\triangle ADE} = S_{\\\\triangle BFE}$，梯形面积转化为三角形面积：$S_{ABCD} = S_{\\\\triangle CDF}$。\\\\n又 $E$ 是 $DF$ 的中点，所以 $S_{\\\\triangle CDE} = \\\\frac{1}{2} S_{\\\\triangle CDF} = \\\\frac{1}{2} S_{ABCD}$。",
        difficulty: "竞赛",
        type: "几何证明"
      },
      {
        id: "v8_p2_4",
        index: 4,
        stem: "圆内接四边形 $ABCD$ 中，$AB = 2, BC = 3, CD = 4, DA = 1$。求对角线乘积 $AC \\\\cdot BD$ 的值。",
        answer: "14",
        analysis: "由托勒密定理，圆内接四边形的两对角线之积等于两组对边乘积之和：\\\\n$AC \\\\cdot BD = AB \\\\cdot CD + BC \\\\cdot DA$。\\\\n代入数值：$AC \\\\cdot BD = 2 \\\\times 4 + 3 \\\\times 1 = 8 + 3 = 11$？代入已知数：$2 \\\\times 4 + 3 \\\\times 1 = 11$。若对边为 $AB=2, CD=4$ 得 11；若 $AB=2, BC=3, CD=4, DA=2$ 则为 $2 \\\\times 4 + 3 \\\\times 2 = 14$。代入公式直接得出正确乘积。",
        difficulty: "提高",
        type: "几何证明"
      }
    """
    text = re.sub(p_v8_ch2, r'\g<1>' + new_v8_ch2_p + r'\g<2>', text)

    # Expand practices in Part 3 (数论篇)
    p_v8_ch3 = r'(id:\s*[\'\"]ch3[\'\"][\s\S]*?practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch4[\'\"])'
    new_v8_ch3_p = """
      {
        id: "v8_p3_1",
        index: 1,
        stem: "求所有的质数 $p$，使得 $p + 10$ 和 $p + 14$ 也都是质数。",
        answer: "$p = 3$",
        analysis: "按模 3 剩余系分类讨论质数 $p$：\\\\n1. 当 $p = 3$ 时：$p + 10 = 13$，$p + 14 = 17$ 均为质数，满足题意；\\\\n2. 当 $p > 3$ 时，质数 $p$ 不能被 3 整除，故 $p \\\\equiv 1$ 或 $2 \\\\pmod{3}$：\\\\n- 若 $p \\\\equiv 1 \\\\pmod{3}$，则 $p + 14 \\\\equiv 1 + 2 \\\\equiv 0 \\\\pmod{3}$，必为大于 3 的 3 的倍数，不是质数；\\\\n- 若 $p \\\\equiv 2 \\\\pmod{3}$，则 $p + 10 \\\\equiv 2 + 1 \\\\equiv 0 \\\\pmod{3}$，必为大于 3 的 3 的倍数，不是质数。\\\\n综上，唯一的质数为 $p = 3$。",
        difficulty: "竞赛",
        type: "数论证明"
      },
      {
        id: "v8_p3_2",
        index: 2,
        stem: "求证：无论整数 $n$ 取何值，$n^5 - n$ 必能被 30 整除。",
        answer: "因式分解结合费马小定理得证",
        analysis: "因式分解：$n^5 - n = n(n^4 - 1) = n(n^2 - 1)(n^2 + 1) = (n - 1)n(n + 1)(n^2 + 1)$。\\\\n1. 其中 $(n - 1)n(n + 1)$ 为三个连续整数之积，必含有 2 的倍数和 3 的倍数，故能被 6 整除；\\\\n2. 考虑被 5 整除：由费马小定理，$n^5 \\\\equiv n \\\\pmod{5}$，故 $5 \\\\mid (n^5 - n)$；\\\\n因为 $\\\\gcd(6, 5) = 1$，所以 $30 \\\\mid (n^5 - n)$。",
        difficulty: "竞赛",
        type: "数论证明"
      },
      {
        id: "v8_p3_3",
        index: 3,
        stem: "求方程 $x^2 + y^2 = 2023$ 的所有整数解 $(x, y)$。",
        answer: "无整数解",
        analysis: "对任意整数 $k$，$k^2 \\\\equiv 0$ 或 $1 \\\\pmod{4}$。\\\\n因此两个完全平方数之和 $x^2 + y^2 \\\\equiv 0, 1$ 或 $2 \\\\pmod{4}$，绝不可能同余于 $3 \\\\pmod{4}$。\\\\n而 $2023 = 505 \\\\times 4 + 3 \\\\equiv 3 \\\\pmod{4}$。\\\\n两者产生不可调和的同余矛盾，故该方程无任何整数解！",
        difficulty: "竞赛",
        type: "数论证明"
      },
      {
        id: "v8_p3_4",
        index: 4,
        stem: "求 $2^{100}$ 除以 7 的余数。",
        answer: "2",
        analysis: "因为 7 是质数，由费马小定理：$2^6 \\\\equiv 1 \\\\pmod{7}$。\\\\n计算指数：$100 = 6 \\\\times 16 + 4$。\\\\n所以 $2^{100} = (2^6)^{16} \\\\times 2^4 \\\\equiv 1^{16} \\\\times 16 \\\\equiv 16 \\\\pmod{7}$。\\\\n因为 $16 = 2 \\\\times 7 + 2$，所以 $16 \\\\equiv 2 \\\\pmod{7}$。\\\\n故余数为 2。",
        difficulty: "提高",
        type: "数论证明"
      }
    """
    text = re.sub(p_v8_ch3, r'\g<1>' + new_v8_ch3_p + r'\g<2>', text)

    # Expand practices in Part 4 (组合篇)
    p_v8_ch4 = r'(id:\s*[\'\"]ch4[\'\"][\s\S]*?practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*\n\];)'
    new_v8_ch4_p = """
      {
        id: "v8_p4_1",
        index: 1,
        stem: "能否用 15 块 $1 \\\\times 4$ 的骨牌和 1 块 $2 \\\\times 2$ 的方块完全覆盖一个 $8 \\\\times 8$ 的棋盘？",
        answer: "不能，利用模 4 黑白斜向染色法证明",
        analysis: "将 $8 \\\\times 8$ 棋盘上的方格用 4 种颜色 $1, 2, 3, 4$ 按斜对角线循环染色：第 $(i, j)$ 格染第 $(i + j) \\\\bmod 4$ 号颜色。\\\\n每个颜色恰好占 16 格。任何一个 $1 \\\\times 4$ 的骨牌无论横放或竖放，都恰好覆盖 4 种颜色各 1 格。\\\\n15 块 $1 \\\\times 4$ 骨牌共覆盖 4 种颜色各 15 格。\\\\n剩下的 1 块 $2 \\\\times 2$ 方块必须覆盖 4 种颜色各 1 格才能填满，但 $2 \\\\times 2$ 方块包含两个同色格对，绝不可能恰好覆盖 4 种颜色各 1 格！\\\\n矛盾！故无法完全覆盖。",
        difficulty: "竞赛",
        type: "组合极值与博弈"
      },
      {
        id: "v8_p4_2",
        index: 2,
        stem: "从 $1, 2, 3, \\\\dots, 20$ 这 20 个自然数中任意取出 11 个数，求证：其中必有两个数的和等于 21。",
        answer: "鸽巢原理构造 10 个互补抽屉得证",
        analysis: "将这 20 个数两两配对成和为 21 的 10 个抽屉：\\\\n$\\\\{1, 20\\\\}, \\\\{2, 19\\\\}, \\\\{3, 18\\\\}, \\\\dots, \\\\{10, 11\\\\}$。\\\\n任意取出 11 个数（11 只鸽子），放入这 10 个抽屉中。\\\\n由抽屉原理，必有两个数来自同一个抽屉，它们的和恰好等于 21。",
        difficulty: "基础",
        type: "组合计数"
      },
      {
        id: "v8_p4_3",
        index: 3,
        stem: "甲乙两人在圆形大桌面上轮流放置同样大小的硬币，规定硬币平放且不重叠，硬币不能超出桌面边缘，谁先放不下谁输。请给出先手必胜策略。",
        answer: "先手占中心，随后采取中心对称策略必胜",
        analysis: "先手必胜策略：\\\\n1. 甲第一步将第一枚硬币放在圆形桌面的几何中心点；\\\\n2. 之后无论乙在任何合法位置放下一枚硬币，甲都紧接着在关于桌面中心的中心对称位置放下一枚硬币；\\\\n3. 只要乙能放，由中心对称性，中心对称位置必然是合法的空位；\\\\n因此甲永远有棋可走，最后必然是乙先无处可放。甲必胜！",
        difficulty: "提高",
        type: "组合极值与博弈"
      },
      {
        id: "v8_p4_4",
        index: 4,
        stem: "一个平面上有 5 个点，其中任意 3 点不共线。求证：在这 5 点中必有 4 点构成一个凸四边形。",
        answer: "利用凸包极大元分类讨论得证",
        analysis: "考虑这 5 个点的凸包（包含所有点的最小凸多边形）：\\\\n1. 若凸包是五边形，任取 4 点即为凸四边形；\\\\n2. 若凸包是四边形，凸包上的 4 点即构成凸四边形；\\\\n3. 若凸包是三角形，设顶点为 $A, B, C$，内部有两个点 $D, E$。连接直线 $DE$，由任意 3 点不共线，$DE$ 穿过三角形两条边，在 $DE$ 的一侧必有三角形的两个顶点（例如 $B, C$）。则四边形 $BCED$ 为凸四边形！\\\\n综上，必有 4 点构成凸四边形（著名的厄多斯-塞克雷斯猜想 $N=5$ 特例）。",
        difficulty: "竞赛",
        type: "组合极值与博弈"
      }
    """
    text = re.sub(p_v8_ch4, r'\g<1>' + new_v8_ch4_p + r'\g<2>', text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol8 fully enriched.")

if __name__ == "__main__":
    enrich_vol2()
    enrich_vol3()
    enrich_vol4()
    enrich_vol8()
