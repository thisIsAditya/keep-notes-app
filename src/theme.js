const { createTheme } = require('@mui/material');
const { convertPxToRem } = require('constants');

export const theme = mode =>
  createTheme({
    leftbar: '5vh',
    spacing: 4,
    shape: {
      borderRadius: 4,
    },
    palette: {
      type: 'light',
      primary: {
        main: '#9c27b0',
        light: '#d05ce3',
        dark: '#6a0080',
      },
      secondary: {
        main: '#f3e5f5',
        light: '#ffffff',
        dark: '#c0b3c2',
      },
    },
    typography: {
      primaryFont: 'DM Sans',
      secondaryFont: 'Manrope',
      h1: {
        fontSize: convertPxToRem(32),
        fontFamily: 'Manrope !important',
      },
      h2: {
        fontSize: convertPxToRem(22),
        fontFamily: 'Manrope !important',
        lineHeight: convertPxToRem(30),
      },
      h3: {
        fontSize: convertPxToRem(24),
        fontFamily: 'Manrope !important',
      },
      h4: {
        fontSize: convertPxToRem(22),
        fontFamily: 'Manrope !important',
        lineHeight: convertPxToRem(30),
      },
      h5: {
        fontSize: convertPxToRem(20),
        fontFamily: 'Manrope !important',
      },
      h6: {
        fontSize: convertPxToRem(18),
        fontFamily: 'Manrope !important',
      },
      editor: {
        fontSize: convertPxToRem(14),
        fontFamily: 'DM Sans',
        lineHeight: 2,
      },
      body1: {
        fontSize: convertPxToRem(12),
        fontFamily: 'DM Sans',
        lineHeight: convertPxToRem(16),
      },
      body2: {
        fontSize: convertPxToRem(10),
        fontFamily: 'DM Sans',
        lineHeight: convertPxToRem(13),
      },
      content: {
        fontSize: convertPxToRem(8),
        fontFamily: 'DM Sans',
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
      MuiTooltip: {
        arrow: true,
      },
    },
  });
