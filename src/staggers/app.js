/**
 * Animasi Berurutan pada Banyak Elemen dengan GSAP Staggers.
 * Opsi `stagger` memberi jeda bertahap saat satu tween menargetkan banyak
 * elemen sekaligus:
 * - `amount`: total waktu (detik) yang dibagi rata untuk seluruh stagger.
 * - `each`: jeda waktu (detik) antar masing-masing elemen (alternatif `amount`).
 * - `from`: titik awal urutan stagger (index angka, `"center"`, `"edges"`, `"end"`, atau `"random"`).
 */
import gsap from "gsap"

/**
 * Menetapkan bentuk awal seluruh `.box` menjadi persegi (`borderRadius: 0`)
 * sebelum animasi bergelombang dimulai.
 */
gsap.set(".box", { borderRadius: 0 })

/**
 * Menganimasikan seluruh `.box` ke atas sambil membulatkan sudutnya secara
 * berurutan dan berulang bolak-balik menggunakan konfigurasi `stagger`.
 */
gsap.to(".box", {
    borderRadius: 6,
    duration: 1,
    y: -100,
    ease: "expo.inOut",
    yoyo: true,
    repeat: -1,
    stagger: { amount: 2, from: 0 },
})
