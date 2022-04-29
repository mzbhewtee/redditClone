module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redditDark: {
          DEFAULT: '#000000',
          light: '#272728',
          lightt: '#1a1a1a',
        },
        redditborder:{
          DEFAULT: '#343536',
        },
        redditText: {
          DEFAULT: 'rgb(215, 218, 220)',
          darker: '#818384',
        },
      },
    },
  },
  plugins: [],
}
