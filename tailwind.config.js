/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          yellow: '#FFD700',
          'yellow-dark': '#FFC700',
          'yellow-light': '#FFE44D',
          black: '#0A0A0A',
          'gray-dark': '#1A1A1A',
          'gray-medium': '#2A2A2A',
          'gray-light': '#3A3A3A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-solar': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      },
    },
  },
  plugins: [],
}
