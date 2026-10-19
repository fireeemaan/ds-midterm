/* Bank soal — Unit 1: Sejarah & Perkembangan Data Science (10 soal) */
window.QZ = window.QZ || {};
window.QZ[1] = [
  {
    q: 'Pada 1975 sebuah perusahaan ritel masih menyimpan data penjualan di berkas kertas dan kartu stok. Tim IT lalu memindahkannya ke sistem yang bisa ditanyai dengan perintah seperti SELECT … WHERE, sehingga laporan bulanan tidak lagi dihitung manual. Perkembangan mana yang paling langsung memungkinkan lompatan ini?',
    o: [
      'Teknik deep learning dan GPU pada 2010-an',
      'Basis data relasional (E. F. Codd, 1970) beserta SQL',
      'Konsep Big Data dan Hadoop pada 2000-an',
      'Regulasi perlindungan data pribadi pada 2020-an'
    ],
    a: 1,
    e: 'Kemampuan menyimpan data dalam tabel yang saling berelasi dan mengambilnya dengan SQL adalah inti era 1970-an. Deep learning dan Hadoop datang jauh setelahnya dan tidak menyelesaikan masalah penyimpanan terstruktur; GDPR/UU PDP mengatur tata kelola, bukan cara query data.',
    v: {
      t: 'steps',
      items: ['1960-an · Fortran & statistika tradisional', '1962 · Tukey: The Future of Data Analysis', '1970 · Basis data relasional (Codd) + SQL', '1980-an · PC, SAS, SPSS', '1990-an · Data warehouse & data mining', '2000-an · Big Data & Hadoop', '2010-an · ML/AI, cloud, BI tools', '2020-an · Deep learning, edge/IoT, privasi'],
      hl: 2,
      cap: 'SQL dan model relasional adalah fondasi yang membuat data operasional bisa ditanyai ulang tanpa menghitung manual.'
    }
  },
  {
    q: 'Seorang analis mengusulkan perubahan kebiasaan: sebelum mengunci satu model statistik, ia membuat grafik, memeriksa sebaran, dan membiarkan data "berbicara" lebih dulu. Usulan ini paling dekat dengan gagasan yang diperkenalkan pada…',
    o: [
      '1962 oleh John Tukey melalui "The Future of Data Analysis"',
      '1970 oleh Edgar F. Codd melalui model relasional',
      '1990-an melalui konsep data warehousing',
      '2020-an melalui regulasi GDPR'
    ],
    a: 0,
    e: 'Tukey (1962) mendorong pergeseran dari statistika yang hanya menguji hipotesis menjadi analisis data yang eksploratif — melihat pola dulu, baru memodelkan. Codd berbicara tentang struktur penyimpanan, bukan cara berpikir analitis; data warehousing dan GDPR berada di ranah infrastruktur dan regulasi.',
    v: {
      t: 'steps',
      items: ['Statistika klasik: uji hipotesis lebih dulu', 'Tukey 1962: eksplorasi & visualisasi lebih dulu', 'Baru kemudian: pemodelan dan pengujian formal'],
      hl: 1,
      cap: 'Prinsip inilah yang hari ini kita kenal sebagai Exploratory Data Analysis (EDA).'
    }
  },
  {
    q: 'Sebuah bank pada pertengahan 1990-an memiliki data nasabah di sistem tabungan, kartu kredit, dan cabang yang terpisah. Manajemen ingin satu tempat penyimpanan terintegrasi untuk pelaporan, sekaligus ingin menemukan pola nasabah yang berpotensi menunggak dari data historis. Dua perkembangan era 1990-an yang menjawab kebutuhan ini adalah…',
    o: [
      'Fortran dan SPSS',
      'Data warehousing dan data mining',
      'Hadoop dan TensorFlow',
      'Edge computing dan IoT'
    ],
    a: 1,
    e: 'Data warehousing menyatukan data dari banyak sistem ke satu repositori terintegrasi, sedangkan data mining mengekstrak pola tersembunyi dari data besar. Fortran/SPSS adalah alat komputasi dan statistik era sebelumnya; Hadoop baru muncul pada 2000-an dan TensorFlow pada 2010-an.',
    v: {
      t: 'steps',
      items: ['Sistem tabungan', 'Sistem kartu kredit', 'Sistem cabang', 'Data warehouse (terintegrasi)', 'Data mining: pola nasabah berisiko'],
      hl: [3, 4],
      cap: 'Era 1990-an: integrasi data dulu, baru penambangan pola.'
    }
  },
  {
    q: 'Sebuah marketplace menghasilkan 40 TB log klik setiap hari. Satu server database tidak lagi mampu memprosesnya dalam waktu wajar, sehingga perusahaan memakai pemrosesan terdistribusi di banyak mesin dengan teknologi Hadoop. Situasi ini paling tepat menggambarkan…',
    o: [
      'Era Big Data: volume, kecepatan, dan variasi data yang sangat besar',
      'Era statistika tradisional 1960-an',
      'Era PC dan tools statistik 1980-an',
      'Era regulasi privasi 2020-an'
    ],
    a: 0,
    e: 'Big Data didefinisikan oleh volume, velocity, dan variety yang melampaui kapasitas satu mesin; Hadoop lahir sebagai jawaban pemrosesan terdistribusi. Statistika 1960-an dan PC 1980-an bekerja pada data yang jauh lebih kecil, sedangkan isu privasi bukan persoalan kapasitas pemrosesan.',
    v: {
      t: 'tab',
      head: ['Dimensi', 'Kondisi marketplace', 'Konsekuensi'],
      rows: [
        ['Volume', '40 TB log per hari', 'Butuh penyimpanan & pemrosesan terdistribusi'],
        ['Velocity', 'Data mengalir terus-menerus', 'Tidak bisa menunggu batch harian'],
        ['Variety', 'Log, klik, transaksi, teks', 'Format beragam harus disatukan']
      ],
      hl: [[0, 1], [1, 1], [2, 1]],
      cap: 'Tiga dimensi inilah yang membuat pendekatan satu-server tidak lagi memadai.'
    }
  },
  {
    q: 'Sebuah startup hanya punya dua data scientist dan tidak ingin membeli server GPU. Mereka butuh lingkungan eksperimen yang bisa membesar saat pelatihan dan mengecil setelahnya, serta alat visualisasi siap pakai untuk presentasi ke klien. Pilihan paling sesuai dengan lanskap 2010-an adalah…',
    o: [
      'Menulis seluruh komputasi dalam Fortran di komputer lokal',
      'Memakai platform cloud (AWS/Google Cloud/Azure) dan tools BI seperti Tableau atau Power BI',
      'Menunggu quantum computing tersedia secara umum',
      'Membangun sendiri klaster Hadoop untuk semua pekerjaan'
    ],
    a: 1,
    e: 'Era 2010-an ditandai komputasi awan yang elastis dan tools visualisasi seperti Tableau/Power BI. Fortran lokal tidak skalabel, Hadoop berlebihan untuk kebutuhan eksperimen kecil, dan quantum computing masih tahap awal — bukan solusi praktis hari ini.',
    v: {
      t: 'tab',
      head: ['Kebutuhan', 'Solusi era 2010-an'],
      rows: [
        ['Komputasi elastis tanpa beli server', 'Cloud: AWS, Google Cloud, Azure'],
        ['Pustaka machine learning', 'TensorFlow, PyTorch, Scikit-learn'],
        ['Visualisasi & dashboard', 'Tableau, Power BI']
      ],
      hl: [[0, 1], [1, 1], [2, 1]],
      cap: 'Kombinasi cloud + pustaka ML + tools BI adalah ciri khas dekade 2010-an.'
    }
  },
  {
    q: 'Sebuah perusahaan mengumpulkan data lokasi pelanggan untuk personalisasi iklan. Sejak 2020-an mereka wajib menjelaskan dasar hukum pemrosesan, membatasi data yang diambil, dan memberi pelanggan hak menghapus data. Perkembangan yang paling menjelaskan tuntutan ini adalah…',
    o: [
      'Munculnya istilah Big Data',
      'Penggunaan SQL untuk manipulasi data',
      'Fokus pada etika dan privasi data, termasuk GDPR dan UU Perlindungan Data Pribadi',
      'Pergeseran dari PC ke mainframe'
    ],
    a: 2,
    e: 'Era 2020-an menempatkan etika, privasi, dan keamanan data sebagai bagian inti praktik data science, dengan GDPR di Eropa dan UU PDP di Indonesia sebagai contoh regulasi. Big Data dan SQL adalah perkembangan teknis, bukan kerangka hukum; arah mainframe→PC justru terjadi lebih awal dan berlawanan arah.',
    v: {
      t: 'tab',
      head: ['Tuntutan', 'Dasar'],
      rows: [
        ['Dasar hukum pemrosesan', 'GDPR / UU PDP'],
        ['Minimisasi data', 'Prinsip proportionality'],
        ['Hak hapus data', 'Right to erasure']
      ],
      hl: [[0, 1], [1, 1], [2, 1]],
      cap: 'Regulasi mengubah cara data dikumpulkan, bukan hanya cara dianalisis.'
    }
  },
  {
    q: 'Perhatikan empat peristiwa berikut: (1) Hadoop untuk data besar, (2) "The Future of Data Analysis" oleh Tukey, (3) basis data relasional Codd, (4) data warehousing dan data mining. Urutan kronologis yang benar dari yang paling awal adalah…',
    o: [
      '2 → 3 → 4 → 1',
      '3 → 2 → 1 → 4',
      '2 → 4 → 3 → 1',
      '1 → 3 → 2 → 4'
    ],
    a: 0,
    e: 'Tukey menulis pada 1962, Codd memperkenalkan model relasional pada 1970, data warehousing dan data mining berkembang pada 1990-an, lalu Hadoop muncul bersama era Big Data pada 2000-an. Urutan lain menempatkan Hadoop sebelum data warehouse, atau Codd sebelum Tukey — keduanya tidak sesuai materi.',
    v: {
      t: 'steps',
      items: ['1962 · Tukey', '1970 · Codd (relasional)', '1990-an · Warehouse & mining', '2000-an · Hadoop'],
      hl: [0, 1, 2, 3],
      cap: 'Empat tonggak ini sering dipakai sebagai kerangka garis waktu data science.'
    }
  },
  {
    q: 'Sebuah perusahaan membangun dashboard penjualan yang sangat rapi dan akurat, tetapi setelah enam bulan tidak ada satu pun keputusan operasional yang berubah karenanya. Berdasarkan definisi data science di materi, kelemahan utama proyek ini adalah…',
    o: [
      'Datanya tidak cukup besar sehingga bukan termasuk data science',
      'Belum memakai deep learning, jadi belum bisa disebut data science',
      'Berhenti pada wawasan dan tidak berujung pada keputusan',
      'Tidak menggunakan SQL, padahal SQL wajib dalam data science'
    ],
    a: 2,
    e: 'Materi menegaskan data science adalah ilmu menggunakan data untuk memperoleh wawasan dan membuat keputusan — bukan sekadar mengolah atau memvisualkan data. Ukuran data, jenis algoritma, dan pilihan bahasa query bukan syarat definisi; yang hilang di sini adalah tindak lanjut keputusan.',
    v: {
      t: 'steps',
      items: ['Data mentah', 'Analisis & wawasan', 'Keputusan', 'Dampak bisnis'],
      hl: [2, 3],
      cap: 'Tanpa dua tahap terakhir, nilai data science belum terwujud.'
    }
  },
  {
    q: 'Pabrik memasang 500 sensor getaran. Setiap sensor menghasilkan 200 pembacaan per detik, sedangkan koneksi internet pabrik terbatas dan kerusakan mesin harus dideteksi dalam hitungan milidetik. Arsitektur paling tepat adalah…',
    o: [
      'Mengirim seluruh data mentah ke cloud lalu menganalisisnya setiap malam',
      'Menyimpan data di spreadsheet dan memeriksanya mingguan',
      'Memproses dan mendeteksi anomali langsung di perangkat (edge computing), lalu hanya mengirim ringkasan ke pusat',
      'Membangun data warehouse terpusat sebagai satu-satunya tempat pemrosesan'
    ],
    a: 2,
    e: 'Kebutuhan latensi milidetik dan bandwidth terbatas adalah alasan utama edge computing: sebagian pemrosesan dilakukan di dekat sumber data. Cloud batch harian terlalu lambat, spreadsheet tidak mungkin menangani 100.000 pembacaan per detik, dan warehouse terpusat justru menambah perjalanan data.',
    v: {
      t: 'steps',
      items: ['Sensor (500 unit, 200 Hz)', 'Pemrosesan & deteksi di edge', 'Ringkasan / alarm ke pusat', 'Analitik lanjutan di cloud'],
      hl: [1],
      cap: 'Edge computing menyatukan data science dengan perangkat fisik — tren 2020-an.'
    }
  },
  {
    q: 'Tim berisi dua orang harus menguji 40 kombinasi hyperparameter untuk enam algoritma berbeda dalam tiga minggu, sambil tetap menulis laporan. Pendekatan yang paling masuk akal dengan tren perkembangan terkini adalah…',
    o: [
      'Menaikkan jumlah anggota tim menjadi 20 orang',
      'Memakai Automated Machine Learning untuk menyapu ruang hyperparameter secara otomatis, lalu tim fokus menafsirkan hasil',
      'Mengganti seluruh pekerjaan dengan quantum computing',
      'Memilih satu algoritma tanpa eksperimen agar cepat selesai'
    ],
    a: 1,
    e: 'AutoML mengotomatiskan proses machine learning — termasuk pencarian hyperparameter — sehingga tim kecil bisa mengeksplorasi banyak kombinasi tanpa menambah orang. Menambah 18 anggota bukan solusi realistis, quantum computing belum praktis untuk kasus ini, dan melewatkan eksperimen justru mengorbankan kualitas.',
    v: {
      t: 'bar',
      labels: ['Manual', 'AutoML'],
      values: [240, 12],
      hl: 1,
      suffix: ' jam',
      cap: 'Ilustrasi: 40 kombinasi × 6 algoritma bila disapu otomatis versus dikerjakan manual.'
    }
  }
];
