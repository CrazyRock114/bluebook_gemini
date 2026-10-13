# -*- coding: utf-8 -*-
"""Enrich Vol 1 and Vol 2 with authentic competition problems."""

import re

def enrich_vol1():
    path = "src/data/volumes/vol1.ts"
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()

    # Enrich ch5 practices
    p_ch5_pattern = r'(id:\s*[\'\"]ch5[\'\"][\s\S]*?practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch6[\'\"])'
    new_ch5_practices = """
      {
        id: "v1_ch5_q1",
        index: 1,
        stem: "分解因式：$3x^2 + 5x - 8$。（原书例15）",
        answer: "$(x - 1)(3x + 8)$",
        analysis: "将二次项系数 3 拆为 $1 \\times 3$，常数项 $-8$ 拆为 $(-1) \\times 8$。交叉相乘：$1 \\times 8 + 3 \\times (-1) = 8 - 3 = 5$，吻合一次项。故原式分解为 $(x - 1)(3x + 8)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "v1_ch5_q2",
        index: 2,
        stem: "分解因式：$12x^2 - 19xy + 7y^2$。（原书例16）",
        answer: "$(x - y)(12x - 7y)$",
        analysis: "将首项 12 拆为 $1 \\times 12$，末项 7 拆为 $(-1) \\times (-7)$。交叉相乘：$1 \\times (-7) + 12 \\times (-1) = -19$。故原式分解为 $(x - y)(12x - 7y)$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "v1_ch5_q3",
        index: 3,
        stem: "分解因式：$12x^2 - 11xy - 15y^2$。（原书习题5第5题）",
        answer: "$(3x - 5y)(4x + 3y)$",
        analysis: "将 $x^2$ 系数 12 拆为 $3 \\times 4$，$y^2$ 系数 -15 拆为 $(-5) \\times 3$。交叉试凑：$3 \\times 3 + 4 \\times (-5) = 9 - 20 = -11$。故原式分解为 $(3x - 5y)(4x + 3y)$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "v1_ch5_q4",
        index: 4,
        stem: "分解因式：$(b+c)x^2 - (b^2+c^2+3bc)x + bc(b+c)$。（原书习题5第11题）",
        answer: "(x - b - c)[(b+c)x - bc]",
        analysis: "将首项系数 $(b+c)$ 拆为 $1 \\times (b+c)$，常数项 $bc(b+c)$ 拆为 $[-(b+c)] \\times (-bc)$。交叉相乘求和：$1 \\times (-bc) + (b+c) \\times [-(b+c)] = -bc - (b+c)^2 = -(b^2+c^2+3bc)$，恰为一次项系数！故原式分解为 $(x - b - c)[(b+c)x - bc]$。",
        difficulty: "竞赛",
        type: "因式分解"
      }
    """
    text = re.sub(p_ch5_pattern, r'\g<1>' + new_ch5_practices + r'\g<2>', text)

    # Enrich ch6 examples & practices
    p_ch6_pattern = r'(id:\s*[\'\"]ch6[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch7[\'\"])'
    new_ch6_examples = """
          {
            id: "ex6_1",
            index: 1,
            title: "二元二次多项式长十字分解",
            stem: "分解因式：$2x^2 + 5xy + 2y^2 + 4x + 5y + 2$。",
            analysis: "先对二次部分 $2x^2 + 5xy + 2y^2$ 十字相乘分解为 $(2x+y)(x+2y)$。再将常数项 2 拆为 $1 \\times 2$ 进行常数项校准匹配。",
            solution: "1. 二次部分：$2x^2+5xy+2y^2 = (2x+y)(x+2y)$；\\n2. 设原式 $= (2x+y+c_1)(x+2y+c_2)$；\\n3. 比较常数项 $c_1 c_2 = 2$，一次项 $2c_2 + c_1 = 4$ 且 $c_2 + 2c_1 = 5$；\\n4. 解得 $c_1 = 2, c_2 = 1$；\\n5. 检验常数项 $2 \\times 1 = 2$ 吻合。故原式 $= (2x+y+2)(x+2y+1)$。",
            notes: "双十字长相乘法是处理二元二次式的标准武器。"
          },
          {
            id: "ex6_2",
            index: 2,
            title: "三元二次齐次式长十字相乘",
            stem: "分解因式：$x^2 - 6xy + 9y^2 - 5xz + 15yz + 6z^2$。（原书例3）",
            analysis: "观察 $x, y$ 二次项为完全平方式 $(x-3y)^2$。令 $u = x-3y$ 降元。",
            solution: "原式重组为：$(x - 3y)^2 - 5z(x - 3y) + 6z^2$。\\n令 $u = x - 3y$，原式化为 $u^2 - 5zu + 6z^2$。\\n十字相乘分解：$u^2 - 5zu + 6z^2 = (u - 2z)(u - 3z)$。\\n代回 $u$：原式 $= (x - 3y - 2z)(x - 3y - 3z)$。",
            notes: "视多项为一元，高维长十字转化为一元二次经典十字相乘。"
          },
          {
            id: "ex6_3",
            index: 3,
            title: "含参二元二次式可分解性充要条件",
            stem: "实数 $m$ 为何值时，多项式 $x^2 + 7xy - 18y^2 - 5x + my - 24$ 可以分解为两个一次因式的乘积？（原书例7）",
            analysis: "二次部分 $x^2 + 7xy - 18y^2 = (x + 9y)(x - 2y)$。常数项 -24 拆为两个整数之积，必须能与 $x$ 的一次项系数 -5 匹配。",
            solution: "因为常数项为 -24，且要组合出 $-5x$，对 $x^2 - 5x - 24$ 十字相乘：\\n拆分为 $(x - 8)(x + 3)$，即常数项拆为 $-8$ 与 $+3$。\\n因此分解结构必然有两种可能：\\n情况1：$(x + 9y - 8)(x - 2y + 3)$，交叉展开 $y$ 的一次项：$9y \\times 3 + (-2y) \\times (-8) = 27y + 16y = 43y$，此时 $m = 43$；\\n情况2：$(x + 9y + 3)(x - 2y - 8)$，交叉展开 $y$ 的一次项：$9y \\times (-8) + (-2y) \\times 3 = -72y - 6y = -78y$，此时 $m = -78$。\\n综上，$m = 43$ 或 $m = -78$。",
            notes: "由二次项与纯常数项的双重锁定，确定交叉一次项未知参数。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "p6_1",
        index: 1,
        stem: "分解因式：$x^2 - y^2 + 2x - 4y - 3$。",
        answer: "$(x-y-1)(x+y+3)$",
        analysis: "配方或主元法：原式 $= (x^2+2x+1) - (y^2+4y+4) = (x+1)^2 - (y+2)^2 = [(x+1)-(y+2)][(x+1)+(y+2)] = (x-y-1)(x+y+3)$。",
        difficulty: "基础",
        type: "因式分解"
      },
      {
        id: "p6_2",
        index: 2,
        stem: "分解因式：$4x^2 - 14xy + 6y^2 - 7x + y - 2$。（原书习题6第2题）",
        answer: "$(4x - 2y + 1)(x - 3y - 2)$",
        analysis: "设原式 $= (a_1 x + b_1 y + c_1)(a_2 x + b_2 y + c_2)$。二次部分 $4x^2 - 14xy + 6y^2 = (4x - 2y)(x - 3y)$。常数项 $-2 = 1 \\times (-2)$。配对长十字相乘检验：一次项 $4x(-2) + x(1) = -7x$ 吻合，$(-2y)(-2) + (-3y)(1) = 4y - 3y = y$ 吻合。故原式分解为 $(4x - 2y + 1)(x - 3y - 2)$。",
        difficulty: "提高",
        type: "因式分解"
      },
      {
        id: "p6_3",
        index: 3,
        stem: "分解因式：$a^2 - 3b^2 - 3c^2 + 10bc - 2ca - 2ab$。（原书习题6第5题）",
        answer: "$(a - 3b + c)(a + b - 3c)$",
        analysis: "按字母 $a$ 降幂整理：$a^2 - 2(b+c)a - (3b^2 - 10bc + 3c^2)$。常数部分分解为 $(3b - c)(b - 3c)$。关于 $a$ 十字相乘：$-(3b - c) + (b - 3c) = -2b - 2c = -2(b+c)$，恰为一次项系数！故原式 $= [a - (3b - c)][a + (b - 3c)] = (a - 3b + c)(a + b - 3c)$。",
        difficulty: "竞赛",
        type: "因式分解"
      }
    """
    # Replace examples and practices in ch6
    def rep_ch6(m):
        return m.group(1) + new_ch6_examples + m.group(3)
    text = re.sub(p_ch6_pattern, rep_ch6, text)

    # Enrich ch10 examples & practices
    p_ch10_pattern = r'(id:\s*[\'\"]ch10[\'\"][\s\S]*?examples:\s*\[)[\s\S]*?(practices:\s*\[)[\s\S]*?(\]\s*\n\s*\}\s*,\s*\n\s*\{\s*\n\s*id:\s*[\'\"]ch11[\'\"])'
    new_ch10_body = """
          {
            id: "ex10_1",
            index: 1,
            title: "巧解轮换三次式",
            stem: "分解因式：$a(b^2-c^2) + b(c^2-a^2) + c(a^2-b^2)$",
            analysis: "令 $a = b$，原式 $= b(b^2-c^2) + b(c^2-b^2) + 0 = 0$！由因式定理含因式 $(a-b)$。由轮换性，必同时含因式 $(b-c)$ 和 $(c-a)$。两式相差常数因子 $k$。",
            solution: "设 $a(b^2-c^2) + b(c^2-a^2) + c(a^2-b^2) = k(a-b)(b-c)(c-a)$。\\n取 $a=2, b=1, c=0$ 代入：左边 $= -2$；右边 $= -2k \\implies k = 1$。故原式 $= (a-b)(b-c)(c-a)$。",
            notes: "整个解法行云流水，优雅绝伦！"
          },
          {
            id: "ex10_2",
            index: 2,
            title: "四次轮换齐次式降维分解",
            stem: "分解因式：$a^3(b-c) + b^3(c-a) + c^3(a-b)$。（原书例2）",
            analysis: "令 $a=b$，原式立刻为 0，故含 $(a-b)(b-c)(c-a)$。原式是 4 次齐次式，商式必然是 1 次对称齐次式 $k(a+b+c)$！",
            solution: "设 $a^3(b-c) + b^3(c-a) + c^3(a-b) = k(a+b+c)(a-b)(b-c)(c-a)$。\\n比较等式两边 $a^3 b$ 系数：左边为 1；右边展开中 $-k$。\\n因此 $k = -1$。故原式 $= -(a+b+c)(a-b)(b-c)(c-a)$。",
            notes: "四次对称式必商出一次对称式 $a+b+c$。"
          },
          {
            id: "ex10_3",
            index: 3,
            title: "全差三次式巧妙求积",
            stem: "分解因式：$(a+b+c)^3 - (b+c-a)^3 - (c+a-b)^3 - (a+b-c)^3$。（原书例3）",
            analysis: "在 $a=0$ 时原式值为 0，故含因式 $a$。由轮换性，必含因式 $b, c$。故原式 $= k abc$。",
            solution: "设原式 $= k abc$。令 $a=b=c=1$ 代入：左边 $= 3^3 - 1 - 1 - 1 = 24$；右边 $= k$。解得 $k = 24$！故原式 $= 24abc$。",
            notes: "利用单字母代换检验零点，直接提取单项式因式积 $abc$。"
          }
        ]
      }
    ],
    practices: [
      {
        id: "v1_ch10_q1",
        index: 1,
        stem: "分解因式：$(a+b+c)^3 - a^3 - b^3 - c^3$。",
        answer: "$3(a+b)(b+c)(c+a)$",
        analysis: "令 $a = -b$，原式 $= c^3 - (-b)^3 - b^3 - c^3 = 0$。由因式定理与轮换性，含 $(a+b)(b+c)(c+a)$。比较三次项或代入 $a=b=c=1$：左边 $= 24$；右边 $= 8k \\implies k = 3$。故原式 $= 3(a+b)(b+c)(c+a)$。",
        difficulty: "竞赛",
        type: "因式分解"
      },
      {
        id: "v1_ch10_q2",
        index: 2,
        stem: "分解因式：$(a+b)^5 - a^5 - b^5$。（原书习题10第24题）",
        answer: "$5ab(a+b)(a^2+ab+b^2)$",
        analysis: "令 $a=0$ 得因式 $a$；同理得因式 $b$；令 $a=-b$ 得因式 $(a+b)$。展开提取 $5ab$ 后得 $5ab(a+b)(a^2+ab+b^2)$。",
        difficulty: "竞赛",
        type: "因式分解"
      },
      {
        id: "v1_ch10_q3",
        index: 3,
        stem: "分解因式：$a^4(b^2-c^2) + b^4(c^2-a^2) + c^4(a^2-b^2)$。（原书习题10第31题）",
        answer: "$(a^2-b^2)(b^2-c^2)(a^2-c^2)$",
        analysis: "令 $a^2=b^2$ 原式为 0，由轮换性含 $(a^2-b^2)(b^2-c^2)(c^2-a^2)$。原式是关于平方项的三次轮换式。代入 $a=2, b=1, c=0$ 检定常数 $k = -1$。故原式 $= (a^2-b^2)(b^2-c^2)(a^2-c^2)$。",
        difficulty: "竞赛",
        type: "因式分解"
      }
    """
    def rep_ch10(m):
        return m.group(1) + new_ch10_body + m.group(3)
    text = re.sub(p_ch10_pattern, rep_ch10, text)

    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("vol1 enriched.")

if __name__ == "__main__":
    enrich_vol1()
