/* Materi ringkas orisinal untuk prototype Pathwise. Course mitra adalah simulasi. */
'use strict';
const learningContent = {
 "frontend": [
  {
   "intro": "HTML menentukan arti dan susunan konten. CSS mengatur tampilannya. Mulai dengan halaman yang tetap bisa dipahami saat CSS belum dipasang, lalu tambahkan layout yang menyesuaikan ukuran layar.",
   "sections": [
    {
     "title": "Susun konten yang punya arti",
     "text": "Gunakan satu judul utama h1, main untuk konten utama, dan section untuk kelompok konten bertema. Pilih button untuk tindakan dan a untuk perpindahan halaman. Elemen yang tepat membantu pengguna keyboard dan pembaca layar."
    },
    {
     "title": "Atur ruang sebelum dekorasi",
     "text": "Box model terdiri dari content, padding, border, dan margin. Gunakan Flexbox atau Grid untuk layout, gap untuk jarak antaritem, serta media query untuk menyesuaikan susunan. Hindari lebar tetap yang membuat halaman melebar di HP."
    }
   ],
   "example": "<main>\n  <h1>Profil Raka</h1>\n  <section class=\"skills\">\n    <h2>Kemampuan</h2>\n    <p>HTML dan CSS</p>\n  </section>\n</main>\n\n.skills { padding: 1rem; max-width: 42rem; }\n@media (max-width: 600px) {\n  .skills { padding: .75rem; }\n}",
   "questions": [
    {
     "text": "Elemen untuk tindakan menyimpan profil adalah…",
     "choices": [
      "div",
      "button",
      "h1"
     ],
     "answer": 1,
     "why": "Button memiliki perilaku interaksi dan dukungan keyboard bawaan."
    },
    {
     "text": "Properti untuk memberi jarak antaritem Flexbox adalah…",
     "choices": [
      "gap",
      "z-index",
      "opacity"
     ],
     "answer": 0,
     "why": "Gap memberi ruang di antara item tanpa mengubah urutan konten."
    }
   ]
  },
  {
   "intro": "JavaScript menyimpan data dan mengubah tampilan saat pengguna berinteraksi. Pisahkan data tugas dari elemen HTML agar perubahan mudah diikuti dan diuji.",
   "sections": [
    {
     "title": "Kenali data dan fungsi",
     "text": "Array menyimpan kumpulan item; object menyimpan atribut satu item. Function mengerjakan satu tugas yang jelas, misalnya menambah item atau menghitung tugas selesai. Gunakan const untuk binding yang tidak ditugaskan ulang dan let saat nilainya perlu diganti."
    },
    {
     "title": "Hubungkan tindakan dengan tampilan",
     "text": "Gunakan addEventListener untuk menangani klik atau input. Isi teks pengguna melalui textContent. localStorage menyimpan string, jadi gunakan JSON.stringify dan JSON.parse untuk object. Data di sana hanya berlaku pada browser tersebut."
    }
   ],
   "example": "const tasks = [{ title: \"Belajar DOM\", done: false }];\nconst button = document.querySelector(\"button\");\nbutton.addEventListener(\"click\", () => {\n  tasks[0].done = true;\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n});",
   "questions": [
    {
     "text": "Cara menyimpan array ke localStorage adalah…",
     "choices": [
      "Menyimpan fungsi",
      "JSON.stringify(array)",
      "Mengganti nama tab"
     ],
     "answer": 1,
     "why": "localStorage menerima nilai string. JSON.stringify mengubah array menjadi string JSON."
    },
    {
     "text": "Untuk menampilkan teks dari pengguna dengan aman, pilih…",
     "choices": [
      "eval",
      "innerHTML tanpa penyaringan",
      "textContent"
     ],
     "answer": 2,
     "why": "textContent memperlakukan input sebagai teks, bukan markup HTML."
    }
   ]
  },
  {
   "intro": "Git mencatat perubahan kode sebagai commit. GitHub menyediakan tempat menyimpan repository dan bekerja bersama. Buat commit kecil yang menjelaskan satu perubahan agar riwayatnya mudah dibaca.",
   "sections": [
    {
     "title": "Pahami tiga area kerja",
     "text": "Working tree berisi file yang sedang diedit. Staging area berisi perubahan yang dipilih untuk commit. Repository menyimpan riwayat commit. Periksa git status dan git diff sebelum menyimpan perubahan."
    },
    {
     "title": "Bekerja dengan branch",
     "text": "Branch membantu mengerjakan perubahan tanpa langsung mengubah branch utama. Setelah diperiksa, perubahan bisa digabungkan. Simpan konfigurasi contoh dalam .env.example dan abaikan rahasia asli melalui .gitignore."
    }
   ],
   "example": "git status\ngit add index.html styles.css\ngit commit -m \"Tambahkan halaman profil\"\ngit switch -c fitur-kontak\ngit diff",
   "questions": [
    {
     "text": "Perintah untuk melihat perubahan yang belum di-stage adalah…",
     "choices": [
      "git diff",
      "git init",
      "git clone"
     ],
     "answer": 0,
     "why": "git diff membandingkan working tree dengan staging area."
    },
    {
     "text": "File berisi API key asli sebaiknya…",
     "choices": [
      "Diunggah ke README",
      "Disimpan di repository publik",
      "Diabaikan dari Git dan disimpan melalui konfigurasi rahasia"
     ],
     "answer": 2,
     "why": "Rahasia tidak boleh masuk riwayat repository, termasuk repository contoh."
    }
   ]
  },
  {
   "intro": "React menyusun UI dari komponen. Props membawa data ke komponen, sedangkan state menyimpan data yang berubah karena interaksi pengguna.",
   "sections": [
    {
     "title": "Buat komponen yang fokus",
     "text": "Satu komponen dapat mewakili kartu proyek atau daftar tugas. Beri props nama yang menjelaskan isinya. Saat merender array, gunakan key yang stabil dari ID data agar identitas item terjaga."
    },
    {
     "title": "Perbarui state melalui setter",
     "text": "Jangan mengubah array state secara langsung. Buat array baru dengan map, filter, atau spread, lalu gunakan setter. Data yang bisa dihitung dari state sebaiknya dihitung saat render agar tidak ada dua sumber kebenaran."
    }
   ],
   "example": "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(n => n + 1)}>\n    Selesai: {count}\n  </button>;\n}",
   "questions": [
    {
     "text": "Data yang diterima komponen dari induknya disebut…",
     "choices": [
      "props",
      "commit",
      "selector"
     ],
     "answer": 0,
     "why": "Props adalah masukan komponen yang diberikan oleh induknya."
    },
    {
     "text": "Cara menambah item ke state array adalah…",
     "choices": [
      "items.push(x) tanpa setter",
      "setItems(old => [...old, x])",
      "Mengubah DOM secara manual"
     ],
     "answer": 1,
     "why": "Buat array baru dan gunakan setter agar React mengetahui perubahan state."
    }
   ]
  },
  {
   "intro": "API menghubungkan antarmuka dengan layanan data. Siapkan tampilan untuk proses loading, hasil kosong, keberhasilan, dan kegagalan supaya pengguna tahu apa yang terjadi.",
   "sections": [
    {
     "title": "Periksa respons sebelum memakai data",
     "text": "fetch mengembalikan Promise. Respons HTTP 404 atau 500 tidak otomatis membuat fetch melempar error, jadi periksa response.ok. Bentuk JSON juga perlu diperiksa sebelum ditampilkan."
    },
    {
     "title": "Buat interaksi yang dapat dipulihkan",
     "text": "Berikan tombol coba lagi saat gagal. Tampilkan pesan yang membantu tanpa membocorkan detail sistem. Saat pencarian berubah cepat, batalkan request lama atau pastikan hasil lama tidak menimpa hasil terbaru."
    }
   ],
   "example": "async function loadProjects() {\n  const response = await fetch(\"/api/projects\");\n  if (!response.ok) throw new Error(\"Data belum dapat dimuat\");\n  const projects = await response.json();\n  return Array.isArray(projects) ? projects : [];\n}",
   "questions": [
    {
     "text": "Respons HTTP 500 pada fetch perlu diperiksa melalui…",
     "choices": [
      "response.ok",
      "document.title",
      "localStorage.length"
     ],
     "answer": 0,
     "why": "fetch bisa selesai dengan respons HTTP error; response.ok membantu mendeteksinya."
    },
    {
     "text": "Saat hasil pencarian kosong, UI sebaiknya…",
     "choices": [
      "Tetap menampilkan spinner",
      "Menghapus seluruh halaman",
      "Menjelaskan bahwa hasil belum ditemukan"
     ],
     "answer": 2,
     "why": "Keadaan kosong berbeda dari loading dan error, sehingga perlu pesan tersendiri."
    }
   ]
  },
  {
   "intro": "Portofolio menunjukkan apa yang kamu bangun dan bagaimana kamu mengambil keputusan. Pilih proyek yang bisa dijalankan dan jelaskan ruang lingkupnya secara jujur.",
   "sections": [
    {
     "title": "Periksa kualitas sebelum publikasi",
     "text": "Coba alur utama dengan keyboard dan pada layar HP. Gunakan label pada input, alt yang sesuai pada gambar, serta judul halaman yang jelas. Periksa tautan dan keadaan error sebelum membagikan hasil."
    },
    {
     "title": "Tulis studi kasus singkat",
     "text": "Jelaskan masalah, peranmu, fitur yang dibuat, cara menjalankan, dan hasil pengujian. Sertakan keterbatasan, misalnya data masih simulasi atau belum memakai backend. README yang jelas membantu orang lain menilai proyekmu."
    }
   ],
   "example": "# Website Portofolio\nTujuan: menampilkan tiga proyek belajar.\nPeran: desain dan implementasi frontend.\nPengujian: navigasi keyboard dan layar 360 px.\nBatasan: formulir kontak belum terhubung ke server.",
   "questions": [
    {
     "text": "Studi kasus proyek yang baik menjelaskan…",
     "choices": [
      "Jumlah warna saja",
      "Masalah, keputusan, pengujian, dan batasan",
      "Klaim pengguna tanpa bukti"
     ],
     "answer": 1,
     "why": "Pembaca perlu memahami proses dan bukti yang mendukung hasil proyek."
    },
    {
     "text": "Sebelum membagikan website, lakukan…",
     "choices": [
      "Uji alur utama dan tautan",
      "Hapus semua label input",
      "Masukkan kata sandi ke kode"
     ],
     "answer": 0,
     "why": "Pengujian alur dan tautan membantu menemukan hambatan penggunaan."
    }
   ]
  }
 ],
 "backend": [
  {
   "intro": "Backend menerima input, menjalankan aturan, lalu mengembalikan hasil. Mulailah dari fungsi kecil dengan masukan dan keluaran yang jelas sebelum menambahkan server atau database.",
   "sections": [
    {
     "title": "Validasi di batas sistem",
     "text": "Pastikan tipe dan nilai input sesuai aturan. Nama barang tidak boleh kosong dan jumlah stok tidak boleh negatif. Pisahkan validasi dari proses penyimpanan agar setiap bagian mudah diperiksa."
    },
    {
     "title": "Catat perubahan kode",
     "text": "Simpan pekerjaan dalam commit kecil. Jangan menaruh password database atau token di source. Repository latihan perlu README dan contoh konfigurasi agar bisa dijalankan kembali."
    }
   ],
   "example": "function addStock(current, amount) {\n  if (!Number.isInteger(amount) || amount < 0) {\n    throw new Error(\"Jumlah tidak valid\");\n  }\n  return current + amount;\n}",
   "questions": [
    {
     "text": "Validasi input dilakukan…",
     "choices": [
      "Hanya di frontend",
      "Di batas backend sebelum proses utama",
      "Setelah data terhapus"
     ],
     "answer": 1,
     "why": "Backend tetap harus memvalidasi input karena request dapat datang tanpa frontend."
    },
    {
     "text": "Fungsi dengan satu tanggung jawab lebih mudah…",
     "choices": [
      "Diuji dan dipahami",
      "Menyembunyikan error",
      "Mengganti sistem operasi"
     ],
     "answer": 0,
     "why": "Masukan dan keluaran yang jelas membantu pengujian perilaku fungsi."
    }
   ]
  },
  {
   "intro": "HTTP memakai request dan response. Request membawa method, path, header, dan kadang body. Response membawa status serta data yang dibutuhkan klien.",
   "sections": [
    {
     "title": "Pilih method sesuai tindakan",
     "text": "GET membaca data; POST membuat resource; PATCH mengubah sebagian data; DELETE menghapusnya. Tetap periksa autentikasi dan izin pada setiap endpoint yang memerlukannya."
    },
    {
     "title": "Gunakan status yang menjelaskan hasil",
     "text": "200 menyatakan berhasil, 201 resource dibuat, 400 input tidak valid, 401 belum terautentikasi, 403 akses ditolak, dan 404 resource tidak ditemukan. Tangani error server tanpa mengirim stack trace kepada pengguna."
    }
   ],
   "example": "GET /books/7 HTTP/1.1\nAccept: application/json\n\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{\"id\":7,\"title\":\"Belajar Backend\"}",
   "questions": [
    {
     "text": "Status saat resource baru berhasil dibuat biasanya…",
     "choices": [
      "404",
      "201",
      "500"
     ],
     "answer": 1,
     "why": "201 Created menyatakan bahwa request menghasilkan resource baru."
    },
    {
     "text": "Request GET umumnya digunakan untuk…",
     "choices": [
      "Membaca resource",
      "Menyimpan password",
      "Menghapus semua data"
     ],
     "answer": 0,
     "why": "GET memiliki semantik membaca representasi resource."
    }
   ]
  },
  {
   "intro": "Database relasional menyimpan data dalam tabel yang saling berhubungan. Tentukan primary key untuk identitas baris dan foreign key untuk hubungan antarentitas.",
   "sections": [
    {
     "title": "Tulis query yang sesuai kebutuhan",
     "text": "SELECT memilih kolom, WHERE menyaring baris, dan JOIN menggabungkan tabel. Gunakan ORDER BY saat urutan hasil penting. Batasi jumlah hasil untuk endpoint daftar agar respons tidak terlalu besar."
    },
    {
     "title": "Jaga integritas dan keamanan",
     "text": "Gunakan constraint untuk aturan dasar dan transaction untuk perubahan yang harus berhasil bersama. Kirim nilai pengguna sebagai parameter query, bukan digabungkan langsung ke string SQL."
    }
   ],
   "example": "SELECT books.title, authors.name\nFROM books\nJOIN authors ON authors.id = books.author_id\nWHERE books.available = true\nORDER BY books.title;",
   "questions": [
    {
     "text": "Hubungan antarbaris tabel biasanya menggunakan…",
     "choices": [
      "Foreign key",
      "Warna tabel",
      "Nama file CSS"
     ],
     "answer": 0,
     "why": "Foreign key menghubungkan data dengan key pada tabel yang dirujuk."
    },
    {
     "text": "Nilai dari pengguna pada query sebaiknya…",
     "choices": [
      "Digabungkan langsung",
      "Dimasukkan melalui parameter query",
      "Dijadikan nama tabel otomatis"
     ],
     "answer": 1,
     "why": "Parameter query memisahkan nilai dari instruksi SQL."
    }
   ]
  },
  {
   "intro": "Autentikasi membuktikan siapa pengguna. Otorisasi memeriksa tindakan yang boleh dilakukan pengguna tersebut. Keduanya perlu diterapkan pada server.",
   "sections": [
    {
     "title": "Periksa kepemilikan resource",
     "text": "Mengetahui ID catatan bukan berarti boleh membacanya. Setelah identitas diperiksa, pastikan resource dimiliki pengguna atau dapat diakses sesuai perannya. Jangan hanya menyembunyikan tombol di frontend."
    },
    {
     "title": "Tangani kredensial dengan benar",
     "text": "Password disimpan sebagai hash adaptif yang sesuai, bukan plaintext. Token harus memiliki masa berlaku dan mekanisme pengelolaan yang jelas. Gunakan HTTPS untuk komunikasi produksi dan jangan mencatat token ke log."
    }
   ],
   "example": "// Pseudocode pemeriksaan akses\nconst note = await findNote(request.params.id);\nif (!note) return response.status(404).end();\nif (note.ownerId !== request.user.id) {\n  return response.status(403).end();\n}\nreturn response.json(note);",
   "questions": [
    {
     "text": "Pemeriksaan pemilik catatan merupakan…",
     "choices": [
      "Otorisasi",
      "CSS styling",
      "Encoding gambar"
     ],
     "answer": 0,
     "why": "Otorisasi menentukan apakah pengguna berhak mengakses resource tertentu."
    },
    {
     "text": "Password pengguna seharusnya disimpan sebagai…",
     "choices": [
      "Plaintext",
      "Base64 saja",
      "Hash password adaptif yang sesuai"
     ],
     "answer": 2,
     "why": "Encoding seperti Base64 tidak menggantikan hashing password."
    }
   ]
  },
  {
   "intro": "Pengujian backend mencakup request valid, input salah, resource yang tidak ada, dan akses yang tidak diizinkan. Uji perilaku yang dijanjikan API, bukan sekadar baris kode.",
   "sections": [
    {
     "title": "Susun skenario yang bermakna",
     "text": "Contohnya pengguna A berhasil membuat catatan, tetapi pengguna B tidak bisa membacanya. Periksa status, body, dan efek terhadap database. Pisahkan data pengujian dari data produksi."
    },
    {
     "title": "Gunakan log yang membantu",
     "text": "Catat waktu, request ID, tindakan, dan kategori error. Jangan mencatat password, token, atau seluruh isi data pribadi. Pesan bagi pengguna dapat singkat, sementara detail teknis disimpan di log yang aksesnya terbatas."
    }
   ],
   "example": "Skenario: akses catatan milik pengguna lain\nDiberikan: catatan A dimiliki pengguna 1\nKetika: pengguna 2 meminta catatan A\nHarapan: akses ditolak, isi catatan tidak dikirim",
   "questions": [
    {
     "text": "Pengujian API perlu mencakup…",
     "choices": [
      "Hanya status 200",
      "Alur berhasil dan gagal",
      "Hanya ukuran font"
     ],
     "answer": 1,
     "why": "Kegagalan dan batas akses adalah bagian penting dari kontrak API."
    },
    {
     "text": "Data yang sebaiknya tidak masuk log adalah…",
     "choices": [
      "Request ID",
      "Waktu request",
      "Token autentikasi"
     ],
     "answer": 2,
     "why": "Token dapat memberikan akses sehingga harus dijaga dari log dan keluaran error."
    }
   ]
  },
  {
   "intro": "Deployment menempatkan aplikasi pada lingkungan yang dapat diakses pengguna. Pisahkan konfigurasi, siapkan health check, dan tulis prosedur pemulihan sebelum merilis perubahan.",
   "sections": [
    {
     "title": "Pisahkan konfigurasi dari kode",
     "text": "Host, port, dan kredensial dibaca dari environment yang sesuai. Berikan contoh nama variabel tanpa nilai rahasia. Jalankan aplikasi dengan pengguna dan izin yang diperlukan saja."
    },
    {
     "title": "Dokumentasikan cara operasional",
     "text": "README mencakup prasyarat, cara menjalankan, endpoint, serta cara menguji. Health check membantu memeriksa keadaan layanan. Simpan strategi backup, migrasi database, dan rollback yang dapat dipraktikkan."
    }
   ],
   "example": "GET /health\n200 {\"status\":\"ok\"}\n\nChecklist rilis:\n- Konfigurasi tersedia\n- Pengujian lulus\n- Backup dan rollback disiapkan\n- Log dan health check diperiksa",
   "questions": [
    {
     "text": "Environment variable membantu…",
     "choices": [
      "Memisahkan konfigurasi dari kode",
      "Menghilangkan seluruh error",
      "Mengganti database otomatis"
     ],
     "answer": 0,
     "why": "Konfigurasi dapat berbeda antarlingkungan tanpa mengubah kode aplikasi."
    },
    {
     "text": "Rollback digunakan untuk…",
     "choices": [
      "Membuka semua port",
      "Mengembalikan layanan ke versi yang diketahui bekerja",
      "Menghapus riwayat Git"
     ],
     "answer": 1,
     "why": "Rollback adalah salah satu langkah pemulihan jika rilis baru bermasalah."
    }
   ]
  }
 ],
 "data": [
  {
   "intro": "Python membantu membaca, mengubah, dan merangkum data. Pahami tipe data dan fungsi terlebih dahulu, lalu coba data kecil yang hasilnya bisa diperiksa secara manual.",
   "sections": [
    {
     "title": "Gunakan struktur data yang sesuai",
     "text": "List menyimpan urutan nilai dan dictionary memasangkan key dengan value. Fungsi dapat menerima kumpulan transaksi lalu mengembalikan totalnya. Beri nama variabel sesuai arti data, bukan hanya x atau y."
    },
    {
     "title": "Periksa data saat dibaca",
     "text": "Nilai dari CSV sering dibaca sebagai teks. Ubah tipe secara sengaja dan tangani nilai kosong. Jangan menganggap semua baris benar; tampilkan atau catat baris yang tidak dapat diproses."
    }
   ],
   "example": "expenses = [15000, 20000, 10000]\ntotal = sum(expenses)\naverage = total / len(expenses)\nprint({\"total\": total, \"average\": average})",
   "questions": [
    {
     "text": "Struktur Python untuk pasangan key dan value adalah…",
     "choices": [
      "Dictionary",
      "Setiap string",
      "Comment"
     ],
     "answer": 0,
     "why": "Dictionary menyimpan pasangan key dan value."
    },
    {
     "text": "Sebelum menjumlahkan angka dari CSV, periksa…",
     "choices": [
      "Warna file",
      "Tipe data dan nilai kosong",
      "Ukuran layar"
     ],
     "answer": 1,
     "why": "Data teks atau nilai kosong dapat membuat perhitungan gagal atau keliru."
    }
   ]
  },
  {
   "intro": "SQL membantu mengambil ringkasan dari tabel. Bedakan penyaringan baris sebelum agregasi dengan penyaringan kelompok setelah agregasi.",
   "sections": [
    {
     "title": "Kelompokkan dan hitung",
     "text": "GROUP BY membentuk kelompok, SUM menghitung total, COUNT menghitung jumlah, dan AVG menghitung rata-rata. Pilih ukuran yang menjawab pertanyaan analisis, misalnya total penjualan per kategori."
    },
    {
     "title": "Periksa hasil JOIN",
     "text": "JOIN dapat menggandakan baris jika hubungan data tidak dipahami. Periksa key dan jumlah baris sebelum serta sesudah penggabungan. WHERE menyaring baris, sedangkan HAVING menyaring hasil kelompok."
    }
   ],
   "example": "SELECT category, SUM(amount) AS revenue\nFROM sales\nWHERE status = 'paid'\nGROUP BY category\nHAVING SUM(amount) > 100000;",
   "questions": [
    {
     "text": "Untuk menghitung total per kategori, gunakan…",
     "choices": [
      "GROUP BY dan SUM",
      "DROP TABLE",
      "CSS Grid"
     ],
     "answer": 0,
     "why": "GROUP BY menentukan kelompok dan SUM menghitung total tiap kelompok."
    },
    {
     "text": "HAVING menyaring…",
     "choices": [
      "Nama database",
      "Hasil kelompok setelah agregasi",
      "Semua file CSV"
     ],
     "answer": 1,
     "why": "HAVING berlaku pada hasil agregasi, berbeda dari WHERE yang menyaring baris."
    }
   ]
  },
  {
   "intro": "Data yang bersih memiliki arti dan aturan yang konsisten. Sebelum menghapus baris, cari tahu mengapa nilainya kosong atau terlihat tidak biasa.",
   "sections": [
    {
     "title": "Periksa kualitas dataset",
     "text": "Lihat tipe kolom, missing values, duplikat, dan rentang nilai. Nilai ekstrem belum tentu salah. Cocokkan dengan konteks, satuan, dan aturan pengumpulan data sebelum mengambil keputusan."
    },
    {
     "title": "Simpan jejak perubahan",
     "text": "Pertahankan data mentah dan buat salinan untuk diproses. Catat aturan normalisasi, penghapusan duplikat, dan penanganan data kosong. Keputusan pembersihan harus bisa dijelaskan dan diulang."
    }
   ],
   "example": "import pandas as pd\ndf = pd.read_csv(\"transactions.csv\")\nprint(df.isna().sum())\nclean = df.drop_duplicates().copy()\nclean[\"amount\"] = pd.to_numeric(clean[\"amount\"], errors=\"coerce\")",
   "questions": [
    {
     "text": "Saat menemukan nilai ekstrem, langkah pertama adalah…",
     "choices": [
      "Langsung menghapusnya",
      "Memeriksa konteks dan validitasnya",
      "Mengganti seluruh kolom dengan nol"
     ],
     "answer": 1,
     "why": "Nilai ekstrem bisa merupakan kejadian yang sah, bukan kesalahan."
    },
    {
     "text": "Data mentah sebaiknya…",
     "choices": [
      "Tetap disimpan sebagai rujukan",
      "Selalu ditimpa",
      "Dihapus sebelum analisis"
     ],
     "answer": 0,
     "why": "Data mentah memungkinkan pemeriksaan ulang dan reproduksi proses."
    }
   ]
  },
  {
   "intro": "Eksplorasi data dimulai dari pertanyaan. Tentukan unit analisis, periode waktu, dan ukuran yang akan dibandingkan agar temuan tidak keluar dari konteks.",
   "sections": [
    {
     "title": "Bandingkan dengan ukuran yang masuk akal",
     "text": "Jumlah transaksi dan nilai transaksi menjawab pertanyaan berbeda. Gunakan median ketika nilai ekstrem memengaruhi rata-rata. Periksa ukuran kelompok sebelum membandingkan persentase."
    },
    {
     "title": "Pisahkan pola dari sebab",
     "text": "Dua variabel yang berubah bersama belum tentu saling menyebabkan. Pertimbangkan faktor lain dan keterbatasan pengambilan sampel. Tulis temuan sebagai deskripsi yang didukung data."
    }
   ],
   "example": "summary = clean.groupby(\"category\")[\"amount\"].agg(\n    count=\"count\", total=\"sum\", median=\"median\"\n)\nprint(summary)",
   "questions": [
    {
     "text": "Korelasi antara dua variabel berarti…",
     "choices": [
      "Salah satunya pasti menyebabkan yang lain",
      "Ada hubungan yang perlu ditelaah konteksnya",
      "Keduanya selalu identik"
     ],
     "answer": 1,
     "why": "Korelasi sendiri tidak membuktikan hubungan sebab-akibat."
    },
    {
     "text": "Sebelum membandingkan persentase kelompok, periksa…",
     "choices": [
      "Ukuran sampel tiap kelompok",
      "Nama font",
      "Ekstensi notebook"
     ],
     "answer": 0,
     "why": "Persentase dari kelompok kecil dapat terlihat besar tetapi kurang stabil."
    }
   ]
  },
  {
   "intro": "Grafik dipilih berdasarkan pertanyaan. Gunakan bar chart untuk membandingkan kategori, line chart untuk perubahan waktu, dan scatter plot untuk hubungan dua variabel numerik.",
   "sections": [
    {
     "title": "Tampilkan konteks pembacaan",
     "text": "Beri judul yang menjelaskan isi, label sumbu, satuan, dan periode data. Periksa skala agar perbedaan tidak dibesar-besarkan. Gunakan warna dengan tujuan yang jelas dan tetap dapat dibedakan."
    },
    {
     "title": "Tulis kesimpulan yang terbatas pada bukti",
     "text": "Sebutkan pola utama dan keterbatasannya. Jelaskan apakah data hanya mencakup sebagian pengguna, periode tertentu, atau nilai yang sudah dibersihkan. Hindari klaim di luar jangkauan dataset."
    }
   ],
   "example": "Judul: Total transaksi per kategori, Januari 2026\nSumbu X: kategori produk\nSumbu Y: rupiah\nCatatan: hanya transaksi berstatus paid\nBatasan: data satu bulan, belum mewakili pola tahunan",
   "questions": [
    {
     "text": "Grafik yang umum untuk perubahan nilai dari waktu ke waktu adalah…",
     "choices": [
      "Line chart",
      "Diagram folder",
      "Foto profil"
     ],
     "answer": 0,
     "why": "Line chart membantu membaca urutan dan perubahan sepanjang waktu."
    },
    {
     "text": "Label sumbu perlu memuat…",
     "choices": [
      "Hanya warna",
      "Variabel dan satuannya",
      "Nama pembuat laptop"
     ],
     "answer": 1,
     "why": "Satuan dan variabel membuat angka dapat ditafsirkan dengan benar."
    }
   ]
  },
  {
   "intro": "Proyek analisis yang baik dapat ditelusuri dari pertanyaan hingga hasil. Pembaca perlu mengetahui sumber data, aturan pemrosesan, dan batasan kesimpulan.",
   "sections": [
    {
     "title": "Buat analisis dapat diulang",
     "text": "Cantumkan sumber dan lisensi dataset, dependensi, serta urutan menjalankan notebook. Hindari path absolut milik komputer sendiri. Gunakan data publik atau data contoh yang boleh dibagikan."
    },
    {
     "title": "Sajikan temuan dengan ringkas",
     "text": "Tulis pertanyaan, metode, temuan, dan saran yang masuk akal. Sertakan alasan keputusan pembersihan. Pisahkan hasil pengamatan dengan rekomendasi agar pembaca tahu mana bukti dan mana usulan."
    }
   ],
   "example": "Struktur proyek:\nREADME.md\ndata/README-sumber.md\nnotebooks/01-cleaning.ipynb\nnotebooks/02-analysis.ipynb\nreports/temuan.md",
   "questions": [
    {
     "text": "Agar analisis dapat diulang, sertakan…",
     "choices": [
      "Hanya screenshot grafik",
      "Sumber data, dependensi, dan langkah menjalankan",
      "Password akun pribadi"
     ],
     "answer": 1,
     "why": "Analisis yang dapat diulang membutuhkan data dan proses yang dapat ditelusuri."
    },
    {
     "text": "Data pribadi yang tidak diperlukan sebaiknya…",
     "choices": [
      "Dibagikan semuanya",
      "Disembunyikan dengan warna putih",
      "Tidak disertakan dalam proyek publik"
     ],
     "answer": 2,
     "why": "Bagikan hanya data yang memang boleh dan diperlukan untuk tujuan proyek."
    }
   ]
  }
 ],
 "design": [
  {
   "intro": "Riset pengguna membantu memahami tugas, hambatan, dan konteks pemakaian. Mulai dari pengalaman nyata pengguna, lalu rumuskan masalah yang dapat ditindaklanjuti.",
   "sections": [
    {
     "title": "Tanyakan kejadian yang sudah terjadi",
     "text": "Minta pengguna menceritakan terakhir kali melakukan suatu tugas. Pertanyaan terbuka seperti “apa yang membuatmu berhenti?” lebih membantu daripada mengarahkan pengguna agar menyetujui idemu."
    },
    {
     "title": "Pisahkan catatan dan tafsiran",
     "text": "Catat ucapan atau perilaku sebagai temuan, lalu jelaskan tafsiranmu secara terpisah. Minta persetujuan sebelum merekam dan hindari mengumpulkan identitas yang tidak diperlukan."
    }
   ],
   "example": "Tujuan wawancara: memahami pemilihan materi belajar\nPertanyaan: ceritakan terakhir kali mencari course.\nTemuan: pengguna membuka banyak tab dan lupa urutannya.\nHipotesis: urutan belajar yang tersimpan dapat membantu.",
   "questions": [
    {
     "text": "Pertanyaan wawancara yang lebih terbuka adalah…",
     "choices": [
      "Aplikasi kami bagus, kan?",
      "Ceritakan terakhir kali mencari materi belajar.",
      "Kamu pasti ingin fitur ini?"
     ],
     "answer": 1,
     "why": "Pertanyaan tentang pengalaman nyata mengurangi dorongan untuk sekadar setuju."
    },
    {
     "text": "Sebelum merekam wawancara, lakukan…",
     "choices": [
      "Minta persetujuan",
      "Unggah identitas peserta",
      "Menentukan jawaban peserta"
     ],
     "answer": 0,
     "why": "Peserta perlu mengetahui dan menyetujui cara datanya digunakan."
    }
   ]
  },
  {
   "intro": "User flow memetakan langkah pengguna untuk menyelesaikan satu tujuan. Masukkan keputusan, kegagalan, dan jalan kembali agar alurnya tidak hanya terlihat baik pada keadaan ideal.",
   "sections": [
    {
     "title": "Mulai dari tujuan yang spesifik",
     "text": "Contohnya pengguna ingin memilih course pertama. Petakan titik masuk, pilihan, dan hasil akhir. Gunakan nama tindakan yang jelas pada tombol, seperti “Simpan pilihan”."
    },
    {
     "title": "Kelompokkan informasi",
     "text": "Information architecture membantu pengguna menemukan konten. Kelompokkan informasi yang berkaitan dan gunakan istilah yang dipahami target pengguna. Uji apakah seseorang dapat menemukan satu fitur tanpa dibimbing."
    }
   ],
   "example": "Beranda → Isi profil → Pilih tujuan → Tinjau roadmap\nJika profil belum lengkap → tampilkan petunjuk\nJika ingin mengganti tujuan → kembali ke pilihan\nHasil: roadmap tersimpan dan bisa dibuka lagi",
   "questions": [
    {
     "text": "User flow sebaiknya mencakup…",
     "choices": [
      "Hanya layar berhasil",
      "Tujuan, keputusan, dan keadaan gagal",
      "Hanya palet warna"
     ],
     "answer": 1,
     "why": "Keputusan dan kegagalan adalah bagian dari pengalaman penggunaan."
    },
    {
     "text": "Label tombol yang jelas adalah…",
     "choices": [
      "Klik di sini",
      "Tombol nomor dua",
      "Simpan pilihan"
     ],
     "answer": 2,
     "why": "Label tindakan menjelaskan hasil yang diharapkan dari klik."
    }
   ]
  },
  {
   "intro": "Wireframe menguji susunan informasi sebelum detail visual. Fokus pada apa yang paling penting, apa yang perlu diklik, dan bagaimana urutan baca pengguna.",
   "sections": [
    {
     "title": "Buat hierarki yang sederhana",
     "text": "Tempatkan judul, informasi utama, dan tindakan utama secara jelas. Gunakan teks contoh yang masuk akal agar panjang konten dapat diuji. Coba susunan desktop dan HP sejak awal."
    },
    {
     "title": "Bandingkan alternatif",
     "text": "Buat dua susunan untuk tugas yang sama. Minta orang mencoba menemukan fitur tertentu dan catat hambatannya. Pilih berdasarkan kemudahan menyelesaikan tugas, lalu lanjutkan ke detail visual."
    }
   ],
   "example": "Wireframe kartu course:\n[Judul course]\n[Penyedia · level · bahasa]\n[Ringkasan dan info sertifikat]\n[Tombol mulai belajar]",
   "questions": [
    {
     "text": "Fokus utama wireframe adalah…",
     "choices": [
      "Susunan informasi dan tindakan",
      "Efek bayangan final",
      "Animasi logo"
     ],
     "answer": 0,
     "why": "Wireframe membantu menguji struktur sebelum dekorasi visual."
    },
    {
     "text": "Konten contoh pada wireframe sebaiknya…",
     "choices": [
      "Selalu satu kata",
      "Mendekati panjang konten nyata",
      "Dikosongkan semuanya"
     ],
     "answer": 1,
     "why": "Panjang konten memengaruhi layout dan keterbacaan."
    }
   ]
  },
  {
   "intro": "Komponen dan aturan visual membantu tampilan tetap konsisten. Tentukan skala teks, warna, jarak, serta keadaan komponen sebelum memperbanyak layar.",
   "sections": [
    {
     "title": "Rancang keadaan interaksi",
     "text": "Button perlu keadaan normal, hover, focus, disabled, dan loading jika diperlukan. Form perlu label serta pesan error yang menjelaskan cara memperbaiki input. Jangan menyampaikan arti hanya melalui warna."
    },
    {
     "title": "Jaga keterbacaan",
     "text": "Gunakan kontras yang cukup, ukuran teks yang nyaman, dan jarak yang memisahkan kelompok informasi. Focus indicator membantu pengguna keyboard mengetahui posisi interaksi."
    }
   ],
   "example": "Komponen input:\nLabel: Alamat email\nPetunjuk: gunakan alamat yang aktif\nError: format email belum sesuai\nKeadaan: normal / focus / error / disabled",
   "questions": [
    {
     "text": "Pesan error sebaiknya…",
     "choices": [
      "Hanya berubah merah",
      "Menjelaskan masalah dan cara memperbaikinya",
      "Menghilangkan isi formulir"
     ],
     "answer": 1,
     "why": "Pesan yang jelas membantu pengguna memulihkan kesalahan."
    },
    {
     "text": "Focus indicator berguna untuk…",
     "choices": [
      "Pengguna keyboard",
      "Mengganti nama akun",
      "Menyimpan gambar"
     ],
     "answer": 0,
     "why": "Indikator fokus menunjukkan elemen yang sedang menerima interaksi keyboard."
    }
   ]
  },
  {
   "intro": "Prototype menghubungkan layar agar tugas dapat dicoba. Tentukan titik mulai dan tindakan yang benar-benar diperlukan untuk menguji skenario.",
   "sections": [
    {
     "title": "Hubungkan interaksi utama",
     "text": "Mulai dari satu alur lengkap, misalnya memilih course lalu membuka materi. Siapkan navigasi kembali dan keadaan ketika pilihan belum diisi. Pastikan area klik sesuai dengan elemen yang terlihat."
    },
    {
     "title": "Uji sebelum dibagikan",
     "text": "Jalankan prototype dari awal sebagai pengguna baru. Periksa link buntu, overlay yang tidak bisa ditutup, dan tombol yang tidak merespons. Jelaskan bagian yang masih berupa simulasi."
    }
   ],
   "example": "Skenario: mulai belajar\n1. Pilih satu course\n2. Buka detail dan periksa level\n3. Tekan Mulai belajar\n4. Buka materi pertama\n5. Kembali ke daftar materi",
   "questions": [
    {
     "text": "Prototype membantu menguji…",
     "choices": [
      "Alur interaksi pengguna",
      "Kecepatan database produksi secara otomatis",
      "Jumlah transaksi nyata"
     ],
     "answer": 0,
     "why": "Prototype digunakan untuk mencoba interaksi dan alur sebelum implementasi penuh."
    },
    {
     "text": "Sebelum mengirim prototype, periksa…",
     "choices": [
      "Hanya nama file",
      "Link buntu dan tindakan utama",
      "Jumlah layer tersembunyi saja"
     ],
     "answer": 1,
     "why": "Alur yang terputus dapat menghambat pengujian tugas."
    }
   ]
  },
  {
   "intro": "Usability testing mengamati orang menyelesaikan tugas. Berikan tujuan, lalu lihat apa yang mereka lakukan tanpa menjelaskan letak tombol selama percobaan.",
   "sections": [
    {
     "title": "Gunakan skenario yang realistis",
     "text": "Minta peserta memilih course yang cocok untuk pemula, bukan langsung menyuruh menekan tombol tertentu. Catat apakah tugas selesai, bagian yang membuat bingung, dan komentar peserta."
    },
    {
     "title": "Tindak lanjuti temuan",
     "text": "Kelompokkan hambatan dan utamakan yang menghalangi tugas utama. Perbaiki desain lalu coba kembali. Studi kasus perlu menjelaskan temuan dan perubahan yang dibuat, tanpa mengarang hasil pengujian."
    }
   ],
   "example": "Temuan: tiga peserta melewati tombol lanjut.\nDugaan: posisi tombol jauh dari pilihan.\nPerubahan: pindahkan tombol ke bawah pilihan.\nUji ulang: amati penyelesaian tugas pada versi baru.",
   "questions": [
    {
     "text": "Saat peserta kebingungan, penguji sebaiknya…",
     "choices": [
      "Langsung menunjukkan semua jawaban",
      "Mencatat hambatan tanpa mengarahkan tindakan",
      "Menghapus hasil uji"
     ],
     "answer": 1,
     "why": "Pengarahan dapat menutupi masalah yang ingin ditemukan."
    },
    {
     "text": "Isi studi kasus harus mengikuti…",
     "choices": [
      "Bukti dan pekerjaan yang benar-benar dilakukan",
      "Angka keberhasilan yang terlihat menarik",
      "Asumsi tanpa penjelasan"
     ],
     "answer": 0,
     "why": "Temuan yang jujur membuat keputusan desain dapat dinilai."
    }
   ]
  }
 ],
 "cloud": [
  {
   "intro": "Server menjalankan layanan yang diakses melalui jaringan. Pahami hubungan alamat IP, port, DNS, serta izin pengguna sebelum menambahkan banyak layanan.",
   "sections": [
    {
     "title": "Kenali layanan dan koneksi",
     "text": "Alamat IP menunjuk host, port menunjuk layanan, dan DNS memetakan nama ke alamat. Gunakan alat seperti ip, ss, dan systemctl untuk melihat keadaan pada server latihan milikmu."
    },
    {
     "title": "Gunakan izin seperlunya",
     "text": "Pisahkan pengguna operasional dari root dan atur permission sesuai kebutuhan. Jangan membuka semua port untuk menyelesaikan masalah koneksi. Periksa service, listener, firewall, dan jalur jaringan secara berurutan."
    }
   ],
   "example": "ip address\nss -tuln\nsystemctl status nginx\nls -l /var/www\n# Jalankan hanya pada server latihan yang kamu kelola.",
   "questions": [
    {
     "text": "Port pada koneksi jaringan membantu menunjuk…",
     "choices": [
      "Layanan pada host",
      "Lokasi monitor",
      "Nama pemilik laptop"
     ],
     "answer": 0,
     "why": "Satu host dapat menjalankan beberapa layanan yang dibedakan oleh port."
    },
    {
     "text": "Saat koneksi gagal, tindakan awal yang baik adalah…",
     "choices": [
      "Membuka semua port",
      "Memeriksa service dan listener",
      "Mematikan seluruh keamanan"
     ],
     "answer": 1,
     "why": "Periksa komponen satu per satu agar penyebabnya dapat diketahui."
    }
   ]
  },
  {
   "intro": "Git menyimpan konfigurasi dan perubahan proyek. Gunakan repository untuk menyatukan panduan menjalankan, file konfigurasi contoh, serta proses review.",
   "sections": [
    {
     "title": "Tinjau sebelum menggabungkan",
     "text": "Buat branch untuk perubahan, periksa diff, dan tulis commit yang menjelaskan hasilnya. Review membantu menemukan konfigurasi salah sebelum dipakai pada lingkungan bersama."
    },
    {
     "title": "Pisahkan rahasia",
     "text": "Simpan nama variabel dalam file contoh dan masukkan nilai rahasia melalui pengelola secret atau environment yang sesuai. Jika rahasia terlanjur masuk Git, menghapus file saja belum menghilangkan riwayatnya; kredensial perlu diganti."
    }
   ],
   "example": "git switch -c konfigurasi-healthcheck\ngit diff\ngit add compose.yaml README.md\ngit commit -m \"Tambahkan health check layanan\"\n# .env asli diabaikan; .env.example berisi placeholder.",
   "questions": [
    {
     "text": "Review perubahan dilakukan untuk…",
     "choices": [
      "Menemukan masalah sebelum digabungkan",
      "Menyembunyikan konfigurasi",
      "Mengganti seluruh anggota tim"
     ],
     "answer": 0,
     "why": "Review memberi kesempatan memeriksa dampak dan kesalahan perubahan."
    },
    {
     "text": "Secret yang terlanjur masuk repository perlu…",
     "choices": [
      "Hanya diganti nama filenya",
      "Dirotasi dan ditangani jejak kebocorannya",
      "Disalin ke README"
     ],
     "answer": 1,
     "why": "Riwayat Git dapat tetap menyimpan nilai lama, sehingga kredensial perlu diganti."
    }
   ]
  },
  {
   "intro": "Image adalah paket berlapis untuk menjalankan aplikasi. Container adalah proses terisolasi yang dibuat dari image. Data yang harus bertahan perlu penyimpanan yang dirancang dengan sengaja.",
   "sections": [
    {
     "title": "Pisahkan aplikasi dan data",
     "text": "Container dapat diganti kapan saja. Gunakan volume untuk data yang perlu dipertahankan, dan jaringan container untuk komunikasi antarservice. Publikasikan hanya port yang memang diperlukan dari luar."
    },
    {
     "title": "Buat image yang dapat dipelihara",
     "text": "Pilih base image yang sesuai, gunakan versi yang dapat ditelusuri, dan hindari menyertakan secret. Jalankan proses sebagai pengguna non-root jika memungkinkan dan periksa kebutuhan pembaruan image."
    }
   ],
   "example": "services:\n  web:\n    image: nginx:alpine\n    ports:\n      - \"127.0.0.1:8080:80\"\n    volumes:\n      - ./site:/usr/share/nginx/html:ro",
   "questions": [
    {
     "text": "Data container yang perlu bertahan sebaiknya disimpan di…",
     "choices": [
      "Volume atau penyimpanan persisten",
      "Layer sementara saja",
      "Nama container"
     ],
     "answer": 0,
     "why": "Penyimpanan persisten tetap tersedia saat container diganti."
    },
    {
     "text": "Image berbeda dari container karena image adalah…",
     "choices": [
      "Proses yang sedang berjalan",
      "Paket dasar untuk membuat container",
      "Alamat IP publik"
     ],
     "answer": 1,
     "why": "Container merupakan instans proses yang dibuat dari image."
    }
   ]
  },
  {
   "intro": "CI menjalankan pemeriksaan setiap ada perubahan. CD menyiapkan atau menerapkan rilis melalui langkah yang konsisten. Mulai dari pipeline kecil yang dapat dipercaya.",
   "sections": [
    {
     "title": "Susun tahapan berurutan",
     "text": "Checkout kode, pasang dependensi, jalankan pengujian, lalu build artefak. Deployment sebaiknya memakai artefak yang sudah diperiksa agar hasil rilis sesuai dengan yang diuji."
    },
    {
     "title": "Batasi akses pipeline",
     "text": "Simpan kredensial melalui secret yang aksesnya dibatasi. Jangan mencetak nilainya ke log. Tetapkan branch atau kondisi yang diizinkan melakukan deployment dan siapkan cara rollback."
    }
   ],
   "example": "Alur pipeline:\ncheckout → install → test → build → deploy\nJika test gagal: hentikan rilis.\nArtefak rilis: image dengan tag commit.\nPemulihan: gunakan artefak versi sebelumnya.",
   "questions": [
    {
     "text": "Jika pengujian wajib gagal, pipeline sebaiknya…",
     "choices": [
      "Tetap merilis",
      "Menghentikan proses rilis",
      "Menghapus hasil pengujian"
     ],
     "answer": 1,
     "why": "Kegagalan pemeriksaan wajib harus ditangani sebelum rilis diteruskan."
    },
    {
     "text": "Artefak yang dirilis idealnya…",
     "choices": [
      "Sama dengan yang sudah diuji",
      "Dibangun dari kode yang berbeda",
      "Tidak memiliki versi"
     ],
     "answer": 0,
     "why": "Artefak yang konsisten membuat hasil pengujian relevan dengan rilis."
    }
   ]
  },
  {
   "intro": "Cloud menyediakan komputasi, penyimpanan, dan jaringan sesuai model layanan. Pilih berdasarkan kebutuhan aplikasi dan tanggung jawab yang siap kamu kelola.",
   "sections": [
    {
     "title": "Bedakan model layanan",
     "text": "IaaS memberi kendali besar atas VM dan sistem operasi. PaaS mengelola lebih banyak bagian platform. SaaS menyediakan aplikasi siap pakai. Tanggung jawab keamanan tetap dibagi antara penyedia dan pengguna sesuai layanannya."
    },
    {
     "title": "Hitung penggunaan",
     "text": "Biaya dapat bergantung pada waktu komputasi, penyimpanan, dan transfer data. Catat kebutuhan, batas anggaran, serta kapan resource percobaan harus dihentikan. Gunakan perkiraan penggunaan sebelum membuat layanan."
    }
   ],
   "example": "Kebutuhan: aplikasi latihan kecil\nKomputasi: satu instance sesuai beban uji\nPenyimpanan: data aplikasi dan backup\nJaringan: hanya endpoint yang diperlukan\nBiaya: tetapkan anggaran dan jadwal pembersihan",
   "questions": [
    {
     "text": "Pada model shared responsibility…",
     "choices": [
      "Seluruh tanggung jawab hilang",
      "Penyedia dan pengguna memiliki tanggung jawab masing-masing",
      "Pengguna boleh mengabaikan akses"
     ],
     "answer": 1,
     "why": "Pembagian tanggung jawab bergantung pada jenis layanan yang dipakai."
    },
    {
     "text": "Sebelum membuat resource cloud, tentukan…",
     "choices": [
      "Kebutuhan dan perkiraan penggunaan",
      "Hanya nama resource",
      "Jumlah wallpaper"
     ],
     "answer": 0,
     "why": "Kebutuhan dan anggaran membantu memilih resource yang sesuai."
    }
   ]
  },
  {
   "intro": "Monitoring membantu mengetahui apakah layanan masih bekerja. Gabungkan metrik, log, dan pemeriksaan alur penting agar masalah dapat ditemukan serta ditelusuri.",
   "sections": [
    {
     "title": "Pilih sinyal yang berguna",
     "text": "Periksa availability, waktu respons, tingkat error, serta penggunaan CPU, memori, dan disk. Alert perlu menunjukkan kondisi yang dapat ditindaklanjuti, bukan hanya menghasilkan banyak notifikasi."
    },
    {
     "title": "Latih pemulihan",
     "text": "Backup baru berguna jika dapat dipulihkan. Tulis runbook berisi gejala, pemeriksaan, tindakan, dan cara memastikan layanan pulih. Uji restore pada lingkungan latihan sebelum mengandalkannya."
    }
   ],
   "example": "Runbook layanan tidak merespons:\n1. Periksa health check dan waktu kejadian\n2. Periksa log serta resource\n3. Tentukan perubahan terakhir\n4. Pulihkan dengan tindakan yang sesuai\n5. Uji kembali alur utama",
   "questions": [
    {
     "text": "Cara memastikan backup bisa digunakan adalah…",
     "choices": [
      "Menguji proses restore",
      "Hanya melihat nama file",
      "Mengganti warna dashboard"
     ],
     "answer": 0,
     "why": "Pengujian restore memeriksa apakah data dan prosedurnya benar-benar dapat dipakai."
    },
    {
     "text": "Alert yang baik sebaiknya…",
     "choices": [
      "Selalu berbunyi tiap detik",
      "Menunjukkan kondisi yang dapat ditindaklanjuti",
      "Tidak menyertakan konteks"
     ],
     "answer": 1,
     "why": "Alert perlu membantu operator menentukan pemeriksaan atau tindakan berikutnya."
    }
   ]
  }
 ],
 "security": [
  {
   "intro": "Keamanan jaringan dimulai dari memahami aset dan layanan yang berjalan. Gunakan lingkungan latihan sendiri atau yang memiliki izin jelas untuk setiap pemeriksaan.",
   "sections": [
    {
     "title": "Petakan komunikasi",
     "text": "Catat host, alamat, port, dan layanan yang memang diperlukan. Pahami DNS, TCP/IP, dan alur request sederhana. Peta ini menjadi dasar untuk membatasi akses dan menyelidiki gangguan."
    },
    {
     "title": "Administrasikan sistem dengan tertib",
     "text": "Gunakan akun terpisah, permission yang sesuai, dan pembaruan terjadwal. Kenali perbedaan service yang aktif dengan port yang dapat diakses dari jaringan. Dokumentasikan konfigurasi awal sebelum mengubahnya."
    }
   ],
   "example": "Aset: server web latihan\nLayanan yang diperlukan: HTTPS dan administrasi terbatas\nPemilik: tim latihan\nRuang lingkup: host lokal yang diizinkan\nBukti: konfigurasi dan log milik lingkungan tersebut",
   "questions": [
    {
     "text": "Sebelum pemeriksaan keamanan, pastikan…",
     "choices": [
      "Izin dan ruang lingkup jelas",
      "Semua host internet boleh diuji",
      "Tidak perlu mencatat aset"
     ],
     "answer": 0,
     "why": "Izin dan ruang lingkup menentukan lingkungan serta tindakan yang diperbolehkan."
    },
    {
     "text": "Pemetaan service membantu…",
     "choices": [
      "Mengganti ukuran layar",
      "Menentukan akses yang memang diperlukan",
      "Menghilangkan kebutuhan pembaruan"
     ],
     "answer": 1,
     "why": "Daftar layanan menjadi dasar pembatasan akses dan penanganan risiko."
    }
   ]
  },
  {
   "intro": "Risiko muncul ketika ancaman dapat memanfaatkan kelemahan dan berdampak pada aset. Tentukan pengendalian sesuai kemungkinan kejadian serta besarnya dampak.",
   "sections": [
    {
     "title": "Gunakan kerahasiaan, integritas, dan ketersediaan",
     "text": "Kerahasiaan membatasi pembacaan data. Integritas menjaga data dari perubahan tidak sah. Ketersediaan menjaga layanan tetap dapat digunakan. Satu pengendalian dapat mendukung beberapa tujuan sekaligus."
    },
    {
     "title": "Terapkan least privilege",
     "text": "Berikan akses sebatas tugas yang diperlukan dan tinjau kembali saat peran berubah. Catat risiko, pemilik tindakan, serta cara memeriksa apakah pengendalian bekerja."
    }
   ],
   "example": "Aset: data akun\nAncaman: akses tidak sah\nDampak: informasi pribadi terbuka\nKontrol: pembatasan akses dan autentikasi yang sesuai\nVerifikasi: uji akses antarperan pada sistem latihan",
   "questions": [
    {
     "text": "Least privilege berarti…",
     "choices": [
      "Memberikan semua akses",
      "Memberikan akses sebatas kebutuhan tugas",
      "Menghapus semua akun"
     ],
     "answer": 1,
     "why": "Akses minimum mengurangi dampak jika akun atau proses bermasalah."
    },
    {
     "text": "Integritas data berkaitan dengan…",
     "choices": [
      "Pencegahan perubahan tidak sah",
      "Kecepatan mengetik",
      "Warna tabel"
     ],
     "answer": 0,
     "why": "Integritas menjaga keakuratan dan perubahan data yang diizinkan."
    }
   ]
  },
  {
   "intro": "Keamanan aplikasi perlu diperiksa pada input, identitas, izin, dan cara data ditampilkan. Kategori OWASP dapat menjadi rujukan risiko, lalu dihubungkan dengan konteks aplikasi.",
   "sections": [
    {
     "title": "Pisahkan autentikasi dan izin",
     "text": "Login tidak otomatis memberikan akses ke seluruh data. Setiap request perlu pemeriksaan otorisasi sesuai pemilik dan peran pengguna. Uji dua akun berbeda untuk melihat apakah batas akses bekerja."
    },
    {
     "title": "Tangani input sesuai konteks",
     "text": "Validasi tipe serta nilai input, gunakan parameter query untuk database, dan lakukan output encoding sesuai konteks tampilan. Jangan mengandalkan penyaringan di frontend sebagai satu-satunya pengendalian."
    }
   ],
   "example": "Pemeriksaan aplikasi catatan milik sendiri:\n- Akun A hanya melihat catatan A\n- Input salah ditolak dengan pesan yang jelas\n- Query memakai parameter\n- Isi pengguna ditampilkan sebagai teks yang sesuai",
   "questions": [
    {
     "text": "Pengguna yang sudah login tetap memerlukan…",
     "choices": [
      "Pemeriksaan otorisasi",
      "Akses ke semua data",
      "Password pengguna lain"
     ],
     "answer": 0,
     "why": "Identitas yang valid belum membuktikan izin terhadap resource tertentu."
    },
    {
     "text": "Untuk nilai pengguna pada SQL, gunakan…",
     "choices": [
      "Penggabungan string bebas",
      "Parameter query",
      "Nama CSS"
     ],
     "answer": 1,
     "why": "Parameter query memisahkan instruksi SQL dari nilai input."
    }
   ]
  },
  {
   "intro": "Hardening mengurangi permukaan serangan melalui konfigurasi yang diperlukan saja. Ubah satu bagian pada satu waktu dan periksa dampaknya agar layanan tetap bekerja.",
   "sections": [
    {
     "title": "Kurangi layanan dan akses",
     "text": "Nonaktifkan layanan yang tidak dipakai, batasi port, dan gunakan permission yang sesuai. Jangan memberi akses administratif untuk menyelesaikan seluruh masalah. Siapkan jalur pemulihan sebelum mengubah akses remote."
    },
    {
     "title": "Jaga pembaruan dan konfigurasi",
     "text": "Tinjau versi perangkat lunak, jadwal patch, serta konfigurasi autentikasi. Simpan catatan perubahan dan uji alur utama setelah perbaikan. Backup dan rollback membantu memulihkan perubahan yang gagal."
    }
   ],
   "example": "Checklist hardening server latihan:\n- Tinjau layanan aktif\n- Batasi akses administrasi\n- Periksa permission\n- Jadwalkan pembaruan\n- Uji layanan setelah perubahan",
   "questions": [
    {
     "text": "Tujuan hardening adalah…",
     "choices": [
      "Mengurangi akses dan layanan yang tidak diperlukan",
      "Membuka seluruh port",
      "Menghapus semua log"
     ],
     "answer": 0,
     "why": "Permukaan serangan berkurang ketika komponen yang tidak dibutuhkan dibatasi."
    },
    {
     "text": "Sebelum mengubah akses remote, siapkan…",
     "choices": [
      "Nama baru untuk server",
      "Jalur pemulihan",
      "Penghapusan seluruh akun"
     ],
     "answer": 1,
     "why": "Jalur pemulihan membantu mencegah kehilangan akses saat konfigurasi salah."
    }
   ]
  },
  {
   "intro": "Log membantu membangun kronologi kejadian, tetapi satu entri belum cukup untuk menyimpulkan insiden. Cocokkan waktu, sumber, dan konteks layanan sebelum menentukan tindakan.",
   "sections": [
    {
     "title": "Bangun kronologi dari bukti",
     "text": "Catat waktu dan zona waktu, sumber log, request atau event ID, serta perubahan yang berkaitan. Pertahankan bukti asli dan pisahkan catatan analisis agar proses dapat ditelusuri."
    },
    {
     "title": "Tangani insiden secara terarah",
     "text": "Lakukan triage, batasi dampak sesuai prosedur, perbaiki penyebab, lalu verifikasi pemulihan. Batasi akses terhadap bukti yang berisi data pribadi. Hindari menuduh pihak tertentu tanpa dukungan bukti."
    }
   ],
   "example": "Waktu: 10:05 WIB\nSumber: log autentikasi server latihan\nTemuan: kenaikan login gagal\nPemeriksaan: akun, sumber, dan perubahan konfigurasi\nTindakan: sesuai prosedur dan izin pengelola",
   "questions": [
    {
     "text": "Satu entri log yang tidak biasa berarti…",
     "choices": [
      "Pasti ada penyerang tertentu",
      "Perlu diperiksa bersama konteks lain",
      "Seluruh bukti harus dihapus"
     ],
     "answer": 1,
     "why": "Kesimpulan memerlukan korelasi dan konteks yang cukup."
    },
    {
     "text": "Bukti log asli sebaiknya…",
     "choices": [
      "Dipertahankan dan aksesnya dibatasi",
      "Ditimpa oleh tafsiran",
      "Diunggah tanpa pemeriksaan"
     ],
     "answer": 0,
     "why": "Bukti yang utuh membantu penelusuran dan menjaga privasi."
    }
   ]
  },
  {
   "intro": "Laporan keamanan menjelaskan apa yang ditemukan, dampaknya, dan tindakan yang disarankan. Tuliskan batas pengujian dan hanya sertakan bukti yang memang boleh dibagikan.",
   "sections": [
    {
     "title": "Jelaskan temuan yang dapat ditindaklanjuti",
     "text": "Tuliskan aset, kondisi yang diamati, langkah reproduksi pada lingkungan berizin, dampak, dan mitigasi. Bedakan bukti yang ditemukan dengan asumsi tentang kemungkinan dampak."
    },
    {
     "title": "Verifikasi perbaikan",
     "text": "Setelah mitigasi diterapkan, ulangi pemeriksaan yang relevan dan uji agar fungsi utama tetap berjalan. Catat risiko yang masih tersisa serta keterbatasan pengujian. Samarkan token dan informasi pribadi pada bukti."
    }
   ],
   "example": "Temuan: pengguna B dapat membaca catatan A\nLingkungan: aplikasi latihan dengan izin\nDampak: kerahasiaan catatan terganggu\nMitigasi: pemeriksaan pemilik pada backend\nVerifikasi: akses lintas akun ditolak setelah perbaikan",
   "questions": [
    {
     "text": "Laporan keamanan perlu memuat…",
     "choices": [
      "Temuan, bukti, dampak, dan mitigasi",
      "Hanya nama alat",
      "Klaim tanpa pemeriksaan"
     ],
     "answer": 0,
     "why": "Informasi tersebut membantu pengelola memahami dan menangani temuan."
    },
    {
     "text": "Setelah perbaikan, lakukan…",
     "choices": [
      "Penghapusan seluruh catatan",
      "Verifikasi ulang dan uji fungsi terkait",
      "Publikasi token sebagai bukti"
     ],
     "answer": 1,
     "why": "Verifikasi memastikan perbaikan bekerja dan tidak merusak fungsi yang diperlukan."
    }
   ]
  }
 ]
};
const advancedContent = {
 "frontend": {
  "title": "Frontend Product Studio",
  "summary": "Latih UI yang responsif, mudah diakses, dan siap menghadapi keadaan loading maupun error.",
  "modules": [
   {
    "intro": "Komponen yang matang memiliki kontrak data dan keadaan interaksi yang jelas.",
    "sections": [
     {
      "title": "Aksesibilitas sebagai bagian alur",
      "text": "Gunakan elemen semantik, label, urutan fokus, dan pesan error yang terhubung dengan input. Uji dengan keyboard sebelum menambah animasi."
     }
    ],
    "example": "<button type=\"submit\" aria-busy=\"false\">Simpan perubahan</button>",
    "questions": [
     {
      "text": "UI yang dapat digunakan dengan keyboard memerlukan…",
      "choices": [
       "Urutan fokus yang jelas",
       "Hover saja",
       "Teks berupa gambar"
      ],
      "answer": 0,
      "why": "Urutan fokus dan elemen yang tepat membantu interaksi tanpa mouse."
     }
    ]
   },
   {
    "intro": "Pisahkan keadaan data agar pengguna tahu apakah proses masih berjalan, gagal, atau sudah selesai.",
    "sections": [
     {
      "title": "Loading, empty, error, success",
      "text": "Jangan biarkan request yang gagal menjadi spinner tanpa akhir. Tawarkan coba lagi dan pertahankan input yang masih relevan."
     }
    ],
    "example": "const states = [\"loading\", \"empty\", \"error\", \"success\"];",
    "questions": [
     {
      "text": "Saat request gagal, langkah UI yang membantu adalah…",
      "choices": [
       "Menghapus semua input",
       "Pesan yang jelas dan pilihan coba lagi",
       "Spinner selamanya"
      ],
      "answer": 1,
      "why": "Pemulihan yang jelas membantu pengguna meneruskan tugas."
     }
    ]
   },
   {
    "intro": "Uji hasil komponen di beberapa ukuran dan pada interaksi utama sebelum merilisnya.",
    "sections": [
     {
      "title": "Verifikasi sebelum rilis",
      "text": "Periksa form, navigasi, keyboard, layar sempit, dan koneksi yang gagal. Catat hasil yang benar-benar diamati."
     }
    ],
    "example": "Checklist: keyboard · HP · loading · empty · error",
    "questions": [
     {
      "text": "Bukti kualitas proyek berasal dari…",
      "choices": [
       "Jumlah efek visual",
       "Klaim tanpa uji",
       "Pengujian alur yang terdokumentasi"
      ],
      "answer": 2,
      "why": "Pengujian yang dicatat membuat hasil dapat dinilai."
     }
    ]
   }
  ],
  "challenge": "Buat kartu pendaftaran course dengan main, label input, tombol submit, dan CSS media query. Preview hanya menampilkan HTML/CSS; JavaScript tidak dijalankan.",
  "starter": "<main>\n  <h1>Daftar course</h1>\n  <!-- Tambahkan label, input, dan tombol -->\n</main>\n<style>\n/* Tambahkan layout responsif */\n</style>",
  "rules": [
   [
    "Area konten utama",
    "<main"
   ],
   [
    "Input memiliki label",
    "<label"
   ],
   [
    "Ada tombol tindakan",
    "<button"
   ],
   [
    "Ada penyesuaian layar",
    "@media"
   ]
  ]
 },
 "backend": {
  "title": "Backend API Engineering",
  "summary": "Susun kontrak API, batas akses, dan skenario pengujian untuk layanan catatan.",
  "modules": [
   {
    "intro": "Kontrak API menyamakan harapan klien dan server.",
    "sections": [
     {
      "title": "Tentukan input serta hasil",
      "text": "Tuliskan method, path, validasi, status berhasil, dan status gagal. Batasi ukuran data yang dikembalikan."
     }
    ],
    "example": "POST /notes → 201\nInput salah → 400",
    "questions": [
     {
      "text": "Kontrak endpoint perlu menjelaskan…",
      "choices": [
       "Input dan respons",
       "Hanya nama server",
       "Warna terminal"
      ],
      "answer": 0,
      "why": "Kontrak menjelaskan perilaku yang dapat diandalkan klien."
     }
    ]
   },
   {
    "intro": "Batas akses diperiksa pada setiap resource yang dilindungi.",
    "sections": [
     {
      "title": "Uji lintas akun",
      "text": "Coba akses catatan pengguna A melalui akun B. Tolak akses yang tidak berhak dan jangan membocorkan isi resource."
     }
    ],
    "example": "if (note.ownerId !== user.id) deny();",
    "questions": [
     {
      "text": "Login berhasil berarti…",
      "choices": [
       "Boleh membaca semua catatan",
       "Identitas diketahui, izin tetap diperiksa",
       "Tidak perlu validasi"
      ],
      "answer": 1,
      "why": "Autentikasi berbeda dari otorisasi terhadap resource."
     }
    ]
   },
   {
    "intro": "Rilis layanan harus mempertahankan integritas data.",
    "sections": [
     {
      "title": "Transaksi dan observabilitas",
      "text": "Gunakan transaksi untuk perubahan yang harus konsisten. Catat request ID dan kategori error tanpa kredensial."
     }
    ],
    "example": "request_id → log → diagnosis",
    "questions": [
     {
      "text": "Log produksi sebaiknya menghindari…",
      "choices": [
       "Waktu",
       "Request ID",
       "Token pengguna"
      ],
      "answer": 2,
      "why": "Token merupakan rahasia akses."
     }
    ]
   }
  ],
  "challenge": "Tulis rancangan API catatan: sertakan POST /notes, respons 201, pemeriksaan ownerId, dan satu skenario pengujian akses ditolak.",
  "starter": "Endpoint:\nValidasi:\nPemeriksaan akses:\nPengujian:",
  "rules": [
   [
    "Endpoint pembuatan catatan",
    "post /notes"
   ],
   [
    "Status berhasil dibuat",
    "201"
   ],
   [
    "Pemeriksaan pemilik",
    "ownerid"
   ],
   [
    "Skenario pengujian",
    "uji"
   ]
  ]
 },
 "data": {
  "title": "Data Analysis Case Studio",
  "summary": "Kerjakan studi kasus dari pertanyaan analisis sampai laporan yang dapat ditelusuri.",
  "modules": [
   {
    "intro": "Pertanyaan analisis menentukan data dan ukuran yang diperlukan.",
    "sections": [
     {
      "title": "Tetapkan unit dan periode",
      "text": "Definisikan apakah satu baris mewakili transaksi atau pengguna. Periksa periode dan kualitas data sebelum menghitung ringkasan."
     }
    ],
    "example": "Pertanyaan: total transaksi paid per kategori.",
    "questions": [
     {
      "text": "Langkah awal analisis adalah…",
      "choices": [
       "Menentukan pertanyaan dan unit analisis",
       "Memilih warna grafik",
       "Menghapus data mentah"
      ],
      "answer": 0,
      "why": "Pertanyaan dan unit menentukan proses yang relevan."
     }
    ]
   },
   {
    "intro": "Pembersihan harus dapat diulang dan dijelaskan.",
    "sections": [
     {
      "title": "Pisahkan data mentah dan hasil",
      "text": "Catat aturan duplikat, tipe nilai, dan missing values. Pertimbangkan dampak penghapusan data terhadap hasil."
     }
    ],
    "example": "raw → validation → cleaning → analysis",
    "questions": [
     {
      "text": "Keputusan pembersihan perlu…",
      "choices": [
       "Dirahasiakan",
       "Dicatat beserta alasannya",
       "Mengubah semua nilai kosong menjadi nol"
      ],
      "answer": 1,
      "why": "Catatan keputusan mendukung audit dan reproduksi."
     }
    ]
   },
   {
    "intro": "Simpulan harus mengikuti batas data.",
    "sections": [
     {
      "title": "Hindari klaim sebab-akibat yang berlebihan",
      "text": "Sajikan ukuran sampel, periode, dan keterbatasan. Jelaskan perbedaan temuan dengan rekomendasi."
     }
    ],
    "example": "Temuan ≠ bukti sebab-akibat",
    "questions": [
     {
      "text": "Korelasi cukup untuk membuktikan penyebab?",
      "choices": [
       "Selalu",
       "Jika grafik menarik",
       "Tidak"
      ],
      "answer": 2,
      "why": "Faktor lain dan desain penelitian perlu dipertimbangkan."
     }
    ]
   }
  ],
  "challenge": "Tulis query total amount per category dari sales untuk status paid. Tambahkan catatan batasan periode dataset.",
  "starter": "SELECT ...\nFROM sales\n...\n\nBatasan:",
  "rules": [
   [
    "Menghitung total",
    "sum("
   ],
   [
    "Mengelompokkan kategori",
    "group by category"
   ],
   [
    "Memilih transaksi paid",
    "paid"
   ],
   [
    "Menjelaskan batas analisis",
    "batasan"
   ]
  ]
 },
 "design": {
  "title": "UX Research & Product Case",
  "summary": "Susun keputusan desain yang ditopang temuan, alur, dan pengujian tugas.",
  "modules": [
   {
    "intro": "Keputusan desain berangkat dari tugas yang perlu diselesaikan pengguna.",
    "sections": [
     {
      "title": "Hubungkan temuan dan kebutuhan",
      "text": "Pisahkan ucapan peserta, tafsiran, dan usulan. Gunakan persetujuan yang jelas pada pengumpulan data."
     }
    ],
    "example": "Temuan → kebutuhan → rancangan",
    "questions": [
     {
      "text": "Usulan desain sebaiknya ditopang…",
      "choices": [
       "Temuan yang relevan",
       "Selera pembuat saja",
       "Angka yang dikarang"
      ],
      "answer": 0,
      "why": "Temuan memberi dasar untuk menilai rancangan."
     }
    ]
   },
   {
    "intro": "Alur lengkap mencakup tindakan berhasil dan cara memulihkan kesalahan.",
    "sections": [
     {
      "title": "Rancang jalur kembali",
      "text": "Pengguna perlu mengetahui lokasi, hasil tindakan, dan cara mengoreksi input. Tampilkan error dekat bagian yang perlu diperbaiki."
     }
    ],
    "example": "Pilih → tinjau → simpan → konfirmasi",
    "questions": [
     {
      "text": "Keadaan error perlu…",
      "choices": [
       "Disembunyikan",
       "Petunjuk pemulihan",
       "Warna merah saja"
      ],
      "answer": 1,
      "why": "Petunjuk membantu pengguna melanjutkan tugas."
     }
    ]
   },
   {
    "intro": "Uji tugas menunjukkan hambatan yang perlu diperbaiki.",
    "sections": [
     {
      "title": "Tulis kriteria keberhasilan",
      "text": "Amati penyelesaian tugas, hambatan, dan perubahan setelah revisi. Pertimbangkan akses keyboard dan keterbacaan."
     }
    ],
    "example": "Tugas → observasi → revisi → uji ulang",
    "questions": [
     {
      "text": "Saat uji pengguna, penguji sebaiknya…",
      "choices": [
       "Menentukan semua klik",
       "Mengisi jawaban peserta",
       "Mengamati tanpa mengarahkan"
      ],
      "answer": 2,
      "why": "Pengarahan dapat menutupi hambatan sebenarnya."
     }
    ]
   }
  ],
  "challenge": "Tulis studi kasus pemilihan course. Sertakan kebutuhan pengguna, user flow, aksesibilitas, dan rencana uji tugas.",
  "starter": "Kebutuhan pengguna:\nUser flow:\nAksesibilitas:\nRencana uji:",
  "rules": [
   [
    "Ada kebutuhan pengguna",
    "pengguna"
   ],
   [
    "Ada alur tugas",
    "user flow"
   ],
   [
    "Ada pertimbangan aksesibilitas",
    "aksesibilitas"
   ],
   [
    "Ada rencana uji",
    "uji"
   ]
  ]
 },
 "cloud": {
  "title": "Cloud Deployment & Reliability",
  "summary": "Rancang deployment yang dapat diperiksa dan dipulihkan dengan konfigurasi yang tertata.",
  "modules": [
   {
    "intro": "Deployment yang terulang membutuhkan artefak dan konfigurasi yang dapat ditelusuri.",
    "sections": [
     {
      "title": "Pisahkan aplikasi, data, dan secret",
      "text": "Tag image sesuai versi, simpan data pada penyimpanan yang sesuai, dan masukkan rahasia melalui mekanisme konfigurasi."
     }
    ],
    "example": "code → tested image → deployment",
    "questions": [
     {
      "text": "Artefak rilis sebaiknya…",
      "choices": [
       "Memiliki versi yang dapat ditelusuri",
       "Selalu tanpa tag",
       "Memuat password asli"
      ],
      "answer": 0,
      "why": "Versi membantu verifikasi dan rollback."
     }
    ]
   },
   {
    "intro": "Batasi hak proses dan akses jaringan sesuai kebutuhan.",
    "sections": [
     {
      "title": "Gunakan prinsip minimum",
      "text": "Jalankan proses sebagai non-root jika memungkinkan. Publikasikan port seperlunya dan siapkan health check yang relevan."
     }
    ],
    "example": "USER app\nHEALTHCHECK ...",
    "questions": [
     {
      "text": "Pengguna non-root membantu…",
      "choices": [
       "Menambah semua izin",
       "Membatasi hak proses",
       "Menghilangkan semua risiko"
      ],
      "answer": 1,
      "why": "Hak proses yang lebih kecil membatasi dampak tertentu."
     }
    ]
   },
   {
    "intro": "Layanan yang dapat diandalkan memiliki rencana pemulihan yang diuji.",
    "sections": [
     {
      "title": "Uji rollback dan restore",
      "text": "Catat langkah pemulihan, kondisi pemicu, dan verifikasi setelah tindakan. Backup perlu diuji pemulihannya."
     }
    ],
    "example": "release → observe → rollback jika diperlukan",
    "questions": [
     {
      "text": "Backup dapat diandalkan setelah…",
      "choices": [
       "Namanya diganti",
       "Dikirim ke chat",
       "Proses restore diuji"
      ],
      "answer": 2,
      "why": "File backup dan prosedur restore harus benar-benar dapat digunakan."
     }
    ]
   }
  ],
  "challenge": "Tulis rancangan deployment container. Sertakan USER non-root, HEALTHCHECK, volume untuk data, dan rencana rollback.",
  "starter": "Image dan versi:\nPengguna proses:\nHealth check:\nPenyimpanan:\nPemulihan:",
  "rules": [
   [
    "Pengguna non-root",
    "user"
   ],
   [
    "Pemeriksaan kesehatan",
    "healthcheck"
   ],
   [
    "Data persisten",
    "volume"
   ],
   [
    "Pemulihan versi",
    "rollback"
   ]
  ]
 },
 "security": {
  "title": "Security Review & Remediation",
  "summary": "Latih penilaian risiko, rekomendasi mitigasi, dan verifikasi perbaikan pada sistem berizin.",
  "modules": [
   {
    "intro": "Pemeriksaan dimulai dari izin, aset, dan batas tindakan.",
    "sections": [
     {
      "title": "Definisikan ruang lingkup",
      "text": "Catat pemilik, sistem latihan, data yang boleh diakses, dan waktu pemeriksaan. Hindari menguji sistem di luar izin."
     }
    ],
    "example": "Izin → ruang lingkup → pemeriksaan",
    "questions": [
     {
      "text": "Pengujian keamanan dilakukan pada…",
      "choices": [
       "Lingkungan yang memiliki izin jelas",
       "Sembarang domain",
       "Akun orang lain"
      ],
      "answer": 0,
      "why": "Izin menentukan batas tindakan yang sah dalam latihan."
     }
    ]
   },
   {
    "intro": "Temuan perlu dihubungkan dengan dampak yang didukung bukti.",
    "sections": [
     {
      "title": "Pisahkan observasi dan dugaan",
      "text": "Tulis apa yang diamati, dampak yang masuk akal, dan keterbatasan. Samarkan token serta data pribadi pada bukti."
     }
    ],
    "example": "Bukti → risiko → prioritas",
    "questions": [
     {
      "text": "Bukti yang dibagikan harus…",
      "choices": [
       "Memuat token asli",
       "Disamarkan dari rahasia yang tidak diperlukan",
       "Selalu dipublikasikan"
      ],
      "answer": 1,
      "why": "Bukti tetap perlu menjaga data dan akses sensitif."
     }
    ]
   },
   {
    "intro": "Mitigasi harus diikuti pemeriksaan ulang.",
    "sections": [
     {
      "title": "Verifikasi dan uji regresi",
      "text": "Ulangi skenario yang relevan dan periksa fungsi utama setelah perubahan. Catat risiko tersisa serta pemilik tindak lanjut."
     }
    ],
    "example": "Perbaikan → retest → catatan hasil",
    "questions": [
     {
      "text": "Setelah mitigasi diterapkan…",
      "choices": [
       "Langsung nyatakan sempurna",
       "Hapus catatan",
       "Verifikasi ulang"
      ],
      "answer": 2,
      "why": "Pemeriksaan ulang menguji apakah mitigasi memang bekerja."
     }
    ]
   }
  ],
  "challenge": "Tulis laporan risiko akses lintas akun pada aplikasi latihan. Sertakan ruang lingkup berizin, dampak, mitigasi, dan verifikasi ulang.",
  "starter": "Ruang lingkup:\nTemuan dan dampak:\nMitigasi:\nVerifikasi:",
  "rules": [
   [
    "Batas pemeriksaan",
    "ruang lingkup"
   ],
   [
    "Penjelasan dampak",
    "dampak"
   ],
   [
    "Usulan mitigasi",
    "mitigasi"
   ],
   [
    "Pemeriksaan ulang",
    "verifikasi"
   ]
  ]
 }
};
