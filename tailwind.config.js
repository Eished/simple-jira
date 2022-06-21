/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-5': 'spin 10s ease-in-out infinite',
        'translate-x-10': 'translatex 10s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(-0deg)' },
        },
        translatex: {
          '0%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(200%)' },
          '100%': { transform: 'translate(0px)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin')],
}
