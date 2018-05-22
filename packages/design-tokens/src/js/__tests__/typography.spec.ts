import { typography } from "../typography";

describe("font weights", () => {
  it("has light font weight", () => {
    expect(typography.fontWeightLight).toBe(300);
  });

  it("has regular font weight", () => {
    expect(typography.fontWeightRegular).toBe(500);
  });

  it("has medium font weight", () => {
    expect(typography.fontWeightMedium).toBe(600);
  });
});

describe("font sizes", () => {
  it("has super font size", () => {
    expect(typography.fontSizeSuper).toBe(88);
  });

  it("has heading 1 font size", () => {
    expect(typography.fontSizeHeading1).toBe(64);
  });

  it("has heading 2 font size", () => {
    expect(typography.fontSizeHeading2).toBe(48);
  });

  it("has heading 3 font size", () => {
    expect(typography.fontSizeHeading3).toBe(40);
  });

  it("has heading 4 font size", () => {
    expect(typography.fontSizeHeading4).toBe(32);
  });

  it("has heading 5 font size", () => {
    expect(typography.fontSizeHeading5).toBe(24);
  });

  it("has heading 6 font size", () => {
    expect(typography.fontSizeHeading6).toBe(20);
  });

  it("has heading 7 font size", () => {
    expect(typography.fontSizeHeading7).toBe(16);
  });

  it("has heading 8 font size", () => {
    expect(typography.fontSizeHeading8).toBe(11);
  });

  it("has body article font size", () => {
    expect(typography.fontSizeBodyArticle).toBe(20);
  });

  it("has body article small font size", () => {
    expect(typography.fontSizeBodyArticleSmall).toBe(16);
  });

  it("has body small font size", () => {
    expect(typography.fontSizeBodySmall).toBe(14);
  });

  it("has accent font size", () => {
    expect(typography.fontSizeAccent).toBe(16);
  });

  it("has uppercase font size", () => {
    expect(typography.fontSizeUppercase).toBe(11);
  });
});

describe("line heights", () => {
  it("has super line height", () => {
    expect(typography.lineHeightSuper).toBe(1.0909090909090908);
  });

  it("has heading 1 line height", () => {
    expect(typography.lineHeightHeading1).toBe(1.125);
  });

  it("has heading 2 line height", () => {
    expect(typography.lineHeightHeading2).toBe(1.1666666666666667);
  });

  it("has heading 3 line height", () => {
    expect(typography.lineHeightHeading3).toBe(1.2);
  });

  it("has heading 4 line height", () => {
    expect(typography.lineHeightHeading4).toBe(1.25);
  });

  it("has heading 5 line height", () => {
    expect(typography.lineHeightHeading5).toBe(1.3333333333333333);
  });

  it("has heading 6 line height", () => {
    expect(typography.lineHeightHeading6).toBe(1.4);
  });

  it("has heading 7 line height", () => {
    expect(typography.lineHeightHeading7).toBe(1.5);
  });

  it("has heading 8 line height", () => {
    expect(typography.lineHeightHeading8).toBe(1.4545454545454546);
  });

  it("has body article line height", () => {
    expect(typography.lineHeightBodyArticle).toBe(1.8);
  });

  it("has body article small line height", () => {
    expect(typography.lineHeightBodyArticleSmall).toBe(2);
  });

  it("has body small line height", () => {
    expect(typography.lineHeightBodySmall).toBe(1.4285714285714286);
  });

  it("has accent line height", () => {
    expect(typography.lineHeightAccent).toBe(1.5);
  });

  it("has uppercase line height", () => {
    expect(typography.lineHeightUppercase).toBe(1);
  });

  it("has reset line height", () => {
    expect(typography.lineHeightReset).toBe(1);
  });
});
