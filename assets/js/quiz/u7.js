/* Bank soal — Unit 7: Membangun Model (18 soal) */
window.QZ = window.QZ || {};
window.QZ[7] = [
  {
    q: 'Sebuah dataset berisi kolom luas_rumah, jumlah_kamar_tidur, dan harga_rumah. Tim ingin memprediksi harga dari dua kolom lainnya. Dalam kerangka supervised learning, peran masing-masing adalah…',
    o: [
      'harga_rumah adalah fitur, dua kolom lain adalah label',
      'luas_rumah dan jumlah_kamar_tidur adalah fitur (variabel independen), harga_rumah adalah label (variabel dependen)',
      'Ketiganya adalah label karena berupa angka',
      'Ketiganya adalah fitur karena berada dalam satu tabel'
    ],
    a: 1,
    e: 'Label adalah target yang ingin diprediksi — di sini harga_rumah. Fitur adalah input yang menjelaskan target, yaitu luas dan jumlah kamar. Materi menyebut label sebagai variabel dependen dan fitur sebagai variabel independen.',
    v: {
      t: 'tab',
      head: ['Kolom', 'Peran'],
      rows: [
        ['luas_rumah', 'Fitur (independen)'],
        ['jumlah_kamar_tidur', 'Fitur (independen)'],
        ['harga_rumah', 'Label (dependen)']
      ],
      hl: [[2, 1]],
      cap: 'Label adalah yang diprediksi; fitur adalah yang menjelaskan.'
    }
  },
  {
    q: 'Sebuah film dapat berlabel Action, Comedy, dan Drama sekaligus dalam satu baris data. Jenis label ini adalah…',
    o: [
      'Binary classification',
      'Multi-class classification',
      'Multi-label classification',
      'Regression'
    ],
    a: 2,
    e: 'Materi membedakan multi-class (satu label dari beberapa kategori yang saling eksklusif) dan multi-label (satu instance dapat memiliki beberapa label). Genre film adalah contoh multi-label yang disebut eksplisit. Regresi dipakai untuk nilai kontinu.',
    v: {
      t: 'tab',
      head: ['Jenis', 'Ciri', 'Contoh'],
      rows: [
        ['Binary', '2 kelas', 'Spam / bukan spam'],
        ['Multi-class', '3+ kelas, saling eksklusif', 'Kucing, anjing, burung'],
        ['Multi-label', 'Banyak label sekaligus', 'Genre film'],
        ['Continuous', 'Nilai kontinu', 'Harga rumah']
      ],
      hl: [[2, 1], [2, 2]],
      cap: 'Satu instance boleh memiliki lebih dari satu label pada multi-label.'
    }
  },
  {
    q: 'Perusahaan ingin memprediksi apakah pelanggan akan churn bulan depan (ya/tidak) berdasarkan riwayat pemakaian. Algoritma dan metrik yang paling sesuai adalah…',
    o: [
      'Linear Regression dengan metrik MAE dan RMSE',
      'Logistic Regression dengan metrik accuracy, precision, recall, F1, dan ROC-AUC',
      'K-Means dengan metrik RMSE',
      'PCA dengan metrik explained variance'
    ],
    a: 1,
    e: 'Target ya/tidak adalah klasifikasi biner; materi mencantumkan Logistic Regression sebagai algoritma dan accuracy/precision/recall/F1/ROC-AUC sebagai metriknya. Regresi linear untuk target kontinu, K-Means untuk clustering, dan PCA untuk reduksi dimensi.',
    v: {
      t: 'tab',
      head: ['Jenis masalah', 'Algoritma', 'Metrik'],
      rows: [
        ['Klasifikasi biner', 'Logistic Regression, Decision Tree', 'Accuracy, Precision, Recall, F1, AUC'],
        ['Regresi', 'Linear Regression, Random Forest Regressor', 'MAE, MSE, RMSE, R², MAPE'],
        ['Clustering', 'K-Means, Hierarchical', 'Evaluasi struktur cluster']
      ],
      hl: [[0, 1], [0, 2]],
      cap: 'Pemilihan algoritma dan metrik mengikuti jenis label.'
    }
  },
  {
    q: 'Urutan siklus pengembangan model yang benar adalah…',
    o: [
      'Pengumpulan data → preprocessing → pemilihan model → training → evaluasi → fine-tuning → deployment',
      'Training → pengumpulan data → deployment → evaluasi → preprocessing',
      'Pemilihan model → deployment → pengumpulan data → training → evaluasi',
      'Preprocessing → deployment → training → pengumpulan data → evaluasi'
    ],
    a: 0,
    e: 'Materi menyusun siklus: pengumpulan data, preprocessing, pemilihan model, training, evaluasi, fine-tuning dan optimasi, lalu deployment (ditambah monitoring setelahnya). Urutan lain menempatkan deployment sebelum model dilatih, yang tidak mungkin dilakukan.',
    v: {
      t: 'steps',
      items: ['Pengumpulan data', 'Preprocessing', 'Pemilihan model', 'Training', 'Evaluasi', 'Fine-tuning & optimasi', 'Deployment', 'Monitoring'],
      hl: [0, 1, 2, 3, 4, 5, 6],
      cap: 'Setiap tahap bergantung pada tahap sebelumnya.'
    }
  },
  {
    q: 'Sebuah model regresi menghasilkan error sangat kecil pada data training tetapi error besar pada data testing. Diagnosis dan tindakan yang paling tepat adalah…',
    o: [
      'Underfitting; tambah regularisasi berlebihan',
      'Overfitting; kurangi kompleksitas model atau lakukan fine-tuning dan pemilihan fitur',
      'Model sudah optimal; abaikan selisih tersebut',
      'Data testing yang salah; ganti dengan data training'
    ],
    a: 1,
    e: 'Materi mendefinisikan overfitting sebagai model terlalu kompleks yang menangkap noise sehingga bagus di training dan buruk di data baru; solusinya penyederhanaan melalui tuning dan pemilihan fitur. Underfitting justru buruk di keduanya, dan mengganti data uji dengan data latih menghapus kemampuan mendeteksi masalah.',
    v: {
      t: 'bar',
      labels: ['Error training', 'Error testing'],
      values: [2, 38],
      hl: 1,
      suffix: '%',
      cap: 'Jurang besar antara error latih dan uji adalah tanda overfitting.'
    }
  },
  {
    q: 'Pada K-Means, setelah setiap titik data dimasukkan ke cluster dengan centroid terdekat, langkah berikutnya adalah…',
    o: [
      'Menghapus titik yang jauh dari centroid',
      'Menghitung ulang centroid sebagai rata-rata semua titik dalam cluster tersebut',
      'Menambah jumlah cluster K',
      'Mengubah label target setiap titik'
    ],
    a: 1,
    e: 'Materi menyebut langkah keempat: hitung ulang centroid berdasarkan rata-rata titik dalam cluster, lalu ulangi penempatan sampai centroid stabil. K-Means tidak menghapus titik, tidak menambah K di tengah iterasi, dan tidak memakai label target karena unsupervised.',
    v: {
      t: 'steps',
      items: ['Tentukan K', 'Pilih K centroid awal', 'Tempatkan titik ke centroid terdekat', 'Hitung ulang centroid (rata-rata)', 'Ulangi sampai stabil'],
      hl: [3],
      cap: 'Pergantian penempatan dan pembaruan centroid adalah inti iterasi K-Means.'
    }
  },
  {
    q: 'Sebuah tim ingin mengelompokkan pelanggan tetapi belum tahu berapa jumlah kelompok yang wajar. Algoritma yang memungkinkan penentuan jumlah cluster setelah melihat struktur data adalah…',
    o: [
      'K-Means, karena jumlah cluster harus ditentukan sebelum proses berjalan',
      'Hierarchical clustering, karena dendrogram dapat dipotong pada ketinggian tertentu untuk memperoleh jumlah cluster',
      'Linear Regression, karena menghasilkan koefisien',
      'Naïve Bayes, karena berbasis probabilitas'
    ],
    a: 1,
    e: 'Materi menegaskan hierarchical clustering tidak memerlukan K di awal; jumlah cluster ditentukan dengan memotong dendrogram. K-Means justru membutuhkan K sebelum iterasi dimulai. Regresi dan Naïve Bayes bukan algoritma clustering.',
    v: {
      t: 'tab',
      head: ['Algoritma', 'Perlu K di awal?'],
      rows: [
        ['K-Means', 'Ya'],
        ['Hierarchical', 'Tidak — potong dendrogram'],
        ['DBSCAN', 'Tidak — berbasis kepadatan']
      ],
      hl: [[1, 1]],
      cap: 'Dendrogram memberi kebebasan menentukan jumlah cluster setelah struktur terlihat.'
    }
  },
  {
    q: 'Pada agglomerative clustering, proses dimulai dengan…',
    o: [
      'Seluruh data sebagai satu cluster besar, lalu dipecah',
      'Setiap titik sebagai cluster terpisah, lalu dua cluster terdekat digabung berulang',
      'Menentukan centroid acak seperti K-Means',
      'Menghapus outlier terlebih dahulu'
    ],
    a: 1,
    e: 'Agglomerative berarti bottom-up: setiap titik mulai sebagai cluster sendiri, lalu pasangan paling mirip digabung hingga tersisa satu cluster. Memulai dari satu cluster besar dan memecahnya adalah divisive (top-down).',
    v: {
      t: 'steps',
      items: ['Setiap titik = satu cluster', 'Gabung dua cluster terdekat', 'Ulangi sampai satu cluster'],
      hl: 0,
      cap: 'Agglomerative = bottom-up; divisive = top-down.'
    }
  },
  {
    q: 'Pada dendrogram hierarchical clustering, ketinggian garis tempat dua cabang bergabung menyatakan…',
    o: [
      'Jumlah anggota cluster',
      'Jarak antar cluster yang digabung pada tahap itu',
      'Nomor urut penggabungan',
      'Tingkat akurasi model'
    ],
    a: 1,
    e: 'Materi menyatakan setiap penggabungan terjadi pada ketinggian yang menyatakan jarak antar cluster. Semakin tinggi penggabungan, semakin tidak mirip cluster yang disatukan. Jumlah anggota dan urutan bukan makna sumbu vertikal dendrogram.',
    v: {
      t: 'curve',
      pts: [[0, 0], [0, 0], [0.2, 0.25], [0.2, 0.25], [0.4, 0.25], [0.4, 0.55], [0.6, 0.55], [0.6, 0.9], [0.8, 0.9], [1, 0.9]],
      xl: 'objek',
      yl: 'jarak',
      color: '#9b7bf6',
      cap: 'Semakin tinggi titik gabung, semakin besar jarak antar cluster.'
    }
  },
  {
    q: 'DBSCAN dipilih untuk data pelanggan dengan bentuk cluster tidak beraturan dan mengandung titik noise. Alasan yang paling tepat adalah…',
    o: [
      'DBSCAN berbasis kepadatan sehingga dapat menemukan cluster berbentuk bebas dan menandai noise',
      'DBSCAN memerlukan K yang ditentukan lebih dulu',
      'DBSCAN adalah algoritma supervised untuk klasifikasi',
      'DBSCAN bekerja dengan memotong dendrogram'
    ],
    a: 0,
    e: 'Materi mencantumkan DBSCAN sebagai Density-Based Spatial Clustering of Applications with Noise — pendekatan berbasis kepadatan yang menangani noise. DBSCAN tidak memerlukan K, bukan supervised, dan tidak memakai dendrogram.',
    v: {
      t: 'tab',
      head: ['Algoritma', 'Pendekatan'],
      rows: [
        ['K-Means', 'Partisi berdasarkan centroid'],
        ['Hierarchical', 'Penggabungan bertingkat'],
        ['DBSCAN', 'Kepadatan, tahan noise'],
        ['GMM', 'Probabilistik']
      ],
      hl: [[2, 1]],
      cap: 'Bentuk cluster yang tidak beraturan adalah keunggulan pendekatan berbasis kepadatan.'
    }
  },
  {
    q: 'Manakah yang paling tepat menggambarkan PCA dalam daftar algoritma unsupervised?',
    o: [
      'PCA mengelompokkan data menjadi K cluster',
      'PCA mereduksi dimensi dengan mempertahankan komponen yang menjelaskan variansi terbesar',
      'PCA memprediksi label kontinu',
      'PCA adalah algoritma supervised untuk klasifikasi'
    ],
    a: 1,
    e: 'PCA (Principal Component Analysis) termasuk unsupervised learning dan berfungsi untuk reduksi dimensionalitas, bukan clustering. Ia tidak memprediksi label, sehingga tidak termasuk supervised.',
    v: {
      t: 'steps',
      items: ['Banyak fitur asli', 'Hitung komponen utama', 'Pertahankan variansi terbesar', 'Fitur lebih sedikit, informasi utama tetap'],
      hl: [1, 2],
      cap: 'PCA mengubah ruang fitur, bukan mengelompokkan atau memprediksi label.'
    }
  },
  {
    q: 'Perbedaan paling mendasar antara supervised dan unsupervised learning adalah…',
    o: [
      'Supervised memakai data berlabel, unsupervised mencari struktur pada data tanpa label',
      'Supervised hanya untuk regresi, unsupervised hanya untuk klasifikasi',
      'Supervised tidak memerlukan data, unsupervised memerlukan data',
      'Keduanya sama, hanya berbeda nama'
    ],
    a: 0,
    e: 'Materi menegaskan supervised dilatih dengan data yang sudah memiliki label, sedangkan unsupervised bekerja tanpa target untuk menemukan pola tersembunyi seperti clustering dan reduksi dimensi. Keduanya memerlukan data, dan supervised mencakup regresi maupun klasifikasi.',
    v: {
      t: 'tab',
      head: ['Aspek', 'Supervised', 'Unsupervised'],
      rows: [
        ['Data', 'Berlabel', 'Tanpa label'],
        ['Tujuan', 'Prediksi target', 'Temukan struktur'],
        ['Contoh', 'Regresi, klasifikasi', 'Clustering, PCA']
      ],
      hl: [[0, 1], [0, 2]],
      cap: 'Ada tidaknya label adalah pembeda utamanya.'
    }
  },
  {
    q: 'Model memprediksi rumah berukuran 120 m² bernilai Rp500 juta. Pernyataan yang paling tepat tentang jenis model ini adalah…',
    o: [
      'Klasifikasi, karena keluarannya satu angka',
      'Regresi, karena targetnya nilai kontinu berupa harga',
      'Clustering, karena rumah dikelompokkan berdasarkan ukuran',
      'Reinforcement learning, karena model belajar dari reward'
    ],
    a: 1,
    e: 'Keluaran berupa angka kontinu (harga) adalah ciri regresi, dan materi memakai contoh persis kasus ini. Klasifikasi menghasilkan kategori, clustering mengelompokkan tanpa target, dan reinforcement learning belajar dari reward — tidak ada di sini.',
    v: {
      t: 'tab',
      head: ['Keluaran', 'Jenis'],
      rows: [
        ['Rp500 juta (kontinu)', 'Regresi'],
        ['Spam / bukan spam', 'Klasifikasi biner'],
        ['Kucing / anjing / burung', 'Klasifikasi multi-kelas']
      ],
      hl: [[0, 1]],
      cap: 'Bentuk keluaran menentukan jenis tugasnya.'
    }
  },
  {
    q: 'Setelah enam bulan berjalan di produksi, akurasi model menurun dari 91% menjadi 74% karena pola pembelian pelanggan berubah. Tindakan yang paling sesuai siklus pengembangan model adalah…',
    o: [
      'Membiarkan karena penurunan akurasi adalah hal normal',
      'Melakukan monitoring dan pemeliharaan: mengevaluasi ulang lalu melatih kembali model dengan data terbaru',
      'Mengganti metrik evaluasi agar angkanya terlihat baik',
      'Menghapus data enam bulan terakhir'
    ],
    a: 1,
    e: 'Materi menempatkan monitoring dan pemeliharaan sebagai tahap pascadeployment: model dipantau dan dilatih ulang bila terjadi perubahan mendasar pada data. Membiarkan penurunan berarti membiarkan keputusan salah; mengganti metrik menyembunyikan masalah; menghapus data justru menghilangkan informasi perubahan.',
    v: {
      t: 'steps',
      items: ['Deployment', 'Monitoring performa', 'Deteksi penurunan (91% → 74%)', 'Latih ulang dengan data terbaru'],
      hl: [1, 2, 3],
      cap: 'Model di produksi perlu dipantau, bukan dianggap selesai setelah deploy.'
    }
  },
  {
    q: 'Sebuah tim memakai Naïve Bayes untuk mengklasifikasikan sentimen ulasan produk. Mengapa algoritma ini masuk kategori supervised?',
    o: [
      'Karena memerlukan data ulasan yang sudah diberi label sentimen untuk belajar',
      'Karena tidak memerlukan data sama sekali',
      'Karena hanya bisa memproses angka',
      'Karena termasuk algoritma clustering'
    ],
    a: 0,
    e: 'Naïve Bayes adalah algoritma klasifikasi, dan klasifikasi termasuk supervised karena dilatih dengan data berlabel. Materi mencantumkannya dalam daftar algoritma klasifikasi. Ia tetap memerlukan data dan dapat memproses teks, bukan hanya angka.',
    v: {
      t: 'steps',
      items: ['Ulasan + label sentimen', 'Latih Naïve Bayes', 'Model mempelajari pola kata', 'Prediksi sentimen ulasan baru'],
      hl: 0,
      cap: 'Ketersediaan label adalah syarat supervised learning.'
    }
  },
  {
    q: 'Sebuah model klasifikasi multi-kelas digunakan untuk memprediksi kategori produk (5 kategori saling eksklusif). Metrik evaluasi yang paling tepat adalah…',
    o: [
      'MAE dan RMSE',
      'Accuracy, macro/micro F1, dan confusion matrix',
      'R² dan MAPE',
      'Akurasi dan error rate'
    ],
    a: 1,
    e: 'Materi mencantumkan accuracy, macro/micro F1, dan confusion matrix untuk multi-class classification. MAE, RMSE, R², dan MAPE adalah metrik regresi, sedangkan akurasi dan error rate tidak mengukur kualitas cluster.',
    v: {
      t: 'tab',
      head: ['Jenis label', 'Metrik'],
      rows: [
        ['Binary', 'Accuracy, Precision, Recall, F1, ROC-AUC'],
        ['Multi-class', 'Accuracy, Macro/Micro F1, Confusion Matrix'],
        ['Multi-label', 'Hamming Loss, Subset Accuracy, Jaccard'],
        ['Regression', 'MAE, MSE, RMSE, R², MAPE']
      ],
      hl: [[1, 1]],
      cap: 'Metrik mengikuti struktur label, bukan sekadar jenis algoritma.'
    }
  },
  {
    q: 'Model dilatih pada data historis 2022–2024 dan dipakai untuk memprediksi 2026 tanpa pernah diperbarui. Risiko utama yang dihadapi adalah…',
    o: [
      'Model menjadi terlalu sederhana sehingga underfitting',
      'Pola data berubah seiring waktu sehingga model kehilangan relevansi dan perlu dilatih ulang',
      'Model otomatis menyesuaikan diri dengan data baru',
      'Tidak ada risiko selama model memakai algoritma populer'
    ],
    a: 1,
    e: 'Materi menekankan monitoring dan pemeliharaan karena model mungkin perlu diperbarui bila terjadi perubahan mendasar pada data. Model tidak menyesuaikan diri sendiri setelah dilatih, dan popularitas algoritma tidak menjamin relevansi.',
    v: {
      t: 'steps',
      items: ['Latih pada 2022–2024', 'Deploy', 'Pola berubah pada 2025–2026', 'Performa turun → latih ulang'],
      hl: [2, 3],
      cap: 'Data historis tidak otomatis mewakili masa depan.'
    }
  }
];
