/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#f5f3f0", // Light background
                accent: "#FF6B00", // Custom accent color
                light: "#f5f3f0", // Map text-light to new dark color
                blue: "rgb(26, 31, 54)", // Everything blue must be dark blue
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                display: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
