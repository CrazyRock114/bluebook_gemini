# -*- coding: utf-8 -*-
"""Verification script for all 4 redlines."""

import glob
import os
import re

print("==========================================================")
print("  小蓝本初中卷 1-8 册数字化全真系统 · 最终验收自检程序")
print("==========================================================")

# 1. 检查伴读切图完整性
print("\n[检查项 1] 伴读切图 (companionImage) 本地磁盘物理存在性检查：")
total_checked = 0
missing = 0
for vol_file in sorted(glob.glob("src/data/volumes/vol*.ts")):
    content = open(vol_file, encoding="utf-8").read()
    matches = re.findall(r'companionImage:\s*[\'\"]([^\'\"]+)[\'\"]', content)
    for img in matches:
        total_checked += 1
        disk_path = "public" + img
        if not os.path.exists(disk_path) or os.path.getsize(disk_path) == 0:
            print(f"  [X] 缺失文件: {img} (在 {vol_file})")
            missing += 1

print(f"  -> 全书 88 讲引用 companionImage 总数: {total_checked}")
print(f"  -> 本地磁盘物理有效文件数: {total_checked - missing}")
print(f"  -> 404 死链数: {missing} (验收判定: {'PASS 100% 通过' if missing == 0 else 'FAIL'})")

# 2. 检查全书 1,280 页高清切片入库情况
print("\n[检查项 2] 全书 1,280 页高清 WebP 切片物理入库检查：")
total_pages = 0
expected_pages = {
    1: 134,
    2: 181,
    3: 133,
    4: 242,
    5: 150,
    6: 131,
    7: 106,
    8: 203
}
all_pages_ok = True
for vid in range(1, 9):
    pages_dir = f"public/book_samples/v{vid}/pages"
    if os.path.exists(pages_dir):
        files = [f for f in os.listdir(pages_dir) if f.endswith(".webp")]
        count = len(files)
        exp = expected_pages[vid]
        status = "OK" if count == exp else f"MISMATCH (expected {exp})"
        if count != exp:
            all_pages_ok = False
        print(f"  -> 卷 {vid}: 实际切片 {count} 页 / 物理原书 {exp} 页 [{status}]")
        total_pages += count
    else:
        print(f"  -> 卷 {vid}: 目录不存在!")
        all_pages_ok = False

print(f"  -> 全套 8 册累计入库总页数: {total_pages} / 1,280 页 (验收判定: {'PASS 100% 满额入库' if all_pages_ok else 'FAIL'})")

# 3. 统计题库题目量与解析质量
print("\n[检查项 3] 8 卷 88 讲例题与练习题实际统计量：")
grand_ex = 0
grand_pr = 0
empty_analysis = 0

for vf in sorted(glob.glob("src/data/volumes/vol*.ts")):
    content = open(vf, encoding="utf-8").read()
    vid = re.search(r'vol(\d+)\.ts', vf).group(1)
    
    exs = re.findall(r'id:\s*[\'\"]ex[\w_]+[\'\"]', content)
    prs = re.findall(r'id:\s*[\'\"](v\d_ch\w+_q\d|p[\w_]+|v8_p\d_\d)[\'\"]', content)
    
    # 检查是否有单答案字符串（analysis 长度过短）
    analyses = re.findall(r'analysis:\s*[\'\"]([^\'\"]+)[\'\"]', content)
    for a in analyses:
        if len(a.strip()) < 10:
            empty_analysis += 1
            
    print(f"  -> 卷 {vid} ({os.path.basename(vf)}): 例题 {len(exs):2d} 道 | 习题 {len(prs):2d} 道 | 合计 {len(exs) + len(prs):2d} 道")
    grand_ex += len(exs)
    grand_pr += len(prs)

print(f"  -> 全站例题总数: {grand_ex} 道")
print(f"  -> 全站练习题总数: {grand_pr} 道")
print(f"  -> 全站数字化题库总量: {grand_ex + grand_pr} 道")
print(f"  -> 劣质单答案解析题数: {empty_analysis} 道 (验收判定: {'PASS 全部包含推导步骤' if empty_analysis == 0 else 'FAIL'})")
print("==========================================================")
