/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      backgroundImage: {
        'hero-desktop': "url('/images/desktop/image-hero.jpg')",
        'hero-mobile': "url('/images/mobile/image-hero.jpg')",
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}
