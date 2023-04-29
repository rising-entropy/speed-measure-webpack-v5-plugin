const SpeedMeasurePlugin = require("speed-measure-webpack-v5-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: {
    app: ["./app.js"],
  },
  output: "./public",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
});

// if you have plugins that you wish to exclude for reasons as it may fail your build or
// not allow some plugins to work normally (Eg: ReactRefreshPlugin), pass those in an optional array

/*
module.exports = smp.wrap({
  entry: {
    app: ["./app.js"]
  },
  output: "./public",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
}, ['ReactRefreshPlugin']);
*/
