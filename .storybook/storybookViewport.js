const customViewports = {
  myDesktop: {
    name: 'Desktop',
    styles: {
      width: '1800px',
      height: '800px',
    },
  },
  myTablet: {
    name: 'Tablet',
    styles: {
      width: '790px',
      height: '801px',
    },
  },
  myMobile: {
    name: 'Mobile',
    styles: {
      width: '454px',
      height: '801px',
    },
  },
};

const viewport = {
  viewports: customViewports,
  defaultViewport: 'Desktop',
};

export default viewport;
