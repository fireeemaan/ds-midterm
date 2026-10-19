/* Bank soal — Unit 8: Mengevaluasi Model (18 soal) */
window.QZ = window.QZ || {};
window.QZ[8] = [
  {
    q: 'Tiga observasi memiliki error absolut 10, 20, dan 10. Berapa MAE-nya?',
    o: [
      '10,0',
      '13,33',
      '40,0',
      '200,0'
    ],
    a: 1,
    e: 'MAE = (10 + 20 + 10) / 3 = 13,33 — sesuai contoh di materi. Angka 40 adalah jumlah error tanpa dibagi, 10 hanya salah satu error, dan 200 adalah MSE, bukan MAE.',
    v: {
      t: 'tab',
      head: ['Aktual', 'Prediksi', 'Error'],
      rows: [
        ['100', '90', '10'],
        ['200', '220', '20'],
        ['300', '290', '10']
      ],
      hl: [[0, 2], [1, 2], [2, 2]],
      cap: 'MAE = rata-rata error absolut = 13,33.'
    }
  },
  {
    q: 'Dengan error 10, 20, dan 10 yang sama, berapa MSE-nya?',
    o: [
      '13,33',
      '40',
      '200',
      '14,14'
    ],
    a: 2,
    e: 'MSE mengkuadratkan tiap error: 100 + 400 + 100 = 600, lalu dibagi 3 = 200. Angka 13,33 adalah MAE, 40 adalah jumlah error absolut, dan 14,14 adalah RMSE (akar dari 200).',
    v: {
      t: 'tab',
      head: ['Error', 'Error²'],
      rows: [
        ['10', '100'],
        ['20', '400'],
        ['10', '100']
      ],
      hl: [[1, 1]],
      cap: 'MSE = (100 + 400 + 100) / 3 = 200.'
    }
  },
  {
    q: 'Jika MSE = 200, berapa RMSE dan mengapa RMSE lebih mudah ditafsirkan?',
    o: [
      'RMSE = 100, karena MSE dibagi 2',
      'RMSE ≈ 14,14, karena akar kuadrat mengembalikan satuan ke satuan target asli',
      'RMSE = 400, karena dikuadratkan dua kali',
      'RMSE = 200, karena satuannya sama dengan MSE'
    ],
    a: 1,
    e: 'RMSE = √200 ≈ 14,14, sehingga satuannya kembali sama dengan data asli (misalnya rupiah). MSE memiliki satuan kuadrat sehingga sulit ditafsirkan langsung. Membagi 2 atau mengkuadratkan ulang bukan definisi RMSE.',
    v: {
      t: 'bar',
      labels: ['MAE', 'RMSE', 'MSE'],
      values: [13.33, 14.14, 200],
      hl: 1,
      cap: 'MAE dan RMSE berada pada skala data asli; MSE pada skala kuadrat.'
    }
  },
  {
    q: 'Sebuah model memiliki MAE Rp20 juta dan RMSE Rp65 juta. Kesimpulan yang paling tepat adalah…',
    o: [
      'Model tidak memiliki error besar karena RMSE masih di bawah 100',
      'Ada sebagian prediksi dengan error sangat besar, sehingga RMSE jauh di atas MAE',
      'MAE salah dihitung karena seharusnya sama dengan RMSE',
      'Model pasti overfitting'
    ],
    a: 1,
    e: 'Materi menyatakan bila RMSE jauh lebih tinggi daripada MAE, biasanya ada beberapa prediksi dengan error sangat besar — karena MSE memberi penalti kuadratik. Selisih besar itu justru sinyal adanya error ekstrem, bukan bukti model baik atau overfitting.',
    v: {
      t: 'bar',
      labels: ['MAE', 'RMSE'],
      values: [20, 65],
      hl: 1,
      suffix: ' jt',
      cap: 'Jurang MAE–RMSE menandakan distribusi error yang ekor panjang.'
    }
  },
  {
    q: 'Harga rumah sebenarnya Rp500 juta, prediksi model Rp450 juta. Berapa MAPE untuk observasi tersebut?',
    o: [
      '5%',
      '10%',
      '11,1%',
      '50%'
    ],
    a: 1,
    e: 'MAPE = |500 − 450| / 500 × 100% = 10%. Angka 11,1% muncul bila pembaginya 450 (nilai prediksi), padahal MAPE memakai nilai aktual. 5% dan 50% tidak sesuai perhitungan.',
    v: {
      t: 'steps',
      items: ['Aktual: Rp500 juta', 'Prediksi: Rp450 juta', 'Selisih: Rp50 juta', 'MAPE = 50/500 = 10%'],
      hl: [3],
      cap: 'MAPE menyatakan error relatif terhadap nilai aktual.'
    }
  },
  {
    q: 'Model regresi harga rumah memperoleh R² = 0,92. Interpretasi yang paling tepat adalah…',
    o: [
      'Model salah pada 92% data',
      'Model menjelaskan sekitar 92% variasi harga, sedangkan 8% sisanya tidak dijelaskan model',
      'Akurasi prediksi tepat 92% untuk setiap rumah',
      'Model lebih buruk daripada memakai nilai rata-rata'
    ],
    a: 1,
    e: 'R² mengukur proporsi variansi target yang dijelaskan model. Nilai 0,92 berarti 92% variasi terjelaskan dan 8% tidak. R² bukan tingkat kesalahan per prediksi, dan R² positif berarti model lebih baik daripada sekadar memakai rata-rata.',
    v: {
      t: 'bar',
      labels: ['Dijelaskan model', 'Tidak dijelaskan'],
      values: [92, 8],
      hl: 0,
      suffix: '%',
      cap: 'R² = 0,92 → 92% variansi terjelaskan.'
    }
  },
  {
    q: 'Sebuah model regresi menghasilkan R² = −0,15 pada data uji. Apa maknanya?',
    o: [
      'Model sangat baik karena tanda negatif menunjukkan error kecil',
      'Model lebih buruk daripada sekadar memprediksi nilai rata-rata',
      'Nilai tersebut mustahil terjadi',
      'Model menjelaskan 15% variansi'
    ],
    a: 1,
    e: 'Materi menjelaskan R² = 0 berarti model tidak lebih baik daripada memakai rata-rata, dan R² < 0 berarti model lebih buruk daripada prediksi rata-rata. Tanda negatif bukan penanda kualitas baik, dan nilainya mungkin terjadi pada data uji.',
    v: {
      t: 'tab',
      head: ['Nilai R²', 'Arti'],
      rows: [
        ['1,00', 'Prediksi sempurna'],
        ['0,70', 'Menjelaskan 70% variasi'],
        ['0', 'Setara prediksi rata-rata'],
        ['< 0', 'Lebih buruk daripada rata-rata']
      ],
      hl: [[3, 1]],
      cap: 'R² negatif adalah tanda model gagal bahkan dibanding baseline sederhana.'
    }
  },
  {
    q: 'Confusion matrix: TP = 30, FN = 70, FP = 20, TN = 80 (total 200 observasi). Berapa akurasi model?',
    o: [
      '30%',
      '40%',
      '55%',
      '80%'
    ],
    a: 2,
    e: 'Akurasi = (TP + TN) / total = (30 + 80) / 200 = 55%. Angka 30% adalah recall, 40% adalah F1, dan 80% adalah specificity — ketiganya metrik berbeda.',
    v: {
      t: 'tab',
      head: ['', 'Prediksi positif', 'Prediksi negatif'],
      rows: [
        ['Aktual positif', 'TP = 30', 'FN = 70'],
        ['Aktual negatif', 'FP = 20', 'TN = 80']
      ],
      hl: [[0, 1], [1, 2]],
      cap: 'Akurasi = (30 + 80) / 200 = 55%.'
    }
  },
  {
    q: 'Dengan matriks yang sama (TP 30, FN 70, FP 20, TN 80), berapa recall-nya dan apa artinya?',
    o: [
      '60% — dari yang diprediksi positif, 60% benar positif',
      '30% — model hanya menangkap 30 dari 100 kasus positif sebenarnya',
      '80% — model benar mengenali 80 kasus negatif',
      '55% — proporsi seluruh prediksi yang benar'
    ],
    a: 1,
    e: 'Recall = TP / (TP + FN) = 30 / 100 = 30%, artinya 70 kasus positif lolos deteksi. Angka 60% adalah precision, 80% specificity, dan 55% accuracy.',
    v: {
      t: 'bar',
      labels: ['Tertangkap (TP)', 'Lolos (FN)'],
      values: [30, 70],
      hl: 1,
      suffix: ' kasus',
      cap: 'Recall rendah berarti banyak kasus positif tidak terdeteksi.'
    }
  },
  {
    q: 'Masih dengan matriks TP 30, FN 70, FP 20, TN 80. Berapa precision dan apa implikasinya?',
    o: [
      '30% — banyak kasus positif terlewat',
      '60% — dari 50 prediksi positif, 30 benar positif dan 20 positif palsu',
      '80% — model sangat baik mengenali negatif',
      '55% — sama dengan akurasi'
    ],
    a: 1,
    e: 'Precision = TP / (TP + FP) = 30 / 50 = 60%, sehingga 40% prediksi positif adalah alarm palsu. Angka 30% adalah recall, 80% specificity, dan 55% accuracy.',
    v: {
      t: 'bar',
      labels: ['Benar positif', 'Positif palsu'],
      values: [30, 20],
      hl: 0,
      suffix: ' kasus',
      cap: 'Precision = 30 / (30 + 20) = 60%.'
    }
  },
  {
    q: 'Dengan precision 60% dan recall 30%, berapa F1-score model tersebut?',
    o: [
      '45%',
      '40%',
      '90%',
      '18%'
    ],
    a: 1,
    e: 'F1 = 2 × (0,6 × 0,3) / (0,6 + 0,3) = 0,36 / 0,9 = 0,40 atau 40%. Angka 45% adalah rata-rata biasa (aritmetik), 90% adalah jumlah keduanya, dan 18% adalah hasil kali tanpa faktor 2.',
    v: {
      t: 'steps',
      items: ['Precision = 0,60', 'Recall = 0,30', 'F1 = 2·(0,6·0,3)/(0,6+0,3)', 'F1 = 0,40'],
      hl: [2, 3],
      cap: 'F1 adalah rata-rata harmonik, sehingga selalu lebih dekat ke nilai yang kecil.'
    }
  },
  {
    q: 'Sebuah model skrining penyakit memiliki akurasi 92%, tetapi recall hanya 40%. Rumah sakit tetap menolak model tersebut. Alasan yang paling tepat adalah…',
    o: [
      'Akurasi 92% sudah cukup untuk semua kasus',
      'Pada skrining penyakit, 60% kasus positif yang lolos deteksi (false negative) jauh lebih berbahaya daripada beberapa alarm palsu',
      'Recall tidak relevan untuk masalah kesehatan',
      'Model seharusnya diukur dengan MAE'
    ],
    a: 1,
    e: 'Materi menyatakan dalam deteksi penyakit serius, recall sering lebih penting daripada akurasi karena tujuan utamanya menangkap semua kasus positif. Recall 40% berarti mayoritas penderita tidak terdeteksi. MAE adalah metrik regresi, tidak berlaku untuk klasifikasi.',
    v: {
      t: 'tab',
      head: ['Metrik', 'Nilai', 'Konsekuensi'],
      rows: [
        ['Accuracy', '92%', 'Terlihat baik, tetapi menyesatkan'],
        ['Recall', '40%', '60% kasus positif lolos'],
        ['Precision', '—', 'Alarm palsu masih dapat ditindaklanjuti']
      ],
      hl: [[1, 2]],
      cap: 'Pada data tidak seimbang, akurasi tinggi bisa menyembunyikan recall rendah.'
    }
  },
  {
    q: 'Tim penipuan kartu kredit hanya mampu memeriksa 100 transaksi per hari. Model harus memastikan transaksi yang ditandai benar-benar mencurigakan. Metrik yang paling diprioritaskan adalah…',
    o: [
      'Recall, agar semua penipuan tertangkap',
      'Precision, agar sumber daya pemeriksaan tidak habis pada alarm palsu',
      'Accuracy, karena paling mudah dipahami',
      'MAPE, karena berbentuk persentase'
    ],
    a: 1,
    e: 'Materi menyebut precision penting ketika biaya false positive tinggi — misalnya kapasitas pemeriksaan terbatas. Recall tinggi tanpa precision akan membanjiri tim dengan alarm palsu. Accuracy bermasalah pada data tidak seimbang, dan MAPE adalah metrik regresi.',
    v: {
      t: 'tab',
      head: ['Kapasitas', 'Prioritas'],
      rows: [
        ['Pemeriksaan terbatas', 'Precision'],
        ['Tidak boleh ada kasus lolos', 'Recall'],
        ['Perlu keseimbangan', 'F1']
      ],
      hl: [[0, 1]],
      cap: 'Prioritas metrik bergantung pada biaya kesalahan yang dominan.'
    }
  },
  {
    q: 'Dalam confusion matrix, False Negative (FN) berarti…',
    o: [
      'Kasus negatif yang benar diprediksi negatif',
      'Kasus positif yang sebenarnya, tetapi diprediksi negatif sehingga lolos deteksi',
      'Kasus negatif yang salah diprediksi positif',
      'Kasus positif yang benar diprediksi positif'
    ],
    a: 1,
    e: 'FN adalah kasus positif yang gagal ditangkap model — diprediksi negatif. Pilihan pertama adalah TN, ketiga adalah FP, dan keempat adalah TP.',
    v: {
      t: 'tab',
      head: ['Sel', 'Arti'],
      rows: [
        ['TP', 'Positif diprediksi positif (benar)'],
        ['TN', 'Negatif diprediksi negatif (benar)'],
        ['FP', 'Negatif diprediksi positif (alarm palsu)'],
        ['FN', 'Positif diprediksi negatif (lolos deteksi)']
      ],
      hl: [[3, 1]],
      cap: 'FN adalah kesalahan yang paling berbahaya pada skrining.'
    }
  },
  {
    q: 'Sebuah model memiliki AUC = 0,5. Apa interpretasinya?',
    o: [
      'Model sempurna dalam membedakan kelas',
      'Model tidak lebih baik daripada menebak secara acak',
      'Model memiliki akurasi 50% pada data latih',
      'Model mengalami overfitting'
    ],
    a: 1,
    e: 'Materi menyatakan AUC berkisar dari 0,5 (model acak) sampai 1 (model sempurna). AUC 0,5 berarti kurva ROC berimpit dengan garis diagonal, sehingga daya pembeda kelasnya nihil. Ini bukan pernyataan tentang akurasi data latih maupun overfitting.',
    v: {
      t: 'curve',
      pts: [[0, 0], [0.25, 0.25], [0.5, 0.5], [0.75, 0.75], [1, 1]],
      diag: true,
      xl: 'False Positive Rate',
      yl: 'True Positive Rate',
      color: '#ff6f91',
      cap: 'ROC yang berimpit dengan diagonal berarti AUC 0,5 — setara acak.'
    }
  },
  {
    q: 'Apa yang terjadi pada recall dan false positive rate ketika threshold klasifikasi diturunkan?',
    o: [
      'Recall turun, FPR turun',
      'Recall naik, FPR juga naik',
      'Recall naik, FPR turun',
      'Keduanya tidak berubah'
    ],
    a: 1,
    e: 'Menurunkan threshold membuat model lebih mudah menyatakan positif, sehingga lebih banyak kasus positif tertangkap (recall naik) tetapi lebih banyak negatif ikut ditandai (FPR naik). Inilah trade-off yang digambarkan kurva ROC.',
    v: {
      t: 'tab',
      head: ['Threshold', 'Recall', 'FPR'],
      rows: [
        ['Tinggi', 'Rendah', 'Rendah'],
        ['Sedang', 'Sedang', 'Sedang'],
        ['Rendah', 'Tinggi', 'Tinggi']
      ],
      hl: [[2, 1], [2, 2]],
      cap: 'ROC menggambarkan trade-off ini pada berbagai nilai threshold.'
    }
  },
  {
    q: 'Dataset deteksi fraud memiliki 99% transaksi normal dan 1% fraud. Sebuah model yang selalu memprediksi "normal" akan memperoleh akurasi 99%. Mengapa metrik itu menyesatkan?',
    o: [
      'Karena akurasi tidak dapat dihitung pada data besar',
      'Karena model tidak pernah menangkap satu pun fraud (recall 0), meskipun akurasinya tinggi',
      'Karena akurasi selalu salah untuk semua kasus',
      'Karena model seharusnya diukur dengan R²'
    ],
    a: 1,
    e: 'Materi menegaskan akurasi bermasalah saat data tidak seimbang; metrik seperti precision, recall, atau F1 lebih informatif. Model yang selalu menebak kelas mayoritas memiliki recall 0 untuk kelas minoritas. Akurasi tetap dapat dihitung — hanya tidak mencerminkan kinerja sebenarnya.',
    v: {
      t: 'bar',
      labels: ['Normal', 'Fraud'],
      values: [99, 1],
      hl: 1,
      suffix: '%',
      cap: 'Dengan 1% fraud, menebak "normal" selalu memberi akurasi 99% tetapi tidak berguna.'
    }
  }
];
