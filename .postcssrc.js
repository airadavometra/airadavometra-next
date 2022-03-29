module.exports = {
  plugins: {
    "postcss-custom-properties": {
      importFrom: "./styles/theme.css",
      preserve: false,
    },
    "postcss-flexbugs-fixes": {},
    "postcss-nested-ancestors": {},
    "postcss-current-selector": {},
    "postcss-nested": {
      preserveEmpty: true,
    },
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
        grid: "autoplace",
      },
      stage: 3,
      features: {
        "custom-properties": true,
      },
    },
  },
};
