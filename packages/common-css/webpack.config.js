const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const atImport = require("postcss-import");
const calc = require("postcss-calc");
const postcssCustomMedia = require("postcss-custom-media");
const postcssCustomProperties = require("postcss-custom-properties");
const cssnano = require("cssnano");

const isProduction = process.env.NODE_ENV === "production";
const filename = "[name]";

const postcssPlugins = [
  atImport(),
  postcssCustomProperties(),
  postcssCustomMedia(),
  calc(),
  autoprefixer(),
];

const loaders = {
  css: {
    loader: "css-loader",
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: () => isProduction ?
        postcssPlugins.concat(cssnano()) :
        postcssPlugins,
    },
  },
};

const resolve = {
  modules: ["node_modules"],
};

const moduleLoader = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: [loaders.css, loaders.postcss],
});

const plugins = [
  new ExtractTextPlugin(`${filename}.css`),
];

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    common: "./src/index.js",
  },
  output: {
    filename: `${filename}.css`,
    path: path.resolve(__dirname, isProduction ? "dist" : "tmp"),
  },
  resolve,
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: moduleLoader,
      },
    ],
  },
  plugins,
};
