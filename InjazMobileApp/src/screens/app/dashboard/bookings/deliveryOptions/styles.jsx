import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  image: {
    width: '100%',
    height: moderateScale(180),
  },
  headerImageContainer: {
    height: moderateScale(200),
    width: '100%',
    backgroundColor: colors.BLACK,
    flexDirection: 'row',
  },
  headerImage: {width: '100%', height: moderateScale(180)},
  heartImage: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  heartContainer: {
    width: '100%',
    right: moderateScale(20),
    width: '100%',
    bottom: moderateScale(220),
    alignItems: 'flex-end',
  },
  deliveryInfoContainer: {
    marginTop: moderateScale(20),
    height: moderateScale(47),
    backgroundColor: colors.BLACK,
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: colors.WHITE,
    right: moderateScale(5),
  },
  infoTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    top: Platform.OS == 'android' ? moderateScale(6) : 0,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(12),
    marginEnd: moderateScale(15),
    color: colors.WHITE,
  },
  infoSubText: {
    bottom: Platform.OS == 'android' ? moderateScale(-1) : 0,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(12),
    marginStart: moderateScale(2),
    color: colors.WHITE,
  },
  infoText2: {
    top: Platform.OS == 'android' ? moderateScale(6) : 0,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(12),
    marginStart: moderateScale(16),
    color: colors.WHITE,
  },
  infoSubText2: {
    bottom: Platform.OS == 'android' ? moderateScale(-2) : 0,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(12),
    marginStart: moderateScale(2),
    color: colors.WHITE,
  },
  separator: {
    height: 1,
    width: moderateScale(80),
    borderColor: colors.WHITE,
    borderWidth: moderateScale(0.3),
    marginTop: moderateScale(6),
    marginEnd: moderateScale(4),
  },
  editIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    tintColor: colors.WHITE,
    left: moderateScale(5),
  },
  hyundaiElantraContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  hyundaiText: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
  },
  elantraText: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.NAVY_BLUE,
    right: Platform.OS === 'android' ? moderateScale(20) : moderateScale(36),
  },
  totalText: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.NAVY_BLUE,
  },
  radioButtonContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: moderateScale(100),
  },
  bookingTitleContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  bookingTitle: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
  },
  paymentTitle: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
  },
  noPaymentTitle: {
    fontSize: textScale(13),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.NAVY_BLUE,
    flex: 1,
    marginStart: moderateScale(14),
    marginTop: moderateScale(8),
  },
  rightImage: {
    width: moderateScale(18),
    height: moderateScale(18),
    marginTop: moderateScale(10),
  },
  addCardTitle: {
    fontSize: textScale(13),
    fontFamily: fontFamily.POPPINS_REGULAR,
    marginTop: moderateScale(8),
    color: colors.BLUE,
  },
  input: {
    height: moderateScale(40),
    borderWidth: 0.3,
    borderColor: colors.GREY_LIGHT,
    paddingStart: moderateScale(20),
    width: '65%',
    borderRadius: moderateScale(5),
  },
  textStyle: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(11),
  },
  buttonStyle: {
    backgroundColor: colors.BLACK,
    width: moderateScale(100),
    height: moderateScale(40),
  },
  promoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(20),
  },
  paymentTitleContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  paymentCardContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerContainer: {bottom: -10, position: 'absolute', width: '100%'},

  atmImage: {width: moderateScale(30), height: moderateScale(30)},
});

export default styles;
