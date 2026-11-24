/**
 * Konfigurasi Vite Multi-Page Application (MPA) untuk GSAP Web Animation Lab.
 * Mengaktifkan integrasi Tailwind CSS v4 melalui `@tailwindcss/vite` serta
 * mendaftarkan seluruh halaman HTML (halaman indeks dan tiap topik di `src/`)
 * sebagai entry point agar Vite mempaketkan aset secara terpisah dan rapi.
 */
import { resolve } from "node:path"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

/**
 * Konfigurasi utama Vite beserta daftar entry HTML untuk production build.
 */
export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rolldownOptions: {
            input: {
                main: resolve(import.meta.dirname, "index.html"),
                controllingTweens: resolve(
                    import.meta.dirname,
                    "src/controlling-tweens/index.html",
                ),
                fromAndFromTo: resolve(
                    import.meta.dirname,
                    "src/from-and-fromto/index.html",
                ),
                jsAnimation: resolve(import.meta.dirname, "src/js-animation/index.html"),
                setMethod: resolve(import.meta.dirname, "src/set-method/index.html"),
                simpleProject: resolve(import.meta.dirname, "src/simple-project/index.html"),
                staggers: resolve(import.meta.dirname, "src/staggers/index.html"),
                timelinesExampleOne: resolve(
                    import.meta.dirname,
                    "src/timelines/example-one/index.html",
                ),
                timelinesExampleTwo: resolve(
                    import.meta.dirname,
                    "src/timelines/example-two/index.html",
                ),
                tween: resolve(import.meta.dirname, "src/tween/index.html"),
            },
        },
    },
})
