module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'loginPage-BG' : "url('./pic/BigLogo.jpg')"
      },
      colors:{
        'grayHeader' : '#27272a',
        'lightRed' : '#ef4444',
        'hardRed' : '#991b1b',
        'goodGreen':'#16a34a',
      },
    },
  },
  plugins: [],
}