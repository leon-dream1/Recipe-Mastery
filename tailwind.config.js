/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url('./src/assets/images/banner1.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

