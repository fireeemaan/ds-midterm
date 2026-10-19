/* Bank soal — Unit 3: Mengumpulkan Data (14 soal) */
window.QZ = window.QZ || {};
window.QZ[3] = [
  {
    q: 'Sebuah tim menyusun daftar sumber data: (1) log server aplikasi internal, (2) data sensus dari badan statistik, (3) API OpenWeather, (4) data sensor suhu gudang. Pengelompokan yang tepat adalah…',
    o: [
      '(1) internal · (2) dan (3) eksternal · (4) sumber lainnya',
      '(1) dan (4) internal · (2) eksternal · (3) sumber lainnya',
      '(1) eksternal · (2) dan (3) internal · (4) eksternal',
      'Semuanya eksternal karena berasal dari luar departemen analitik'
    ],
    a: 0,
    e: 'Log sistem dihasilkan dan disimpan organisasi sendiri sehingga internal. Data publik (sensus) dan API layanan web diperoleh dari luar organisasi sehingga eksternal. Data sensor dikelompokkan materi sebagai "sumber data lainnya", bersama data transaksi dan media sosial.',
    v: {
      t: 'tab',
      head: ['Sumber', 'Kategori'],
      rows: [
        ['Log server aplikasi', 'Internal'],
        ['Data sensus', 'Eksternal'],
        ['API OpenWeather', 'Eksternal'],
        ['Sensor suhu gudang', 'Lainnya (sensor)']
      ],
      hl: [[0, 1], [1, 1], [2, 1], [3, 1]],
      cap: 'Batas internal/eksternal ditentukan oleh pemilik sumber data, bukan oleh siapa yang mengolah.'
    }
  },
  {
    q: 'Sebelum melakukan web scraping pada situs e-commerce, tim hukum meminta kepastian bahwa data boleh diambil dan digunakan. Dalam proses pengumpulan data, langkah yang tepat menangani hal ini adalah…',
    o: [
      'Pembersihan dan validasi data',
      'Memastikan izin akses dan hak penggunaan pada tahap akses data',
      'Identifikasi kebutuhan data',
      'Transformasi data ke format CSV'
    ],
    a: 1,
    e: 'Materi menempatkan "mendapatkan izin akses" sebagai bagian dari tahap akses dan ekstraksi data: untuk sumber eksternal pastikan izin mengakses dan menggunakan, untuk internal pastikan hak akses. Kebutuhan data, pembersihan, dan transformasi format tidak menjawab persoalan legalitas.',
    v: {
      t: 'steps',
      items: ['Identifikasi kebutuhan data', 'Identifikasi sumber data', 'Akses & ekstraksi (izin + metode)', 'Pembersihan & validasi'],
      hl: 2,
      cap: 'Izin akses adalah bagian dari tahap ekstraksi, bukan urusan belakangan.'
    }
  },
  {
    q: 'Data penjualan tersimpan di MySQL. Tim ingin mengambil hanya transaksi tahun 2025 beserta kolom pelanggan, tanpa mengunduh seluruh tabel. Metode akses yang paling tepat adalah…',
    o: [
      'Web scraping dengan BeautifulSoup',
      'Query SQL langsung ke database relasional',
      'Membaca file CSV hasil ekspor manual',
      'Memanggil REST API pihak ketiga'
    ],
    a: 1,
    e: 'Database relasional diakses dengan query SQL, termasuk klausa filter seperti WHERE tahun = 2025 — ini metode yang disebut materi. Scraping untuk halaman web, CSV berarti sudah diekspor lebih dulu (bukan efisien), dan API tidak relevan bila data ada di database sendiri.',
    v: {
      t: 'tab',
      head: ['Sumber data', 'Metode akses'],
      rows: [
        ['Database relasional', 'Query SQL'],
        ['Layanan web', 'Permintaan HTTP / API'],
        ['Halaman web', 'Web scraping (BeautifulSoup, Scrapy)']
      ],
      hl: [[0, 1]],
      cap: 'Pemilihan metode mengikuti bentuk sumber datanya.'
    }
  },
  {
    q: 'Skrip mengambil data dari API dengan requests.get(), lalu langsung mengolah response.json() tanpa memeriksa status. Pada suatu hari API mengembalikan kode 500. Apa yang paling mungkin terjadi dan bagaimana penanganan yang benar?',
    o: [
      'Data tetap valid karena JSON selalu tersedia; tidak perlu penanganan',
      'Skrip akan mengolah isi error sebagai data, sehingga hasil analisis rusak; kode status harus diperiksa sebelum parsing',
      'Kode 500 berarti data kosong dan aman diabaikan',
      'Kode 500 hanya terjadi pada web scraping, bukan API'
    ],
    a: 1,
    e: 'Contoh kode di materi memeriksa response.status_code == 200 sebelum memproses, dan mencetak pesan error bila bukan 200. Tanpa pemeriksaan, isi halaman error bisa masuk ke DataFrame. Kode 500 adalah server error, bukan data kosong, dan tetap relevan untuk API.',
    v: {
      t: 'steps',
      items: ['response = requests.get(url)', 'if status_code == 200 → proses JSON', 'else → catat error, jangan parsing', 'Simpan log kegagalan untuk diulang'],
      hl: 1,
      cap: 'Pemeriksaan status adalah pengaman sebelum data masuk ke pipeline.'
    }
  },
  {
    q: 'Data penjualan terdiri atas dua periode dan harus disimpan dalam satu berkas Excel dengan sheet terpisah bernama Q1 dan Q2. Pendekatan yang sesuai contoh materi adalah…',
    o: [
      'Menulis dua file CSV terpisah lalu menggabungkannya secara manual',
      'Memakai pd.ExcelWriter dengan to_excel(..., sheet_name="Q1") dan sheet_name="Q2"',
      'Menyimpan keduanya sebagai JSON dengan kunci berbeda',
      'Menggabungkan kedua periode menjadi satu sheet agar ringkas'
    ],
    a: 1,
    e: 'Materi memakai pd.ExcelWriter(engine="openpyxl") dan menulis tiap DataFrame ke sheet_name berbeda. Dua CSV terpisah tidak memenuhi syarat satu berkas, JSON bukan format Excel, dan menggabungkan menjadi satu sheet menghilangkan pemisahan periode.',
    v: {
      t: 'tab',
      head: ['Kebutuhan', 'Cara'],
      rows: [
        ['Satu berkas, banyak periode', 'ExcelWriter + sheet_name'],
        ['Membaca satu sheet', 'read_excel(sheet_name="Q1")'],
        ['Membaca semua sheet', 'read_excel(sheet_name=None)']
      ],
      hl: [[0, 1]],
      cap: 'sheet_name=None mengembalikan kamus berisi semua sheet.'
    }
  },
  {
    q: 'Sebuah berkas JSON berisi metadata di tingkat atas dan daftar pelanggan dengan transaksi bersarang di dalamnya. Tim ingin tabel datar berisi satu baris per pelanggan dengan kolom transaksi yang sudah diurai. Fungsi yang paling tepat adalah…',
    o: [
      'pd.read_json() tanpa argumen tambahan',
      'pd.json_normalize() pada daftar pelanggan',
      'json.dump() lalu pd.DataFrame() langsung dari string',
      'pd.read_csv() dengan pemisah koma'
    ],
    a: 1,
    e: 'pd.json_normalize() meratakan struktur bersarang menjadi kolom, dan itulah yang dipakai materi untuk data pelanggan. read_json pada struktur bersarang masih menyisakan objek di dalam sel; json.dump justru menulis, bukan membaca; CSV tidak relevan untuk JSON.',
    v: {
      t: 'steps',
      items: ['JSON bersarang', 'Ambil daftar customers', 'json_normalize → tabel datar', 'Siap dianalisis'],
      hl: 2,
      cap: 'Normalisasi mengubah struktur bersarang menjadi kolom yang bisa diolah model.'
    }
  },
  {
    q: 'Tim membuat 1.000 baris data sintetis dengan np.random.seed(42) lalu np.random.randint untuk beberapa kolom. Sebulan kemudian rekan lain menjalankan skrip yang sama dan ingin mendapatkan angka identik. Apa yang menentukan hal itu?',
    o: [
      'Versi pandas yang dipakai',
      'Nilai seed 42 yang sama sebelum pembangkitan angka acak',
      'Jumlah kolom pada DataFrame',
      'Nama variabel DataFrame'
    ],
    a: 1,
    e: 'Seed menetapkan titik awal pembangkit bilangan pseudo-acak, sehingga urutan angka yang dihasilkan dapat direproduksi. Versi pustaka bisa memengaruhi detail kecil, tetapi faktor penentu pada kode ini adalah seed; jumlah kolom dan nama variabel tidak memengaruhi angka acak.',
    v: {
      t: 'steps',
      items: ['np.random.seed(42)', 'Bangkitkan 1.000 baris', 'Simpan hasil', 'Jalankan ulang dengan seed sama → hasil identik'],
      hl: 0,
      cap: 'Reproduksibilitas adalah alasan utama seed dipakai dalam contoh materi.'
    }
  },
  {
    q: 'Contoh data karyawan pada materi berisi kolom ID, Nama, Usia, Kota, dan Gaji untuk lima karyawan dengan gaji 5, 7, 6,5, 8, dan 4,5 juta rupiah. Berapa rata-rata gaji dan berapa jumlah kolom dataset tersebut?',
    o: [
      'Rata-rata 6,2 juta dengan 5 kolom',
      'Rata-rata 6,0 juta dengan 4 kolom',
      'Rata-rata 6,2 juta dengan 4 kolom',
      'Rata-rata 6,5 juta dengan 5 kolom'
    ],
    a: 0,
    e: 'Jumlah gaji = 5 + 7 + 6,5 + 8 + 4,5 = 31 juta; dibagi 5 karyawan menghasilkan 6,2 juta. Kolomnya ada lima: ID, Nama, Usia, Kota, dan Gaji — sehingga pilihan lain salah pada salah satu angka.',
    v: {
      t: 'tab',
      head: ['ID', 'Nama', 'Usia', 'Kota', 'Gaji (juta)'],
      rows: [
        ['1', 'Budi Santoso', '25', 'Jakarta', '5,0'],
        ['2', 'Ani Wijaya', '30', 'Bandung', '7,0'],
        ['3', 'Citra Dewi', '28', 'Surabaya', '6,5'],
        ['4', 'Doni Pratama', '35', 'Jakarta', '8,0'],
        ['5', 'Eka Putri', '22', 'Medan', '4,5']
      ],
      hl: [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4]],
      cap: 'Total 31 juta ÷ 5 = 6,2 juta; dataset memiliki 5 kolom.'
    }
  },
  {
    q: 'Data penjualan Q1 menunjukkan Laptop terjual 120 unit dengan revenue Rp180.000.000. Pada Q2, Laptop terjual 135 unit dengan revenue Rp202.500.000. Kesimpulan yang paling tepat adalah…',
    o: [
      'Harga satuan Laptop naik pada Q2',
      'Harga satuan Laptop turun pada Q2',
      'Harga satuan tetap Rp1.500.000; kenaikan revenue murni berasal dari volume',
      'Data Q2 tidak konsisten sehingga tidak dapat dibandingkan'
    ],
    a: 2,
    e: '180.000.000 ÷ 120 = 1.500.000 dan 202.500.000 ÷ 135 = 1.500.000 — harga satuan identik. Kenaikan revenue 22,5 juta berasal dari tambahan 15 unit, bukan dari perubahan harga. Data justru konsisten sempurna.',
    v: {
      t: 'tab',
      head: ['Periode', 'Unit', 'Revenue', 'Harga satuan'],
      rows: [
        ['Q1', '120', 'Rp180.000.000', 'Rp1.500.000'],
        ['Q2', '135', 'Rp202.500.000', 'Rp1.500.000']
      ],
      hl: [[0, 3], [1, 3]],
      cap: 'Memeriksa harga satuan adalah cara cepat menguji kewajaran dua laporan penjualan.'
    }
  },
  {
    q: 'Dalam rencana pengumpulan data untuk prediksi harga rumah, tim mencatat "jenis properti" dan "lokasi" sebagai data kualitatif, sedangkan "luas bangunan" dan "harga" sebagai kuantitatif. Mengapa pemisahan ini penting sebelum data dikumpulkan?',
    o: [
      'Karena keduanya memerlukan metode pengolahan berbeda: kuantitatif untuk perhitungan statistik, kualitatif untuk pengelompokan/kategori',
      'Karena data kualitatif tidak boleh dipakai dalam data science',
      'Karena data kuantitatif selalu lebih akurat daripada kualitatif',
      'Karena pemisahan ini hanya formalitas dokumentasi'
    ],
    a: 0,
    e: 'Materi membedakan data kuantitatif (angka, dapat dihitung) dan kualitatif (deskriptif/kategori). Perbedaan ini menentukan perlakuan berikutnya, misalnya statistik deskriptif untuk yang numerik dan encoding untuk yang kategorikal. Data kualitatif tetap penting, dan akurasi bukan soal tipe data.',
    v: {
      t: 'tab',
      head: ['Kolom', 'Tipe', 'Perlakuan lanjutan'],
      rows: [
        ['Luas bangunan', 'Kuantitatif', 'Statistik & scaling'],
        ['Harga', 'Kuantitatif', 'Target regresi'],
        ['Jenis properti', 'Kualitatif', 'Encoding kategori'],
        ['Lokasi', 'Kualitatif', 'Encoding / agregasi']
      ],
      hl: [[2, 2], [3, 2]],
      cap: 'Tipe data menentukan cara data diolah pada tahap berikutnya.'
    }
  },
  {
    q: 'Sebuah survei kepuasan pelanggan hanya disebar melalui media sosial resmi perusahaan, sehingga mayoritas responden adalah pengikut setia. Data terkumpul 50.000 baris dan sangat rapi, tetapi hasilnya dinilai tidak dapat mewakili seluruh pelanggan. Masalah utamanya adalah…',
    o: [
      'Jumlah barisnya terlalu sedikit',
      'Data tidak representatif karena cara pengumpulan menimbulkan bias pemilihan',
      'Format data tidak sesuai standar',
      'Tidak ada API yang dipakai'
    ],
    a: 1,
    e: 'Materi menekankan data harus relevan, akurat, dan representatif. 50.000 baris tidak menutupi fakta bahwa sampelnya miring ke pengikut setia — ini bias pemilihan. Format dan metode akses bukan penyebab masalah keterwakilan.',
    v: {
      t: 'steps',
      items: ['Populasi: seluruh pelanggan', 'Sampel: hanya pengikut media sosial', 'Hasil: terlalu positif', 'Kesimpulan tidak dapat digeneralisasi'],
      hl: 1,
      cap: 'Banyaknya baris tidak memperbaiki sampel yang bias.'
    }
  },
  {
    q: 'Data sensor suhu dikirim terus-menerus setiap detik dan harus dianalisis hampir seketika. Format dan jalur pengumpulan yang paling sesuai adalah…',
    o: [
      'File Excel yang dikirim lewat email setiap minggu',
      'Real-time stream dari perangkat IoT',
      'Web scraping halaman dashboard sensor',
      'Data publik dari badan statistik'
    ],
    a: 1,
    e: 'Materi mencantumkan real-time stream (sensor data, IoT devices) sebagai format untuk data yang mengalir terus-menerus. Excel mingguan dan scraping dashboard terlalu lambat, sedangkan data publik tidak memberikan granularitas per detik dari sensor internal.',
    v: {
      t: 'tab',
      head: ['Format', 'Cocok untuk'],
      rows: [
        ['File lokal (CSV/Excel/JSON)', 'Data statis hasil ekspor'],
        ['Database SQL', 'Data operasional terstruktur'],
        ['API / REST', 'Pengambilan berkala dari layanan'],
        ['Real-time stream', 'Sensor & IoT, analisis seketika'],
        ['Cloud storage', 'Berkas besar bersama']
      ],
      hl: [[3, 1]],
      cap: 'Kecepatan data menentukan pilihan format dan jalur pengumpulan.'
    }
  },
  {
    q: 'Empat tahap proses pengumpulan data adalah identifikasi kebutuhan data, identifikasi sumber data, akses dan ekstraksi, serta pembersihan dan validasi. Sebuah tim melewati tahap pertama dan langsung mengekstrak semua tabel yang tersedia. Akibat yang paling mungkin muncul adalah…',
    o: [
      'Data menjadi terlalu bersih sehingga tidak perlu dianalisis',
      'Volume data berlebih tetapi banyak yang tidak relevan, sehingga waktu habis pada data yang tidak menjawab pertanyaan',
      'Model otomatis menjadi lebih akurat karena datanya banyak',
      'Tidak ada akibat karena semua data selalu berguna'
    ],
    a: 1,
    e: 'Identifikasi kebutuhan data menentukan apa yang ingin dicapai dan pertanyaan kunci yang harus dijawab, sehingga ekstraksi menjadi terarah. Tanpa itu, tim mengumpulkan banyak kolom tidak relevan. Volume besar tidak otomatis meningkatkan akurasi — justru menambah noise dan biaya.',
    v: {
      t: 'steps',
      items: ['Identifikasi kebutuhan data', 'Identifikasi sumber data', 'Akses & ekstraksi', 'Pembersihan & validasi'],
      hl: 0,
      cap: 'Tahap pertama menjaga agar ekstraksi tidak menjadi pengumpulan tanpa arah.'
    }
  },
  {
    q: 'Skrip membuat deret waktu dengan pd.date_range(start="2024-01-01", periods=1000, freq="H"). Sekitar berapa lama rentang waktu yang tercakup, dan apa implikasinya bila data dianggap mewakili satu bulan?',
    o: [
      'Sekitar 42 hari, sehingga tidak tepat bila disebut mewakili satu bulan',
      'Sekitar 24 hari, sehingga aman disebut satu bulan',
      'Tepat 30 hari, karena periods dihitung per hari',
      'Sekitar 100 hari, karena freq="H" berarti per hari'
    ],
    a: 0,
    e: '1.000 jam ÷ 24 = 41,7 hari, jadi rentangnya sekitar 42 hari — lebih panjang dari satu bulan. Freq "H" berarti per jam, bukan per hari, sehingga perhitungan 24 atau 100 hari tidak sesuai.',
    v: {
      t: 'bar',
      labels: ['1 bulan (30 hari)', 'Rentang 1.000 jam'],
      values: [30, 42],
      hl: 1,
      suffix: ' hari',
      cap: '1.000 jam ≈ 41,7 hari; klaim "satu bulan" akan menyesatkan.'
    }
  }
];
