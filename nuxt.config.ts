export default defineNuxtConfig({
    /*
     ** Nuxt modules
     */
    modules: [
        "postcss-import",
        "@tailwindcss/nesting",
        "@nuxtjs/tailwindcss",
    ],
    vite: {
        css: {
            devSourcemap: true,
        },
    },
    css: [
        "@/assets/scss/main.scss",
    ],
    postcss: {
        plugins: {
            "postcss-import": {},
            "tailwindcss/nesting": {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
