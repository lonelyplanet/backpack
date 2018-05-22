import * as color from "color";

export const toRGB = (c) => color(c).rgb().string();
export const toRGBA = (c, a) => color(c).alpha(a).rgb().string();

// Background colors
export const bgPrimary = "#fff";
export const bgSecondary = "#f4fbfe";
export const bgOverlay = "#000";
export const bgDark = toRGBA("#000", 0.96);

// Link colors
export const linkPrimary = "#297cbb";
export const linkPrimaryHover = toRGBA(linkPrimary, 0.7);

// Border colors
export const borderPrimary = "#e4e4e4";

// Text colors
export const textPrimary = "#2c3643";
export const textSecondary = toRGBA(textPrimary, 0.7);
export const textOverlay = "#fff";

// Shadow colors
export const shadowPrimary = "#000";

// Accent colors
export const accentBlue = "#88bde7";
export const accentGray = "#b6c3ca";
export const accentGreen = "#16c98d";
export const accentOrange = "#ff882e";
export const accentPink = "#ff6e8d";
export const accentPurple = "#9d69c9";
export const accentRed = "#da0909";
export const accentYellow = "#ffc83f";

// UI colors
export const uiGreen = "#44db5e";

// Social colors
export const socialFacebook = "#3a5999";
export const socialFacebookMessenger = "#1472fb";
export const socialPinterest = "#cb2027";
export const socialGoogleBlue = "#557ebf";
export const socialGoogleGreen = "#36a852";
export const socialGoogleYellow = "#f9bc15";
export const socialGoogleRed = "#ea4535";
export const socialReddit = "#fc4220";
export const socialTwitter = "#1da1f2";
export const socialWhatsapp = "#28eb76";

export const colors = {
  bgPrimary,
  bgSecondary,
  bgOverlay,
  bgDark,

  linkPrimary,
  linkPrimaryHover,

  borderPrimary,

  textPrimary,
  textSecondary,
  textOverlay,

  shadowPrimary,

  accentBlue,
  accentGray,
  accentGreen,
  accentOrange,
  accentPink,
  accentPurple,
  accentRed,
  accentYellow,

  uiGreen,

  socialFacebook,
  socialFacebookMessenger,
  socialGoogleBlue,
  socialGoogleGreen,
  socialGoogleYellow,
  socialGoogleRed,
  socialPinterest,
  socialReddit,
  socialTwitter,
  socialWhatsapp,
};
