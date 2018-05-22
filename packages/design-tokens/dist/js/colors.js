"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color = require("color");
exports.toRGB = function (c) { return color(c).rgb().string(); };
exports.toRGBA = function (c, a) { return color(c).alpha(a).rgb().string(); };
exports.bgPrimary = "#fff";
exports.bgSecondary = "#f4fbfe";
exports.bgOverlay = "#000";
exports.bgDark = exports.toRGBA("#000", 0.96);
exports.linkPrimary = "#297cbb";
exports.linkPrimaryHover = exports.toRGBA(exports.linkPrimary, 0.7);
exports.borderPrimary = "#e4e4e4";
exports.textPrimary = "#2c3643";
exports.textSecondary = exports.toRGBA(exports.textPrimary, 0.7);
exports.textOverlay = "#fff";
exports.shadowPrimary = "#000";
exports.accentBlue = "#88bde7";
exports.accentGray = "#b6c3ca";
exports.accentGreen = "#16c98d";
exports.accentOrange = "#ff882e";
exports.accentPink = "#ff6e8d";
exports.accentPurple = "#9d69c9";
exports.accentRed = "#da0909";
exports.accentYellow = "#ffc83f";
exports.uiGreen = "#44db5e";
exports.socialFacebook = "#3a5999";
exports.socialFacebookMessenger = "#1472fb";
exports.socialPinterest = "#cb2027";
exports.socialGoogleBlue = "#557ebf";
exports.socialGoogleGreen = "#36a852";
exports.socialGoogleYellow = "#f9bc15";
exports.socialGoogleRed = "#ea4535";
exports.socialReddit = "#fc4220";
exports.socialTwitter = "#1da1f2";
exports.socialWhatsapp = "#28eb76";
exports.colors = {
    bgPrimary: exports.bgPrimary,
    bgSecondary: exports.bgSecondary,
    bgOverlay: exports.bgOverlay,
    bgDark: exports.bgDark,
    linkPrimary: exports.linkPrimary,
    linkPrimaryHover: exports.linkPrimaryHover,
    borderPrimary: exports.borderPrimary,
    textPrimary: exports.textPrimary,
    textSecondary: exports.textSecondary,
    textOverlay: exports.textOverlay,
    shadowPrimary: exports.shadowPrimary,
    accentBlue: exports.accentBlue,
    accentGray: exports.accentGray,
    accentGreen: exports.accentGreen,
    accentOrange: exports.accentOrange,
    accentPink: exports.accentPink,
    accentPurple: exports.accentPurple,
    accentRed: exports.accentRed,
    accentYellow: exports.accentYellow,
    uiGreen: exports.uiGreen,
    socialFacebook: exports.socialFacebook,
    socialFacebookMessenger: exports.socialFacebookMessenger,
    socialGoogleBlue: exports.socialGoogleBlue,
    socialGoogleGreen: exports.socialGoogleGreen,
    socialGoogleYellow: exports.socialGoogleYellow,
    socialGoogleRed: exports.socialGoogleRed,
    socialPinterest: exports.socialPinterest,
    socialReddit: exports.socialReddit,
    socialTwitter: exports.socialTwitter,
    socialWhatsapp: exports.socialWhatsapp,
};
