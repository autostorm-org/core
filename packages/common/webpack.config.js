const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const TsDeclarationWebpackPlugin = require("ts-declaration-webpack-plugin");

module.exports = {
  entry: { bundle: "./src/index.ts" },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "url-loader",
        options: {
          limit: 8192,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  devtool: "source-map",
  target: "web",
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new StaticSiteGeneratorPlugin({
    //   globals: {
    //     window: {},
    //   },
    // }),
    new TsDeclarationWebpackPlugin({
      name: "bundle.d.ts", // Not required, '[name].d.ts' by default (to match output fileName)
    }),
  ],
  mode: "production",
};
