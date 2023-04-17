import { DefaultOverridesType } from 'components/globalType';

const overrideStyle = (overrides?: DefaultOverridesType) => {
  return overrides?.css
    ? {
        ...(typeof overrides.css === 'string'
          ? {
              cssStyle: overrides.css,
              ...overrides,
            }
          : {
              style: overrides.css,
              ...overrides,
            }),
      }
    : overrides;
};

export default overrideStyle;
