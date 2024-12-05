import {StyleSheet, Platform} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: moderateScale(15),
    marginTop: Platform.OS === 'ios' ? moderateScale(55) : moderateScale(30),
    bottom: 10,
  },
  countryFlagImage: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  countryNameText: {
    fontSize: textScale(16),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    marginStart: moderateScale(10),
  },
  dropDownIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginStart: moderateScale(8),
    tintColor: colors.WHITE,
    top: moderateScale(2),
  },
  giftButton: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? moderateScale(50) : moderateScale(10),
    bottom: 10,
    marginEnd: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.WHITE,
    padding: 8,
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    left: moderateScale(30),
    marginTop: Platform.OS === 'ios' ? moderateScale(50) : moderateScale(25),
  },
  giftImage: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  giftText: {
    fontSize: textScale(12),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    marginStart: moderateScale(10),
  },
  bellIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
    marginTop: Platform.OS === 'ios' ? moderateScale(60) : moderateScale(40),
    marginStart: moderateScale(150),
    alignSelf: 'center',
    bottom: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(20),
  },
});

export default styles;
