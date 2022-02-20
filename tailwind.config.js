module.exports = {
  mode: 'jit',
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Inter'],
      },
    },
  },
  plugins: [],
};
