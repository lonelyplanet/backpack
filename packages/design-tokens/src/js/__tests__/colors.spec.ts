import { colors, toRGB, toRGBA } from "../colors";

describe("color utilities", () => {
  it("has toRGB method", () => {
    expect(toRGB("#fff")).toBe("rgb(255, 255, 255)");
  });

  it("has toRGBA method", () => {
    expect(toRGBA("#fff", 0.5)).toBe("rgba(255, 255, 255, 0.5)");
  });
});

describe("background colors", () => {
  it("has primary background color", () => {
    expect(colors.bgPrimary).toBe("#fff");
  });

  it("has secondary background color", () => {
    expect(colors.bgSecondary).toBe("#f4fbfe");
  });

  it("has overlay background color", () => {
    expect(colors.bgOverlay).toBe("#000");
  });

  it("has dark background color", () => {
    expect(colors.bgDark).toBe("rgba(0, 0, 0, 0.96)");
  });
});

describe("link colors", () => {
  it("has primary link color", () => {
    expect(colors.linkPrimary).toBe("#297cbb");
  });

  it("has primary link hover color", () => {
    expect(colors.linkPrimaryHover).toBe("rgba(41, 124, 187, 0.7)");
  });
});

describe("border colors", () => {
  it("has primary border color", () => {
    expect(colors.borderPrimary).toBe("#e4e4e4");
  });
});

describe("text colors", () => {
  it("has primary text color", () => {
    expect(colors.textPrimary).toBe("#2c3643");
  });

  it("has secondary text color", () => {
    expect(colors.textSecondary).toBe("rgba(44, 54, 67, 0.7)");
  });

  it("has overlay text color", () => {
    expect(colors.textOverlay).toBe("#fff");
  });
});

describe("shadow colors", () => {
  it("has primary shadow color", () => {
    expect(colors.shadowPrimary).toBe("#000");
  });
});

describe("accent colors", () => {
  it("has blue accent color", () => {
    expect(colors.accentBlue).toBe("#88bde7");
  });

  it("has gray accent color", () => {
    expect(colors.accentGray).toBe("#b6c3ca");
  });

  it("has green accent color", () => {
    expect(colors.accentGreen).toBe("#16c98d");
  });

  it("has orange accent color", () => {
    expect(colors.accentOrange).toBe("#ff882e");
  });

  it("has pink accent color", () => {
    expect(colors.accentPink).toBe("#ff6e8d");
  });

  it("has purple accent color", () => {
    expect(colors.accentPurple).toBe("#9d69c9");
  });

  it("has red accent color", () => {
    expect(colors.accentRed).toBe("#da0909");
  });

  it("has yellow accent color", () => {
    expect(colors.accentYellow).toBe("#ffc83f");
  });
});

describe("ui colors", () => {
  it("has primary ui color", () => {
    expect(colors.uiGreen).toBe("#44db5e");
  });
});

describe("social colors", () => {
  it("has Facebook social color", () => {
    expect(colors.socialFacebook).toBe("#3a5999");
  });

  it("has Facebook Messenger social color", () => {
    expect(colors.socialFacebookMessenger).toBe("#1472fb");
  });

  it("has Pinterest social color", () => {
    expect(colors.socialPinterest).toBe("#cb2027");
  });

  it("has Google blue social color", () => {
    expect(colors.socialGoogleBlue).toBe("#557ebf");
  });

  it("has Google green social color", () => {
    expect(colors.socialGoogleGreen).toBe("#36a852");
  });

  it("has Google yellow social color", () => {
    expect(colors.socialGoogleYellow).toBe("#f9bc15");
  });

  it("has Google red social color", () => {
    expect(colors.socialGoogleRed).toBe("#ea4535");
  });

  it("has Reddit social color", () => {
    expect(colors.socialReddit).toBe("#fc4220");
  });

  it("has Twitter social color", () => {
    expect(colors.socialTwitter).toBe("#1da1f2");
  });

  it("has Whatsapp social color", () => {
    expect(colors.socialWhatsapp).toBe("#28eb76");
  });
});
