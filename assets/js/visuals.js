/* ============================================================
   visuals.js — membangun isi visual (SVG/DOM) dari data
   ============================================================ */
(function () {
  'use strict';

  /* ---------- deterministic RNG ---------- */
  function rng(seed) {
    let s = seed >>> 0;
    return function () {
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }
  function gauss(r) {
    let u = 0, v = 0;
    while (u === 0) u = r();
    while (v === 0) v = r();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  /* ---------- 1. hero particle field ---------- */
  function heroCanvas() {
    const cv = document.getElementById('hero-canvas');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let w, h, pts = [], raf = null;
    const COUNT = window.innerWidth < 700 ? 38 : 74;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function build() {
      const r = rng(7);
      pts = [];
      for (let i = 0; i < COUNT; i++) {
        pts.push({
          x: r() * w, y: r() * h,
          vx: (r() - 0.5) * 0.22, vy: (r() - 0.5) * 0.22,
          r: 0.9 + r() * 1.7
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // links
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 26000) {
            const a = (1 - d2 / 26000) * 0.30;
            ctx.strokeStyle = 'rgba(120,200,230,' + a.toFixed(3) + ')';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(160,225,245,0.85)';
        ctx.fill();
      }
    }

    function step() {
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    resize(); build();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      step();
    } else {
      draw();
    }

    window.addEventListener('resize', function () {
      resize(); build(); draw();
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) { step(); }
    });
  }

  /* ---------- 2. histogram ---------- */
  function histogram(el, opts) {
    if (!el) return;
    const r = rng(opts.seed || 3);
    const bins = opts.bins || 22;
    const data = new Array(bins).fill(0);

    for (let i = 0; i < (opts.n || 400); i++) {
      let x;
      if (opts.shape === 'skew') x = Math.pow(r(), 2.2);
      else if (opts.shape === 'normal') x = Math.min(0.999, Math.max(0.001, 0.5 + gauss(r) * 0.16));
      else x = r();
      data[Math.min(bins - 1, Math.floor(x * bins))]++;
    }

    const max = Math.max.apply(null, data);
    el.innerHTML = '';
    data.forEach(function (v, i) {
      const b = document.createElement('div');
      b.className = 'hist-bar' + (opts.alt && i % 2 ? ' vi' : '');
      b.style.height = Math.max(2, (v / max) * 100) + '%';
      b.dataset.h = Math.max(2, (v / max) * 100);
      b.style.height = '0%';
      el.appendChild(b);
    });
  }

  /* ---------- 3. scatter ---------- */
  function scatter(el) {
    if (!el) return;
    const r = rng(11);
    el.innerHTML = '';
    for (let i = 0; i < 46; i++) {
      const x = r();
      const y = Math.min(0.97, Math.max(0.03, 0.18 + x * 0.62 + gauss(r) * 0.09));
      const d = document.createElement('div');
      d.className = 'dot';
      d.style.left = (6 + x * 88) + '%';
      d.style.top = ((1 - y) * 84 + 8) + '%';
      d.style.opacity = '0';
      el.appendChild(d);
    }
  }

  /* ---------- 4. heatmap ---------- */
  function heatmap(el) {
    if (!el) return;
    // matriks korelasi simetris 8x8 (ilustratif, mengikuti pola materi)
    const base = [
      [1.00, 0.20, 0.33, 0.43, 0.05, 0.15, 0.14, 0.23],
      [0.20, 1.00, 0.55, 0.59, 0.07, 0.18, -0.01, 0.11],
      [0.33, 0.55, 1.00, 0.76, 0.11, 0.49, 0.08, 0.21],
      [0.43, 0.59, 0.76, 1.00, 0.21, 0.34, 0.12, 0.31],
      [0.05, 0.07, 0.11, 0.21, 1.00, 0.00, 0.02, 0.07],
      [0.15, 0.18, 0.49, 0.34, 0.00, 1.00, 0.02, 0.03],
      [0.14, -0.01, 0.08, 0.12, 0.02, 0.02, 1.00, 0.36],
      [0.23, 0.11, 0.21, 0.31, 0.07, 0.03, 0.36, 1.00]
    ];

    function color(v) {
      if (v >= 0) {
        const a = 0.10 + v * 0.78;
        return 'rgba(91,140,255,' + a.toFixed(2) + ')';
      }
      const a = 0.10 + Math.abs(v) * 0.78;
      return 'rgba(255,111,145,' + a.toFixed(2) + ')';
    }

    el.innerHTML = '';
    base.forEach(function (row) {
      row.forEach(function (v) {
        const c = document.createElement('div');
        c.className = 'heat-cell';
        c.style.background = color(v);
        c.textContent = v.toFixed(2).replace('0.', '.').replace('-.', '−.');
        c.style.opacity = '0';
        el.appendChild(c);
      });
    });
  }

  /* ---------- 5. k-fold ---------- */
  function kfold(el) {
    if (!el) return;
    el.innerHTML = '';
    for (let f = 0; f < 5; f++) {
      const row = document.createElement('div');
      row.style.display = 'grid';
      row.style.gridTemplateColumns = 'repeat(5, 1fr)';
      row.style.gap = '4px';
      for (let i = 0; i < 5; i++) {
        const c = document.createElement('div');
        c.style.height = '14px';
        c.style.borderRadius = '3px';
        c.style.background = i === f ? 'rgba(255,180,84,.85)' : 'rgba(79,216,232,.35)';
        c.style.opacity = '0';
        c.dataset.row = f;
        row.appendChild(c);
      }
      el.appendChild(row);
    }
  }

  /* ---------- 6. mini grids (cleaning) ---------- */
  function miniGrid(id, kind) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = 'grid';
    el.style.gridTemplateColumns = 'repeat(4, 1fr)';
    el.style.gap = '3px';

    const pattern = {
      missing: [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      dup:     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      incon:   [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
      out:     [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
    }[kind] || [];

    el.innerHTML = '';
    pattern.forEach(function (v, i) {
      const c = document.createElement('div');
      c.style.height = '12px';
      c.style.borderRadius = '2px';
      c.style.background = v ? 'rgba(79,216,232,.34)' : 'rgba(255,111,145,.85)';
      c.dataset.bad = v ? '0' : '1';
      c.style.opacity = '0';
      el.appendChild(c);
    });

    if (kind === 'dup') {
      // baris terakhir ditandai sebagai duplikat baris pertama
      const cells = el.children;
      for (let i = 8; i < 12; i++) {
        cells[i].style.background = 'rgba(255,180,84,.8)';
        cells[i].dataset.bad = '1';
      }
    }
  }

  /* ---------- 7. binning strip ---------- */
  function binStrip(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const vals = [40, 45, 50, 60, 65, 70, 75, 80, 85, 90];
    const colors = ['#4fd8e8', '#4fd8e8', '#4fd8e8', '#4fd8e8', '#9b7bf6',
                    '#9b7bf6', '#9b7bf6', '#ffb454', '#ffb454', '#ffb454'];
    el.innerHTML = '';
    vals.forEach(function (v, i) {
      const c = document.createElement('div');
      c.className = 'bin-col';
      c.style.height = '0%';
      c.style.background = colors[i];
      c.dataset.h = (28 + (v - 40) * 1.35) + '%';
      c.title = String(v);
      el.appendChild(c);
    });
  }

  /* ---------- 8. scaling lanes ---------- */
  function scaleLane(id, values, colors, domain) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    values.forEach(function (vals, gi) {
      vals.forEach(function (v, i) {
        const d = document.createElement('div');
        d.className = 'scale-pt';
        d.style.background = colors[gi];
        const t = (v - domain[0]) / (domain[1] - domain[0]);
        d.dataset.x = (4 + t * 92) + '%';
        d.style.left = '4%';
        d.style.opacity = '0';
        el.appendChild(d);
      });
    });
  }

  /* ---------- 9. kmeans points ---------- */
  function kmeansPoints() {
    const stage = document.getElementById('kmeans-stage');
    if (!stage) return;
    const r = rng(23);
    const centers = [
      { x: 0.24, y: 0.32 }, { x: 0.72, y: 0.28 }, { x: 0.48, y: 0.74 }
    ];
    const cls = ['k1', 'k2', 'k3'];
    for (let i = 0; i < 54; i++) {
      const k = Math.floor(r() * 3);
      const c = centers[k];
      const d = document.createElement('div');
      d.className = 'cpt ' + cls[k];
      const x = Math.min(0.97, Math.max(0.03, c.x + gauss(r) * 0.075));
      const y = Math.min(0.95, Math.max(0.05, c.y + gauss(r) * 0.085));
      d.style.left = (x * 100) + '%';
      d.style.top = (y * 100) + '%';
      d.style.opacity = '0';
      stage.appendChild(d);
    }
  }

  /* ---------- 10. expose ---------- */
  window.DSViz = {
    heroCanvas: heroCanvas,
    histogram: histogram,
    scatter: scatter,
    heatmap: heatmap,
    kfold: kfold,
    miniGrid: miniGrid,
    binStrip: binStrip,
    scaleLane: scaleLane,
    kmeansPoints: kmeansPoints,
    rng: rng
  };
})();
