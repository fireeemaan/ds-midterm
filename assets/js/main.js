/* ============================================================
   main.js — GSAP core: reveal, hero, nav, progress, counters
   ============================================================ */
(function () {
  'use strict';

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const has = function (sel) { return document.querySelector(sel); };

  /* ------------------------------------------------------------
     1. HERO INTRO
     ------------------------------------------------------------ */
  function heroIntro() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (REDUCED) {
      gsap.set('.hero-line, .hero .reveal, .scroll-cue', { opacity: 1, y: 0 });
      return;
    }

    gsap.set('.hero-line', { yPercent: 118, opacity: 0 });
    gsap.set('.hero .reveal', { y: 26, opacity: 0 });

    tl.to('.hero-line', { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.12 })
      .to('.hero .reveal', { y: 0, opacity: 1, duration: 0.85, stagger: 0.09 }, '-=0.55')
      .fromTo('.scroll-cue', { opacity: 0 }, { opacity: 1, duration: 0.7 }, '-=0.35');
  }

  /* ------------------------------------------------------------
     2. GENERIC REVEAL (batch, per-element)
     ------------------------------------------------------------ */
  function reveals() {
    const items = gsap.utils.toArray('.reveal');
    if (!items.length) return;

    if (REDUCED) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y: 24 });

    ScrollTrigger.batch(items, {
      start: 'top 88%',
      once: true,
      interval: 0.08,
      batchMax: 6,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1, y: 0, duration: 0.85, stagger: 0.07, ease: 'power3.out',
          overwrite: true
        });
      }
    });
  }

  /* ------------------------------------------------------------
     3. SECTION HEADINGS — subtle scrub
     ------------------------------------------------------------ */
  function sectionHeads() {
    if (REDUCED) return;
    gsap.utils.toArray('section.unit').forEach(function (sec) {
      const num = sec.querySelector('.unit-num');
      const tag = sec.querySelector('.unit-tag');
      if (!num) return;

      gsap.fromTo(num,
        { xPercent: -6, opacity: 0.25 },
        {
          xPercent: 0, opacity: 1, ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top 85%', end: 'top 35%', scrub: 0.6 }
        });

      if (tag) {
        gsap.fromTo(tag,
          { opacity: 0, x: -8 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: sec, start: 'top 78%', once: true }
          });
      }
    });
  }

  /* ------------------------------------------------------------
     4. PROGRESS BAR + NAV ACTIVE
     ------------------------------------------------------------ */
  function progressAndNav() {
    const fill = document.getElementById('progress-fill');
    const links = gsap.utils.toArray('#navlinks a');
    const sections = gsap.utils.toArray('section.unit');

    if (fill) {
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: function (self) {
          fill.style.width = (self.progress * 100).toFixed(2) + '%';
        }
      });
    }

    // deteksi unit aktif: satu trigger global, dihitung dari offset section
    if (sections.length && links.length) {
      let currentId = '';

      const pick = function () {
        const marker = window.innerHeight * 0.42;
        let active = sections[0];
        sections.forEach(function (sec) {
          if (sec.getBoundingClientRect().top <= marker) active = sec;
        });
        const id = '#' + active.id;
        if (id === currentId) return;
        currentId = id;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === id);
        });
        const link = document.querySelector('#navlinks a[href="' + id + '"]');
        const nav = document.getElementById('navlinks');
        if (link && nav && nav.scrollWidth > nav.clientWidth + 2) {
          const target = link.offsetLeft - nav.clientWidth / 2 + link.offsetWidth / 2;
          nav.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
        }
      };

      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: pick });
      pick();

      const nav = document.getElementById('navlinks');
      if (nav) {
        const sync = function () {
          nav.classList.toggle('is-scroll', nav.scrollWidth > nav.clientWidth + 2);
        };
        sync();
        window.addEventListener('resize', sync);
        ScrollTrigger.addEventListener('refresh', sync);
      }
    }
  }

  /* ------------------------------------------------------------
     5. NUMBER COUNTERS
     ------------------------------------------------------------ */
  function counters() {
    gsap.utils.toArray('[data-count]').forEach(function (el) {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.dec || '0', 10);

      if (REDUCED) { el.textContent = target.toFixed(dec); return; }

      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: function () {
          gsap.to(obj, {
            v: target, duration: 1.15, ease: 'power2.out',
            onUpdate: function () { el.textContent = obj.v.toFixed(dec); }
          });
        }
      });
    });
  }

  /* ------------------------------------------------------------
     6. METER BARS
     ------------------------------------------------------------ */
  function meters() {
    gsap.utils.toArray('[data-meter]').forEach(function (bar) {
      const pct = bar.dataset.meter;
      if (REDUCED) { bar.style.width = pct + '%'; return; }
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 92%',
        once: true,
        onEnter: function () {
          gsap.to(bar, { width: pct + '%', duration: 1.3, ease: 'power3.out' });
        }
      });
    });
  }

  /* ------------------------------------------------------------
     7. SECTION TRANSITION VEIL (very light)
     ------------------------------------------------------------ */
  function sectionTint() {
    if (REDUCED) return;
    gsap.utils.toArray('section.unit').forEach(function (sec, i) {
      const hue = i % 2 === 0 ? 'rgba(79,216,232,.045)' : 'rgba(155,123,246,.045)';
      gsap.fromTo(sec,
        { backgroundColor: 'rgba(0,0,0,0)' },
        {
          backgroundColor: hue, ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top 70%', end: 'bottom 30%', scrub: true }
        });
    });
  }

  /* ------------------------------------------------------------
     INIT
     ------------------------------------------------------------ */
  function init() {
    if (window.DSViz) window.DSViz.heroCanvas();

    heroIntro();
    reveals();
    sectionHeads();
    progressAndNav();
    counters();
    meters();
    sectionTint();

    if (window.DSEffects) window.DSEffects.init();

    // unit picker untuk layar kecil
    const jump = document.getElementById('unit-jump');
    if (jump) {
      jump.addEventListener('change', function () {
        const target = document.querySelector(jump.value);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // refresh setelah font & gambar termuat
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
    window.addEventListener('load', function () {
      ScrollTrigger.refresh();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
