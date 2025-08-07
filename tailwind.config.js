

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'bg-custom-teal': '#00CDDA',
        'bg-custom-orange': '#FF8412',
      },
      backgroundColor: {
        'white-opacity-26': 'rgba(255, 255, 255, 0.26)',
      },
      fontSize: {
        '2rem': '2rem',
        '4rem': '4rem', 
        '150': '150px',
        '2.5xl': '2.5rem',
        '1.5xl': '1.5rem',
      },
      maxWidth: {
        '47p': '47%',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
}