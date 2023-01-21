module.exports = {
  purge: {
    options: {
      safelist: [/data-theme$/],
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
