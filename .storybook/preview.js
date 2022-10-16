import React from 'react';

import '../styles-utils/index.scss';
import viewport from './storybookViewport'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport,
}