# AGENTS.md

Baca [`docs/conventions.md`](./docs/conventions.md) untuk konvensi lengkap sebelum mengerjakan perubahan. File itu adalah sumber kebenaran dan boleh disalin ke project lain.

## Ringkasan wajib

- **Folder**: kebab-case natural, urut A–Z, tanpa prefiks angka (`01-`, `1.`, `1-`) di root, `src/`, maupun `reference/`.
- **Nama**: jangan pakai nama penulis/akun sumber; pakai "referensi kursus GSAP".
- **Struktur modul**: MPA vanilla. Tiap topik di `src/<topik>/` berisi `index.html` + `app.js` di level folder tersebut (bukan `src/components/`); halaman baru didaftarkan di `vite.config.js`.
- **CSS**: `src/styles/main.css` hanya `@import "tailwindcss"` + `@theme`; CSS kustom di `src/styles/` pakai `@layer` + `@apply`. Tailwind v4, tanpa `tailwind.config.js`.
- **Format**: 4 spasi, tanpa titik koma di JS; `readme.md` huruf kecil dan di-ignore Prettier.
- **Kode**: SOLID, HTML semantik, ARIA, JSDoc Indonesia + `@returns`. Markup berulang dalam satu halaman → fungsi lokal di file `app.js` yang sama.
- **Reference**: proyek sumber utuh di `reference/`, masing-masing punya `readme.md`; backend punya `.env.example`; `node_modules/` tidak disertakan.
- **Modern Web Guidance**: referensi praktik modern web untuk HTML/CSS/JS sisi klien ada di [`modern-web-guidance`](https://skills.sh/googlechrome/modern-web-guidance/modern-web-guidance). Pemakaian: `npx -y modern-web-guidance@latest search "<topik>"`, lalu `retrieve "<id>"`.
- **Verifikasi**: `npm run build` sebagai gate (Vite, 10 entry HTML). Tidak ada `typecheck`/`lint`/Expo di project ini.

## Perintah

```bash
npm install      # instal dependensi
npm run dev      # dev server + HMR (default http://localhost:5173)
npm run build    # build produksi ke dist/
npm run preview  # preview hasil build
```

## Commit & branch

- Commit: tipe sesuai isi, **tanpa scope** — `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `test:`, `chore:`. Wajib trailer `Co-authored-by: Gemini <gemini@google.com>`.
- Branch: prefiks sesuai tujuan — `feature/`, `hotfix/`, `fix/`, `docs/`, `chore/`, `release/<versi>`. Semua dari `main`.
- Alur: branch → commit → push → PR → merge setelah konfirmasi. Push hanya jika diminta. Branch merged tidak dihapus otomatis.
