/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
      },
      backgroundImage: {
        'cabecera': "url('./recursos/images/cabecera.jpg')",
        'banner': "url('./recursos/images/banner_contacto.jpg')",
      }
    },
  },
  plugins: [
    
  ],
}

