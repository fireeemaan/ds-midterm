/* Bank soal — Unit 6: Feature Engineering (20 soal) */
window.QZ = window.QZ || {};
window.QZ[6] = [
  {
    q: 'Min-Max normalization diterapkan pada kolom Harga dengan nilai minimum 10 dan maksimum 60. Sebuah produk berharga 45 akan memiliki nilai ternormalisasi…',
    o: [
      '0,45',
      '0,70',
      '0,75',
      '1,45'
    ],
    a: 1,
    e: '(45 − 10) / (60 − 10) = 35 / 50 = 0,70. Angka 0,45 berasal dari membagi nilai mentah dengan 100; 0,75 dari membagi 45 dengan 60 tanpa mengurangkan minimum; 1,45 melebihi rentang 0–1 yang mustahil untuk Min-Max.',
    v: {
      t: 'tab',
      head: ['Produk', 'Harga', 'Min-Max'],
      rows: [
        ['A', '10', '0,00'],
        ['B', '30', '0,40'],
        ['?', '45', '0,70'],
        ['C', '60', '1,00']
      ],
      hl: [[2, 2]],
      cap: 'Rumus: (x − min) / (max − min).'
    }
  },
  {
    q: 'Kolom Harga bernilai 10–60 dan Jumlah Terjual bernilai 100–600. Tanpa scaling, algoritma berbasis jarak seperti KNN akan…',
    o: [
      'Memperlakukan kedua fitur setara karena keduanya numerik',
      'Didominasi Jumlah Terjual karena rentangnya jauh lebih besar, sehingga Harga hampir tidak berpengaruh',
      'Mengabaikan Jumlah Terjual karena nilainya besar',
      'Otomatis menormalkan data sebelum menghitung jarak'
    ],
    a: 1,
    e: 'Jarak Euclidean menjumlahkan selisih kuadrat; fitur dengan rentang 100–600 menyumbang selisih jauh lebih besar daripada 10–60. Akibatnya Harga nyaris tidak berpengaruh. KNN tidak menormalkan data otomatis — itulah alasan scaling diperlukan.',
    v: {
      t: 'bar',
      labels: ['Harga', 'Jumlah Terjual'],
      values: [50, 500],
      hl: 1,
      cap: 'Rentang 10× lebih besar membuat satu fitur mendominasi perhitungan jarak.'
    }
  },
  {
    q: 'Nilai ujian kelas memiliki rata-rata 75 dan simpangan baku 10. Seorang mahasiswa mendapat 90. Berapa z-score-nya?',
    o: [
      '−1,5',
      '0',
      '+1,5',
      '+15'
    ],
    a: 2,
    e: '(90 − 75) / 10 = +1,5, artinya nilai tersebut 1,5 simpangan baku di atas rata-rata. −1,5 adalah z-score untuk nilai 60, 0 untuk nilai 75, dan 15 berasal dari selisih tanpa dibagi simpangan baku.',
    v: {
      t: 'tab',
      head: ['Mahasiswa', 'Nilai', 'Z-score'],
      rows: [
        ['A', '60', '−1,5'],
        ['B', '75', '0'],
        ['C', '90', '+1,5']
      ],
      hl: [[2, 2]],
      cap: 'Standardisasi memusatkan data di mean 0 dengan satuan simpangan baku.'
    }
  },
  {
    q: 'Seorang analis memakai StandardScaler untuk data yang akan dianalisis dengan PCA dan SVM. Mengapa standardisasi lebih tepat daripada Min-Max pada kasus ini?',
    o: [
      'Karena standardisasi menghasilkan mean 0 dan simpangan baku 1, sesuai kebutuhan PCA dan SVM yang sensitif terhadap skala dan pusat data',
      'Karena Min-Max tidak dapat dipakai pada data numerik',
      'Karena standardisasi selalu menghasilkan nilai antara 0 dan 1',
      'Karena PCA mewajibkan semua nilai positif'
    ],
    a: 0,
    e: 'Materi menyebut standardisasi dipakai ketika data mendekati normal dan penting untuk algoritma seperti SVM atau PCA yang bekerja dengan varians dan pusat data. Min-Max tetap sah untuk numerik, tetapi hasilnya 0–1, bukan mean 0 — justru itu definisi normalisasi, bukan standardisasi.',
    v: {
      t: 'tab',
      head: ['Teknik', 'Hasil', 'Cocok untuk'],
      rows: [
        ['Min-Max', 'Rentang 0–1', 'KNN, neural network'],
        ['Standardisasi', 'Mean 0, sd 1', 'SVM, PCA, regresi']
      ],
      hl: [[1, 2]],
      cap: 'Pilihan scaling mengikuti asumsi algoritmanya.'
    }
  },
  {
    q: 'Data transaksi memiliki nilai 10, 100, 1.000, dan 10.000. Setelah transformasi log10, nilai 1.000 menjadi…',
    o: [
      '1',
      '2',
      '3',
      '4'
    ],
    a: 2,
    e: 'log10(1.000) = 3 karena 10³ = 1.000. Nilai 1 untuk 10, 2 untuk 100, dan 4 untuk 10.000 — sesuai tabel di materi.',
    v: {
      t: 'tab',
      head: ['Produk', 'Transaksi', 'log10(x)'],
      rows: [
        ['A', '10', '1,000'],
        ['B', '100', '2,000'],
        ['C', '1.000', '3,000'],
        ['D', '10.000', '4,000']
      ],
      hl: [[2, 2]],
      cap: 'Setiap kenaikan 10× hanya menambah 1 pada skala log.'
    }
  },
  {
    q: 'Mengapa transformasi logaritmik membantu data transaksi yang right-skewed?',
    o: [
      'Karena logaritma menghapus semua nilai ekstrem',
      'Karena logaritma memampatkan jarak antar nilai besar sehingga distribusi menjadi lebih seimbang tanpa membuang data',
      'Karena logaritma mengubah data menjadi kategori',
      'Karena logaritma menaikkan nilai kecil menjadi besar'
    ],
    a: 1,
    e: 'Logaritma memperkecil jarak nilai besar (10.000 hanya menjadi 4) sehingga kemiringan berkurang, tanpa menghapus pengamatan. Logaritma tidak menghilangkan outlier, tidak mengubah data menjadi kategori, dan justru memampatkan nilai besar — bukan menaikkan nilai kecil melampaui yang besar.',
    v: {
      t: 'curve',
      pts: [[0, 0], [0.01, 0.5], [0.03, 0.75], [0.1, 1], [0.3, 1.25], [0.6, 1.5], [1, 1.75]],
      xl: 'nilai asli',
      yl: 'log(x)',
      color: '#ffb454',
      cap: 'Kurva log: kenaikan besar di awal, lalu mendatar — inti kompresinya.'
    }
  },
  {
    q: 'Sebuah kolom berisi nilai 0 dan nilai positif. Transformasi log10 langsung gagal. Solusi yang disebut materi adalah…',
    o: [
      'Menghapus semua baris bernilai 0',
      'Memakai log1p, yaitu log(1 + x), sehingga nilai 0 tetap dapat ditransformasi',
      'Mengganti logaritma dengan pembagian 10',
      'Mengkuadratkan seluruh nilai'
    ],
    a: 1,
    e: 'Materi menyebut log1p = log(1 + x) mengatasi nilai nol karena log(1) = 0. Menghapus baris menghilangkan data, pembagian tidak mengubah kemiringan, dan pengkuadratan justru memperbesar nilai besar.',
    v: {
      t: 'tab',
      head: ['x', 'log10(x)', 'log1p(x)'],
      rows: [
        ['0', 'tidak terdefinisi', '0'],
        ['1', '0', '0,301'],
        ['10', '1', '1,041']
      ],
      hl: [[0, 2]],
      cap: 'log1p adalah jalan aman ketika data memuat nol.'
    }
  },
  {
    q: 'Kolom pendidikan berisi "SMP", "SMA", "S1" dengan tingkatan yang bermakna. Teknik encoding yang paling tepat adalah…',
    o: [
      'One-hot encoding, karena setiap kategori menjadi kolom sendiri',
      'Label encoding, karena urutan antar kategori bermakna dan dapat direpresentasikan sebagai angka bertingkat',
      'Binning, karena nilainya perlu dikelompokkan',
      'Log transform, karena kategorinya banyak'
    ],
    a: 1,
    e: 'Label encoding memberi angka unik yang mempertahankan urutan (SMP < SMA < S1), sesuai materi untuk data ordinal. One-hot menghilangkan informasi urutan, binning dan log transform tidak berlaku untuk data kategorikal.',
    v: {
      t: 'tab',
      head: ['Kategori', 'Label encoding'],
      rows: [
        ['SMP', '0'],
        ['SMA', '1'],
        ['S1', '2']
      ],
      hl: [[0, 1], [1, 1], [2, 1]],
      cap: 'Urutan bermakna → label encoding mempertahankan tingkatan.'
    }
  },
  {
    q: 'Kolom warna mobil berisi Merah, Biru, Hijau tanpa urutan logis. Jika dipakai label encoding (0, 1, 2), masalah yang muncul adalah…',
    o: [
      'Tidak ada masalah karena angka lebih ringkas',
      'Model dapat menyimpulkan adanya urutan atau jarak yang sebenarnya tidak ada (misalnya Hijau "lebih besar" dari Merah)',
      'Kolom menjadi tidak dapat diproses',
      'Nilai akan otomatis berubah menjadi one-hot'
    ],
    a: 1,
    e: 'Untuk kategori nominal, label encoding menciptakan kesan urutan dan jarak yang tidak bermakna. Materi menyarankan one-hot untuk kategori tanpa urutan. Data tetap dapat diproses, tetapi maknanya menyesatkan; konversi ke one-hot tidak terjadi otomatis.',
    v: {
      t: 'tab',
      head: ['Teknik', 'Merah', 'Biru', 'Hijau'],
      rows: [
        ['Label encoding', '0', '1', '2'],
        ['One-hot: Merah', '1', '0', '0'],
        ['One-hot: Biru', '0', '1', '0'],
        ['One-hot: Hijau', '0', '0', '1']
      ],
      hl: [[0, 0], [0, 1], [0, 2]],
      cap: 'Angka 0/1/2 pada label encoding menciptakan urutan palsu.'
    }
  },
  {
    q: 'Data pelanggan memiliki kategori Reguler, Silver, dan Gold. Jika diubah dengan one-hot encoding, baris untuk pelanggan Gold akan bernilai…',
    o: [
      'Reguler 1, Silver 0, Gold 0',
      'Reguler 0, Silver 1, Gold 0',
      'Reguler 0, Silver 0, Gold 1',
      'Reguler 2, Silver 2, Gold 2'
    ],
    a: 2,
    e: 'One-hot memberi nilai 1 hanya pada kolom kategori yang sesuai, sisanya 0 — sehingga Gold menjadi (0, 0, 1). Pilihan lain menandai kategori yang salah, dan nilai 2 bukan bagian dari one-hot.',
    v: {
      t: 'tab',
      head: ['Pelanggan', 'Reguler', 'Silver', 'Gold'],
      rows: [
        ['P1 (Reguler)', '1', '0', '0'],
        ['P2 (Silver)', '0', '1', '0'],
        ['P3 (Gold)', '0', '0', '1']
      ],
      hl: [[2, 3]],
      cap: 'Satu nilai 1 per baris; sisanya 0.'
    }
  },
  {
    q: 'Data transaksi pelanggan C01 berisi dua pembelian: 28 September 2026 dan 20 September 2026, dengan tanggal acuan 30 September 2026. Berapa Frequency dan Recency untuk C01?',
    o: [
      'Frequency 2, Recency 2 hari',
      'Frequency 2, Recency 10 hari',
      'Frequency 1, Recency 2 hari',
      'Frequency 2, Recency 30 hari'
    ],
    a: 0,
    e: 'Frequency adalah jumlah transaksi, yaitu 2. Recency dihitung dari transaksi terakhir (28 September) ke tanggal acuan (30 September) = 2 hari. Angka 10 adalah jarak ke transaksi pertama, dan 30 adalah tanggal acuan itu sendiri.',
    v: {
      t: 'tab',
      head: ['Customer', 'Total Spend', 'Frequency', 'Recency'],
      rows: [
        ['C01', 'Rp250.000', '2', '2 hari'],
        ['C02', 'Rp200.000', '1', '15 hari'],
        ['C03', 'Rp25.000', '1', '60 hari']
      ],
      hl: [[0, 2], [0, 3]],
      cap: 'Recency memakai transaksi terakhir, bukan transaksi pertama.'
    }
  },
  {
    q: 'Untuk pelanggan C03 yang bertransaksi pada 1 Agustus 2026 dengan tanggal acuan 30 September 2026, nilai Recency adalah…',
    o: [
      '30 hari',
      '31 hari',
      '60 hari',
      '61 hari'
    ],
    a: 2,
    e: 'Agustus memiliki 31 hari: sisa Agustus 30 hari (1→31) ditambah 30 hari September = 60 hari. Materi mencatat Recency C03 = 60. Angka 61 muncul bila menghitung tanggal awal dan akhir dua kali.',
    v: {
      t: 'steps',
      items: ['Transaksi terakhir: 1 Agustus 2026', 'Sisa Agustus: 30 hari', 'September: 30 hari', 'Total Recency: 60 hari'],
      hl: [3],
      cap: 'Recency = tanggal acuan − transaksi terakhir, dalam hari.'
    }
  },
  {
    q: 'Data transaksi mencatat harga 50.000 dengan quantity 4. Fitur Total_Spend yang dibuat dari perkalian keduanya bernilai…',
    o: [
      '54.000',
      '200.000',
      '12.500',
      '500.004'
    ],
    a: 1,
    e: 'Total_Spend = harga × quantity = 50.000 × 4 = 200.000. Penjumlahan menghasilkan 54.000, pembagian 12.500, dan penggabungan digit 500.004 — semuanya bukan definisi fitur turunan ini.',
    v: {
      t: 'tab',
      head: ['Harga', 'Qty', 'Total_Spend'],
      rows: [
        ['100.000', '2', '200.000'],
        ['50.000', '4', '200.000'],
        ['25.000', '1', '25.000']
      ],
      hl: [[1, 2]],
      cap: 'Fitur turunan mengubah dua kolom menjadi satu nilai yang lebih informatif.'
    }
  },
  {
    q: 'Fitur weekend_flag dibuat dengan (tanggal.dayofweek >= 5).astype(int). Untuk transaksi pada hari Sabtu, nilainya adalah…',
    o: [
      '0, karena Sabtu bukan akhir pekan dalam standar Python',
      '1, karena Sabtu dan Minggu diberi kode 5 dan 6',
      '5, karena mengikuti kode hari',
      'Tidak dapat ditentukan tanpa tahu bulannya'
    ],
    a: 1,
    e: 'Pada pandas, dayofweek Senin = 0 sampai Minggu = 6, sehingga Sabtu (5) dan Minggu (6) memenuhi >= 5 dan menghasilkan 1. Contoh materi menunjukkan transaksi hari Saturday dengan weekend_flag = 1.',
    v: {
      t: 'tab',
      head: ['Hari', 'dayofweek', 'weekend_flag'],
      rows: [
        ['Monday', '0', '0'],
        ['Tuesday', '1', '0'],
        ['Saturday', '5', '1'],
        ['Sunday', '6', '1']
      ],
      hl: [[2, 2], [3, 2]],
      cap: 'Ambang >= 5 menandai Sabtu dan Minggu.'
    }
  },
  {
    q: 'Nilai ujian 40, 45, 50, 60, 65, 70, 75, 80, 85, 90 dibagi menjadi 3 bin dengan equal width (rentang 40–90). Nilai 60 masuk kategori…',
    o: [
      'Rendah, karena di bawah rata-rata',
      'Sedang, karena berada di antara 56,67 dan 73,33',
      'Tinggi, karena di atas 56,67',
      'Tidak masuk bin mana pun'
    ],
    a: 1,
    e: 'Lebar tiap bin = (90 − 40) / 3 = 16,67, sehingga batasnya 40–56,67 (Rendah), 56,67–73,33 (Sedang), 73,33–90 (Tinggi). Nilai 60 berada di bin kedua.',
    v: {
      t: 'tab',
      head: ['Interval', 'Kategori', 'Anggota'],
      rows: [
        ['40–56,67', 'Rendah', '40, 45, 50'],
        ['56,67–73,33', 'Sedang', '60, 65, 70'],
        ['73,33–90', 'Tinggi', '75, 80, 85, 90']
      ],
      hl: [[1, 1], [1, 2]],
      cap: 'Equal width membagi rentang nilai, bukan jumlah observasi.'
    }
  },
  {
    q: 'Dengan data yang sama (40 sampai 90, sepuluh nilai), jika dipakai equal frequency (quantile) menjadi 3 kelompok, nilai 60 akan masuk kategori…',
    o: [
      'Rendah, karena berada pada kelompok pertama yang berisi 40, 45, 50, dan 60',
      'Sedang, karena 60 berada di tengah rentang',
      'Tinggi, karena nilainya di atas 50',
      'Tidak dapat ditentukan'
    ],
    a: 0,
    e: 'Equal frequency membagi berdasarkan jumlah observasi: kelompok pertama berisi 4 nilai terkecil (40, 45, 50, 60), lalu 3 nilai (65, 70, 75), lalu 3 nilai (80, 85, 90). Karena itu 60 masuk Rendah — berbeda dari equal width yang menempatkannya di Sedang.',
    v: {
      t: 'tab',
      head: ['Kategori', 'Anggota', 'Jumlah'],
      rows: [
        ['Rendah', '40, 45, 50, 60', '4'],
        ['Sedang', '65, 70, 75', '3'],
        ['Tinggi', '80, 85, 90', '3']
      ],
      hl: [[0, 1], [0, 2]],
      cap: 'Equal frequency menyeimbangkan jumlah anggota, bukan lebar interval.'
    }
  },
  {
    q: 'Perbandingan penting antara dua metode binning pada data yang sama adalah…',
    o: [
      'Equal width menghasilkan jumlah anggota 3/3/4, sedangkan equal frequency menghasilkan 4/3/3',
      'Keduanya selalu menghasilkan kelompok dengan jumlah anggota sama',
      'Equal width menghasilkan 4/3/3, sedangkan equal frequency 3/3/4',
      'Equal frequency tidak dapat dipakai pada data numerik'
    ],
    a: 0,
    e: 'Equal width membagi rentang 40–90 menjadi tiga interval sama lebar, sehingga anggota menjadi 3, 3, dan 4. Equal frequency membagi berdasarkan kuantil sehingga menjadi 4, 3, 3. Metode kedua justru dirancang agar jumlah anggota antar kelompok kurang lebih sama.',
    v: {
      t: 'tab',
      head: ['Metode', 'Rendah', 'Sedang', 'Tinggi'],
      rows: [
        ['Equal width', '3', '3', '4'],
        ['Equal frequency', '4', '3', '3']
      ],
      hl: [[0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3]],
      cap: 'Data yang sama, hasil pengelompokan berbeda — pilihan metode mengubah isi bin.'
    }
  },
  {
    q: 'Sebuah metode discretization memakai information gain dari decision tree untuk menentukan batas bin. Metode ini termasuk…',
    o: [
      'Unsupervised, karena tidak memakai label',
      'Supervised, karena melihat fitur target untuk membentuk kategori yang paling membantu membedakan kelas',
      'Equal frequency, karena membagi berdasarkan kuantil',
      'Bukan discretization, karena memakai decision tree'
    ],
    a: 1,
    e: 'Materi membedakan unsupervised (equal width, equal frequency) yang hanya melihat distribusi kolom, dan supervised yang memakai label target — contohnya entropy-based discretization dengan information gain pada decision tree. Karena memakai target, ia supervised.',
    v: {
      t: 'tab',
      head: ['Jenis', 'Contoh', 'Memakai label?'],
      rows: [
        ['Unsupervised', 'Equal width', 'Tidak'],
        ['Unsupervised', 'Equal frequency', 'Tidak'],
        ['Supervised', 'Entropy / information gain', 'Ya']
      ],
      hl: [[2, 2]],
      cap: 'Supervised discretization memilih batas yang paling memisahkan kelas target.'
    }
  },
  {
    q: 'Dataset perilaku pelanggan memiliki 200 fitur dan hanya 1.000 baris, sehingga pelatihan lambat dan model cenderung overfitting. Teknik yang paling sesuai untuk mengurangi jumlah fitur tanpa membuang informasi penting adalah…',
    o: [
      'Menambah jumlah fitur agar model lebih kaya',
      'PCA atau pemilihan fitur yang paling relevan dengan target',
      'Mengganti semua nilai dengan rata-rata',
      'Menaikkan jumlah epoch pelatihan'
    ],
    a: 1,
    e: 'Materi menyebut reduksi dimensionalitas dengan PCA atau memilih fitur paling relevan untuk menurunkan kompleksitas komputasi tanpa kehilangan informasi penting. Menambah fitur memperburuk, imputasi rata-rata merusak data, dan menambah epoch tidak mengurangi dimensi.',
    v: {
      t: 'bar',
      labels: ['Sebelum', 'Sesudah reduksi'],
      values: [200, 12],
      hl: 1,
      suffix: ' fitur',
      cap: 'Reduksi dimensionalitas memangkas fitur sambil mempertahankan informasi utama.'
    }
  }
];
