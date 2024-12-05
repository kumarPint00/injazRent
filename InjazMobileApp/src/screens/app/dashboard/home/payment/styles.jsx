// styles.js
import {StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';
import {textScale, moderateScale} from '../../../../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  titleCard: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(20),
    textAlign: 'left',
  },
  cardContainer: {
    height: moderateScale(167),
    borderWidth: moderateScale(0.5),
    marginTop: moderateScale(11),
    borderRadius: moderateScale(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.BLACK,
  },
  cardImageContainer: {
    width: moderateScale(80),
    height: moderateScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.BLACK,
    borderRadius: moderateScale(7),
  },
  cardImage: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  addCardText: {
    top: moderateScale(16),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(18),
    textAlign: 'left',
  },
  othersText: {
    marginTop: moderateScale(10),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(20),
    textAlign: 'left',
  },
  paymentSecuredText: {
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.BLACK,
    textAlign: 'left',
  },
  securedImagesContainer: {
    bottom: moderateScale(15),
    flexDirection: 'row',
  },
  securedImage: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  verticalLine: {
    height: '50%',
    borderWidth: moderateScale(0.3),
    borderColor: colors.DARK_GREY,
    top: moderateScale(15),
    marginStart: moderateScale(10),
  },
  termsRow: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
  },
  termsText: {
    color: colors.GREEN,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(10),
    textAlign: 'left',
  },
  footerContainer: {bottom: 0, position: 'absolute', width: '100%'},
  termsTextStyle: {
    color: colors.GREEN,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(10),
    textAlign: 'left',
  },
  textAndStyle: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(10),
    textAlign: 'left',
  },
  termsContainer: {flexDirection: 'row'},
  textTermCondStyle: {
    color: colors.GREEN,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(13),
    textAlign: 'left',
  },
  visaImageStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    top: moderateScale(5),
    marginStart: moderateScale(10),
  },
  appleImageStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    top: moderateScale(5),
    marginStart: moderateScale(10),
  },
  poweredContainer: {
    height: '50%',
    borderWidth: moderateScale(0.3),
    borderColor: colors.DARK_GREY,
    top: moderateScale(15),
    marginStart: moderateScale(10),
  },
  imageMasterStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    top: moderateScale(5),
  },
  imagePneStyle: {width: moderateScale(50), height: moderateScale(50)},
  imageContainer: {bottom: moderateScale(15), flexDirection: 'row'},
  titlePowered: {
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.BLACK,
  },
  containerPowered: {top: moderateScale(20), flexDirection: 'row'},
  imageRectStyle: {width: '100%', height: moderateScale(40)},
  addCardContainer: {
    height: moderateScale(167),
    borderWidth: moderateScale(0.5),
    marginTop: moderateScale(11),
    borderRadius: moderateScale(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.BLACK,
  },
  addCardImageContainer: {
    width: moderateScale(80),
    height: moderateScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.BLACK,
    borderRadius: moderateScale(7),
  },
  imageAtm: {width: moderateScale(40), height: moderateScale(40)},
  titleAddNewCard: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(18),
  },
  otherContainer: {marginTop: moderateScale(10)},
  titleOthers: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(20),
    textAlign: 'left',
  },
  containerRadio: {top: moderateScale(10), flexDirection: 'row'},
  containerRect: {marginTop: moderateScale(10)},
});

export default styles;
