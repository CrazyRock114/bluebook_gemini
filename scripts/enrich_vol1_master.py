# -*- coding: utf-8 -*-
"""Master Olympiad Enrichment Script for All Volumes 1-8.
Strictly adheres to:
1. 2-3 tiered examples and 2-3 targeted practice questions for key chapters.
2. Authentic problem stems and solutions from Olympiad textbooks.
3. Analysis field must contain complete mathematical derivation, no single answers.
"""

import re

def enrich_vol1_remaining():
    path = "src/data/volumes/vol1.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # ch8: 多项式的一次因式
    p_ch8 = r'(id:\s*[\'\"]ch8[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch9[\'\"])'
    new_ch8 = """
          {
            id: "ex8_1",
            index: 1,
            title: "高次方程求一次因式",
            stem: "分解因式：$x^3 - 4x^2 + x + 6$",
            analysis: "首项系数为 1，常数项为 6。可能的整数根为 $\\\\pm 1, \\\\pm 2, \\\\pm 3, \\\\pm 6$。试根：$P(-1) = -1 - 4 - 1 + 6 = 0$！所以含因式 $(x+1)$。",
            solution: "由因式定理知 $P(x)$ 有因式 $(x+1)$。用多项式除法：$x^3 - 4x^2 + x + 6 = (x+1)(x^2 - 5x + 6) = (x+1)(x-2)(x-3)$。",
            notes: "有理根定理是高次多项式因式分解的万能探测器。"
          },
          {
            id: "ex8_2",
            index: 2,
            title: "首项系数非1的有理根探测",
            stem: "分解因式：$2x^3 + 3x^2 - 8x + 3$。",
            analysis: "首项系数为 2，常数项为 3。候选有理根的分子是 3 的因数（$\\\\pm 1, \\\\pm 3$），分母是 2 的因数（$1, 2$）。试根检验：$x = 1$ 时，$2(1) + 3(1) - 8(1) + 3 = 0$！",
            solution: "因为 $P(1) = 0$，所以 $P(x)$ 必含因式 $(x - 1)$。\\n用综合除法：\\n$2x^3 + 3x^2 - 8x + 3 = (x - 1)(2x^2 + 5x - 3)$。\\n对二次式十字相乘：$2x^2 + 5x - 3 = (2x - 1)(x + 3)$。\\n故原式分解为 $(x - 1)(2x - 1)(x + 3)$。",
            notes: "有理根可能为真分数，分子整除常数项，分母整除最高次项系数。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch8_q1",
        index: 1,
        stem: "分解因式：$x^3 - 7x - 6$。",
        answer: "$(x+1)(x+2)(x-3)$",
        analysis: "常数项 $-6$ 的约数：试 $x = -1$ 得 $(-1)^3 - 7(-1) - 6 = -1+7-6 = 0$。除以 $(x+1)$ 得 $x^2 - x - 6 = (x+2)(x-3)$。故原式 $= (x+1)(x+2)(x-3)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "v1_ch8_q2",
        index: 2,
        stem: "分解因式：$x^4 - 2x^3 - 3x^2 + 4x + 4$。",
        answer: "$(x+1)^2 (x-2)^2$",
        analysis: "常数项 4 的约数有 $\\\\pm 1, \\\\pm 2, \\\\pm 4$。\\n试 $x = -1$：$1 - 2(-1) - 3(1) + 4(-1) + 4 = 1 + 2 - 3 - 4 + 4 = 0$；\\n试 $x = 2$：$16 - 2(8) - 3(4) + 4(2) + 4 = 16 - 16 - 12 + 8 + 4 = 0$。\\n因此含因式 $(x+1)(x-2) = x^2 - x - 2$。\\n多项式长除法除以 $(x^2 - x - 2)$ 得商式为 $x^2 - x - 2 = (x+1)(x-2)$。\\n故原式 $= (x+1)^2 (x-2)^2$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "v1_ch8_q3",
        index: 3,
        stem: "求多项式 $P(x) = 3x^3 - 5x^2 - 11x - 3$ 在整数范围内的全部一次因式并完成分解。",
        answer: "$(x-3)(3x+1)(x+1)$",
        analysis: "首项系数 3，常数项 -3。候选根为 $\\\\pm 1, \\\\pm 3, \\\\pm 1/3$。\\n试 $x = 3$：$3(27) - 5(9) - 11(3) - 3 = 81 - 45 - 33 - 3 = 0$。含因式 $(x-3)$。\\n试 $x = -1$：$3(-1) - 5(1) - 11(-1) - 3 = -3 - 5 + 11 - 3 = 0$。含因式 $(x+1)$。\\n除以 $(x-3)(x+1) = x^2 - 2x - 3$，商为 $(3x+1)$。\\n故原式分解为 $(x-3)(x+1)(3x+1)$。",
        difficulty: "提高",
        type: "因式分解"
      }
    """
    text = re.sub(p_ch8, lambda m: m.group(1) + new_ch8 + m.group(3), text)

    # ch9: 待定系数法
    p_ch9 = r'(id:\s*[\'\"]ch9[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch10[\'\"])'
    new_ch9 = """
          {
            id: "ex9_1",
            index: 1,
            title: "待定系数分解四次式",
            stem: "分解因式：$x^4 - x^3 - 5x^2 - 6x - 4$",
            analysis: "经检验无一次有理因式。设原式 $= (x^2 + ax + b)(x^2 + cx + d)$，常数项 $bd = -4$。",
            solution: "设 $x^4 - x^3 - 5x^2 - 6x - 4 = (x^2+ax+b)(x^2+cx+d)$。\\n由 $bd = -4$，取整数组合测试 $b=1, d=-4$ 或 $b=-1, d=4$ 或 $b=2, d=-2$。\\n当取 $b=1, d=-4$ 时，可解得 $a=1, c=-2$。\\n检验三次项与一次项均成立！\\n故原式 $= (x^2 + x + 1)(x^2 - 2x - 4)$。",
            notes: "结合常数项的有限约数分解，待定系数法百发百中。"
          },
          {
            id: "ex9_2",
            index: 2,
            title: "双二次四次式的待定分解",
            stem: "分解因式：$x^4 - 7x^2 + 1$。",
            analysis: "四次项与常数项均为正平方项，采用配方或设待定系数法：$(x^2 + 1)^2 - 9x^2$。",
            solution: "解法一（待定系数）：设 $x^4 - 7x^2 + 1 = (x^2 + ax + 1)(x^2 - ax + 1)$。\\n展开得 $x^4 + (2 - a^2)x^2 + 1$。\\n令 $2 - a^2 = -7 \\\\implies a^2 = 9 \\\\implies a = 3$。\\n故原式 $= (x^2 + 3x + 1)(x^2 - 3x + 1)$。\\n解法二（配方添项）：原式 $= (x^4 + 2x^2 + 1) - 9x^2 = (x^2 + 1)^2 - (3x)^2 = (x^2 + 3x + 1)(x^2 - 3x + 1)$。",
            notes: "待定系数与配方裂项互相印证，殊途同归。"
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
        analysis: "设原式 $= (x^2 + 2x + k)^2 = x^4 + 4x^3 + (2k+4)x^2 + 4kx + k^2$。比较系数得 $6p = 2k+4, 4q = 4k, r = k^2$。当 $k=1$ 时即得 $p=1, q=1, r=1$。",
        difficulty: "提高",
        type: "恒等式证明"
      },
      {
        id: "v1_ch9_q2",
        index: 2,
        stem: "分解因式：$x^4 + 4x^3 + 14x^2 + 20x + 25$。",
        answer: "$(x^2 + 2x + 5)^2$",
        analysis: "常数项为 25，二次项为 14。设原式 $= (x^2 + ax + 5)^2 = x^4 + 2ax^3 + (a^2 + 10)x^2 + 10ax + 25$。\\n比较三次项系数：$2a = 4 \\\\implies a = 2$。\\n检验二次项：$a^2 + 10 = 4 + 10 = 14$ 吻合！\\n检验一次项：$10a = 20$ 吻合！\\n故原式完全平方式为 $(x^2 + 2x + 5)^2$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "v1_ch9_q3",
        index: 3,
        stem: "设多项式 $x^4 - 4x^3 + 10x^2 - 12x + 9$ 能分解为两个实系数二次三项式的平方，求其因式分解式。",
        answer: "$(x^2 - 2x + 3)^2$",
        analysis: "设原式 $= (x^2 - 2x + c)^2 = x^4 - 4x^3 + (2c + 4)x^2 - 4cx + c^2$。\\n由常数项 $c^2 = 9$，取 $c = 3$。\\n比较系数：二次项 $2c + 4 = 10$ 吻合，一次项 $-4c = -12$ 吻合。\\n故原式分解为 $(x^2 - 2x + 3)^2$。",
        difficulty: "竞赛",
        type: "因式分解"
      }
    """
    text = re.sub(p_ch9, lambda m: m.group(1) + new_ch9 + m.group(3), text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol1 fully enriched.")

if __name__ == "__main__":
    enrich_vol1_remaining()
