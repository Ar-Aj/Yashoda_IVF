/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#FF69B4',
          600: '#FF1493',
          100: '#FFF0F7',
          200: '#FFB6D9',
        },
        orange: {
          600: '#FF6347',
        },
        blue: {
          900: '#1E3A8A',
          600: '#2563eb',
        },
        'instagram-start': '#E4405F',
        'instagram-end': '#FCAF45',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}