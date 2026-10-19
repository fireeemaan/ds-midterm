#!/usr/bin/env python
"""Gabungkan fragmen src/*.html menjadi index.html yang self-contained."""
import os, sys, re

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')

ORDER = [
    '00.html',
    '01.html',
    '02.html',
    '03.html',
    '04a.html', '04b.html', '04c.html',
    '05.html',
    '06a.html', '06b.html',
    '07a.html', '07b.html',
    '08a.html', '08b.html',
    '99.html',
]

def main():
    parts = []
    missing = []
    for name in ORDER:
        p = os.path.join(SRC, name)
        if not os.path.exists(p):
            missing.append(name)
            continue
        with open(p, encoding='utf-8') as f:
            parts.append(f.read().rstrip('\n'))
    if missing:
        print('MISSING:', ', '.join(missing))
        return 1

    html = '\n\n'.join(parts) + '\n'
    out = os.path.join(ROOT, 'index.html')
    with open(out, 'w', encoding='utf-8', newline='\n') as f:
        f.write(html)

    # sanity checks
    units = len(re.findall(r'<section class="unit"', html))
    opens = html.count('<section')
    closes = html.count('</section>')
    print('index.html written: %d bytes' % len(html.encode('utf-8')))
    print('sections: %d (open %d / close %d)' % (units, opens, closes))
    if opens != closes:
        print('WARNING: section tag mismatch')
        return 1
    return 0

if __name__ == '__main__':
    sys.exit(main())
