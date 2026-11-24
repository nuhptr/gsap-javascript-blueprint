/**
 * Sinkronisasi Urutan Timeline dan Position Parameter (Example Two).
 * Menggantikan perhitungan `delay` manual yang rentan berubah dengan
 * `gsap.timeline()`, serta menggunakan *position parameter* (seperti `"-=0.4"`
 * untuk tumpang tindih atau `"+=1"` untuk jeda tambahan) guna mengatur waktu mulai
 * tween secara presisi.
 */
import gsap from "gsap"

/**
 * Membuat timeline berurutan dengan durasi bawaan 1 detik untuk setiap tween.
 */
const tl = gsap.timeline({
    defaults: {
        duration: 1,
    },
})

/**
 * Menjalankan animasi judul dan tiga kotak secara berurutan; tween `.box1`
 * memakai position parameter `"-=0.4"` agar mulai 0.4 detik lebih awal sebelum
 * animasi judul (`h1`) selesai, lalu dilanjutkan oleh `.box2` dan `.box3`.
 */
tl.to("h1", {
    y: -60,
    color: "#ffffff",
})
    .to(
        ".box1",
        {
            x: -100,
            backgroundColor: "pink",
        },
        "-=0.4",
    )
    .to(".box2", {
        y: 100,
        backgroundColor: "purple",
    })
    .to(".box3", {
        x: 100,
        backgroundColor: "crimson",
    })
