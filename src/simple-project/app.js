/**
 * Mini Project Halaman "Creatives".
 * Menggabungkan `gsap.timeline()`, `defaults`, dan `fromTo()` untuk
 * menganimasikan panel sidebar, gambar utama, serta blok teks secara berurutan
 * ketika halaman dimuat.
 */
import gsap from "gsap"

/**
 * Inisialisasi timeline utama dengan konfigurasi bawaan (`opacity: 0`,
 * `ease: "linear"`, dan `duration: 1`) yang berlaku untuk seluruh tween.
 */
const tl = gsap.timeline({
    defaults: {
        opacity: 0,
        ease: "linear",
        duration: 1,
    },
})

/**
 * Tahap 1: Melebarkan `.sidebar` dari lebar 0 hingga `30%` sekaligus
 * memunculkan opasitasnya.
 */
tl.fromTo(
    ".sidebar",
    { width: 0 },
    {
        opacity: 1,
        width: "30%",
    },
)

/**
 * Tahap 2: Memunculkan gambar utama (`.main-img`) secara bertahap.
 */
tl.fromTo(
    ".main-img",
    { x: 0 },
    {
        opacity: 1,
    },
)

/**
 * Tahap 3: Menggeser blok teks (`.content`) masuk dari kanan (`x: 100`)
 * menuju posisi normal (`x: 0`).
 */
tl.fromTo(
    ".content",
    { x: 100 },
    {
        opacity: 1,
        x: 0,
    },
)
