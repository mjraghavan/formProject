import {Dimensions, Platform} from 'react-native';
import { wp } from '../utils/Dimensions';

export const {width, height} = Dimensions.get('window');

export const colors = {
  black: '#000000',
  white: '#ffffff',
  textColor: '#1D2022',
  secondaryTextColor: '#5E6468',
  primaryColor: '#2590EB',
  RoyalBlue: "#2563EB",
  primaryColorLight: '#000000',
  sepraterColor: '#CDD3F8',
  borderColor: '#DFE6EC',
  error: '#ED1B23',
  errorDark: '#7E1919',
  errorBG: '#FAE5E5',
  orange:"#EE8F00",
  blue: {
    b1: '#E8F5FF',
    b2: 'rgba(19, 111, 178, .5)',
    b3: '#072740',
    b4: '#0D4673',
    b5: '#BCD5E9',
    b6: '#F6FBFF',
    b7: '#D6E7F5',
    b8: '#EEF5FB',
    b9: '#23395d',
    b10: '#rgba(8, 48, 135, 1)',
  },
  dimBlue: '#F9FCFC',
  lightYellow: '#F8F3E7',
  lightGreen: '#E6F9F0',
  lightRed: '#FEE2E2',
  statusYellow: '#836824',
  statusGreen: '#1A6B44',
  statusRed: '#AF0808',
  select:'#EAEDF2',
  green: {
    g1: '#00EE3F',
    g2: '#1A6B44',
    g3: '#00C569',
  },
  yellow: {
    y1: '#F8F3E7',
    y2: '#836824',
  },
  grey: {
    g1: 'rgba(29, 32, 34, .5)',
    g2: 'rgba(0,0,0,0.2)',
    g3: '#707070',
    g4: '#8D949A',
    g5: '#ACB4BA',
    g6: '#565a5d',
    g7: '#E1E1E1',

  },
  red: {
    r1: '#D32232',
    r2: '#FEE2E2',
  },
  gradient: {
    gr1: ['#1273B8', '#C52A38CC'],
  },
};

export const fonts = {
  light: 'Satoshi-Light', // 300
  regular: 'Satoshi-Regular', // 400
  medium: 'Satoshi-Medium', // 500
  bold: 'Satoshi-Bold', // 700
  black: 'Satoshi-Black', // 800
  semi:'Inter-SemiBold',
};

export const fontSizes = {
  h1: {fontSize: width <= 320 ? wp(7.2) : wp(7.2)}, // 30 larger
  h2: {fontSize: width <= 320 ? wp(6.1) : wp(6.1)}, // 26 large
  h3: {fontSize: width <= 320 ? wp(5.7) : wp(5.7)}, // 24
  h4: {fontSize: width <= 320 ? wp(5.2) : wp(5.2)}, // 22
  h5: {fontSize: width <= 320 ? wp(4.7) : wp(4.7)}, // 20
  h6: {fontSize: width <= 320 ? wp(4.3) : wp(4.3)}, // 18
  h7: {fontSize: width <= 320 ? wp(3.8) : wp(3.8)}, // 16 medium
  h8: {fontSize: width <= 320 ? wp(3.3) : wp(3.3)}, // 14 regular
  h9: {fontSize: width <= 320 ? wp(2.8) : wp(2.8)}, // 13 or 12 small
  h10: {fontSize: width <= 320 ? wp(2.34) : wp(2.34)}, // 11 or 10 xsmall
};

export const typography = {
  light: {
    h1: {
      fontFamily: fonts.light,
      ...fontSizes.h1,
      color: colors.textColor,
    },
    h2: {
      fontFamily: fonts.light,
      ...fontSizes.h2,
      color: colors.textColor,
    },
    h3: {
      fontFamily: fonts.light,
      ...fontSizes.h3,
      color: colors.textColor,
    },
    h4: {
      fontFamily: fonts.light,
      ...fontSizes.h4,
      color: colors.textColor,
    },
    h5: {
      fontFamily: fonts.light,
      ...fontSizes.h5,
      color: colors.textColor,
    },
    h6: {
      fontFamily: fonts.light,
      ...fontSizes.h6,
      color: colors.textColor,
    },
    h7: {
      fontFamily: fonts.light,
      ...fontSizes.h7,
      color: colors.textColor,
    },
    h8: {
      fontFamily: fonts.light,
      ...fontSizes.h8,
      color: colors.textColor,
    },
    h9: {
      fontFamily: fonts.light,
      ...fontSizes.h9,
      color: colors.textColor,
    },
    h10: {
      fontFamily: fonts.light,
      ...fontSizes.h10,
      color: colors.textColor,
    },
  },
  regular: {
    h1: {
      fontFamily: fonts.regular,
      ...fontSizes.h1,
      color: colors.textColor,
    },
    h2: {
      fontFamily: fonts.regular,
      ...fontSizes.h2,
      color: colors.textColor,
    },
    h3: {
      fontFamily: fonts.regular,
      ...fontSizes.h3,
      color: colors.textColor,
    },
    h4: {
      fontFamily: fonts.regular,
      ...fontSizes.h4,
      color: colors.textColor,
    },
    h5: {
      fontFamily: fonts.regular,
      ...fontSizes.h5,
      color: colors.textColor,
    },
    h6: {
      fontFamily: fonts.regular,
      ...fontSizes.h6,
      color: colors.textColor,
    },
    h7: {
      fontFamily: fonts.regular,
      ...fontSizes.h7,
      color: colors.textColor,
    },
    h8: {
      fontFamily: fonts.regular,
      ...fontSizes.h8,
      color: colors.textColor,
    },
    h9: {
      fontFamily: fonts.regular,
      ...fontSizes.h9,
      color: colors.textColor,
    },
    h10: {
      fontFamily: fonts.regular,
      ...fontSizes.h10,
      color: colors.textColor,
    },
  },
  medium: {
    h1: {
      fontFamily: fonts.medium,
      ...fontSizes.h1,
      color: colors.textColor,
    },
    h2: {
      fontFamily: fonts.medium,
      ...fontSizes.h2,
      color: colors.textColor,
    },
    h3: {
      fontFamily: fonts.medium,
      ...fontSizes.h3,
      color: colors.textColor,
    },
    h4: {
      fontFamily: fonts.medium,
      ...fontSizes.h4,
      color: colors.textColor,
    },
    h5: {
      fontFamily: fonts.medium,
      ...fontSizes.h5,
      color: colors.textColor,
    },
    h6: {
      fontFamily: fonts.medium,
      ...fontSizes.h6,
      color: colors.textColor,
    },
    h7: {
      fontFamily: fonts.medium,
      ...fontSizes.h7,
      color: colors.textColor,
    },
    h8: {
      fontFamily: fonts.medium,
      ...fontSizes.h8,
      color: colors.textColor,
    },
    h9: {
      fontFamily: fonts.medium,
      ...fontSizes.h9,
      color: colors.textColor,
    },
    h10: {
      fontFamily: fonts.medium,
      ...fontSizes.h10,
      color: colors.textColor,
    },
  },
  semiMedium: {
    h1: {
      fontFamily: fonts.semi,
      ...fontSizes.h1,
      color: colors.textColor,
    },
    h2: {
      fontFamily: fonts.semi,
      ...fontSizes.h2,
      color: colors.textColor,
    },
    h3: {
      fontFamily: fonts.semi,
      ...fontSizes.h3,
      color: colors.textColor,
    },
    h4: {
      fontFamily: fonts.semi,
      ...fontSizes.h4,
      color: colors.textColor,
    },
    h5: {
      fontFamily: fonts.semi,
      ...fontSizes.h5,
      color: colors.textColor,
    },
    h6: {
      fontFamily: fonts.semi,
      ...fontSizes.h6,
      color: colors.textColor,
    },
    h7: {
      fontFamily: fonts.semi,
      ...fontSizes.h7,
      color: colors.textColor,
    },
    h8: {
      fontFamily: fonts.semi,
      ...fontSizes.h8,
      color: colors.textColor,
    },
    h9: {
      fontFamily: fonts.semi,
      ...fontSizes.h9,
      color: colors.textColor,
    },
    h10: {
      fontFamily: fonts.semi,
      ...fontSizes.h10,
      color: colors.textColor,
    },
  },
  bold: {
    h1: {
      fontFamily: fonts.bold,
      ...fontSizes.h1,
      color: colors.textColor,
    },
    h2: {
      fontFamily: fonts.bold,
      ...fontSizes.h2,
      color: colors.textColor,
    },
    h3: {
      fontFamily: fonts.bold,
      ...fontSizes.h3,
      color: colors.textColor,
    },
    h4: {
      fontFamily: fonts.bold,
      ...fontSizes.h4,
      color: colors.textColor,
    },
    h5: {
      fontFamily: fonts.bold,
      ...fontSizes.h5,
      color: colors.textColor,
    },
    h6: {
      fontFamily: fonts.bold,
      ...fontSizes.h6,
      color: colors.textColor,
    },
    h7: {
      fontFamily: fonts.bold,
      ...fontSizes.h7,
      color: colors.textColor,
    },
    h8: {
      fontFamily: fonts.bold,
      ...fontSizes.h8,
      color: colors.textColor,
      fontWeight: 700,
    },
    h9: {
      fontFamily: fonts.bold,
      ...fontSizes.h9,
      color: colors.textColor,
    },
    h10: {
      fontFamily: fonts.bold,
      ...fontSizes.h10,
      color: colors.textColor,
    },
  },
  black: {
    h1: {
      fontFamily: fonts.black,
      ...fontSizes.h1,
      color: colors.textColor,
    },
    h2: {
      fontFamily: fonts.black,
      ...fontSizes.h2,
      color: colors.textColor,
    },
    h3: {
      fontFamily: fonts.black,
      ...fontSizes.h3,
      color: colors.textColor,
    },
    h4: {
      fontFamily: fonts.black,
      ...fontSizes.h4,
      color: colors.textColor,
    },
    h5: {
      fontFamily: fonts.black,
      ...fontSizes.h5,
      color: colors.textColor,
    },
    h6: {
      fontFamily: fonts.black,
      ...fontSizes.h6,
      color: colors.textColor,
    },
    h7: {
      fontFamily: fonts.black,
      ...fontSizes.h7,
      color: colors.textColor,
    },
    h8: {
      fontFamily: fonts.black,
      ...fontSizes.h8,
      color: colors.textColor,
    },
    h9: {
      fontFamily: fonts.black,
      ...fontSizes.h9,
      color: colors.textColor,
    },
    h10: {
      fontFamily: fonts.black,
      ...fontSizes.h10,
      color: colors.textColor,
    },
  },
};

export const Custompadding = {
  // 32
  paddingXXLarge: {padding: wp('7.5')},
  paddingTopBottomXXLarge: {
    paddingTop: wp('7.5'),
    paddingBottom: wp('7.5'),
  },
  paddingLeftRightXXLarge: {
    paddingLeft: wp('7.5'),
    paddingRight: wp('7.5'),
  },
  paddingTopXXLarge: {
    paddingTop: wp('7.5'),
  },
  paddingBottomXXLarge: {
    paddingBottom: wp('7.5'),
  },
  paddingLeftXXLarge: {
    paddingLeft: wp('7.5'),
  },
  paddingRightXXLarge: {
    paddingRight: wp('7.5'),
  },
  // 24
  paddingXLarge: {padding: wp('5.7')},
  paddingTopBottomXLarge: {
    paddingTop: wp('5.7'),
    paddingBottom: wp('5.7'),
  },
  paddingLeftRightXLarge: {
    paddingLeft: wp('5.7'),
    paddingRight: wp('5.7'),
  },
  paddingTopXLarge: {
    paddingTop: wp('5.7'),
  },
  paddingBottomXLarge: {
    paddingBottom: wp('5.7'),
  },
  paddingLeftXLarge: {
    paddingLeft: wp('5.7'),
  },
  paddingRightXLarge: {
    paddingRight: wp('5.7'),
  },
  // 20
  paddingLarge: {padding: wp('4.67')},
  paddingTopBottomLarge: {
    paddingTop: wp('4.67'),
    paddingBottom: wp('4.67'),
  },
  paddingLeftRightLarge: {
    paddingLeft: wp('4.67'),
    paddingRight: wp('4.67'),
  },
  paddingBottomLarge: {
    paddingBottom: wp('4.67'),
  },
  paddingRightLarge: {
    paddingRight: wp('4.67'),
  },
  paddingLeftLarge: {
    paddingLeft: wp('4.67'),
  },
  paddingTopLarge: {
    paddingTop: wp('4.67'),
  },
  // 16
  paddingRegular: {padding: wp('3.8')},
  paddingLeftRightRegular: {
    paddingLeft: wp('3.8'),
    paddingRight: wp('3.8'),
  },
  paddingTopBottomRegular: {
    paddingTop: wp('3.8'),
    paddingBottom: wp('3.8'),
  },
  paddingTopRegular: {
    paddingTop: wp('3.8'),
  },
  paddingBottomRegular: {
    paddingBottom: wp('3.8'),
  },
  paddingLeftRegular: {
    paddingLeft: wp('3.8'),
  },
  paddingRightRegular: {
    paddingRight: wp('3.8'),
  },
  // 10
  paddingSmall: {padding: wp('2.34')},
  paddingLeftRightSmall: {
    paddingLeft: wp('2.34'),
    paddingRight: wp('2.34'),
  },
  paddingTopBottomSmall: {
    paddingTop: wp('2.34'),
    paddingBottom: wp('2.34'),
  },
  paddingTopSmall: {
    paddingTop: wp('2.34'),
  },
  paddingBottomSmall: {
    paddingBottom: wp('2.34'),
  },
  paddingLeftSmall: {
    paddingLeft: wp('2.34'),
  },
  paddingRightSmall: {
    paddingRight: wp('2.34'),
  },

  // 4
  paddingXSmall: {padding: wp('1')},
  paddingLeftRightXSmall: {
    paddingLeft: wp('1'),
    paddingRight: wp('1'),
  },
  paddingTopBottomXSmall: {
    paddingTop: wp('1'),
    paddingBottom: wp('1'),
  },
  paddingTopXSmall: {
    paddingTop: wp('1'),
  },
  paddingBottomXSmall: {
    paddingBottom: wp('1'),
  },
  paddingLeftXSmall: {
    paddingLeft: wp('1'),
  },
  paddingRightXSmall: {
    paddingRight: wp('1'),
  },
};
