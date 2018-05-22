import { timing } from "../timing";

describe("timing styles", () => {
  it("has fast value", () => {
    expect(timing.fast).toBe("200ms");
  });

  it("has default value", () => {
    expect(timing.default).toBe("400ms");
  });

  it("has slow value", () => {
    expect(timing.slow).toBe("800ms");
  });
});
