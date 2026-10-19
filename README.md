# DS Midterm — Rangkuman Data Science + Latihan Soal

Satu halaman web statis berbahasa Indonesia yang merangkum 8 materi Data Science
(Associate Data Scientist) lengkap dengan visualisasi animatif dan mesin kuis HOTS
per section.

**Isi:** 8 section materi, 125 soal pilihan ganda, GSAP + ScrollTrigger, tanpa build
step untuk dipakai (cukup buka `index.html`).

**Demo:** https://fireeemaan.github.io/ds-midterm/

## Menjalankan

```bash
python -m http.server 8123
# buka http://127.0.0.1:8123/index.html
```

Tidak butuh server khusus dan tidak butuh internet — GSAP, ScrollTrigger, dan font
sudah di-vendor di `assets/`.

## Struktur

```
index.html            hasil build (yang dibuka browser)
build.py              gabungkan src/*.html -> index.html
src/                  fragmen HTML per bagian (00 hero ... 99 footer)
assets/css/           base, components, sections, quiz
assets/js/            main, visuals, effects-a/b, quiz.js
assets/js/quiz/u1..u8 bank soal per section
assets/js/vendor/     gsap.min.js, ScrollTrigger.min.js
assets/fonts/         Inter + Space Grotesk (woff2, lokal)
assets/img/           gambar dari materi asli
tools/valquiz.js      validasi bank soal
tools/dumpanswers.js  cetak kunci jawaban untuk audit
```

## Build

```bash
python build.py
```

`index.html` dihasilkan dari penggabungan `src/*.html` sesuai urutan di `build.py`,
lalu dicek jumlah `<section>` buka/tutup. Setelah mengubah fragmen, jalankan ulang.

## Materi

| # | Section | Sumber |
|---|---------|--------|
| 01 | Sejarah & Perkembangan | `1_Sejarah dan Perkembangan Data Science.pdf` |
| 02 | Data Science Methodology | `2_Data Science Methodology.pdf` |
| 03 | Mengumpulkan Data | `3_Dasar-Dasar Data Science.pdf` |
| 04 | EDA & Validasi Data | `4_Menelaah dan Memvalidasi Data.pptx` |
| 05 | Objek Data & Cleaning | `5_Memahami Objek Data dan Membersihkan Data.pptx` |
| 06 | Feature Engineering | `6_Mengkonstruksi Data (Feature Engineering).pptx` |
| 07 | Membangun Model | `7_Membangun Model.pptx` |
| 08 | Evaluasi Model | `8_Mengevaluasi Model.pptx` |

Berkas sumber dan hasil ekstraksinya (`material/`, `extract/`) tidak disertakan di
repo ini — isinya materi kuliah. Yang di-commit hanya hasil olahan: halaman web,
kode, dan gambar yang dipakai di dalamnya.

## Latihan soal

125 soal pilihan ganda tipe HOTS, terpisah per section:

| Section | Jumlah |
|---------|--------|
| 01 Sejarah & Perkembangan | 10 |
| 02 Data Science Methodology | 12 |
| 03 Mengumpulkan Data | 14 |
| 04 EDA & Validasi Data | 20 |
| 05 Objek Data & Cleaning | 16 |
| 06 Feature Engineering | 19 |
| 07 Membangun Model | 17 |
| 08 Evaluasi Model | 17 |

Cara pakai:

- Tombol **Latihan Soal** di topbar membuka daftar 8 materi; pilih satu untuk mulai.
- Tombol **Latihan N soal** di header tiap section langsung membuka section itu.
- Soal dan posisi opsi diacak setiap sesi; satu soal per tampilan.
- **Tampilkan jawaban** untuk melihat kunci tanpa menjawab (tidak masuk skor).
- Setiap jawaban disertai penjelasan dan visualisasi (tabel, bar, langkah, grid, kurva).
- Navigasi: `←` `→`, angka `1`–`4`, `Esc` untuk menutup.

Bank soal divalidasi dengan:

```bash
node tools/valquiz.js
```

Cek yang dijalankan: tiap soal punya 4 opsi, indeks jawaban valid, penjelasan
non-kosong, visualisasi lengkap, tidak ada stem duplikat, dan baris tabel konsisten
dengan header.

## Catatan teknis

- Animasi memakai GSAP 3.12.5; efek menghormati `prefers-reduced-motion`.
- Visualisasi yang digenerate JS memakai RNG deterministik agar hasilnya stabil.
- Diagram kompleks memakai gambar asli dari materi (`assets/img/`).
- `build.py` memecah HTML jadi fragmen supaya tiap bagian mudah diedit terpisah.
