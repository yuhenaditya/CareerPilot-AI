# CareerPilot AI

Prototype web statis dari tim **Pathwise** untuk membantu pengguna menyusun arah belajar IT. Dibuat dengan HTML, CSS, dan JavaScript. Versi ini sudah memuat perbaikan tampilan HP pada menu navigasi, foto beranda, dan tombol roadmap.

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
- `app.js` — data contoh, navigasi, dan interaksi aplikasi.
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

## Alur demo

1. Klik **Susun roadmap saya**.
2. Pilih **Upload CV demo** untuk memakai profil fiktif Raka Pratama, atau isi profil manual.
3. Setujui pemakaian data lokal lalu pilih tujuan belajar.
4. Buat roadmap, lihat sumber materi, simpan bookmark, atau unduh roadmap sebagai teks.
5. Aktifkan **Paket demo Plus** untuk mencoba checklist, target mingguan, evaluasi ulang, riwayat roadmap, dan laporan progres.
6. Ubah profil atau hapus data melalui **Profil & paket**.

Tersedia enam jalur: Frontend Developer, Backend Developer, Data Analyst, UI/UX Designer, Cloud & DevOps, dan Cybersecurity. Free dan Plus memiliki tabel perbandingan 15 fitur di aplikasi.

## Cara kerja prototype

- Upload CV merupakan simulasi. Tidak ada file pribadi yang dibaca atau dikirim.
- Roadmap memakai data dan aturan contoh, tanpa koneksi ke model AI.
- Aktivasi Plus merupakan simulasi tanpa pembayaran atau akun pengguna.
- Profil, bookmark, dan progres disimpan melalui `localStorage` di browser masing-masing. Data tidak tersinkron antarperangkat.
- Materi yang dikonfigurasi saat ini dapat diakses gratis; paket Plus menambah fitur pendamping belajar di aplikasi.
- Foto disertakan sebagai aset lokal. Font Manrope dimuat dari Google Fonts, dengan Arial/sans-serif sebagai cadangan. Tautan materi memerlukan koneksi internet.

## Sumber visual dan materi

- Referensi visual: [Edurock Education Landing Page Design](https://dribbble.com/shots/24197700-Edurock-Education-Landing-Page-Design) oleh Shorab Hossen.
- [Foto portrait dari Unsplash](https://images.unsplash.com/photo-1544717305-2782549b5136).
- [Foto belajar dari Unsplash](https://images.unsplash.com/photo-1434030216411-0b793f4b4173).
- Font: [Manrope di Google Fonts](https://fonts.google.com/specimen/Manrope).
- Materi ditautkan ke MDN, React, Node.js, Python, PostgreSQL, GitHub Skills, Figma Help Center, Microsoft Learn, Docker Docs, OWASP, dan pandas. Penyedia materi tersebut bukan mitra resmi CareerPilot AI.
