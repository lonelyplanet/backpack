const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const calc = require("postcss-calc");
const map = require("postcss-map");
const styles = require("./dist/js");

const filename = "[name]";
const mode = "production";

const loaders = {
  css: {
    loader: "css-loader",
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        map({
          maps: [styles],
        }),
        calc(),
      ],
    },
  },
};

const output = (extension) => ({
  path: path.join(__dirname, "dist", extension),
  filename: `${filename}.${extension}`,
});

const resolve = {
  modules: ["node_modules"],
};

const moduleLoader = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: [loaders.css, loaders.postcss],
});

// const moduleExport = (extension) => ({
//   name: extension,
//   mode,
//   entry: {
//     index: `./src/${extension}/index.${extension}`,
//   },
//   output: {
//     path: path.join(__dirname, "dist", extension),
//     filename: `${filename}.${extension}`,
//   },
//   resolve,
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         loader: moduleLoader,
//       },
//     ],
//   },
//   plugins: [
//     new ExtractTextPlugin(`${filename}.${extension}`),
//   ],
// });

module.exports = [{
  name: "css",
  mode,
  entry: {
    index: "./src/css/index.css",
  },
  output: output("css"),
  resolve,
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: moduleLoader,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`${filename}.css`),
  ],
}, {
  name: "scss",
  mode,
  entry: {
    index: "./src/scss/index.scss",
  },
  output: output("scss"),
  resolve,
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: moduleLoader,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`${filename}.scss`),
  ],
}];
