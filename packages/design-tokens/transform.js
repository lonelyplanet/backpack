const theo = require("theo");
const Color = require("color");

module.exports = theo => {
  theo.registerValueTransform(
    "color/hsl",
    prop => prop.get("type") === "color",
    prop => {
      const color = Color(prop.get("value"));
      return color.hsl().string(0);
    },
  );

  theo.registerValueTransform(
    "emValue/web",
    prop => prop.get("type") === "font-size" || prop.get("type") === "media-query",
    prop => (prop.get("value") / 16) + "em",
  );

  theo.registerValueTransform(
    "pxValue/web",
    prop => prop.get("type") === "sizing",
    prop => prop.get("value") + "px",
  );

  theo.registerValueTransform(
    "timing/web",
    prop => prop.get("type") === "timing",
    prop => prop.get("value") + "ms",
  );

  theo.registerTransform("web", ["color/hsl", "emValue/web", "pxValue/web", "timing/web"]);
}
