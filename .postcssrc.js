module.exports = {
  plugins: {
    "postcss-custom-properties": {
      importFrom: "./styles/globals.css",
      preserve: true,
    },
    "postcss-nested-ancestors": {},
    "postcss-nested": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": true,
      },
    },
  },
};
