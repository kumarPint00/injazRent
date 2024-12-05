// styles.js

import {Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(450),
    backgroundColor: colors.NAVY_BLUE,
    borderRadius: moderateScale(20),
    marginVertical: moderateScale(10),
    width: '95%',
    justifyContent: 'center',
    marginStart: moderateScale(10),
  },
  ratingContainer: {
    flexDirection: 'row',
    marginStart: moderateScale(10),
    bottom: moderateScale(20),
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
    bottom: Platform.OS === 'ios' ? moderateScale(12) : moderateScale(10),
  },
  detailsContainer: {
    flexDirection: 'row',
    bottom: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(10),
  },
  detailsText: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(12),
    color: colors.WHITE,
    marginStart: moderateScale(10),
  },
  carImage: {
    width: '93%',
    height: moderateScale(200),
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: moderateScale(10),
    bottom: moderateScale(12),
  },
  pricingContainer: {
    top: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    marginStart: 12,
  },
  priceBox: {
    width: moderateScale(70),
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: textScale(10),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.POPPINS_BOLD,
  },
  seeMoreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? moderateScale(26) : moderateScale(20),
  },
  seeMoreTouchable: {
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    width: '64%',
    top: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(6),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: moderateScale(5),
    height: moderateScale(30),
  },
  seeMoreText: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },

  // Header Popular Cars
  containerHeader: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    paddingVertical: 100,
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
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    marginStart: 12,
    top: moderateScale(20),
  },

  priceViewStyle: {
    width: moderateScale(70),
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_BOLD,
  },

  priceTextStyle: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_BOLD,
  },

  dayViewStyle: {
    marginStart: 0,
    width: moderateScale(70),
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  weekViewStyle: {
    marginStart: moderateScale(4),
    width: moderateScale(70),
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  monthViewStyle: {
    marginStart: moderateScaleVertical(4),
    width: moderateScale(70),
    height: moderateScale(25),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: moderateScale(20),
    flexDirection: 'row',
  },

  textStyleCenter: {
    textAlign: 'center',
  },
  buttonWhatsApp: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    width: moderateScale(140),
    height: moderateScale(30),
    backgroundColor: colors.GREEN,
    borderRadius: moderateScale(5),
    top: Platform.OS === 'ios' ? moderateScale(18) : moderateScale(10),
  },
  whatsImage: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(30), // Add margin to separate the image from text
  },
  buttonWhasAppText: {
    fontSize: textScale(12),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'center', // Center the text horizontally
    right: moderateScale(20),
  },
  bookNowButton: {
    width: moderateScale(140),
    height: moderateScale(30),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? moderateScale(18) : moderateScale(10),
  },
  bookNowText: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
});

export default styles;
