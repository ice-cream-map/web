module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ice_cream: {
          DEFAULT: '#DE6464',
          400: '#e37b74',
          500: '#e8594f',
          600: '#d94a4a'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
