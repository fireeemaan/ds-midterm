/* Bank soal — Unit 5: Objek Data & Membersihkan Data (16 soal) */
window.QZ = window.QZ || {};
window.QZ[5] = [
  {
    q: 'Pada dataset perumahan, satu baris memuat harga, luas bangunan, jumlah kamar, dan kota. Jika tujuan analisis adalah memprediksi harga, objek data dan labelnya adalah…',
    o: [
      'Objek data = kolom harga; label = rumah',
      'Objek data = rumah (satu baris); label = harga rumah',
      'Objek data = kota; label = luas bangunan',
      'Objek data = seluruh dataset; label = jumlah kamar'
    ],
    a: 1,
    e: 'Objek data adalah entitas yang diamati — di sini satu rumah per baris. Label adalah variabel dependen yang ingin diprediksi, yaitu harga. Kolom lain (luas, kamar, kota) berperan sebagai fitur, bukan objek atau label.',
    v: {
      t: 'tab',
      head: ['Kolom', 'Peran'],
      rows: [
        ['Satu baris data', 'Objek data: rumah'],
        ['Harga', 'Label / target'],
        ['Luas bangunan', 'Fitur'],
        ['Jumlah kamar', 'Fitur'],
        ['Kota', 'Fitur kategorikal']
      ],
      hl: [[0, 1], [1, 1]],
      cap: 'Objek data adalah entitas; label adalah yang diprediksi dari entitas itu.'
    }
  },
  {
    q: 'Empat kolom berikut diklasifikasikan menurut tipenya: price, city, description, transaction_date. Pengelompokan yang tepat adalah…',
    o: [
      'price numerik · city kategorikal · description teks · transaction_date waktu',
      'price kategorikal · city numerik · description teks · transaction_date numerik',
      'price numerik · city teks · description kategorikal · transaction_date kategorikal',
      'Semuanya kategorikal karena disimpan dalam tabel yang sama'
    ],
    a: 0,
    e: 'Materi membagi tipe data menjadi numerik (angka seperti price), kategorikal (label seperti city), teks (deskripsi properti), dan waktu (tanggal/waktu seperti transaction_date). Tipe ditentukan isi kolom, bukan jenis penyimpanannya.',
    v: {
      t: 'tab',
      head: ['Kolom', 'Tipe', 'Perlakuan'],
      rows: [
        ['price', 'Numerik', 'Statistik, scaling'],
        ['city', 'Kategorikal', 'Encoding'],
        ['description', 'Teks', 'Ekstraksi fitur teks'],
        ['transaction_date', 'Waktu', 'Ekstraksi hari/bulan']
      ],
      hl: [[0, 1], [1, 1], [2, 1], [3, 1]],
      cap: 'Tipe data menentukan cara fitur diolah pada tahap berikutnya.'
    }
  },
  {
    q: 'Sebuah tim menganalisis "pelanggan" tetapi mencampur data pelanggan individu dan data perusahaan dalam satu tabel tanpa pemisah. Akibat yang paling mungkin, menurut pentingnya menentukan objek data, adalah…',
    o: [
      'Analisis menjadi lebih kaya karena datanya beragam',
      'Fokus analisis kabur: fitur yang relevan untuk individu dan perusahaan berbeda, sehingga model mencampur dua entitas',
      'Tidak ada akibat selama jumlah baris cukup banyak',
      'Model otomatis memisahkan kedua entitas'
    ],
    a: 1,
    e: 'Materi menekankan objek data memfokuskan analisis dan menentukan pemilihan fitur yang tepat. Mencampur dua entitas membuat fitur seperti jumlah karyawan dan usia pelanggan bercampur dalam satu model. Banyaknya baris tidak memperbaiki percampuran entitas, dan model tidak memisahkannya sendiri tanpa penanda.',
    v: {
      t: 'steps',
      items: ['Entitas tidak jelas', 'Fitur bercampur (usia vs jumlah karyawan)', 'Model belajar pola palsu', 'Wawasan menyesatkan'],
      hl: 1,
      cap: 'Objek data yang kabur merambat ke seluruh proses analisis.'
    }
  },
  {
    q: 'Pada dataset churn, korelasi fitur dengan target adalah: Contract 0,55; Tenure_Months −0,42; MonthlyCharges 0,35; NumCalls 0,12. Dengan aturan materi (|r| > 0,5 Strong, |r| > 0,3 Moderate, sisanya Weak), urutan kekuatan yang benar adalah…',
    o: [
      'Contract Strong · Tenure Moderate · MonthlyCharges Moderate · NumCalls Weak',
      'Contract Strong · Tenure Strong · MonthlyCharges Moderate · NumCalls Weak',
      'Contract Moderate · Tenure Moderate · MonthlyCharges Weak · NumCalls Weak',
      'Semua Moderate karena semuanya berkorelasi dengan target'
    ],
    a: 0,
    e: '|0,55| > 0,5 sehingga Contract Strong. |−0,42| dan |0,35| berada di antara 0,3 dan 0,5 sehingga Moderate — tanda negatif hanya menunjukkan arah. |0,12| < 0,3 sehingga Weak.',
    v: {
      t: 'bar',
      labels: ['Contract', 'Tenure', 'MonthlyCharges', 'NumCalls'],
      values: [0.55, 0.42, 0.35, 0.12],
      hl: 0,
      cap: 'Kekuatan dinilai dari nilai absolut; arah ditentukan tanda.'
    }
  },
  {
    q: 'Kolom Income berdistribusi sangat miring (banyak nilai kecil, sedikit nilai sangat besar) dan memiliki missing value. Metode imputasi yang paling tepat adalah…',
    o: [
      'Mean, karena memakai semua informasi',
      'Median, karena tahan terhadap kemiringan dan outlier',
      'Nol, karena menandakan data tidak ada',
      'Nilai maksimum, karena mewakili potensi terbesar'
    ],
    a: 1,
    e: 'Materi secara eksplisit memakai median untuk data miring seperti Income. Mean akan tertarik ke nilai ekstrem sehingga imputasinya terlalu tinggi. Mengisi nol atau maksimum menciptakan distorsi besar pada distribusi.',
    v: {
      t: 'tab',
      head: ['Kolom', 'Distribusi', 'Imputasi'],
      rows: [
        ['Age', 'Normal', 'Mean'],
        ['Income', 'Miring / skewed', 'Median'],
        ['ProductCategory', 'Kategorikal', 'Mode'],
        ['MembershipLevel', 'Kategorikal', 'Mode']
      ],
      hl: [[1, 2]],
      cap: 'Pilihan imputasi mengikuti bentuk distribusi kolom.'
    }
  },
  {
    q: 'Dataset churn dibuat dengan 500 baris. Sepuluh nilai pada kolom Rating dan sepuluh nilai pada kolom Discount sengaja dikosongkan. Berapa persentase missing value pada masing-masing kolom?',
    o: [
      '2% pada masing-masing kolom',
      '10% pada masing-masing kolom',
      '20% karena digabungkan',
      '1% pada masing-masing kolom'
    ],
    a: 0,
    e: '10 ÷ 500 × 100% = 2% per kolom. Angka 10% keliru karena memakai jumlah baris yang dikosongkan sebagai persentase; kolom yang berbeda tidak digabungkan menjadi 20%; dan 1% berasal dari pembagian yang salah.',
    v: {
      t: 'bar',
      labels: ['Rating', 'Discount'],
      values: [2, 2],
      hl: 0,
      suffix: '%',
      cap: 'Masing-masing 10 dari 500 baris = 2%.'
    }
  },
  {
    q: 'Dua baris identik muncul tiga kali dalam dataset transaksi. Dampak paling langsung terhadap analisis adalah…',
    o: [
      'Tidak ada, karena duplikasi hanya memengaruhi penyimpanan',
      'Statistik seperti total dan rata-rata menjadi bias karena transaksi yang sama dihitung berulang',
      'Model otomatis mengabaikan baris duplikat',
      'Kolom menjadi tidak konsisten tipenya'
    ],
    a: 1,
    e: 'Materi menyatakan duplikasi membuat analisis bias karena data diulang. Total penjualan dan rata-rata akan melebih-lebihkan nilai sebenarnya. Duplikasi tidak mengubah tipe kolom, dan model tidak menghapusnya otomatis.',
    v: {
      t: 'grid',
      cols: 4,
      rowsCount: 3,
      hl: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 0], [1, 1], [1, 2], [1, 3]],
      cap: 'Dua baris identik: nilai yang sama terhitung dua kali dalam agregasi.'
    }
  },
  {
    q: 'Kolom City berisi "Jakarta", "JAKARTA", "DKI Jakarta", dan "Jakarta ". Sebelum analisis, langkah yang tepat adalah…',
    o: [
      'Membiarkan variasi karena semuanya merujuk Jakarta',
      'Normalisasi: menyeragamkan kapitalisasi, spasi, dan penamaan sebelum analisis',
      'Menghapus kolom City',
      'Mengisi semua nilai dengan modus'
    ],
    a: 1,
    e: 'Ini contoh inkonsistensi kategorikal seperti "NYC" vs "New York City" pada materi: variasi penulisan harus disatukan agar tidak dihitung sebagai kategori berbeda. Membiarkannya membuat kelompok palsu; menghapus kolom menghilangkan informasi; mengisi modus menghapus keragaman yang sah.',
    v: {
      t: 'tab',
      head: ['Nilai mentah', 'Setelah normalisasi'],
      rows: [
        ['"Jakarta"', 'Jakarta'],
        ['"JAKARTA"', 'Jakarta'],
        ['"DKI Jakarta"', 'Jakarta'],
        ['"Jakarta "', 'Jakarta']
      ],
      hl: [[0, 1], [1, 1], [2, 1], [3, 1]],
      cap: 'Empat penulisan, satu kategori setelah normalisasi.'
    }
  },
  {
    q: 'Kolom tanggal pada satu dataset berisi "2024-05-20", "20/05/2024", dan "May 20, 2024". Mengapa konsistensi format menjadi bagian dari pembersihan data?',
    o: [
      'Karena format berbeda membuat tanggal tidak dapat dibandingkan atau diurutkan dengan benar',
      'Karena tanggal tidak pernah dipakai dalam analisis',
      'Karena semua format tanggal selalu dapat dibaca otomatis tanpa penyesuaian',
      'Karena format hanya memengaruhi ukuran file'
    ],
    a: 0,
    e: 'Materi menekankan keseragaman format, misalnya YYYY-MM-DD, agar data dapat diproses konsisten. Tanpa penyeragaman, pengurutan dan perhitungan selisih hari bisa salah atau gagal. Format memengaruhi kebenaran analisis, bukan sekadar ukuran berkas.',
    v: {
      t: 'steps',
      items: ['Tiga format berbeda', 'Konversi ke tipe datetime', 'Seragamkan ke YYYY-MM-DD', 'Urutkan & hitung selisih'],
      hl: 2,
      cap: 'Konsistensi format adalah prasyarat operasi waktu.'
    }
  },
  {
    q: 'Urutan penanganan masalah data yang disarankan adalah…',
    o: [
      'Outlier → duplikasi → missing value → inkonsistensi',
      'Missing value → duplikasi → inkonsistensi → outlier',
      'Inkonsistensi → outlier → missing value → duplikasi',
      'Duplikasi → outlier → missing value → inkonsistensi'
    ],
    a: 1,
    e: 'Missing value ditangani lebih dulu agar statistik bisa dihitung, lalu duplikasi dihapus agar tidak menggandakan bobot, kemudian inkonsistensi diseragamkan, dan outlier dideteksi paling akhir. Alasannya: duplikasi dan inkonsistensi dapat mendistorsi statistik yang dipakai untuk mendeteksi outlier.',
    v: {
      t: 'steps',
      items: ['Missing value', 'Duplikasi', 'Inkonsistensi', 'Outlier'],
      hl: [0, 1, 2, 3],
      cap: 'Deteksi outlier diletakkan terakhir karena bergantung pada statistik yang sudah bersih.'
    }
  },
  {
    q: 'Sebuah transaksi bernilai Rp250 juta tercatat pada toko kelontong dengan rata-rata transaksi Rp150 ribu. Analis langsung menghapusnya sebagai outlier. Penilaian yang paling tepat adalah…',
    o: [
      'Tepat, karena semua outlier harus dibuang',
      'Keliru: outlier belum tentu error, bisa jadi pembelian grosir nyata yang justru penting untuk dianalisis',
      'Tepat, karena nilai sebesar itu mustahil terjadi',
      'Keliru: seharusnya diganti dengan rata-rata'
    ],
    a: 1,
    e: 'Materi menegaskan outlier tidak sama dengan error: sebelum membuang, harus ditanyakan apakah itu kesalahan input atau kejadian nyata. Mengganti dengan rata-rata juga menyembunyikan fakta. Nilai besar bisa sah dan justru menjadi sinyal bisnis.',
    v: {
      t: 'steps',
      items: ['Deteksi outlier', 'Periksa sumber data', 'Kesalahan input? → koreksi/hapus', 'Kejadian nyata? → pertahankan & analisis'],
      hl: [2, 3],
      cap: 'Keputusan terhadap outlier bergantung pada penyebabnya, bukan pada besarnya nilai.'
    }
  },
  {
    q: 'Sebuah kolom memiliki 60% nilai kosong. Tim mempertimbangkan dua opsi: mengisi dengan median atau menghapus kolom. Pertimbangan yang paling tepat adalah…',
    o: [
      'Selalu mengisi dengan median karena mempertahankan semua baris',
      'Menghapus kolom layak dipertimbangkan karena 60% nilai kosong berarti mayoritas isinya hasil tebakan, bukan data',
      'Selalu menghapus kolom karena missing value tidak boleh diimputasi',
      'Mengisi dengan nol agar tidak ada nilai kosong'
    ],
    a: 1,
    e: 'Materi menyebut penghapusan baris/kolom sebagai opsi ketika terlalu banyak nilai hilang. Pada 60% kosong, imputasi berarti mayoritas nilai adalah estimasi sehingga kesimpulan berisiko. Imputasi tetap sah untuk persentase kecil, dan mengisi nol menciptakan nilai palsu.',
    v: {
      t: 'bar',
      labels: ['Nilai ada', 'Nilai kosong'],
      values: [40, 60],
      hl: 1,
      suffix: '%',
      cap: 'Pada 60% kosong, imputasi mengisi mayoritas sel dengan tebakan.'
    }
  },
  {
    q: 'Imputasi sederhana dengan mean atau modus dianggap kurang tepat untuk data dengan pola hubungan antar-fitur yang kuat. Pendekatan lanjutan yang disebut materi adalah…',
    o: [
      'Mengisi dengan nilai maksimum kolom',
      'Imputasi K-Nearest Neighbors atau regresi',
      'Menghapus seluruh baris yang memiliki nilai kosong',
      'Mengubah kolom menjadi kategori biner'
    ],
    a: 1,
    e: 'Materi menyebut imputasi lanjutan memakai KNN atau regresi untuk memperkirakan nilai hilang berdasarkan kemiripan/pola antar-fitur. Nilai maksimum menciptakan bias, menghapus semua baris mengurangi data, dan mengubah menjadi biner bukan imputasi.',
    v: {
      t: 'tab',
      head: ['Metode', 'Dasar pengisian'],
      rows: [
        ['Mean / median', 'Satu nilai pusat kolom'],
        ['Mode', 'Kategori tersering'],
        ['KNN', 'Kemiripan dengan baris lain'],
        ['Regresi', 'Hubungan dengan fitur lain']
      ],
      hl: [[2, 1], [3, 1]],
      cap: 'Imputasi lanjutan memanfaatkan hubungan antar-fitur, bukan satu nilai tunggal.'
    }
  },
  {
    q: 'Kolom Age berisi angka dan satu nilai "tiga puluh". Jika langsung diubah dengan pd.to_numeric(errors="coerce"), apa yang terjadi pada nilai tersebut?',
    o: [
      'Menjadi 30 karena teks angka dikonversi',
      'Menjadi NaN sehingga dapat ditangani sebagai missing value',
      'Menimbulkan error dan menghentikan proses',
      'Tetap berupa teks "tiga puluh"'
    ],
    a: 1,
    e: 'errors="coerce" memaksa nilai yang tidak dapat dikonversi menjadi NaN, sehingga bisa diimputasi atau ditandai. Nilai "tiga puluh" bukan representasi angka yang dikenali sehingga tidak menjadi 30, dan proses tidak berhenti karena error ditekan.',
    v: {
      t: 'tab',
      head: ['Nilai asli', 'to_numeric coerce'],
      rows: [
        ['"25"', '25'],
        ['"tiga puluh"', 'NaN'],
        ['"−5"', '−5']
      ],
      hl: [[1, 1]],
      cap: 'Coerce mengubah kegagalan konversi menjadi NaN agar bisa ditangani.'
    }
  },
  {
    q: 'Pada pembuatan dataset churn, probabilitas churn ditentukan oleh: kontrak Month-to-month (+0,3), MonthlyCharges > 80 (+0,2), Tenure < 12 bulan (+0,25), dan keluhan tidak selesai (+0,15), lalu ditambah noise 0–0,1. Fitur mana yang paling besar pengaruhnya terhadap churn?',
    o: [
      'MonthlyCharges > 80',
      'Kontrak Month-to-month',
      'Tenure < 12 bulan',
      'Keluhan tidak selesai'
    ],
    a: 1,
    e: 'Kontrak Month-to-month memberi bobot 0,3 — terbesar di antara keempat komponen. Tenure < 12 bulan 0,25, MonthlyCharges > 80 sebesar 0,2, dan keluhan tidak selesai 0,15. Noise hanya 0–0,1 sehingga tidak mengubah urutan.',
    v: {
      t: 'bar',
      labels: ['Month-to-month', 'Tenure < 12', 'Charges > 80', 'Keluhan'],
      values: [0.3, 0.25, 0.2, 0.15],
      hl: 0,
      cap: 'Bobot terbesar menentukan fitur paling berpengaruh pada label churn.'
    }
  },
  {
    q: 'Manakah pernyataan yang paling tepat tentang hubungan antara menentukan objek data dan kualitas hasil analisis?',
    o: [
      'Objek data hanya urusan dokumentasi dan tidak memengaruhi hasil',
      'Objek data yang jelas membuat pemilihan fitur, pembersihan, dan model menjadi terarah sehingga hasil lebih dapat diandalkan',
      'Objek data hanya penting untuk data kategorikal',
      'Objek data menentukan algoritma yang wajib dipakai'
    ],
    a: 1,
    e: 'Materi menyebut lima alasan: memfokuskan analisis, pemilihan fitur tepat, kualitas data, efisiensi, dan keandalan hasil. Objek data tidak menentukan algoritma secara langsung, dan berlaku untuk semua tipe data — bukan hanya kategorikal.',
    v: {
      t: 'steps',
      items: ['Objek data jelas', 'Fitur relevan terpilih', 'Pembersihan lebih terarah', 'Model lebih andal'],
      hl: [0, 3],
      cap: 'Kejelasan objek data adalah prasyarat, bukan formalitas.'
    }
  }
];
