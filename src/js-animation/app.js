/**
 * Fondasi Animasi Web Menggunakan CSS Transition & JavaScript.
 * Menunjukkan pendekatan dasar sebelum menggunakan GSAP: JavaScript cukup
 * menambah atau menghapus class CSS melalui `classList.toggle()`, sedangkan
 * proses transisi visualnya ditangani oleh utilitas transisi CSS/Tailwind.
 * Pola ini umum digunakan untuk interaksi state sederhana seperti sidebar/drawer.
 */

/**
 * Referensi elemen sidebar dan tombol pemicu toggle di DOM.
 */
const sidebar = document.querySelector(".sidebar")
const btn = document.querySelector("button")

/**
 * Mengubah visibilitas sidebar dengan menyisipkan atau melepas class `.hide`
 * setiap kali tombol diklik.
 */
btn.addEventListener("click", () => {
    sidebar.classList.toggle("hide")
})
