/**
 * Kontrol Playback Tween GSAP (Controlling Tweens).
 * Mendemonstrasikan cara menyimpan instance tween ke dalam variabel agar jalannya
 * animasi dapat dikontrol secara programatik melalui method `play()`, `pause()`,
 * `reverse()`, dan `restart()` pada antarmuka UI interaktif.
 */
import gsap from "gsap"

/**
 * Referensi tombol kontrol playback pada DOM.
 */
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const reverse = document.querySelector(".reverse")
const restart = document.querySelector(".restart")

/**
 * Instance tween utama yang menggerakkan `.box1` ke atas dan mengubah warna
 * latar belakangnya; disimpan ke variabel `tween` untuk dikontrol lewat tombol.
 */
const tween = gsap.to(".box1", {
    y: -140,
    duration: 4,
    backgroundColor: "teal",
    paused: false,
})

/**
 * Menghubungkan setiap tombol kontrol ke method playback milik instance `tween`.
 */
play.addEventListener("click", () => tween.play())
pause.addEventListener("click", () => tween.pause())
reverse.addEventListener("click", () => tween.reverse())
restart.addEventListener("click", () => tween.restart())
