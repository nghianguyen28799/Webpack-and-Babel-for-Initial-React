const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: "./src/index.js", // File đầu vào
  output: {
    // File đầu ra
    filename: "[name].[contenthash].js", // Tên file đầu ra
    path: path.resolve(__dirname, "../dist"), // Nơi chưa file đầu ra
    publicPath: "",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /.(css|scss|sass)$/,
      },
      {
        type: "asset",
        test: /.(png|svg|jpg|jpeg|gif)$/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = config;
