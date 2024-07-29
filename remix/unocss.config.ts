import { defineConfig, presetUno, presetWind } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {
        josefin: {
          name: "Josefin Sans",
          weights: [100, 200, 300, 400, 500, 600, 700],
        },
      },
    }),
  ],
  theme: {
    colors: {
      brown: {
        50: "#F8E7E7",
        100: "#F1CFCF",
        200: "#E4A0A0",
        300: "#D67070",
        400: "#CA4545",
        500: "#A32E2E",
        600: "#732121",
        700: "#431313",
        800: "#150606",
        900: "#0C0303",
        950: "#040101",
      },
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px", "36px"],
      "4xl": ["36px", "40px"],
      "5xl": "48px",
      "6xl": "64px",
      "7xl": "72px",
      "8xl": "96px",
      "9xl": "128px",
    },
  },
});
