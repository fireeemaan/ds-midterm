/* ============================================================
   effects-b.js — animasi Unit 5–8
   ============================================================ */
(function () {
  'use strict';
  if (!window.gsap) return;
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const G = window.gsap;

  /* ---------- U5: mini grids ---------- */
  function miniGrids() {
    ['missing', 'dup', 'incon', 'out'].forEach(function (k) {
      const id = 'mini-' + k;
      const el = document.getElementById(id);
      if (!el) return;
      const cells = el.children;

      if (REDUCED) {
        for (let i = 0; i < cells.length; i++) cells[i].style.opacity = '1';
        return;
      }

      G.to(cells, {
        opacity: 1, duration: 0.3, stagger: 0.02,
        scrollTrigger: { trigger: el, start: 'top 92%', once: true }
      });

      // sel bermasalah "berdenyut" lalu memudar (diperbaiki)
      const bad = el.querySelectorAll('[data-bad="1"]');
      if (bad.length) {
        G.to(bad, {
          backgroundColor: 'rgba(92,225,166,.7)',
          repeat: 1, yoyo: true, duration: 0.55, delay: 1.1,
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        });
      }
    });
  }

  /* ---------- U6: encoding table ---------- */
  function encTable() {
    const t = document.getElementById('enc-table');
    if (!t || REDUCED) return;
    const cells = t.querySelectorAll('.enc-cell');

    G.from(cells, {
      opacity: 0, y: 6, duration: 0.35, stagger: 0.03,
      scrollTrigger: { trigger: t, start: 'top 88%', once: true }
    });
  }

  /* ---------- U6: scaling lanes ---------- */
  function lanes() {
    const raw = document.getElementById('lane-raw');
    const scaled = document.getElementById('lane-scaled');
    if (!raw || !scaled) return;

    // harga 10..60, terjual 120..600 (contoh materi)
    const price = [10, 30, 60];
    const sold = [120, 400, 600];

    window.DSViz.scaleLane('lane-raw', [price, sold], ['#ffb454', '#4fd8e8'], [0, 600]);
    window.DSViz.scaleLane('lane-scaled', [price.map(function (v) { return v / 60; }),
                                            sold.map(function (v) { return v / 600; })],
                           ['#ffb454', '#4fd8e8'], [0, 1]);

    if (REDUCED) {
      [raw, scaled].forEach(function (lane) {
        Array.prototype.forEach.call(lane.children, function (d) {
          d.style.left = d.dataset.x; d.style.opacity = '0.95';
        });
      });
      return;
    }

    // sebelum: semua titik berangkat dari kiri, lalu menyebar ke posisi aslinya
    const rawDots = raw.querySelectorAll('.scale-pt');

    G.to(rawDots, {
      left: function (i, t) { return t.dataset.x; },
      opacity: 0.95, duration: 0.8, stagger: 0.04, ease: 'power2.out',
      scrollTrigger: { trigger: raw, start: 'top 90%', once: true }
    });

    const scaledDots = scaled.querySelectorAll('.scale-pt');
    G.to(scaledDots, {
      left: function (i, t) { return t.dataset.x; },
      opacity: 0.95, duration: 0.9, stagger: 0.04, ease: 'power2.out',
      scrollTrigger: { trigger: scaled, start: 'top 90%', once: true }
    });
  }

  /* ---------- U6: bin strip ---------- */
  function bins() {
    const el = document.getElementById('bin-eqwidth');
    if (!el) return;
    const cols = el.querySelectorAll('.bin-col');

    if (REDUCED) {
      cols.forEach(function (c) { c.style.height = c.dataset.h; });
      return;
    }

    G.to(cols, {
      height: function (i, t) { return t.dataset.h; },
      duration: 0.75, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    });
  }

  /* ---------- U6: scree bars ---------- */
  function scree() {
    const g = document.getElementById('scree-bars');
    if (!g || REDUCED) return;
    G.from(g.querySelectorAll('rect'), {
      scaleY: 0, transformOrigin: 'bottom center', duration: 0.8, stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: g, start: 'top 88%', once: true }
    });
  }

  /* ---------- U7: kmeans ---------- */
  function kmeans() {
    const stage = document.getElementById('kmeans-stage');
    const label = document.getElementById('km-label');
    if (!stage) return;

    window.DSViz.kmeansPoints();
    const pts = stage.querySelectorAll('.cpt');
    const cents = stage.querySelectorAll('.centroid');

    if (REDUCED) {
      pts.forEach(function (p) { p.style.opacity = '0.9'; });
      return;
    }

    G.to(pts, {
      opacity: 0.9, duration: 0.5, stagger: 0.012,
      scrollTrigger: { trigger: stage, start: 'top 88%', once: true }
    });

    // tiga iterasi: centroid bergerak menuju pusat cluster
    const moves = [
      [{ left: '24%', top: '32%' }, { left: '72%', top: '28%' }, { left: '48%', top: '74%' }],
      [{ left: '26%', top: '36%' }, { left: '69%', top: '33%' }, { left: '50%', top: '70%' }],
      [{ left: '28%', top: '38%' }, { left: '67%', top: '35%' }, { left: '51%', top: '67%' }]
    ];

    const tl = G.timeline({
      scrollTrigger: { trigger: stage, start: 'top 75%', once: true },
      delay: 0.8
    });

    moves.forEach(function (step, i) {
      tl.to(cents, {
        left: function (j) { return step[j].left; },
        top: function (j) { return step[j].top; },
        duration: 0.9, ease: 'power2.inOut',
        onStart: function () {
          if (label) label.textContent = 'iterasi ' + (i + 1) + ' — centroid diperbarui';
        }
      });
      tl.to(pts, {
        scale: 1.12, duration: 0.16, yoyo: true, repeat: 1, stagger: 0.004
      }, '-=0.35');
    });

    tl.call(function () {
      if (label) label.textContent = 'konvergen — penempatan tidak berubah';
    });
  }

  /* ---------- U7: dendrogram ---------- */
  function dendro() {
    const svg = document.getElementById('dendro');
    if (!svg || REDUCED) return;
    const paths = svg.querySelectorAll('path');

    paths.forEach(function (p, i) {
      const len = p.getTotalLength ? p.getTotalLength() : 200;
      G.fromTo(p,
        { strokeDasharray: len, strokeDashoffset: len },
        {
          strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut', delay: i * 0.12,
          scrollTrigger: { trigger: svg, start: 'top 85%', once: true }
        });
    });
  }

  /* ---------- U8: ROC ---------- */
  function roc() {
    const curve = document.getElementById('roc-curve');
    const area = document.getElementById('roc-area');
    if (!curve || REDUCED) return;

    const len = curve.getTotalLength();
    G.fromTo(curve,
      { strokeDasharray: len, strokeDashoffset: len },
      {
        strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut',
        scrollTrigger: { trigger: curve, start: 'top 88%', once: true }
      });

    if (area) {
      G.from(area, {
        opacity: 0, duration: 1.1, delay: 0.9,
        scrollTrigger: { trigger: curve, start: 'top 88%', once: true }
      });
    }

    const pt = document.querySelector('.roc-pt');
    if (pt) {
      G.from(pt, {
        scale: 0, transformOrigin: 'center', duration: 0.6, delay: 1.3,
        ease: 'back.out(2)',
        scrollTrigger: { trigger: curve, start: 'top 88%', once: true }
      });
    }
  }

  /* ---------- U8: confusion matrix ---------- */
  function cm() {
    const cells = document.querySelectorAll('.cm-cell');
    if (!cells.length || REDUCED) return;
    G.from(cells, {
      opacity: 0, scale: 0.94, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: cells[0], start: 'top 90%', once: true }
    });
  }

  window.DSEffectsB = function () {
    miniGrids();
    encTable();
    lanes();
    bins();
    scree();
    kmeans();
    dendro();
    roc();
    cm();
  };
})();
