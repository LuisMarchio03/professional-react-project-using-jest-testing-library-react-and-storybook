const newViewports = {
  portraitSmall: {
    name: 'Portrait phone (default)',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  landscapeSmall: {
    name: 'Landscape phone',
    styles: {
      width: '640px',
      height: '360px',
    },
  },
  portraitMedium: {
    name: 'Portrait tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  landscapeMedium: {
    name: 'Landscape tablet',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  large: {
    name: 'Large desktop',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },

  extraLarge: {
    name: 'Extra large desktop',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: newViewports,
    defaultViewport: 'portraitSmall',
  },
}
