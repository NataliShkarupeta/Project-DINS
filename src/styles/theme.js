

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
    heading: 1.125,
  },
  colors: {
    text: '#000000',
    background: '#fff',
    accent: '#FFE4B5',
    primary: '#8c3b19',
    // secondary: '#8c3b19',
    secondary: '#d6d0d9',
    muted: 'transparent',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '',
        secondary: '',
        muted: '',
      },
      light: {
        text: '',
        background: '',
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

export const themeSecond = {
  colors: {
    text: 'red',
    background: 'blue',
    accent: '#FFE4B5',
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
