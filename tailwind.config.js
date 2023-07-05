/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-comfy-blue': '#D1F4FF',
        'comfy-blue': '#2B748B',
        'light-comfy-purple': '#E4D1FF',
        'comfy-purple': '#6A4898',
        'dark-purple' : '#9747FF',
        'light-comfy-red': '#FFBEBE',
        'comfy-red': '#833838',
        'comfy-yellow' : '#FFE49F',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'blue-shadow' : '9px 9px 0px 1px rgba(43,116,139,1)',
        'light-blue-shadow' : '9px 9px 0px 1px rgba(209,244,255,1)',
        'purple-shadow' : '9px 9px 0px 1px rgba(106,72,152,1)',
        'light-purple-shadow' : '9px 9px 0px 1px rgba(228,209,255,1)',
        'purple-button-shadow' : '5px 5px 0px 1px rgba(106,72,152,1)',
        'red-shadow' : '9px 9px 0px 1px rgba(131,56,56,1)',
        'light-red-shadow' : '9px 9px 0px 1px rgba(255,190,190,1)',
        'yellow-background-shadow' : '26px 26px 0px 1px rgba(255,228,159,1)',
      },
      listStyleImage: {
        star: 'url("/star.svg")',
        hexagon: 'url("/hexagon.svg")',
        triangle: 'url("/triangle.svg")',
      }
    },
  },
  plugins: [],
}
