const path = require("path")
const webpack = require("webpack")

const environment = process.env.NODE_ENV || "development"

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src", "index.js"),
    style: path.resolve(__dirname, "./src", "index.css"),
    worker: path.resolve(__dirname, "./workers", "worker.js"),
  },

  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].map",
    path: path.resolve(__dirname, "build"),
  },

  plugins:
    environment === "production"
      ? [new webpack.LoaderOptionsPlugin({ minimize: false, debug: false })]
      : [],

  module: {
    rules: [
      // Use the latest CSS with PostCSS.
      {
        test: /\.css$/,
        loaders: "file-loader?name=[name].[ext]!extract-loader!css-loader",
      },
      // Use the latest JavaScript with Babel.
      { test: /\.js$/, exclude: /(node_modules)/, loader: "babel-loader" },
    ],
  },
}
