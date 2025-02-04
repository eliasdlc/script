/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilitar dark mode mediante clases
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Mapeo de variables CSS
        'bg': 'var(--bg-color)',
        'accent': 'var(--accent)',
        'special-accent': 'var(--special-accent)',
        'lighter-accent': 'var(--lighter-accent)',
        'widgets-bg': 'var(--widgets-bg)',
        'special-widgets-bg': 'var(--special-widgets-bg)',
        'icon': 'var(--icon-color)',
        'special-icon': 'var(--special-icon-color)',
        'border': 'var(--border-color)',
        'tab-bg': 'var(--tab-bg)',
        'tab-active': 'var(--tab-active)',
        'tab-inactive': 'var(--tab-inactive)',
      },
      backgroundImage: {
        'extended-sidebar-bg': 'var(--extended-sidebar-bg)',
      },
      boxShadow: {
        'shadow': 'var(--shadow)',
        'hover-shadow': 'var(--hover-shadow)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar'),],
}

