import {StyleSheet, ImageResizeMode} from 'react-native';
import {percentageHeight, percentageWidth} from '../services/utils/screen_size';
import {BLACK, GREY2, GREY3, PRIMARY, RED, SECONDARY, WHITE} from './colors';
import fontFamily from './fontFamily';

function percentageImage(
  w: string,
  h: string,
  resizeMode: ImageResizeMode = 'contain',
) {
  const result = StyleSheet.create({
    style: {
      width: `${w}%`,
      height: `${h}%`,
      resizeMode: resizeMode,
    },
  });
  return result;
}

const createdStyles = StyleSheet.create({
  transparentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  growContainer: {
    flexGrow: 1,
  },
  displayFlex: {
    flex: 1,
  },
  displayFlexGrow: {
    flexGrow: 1,
  },
  w100: {
    width: '100%',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyEven: {
    justifyContent: 'space-evenly',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    lineHeight: percentageHeight(5),
  },
  bodyText1: {
    fontSize: 14,
  },
  bodyText2: {
    fontSize: 16,
  },
  caption: {
    fontSize: 10.5,
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  horizontalDefaultPadding: {
    paddingHorizontal: percentageWidth(4),
  },
  verticalDefaultPadding: {
    paddingVertical: percentageWidth(3.2),
  },
  topDefaultPadding: {
    paddingTop: percentageHeight(2.7),
  },
  bottomDefaultPadding: {
    paddingBottom: percentageHeight(2.7),
  },
  subtitle: {
    fontSize: 12,
  },
  h5: {
    fontSize: 24,
  },
  h6: {
    fontSize: 18,
  },
  absolute: {
    position: 'absolute',
  },
  bottom: {
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
  },
  atBottom: {
    bottom: 0,
    left: 0,
  },
  useWhiteColor: {
    color: WHITE,
  },
  usePrimaryColor: {
    color: PRIMARY,
  },
  useGray2Color: {
    color: GREY2,
  },
  useGray3Color: {
    color: GREY3,
  },
  useGray3BgColor: {
    backgroundColor: GREY3,
  },
  usePrimaryBgColor: {
    backgroundColor: PRIMARY,
  },
  itemListImage: {
    width: percentageWidth(14.5),
    height: percentageWidth(14.5),
    resizeMode: 'contain',
  },
  itemListPaddingVertical: {
    paddingVertical: percentageHeight(1.6),
  },
  itemListContent: {
    width: '60%',
    paddingHorizontal: percentageWidth(4),
  },
  grayRoundedInputContainer: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    width: '100%',
  },
  txtError: {
    color: RED,
  },
  useBlueColor: {
    color: SECONDARY,
  },
  paddingTopLg: {
    paddingTop: percentageWidth(12.25),
  },
  floatingButton: {
    bottom: percentageWidth(12),
    position: 'absolute',
    left: percentageWidth(4.2),
    right: percentageWidth(4.2),
  },
});

const textStyles = {
  headingLight: StyleSheet.create({
    h1: {
      color: BLACK,
      fontFamily: fontFamily.light,
      fontSize: 26,
    },
    h2: {
      color: BLACK,
      fontFamily: fontFamily.light,
      fontSize: 20,
    },
    h3: {
      color: BLACK,
      fontFamily: fontFamily.light,
      fontSize: 16,
    },
  }),

  headingRegular: StyleSheet.create({
    h1: {
      color: BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 26,
    },
    h2: {
      color: BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 20,
    },
    h3: {
      color: BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 16,
    },
  }),

  headingBold: StyleSheet.create({
    h1: {
      color: BLACK,
      fontFamily: fontFamily.bold,
      fontWeight: 'bold',
      fontSize: 26,
    },
    h2: {
      color: BLACK,
      fontFamily: fontFamily.bold,
      fontWeight: 'bold',
      fontSize: 20,
    },
    h3: {
      color: BLACK,
      fontFamily: fontFamily.bold,
      fontWeight: 'bold',
      fontSize: 16,
    },
  }),

  headingMedium: StyleSheet.create({
    h1: {
      color: BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 26,
    },
    h2: {
      color: BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 20,
    },
    h3: {
      color: BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 16,
    },
  }),

  bodyLight: StyleSheet.create({
    body1: {
      color: BLACK,
      fontFamily: fontFamily.light,
      fontSize: 14,
    },
    body2: {
      color: BLACK,
      fontFamily: fontFamily.light,
      fontSize: 12,
    },
    body3: {
      color: BLACK,
      fontFamily: fontFamily.light,
      fontSize: 10,
    },
  }),

  bodyRegular: StyleSheet.create({
    body1: {
      color: BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 14,
    },
    body2: {
      color: BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 12,
    },
    body3: {
      color: BLACK,
      fontFamily: fontFamily.regular,
      fontSize: 10,
    },
  }),

  bodyMedium: StyleSheet.create({
    body1: {
      color: BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 14,
    },
    body2: {
      color: BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 12,
    },
    body3: {
      color: BLACK,
      fontFamily: fontFamily.medium,
      fontSize: 10,
    },
  }),
} as const;

const mergedStyles = {
  center: StyleSheet.flatten([
    createdStyles.justifyCenter,
    createdStyles.alignCenter,
  ]),
};
const globalStyles = {
  ...mergedStyles,
  ...createdStyles,
  ...textStyles,
  percentageImage,
} as const;

export default globalStyles;
