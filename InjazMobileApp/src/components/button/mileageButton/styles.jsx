// styles.js
import {StyleSheet} from 'react-native';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';

const styles = StyleSheet.create({
  insuranceContainer: {
    flexDirection: 'row',
    bottom: moderateScale(40),
    justifyContent: 'space-between',
    width: '100%',
    marginTop: moderateScale(30),
    alignItems: 'center',
    right: moderateScale(20),
  },
  insuranceText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    marginStart: moderateScale(16),
  },
  learnMoreText: {
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    left: moderateScale(14),
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: moderateScale(40),
    justifyContent: 'space-between',
    width: '100%',
    right: moderateScale(20),
  },
  basicButton: {
    backgroundColor: colors.BLACK,
    width: '46%',
    marginStart: moderateScale(16),
    marginTop: moderateScale(5),
  },
  standardButton: {
    backgroundColor: colors.BLUE,
    width: '46%',
    marginStart: moderateScale(29),
    marginTop: moderateScale(5),
  },
  buttonText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.WHITE,
  },
});

export default styles;
