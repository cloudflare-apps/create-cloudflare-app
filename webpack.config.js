const path = require("path")
const webpack = require("webpack")

const isDev = process.env.NODE_ENV !== "production"

module.exports = {
  mode: "development",
  devtool: "hidden-source-map",
  entry: {
    index: "./src/index.js",
    worker: "./workers/worker.js",
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].map",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new webpack.DefinePlugin({
      isDev,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          compact: false,
        },
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
          "extract-loader",
          "css-loader",
        ],
      },
    ],
  },
}
