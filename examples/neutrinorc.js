module.exports = {
  use: [
    "@neutrinojs/airbnb",
    "@neutrinojs/jest",

    // Make sure this is last! This strongly depends on being placed last
    "speed-measure-webpack-v5-plugin/neutrino",
  ],
};
