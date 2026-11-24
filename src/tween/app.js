/**
 * Pengenalan Dasar GSAP Tween (`gsap.to()`).
 * Tween adalah satu unit perubahan animasi di GSAP dengan sintaks dasar
 * `gsap.method(target, varsObject)`.
 * Properti utama yang dicontohkan di sini:
 * - `duration`: lama animasi dalam detik.
 * - `y`: pergeseran vertikal (`translateY`) dalam piksel.
 * - `repeat`: jumlah pengulangan (`-1` untuk mengulang tanpa batas).
 * - `yoyo`: membalik arah animasi bolak-balik di setiap pengulangan.
 * - `ease`: kurva percepatan gerak animasi.
 */
import gsap from "gsap"

/**
 * Menganimasikan `.box` bergerak vertikal sejauh `120px` ke bawah secara
 * bolak-balik tanpa batas dengan kurva `power1.inOut`.
 */
gsap.to(".box", {
    duration: 2,
    y: 120,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
})
