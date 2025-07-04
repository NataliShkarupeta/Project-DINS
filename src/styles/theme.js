export const theme = {
  media: {
    xxl: '(min-width: 1141px)',
    xl: 'min-width: 961px',
    l: '(min-width: 721px)',
    m: '(min-width: 542px)',
    s: '(max-width: 541px)',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 388, 512, 634],
  fonts: {
    body: 'Raleway, sans-serif',
    forName: 'Noto Sans Duployan, sans-serif',
    monospace: 'Mukta, sans-serif',
    forBlog: 'Noto Sans Duployan',
    nameBtwBt: 'Dancing Script, cursive',
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 68, 72, 78, 116],
  fontWeights: {
    body: 300,
    middle: 400,
    middleOne: 500,
    heading: 700,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    normal: 1.22,
  },

  colors: {
    text: '#000000',
    background: '#fff4e4',
    therd: '#23033e',
    accent: '#d7e6da',
    primary: '#8c3b19',
    secondary: '#d6d0d9',
    muted: 'transparent',
    fourth: '#800080',
    forBut: '#000000',
    colForBg: 'transparent',
    forBSM: '#fff',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#d6d0d9',
        secondary: '#d6d0d9',
        muted: '#000',
        btEmail: '#d6d0d9',
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
    middle: '10px',
    round: '50%',
    forSlider: '30px',
  },
  zIndices: [0, 2, 3],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      bordCol: '#d6d0d9',
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  },
  transitions: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const themeSecond = {
  media: {
    xxl: '(min-width: 1141px)',
    xl: 'min-width: 961px',
    l: '(min-width: 721px)',
    m: '(min-width: 541px)',
    s: '(max-width: 540px)',
  },
  colors: {
    text: '#2c9241',
    background: 'black',
    accent: '',
    // primary: 'black',
    primary: '#8c3b19',
    therd: '#152313',
    forBut: '#d6d0d9',
    colForBg: '#d7e6da',
    muted: 'transparent',
    fourth: '#800080',
    forBSM: '#211e1e',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#d6d0d9',
        secondary: '#215711',
        muted: '#6c7784',
        btEmail: '#2c9241',
      },
      light: {
        text: '#d6d0d9',
        background: '#000',
      },
    },
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 388, 512, 634],
  fonts: {
    body: 'Raleway, sans-serif',
    forName: 'Noto Sans Duployan, sans-serif',
    monospace: 'Mukta, sans-serif',
    forBlog: 'Noto Sans Duployan',
    nameBtwBt: 'Dancing Script, cursive',
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 68, 72, 78, 106],
  fontWeights: {
    body: 300,
    middle: 400,
    middleOne: 500,
    heading: 700,
    bold: 600,
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
    middle: '10px',
    round: '50%',
    forSlider: '30px',
  },
  shadows: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  zIndices: [0, 2, 3],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      bordCol: 'grey',
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  },
  transitions: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};
