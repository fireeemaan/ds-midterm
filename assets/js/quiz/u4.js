/* Bank soal — Unit 4: Menelaah & Memvalidasi Data (20 soal) */
window.QZ = window.QZ || {};
window.QZ[4] = [
  {
    q: 'Sebuah survei pendapatan menghasilkan mean Rp8,5 juta dan median Rp6 juta. Manajemen berencana menetapkan program bantuan dengan patokan "pendapatan tipikal". Ukuran mana yang lebih tepat dipakai, dan mengapa?',
    o: [
      'Mean, karena selalu mewakili nilai tipikal',
      'Median, karena distribusi miring ke kanan akibat segelintir pendapatan sangat tinggi sehingga mean tertarik naik',
      'Modus, karena pendapatan selalu unimodal',
      'Range, karena menunjukkan sebaran pendapatan'
    ],
    a: 1,
    e: 'Mean > median menandakan ekor panjang di kanan (skew positif): sebagian kecil nilai sangat besar menarik mean. Median lebih tahan terhadap outlier sehingga lebih menggambarkan "pendapatan tipikal". Modus tidak menjamin tunggal, dan range hanya mengukur sebaran, bukan pusat.',
    v: {
      t: 'bar',
      labels: ['Median', 'Mean'],
      values: [6, 8.5],
      hl: 0,
      suffix: ' jt',
      cap: 'Mean tertarik ke atas oleh nilai ekstrem; median tetap dekat pusat massa data.'
    }
  },
  {
    q: 'Nilai ujian dengan median 82 tetapi mean 74. Sebagian besar mahasiswa memperoleh nilai tinggi, sementara sedikit mahasiswa memperoleh nilai sangat rendah. Bentuk distribusinya adalah…',
    o: [
      'Skew positif, ekor memanjang ke kanan',
      'Skew negatif, ekor memanjang ke kiri',
      'Simetris, karena mean dan median berbeda tipis',
      'Tidak dapat ditentukan dari mean dan median'
    ],
    a: 1,
    e: 'Mean < median berarti nilai rendah menarik mean ke kiri, sehingga ekornya memanjang ke kiri (skew negatif). Skew positif justru ditandai mean > median. Perbedaan 8 poin jelas bukan simetris.',
    v: {
      t: 'curve',
      pts: [[0, 0], [0.1, 0.06], [0.22, 0.3], [0.34, 0.72], [0.44, 0.95], [0.55, 0.9], [0.66, 0.55], [0.78, 0.2], [0.9, 0.05], [1, 0]],
      fill: true,
      marks: [{ x: 0.32, y: 0.7, label: 'mean', color: '#ffb454' }, { x: 0.5, y: 0.9, label: 'median', color: '#e9eefb' }],
      xl: 'nilai ujian',
      yl: 'frekuensi',
      cap: 'Ekor di kiri, puncak di kanan: skew negatif, mean < median.'
    }
  },
  {
    q: 'Data gaji 100 karyawan memiliki median Rp7 juta. Sebuah kesalahan input menambahkan satu nilai Rp1 miliar. Apa yang paling mungkin terjadi pada mean dan median?',
    o: [
      'Keduanya naik dengan proporsi yang sama',
      'Mean naik sangat tajam, median hampir tidak berubah',
      'Median naik sangat tajam, mean hampir tidak berubah',
      'Keduanya tidak berubah karena hanya satu nilai'
    ],
    a: 1,
    e: 'Mean menjumlahkan seluruh nilai sehingga satu angka ekstrem menaikkannya drastis; median hanya bergantung pada posisi tengah sehingga tetap stabil. Inilah alasan median disebut lebih robust terhadap outlier.',
    v: {
      t: 'tab',
      head: ['Ukuran', 'Sebelum', 'Setelah ada outlier'],
      rows: [
        ['Median', 'Rp7 juta', 'Tetap sekitar Rp7 juta'],
        ['Mean', 'Sekitar Rp8 juta', 'Melonjak jauh di atas Rp8 juta']
      ],
      hl: [[1, 2]],
      cap: 'Satu nilai ekstrem menggeser mean, bukan median.'
    }
  },
  {
    q: 'Diberikan data nilai: 40, 45, 50, 60, 65, 70, 75, 80, 85, 90. Berapa IQR-nya, dan apa artinya?',
    o: [
      '50, yaitu selisih nilai maksimum dan minimum',
      '26,25, yaitu rentang 50% data tengah antara Q1 = 52,5 dan Q3 = 78,75',
      '35, yaitu selisih median dan Q1',
      '17,13, yaitu simpangan baku data'
    ],
    a: 1,
    e: 'Q1 = 52,5 dan Q3 = 78,75 sehingga IQR = 78,75 − 52,5 = 26,25. Angka 50 adalah range (max − min), 35 bukan selisih median−Q1 (67,5 − 52,5 = 15), dan 17,13 adalah simpangan baku.',
    v: {
      t: 'tab',
      head: ['Statistik', 'Nilai'],
      rows: [
        ['Q1', '52,5'],
        ['Median (Q2)', '67,5'],
        ['Q3', '78,75'],
        ['IQR = Q3 − Q1', '26,25']
      ],
      hl: [[3, 1]],
      cap: 'IQR mengukur sebaran 50% data tengah, bukan seluruh rentang.'
    }
  },
  {
    q: 'Sebuah box plot menunjukkan kotak dari 45 sampai 70, garis median di 58, dan dua titik terpisah di 120 dan 130. Manajer menyimpulkan "rata-rata penjualan adalah 58". Kesalahan penalaran pada pernyataan itu adalah…',
    o: [
      'Box plot tidak menampilkan mean; 58 adalah median, dan dua titik di luar whisker adalah outlier',
      'Box plot tidak dapat menampilkan median',
      'Nilai 120 dan 130 pasti kesalahan input',
      'Kotak 45–70 menunjukkan simpangan baku'
    ],
    a: 0,
    e: 'Lima statistik box plot adalah minimum, Q1, median, Q3, dan maksimum — mean tidak termasuk. Garis di dalam kotak adalah median, dan titik di luar pagar IQR adalah outlier. Outlier belum tentu kesalahan input; itu harus diperiksa.',
    v: {
      t: 'steps',
      items: ['Minimum (ujung whisker kiri)', 'Q1 (tepi kiri kotak)', 'Median (garis dalam kotak)', 'Q3 (tepi kanan kotak)', 'Maksimum (ujung whisker kanan)', 'Titik di luar pagar = outlier'],
      hl: [2, 5],
      cap: 'Mean tidak muncul di box plot; median dan outlier yang tampak.'
    }
  },
  {
    q: 'Tim ingin melihat apakah ada hubungan antara luas bangunan dan harga rumah. Visualisasi yang paling tepat adalah…',
    o: [
      'Histogram harga saja',
      'Scatter plot luas bangunan terhadap harga',
      'Bar plot jumlah rumah per kota',
      'Heatmap korelasi seluruh kolom kategorikal'
    ],
    a: 1,
    e: 'Scatter plot menampilkan dua variabel numerik, satu di sumbu x dan satu di sumbu y, sehingga pola hubungan langsung terlihat. Histogram hanya satu variabel, bar plot untuk kategori, dan heatmap korelasi tidak menampilkan bentuk hubungan per pengamatan.',
    v: {
      t: 'tab',
      head: ['Pertanyaan', 'Visualisasi'],
      rows: [
        ['Bagaimana distribusi satu variabel?', 'Histogram'],
        ['Bagaimana hubungan dua variabel numerik?', 'Scatter plot'],
        ['Di mana median, sebaran, outlier?', 'Box plot'],
        ['Bagaimana perbandingan kategori?', 'Bar plot'],
        ['Bagaimana pola korelasi banyak variabel?', 'Heatmap']
      ],
      hl: [[1, 1]],
      cap: 'Pilih visualisasi berdasarkan pertanyaan yang ingin dijawab.'
    }
  },
  {
    q: 'Pada heatmap korelasi dataset perumahan, sqft_living dan sqft_above memiliki nilai 0,88. Apa implikasi paling praktis untuk pemodelan?',
    o: [
      'Kedua variabel tidak berhubungan dan dapat diabaikan',
      'Keduanya sangat berkorelasi sehingga informasinya nyaris redundan dan berpotensi menimbulkan multikolinearitas',
      'Korelasi 0,88 membuktikan luas bangunan menyebabkan harga naik',
      'Korelasi 0,88 berarti kedua kolom identik dan harus dihapus'
    ],
    a: 1,
    e: 'Nilai mendekati 1 menunjukkan hubungan linier sangat kuat; dua variabel yang mengukur hal serupa cenderung redundan dan dapat mengganggu model linier (multikolinearitas). Korelasi tidak membuktikan kausalitas, dan 0,88 bukan berarti kolomnya identik (yang identik adalah 1,00).',
    v: {
      t: 'tab',
      head: ['Pasangan variabel', 'Korelasi', 'Tafsir'],
      rows: [
        ['sqft_living vs sqft_above', '0,88', 'Sangat kuat, nyaris redundan'],
        ['price vs sqft_living', '0,43', 'Sedang'],
        ['condition vs yr_built', '−0,40', 'Negatif sedang']
      ],
      hl: [[0, 2]],
      cap: 'Nilai diagonal heatmap selalu 1 karena variabel berkorelasi sempurna dengan dirinya sendiri.'
    }
  },
  {
    q: 'Korelasi antara kondisi rumah (condition) dan tahun dibangun (yr_built) adalah −0,40. Interpretasi yang tepat adalah…',
    o: [
      'Rumah yang lebih baru cenderung memiliki nilai condition lebih rendah, dengan kekuatan sedang',
      'Rumah yang lebih baru selalu memiliki condition buruk',
      'Tidak ada hubungan karena nilainya negatif',
      'Condition menyebabkan tahun pembangunan mundur'
    ],
    a: 0,
    e: 'Tanda negatif berarti arah berlawanan: semakin besar yr_built (semakin baru), semakin kecil condition. Nilai 0,40 tergolong sedang, bukan hubungan sempurna, sehingga kata "selalu" berlebihan. Arah sebab-akibat tidak dapat disimpulkan dari korelasi.',
    v: {
      t: 'curve',
      pts: [[0, 0.82], [0.25, 0.7], [0.5, 0.55], [0.75, 0.38], [1, 0.24]],
      xl: 'yr_built (semakin baru →)',
      yl: 'condition',
      color: '#ff6f91',
      cap: 'Garis menurun = korelasi negatif: semakin baru, condition cenderung lebih rendah.'
    }
  },
  {
    q: 'Data menunjukkan penjualan es krim dan jumlah kasus tenggelam naik bersama setiap bulan, dengan korelasi 0,9. Kesimpulan yang paling tepat adalah…',
    o: [
      'Makan es krim menyebabkan orang tenggelam',
      'Ada korelasi kuat, tetapi kemungkinan dijelaskan variabel ketiga (musim panas) — korelasi bukan kausalitas',
      'Tidak ada hubungan sama sekali karena korelasi tidak berlaku untuk data bulanan',
      'Korelasi 0,9 berarti hubungan sebab-akibat terbukti'
    ],
    a: 1,
    e: 'Korelasi hanya mengukur hubungan linier, bukan mekanisme penyebab. Pada kasus klasik ini, musim panas meningkatkan penjualan es krim sekaligus jumlah orang berenang. Nilai 0,9 justru menunjukkan hubungan kuat, jadi pernyataan "tidak ada hubungan" salah.',
    v: {
      t: 'steps',
      items: ['Musim panas', 'Penjualan es krim naik', 'Jumlah orang berenang naik', 'Korelasi tinggi tanpa sebab-akibat langsung'],
      hl: [0, 3],
      cap: 'Variabel ketiga dapat menciptakan korelasi tinggi antara dua hal yang tidak berhubungan langsung.'
    }
  },
  {
    q: 'Nilai ujian kelas memiliki mean 75 dan simpangan baku 10. Seorang mahasiswa memperoleh 85. Berapa z-score-nya, dan apakah termasuk outlier dengan aturan |z| > 3?',
    o: [
      'z = 1,0 dan bukan outlier',
      'z = −1,0 dan bukan outlier',
      'z = 10 dan termasuk outlier',
      'z = 0,1 dan bukan outlier'
    ],
    a: 0,
    e: 'z = (85 − 75) / 10 = 1,0, artinya nilai itu satu simpangan baku di atas rata-rata. Karena |1,0| jauh di bawah 3, nilai tersebut bukan outlier. Pilihan −1,0 membalik arah, dan 10 berasal dari pembagian yang salah.',
    v: {
      t: 'bar',
      labels: ['60 (z=−1,5)', '75 (z=0)', '85 (z=1,0)', '110 (z=3,5)'],
      values: [1.5, 0, 1, 3.5],
      hl: 2,
      cap: 'Hanya |z| > 3 yang ditandai outlier; 85 masih dalam rentang wajar.'
    }
  },
  {
    q: 'Pada dataset 500 transaksi, deteksi z-score menemukan 3 nilai dengan |z| > 3 pada kolom TotalAmount. Berapa persentase outlier tersebut?',
    o: [
      '0,6%',
      '3%',
      '6%',
      '0,06%'
    ],
    a: 0,
    e: '3 ÷ 500 × 100% = 0,6%. Pilihan 3% berasal dari menganggap 3 dari 100, 6% dari salah menempatkan desimal, dan 0,06% dari membagi dua kali.',
    v: {
      t: 'bar',
      labels: ['Outlier', 'Normal'],
      values: [3, 497],
      hl: 0,
      suffix: ' baris',
      cap: '3 dari 500 baris = 0,6%.'
    }
  },
  {
    q: 'Dua histogram: CustomerAge memiliki mean 41,7 dan median 41,5; Rating memiliki mean 3,0 dan median 3,0. Kesimpulan yang paling tepat adalah…',
    o: [
      'CustomerAge sangat miring, Rating simetris sempurna',
      'Keduanya relatif simetris karena mean dan median berimpit, dengan CustomerAge sedikit miring ke kanan',
      'Rating pasti bimodal karena mean sama dengan median',
      'Tidak ada yang bisa disimpulkan dari mean dan median'
    ],
    a: 1,
    e: 'Ketika mean dan median hampir sama, distribusi cenderung simetris. Selisih 0,2 pada CustomerAge sangat kecil, menunjukkan kemiringan ringan ke kanan (mean sedikit lebih besar). Mean = median tidak memberi informasi tentang jumlah puncak.',
    v: {
      t: 'tab',
      head: ['Variabel', 'Mean', 'Median', 'Tafsir'],
      rows: [
        ['CustomerAge', '41,7', '41,5', 'Hampir simetris, sedikit miring kanan'],
        ['Rating', '3,0', '3,0', 'Simetris']
      ],
      hl: [[0, 3], [1, 3]],
      cap: 'Selisih mean−median adalah petunjuk cepat arah kemiringan.'
    }
  },
  {
    q: 'Manakah kegiatan berikut yang termasuk EDA dan bukan preprocessing?',
    o: [
      'Mengisi missing value dengan median',
      'Membuat histogram dan menghitung korelasi untuk memahami struktur data',
      'Melakukan one-hot encoding pada kolom kategori',
      'Menghapus baris duplikat'
    ],
    a: 1,
    e: 'EDA bertujuan memahami struktur, karakteristik, dan pola data melalui statistik deskriptif dan visualisasi. Imputasi, encoding, dan penghapusan duplikat adalah tindakan mengubah data — bagian dari preprocessing/pembersihan.',
    v: {
      t: 'tab',
      head: ['Kegiatan', 'Tahap'],
      rows: [
        ['Histogram & korelasi', 'EDA'],
        ['Imputasi missing value', 'Preprocessing'],
        ['One-hot encoding', 'Preprocessing'],
        ['drop_duplicates()', 'Preprocessing']
      ],
      hl: [[0, 1]],
      cap: 'EDA mengamati dulu; preprocessing mengubah setelah masalahnya dipahami.'
    }
  },
  {
    q: 'Validasi email memakai pola ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$. Alamat "fajar@" akan ditolak karena…',
    o: [
      'Tidak ada karakter sebelum tanda @',
      'Tidak ada domain dan ekstensi setelah tanda @',
      'Mengandung huruf kecil',
      'Panjangnya kurang dari 20 karakter'
    ],
    a: 1,
    e: 'Pola mewajibkan bagian setelah @ berisi nama domain dan titik diikuti minimal dua huruf (ekstensi). Pada "fajar@" bagian itu kosong. Huruf kecil diperbolehkan oleh pola, dan panjang alamat tidak dibatasi.',
    v: {
      t: 'steps',
      items: ['fajar@', 'Bagian lokal: fajar ✓', 'Domain: kosong ✗', 'Ekstensi (.com/.id): tidak ada ✗', 'Hasil: tidak valid'],
      hl: [2, 3],
      cap: 'Kegagalan ada di bagian domain, bukan di bagian lokal.'
    }
  },
  {
    q: 'Pola nomor HP Indonesia ^08\\d{8,11}$ menolak nomor "08123". Alasannya adalah…',
    o: [
      'Nomor harus diawali +62',
      'Setelah 08 hanya ada 3 digit, sedangkan pola menuntut 8 sampai 11 digit',
      'Nomor mengandung angka 0 di tengah',
      'Pola hanya menerima nomor dengan tanda hubung'
    ],
    a: 1,
    e: 'Pola ^08\\d{8,11}$ berarti dua digit awal 08 lalu 8–11 digit angka, sehingga total 10–13 digit. "08123" hanya memiliki 3 digit setelah 08. Pola tidak mewajibkan +62 dan tidak melarang angka 0 di tengah.',
    v: {
      t: 'tab',
      head: ['Nomor', 'Digit setelah 08', 'Hasil'],
      rows: [
        ['081234567890', '10', 'Valid'],
        ['0812345678', '8', 'Valid'],
        ['08123', '3', 'Tidak valid']
      ],
      hl: [[2, 2]],
      cap: 'Batas bawah pola adalah 8 digit setelah awalan 08.'
    }
  },
  {
    q: 'Pada dataset pelanggan ditemukan usia −5, 150, dan "tiga puluh". Aturan validasi yang paling tepat menangani ketiganya sekaligus adalah…',
    o: [
      'Cukup memeriksa apakah kolom bertipe angka',
      'Konversi ke numerik dengan errors="coerce" lalu periksa rentang wajar, misalnya 0 ≤ usia ≤ 120',
      'Mengisi semuanya dengan nilai mean',
      'Menghapus seluruh kolom usia'
    ],
    a: 1,
    e: 'to_numeric(errors="coerce") mengubah "tiga puluh" menjadi NaN, lalu aturan rentang menangkap −5 dan 150. Memeriksa tipe saja tidak menangkap nilai mustahil; mengisi dengan mean menyamarkan kesalahan; menghapus kolom menghilangkan informasi yang mungkin penting.',
    v: {
      t: 'tab',
      head: ['Nilai', 'Masalah', 'Tertangkap oleh'],
      rows: [
        ['−5', 'Di bawah batas', 'Rentang 0 ≤ usia'],
        ['150', 'Di atas batas', 'Rentang ≤ 120'],
        ['"tiga puluh"', 'Bukan angka', 'errors="coerce" → NaN']
      ],
      hl: [[0, 2], [1, 2], [2, 2]],
      cap: 'Dua langkah: normalisasi tipe, lalu aturan rentang.'
    }
  },
  {
    q: 'Kolom BirthDate memuat "2030-05-20", sedangkan data dikumpulkan pada 2026. Aturan validasi mana yang paling langsung menandai baris ini?',
    o: [
      'Pemeriksaan duplikasi',
      'Pemeriksaan rentang tanggal: tanggal lahir tidak boleh melebihi hari ini',
      'Pemeriksaan format email',
      'Pemeriksaan nilai unik kategori'
    ],
    a: 1,
    e: 'Tanggal lahir di masa depan mustahil, sehingga aturan df[tanggal] > datetime.now() langsung menandainya. Duplikasi memeriksa pengulangan baris, email tidak relevan, dan nilai unik kategori berlaku untuk kolom seperti MembershipLevel.',
    v: {
      t: 'steps',
      items: ['Ambil BirthDate', 'Bandingkan dengan tanggal hari ini', '2030 > 2026 → ditandai', 'Tindak lanjut: koreksi atau tandai tidak valid'],
      hl: 2,
      cap: 'Validasi tanggal memakai pembanding waktu, bukan sekadar format.'
    }
  },
  {
    q: 'Kolom MembershipLevel hanya boleh berisi Gold, Silver, Bronze, atau Platinum. Ditemukan nilai "Diamond" dan "VIP". Teknik validasi yang tepat adalah…',
    o: [
      'Pemeriksaan himpunan nilai yang diizinkan (isin) terhadap daftar kategori valid',
      'Pemeriksaan panjang string',
      'Pemeriksaan korelasi dengan kolom lain',
      'Pemeriksaan duplikasi baris'
    ],
    a: 0,
    e: 'Kategori di luar daftar resmi dideteksi dengan membandingkan terhadap himpunan nilai yang diizinkan, misalnya isin([...]). Panjang string tidak membedakan kategori sah dan tidak sah; korelasi dan duplikasi tidak memeriksa keanggotaan kategori.',
    v: {
      t: 'tab',
      head: ['Nilai', 'Ada di himpunan?'],
      rows: [
        ['Gold', 'Ya'],
        ['Platinum', 'Ya'],
        ['Diamond', 'Tidak'],
        ['VIP', 'Tidak']
      ],
      hl: [[2, 1], [3, 1]],
      cap: 'Validasi himpunan nilai menangkap kategori yang tidak pernah didefinisikan.'
    }
  },
  {
    q: 'Dataset pelanggan memiliki 12 baris, tetapi CustomerID 10 muncul dua kali dengan data yang sama. Berapa pelanggan unik yang sebenarnya, dan fungsi apa yang dipakai untuk membersihkannya?',
    o: [
      '12 pelanggan unik; gunakan duplicated() saja',
      '11 pelanggan unik; gunakan drop_duplicates() setelah duplicated() memeriksa',
      '10 pelanggan unik; gunakan isin()',
      '11 pelanggan unik; gunakan fillna()'
    ],
    a: 1,
    e: 'Satu ID ganda berarti 12 baris mewakili 11 pelanggan. duplicated() menandai baris yang berulang, lalu drop_duplicates() menghapusnya. isin() dipakai untuk validasi kategori, dan fillna() untuk mengisi nilai kosong — bukan duplikasi.',
    v: {
      t: 'grid',
      cols: 4,
      rowsCount: 3,
      hl: [[1, 0], [1, 1], [1, 2], [1, 3]],
      cap: 'Baris kedua (ID 10) menduplikasi baris pertama; 12 baris → 11 pelanggan unik.'
    }
  },
  {
    q: 'Validasi konsistensi silang membandingkan Age dengan BirthDate. Ditemukan Age 25 tetapi BirthDate 2030, serta Age −5 dengan BirthDate 1998. Teknik yang dipakai materi untuk menangkap kasus seperti ini adalah…',
    o: [
      'Menghitung CalculatedAge dari BirthDate lalu membandingkan selisihnya dengan Age, dengan toleransi ±1 tahun',
      'Menghapus semua baris yang memiliki Age',
      'Mengganti Age dengan modus kolom',
      'Memeriksa apakah Age bertipe numerik'
    ],
    a: 0,
    e: 'Materi menghitung CalculatedAge = tahun sekarang − tahun BirthDate, lalu menandai baris dengan |Age − CalculatedAge| > 1. Cara ini menangkap ketidaksesuaian antar-kolom. Menghapus kolom atau mengisi modus menyembunyikan masalah, dan pemeriksaan tipe saja tidak membandingkan dua sumber.',
    v: {
      t: 'tab',
      head: ['Baris', 'Age', 'CalculatedAge', 'Status'],
      rows: [
        ['A', '25', '−4 (dari 2030)', 'Tidak konsisten'],
        ['B', '−5', '28 (dari 1998)', 'Tidak konsisten'],
        ['C', '30', '30', 'Konsisten']
      ],
      hl: [[0, 3], [1, 3]],
      cap: 'Konsistensi silang membandingkan dua kolom yang seharusnya saling mendukung.'
    }
  }
];
