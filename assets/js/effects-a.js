/* ============================================================
   effects-a.js — animasi Unit 1–4
   ============================================================ */
(function () {
  'use strict';
  if (!window.gsap) return;
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const G = window.gsap;

  function once(el, vars) {
    return Object.assign({
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    }, vars);
  }

  /* ---------- U1: timeline ---------- */
  function timeline() {
    const rail = document.getElementById('tl-rail');
    const track = document.getElementById('tl-track');
    if (!rail || !track) return;

    if (REDUCED) { rail.style.transform = 'scaleX(1)'; return; }

    G.fromTo(rail, { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: track, start: 'top 82%', end: 'bottom 55%', scrub: 0.5 }
    });

    G.from(track.querySelectorAll('.tl-item'), {
      opacity: 0, y: 22, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: track, start: 'top 85%', once: true }
    });
  }

  /* ---------- U2: flowmap highlight ---------- */
  function flowmap() {
    const map = document.getElementById('flowmap');
    if (!map) return;
    const nodes = Array.prototype.slice.call(map.querySelectorAll('.flow-node'));

    if (REDUCED) { nodes.forEach(function (n) { n.classList.add('on'); }); return; }

    G.set(nodes, { opacity: 0, y: 10 });
    G.to(nodes, {
      opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: map, start: 'top 82%', once: true }
    });

    // sorot berurutan mengikuti scroll
    const order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let current = -1;

    G.timeline({
      scrollTrigger: {
        trigger: map,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: 0.6,
        onUpdate: function (self) {
          const idx = Math.min(order.length - 1, Math.floor(self.progress * order.length));
          if (idx === current) return;
          current = idx;
          nodes.forEach(function (n) { n.classList.remove('on'); });
          const target = map.querySelector('[data-step="' + order[idx] + '"]');
          if (target) target.classList.add('on');
        }
      }
    });
  }

  /* ---------- U3: pipeline pulses ---------- */
  function pipeline() {
    const svg = document.getElementById('pipeline-svg');
    if (!svg) return;
    const pulses = svg.querySelectorAll('.pulse');
    if (!pulses.length) return;

    if (REDUCED) return;

    const routes = [
      { cx: [150, 250, 340, 420, 510, 580, 640, 700], cy: [60, 60, 105, 105, 105, 105, 60, 60] },
      { cx: [150, 250, 340, 420, 510, 580, 640, 700], cy: [105, 105, 105, 105, 105, 105, 60, 60] },
      { cx: [150, 250, 340, 420, 510, 580, 640, 700], cy: [150, 150, 105, 105, 105, 105, 60, 60] }
    ];

    pulses.forEach(function (p, i) {
      const r = routes[i];
      const tl = G.timeline({ repeat: -1, delay: i * 0.55 });
      r.cx.forEach(function (x, k) {
        tl.to(p, {
          attr: { cx: x, cy: r.cy[k] },
          duration: 0.55, ease: 'power1.inOut'
        });
      });
      tl.to(p, { opacity: 0, duration: 0.25 })
        .set(p, { attr: { cx: 150, cy: r.cy[0] }, opacity: 1 });
    });

    // garis penghubung tumbuh saat masuk viewport
    svg.querySelectorAll('g[stroke="#2a3450"] path').forEach(function (p) {
      const len = p.getTotalLength ? p.getTotalLength() : 120;
      G.fromTo(p,
        { strokeDasharray: len, strokeDashoffset: len },
        {
          strokeDashoffset: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: svg, start: 'top 85%', once: true }
        });
    });
  }

  /* ---------- U4: skew curves ---------- */
  function skewCurves() {
    const svg = document.getElementById('skew-svg');
    if (!svg) return;
    const paths = svg.querySelectorAll('.skew-path');

    paths.forEach(function (p) {
      const len = p.getTotalLength ? p.getTotalLength() : 400;
      if (REDUCED) return;
      G.fromTo(p,
        { strokeDasharray: len, strokeDashoffset: len, fillOpacity: 0 },
        {
          strokeDashoffset: 0, fillOpacity: 1, duration: 1.5, ease: 'power2.inOut',
          scrollTrigger: { trigger: svg, start: 'top 80%', once: true }
        });
    });

    if (REDUCED) return;
    G.from(svg.querySelectorAll('g[stroke-dasharray] line'), {
      scaleY: 0, transformOrigin: 'bottom center', opacity: 0,
      duration: 0.6, stagger: 0.06, delay: 0.9,
      scrollTrigger: { trigger: svg, start: 'top 80%', once: true }
    });
  }

  /* ---------- U4: histogram ---------- */
  function histBars() {
    const el = document.getElementById('hist1');
    if (!el) return;
    const bars = el.querySelectorAll('.hist-bar');

    if (REDUCED) {
      bars.forEach(function (b) { b.style.height = b.dataset.h + '%'; });
      return;
    }

    G.to(bars, {
      height: function (i, t) { return t.dataset.h + '%'; },
      duration: 0.9, stagger: 0.02, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  }

  /* ---------- U4: scatter ---------- */
  function scatterDots() {
    const el = document.getElementById('scatter1');
    if (!el) return;
    const dots = el.querySelectorAll('.dot');

    if (REDUCED) { dots.forEach(function (d) { d.style.opacity = '0.85'; }); return; }

    G.to(dots, {
      opacity: 0.85, scale: 1, duration: 0.55, stagger: 0.018, ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  }

  /* ---------- U4: heatmap ---------- */
  function heat() {
    const el = document.getElementById('heat1');
    if (!el) return;
    const cells = el.querySelectorAll('.heat-cell');

    if (REDUCED) { cells.forEach(function (c) { c.style.opacity = '1'; }); return; }

    G.to(cells, {
      opacity: 1, duration: 0.4, stagger: { each: 0.012, from: 'start' },
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  }

  /* ---------- U4: boxplot ---------- */
  function boxplot() {
    const svg = document.getElementById('box-svg');
    if (!svg) return;
    const box = svg.querySelector('.box-rect');
    const median = svg.querySelector('.median-line');

    if (REDUCED || !box) return;

    G.from(box, {
      scaleX: 0, transformOrigin: 'left center', duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: svg, start: 'top 85%', once: true }
    });

    if (median) {
      G.from(median, {
        scaleY: 0, transformOrigin: 'center', duration: 0.5, delay: 0.5,
        scrollTrigger: { trigger: svg, start: 'top 85%', once: true }
      });
    }

    G.from(svg.querySelectorAll('circle'), {
      scale: 0, transformOrigin: 'center', duration: 0.4, delay: 0.9, stagger: 0.12,
      scrollTrigger: { trigger: svg, start: 'top 85%', once: true }
    });
  }

  /* ---------- U4: k-fold ---------- */
  function kfoldRows() {
    const el = document.getElementById('kfold');
    if (!el) return;
    const cells = el.querySelectorAll('div > div');

    if (REDUCED) { cells.forEach(function (c) { c.style.opacity = '1'; }); return; }

    G.to(cells, {
      opacity: 1, duration: 0.35, stagger: 0.012,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    });
  }

  /* ---------- U6: log curve ---------- */
  function logCurve() {
    const svg = document.getElementById('log-svg');
    if (!svg) return;
    const curve = svg.querySelector('.log-curve');
    if (!curve || REDUCED) return;

    const len = curve.getTotalLength();
    G.fromTo(curve,
      { strokeDasharray: len, strokeDashoffset: len },
      {
        strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut',
        scrollTrigger: { trigger: svg, start: 'top 82%', once: true }
      });
  }

  window.DSEffectsA = function () {
    timeline();
    flowmap();
    pipeline();
    skewCurves();
    histBars();
    scatterDots();
    heat();
    boxplot();
    kfoldRows();
    logCurve();
  };
})();
