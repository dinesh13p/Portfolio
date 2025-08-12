module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff3c3c',
          dark: '#e33636'
        },
        site: {
          dark: '#111111',
          mid: '#1f1f1f',
          light: '#f5f5f5'
        }
      }
    }
  },
  plugins: []
}