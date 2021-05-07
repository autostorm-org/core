const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const TsDeclarationWebpackPlugin = require("ts-declaration-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  // Entry points to the library
  entry: {
    // "components/Button/index": "./src/components/Button/index.ts",
    index: "./src/index.ts",
    "theme/day-theme": "./src/theme/day-theme.ts",
    "theme/night-theme": "./src/theme/night-theme.ts",
  },
  // Rules for library file types
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
      {
        test: /\.scss$/,
        exclude: /.*theme\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: {
                compileType: "module",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },

          "sass-loader",
        ],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /.*theme\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },

          "sass-loader",
        ],
        include: path.resolve(__dirname, "../"),
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
      name: "@autofica/components",
      type: "umd",
    },
  },
  // Devtool
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
  // Peer dependencies
  externals: {
    react: "react",
  },
};
