# CareerPilot AI — Pathwise

Prototype web statis dengan HTML, CSS, dan JavaScript. Versi ini memuat pembagian Free dan Plus yang diperbarui. Materi bisa dibaca langsung di aplikasi, sementara tautan course dan bacaan pendamping membuka situs penyedia.

## Pasang di GitHub Pages

Paket ini tidak memerlukan `npm install`, proses build, backend, atau API key.

1. Ekstrak ZIP. Isi hasil ekstraksi akan menjadi isi utama repositori.
2. Buat repositori GitHub kosong, misalnya `careerpilot-ai`. Gunakan repositori **public** jika memakai GitHub Free. Saat membuat repo, jangan tambahkan README, .gitignore, atau lisensi terlebih dahulu agar tidak bentrok dengan push awal.
3. Pastikan `index.html`, `styles.css`, `app.js`, dan folder `assets` berada langsung di root repositori. Upload isi ZIP, bukan file ZIP-nya dan bukan folder pembungkusnya.
4. Push dengan perintah di bawah, atau gunakan **Add file → Upload files** di GitHub untuk mengunggah seluruh isi hasil ekstraksi.
5. Setelah berkas masuk ke branch `main`, buka **Settings → Pages**.
6. Pada **Build and deployment**, atur **Source: Deploy from a branch**, **Branch: main**, dan **Folder: /(root)**, lalu klik **Save**.
7. Tunggu proses deployment selesai. Tautan situs akan muncul di halaman Pages. Untuk contoh nama repo tadi, alamatnya `https://USERNAME.github.io/careerpilot-ai/`.

Panduan resmi: [Mengatur sumber publikasi GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Push melalui terminal

Jalankan di folder hasil ekstraksi yang berisi `index.html`. Ganti `USERNAME` dengan username GitHub kamu, dan sesuaikan nama repo jika berbeda. Perintah ini untuk repositori baru yang masih kosong.

```bash
git init
git add .
git commit -m "Initial CareerPilot AI prototype"
git branch -M main
git remote add origin https://github.com/USERNAME/careerpilot-ai.git
git push -u origin main
```

Jika repo sudah berisi file, clone repo tersebut lalu salin isi hasil ekstraksi ke folder clone sebelum commit dan push.

## Isi paket

- `index.html` — halaman utama dan pemuatan aplikasi.
- `styles.css` — tampilan desktop dan HP.
- `app.js` — profil, roadmap, paket, dan navigasi.
- `learning-data.js` — 36 materi dasar, 72 soal, dan 18 modul mitra demo.
- `learning.js` — alur materi, kuis, praktik, tutor, proyek, dan sertifikat demo.
- `learning.css` — tampilan ruang belajar, termasuk layar HP.
- `assets/` — foto dan favicon lokal.
- `.nojekyll` — penanda untuk menyajikan berkas statis tanpa pengolahan Jekyll.
- `README.md` — panduan ini.

Semua aset lokal menggunakan path relatif. Navigasi memakai URL hash, sehingga aplikasi bisa berjalan di subfolder repositori GitHub Pages tanpa konfigurasi routing tambahan.

## Menjalankan di komputer

Jika Python tersedia, buka terminal di folder hasil ekstraksi lalu jalankan:

```bash
python -m http.server 8080
```

Buka `http://localhost:8080`. Kamu juga bisa memakai ekstensi Live Server pada VS Code.

## Isi pembelajaran

Enam jalur: Frontend Developer, Backend Developer, Data Analyst, UI/UX Designer, Cloud & DevOps, dan Cybersecurity. Setiap jalur memiliki enam tahap dengan materi ringkas, contoh, kuis, serta mini project. Total: 36 materi dasar, 72 soal dasar, dan 18 modul lanjutan course mitra simulasi.

Materi ringkas dan soal ditulis untuk prototype ini. Materi tersebut merupakan pengantar dan tidak menggantikan course lengkap. Tautan pendamping membantu pengguna mempelajari topik lebih jauh.

## Free dan Plus

| Fitur | Free | Plus |
| --- | --- | --- |
| Profil, CV demo, roadmap, dan ringkasan skill | Ya | Ya |
| Materi tiap tahap dan course publik | Ya | Ya |
| Checklist, progres, target mingguan, bookmark | Ya | Ya |
| Kuis dasar beserta pembahasan | Ya | Ya |
| Mini project dan simpan tautan portofolio | Ya | Ya |
| Tutor demo per hari (WIB) | 20 pertanyaan | 100 pertanyaan |
| Unduh roadmap | Ya | Ya |
| Sertifikat course gratis | Mengikuti penyedia | Mengikuti penyedia |
| Course mitra dan materi lanjutan (simulasi) | — | Ya |
| Hands-on lanjutan dan feedback kriteria | — | Ya |
| Evaluasi ulang dan pembaruan roadmap | — | Ya |
| Riwayat evaluasi dan laporan perkembangan | — | Ya |
| Sertifikat course mitra | — | Setelah lulus, termasuk paket |
| Sertifikat penyelesaian roadmap CareerPilot | — | Setelah syarat terpenuhi |

Sertifikat course gratis dikerjakan dan diperoleh di situs penyedia. CareerPilot tidak menghapus hak sertifikat gratis yang memang diberikan penyedia. Course publik yang ditautkan bukan mitra resmi.

## Alur demo

1. Pilih **Susun roadmap saya**, lalu isi profil atau gunakan **Upload CV demo** untuk memuat profil fiktif Raka Pratama.
2. Pilih tujuan dan buat roadmap. Pada Free, buka materi tahap, pelajari contoh, lalu kerjakan kuis. Semua soal harus benar untuk status lulus kuis demo; percobaan dapat diulang.
3. Tandai checklist setelah mengerjakan tugas. Lihat persentase pada halaman Progres dan atur target mingguan.
4. Buka **Materi & course** untuk mencari course atau bacaan pendamping. Setiap kartu menjelaskan ketentuan sertifikat.
5. Kerjakan mini project pada **Latihan & proyek**, kemudian simpan tautan hasil dan refleksi. Tautan hanya dicatat, tanpa proses review nyata.
6. Coba **Tanya jawab**. Respons berasal dari materi contoh, bukan AI. Kuota demo disimpan di browser dan direset berdasarkan tanggal WIB.
7. Aktifkan **Paket demo Plus**. Buka course mitra simulasi dan selesaikan tiga kuis modul. Kerjakan hands-on lanjutan serta periksa kriteria hasilnya.
8. Di **Sertifikat**, sertifikat course mitra demo tersedia setelah tiga kuis mitra lulus dan seluruh kriteria hands-on terpenuhi. Sertifikat roadmap demo memerlukan 18 checklist, enam kuis dasar lulus, dan proyek utama tersimpan.
9. Unduh sertifikat contoh dalam format SVG. File memuat nama, jalur, tanggal, dan watermark **SIMULASI — BUKAN SERTIFIKAT RESMI**. Tidak ada sertifikat resmi atau jaminan kerja sama nyata pada prototype.
10. Pada HP, empat menu utama berada di bawah; menu Progres, Tanya jawab, Sertifikat, dan Profil tersedia melalui **Lainnya**.

## Batas prototype

- Tidak memakai backend, akun, pembayaran, API AI, atau integrasi penyedia course.
- Upload CV hanya memakai data contoh, tanpa membaca atau mengirim berkas pribadi.
- Roadmap, tutor, evaluasi, dan review merupakan demonstrasi dengan aturan serta respons yang disiapkan. Tutor tidak melakukan analisis kode langsung.
- Pemeriksaan hands-on hanya mengenali kriteria teks. Hasilnya tidak membuktikan kode berjalan atau kompetensi profesional. Preview frontend hanya merender HTML/CSS dalam iframe sandbox; script dan jaringan diblokir.
- Nama course mitra adalah contoh buatan untuk memperagakan rancangan layanan. Tidak ada penyedia nyata yang diklaim telah bekerja sama. Rancangan bisnis Plus memasukkan biaya sertifikat mitra setelah lulus.
- Profil, progres, kuis, proyek, percakapan, dan pilihan paket disimpan di localStorage browser. Data tidak tersinkron antarperangkat. Perpindahan ke Free mempertahankan data belajar; fitur Plus mengikuti paket yang sedang dipilih.
- Pilihan paket dan kelulusan bersifat lokal dan dapat dimodifikasi di browser. Jangan memakai prototype sebagai sistem penerbitan sertifikat produksi.
- Data dapat dihapus melalui **Profil & paket → Hapus semua data demo**.
- Foto tersimpan sebagai aset lokal. Font Manrope dimuat dari Google Fonts dengan Arial/sans-serif sebagai cadangan. Course eksternal memerlukan internet dan mungkin akun penyedia.

## Sumber visual dan materi pendamping

- Referensi visual: [Edurock Education Landing Page Design](https://dribbble.com/shots/24197700-Edurock-Education-Landing-Page-Design) oleh Shorab Hossen.
- [Foto portrait](https://images.unsplash.com/photo-1544717305-2782549b5136) dan [foto belajar](https://images.unsplash.com/photo-1434030216411-0b793f4b4173) dari Unsplash.
- Font: [Manrope](https://fonts.google.com/specimen/Manrope).
- [MDN: HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content), [CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics), [JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting), dan [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- [freeCodeCamp: Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design-v9), [Back-End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis-v9), dan [Python for Everybody](https://www.freecodecamp.org/news/python-for-everybody/).
- [Figma: prototyping](https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma), [Microsoft Learn: cloud computing](https://learn.microsoft.com/en-us/training/modules/describe-cloud-compute/), dan [Cisco: Introduction to Cybersecurity](https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US).
- Rujukan lain pada aplikasi: [React](https://react.dev/learn), [Node.js](https://nodejs.org/en/learn), [Python](https://docs.python.org/3/tutorial/), [PostgreSQL](https://www.postgresql.org/docs/current/tutorial.html), [GitHub Skills](https://skills.github.com/), [Docker](https://docs.docker.com/get-started/), [OWASP](https://owasp.org/www-project-top-ten/), dan [pandas](https://pandas.pydata.org/docs/getting_started/index.html).
