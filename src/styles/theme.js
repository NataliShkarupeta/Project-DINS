export const theme = {
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Noto Serif, sans-serif',
    heading: 'Roboto , sans-serif',
    monospace: 'monospace',
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    normal: 1.25,
    heading: 1.125,
  },
  colors: {
    text: '#000000',
    background: '#fff4e4cc',
    // background: '#fff',
    // accent: '#FFE4B5',
    accent: '#d7e6da',
    primary: '#8c3b19',
    // secondary: '#8c3b19',
    secondary: '#d6d0d9',
    muted: 'transparent',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#d6d0d9',
        secondary: '#d6d0d9',
        muted: '',
      },
      light: {
        text: '#8c3b19',
        background: '#fff',
      },
    },
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: 'none',
    normal: '4px',
    round: '50%',
  },
  zIndices: [0, 2, 3],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  },
  transitions: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const themeSecond = {
  colors: {
    text: '#2c9241',
    background: 'black',
    accent: '',
    primary: 'black',
    secondary: '',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#d6d0d9',
        secondary: '#215711',
        muted: '',
      },
      light: {
        text: '#d6d0d9',
        background: '',
      },
    },
  },
  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Noto Serif, sans-serif',
    heading: 'Roboto, sans-serif',
    monospace: 'monospace',
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: 'none',
    normal: '4px',
    round: '50%',
  },
  shadows: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  zIndices: [0, 2, 3],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  },
  transitions: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};
