/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 20s ease-in-out infinite',
        'translate-x-10': 'translatex 20s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(648deg)' },
          '100%': { transform: 'rotate(-0deg)' },
        },
        translatex: {
          '0%': { transform: 'translate(0px)' },
          '50%': { transform: 'translate(360%)' },
          '100%': { transform: 'translate(0px)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin')],
}
