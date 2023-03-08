import 'styled-components';
import theme from 'theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    palette: (typeof theme)['palette'];
    colors: (typeof theme)['colors'];
    staticColors: (typeof theme)['staticColors'];
    fonts: (typeof theme)['fonts'];
    sizes: (typeof theme)['sizes'];
    breakpoints: (typeof theme)['breakpoints'];
  }
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
