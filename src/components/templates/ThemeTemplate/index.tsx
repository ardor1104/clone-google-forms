import theme from 'theme/index';

import { ThemeProvider } from 'styled-components';

import { ChildrenPropType } from 'components/globalType';

export default function ThemeTemplate({
  children,
}: {
  children: ChildrenPropType;
}): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
