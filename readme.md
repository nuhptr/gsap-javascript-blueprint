# GSAP Web Animation Lab

Kumpulan materi dan implementasi praktis animasi web menggunakan **Vite (Vanilla JavaScript)**, **Tailwind CSS v4 (`@tailwindcss/vite`)**, dan **GSAP (GreenSock Animation Platform)**. Repositori ini disusun sebagai *multi-page application* (MPA) untuk mempelajari fondasi animasi web—mulai dari transisi utilitas CSS & JavaScript dasar hingga orkestrasi animasi kompleks menggunakan *tween*, *stagger*, dan *timeline*.

---

## Daftar Materi

| Topik | Konsep Utama | Direktori |
| :--- | :--- | :--- |
| **Controlling Tweens** | Kontrol playback interaktif: `play()`, `pause()`, `reverse()`, `restart()` | [controlling-tweens](./src/controlling-tweens/) |
| **`from` & `fromTo`** | Perbandingan animasi dari state awal (`gsap.from`) dan state eksplisit (`gsap.fromTo`) | [from-and-fromto](./src/from-and-fromto/) |
| **JS Animation** | Transisi Tailwind CSS (`motion-safe:transition-transform`), manipulasi state dengan `classList.toggle()` | [js-animation](./src/js-animation/) |
| **Set Method (`gsap.set`)** | Inisialisasi properti elemen secara instan (*zero-duration tween*) | [set-method](./src/set-method/) |
| **Simple Project** | Mini landing page **Creatives** dengan koordinasi animasi layout & tipografi | [simple-project](./src/simple-project/) |
| **Staggers** | Animasi berurutan banyak elemen dengan `amount`, `each`, dan `from` | [staggers](./src/staggers/) |
| **Timelines** | Sequencing animasi, konfigurasi `defaults`, serta *position parameter* | [timelines](./src/timelines/) |
| **Tween (`gsap.to`)** | Dasar tween, `duration`, transformasi koordinat, `repeat`, `yoyo`, `ease` | [tween](./src/tween/) |

---

## Struktur Direktori

```text
gsap/
├── .gitignore                  # Daftar file/folder yang diabaikan Git
├── package.json                # Dependensi & skrip npm (Vite, Tailwind CSS, GSAP)
├── vite.config.js              # Konfigurasi Vite MPA & plugin @tailwindcss/vite
├── index.html                  # Halaman indeks navigasi seluruh contoh
├── readme.md                   # Dokumentasi utama
├── AGENTS.md                   # Panduan & konvensi untuk agen/pengembang
├── docs/
│   └── conventions.md          # Konvensi lengkap (sumber kebenaran)
└── src/
    ├── controlling-tweens/     # Kontrol playback tween via UI button
    ├── from-and-fromto/        # Perbandingan gsap.from() dan gsap.fromTo()
    ├── js-animation/           # Fondasi transisi CSS + event listener JS
    ├── set-method/             # Setup state awal dengan gsap.set()
    ├── simple-project/         # Implementasi hero & editorial layout dengan timeline
    ├── staggers/               # Pengaturan jeda berurutan antar elemen
    ├── styles/
    │   └── main.css            # Entry Tailwind CSS v4 & konfigurasi @theme (font & warna)
    ├── timelines/
    │   ├── example-one/        # Chaining .to() dan .set() dengan defaults
    │   └── example-two/        # Sinkronisasi urutan dengan position parameter
    └── tween/                  # Pengenalan gsap.to()
```

Setiap folder topik di dalam `src/` memiliki entry `index.html` dan `app.js` (*ES module*) yang terhubung ke stylesheet bersama [src/styles/main.css](./src/styles/main.css).

---

## Cara Menjalankan

### 1. Instalasi Dependensi

Jalankan perintah berikut dari root folder `gsap`:

```bash
npm install
```

### 2. Development Server

Menjalankan server Vite lokal dengan *Hot Module Replacement (HMR)*:

```bash
npm run dev
```

Buka URL lokal yang ditampilkan di terminal (umumnya `http://localhost:5173`) untuk mengakses halaman indeks beserta seluruh topik.

> **Catatan penting:** Proyek ini memakai Tailwind CSS v4 yang di-compile oleh plugin `@tailwindcss/vite`. Selalu akses halaman melalui dev server Vite. Membuka `index.html` langsung lewat `file://` atau Live Server statis akan membuat class Tailwind tampak "tidak terpasang" karena CSS-nya tidak diproses oleh Vite. Tailwind v4 juga tidak memakai `tailwind.config.js` — konfigurasi warna/font ada di blok `@theme` pada [`src/styles/main.css`](./src/styles/main.css).

### 3. Production Build & Preview

Untuk mempaketkan seluruh halaman ke direktori `dist/` dan mengujinya secara lokal:

```bash
npm run build
npm run preview
```

---

## Referensi & Panduan Agen

- [AGENTS.md](./AGENTS.md) — konvensi, perintah, dan aturan penting saat mengubah kode di repositori ini.
- [docs/conventions.md](./docs/conventions.md) — konvensi lengkap repository: penamaan folder, struktur modul, CSS, gaya kode, verifikasi, serta aturan commit/branch.
- Proyek referensi terkait: [nuhptr/react-forge](https://github.com/nuhptr/react-forge).

---

## Ringkasan API GSAP yang Dipelajari

- **`gsap.to(target, vars)`** — Menganimasikan elemen dari nilai CSS saat ini menuju nilai tujuan.
- **`gsap.from(target, vars)`** — Menganimasikan elemen dari nilai awal yang ditentukan menuju nilai CSS saat ini.
- **`gsap.fromTo(target, fromVars, toVars)`** — Menentukan kondisi awal dan akhir secara eksplisit untuk kontrol penuh.
- **`gsap.set(target, vars)`** — Menetapkan properti CSS/transform secara instan tanpa durasi sebelum animasi berjalan.
- **`gsap.timeline(vars)`** — Menggabungkan beberapa *tween* ke dalam satu alur waktu terstruktur tanpa ketergantungan pada `delay` manual.
- **Tween Controls** — Mengendalikan siklus animasi secara programatik dengan `.play()`, `.pause()`, `.reverse()`, dan `.restart()`.

---

## Prasyarat

- **Node.js** (v20+ direkomendasikan) beserta package manager (`npm`, `pnpm`, atau `bun`).
- Browser modern (Chrome, Safari, Firefox, atau Edge).
- Koneksi internet untuk memuat Google Fonts pada halaman `simple-project`.
