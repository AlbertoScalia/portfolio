/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF", // Light background
                accent: "#FF6B00", // Custom accent color
                light: "#FFFFFF", // Map text-light to new dark color
                blue: "#1a1f36", // Everything blue must be dark blue
            },
fontFamily: {
    // Il nome deve corrispondere a quello del pacchetto Fontsource
    sans: ['Geist Sans', 'Inter', 'sans-serif'],
    mono: ['Geist Mono', 'monospace'],
    display: ['Geist Sans', 'sans-serif'],
},
        },
    },
    plugins: [],
}
