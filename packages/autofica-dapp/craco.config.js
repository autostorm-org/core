const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: {
    alias: {},
    plugins: {
      add: [] /* An array of plugins */,
      remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
    configure: (webpackConfig, { env, paths }) => {
      console.log(JSON.stringify(webpackConfig.module.rules));
      webpackConfig.module.rules.push({
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      });
      webpackConfig.plugins.push(new MiniCssExtractPlugin({}));
      return webpackConfig;
    },
  },
};
