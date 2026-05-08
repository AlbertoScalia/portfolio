/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAFAFA", // Light background
                accent: "#FF6B00", // Custom accent color
                light: "#FAFAFA", // Map text-light to new dark color
                blue: "#1a1f36", // Everything blue must be dark blue
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
