# design-tokens

This package contains the design tokens (styles) used across Lonely Planet’s digital products.

What are design tokens? The best answer is from the Salesforce Lightning Design System:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

[Theo][theo] is used to transform and format design tokens to meet the needs of any platform.

Design token files are written in [JSON5][json5] and conform to the following spec:

```json5
{
  // Required
  // A map of property names and value objects
  "props": {
    "color_brand": {
      // Required
      // Can be any valid JSON value
      "value": "#ff0000",

      // Required
      // Describe the type of value
      // [color|number|...]
      "type": "color",

      // Required
      // Describe the category of this property
      // Often used for style guide generation
      "category": "background",

      // Optional
      // This value will be included during transform
      // but excluded during formatting
      "meta": {
        // This value might be needed for some special transform
        "foo": "bar"
      }
    }
  },

  // Optional
  // Alternatively, you can define props as an array
  // Useful for maintaining source order in output tokens
  "props": [
    {
      // Required
      "name": "color_brand",

      // All other properties same as above
    }
  ],

  // Optional
  // This object will be merged into each property
  // Values defined on a property level will take precedence
  "global": {
    "category": "some-category",
    "meta": {
      "foo": "baz"
    }
  },

  // Optional
  // Share values across multiple props
  // Aliases are resolved like: {!sky}
  "aliases": {
    "sky": "blue",
    "grass": {
      "value": "green",
      "yourMetadata": "How grass looks"
    }
  },

  // Optional
  // Array of design token files to be imported
  // "aliases" will be imported as well
  // "aliases" will already be resolved
  // "global" will already be merged into each prop
  // Imports resolve according to the Node.js module resolution algorithm:
  // https://nodejs.org/api/modules.html#modules_all_together
  "imports": [
    // Absolute file path
    "/home/me/file.json",
    // Relative file path: resolves from the directory of the file where the import occurs
    "./some/dir/file.json",
    // Module path
    "some-node-module"
  ]
}
```

For more, please see the Theo [docs][theo-docs].

## Tokens

The design tokens are organized as such:

* **Colors** Color token names are declarative, meaning they describe the color rather than where or how the color is used. This allows us to be flexible when adding new colors and makes them easier to remember by using fewer tokens.
* **Font size** Font size values are written in pixels, but the `px` value is omitted. This is so that the values can be transformed as needed, e.g., `em` for web apps.
* **Font weight** Font weights are written as numeric keyword values for CSS.
* **Media queries** Media query values are written in pixels, but the `px` value is omitted. The values are transformed into `em` for web apps. Includes token values for both `min-` and `max-width` media queries, as well as predefined layout-specific media queries which should be used when building templates for web apps.
* **Timing** Timing values are written in milliseconds, but the `ms` value is omitted. For web apps, the values are transformed to include `ms`. Other platforms may transform or convert the values as needed. Timing values are used for animation durations.
* **Typefaces** Includes two primary font stacks for web apps; Benton Sans (sans-serif) and Miller Daily (serif); Benton Sans is set globally (for web apps), so there is no need to set it at the component level. Miller Daily is generally used for accent text.
* **z-index** z-index vales are used for layering elements on the z-axis for web apps.

## Usage

### Web apps

The following formats are supported for the web:

* CSS (custom properties)
* JavaScript (CommonJs, ES modules)
* SCSS (Sass)

#### CSS custom properties

All newer Node apps should be using CSS modules to define styles and therefore, CSS custom properties are recommended.

However, be aware that CSS custom properties aren’t supported in any version of Internet Explorer or Opera Mini, so provide fallbacks as necessary. One way this can be done is with [postcss-custom-properties][postcss-custom-properties].

View browser support at [Can I Use][can-i-use].

```css
div {
  color: var(--color-amethyst);
}
```

If your app as a build process, import the file from `@lonelyplanet/design-tokens/dist`. Otherwise, the file can be included from S3.

#### JavaScript

For legacy web apps built with Radium or other CSS-in-JS implementations, you have the option of using the design tokens as either a CommonJS module or an ES module.

```js
// ES module
import { colorAmethyst } from "@lonelyplanet/design-tokens/dist/tokens.module";
```

#### SCSS variables

SCSS usage is considered to be deprecated at this point meaning that no new web apps should be using Sass, but existing or legacy apps can use the design tokens by including `"@lonelyplanet/design-tokens/dist/tokens.scss"`.

```scss
div {
  color: $color-amethyst;
}
```

## Installation

### Web apps

```sh
$ npm install @lonelyplanet/design-tokens
```

## Scripts

The only script you’ll need to run is `build`.

| Script | Description |
| ------ | ----------- |
| `build` | Transforms design tokens into defined formats |
| `clean` | Deletes the `dist` directory |
| `prepublishOnly` | Runs the `build` script _before_ the package is prepared and packed, _only_ on `npm publish` |

## Dependencies

| Package | Description |
| ------- | ----------- |
| Theo | Theo is an abstraction for transforming and formatting design tokens. |
| color | color is a tool to convert and manipulate colors with CSS string support. |

## Contributing

Please read the [Contributing][contrib] document before writing any code.

## License

[MIT License][license]

[theo]: https://github.com/salesforce-ux/theo
[json5]: http://json5.org/
[theo-docs]: https://github.com/salesforce-ux/theo#design-tokens-
[postcss-custom-properties]: https://github.com/postcss/postcss-custom-properties
[can-i-use]: https://caniuse.com/#feat=css-variables
[contrib]: https://github.com/lonelyplanet/backpack/blob/master/packages/design-tokens/CONTRIBUTING.md
[license]: https://github.com/lonelyplanet/backpack/blob/master/packages/design-tokens/LICENSE
