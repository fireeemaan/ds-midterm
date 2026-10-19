/* Validasi bank soal: node tools/valquiz.js */
global.window = {};
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'assets', 'js', 'quiz');
for (let i = 1; i <= 8; i++) require(path.join(dir, 'u' + i + '.js'));

const QZ = global.window.QZ;
const vt = new Set(['tab', 'bar', 'steps', 'grid', 'curve']);
let total = 0;
const errs = [];

Object.keys(QZ).forEach(function (k) {
  const arr = QZ[k];
  total += arr.length;
  console.log('Unit ' + k + ' = ' + arr.length + ' soal');
  const seen = new Set();
  arr.forEach(function (q, i) {
    const tag = 'U' + k + '#' + (i + 1);
    if (!q.q || q.q.length < 40) errs.push(tag + ' stem pendek');
    if (!Array.isArray(q.o) || q.o.length !== 4) errs.push(tag + ' opsi != 4');
    if (!(q.a >= 0 && q.a <= 3)) errs.push(tag + ' indeks jawaban invalid');
    if (!q.e || q.e.length < 40) errs.push(tag + ' penjelasan pendek');
    if (seen.has(q.q)) errs.push(tag + ' duplikat stem');
    seen.add(q.q);
    (q.o || []).forEach(function (o, j) {
      if (!o || !String(o).trim()) errs.push(tag + ' opsi kosong #' + j);
    });
    if (!q.v) { errs.push(tag + ' tanpa visualisasi'); return; }
    if (!vt.has(q.v.t)) { errs.push(tag + ' tipe viz invalid: ' + q.v.t); return; }
    if (q.v.t === 'tab' && (!q.v.head || !q.v.rows)) errs.push(tag + ' tab tidak lengkap');
    if (q.v.t === 'bar' && (!q.v.values || q.v.values.length !== q.v.labels.length)) errs.push(tag + ' bar tidak sinkron');
    if (q.v.t === 'steps' && !q.v.items) errs.push(tag + ' steps kosong');
    if (q.v.t === 'grid' && !q.v.cols) errs.push(tag + ' grid tanpa cols');
    if (q.v.t === 'curve' && !q.v.pts) errs.push(tag + ' curve tanpa pts');
    if (q.v.t === 'tab') {
      const cols = q.v.head.length;
      q.v.rows.forEach(function (r, ri) {
        if (r.length !== cols) errs.push(tag + ' baris tabel ' + ri + ' kolomnya ' + r.length + ', header ' + cols);
      });
      (q.v.hl || []).forEach(function (p) {
        if (p[0] >= q.v.rows.length || p[1] >= cols) errs.push(tag + ' hl di luar tabel ' + p);
      });
    }
  });
});

console.log('TOTAL ' + total + ' soal');
console.log(errs.length ? 'ERRORS:\n' + errs.join('\n') : 'SEMUA VALID');
