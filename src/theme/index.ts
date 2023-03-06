import { palette } from './palette';
import { light, dark } from './colors';
import { staticColors } from './staticColors';
import { fonts } from './fonts';
import { sizes } from './sizes';
import { breakpoints } from './breakpoints';

const colors = localStorage.getItem('theme') === 'dark' ? dark : light;

const theme = {
  palette,
  colors,
  staticColors,
  fonts,
  sizes,
  breakpoints,
};

export default theme;
