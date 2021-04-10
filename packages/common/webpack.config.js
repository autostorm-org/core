const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const TsDeclarationWebpackPlugin = require("ts-declaration-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: {
    index: "./src/index.ts",
    "components/Button/index": "./src/components/Button/index.ts",
    "components/Themeing/index": "./src/components/Themeing/index.ts",
  },
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
          { loader: MiniCssExtractPlugin.loader },
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
    path: path.resolve("./lib"),
    filename: "[name].js",
    library: {
      name: "MyLibrary",

      type: "umd",
    }, // name is a placeholder here
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
    // new TsDeclarationWebpackPlugin({
    //   name: "index.d.ts", // Not required, '[name].d.ts' by default (to match output fileName)
    // }),
    new MiniCssExtractPlugin({}),
  ],
  mode: "development",
  optimization: {
    usedExports: true,
  },
  externals: {
    react: "react",
  },
};
