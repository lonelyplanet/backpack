import { styles } from "../";

describe("styles", () => {
  it("exports colors", () => {
    expect(styles).toHaveProperty("colors");
  });

  it("exports fonts", () => {
    expect(styles).toHaveProperty("fonts");
  });

  // it("exports media queries", () => {
  //   expect(styles).toHaveProperty("mq");
  // });

  it("exports timing styles", () => {
    expect(styles).toHaveProperty("timing");
  });

  // it("exports typography styles", () => {
  //   expect(styles).toHaveProperty("typography");
  // });

  it("exports z-index styles", () => {
    expect(styles).toHaveProperty("zIndex");
  });
});
