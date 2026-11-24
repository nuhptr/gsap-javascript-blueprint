/**
 * Perbandingan Method `gsap.from()` dan `gsap.fromTo()`.
 * - `gsap.from()` cocok untuk animasi masuk (entry animation) karena cukup
 *   menentukan nilai awal lalu bergerak menuju kondisi CSS alami elemen.
 * - `gsap.fromTo()` dipakai saat membutuhkan kontrol penuh atas state awal
 *   (`fromVars`) sekaligus state akhir (`toVars`) secara eksplisit.
 */
import gsap from "gsap"

/**
 * Animasi dengan `gsap.from()` pada `.box1`: bergerak dari posisi `y: -180`
 * dan `opacity: 0` menuju posisi serta opasitas alaminya di CSS.
 */
gsap.from(".box1", {
    y: -180,
    opacity: 0,
    duration: 3,
    ease: "elastic.out",
    repeat: -1,
    yoyo: true,
})

/**
 * Animasi dengan `gsap.fromTo()` pada `.box2`: mendefinisikan titik awal
 * (`y: 180`, `opacity: 0`) dan titik akhir (`y: -180`, `opacity: 1`, `borderRadius: 0`)
 * secara eksplisit dengan pengulangan bolak-balik.
 */
gsap.fromTo(
    ".box2",
    { y: 180, opacity: 0 },
    {
        opacity: 1,
        y: -180,
        duration: 2,
        ease: "expo.inOut",
        borderRadius: 0,
        repeat: -1,
        yoyo: true,
    },
)
