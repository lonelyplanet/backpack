import { benton, miller } from "../fonts";

describe("fonts", () => {
  it("has Benton Sans font stack", () => {
    expect(benton).toBe("\"Benton Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif");
  });

  it("has Miller Daily font stack", () => {
    expect(miller).toBe("\"Miller Daily\", Georgia, Times, \"Times New Roman\", serif");
  });
});
