/* ============================================================
   effects.js — orkestrasi: bangun visual lalu jalankan animasi
   ============================================================ */
(function () {
  'use strict';

  function build() {
    const V = window.DSViz;
    if (!V) return;

    // U4 — histogram, scatter, heatmap
    V.histogram(document.getElementById('hist1'), { seed: 5, bins: 24, n: 620, shape: 'skew' });
    V.scatter(document.getElementById('scatter1'));
    V.heatmap(document.getElementById('heat1'));
    V.kfold(document.getElementById('kfold'));

    // U5 — mini grid masalah data
    V.miniGrid('mini-missing', 'missing');
    V.miniGrid('mini-dup', 'dup');
    V.miniGrid('mini-incon', 'incon');
    V.miniGrid('mini-out', 'out');

    // U6 — binning
    V.binStrip('bin-eqwidth');
  }

  function init() {
    build();
    if (typeof window.DSEffectsA === 'function') window.DSEffectsA();
    if (typeof window.DSEffectsB === 'function') window.DSEffectsB();
  }

  window.DSEffects = { init: init };
})();
