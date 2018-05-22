import { zIndex } from "../zIndex";

describe("z-index styles", () => {
  it("has auto value", () => {
    expect(zIndex.auto).toBe("auto");
  });

  it("has below value", () => {
    expect(zIndex.below).toBe(-1);
  });

  it("has default value", () => {
    expect(zIndex.default).toBe(1);
  });

  it("has popup value", () => {
    expect(zIndex.popup).toBe(4000);
  });

  it("has dialog value", () => {
    expect(zIndex.dialog).toBe(5000);
  });

  it("has dropdown value", () => {
    expect(zIndex.dropdown).toBe(6000);
  });

  it("has overlay value", () => {
    expect(zIndex.overlay).toBe(7000);
  });

  it("has menu value", () => {
    expect(zIndex.menu).toBe(8000);
  });

  it("has modal value", () => {
    expect(zIndex.modal).toBe(9000);
  });

  it("has toast value", () => {
    expect(zIndex.toast).toBe(10000);
  });
});
