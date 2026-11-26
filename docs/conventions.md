# Konvensi Proyek — GSAP Web Animation Lab

Dokumen ini adalah **sumber kebenaran** untuk konvensi repository. Baca sebelum mengerjakan perubahan. Isinya boleh disalin ke project lain dengan menyesuaikan bagian yang spesifik ke stack.

## Ringkasan wajib

- **Folder**: kebab-case natural, urut A–Z, tanpa prefiks angka (`01-`, `1.`, `1-`) di root, `src/`, `docs/`, maupun `reference/`.
- **Nama**: jangan pakai nama penulis/akun sumber; pakai "referensi kursus GSAP".
- **Struktur modul**: proyek ini MPA vanilla JavaScript. Setiap topik di `src/<topik>/` berisi `index.html` + `app.js` di level folder tersebut (bukan di `src/components/`). `index.html` di root adalah halaman indeks. Halaman baru wajib didaftarkan di `vite.config.js`.
- **CSS**: `src/styles/main.css` berisi `@import "tailwindcss"` dan blok `@theme`. CSS kustom di `src/styles/` memakai `@layer` + `@apply`. Tailwind v4 tanpa `tailwind.config.js`.
- **Format**: indentasi 4 spasi, tanpa titik koma di JavaScript; `readme.md` huruf kecil dan di-ignore Prettier melalui `.prettierignore`.
- **Kode**: SOLID, HTML semantik, atribut ARIA, JSDoc bahasa Indonesia dengan `@returns` untuk fungsi yang mengembalikan nilai. Potongan markup yang berulang dalam satu halaman dibuat sebagai fungsi lokal di file `app.js` yang sama.
- **Reference**: proyek sumber eksternal (bila ada) disimpan utuh di `reference/`, masing-masing dengan `readme.md`; backend menyertakan `.env.example`; `node_modules/` tidak disertakan.
- **Verifikasi**: `npm run build` sebagai gate utama. Project ini tidak punya `typecheck`, `lint`, atau Expo.
- **Commit & branch**: tipe commit tanpa scope, trailer wajib, branch dari `main`. Lihat detail di bawah.

## Detail konvensi

### Penamaan folder dan file

- Gunakan nama deskriptif berbahasa Inggris berformat kebab-case: `controlling-tweens/`, `from-and-fromto/`, `js-animation/`, `simple-project/`, `timelines/example-one/`.
- Urutkan folder secara A–Z di dalam induknya. Hindari prefiks nomor untuk mengubah urutan tampilan.
- Jangan menamai folder atau file setelah akun/penulis sumber materi. Gunakan label netral seperti "referensi kursus GSAP" pada dokumentasi.
- Nama file dokumentasi menggunakan huruf kecil: `readme.md`.

### Struktur halaman (MPA)

- Setiap topik adalah halaman mandiri: `src/<topik>/index.html` memuat `<link rel="stylesheet" href="/src/styles/main.css" />` dan `<script type="module" src="./app.js"></script>`.
- `app.js` adalah ES module dan diimpor dari paket npm, bukan CDN (mis. `import gsap from "gsap"`).
- `index.html` di root berisi indeks navigasi ke seluruh topik.
- Saat menambah topik, daftarkan entry HTML baru di `build.rolldownOptions.input` pada `vite.config.js` agar ikut ter-build.
- Simpan aset (gambar, font) di folder topik yang memakainya; gunakan path relatif yang dapat dipaketkan Vite.

### CSS dan Tailwind CSS v4

- `src/styles/main.css` adalah satu-satunya entry CSS: `@import "tailwindcss"` lalu blok `@theme` untuk variabel `--color-*` dan `--font-*`.
- Tambahan CSS kustom diletakkan di `src/styles/` dengan `@layer` dan `@apply`. Hindari CSS global di luar layer.
- Tailwind v4 tidak memakai `tailwind.config.js`; jangan menambahkan konfigurasi gaya v3.
- Warna/font baru didefinisikan sekali di `@theme`, lalu dipakai sebagai utilitas (`bg-accent`, `text-ink-muted`).
- Class yang dirakit secara dinamis di JavaScript tidak seluruhnya terdeteksi scanner. Tulis class lengkap sebagai literal atau daftarkan sumbernya dengan `@source`.

### Gaya kode

- Terapkan prinsip SOLID; pisahkan tanggung jawab antar modul.
- Gunakan elemen HTML semantik (`main`, `section`, `nav`, `button`) dan atribut ARIA yang sesuai untuk kontrol interaktif.
- JSDoc bahasa Indonesia pada fungsi dan blok penting; sertakan `@returns` bila fungsi mengembalikan nilai.
- Blok markup yang berulang di satu halaman dibuat sebagai fungsi lokal di file yang sama, bukan komponen baru di folder terpisah.
- Konsisten dengan kode yang ada: indentasi 4 spasi dan tanpa titik koma. `readme.md` sengaja dikecualikan dari Prettier.

### Proyek referensi

- Bila suatu contoh diambil dari sumber eksternal, simpan proyek sumbernya utuh di `reference/<nama-topik>/` dan sertakan `readme.md` di dalamnya.
- Jangan menyertakan `node_modules/`; cukup daftarkan dependensi di manifest.
- Backend (bila ada) wajib memiliki `.env.example` berisi daftar variabel lingkungan tanpa nilai rahasia.
- Gunakan label "referensi kursus GSAP", bukan nama akun sumber.

### Verifikasi

- Jalankan `npm run build` sebelum selesai — ini gate tipe dan paket untuk seluruh entry HTML.
- `npm run dev` untuk HMR saat mengembangkan; `npm run preview` untuk menguji hasil build.
- Tidak tersedia perintah `typecheck`, `lint`, atau Expo di repository ini; jangan menambahkan gate yang tidak ada.

## Commit & branch

- Commit: tipe sesuai isi, **tanpa scope** — `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `test:`, `chore:`. Wajib trailer `Co-authored-by: Gemini <gemini@google.com>`.
- Branch: prefiks sesuai tujuan — `feature/`, `hotfix/`, `docs/`, `chore/`, `release/<versi>`. Semua dibuat dari `main`.
- Alur: branch → commit → push → PR → merge setelah konfirmasi. Push hanya jika diminta. Branch yang sudah di-merge tidak dihapus otomatis.

> Catatan: riwayat lama masih memakai scope (mis. `style(timelines): ...`). Konvensi di atas berlaku untuk commit dan branch baru.
