module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ice_cream: {
          DEFAULT: "#DE6464",
          400: "#d69a9a",
          500: "#e07e7e",
          600: "#db4d4d",
          text: "#c9d1d9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
