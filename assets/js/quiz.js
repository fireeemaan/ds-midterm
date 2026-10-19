/* ============================================================
   QUIZ ENGINE — satu soal per tampilan, urutan acak
   Bank soal ada di assets/js/quiz/u*.js (window.QZ)
   ============================================================ */
(function () {
  'use strict';

  var BANK = window.QZ || {};

  var UNITS = {
    1: '01 · Sejarah & Perkembangan',
    2: '02 · Data Science Methodology',
    3: '03 · Mengumpulkan Data',
    4: '04 · EDA & Validasi Data',
    5: '05 · Objek Data & Cleaning',
    6: '06 · Feature Engineering',
    7: '07 · Membangun Model',
    8: '08 · Evaluasi Model'
  };

  var state = null;
  var lastTrigger = null;
  var modal, panel, body, progressBar, countEl, scoreEl, tagEl, footEl;
  var REDUCED_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------- util ---------------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------------- visualisasi ---------------- */
  function vizTable(v) {
    var h = '<div class="qa-viz"><table class="qv-table"><thead><tr>';
    v.head.forEach(function (x) { h += '<th>' + esc(x) + '</th>'; });
    h += '</tr></thead><tbody>';
    var hl = v.hl || [];
    v.rows.forEach(function (row, r) {
      h += '<tr>';
      row.forEach(function (c, ci) {
        var on = hl.some(function (p) { return p[0] === r && p[1] === ci; });
        h += '<td' + (on ? ' class="hl"' : '') + '>' + esc(c) + '</td>';
      });
      h += '</tr>';
    });
    h += '</tbody></table>';
    if (v.cap) h += '<div class="qv-cap">' + esc(v.cap) + '</div>';
    return h + '</div>';
  }

  function vizBar(v) {
    var vals = v.values.map(Number);
    var max = Math.max.apply(null, vals) || 1;
    var h = '<div class="qa-viz"><div class="qv-bars">';
    vals.forEach(function (val, i) {
      var on = (v.hl === i);
      h += '<div class="qv-bar-row' + (on ? ' hl' : '') + '">' +
        '<span>' + esc(v.labels[i]) + '</span>' +
        '<div class="qv-bar-track"><div class="qv-bar-fill" style="width:' +
        Math.max(2, Math.round(val / max * 100)) + '%"></div></div>' +
        '<span>' + esc(val) + (v.suffix ? esc(v.suffix) : '') + '</span>' +
        '</div>';
    });
    h += '</div>';
    if (v.cap) h += '<div class="qv-cap">' + esc(v.cap) + '</div>';
    return h + '</div>';
  }

  function vizSteps(v) {
    var hl = Array.isArray(v.hl) ? v.hl : [v.hl];
    var h = '<div class="qa-viz"><div class="qv-steps">';
    v.items.forEach(function (it, i) {
      h += '<div class="qv-step' + (hl.indexOf(i) > -1 ? ' hl' : '') + '">' +
        '<i>' + (i + 1) + '</i><span>' + esc(it) + '</span></div>';
    });
    h += '</div>';
    if (v.cap) h += '<div class="qv-cap">' + esc(v.cap) + '</div>';
    return h + '</div>';
  }

  function vizGrid(v) {
    var cols = v.cols || 4;
    var rows = v.rowsCount || 3;
    var hl = v.hl || [];
    var bad = v.bad || [];
    var h = '<div class="qa-viz"><div class="qv-grid" style="grid-template-columns:repeat(' + cols + ',22px)">';
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var cls = 'qv-cell';
        if (hl.some(function (p) { return p[0] === r && p[1] === c; })) cls += ' hl';
        if (bad.some(function (p) { return p[0] === r && p[1] === c; })) cls += ' bad';
        h += '<div class="' + cls + '"></div>';
      }
    }
    h += '</div>';
    if (v.cap) h += '<div class="qv-cap">' + esc(v.cap) + '</div>';
    return h + '</div>';
  }

  function vizCurve(v) {
    var W = 430, H = 230, pl = 40, pr = 16, pt = 14, pb = 32;
    var iw = W - pl - pr, ih = H - pt - pb;
    function X(x) { return pl + x * iw; }
    function Y(y) { return pt + (1 - y) * ih; }

    var d = v.pts.map(function (p, i) {
      return (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1);
    }).join(' ');

    var h = '<div class="qa-viz"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' +
      esc(v.alt || 'grafik penjelasan') + '">';

    h += '<g stroke="#1c2540" stroke-width="1">' +
      '<line x1="' + pl + '" y1="' + (pt + ih) + '" x2="' + (pl + iw) + '" y2="' + (pt + ih) + '"/>' +
      '<line x1="' + pl + '" y1="' + pt + '" x2="' + pl + '" y2="' + (pt + ih) + '"/>';

    if (v.grid !== false) {
      [0.25, 0.5, 0.75].forEach(function (g) {
        h += '<line x1="' + pl + '" y1="' + Y(g).toFixed(1) + '" x2="' + (pl + iw) + '" y2="' + Y(g).toFixed(1) +
          '" stroke-dasharray="3 5"/>';
      });
    }
    h += '</g>';

    if (v.fill) {
      h += '<path d="' + d + ' L' + X(1) + ',' + Y(0) + ' L' + X(0) + ',' + Y(0) + ' Z" fill="rgba(79,216,232,.13)"/>';
    }

    if (v.diag) {
      h += '<line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(1) + '" y2="' + Y(1) +
        '" stroke="#5d6a8a" stroke-width="1.3" stroke-dasharray="6 5"/>';
    }

    h += '<path d="' + d + '" fill="none" stroke="' + (v.color || '#4fd8e8') +
      '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>';

    (v.marks || []).forEach(function (m) {
      h += '<line x1="' + X(m.x).toFixed(1) + '" y1="' + Y(m.y || 0).toFixed(1) + '" x2="' + X(m.x).toFixed(1) +
        '" y2="' + Y(0) + '" stroke="' + (m.color || '#ff6f91') + '" stroke-width="1.3" stroke-dasharray="4 4"/>';
      h += '<text x="' + X(m.x).toFixed(1) + '" y="' + (Y(0) - 5) + '" text-anchor="middle" font-size="9" fill="' +
        (m.color || '#ff6f91') + '" font-family="Inter, sans-serif">' + esc(m.label) + '</text>';
    });

    if (v.hlpt) {
      h += '<circle cx="' + X(v.hlpt[0]).toFixed(1) + '" cy="' + Y(v.hlpt[1]).toFixed(1) +
        '" r="4.5" fill="#5ce1a6" stroke="#0a1020" stroke-width="1.5"/>';
    }

    if (v.xl) h += '<text x="' + (pl + iw / 2) + '" y="' + (H - 8) +
      '" text-anchor="middle" font-size="9.5" fill="#8492b4" font-family="Inter, sans-serif">' + esc(v.xl) + '</text>';
    if (v.yl) h += '<text transform="translate(13,' + (pt + ih / 2) + ') rotate(-90)" text-anchor="middle" font-size="9.5" fill="#8492b4" font-family="Inter, sans-serif">' + esc(v.yl) + '</text>';

    h += '</svg>';
    if (v.cap) h += '<div class="qv-cap">' + esc(v.cap) + '</div>';
    return h + '</div>';
  }

  function renderViz(v) {
    if (!v) return '';
    switch (v.t) {
      case 'tab': return vizTable(v);
      case 'bar': return vizBar(v);
      case 'steps': return vizSteps(v);
      case 'grid': return vizGrid(v);
      case 'curve': return vizCurve(v);
      default: return '';
    }
  }

  /* ---------------- deck ---------------- */
  function buildDeck(unit) {
    var pool = [];
    (BANK[unit] || []).forEach(function (q) { pool.push({ src: q, unit: +unit }); });

    pool = shuffle(pool).map(function (item) {
      var q = item.src;
      var order = shuffle([0, 1, 2, 3]);
      return {
        unit: item.unit,
        q: q.q,
        o: q.o,
        a: q.a,
        e: q.e,
        v: q.v,
        order: order,
        correctIdx: order.indexOf(q.a),
        done: false,
        picked: null,
        revealed: false
      };
    });
    return pool;
  }

  /* ---------------- render ---------------- */
  function render(scrollToAnswer) {
    var q = state.deck[state.i];
    var total = state.deck.length;

    countEl.textContent = 'Soal ' + (state.i + 1) + ' / ' + total;
    tagEl.textContent = UNITS[state.unit] || 'Latihan';
    progressBar.style.width = ((state.i + 1) / total * 100) + '%';

    var answered = state.deck.filter(function (d) { return d.done; }).length;
    scoreEl.innerHTML = 'Benar <b>' + state.correct + '</b> · Dijawab ' + answered;

    var h = '<div class="quiz-stem">' + esc(q.q) + '</div><div class="quiz-opts" id="qopts">';
    q.order.forEach(function (optIdx, pos) {
      h += '<button class="quiz-opt" data-pos="' + pos + '" data-opt="' + optIdx + '">' +
        '<span class="key">' + 'ABCD'.charAt(pos) + '</span><span>' + esc(q.o[optIdx]) + '</span></button>';
    });
    h += '</div>';

    var showAns = q.done || q.revealed;
    h += '<div class="quiz-answer" id="qans"' + (showAns ? '' : ' hidden') + '>' +
      '<div class="qa-label">Jawaban &amp; Penjelasan</div>' +
      '<div class="qa-correct">' + (showAns ? '✓ ' + 'ABCD'.charAt(q.correctIdx) + '. ' + esc(q.o[q.a]) : '') + '</div>' +
      '<div class="qa-why">' + (showAns ? esc(q.e) : '') + '</div>' +
      (showAns ? renderViz(q.v) : '') +
      '</div>';

    body.innerHTML = h;
    body.scrollTop = 0;

    // setelah dijawab/dibuka, geser panel jawaban ke dalam pandangan
    if (scrollToAnswer && showAns) {
      var ansEl = document.getElementById('qans');
      if (ansEl) {
        var space = body.clientHeight;
        var ansH = ansEl.offsetHeight;
        // bila panel jawaban muat, rata-kan bagian bawahnya; bila tidak, rata-kan atasnya
        var target = (ansH <= space - 24)
          ? (ansEl.offsetTop + ansH - space + 14)
          : (ansEl.offsetTop - 12);
        body.scrollTo({ top: Math.max(0, target), behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
      }
    }

    // tandai opsi
    var opts = body.querySelectorAll('.quiz-opt');
    Array.prototype.forEach.call(opts, function (btn) {
      var optIdx = +btn.getAttribute('data-opt');
      if (showAns) {
        btn.disabled = true;
        if (optIdx === q.a) btn.classList.add('correct');
        else if (q.picked === optIdx) btn.classList.add('wrong');
      }
      btn.addEventListener('click', function () { pick(optIdx); });
    });

    renderFoot();
  }

  function renderFoot() {
    var q = state.deck[state.i];
    var showAns = q.done || q.revealed;
    var last = state.i === state.deck.length - 1;

    footEl.innerHTML =
      '<button class="qbtn ghost" id="qreveal"' + (showAns ? ' disabled' : '') + '>Tampilkan jawaban</button>' +
      '<span class="spacer"></span>' +
      '<button class="qbtn" id="qprev"' + (state.i === 0 ? ' disabled' : '') + '>← Sebelumnya</button>' +
      '<button class="qbtn primary" id="qnext">' + (last ? 'Lihat hasil →' : 'Berikutnya →') + '</button>';

    document.getElementById('qreveal').addEventListener('click', reveal);
    document.getElementById('qprev').addEventListener('click', function () {
      if (state.i > 0) { state.i--; render(); }
    });
    document.getElementById('qnext').addEventListener('click', function () {
      if (last) summary(); else { state.i++; render(); }
    });
  }

  function pick(optIdx) {
    var q = state.deck[state.i];
    if (q.done || q.revealed) return;
    q.done = true;
    q.picked = optIdx;
    if (optIdx === q.a) state.correct++;
    render(true);
  }

  function reveal() {
    var q = state.deck[state.i];
    if (q.done || q.revealed) return;
    q.revealed = true;
    render(true);
  }

  function summary() {
    var total = state.deck.length;
    var answered = state.deck.filter(function (d) { return d.done; }).length;
    var pct = Math.round(state.correct / total * 100);

    tagEl.textContent = UNITS[state.unit] || 'Latihan';
    countEl.textContent = 'Selesai';
    progressBar.style.width = '100%';
    scoreEl.innerHTML = 'Benar <b>' + state.correct + '</b> / ' + total;

    body.innerHTML =
      '<div class="quiz-summary">' +
      '<div class="big">' + pct + '%</div>' +
      '<p>' + state.correct + ' benar dari ' + total + ' soal' +
      (answered < total ? ' · ' + (total - answered) + ' soal hanya dilihat jawabannya' : '') + '</p>' +
      '<div class="detail">Skor dihitung dari seluruh soal pada sesi ini. Ulangi untuk urutan dan pilihan yang baru.</div>' +
      '</div>';

    footEl.innerHTML =
      '<button class="qbtn ghost" id="qrestart">Ulangi (acak baru)</button>' +
      '<span class="spacer"></span>' +
      '<button class="qbtn primary" id="qclose2">Tutup</button>';

    document.getElementById('qrestart').addEventListener('click', function () { open(state.unit); });
    document.getElementById('qclose2').addEventListener('click', close);
  }

  /* ---------------- modal ---------------- */
  function ensureModal() {
    if (modal) return;
    modal = document.createElement('div');
    modal.className = 'quiz-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Latihan soal');
    modal.innerHTML =
      '<div class="quiz-panel">' +
        '<div class="quiz-head">' +
          '<span class="quiz-tag" id="qtag">Latihan</span>' +
          '<span class="quiz-count" id="qcount">Soal</span>' +
          '<span class="quiz-score" id="qscore"></span>' +
          '<button class="quiz-close" id="qclose" aria-label="Tutup">✕</button>' +
        '</div>' +
        '<div class="quiz-progress"><i id="qprog"></i></div>' +
        '<div class="quiz-body" id="qbody"></div>' +
        '<div class="quiz-foot" id="qfoot"></div>' +
      '</div>';
    document.body.appendChild(modal);

    panel = modal.querySelector('.quiz-panel');
    body = document.getElementById('qbody');
    progressBar = document.getElementById('qprog');
    countEl = document.getElementById('qcount');
    scoreEl = document.getElementById('qscore');
    tagEl = document.getElementById('qtag');
    footEl = document.getElementById('qfoot');

    document.getElementById('qclose').addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });

    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') { close(); return; }
      if (state && state.deck) {
        if (e.key === 'ArrowRight') { e.preventDefault(); var n = document.getElementById('qnext'); if (n) n.click(); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); var p = document.getElementById('qprev'); if (p && !p.disabled) p.click(); }
        else if (/^[1-4]$/.test(e.key)) {
          var btn = body.querySelector('.quiz-opt[data-pos="' + (parseInt(e.key, 10) - 1) + '"]');
          if (btn && !btn.disabled) btn.click();
        }
      }
    });
  }

  /* ---------------- pemilih materi ---------------- */
  function openPicker(trigger) {
    ensureModal();
    if (trigger) lastTrigger = trigger;

    state = null;
    modal.classList.add('open');
    document.documentElement.style.overflow = 'hidden';

    tagEl.textContent = 'Latihan Soal';
    countEl.textContent = '8 materi';
    scoreEl.innerHTML = '';
    progressBar.style.width = '0%';

    var h = '<div class="quiz-stem">Pilih materi yang ingin dilatih. Setiap sesi berisi soal dari satu section saja, diacak setiap kali dibuka.</div>' +
      '<div class="qp-list">';
    Object.keys(UNITS).forEach(function (k) {
      var n = (BANK[k] || []).length;
      if (!n) return;
      h += '<button class="qp-item" data-unit="' + k + '" type="button">' +
        '<span class="qp-num">' + ('0' + k).slice(-2) + '</span>' +
        '<span class="qp-name">' + esc(UNITS[k].replace(/^\d+ · /, '')) + '</span>' +
        '<span class="qp-count">' + n + ' soal</span>' +
        '<span class="qp-go">→</span></button>';
    });
    h += '</div>';

    body.innerHTML = h;
    body.scrollTop = 0;

    Array.prototype.forEach.call(body.querySelectorAll('.qp-item'), function (b) {
      b.addEventListener('click', function () { open(+b.getAttribute('data-unit')); });
    });

    footEl.innerHTML = '<span class="qp-hint">Tombol “Latihan N soal” di setiap section juga bisa dipakai langsung.</span>' +
      '<span class="spacer"></span><button class="qbtn" id="qpclose">Tutup</button>';
    document.getElementById('qpclose').addEventListener('click', close);

    var c = document.getElementById('qclose');
    if (c) c.focus();
  }

  function open(unit, trigger) {
    ensureModal();
    if (trigger) lastTrigger = trigger;

    var deck = buildDeck(unit);
    if (!deck.length) return;

    state = { unit: unit, deck: deck, i: 0, correct: 0 };
    modal.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    render();
    var c = document.getElementById('qclose');
    if (c) c.focus();
  }

  function close() {
    if (!modal) return;
    modal.classList.remove('open');
    document.documentElement.style.overflow = '';
    state = null;
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  /* ---------------- tombol di halaman ---------------- */
  var ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';

  function makeButton(unit, label, cls) {
    var b = document.createElement('button');
    b.className = 'quiz-open' + (cls ? ' ' + cls : '');
    b.type = 'button';
    b.setAttribute('data-quiz', unit);
    b.innerHTML = ICON + '<span>' + label + '</span>';
    b.addEventListener('click', function () { open(unit, b); });
    return b;
  }

  function mount() {
    // tombol per unit
    Array.prototype.forEach.call(document.querySelectorAll('section.unit[data-unit]'), function (sec) {
      var unit = +sec.getAttribute('data-unit');
      var n = (BANK[unit] || []).length;
      if (!n) return;
      var head = sec.querySelector('.unit-head');
      if (!head || head.querySelector('.quiz-open')) return;
      head.appendChild(makeButton(unit, 'Latihan ' + n + ' soal'));
    });

    // tombol global di topbar → membuka pemilih section (tidak mencampur soal)
    var bar = document.querySelector('.topbar-inner');
    if (bar && !bar.querySelector('.quiz-open.top')) {
      var total = 0;
      Object.keys(BANK).forEach(function (k) { total += BANK[k].length; });
      if (total) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'quiz-open top';
        b.setAttribute('data-quiz', 'picker');
        b.innerHTML = ICON + '<span>Latihan Soal</span>';
        b.addEventListener('click', function () { openPicker(b); });
        var jump = bar.querySelector('.unit-jump');
        if (jump) bar.insertBefore(b, jump); else bar.appendChild(b);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

  window.DSQuiz = { open: open, picker: openPicker, close: close, bank: BANK };
})();
