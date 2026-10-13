# -*- coding: utf-8 -*-
"""Fix KaTeX single-backslash escape errors in all volumes."""

import glob
import re

KNOWN_COMMANDS = [
    'Delta', 'alpha', 'angle', 'begin', 'beta', 'bmod', 'cdot', 'circ',
    'cong', 'cos', 'dots', 'end', 'equiv', 'frac', 'gcd', 'ge', 'implies',
    'in', 'infty', 'le', 'left', 'mathbb', 'mid', 'neq', 'odot', 'overline',
    'parallel', 'perp', 'pm', 'pmod', 'right', 'sim', 'sin', 'sqrt', 'sum',
    'text', 'theta', 'times', 'to', 'triangle', 'pi', 'sigma', 'varphi',
    'prod', 'quad', 'qquad', 'cap', 'cup', 'subset', 'subseteq'
]

def fix_file(filepath):
    content = open(filepath, "r", encoding="utf-8").read()
    orig = content

    # 1. Double backslash before known LaTeX commands if currently single backslash
    for cmd in KNOWN_COMMANDS:
        # Match a single backslash before cmd (not preceded by another backslash)
        # Note: cmd must be followed by non-alpha to avoid prefix collision (e.g. \le and \left)
        # To do this safely at character level:
        pass

    # Safe character-level scanner & replacer
    i = 0
    n = len(content)
    result = []
    while i < n:
        if content[i] == '\\':
            # count backslashes
            start = i
            while i < n and content[i] == '\\':
                i += 1
            bs_count = i - start

            # Check what follows
            rest = content[i:]
            # Check if rest starts with a known command (followed by non-alpha)
            matched_cmd = None
            for cmd in KNOWN_COMMANDS:
                if rest.startswith(cmd):
                    end_idx = len(cmd)
                    if end_idx == len(rest) or not rest[end_idx].isalpha():
                        matched_cmd = cmd
                        break
            
            if matched_cmd:
                # If bs_count is odd (e.g. 1 or 3), make it even (e.g. 2 or 4)
                if bs_count % 2 == 1:
                    result.append('\\' * (bs_count + 1))
                else:
                    result.append('\\' * bs_count)
            elif rest.startswith('{') or rest.startswith('}'):
                # Set braces like \{ and \}
                if bs_count % 2 == 1:
                    result.append('\\' * (bs_count + 1))
                else:
                    result.append('\\' * bs_count)
            else:
                result.append('\\' * bs_count)
        else:
            result.append(content[i])
            i += 1

    new_content = "".join(result)
    if new_content != orig:
        open(filepath, "w", encoding="utf-8").write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes in {filepath}")

for vf in sorted(glob.glob("src/data/volumes/vol*.ts")):
    fix_file(vf)

print("Scan and fix complete.")
