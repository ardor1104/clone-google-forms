const path = require('path');

module.exports = {
  stories: ['../../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: any) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  features: {
    postcss: false,
  },
  webpackFinal: async (config: any) => {
    config.resolve.modules = [
      path.resolve(__dirname, '..'),
      'node_modules',
      'styles',
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../../src/components'),
      resources: path.resolve(__dirname, '../../src/resources'),
      theme: path.resolve(__dirname, '../../src/theme'),
      store: path.resolve(__dirname, '../../src/store'),
      redux: path.resolve(__dirname, '../../src/redux'),
      hooks: path.resolve(__dirname, '../../src/hooks'),
      utils: path.resolve(__dirname, '../../src/utils'),
    };
    return config;
  },
};
