module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily:{
         customfont :  "'Sacramento', cursive",   
      },  
      colors: {
        primary: '#ff1493',
        secondary: '#64748b',
        dark: '#0f172a',
        pinky: '#ff1493',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
};
