const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  devtool: isDevelopment ? "inline-source-map" : undefined,
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Vue 2 Composition TSX Tailwind Starter",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
