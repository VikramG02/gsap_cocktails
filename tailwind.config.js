export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "modern-negra": ["Modern Negra",'serif'],
        sans: ["Mona Sans", "sans-serif"],
        serif: ["DM Serif Text", "serif"],
      },
      colors: {
        yellow: {
          DEFAULT: '#e7d393',
          400: '#e7d393',
        },
        white: {
          DEFAULT: '#ffffff',
          100: '#efefef',
        },
      },
    },
  },
  plugins: []
};