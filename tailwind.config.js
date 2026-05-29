/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f14',
        navy: '#192632',
        deep: '#0d2f50',
        accent: '#7096c3',
        smoke: '#f4f6f8',
        muted: '#b8c0cc',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
};
