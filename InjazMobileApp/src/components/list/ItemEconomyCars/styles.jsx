import {Platform, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: moderateScale(240),
    height: Platform.OS === 'ios' ? moderateScale(358) : moderateScale(374),
    backgroundColor: colors.NAVY_BLUE,
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginStart: moderateScale(10),
    top: moderateScale(10),
    backgroundColor: colors.WHITE,
    width: moderateScale(70),
    borderRadius: moderateScale(10),
    padding: moderateScale(4),
  },
  ratingIcon: {
    width: moderateScale(15),
    height: moderateScale(15),
    marginStart: moderateScale(5),
  },
  ratingText: {
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    marginStart: moderateScale(4),
    fontSize: textScale(10),
  },
  carName: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(16),
    color: colors.WHITE,
    marginStart: moderateScale(10),
    marginTop: moderateScale(20),
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(8),
  },
  detailsText: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(12),
    color: colors.WHITE,
    marginStart: moderateScale(10),
  },
  carImage: {
    width: '90%',
    height: moderateScale(100),
    alignSelf: 'center',
    marginTop: moderateScale(30),
    overflow: 'hidden',
  },

  seeMoreButton: {
    width: moderateScale(150),
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    top: 13,
  },
  seeMoreText: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },

  containerHeader: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
  },
  title: {
    fontSize: textScale(18),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    right: moderateScale(10),
  },
  viewAllText: {
    fontSize: textScale(14),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontWeight: '300',
  },
  buttonViewContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  buttonContainer: {justifyContent: 'center', alignItems: 'center'},
  buttonTextStyle: {
    fontSize: textScale(10),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.POPPINS_BOLD,
  },
  buttonWhasAppText: {
    fontSize: textScale(10),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_BOLD,
  },
  buttonStyle: {
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCurrency: {
    top: moderateScale(10),
    color: colors.WHITE,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  buttonSeeMore: {
    marginTop: Platform.OS === 'ios' ? moderateScale(57) : moderateScale(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMonthContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: moderateScale(50),
  },

  whatsImage: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(10),
  },
  buttonWhasAppText: {
    fontSize: textScale(10),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_BOLD,
    textAlign: 'center',
    right: moderateScale(4),
  },
  titleHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
    alignItems: 'center',
    marginVertical:
      Platform.OS === 'ios' ? moderateScale(10) : moderateScale(5),
  },
  titleViewAll: {
    left: moderateScale(8),
  },
  bookNowButton: {
    width: moderateScale(100),
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookNowText: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  buttonWhatsApp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(100),
    height: moderateScale(24),
    backgroundColor: colors.GREEN,
    borderRadius: moderateScale(5),
  },
  titleDiscountedCurrency: {
    top: moderateScale(10),
    color: colors.WHITE,
  },
});

export default styles;
