// .storybook\preview.js

import { app } from '@storybook/vue3';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="padding: 20px;"><story /></div>',
  }),
];
