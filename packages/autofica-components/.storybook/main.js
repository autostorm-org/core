// .storybook/main.js
const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/**/storybook.@(js|jsx|ts|tsx)",
    "../src/components/**/*.storybook.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-viewport", "@storybook/addon-knobs"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));
    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader],
    });

    config.module.rules.find(
      (rule) => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/;

    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
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
    });

    // Return the altered config
    return config;
  },
};
