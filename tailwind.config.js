const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        iconsPlugin({
            // Select the icon collections you want to use
            collections: getIconCollections(["mdi", "uil"]),
        }),

       require("@tailwindcss/nesting")
    ],
}
