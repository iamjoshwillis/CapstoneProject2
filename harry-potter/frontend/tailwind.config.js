/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
    
  },
  plugins: [require('@tailwindcss/forms')],
}

