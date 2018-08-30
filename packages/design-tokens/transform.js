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
    "fontSize/web",
    prop => prop.get("type") === "font-size" || prop.get("type") === "media-query",
    prop => (prop.get("value") / 16) + "em",
  );

  theo.registerValueTransform(
    "timing/web",
    prop => prop.get("type") === "timing",
    prop => prop.get("value") + "ms",
  );

  theo.registerTransform("web", ["color/hsl", "fontSize/web", "timing/web"]);
}
