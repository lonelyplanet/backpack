# common-css

This package provides a common.css file that sets the global styles for a front-end application on lonelyplanet.com.

The stylesheet:
* uses `@font-face` to set custom web fonts Benton Sans and Miller Daily
* sets `box-sizing: border-box` to normalize the box model
* includes [normalize.css](normalize) and a custom reset to create a baseline across multiple browsers
* contains some global helper classes
* provides some default typographic styling
* includes print styles

#### Browser support

Last 3 versions and IE 11 via the [browserlist config][browserlist].

## Installation

```sh
npm install @lonelyplanet/common-css
```

## Usage

For now, the recommended way to use this package is to include it in a Webpack build.

```js
@import "@lonelyplanet/common-css/dist/common.css";
```

## Scripts

The only script you’ll need to run is `build`.

| Script | Description |
| ------ | ----------- |
| `start` | Runs the package in “development mode”; opens the preview HTML file and runs Webpack with the `--watch` flag to recompile as changes are made, however, the HTML must be manually refreshed after each change |
| `build` | Compiles the CSS file to the `dist` directory |
| `preview` | Compiles the CSS file and opens an HTML file where the styles can be previewed; this script is run as part of the `start` script |
| `stylelint` | Lints the CSS source files |
| `test` | Runs the `stylelint` script |
| `prepublishOnly` | Runs the `build` script _before_ the package is prepared and packed, _only_ on `npm publish` |
| `precommit` | Runs the `test` script before a commit is made |

## Dependencies

| Package | Description |
| ------- | ----------- |
| @lonelyplanet/design-tokens | This package contains the design tokens (styles) used across Lonely Planet’s digital products; it’s part of the Backpack monorepo. |
| @lonelyplanet/browserslist-config | This package contains information about Lonely Planet’s browser support for Autoprefixer. |
| normalize.css | Normalize.css makes browsers render all elements more consistently and in line with modern standards. It is used in place of a full CSS reset. |
| PostCSS | PostCSS is a tool for transforming styles with JS plugins. Plugins include `postcss-calc`, `postcss-custom-media`, `postcss-custom-properties` and `postcss-import`. The separate CLI tool for PostCSS is also installed. |
| Autoprefixer | Autoprefixer is a PostCSS plugin that parses CSS and adds vendor prefixes to CSS rules using values from the Can I Use website. |
| cssnano | cssnano is CSS minifier built on top of the PostCSS ecosystem. |
| Webpack | Webpack is a module bundler for the web. Loaders include `css-loader`, `extract-text-webpack-plugin`, `postcss-loader` and `style-loader`. The separate CLI tool for Webpack is also installed. |
| Stylelint | Stylelint is a linter tool for CSS files; it has been configured to use `stylelint-config-standard`. |
| pre-commit | pre-commit automatically installs pre-commit hooks which runs npm scripts before a commit is made. |

## Contributing

Please read the [contributing][contrib] document before writing any code.

## License

[MIT License][license]

[normalize]: https://github.com/necolas/normalize.css
[browserlist]: https://github.com/lonelyplanet/browserslist-config/blob/master/index.js
[contrib]: https://github.com/lonelyplanet/backpack/blob/master/packages/common-css/CONTRIBUTING.md
[license]: https://github.com/lonelyplanet/backpack/blob/master/packages/common-css/LICENSE
