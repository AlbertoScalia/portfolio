/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F8F3EF", // Light background
                accent: "#FF6B00", // Custom accent color
                light: "#F8F3EF", // Map text-light to new dark color
                blue: "#2B4A9A", // Everything blue must be dark blue
            },
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  mono: ['monospace'],
  display: ['Inter', 'sans-serif'],
},
        },
    },
    plugins: [],
}
