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
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
