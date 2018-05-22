import * as color from "color";
export var toRGB = function (c) { return color(c).rgb().string(); };
export var toRGBA = function (c, a) { return color(c).alpha(a).rgb().string(); };
export var bgPrimary = "#fff";
export var bgSecondary = "#f4fbfe";
export var bgOverlay = "#000";
export var bgDark = toRGBA("#000", 0.96);
export var linkPrimary = "#297cbb";
export var linkPrimaryHover = toRGBA(linkPrimary, 0.7);
export var borderPrimary = "#e4e4e4";
export var textPrimary = "#2c3643";
export var textSecondary = toRGBA(textPrimary, 0.7);
export var textOverlay = "#fff";
export var shadowPrimary = "#000";
export var accentBlue = "#88bde7";
export var accentGray = "#b6c3ca";
export var accentGreen = "#16c98d";
export var accentOrange = "#ff882e";
export var accentPink = "#ff6e8d";
export var accentPurple = "#9d69c9";
export var accentRed = "#da0909";
export var accentYellow = "#ffc83f";
export var uiGreen = "#44db5e";
export var socialFacebook = "#3a5999";
export var socialFacebookMessenger = "#1472fb";
export var socialPinterest = "#cb2027";
export var socialGoogleBlue = "#557ebf";
export var socialGoogleGreen = "#36a852";
export var socialGoogleYellow = "#f9bc15";
export var socialGoogleRed = "#ea4535";
export var socialReddit = "#fc4220";
export var socialTwitter = "#1da1f2";
export var socialWhatsapp = "#28eb76";
export var colors = {
    bgPrimary: bgPrimary,
    bgSecondary: bgSecondary,
    bgOverlay: bgOverlay,
    bgDark: bgDark,
    linkPrimary: linkPrimary,
    linkPrimaryHover: linkPrimaryHover,
    borderPrimary: borderPrimary,
    textPrimary: textPrimary,
    textSecondary: textSecondary,
    textOverlay: textOverlay,
    shadowPrimary: shadowPrimary,
    accentBlue: accentBlue,
    accentGray: accentGray,
    accentGreen: accentGreen,
    accentOrange: accentOrange,
    accentPink: accentPink,
    accentPurple: accentPurple,
    accentRed: accentRed,
    accentYellow: accentYellow,
    uiGreen: uiGreen,
    socialFacebook: socialFacebook,
    socialFacebookMessenger: socialFacebookMessenger,
    socialGoogleBlue: socialGoogleBlue,
    socialGoogleGreen: socialGoogleGreen,
    socialGoogleYellow: socialGoogleYellow,
    socialGoogleRed: socialGoogleRed,
    socialPinterest: socialPinterest,
    socialReddit: socialReddit,
    socialTwitter: socialTwitter,
    socialWhatsapp: socialWhatsapp,
};
