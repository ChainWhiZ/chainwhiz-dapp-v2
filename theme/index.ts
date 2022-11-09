//define the base variables for the dapp
const colors = {
  neonGreen: '#d4ff1e',
  darkGrey: '#131313',
  darkBlue: '#292929',
  lightGrey: '#898989',
  white: '#ffffff',
  homeBackground: '#100C1A',
  blueFade: '#1E1C30',
  postInputBlack: '#0D0F12',
  postActionBlack: "rgba(138, 153, 168, 0.25)"
};

const breakpoints = {
  mobile: '800px',
  tab: '1200px',
  max: '2000px',
};

const fonts = {
  primaryFont: 'Poppins-Regular',
  secondaryFont: 'Cabinet Grotesk',
  primaryFontLight: 'Poppins-Light',
  primaryFontRegular: 'Poppins-Regular',
  primaryFontMedium: 'Poppins-Medium',
  primaryFontSemibold: 'Poppins-SemiBold',
  primaryFontBold: 'Poppins-Bold',
};

const meta = {
  fastTransitionSpeed: '200ms',
};

export const devices = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
};

const theme = {
  colors,
  breakpoints,
  fonts,
  meta,
  devices,
};

export default theme;
