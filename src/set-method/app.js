/**
 * Inisialisasi Properti Awal dengan `gsap.set()`.
 * `gsap.set()` bekerja seperti tween berdurasi 0 detik (*zero-duration tween*)
 * yang langsung menerapkan properti CSS atau transform ke elemen target.
 * Umum dipakai untuk menyiapkan kondisi awal elemen sebelum animasi dimulai.
 */
import gsap from "gsap"

/**
 * Menetapkan kondisi awal `.box` secara instan (tersembunyi, ukuran setengah,
 * dan berwarna kuning) sebelum tween dijalankan.
 */
gsap.set(".box", {
    opacity: 0,
    scale: 0.5,
    backgroundColor: "yellow",
})

/**
 * Menganimasikan `.box` dari state awal yang telah diatur `gsap.set()` menuju
 * kondisi terlihat penuh, membesar, berwarna crimson, dan bergerak bolak-balik.
 */
gsap.to(".box", {
    opacity: 1,
    scale: 1.2,
    backgroundColor: "crimson",
    duration: 2.5,
    y: 100,
    yoyo: true,
    repeat: -1,
    ease: "expo.inOut",
})
