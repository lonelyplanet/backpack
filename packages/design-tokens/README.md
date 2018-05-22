# backpack-design-tokens [![Build Status][ci-img]][ci]

This package contains the design tokens used across lonelyplanet.com. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. They are to be used in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

The design tokens are organized as such:

##### colors
Includes color values for backgrounds, text, borders, shadows, links, ui and accents. It also includes social network branding colors.

##### fonts
Includes two primary font stacks; Benton Sans (sans-serif) and Miller Daily (serif); Benton Sans is set globally, so there is no need to set it at the component level. Miller Daily is generally used for accent text.

##### media queries
Includes both min- and max-width media queries. Used to define break points for components and pages.

##### timing
Used for animation durations.

##### typography
Includes font weights (for Benton Sans only), font sizes and line heights.

##### z-index
Used for layering elements on the z-axis.

## Installation

```sh
$ npm install @lonelyplanet/backpack-design-tokens
```

## Usage

#### ES6 module

```js
import { styles } from "@lonelyplanet/backpack-design-tokens"; // everything at once, or
import { colors } from "@lonelyplanet/backpack-design-tokens"; // only what you need
```

#### CSS custom properties

Include `"@lonelyplanet/backpack-design-tokens/dist/css/index.css"` in your build.

```css
div {
  background-color: var(--color-bgPrimary);
}
```

#### SCSS variables

SCSS usage is considered to be deprecated at this point meaning that no new front-end apps should be using Sass, but existing or legacy apps can use the design tokens by importing the partial.

Include `"@lonelyplanet/backpack-design-tokens/dist/scss/index.scss"` in your build.

```scss
div {
  background-color: $color-bgPrimary;
}
```

## Contributing

Please read the [Contributing][contrib] document before writing any code.

## License

[MIT License][license]

[contrib]: https://github.com/lonelyplanet/backpack/packages/backpack-design-tokens/contributing.md
[license]: https://github.com/lonelyplanet/backpack/packages/backpack-design-tokens/license.md
[ci-img]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-styles.svg
[ci]: https://travis-ci.org/lonelyplanet/@lonelyplanet/backpack-styles
