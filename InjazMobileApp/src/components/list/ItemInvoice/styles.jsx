import {StyleSheet, Platform} from 'react-native';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
import {moderateScale, textScale} from '../../../styles/responsiveSize';

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(4),
    margin: moderateScale(4),
    borderRadius: moderateScale(10),
    ...Platform.select({
      android: {
        elevation: Platform.OS === 'android' ? 3 : 0,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,

        backgroundColor: colors.WHITE,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: colors.WHITE,
      },
    }),
  },
  carText: {
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    fontSize: textScale(16),
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingText: {
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    fontSize: textScale(12),
  },
  typeText: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    fontSize: textScale(10),
    marginStart: moderateScale(10),
  },
  seaterText: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    fontSize: textScale(10),
    marginStart: moderateScale(10),
  },
  viewStyle: {
    alignItems: 'flex-end',
    right: moderateScale(58),
    bottom: moderateScale(3),
    justifyContent: 'space-between',
    width: moderateScale(200),
  },
  imageStyle: {
    width: moderateScale(130),
    height: moderateScale(50),
    right: moderateScale(130),
    top: moderateScale(30),
  },
  priceContainer: {
    backgroundColor: colors.BLACK,
    right: moderateScale(137),
    paddingHorizontal: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    top: moderateScale(8),
  },
  priceText: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.WHITE,
  },
  titleReturn: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    fontSize: textScale(10),
    textAlign: 'left',
  },
  titleCollect: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    fontSize: textScale(10),
    textAlign: 'left',
  },
  iconStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  containerStyle: {
    flexDirection: 'row',
    paddingVertical: moderateScale(4),
  },
  containerType: {
    flexDirection: 'row',
    marginTop: moderateScale(4),
  },
  containerRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default styles;
