module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'solana-green': '#14F195'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}