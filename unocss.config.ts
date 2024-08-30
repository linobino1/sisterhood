import { defineConfig, presetUno, presetWind } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetUno(),
    presetWind(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        josefin: {
          name: 'Josefin Sans',
          weights: [100, 200, 300, 400, 500, 600, 700],
        },
        serif: {
          name: 'Merriweather',
          weights: [400],
        },
      },
    }),
  ],
  theme: {
    colors: {
      contrast: '#E0331B',
      // version 1
      // bg: "#D3D9F1", // light blue
      // text: "#FF6424", // orange
      // version 2
      // bg: "#FFFFFF"
      // text: "#E0331B", // red
      // version 3
      // bg: "#01449D", // dark blue
      // text: "#F7D3C7", // light orange
      // version 4
      // bg: "#D3D9F1", // light blue
      // text: "#E0331B", // red
      gray: {
        50: '#EFF0F0',
        100: '#E0E0E1',
        200: '#C0C1C4',
        300: '#A1A2A6',
        400: '#84868B',
        500: '#65676B',
        600: '#525357',
        700: '#3B3D3F',
        800: '#28282A',
        900: '#141415',
        950: '#0A0A0A',
      },
      brown: {
        50: '#F8E7E7',
        100: '#F1CFCF',
        200: '#E4A0A0',
        300: '#D67070',
        400: '#CA4545',
        500: '#A32E2E',
        600: '#732121',
        700: '#431313',
        800: '#150606',
        900: '#0C0303',
        950: '#040101',
      },
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '22px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '5xl': '48px',
      '6xl': '64px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px',
    },
  },
})
