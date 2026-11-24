/**
 * GSAP Timeline dengan Konfigurasi `defaults` (Example One).
 * `gsap.timeline()` mengurutkan beberapa tween secara otomatis tanpa perlu
 * menghitung `delay` manual pada setiap elemen, sedangkan `defaults` menetapkan
 * opsi bawaan (seperti `duration` dan `ease`) untuk seluruh tween di dalamnya.
 */
import gsap from "gsap"

/**
 * Membuat instance timeline dengan durasi default 1 detik dan easing
 * `power1.inOut` untuk semua langkah animasi berantai.
 */
const tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power1.inOut",
    },
})

/**
 * Rangkaian animasi 5 langkah:
 * 1. Mengecilkan dan menyembunyikan `.box1` setelah jeda awal 0.5 detik.
 * 2. Menggeser `.box2` ke kiri (`x: -200`).
 * 3. Menggeser `.box3` ke kiri sambil mengubah bentuk menjadi kotak dan berputar 360 derajat.
 * 4. Memindahkan `.box1` secara instan ke kanan (`x: 200`) menggunakan `.set()`.
 * 5. Memunculkan kembali `.box1` ke ukuran dan opasitas penuh.
 */
tl.to(".box1", {
    scale: 0,
    opacity: 0,
    delay: 0.5,
})
    .to(".box2", {
        x: -200,
    })
    .to(".box3", {
        x: -200,
        borderRadius: 0,
        rotate: 360,
    })
    .set(".box1", {
        x: 200,
    })
    .to(".box1", {
        scale: 1,
        opacity: 1,
    })
