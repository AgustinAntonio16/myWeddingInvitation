/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emeraldGreen: '#287233',
        ivoryWhite: '#FFFFF0',
        pastelYellow: '#FFF5B1',
        limeGreen: '#B8DDA6',
        lightBrown: '#C2A387',
      },
      fontFamily: {
        'GreatVibes': ['GreatVibes', 'cursive'],
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1) rotate(45deg)' },
          '50%': { transform: 'scale(1.1) rotate(45deg)' },
        },
      },
      animation: {
        beat: 'beat 1s infinite',
      },
      backgroundImage: {
        'portada': "url('')",
      },
    },
  },
  plugins: [],
}

