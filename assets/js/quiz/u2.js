/* Bank soal — Unit 2: Data Science Methodology (12 soal) */
window.QZ = window.QZ || {};
window.QZ[2] = [
  {
    q: 'Atasan memberi tugas "buat analisis untuk menekan churn" dengan tenggat dua hari. Setelah menelaah, analis menyadari ada tiga hal yang belum jelas: churn dihitung per bulan atau per kuartal, apakah yang dimaksud pelanggan aktif, dan apakah tujuannya menahan pelanggan atau menaikkan nilai belanja. Atasan baru bisa dihubungi besok. Tindakan yang paling sesuai metodologi adalah…',
    o: [
      'Langsung mengolah data yang tersedia agar tenggat tetap terpenuhi',
      'Menunda pekerjaan sampai bertemu atasan, tanpa menyiapkan apa pun',
      'Menyusun draf pertanyaan klarifikasi dan asumsi sementara, lalu berhenti sejenak untuk memastikan pemahaman bisnis sebelum melanjutkan',
      'Memilih algoritma paling canggih agar hasilnya meyakinkan'
    ],
    a: 2,
    e: 'Metodologi dimulai dari business understanding: memastikan pertanyaan benar sebelum data disentuh. Materi menegaskan banyak usaha habis untuk menjawab pertanyaan yang dikira benar. Menunda total juga keliru — menyiapkan draf pertanyaan adalah bagian dari klarifikasi; memilih algoritma lebih dulu justru melewati tahap pertama.',
    v: {
      t: 'steps',
      items: ['01 Business understanding', '02 Analytic approach', '03 Data requirements', '04 Data collection', '05 Data understanding', '06 Data preparation', '07 Modeling', '08 Evaluation', '09 Deployment', '10 Feedback'],
      hl: 0,
      cap: 'Klarifikasi pertanyaan adalah gerbang seluruh tahap berikutnya.'
    }
  },
  {
    q: 'Seorang pemilik usaha bertanya: "Bagaimana cara mengurangi biaya aktivitas gudang?" Analis menemukan dua kemungkinan tujuan yang berbeda: menaikkan efisiensi proses, atau menaikkan profitabilitas perusahaan. Mengapa klarifikasi ini penting sebelum memilih pendekatan analitik?',
    o: [
      'Karena pertanyaan yang sama dapat menuntut data, metrik, dan model yang berbeda bergantung tujuannya',
      'Karena analis wajib mengumpulkan seluruh data yang tersedia lebih dulu',
      'Karena efisiensi dan profitabilitas selalu diukur dengan rumus yang sama',
      'Karena tujuan bisnis tidak memengaruhi pilihan algoritma'
    ],
    a: 0,
    e: 'Bila tujuannya efisiensi, metriknya bisa waktu proses per palet; bila profitabilitas, metriknya margin. Data dan model yang dipakai jadi berbeda. Materi justru menekankan tujuan bisnis sebagai penentu pendekatan analitik, sehingga pilihan lain terbalik.',
    v: {
      t: 'tab',
      head: ['Tujuan', 'Pertanyaan analitik', 'Data yang dibutuhkan'],
      rows: [
        ['Efisiensi', 'Berapa waktu proses per palet?', 'Log waktu tiap tahap gudang'],
        ['Profitabilitas', 'Apa pendorong margin?', 'Biaya, harga jual, volume']
      ],
      hl: [[0, 0], [1, 0]],
      cap: 'Tujuan yang berbeda menurunkan kebutuhan data yang berbeda.'
    }
  },
  {
    q: 'Bank ingin tahu: "Apakah nasabah ini akan menunggak bulan depan?" Model harus menjawab ya atau tidak untuk setiap nasabah. Pendekatan analitik yang paling tepat adalah…',
    o: [
      'Regresi untuk memprediksi nilai kontinu',
      'Klasifikasi, karena jawabannya berupa kategori ya/tidak',
      'Clustering, karena nasabah dikelompokkan tanpa label',
      'Analisis korelasi, karena hanya mengukur hubungan'
    ],
    a: 1,
    e: 'Pertanyaan dengan jawaban ya/tidak adalah masalah klasifikasi — materi menyebutnya secara eksplisit. Regresi dipakai bila targetnya angka kontinu, clustering dipakai tanpa label target, dan korelasi hanya mengukur hubungan linier tanpa menghasilkan prediksi per nasabah.',
    v: {
      t: 'tab',
      head: ['Bentuk pertanyaan', 'Pendekatan'],
      rows: [
        ['Ya / tidak', 'Klasifikasi'],
        ['Berapa nilainya', 'Regresi'],
        ['Kelompok apa yang ada', 'Clustering / asosiasi'],
        ['Apakah ada hubungan', 'Deskriptif / korelasi']
      ],
      hl: [[0, 1]],
      cap: 'Pemetaan bentuk pertanyaan ke pendekatan analitik.'
    }
  },
  {
    q: 'Tim analitik diminta menjawab: "Seberapa kuat hubungan antara frekuensi kunjungan dan nilai transaksi pelanggan?" Tidak ada prediksi yang diminta, hanya gambaran pola. Pendekatan yang sesuai adalah…',
    o: [
      'Klasifikasi biner',
      'Pendekatan deskriptif',
      'Clustering hierarkis',
      'Reinforcement learning'
    ],
    a: 1,
    e: 'Materi menyatakan bila pertanyaannya menunjukkan hubungan, pendekatan deskriptif yang diperlukan. Klasifikasi butuh label kategori, clustering mengelompokkan tanpa label, dan reinforcement learning belajar dari reward — ketiganya tidak menjawab "seberapa kuat hubungan".',
    v: {
      t: 'steps',
      items: ['Pertanyaan: seberapa kuat hubungan?', 'Pendekatan deskriptif', 'Ukuran korelasi + visualisasi', 'Interpretasi untuk pengambil keputusan'],
      hl: 1,
      cap: 'Pertanyaan tentang hubungan berhenti di deskripsi, bukan prediksi.'
    }
  },
  {
    q: 'Perusahaan ingin memahami perilaku belanja pelanggan, tetapi tidak punya label kelompok dan tidak tahu sebelumnya ada berapa segmen. Pendekatan analitik yang paling sesuai adalah…',
    o: [
      'Regresi linear untuk memprediksi total belanja',
      'Clustering atau association untuk mempelajari perilaku tanpa label',
      'Klasifikasi multi-kelas dengan label segmen yang sudah ada',
      'Uji hipotesis dua sampel'
    ],
    a: 1,
    e: 'Materi menyebut untuk mempelajari perilaku manusia digunakan pendekatan clustering/association. Regresi membutuhkan target kontinu, klasifikasi membutuhkan label yang sudah ada — di sini labelnya justru belum diketahui.',
    v: {
      t: 'steps',
      items: ['Data transaksi tanpa label', 'Clustering / association', 'Segmen terbentuk dari kemiripan', 'Strategi pemasaran per segmen'],
      hl: 1,
      cap: 'Tanpa label target, clustering menjadi pilihan alami.'
    }
  },
  {
    q: 'Sebuah decision tree untuk memprediksi readmission pasien berhenti di satu leaf berisi 80 pasien, dan 60 di antaranya benar-benar readmisi ("yes"). Berapa risiko readmisi untuk pasien yang jatuh di leaf ini?',
    o: [
      '0,20',
      '0,60',
      '0,75',
      '1,25'
    ],
    a: 2,
    e: 'Bila outcome dominan adalah "yes", risiko sama dengan proporsi yes di leaf: 60/80 = 0,75. Angka 0,20 adalah proporsi pasien "no", 0,60 hanya jumlah kasus yes tanpa dibagi total, dan 1,25 melebihi batas proporsi sehingga mustahil.',
    v: {
      t: 'bar',
      labels: ['yes', 'no'],
      values: [60, 20],
      hl: 0,
      suffix: ' pasien',
      cap: 'Risiko = 60 / (60 + 20) = 0,75.'
    }
  },
  {
    q: 'Pada leaf lain, outcome dominannya adalah "no" dengan proporsi 70% dari 50 pasien. Sesuai aturan di materi, risiko readmisi untuk leaf tersebut adalah…',
    o: [
      '0,70',
      '0,30',
      '0,35',
      '0,50'
    ],
    a: 1,
    e: 'Jika outcome dominan adalah "no", risiko dihitung sebagai 1 dikurangi proporsi no: 1 − 0,70 = 0,30. Memakai 0,70 langsung akan membalik makna — itu proporsi pasien yang tidak readmisi, bukan risikonya.',
    v: {
      t: 'bar',
      labels: ['no', 'yes'],
      values: [35, 15],
      hl: 1,
      suffix: ' pasien',
      cap: '50 pasien, 70% no. Risiko yes = 1 − 0,70 = 0,30.'
    }
  },
  {
    q: 'Lima tahap awal metodologi adalah: business understanding, analytic approach, data requirements, data collection, dan data understanding. Seorang analis baru langsung mengumpulkan data dari semua sistem yang bisa diakses, lalu bingung karena sebagian besar kolom tidak relevan. Kesalahan prosesnya paling tepat dijelaskan sebagai…',
    o: [
      'Melewati tahap data requirements sehingga tidak ada definisi variabel yang dibutuhkan',
      'Melewati tahap modeling sehingga tidak ada model yang dilatih',
      'Melewati tahap deployment sehingga model tidak dipakai',
      'Melewati tahap feedback sehingga tidak ada evaluasi'
    ],
    a: 0,
    e: 'Data requirements menerjemahkan pertanyaan bisnis menjadi variabel dan sumber data yang diperlukan; melewatinya membuat pengumpulan data menjadi asal ambil. Modeling, deployment, dan feedback terjadi setelah data terkumpul, jadi bukan penyebab masalah di awal ini.',
    v: {
      t: 'steps',
      items: ['01 Business understanding', '02 Analytic approach', '03 Data requirements', '04 Data collection', '05 Data understanding'],
      hl: 2,
      cap: 'Tanpa definisi kebutuhan, pengumpulan data kehilangan arah.'
    }
  },
  {
    q: 'Saat memeriksa data yang sudah terkumpul, tim menemukan bahwa variabel "jumlah keluhan terakhir" tidak ada di sistem mana pun, padahal variabel itu penting untuk pertanyaan bisnis. Tahap mana yang harus ditinjau kembali?',
    o: [
      'Data requirements — daftar kebutuhan data harus disesuaikan atau sumber baru dicari',
      'Evaluation — model harus diuji ulang',
      'Deployment — sistem produksi harus diubah',
      'Feedback — pengguna harus memberi masukan'
    ],
    a: 0,
    e: 'Materi menempatkan data requirements dan data collection sebagai pasangan yang saling menyesuaikan: bila kebutuhan tidak tersedia, kembali ke perumusan kebutuhan atau cari sumber alternatif. Evaluation, deployment, dan feedback berada jauh setelah data siap.',
    v: {
      t: 'steps',
      items: ['03 Data requirements', '04 Data collection', '05 Data understanding', '↩ kembali ke 03 bila ada yang kurang'],
      hl: 3,
      cap: 'Alur metodologi bersifat iteratif, bukan sekali jalan.'
    }
  },
  {
    q: 'Model prediksi readmission memiliki akurasi tinggi, tetapi dokter menolak memakainya karena tidak bisa menjelaskan mengapa seorang pasien dinilai berisiko. Pilihan pendekatan yang paling sesuai dengan kebutuhan ini adalah…',
    o: [
      'Mempertahankan model apa pun asalkan akurasinya tertinggi',
      'Memakai decision tree yang mudah dipahami non-data scientist, meski akurasinya sedikit lebih rendah',
      'Menghapus semua variabel agar model sederhana',
      'Menyerahkan keputusan sepenuhnya kepada model'
    ],
    a: 1,
    e: 'Materi menekankan decision tree mudah dipahami dan diterapkan non-data scientist untuk menilai risiko pasien baru. Akurasi tertinggi tanpa bisa dijelaskan akan ditolak pengguna; menghapus semua variabel justru merusak model; menyerahkan keputusan penuh kepada model mengabaikan peran dokter.',
    v: {
      t: 'tab',
      head: ['Kriteria', 'Bobot dalam kasus ini'],
      rows: [
        ['Akurasi', 'Penting'],
        ['Interpretabilitas', 'Kritis — dokter harus bisa menjelaskan'],
        ['Kemudahan penerapan', 'Penting — dipakai rutin di ruang perawatan']
      ],
      hl: [[1, 1]],
      cap: 'Kriteria non-teknis dapat menentukan pilihan algoritma.'
    }
  },
  {
    q: 'Enam bulan setelah model churn berjalan di produksi, tim menemukan performanya menurun karena perilaku pelanggan berubah. Dalam metodologi sepuluh tahap, mekanisme yang menangani situasi ini adalah…',
    o: [
      'Tahap feedback, yang mengalirkan temuan dari deployment kembali ke modeling',
      'Tahap business understanding, karena pertanyaan bisnis berubah',
      'Tahap data collection, karena data lama harus dihapus',
      'Tahap evaluation, karena evaluasi hanya dilakukan sekali di akhir'
    ],
    a: 0,
    e: 'Tahap 10 (feedback) menutup siklus: hasil pemantauan setelah deployment menjadi masukan untuk modeling dan persiapan data berikutnya. Business understanding tidak berubah di sini, data lama tidak perlu dihapus, dan evaluasi bukan kegiatan sekali selesai.',
    v: {
      t: 'steps',
      items: ['07 Modeling', '08 Evaluation', '09 Deployment', '10 Feedback', '↩ kembali ke 07 Modeling'],
      hl: [3, 4],
      cap: 'Feedback membuat metodologi berputar, bukan berhenti di deployment.'
    }
  },
  {
    q: 'Sebuah proyek menghasilkan model dengan RMSE sangat rendah pada data uji, tetapi saat dipresentasikan tidak ada satu pun rekomendasi yang bisa dijalankan tim operasional. Berdasarkan tujuan metodologi, masalah utama proyek ini adalah…',
    o: [
      'Metrik evaluasi yang dipilih salah',
      'Data yang dikumpulkan terlalu sedikit',
      'Hasil analisis tidak diterjemahkan menjadi keputusan yang dapat dijalankan',
      'Algoritma yang dipakai terlalu sederhana'
    ],
    a: 2,
    e: 'Metodologi menekankan data yang relevan dan dimanipulasi dengan benar untuk menjawab pertanyaan yang dihadapi; bila hasilnya tidak dapat dieksekusi, rantai itu putus di penerjemahan hasil. Metrik rendah dan algoritma sederhana bukan penyebab — justru sebaliknya pada kasus ini.',
    v: {
      t: 'steps',
      items: ['Pertanyaan bisnis', 'Analisis', 'Model akurat', 'Rekomendasi yang bisa dijalankan'],
      hl: 3,
      cap: 'Akurasi bukan tujuan akhir; keputusan yang dapat dijalankanlah tujuannya.'
    }
  }
];
