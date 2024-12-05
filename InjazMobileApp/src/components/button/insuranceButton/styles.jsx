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
  },
  insuranceText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    marginStart: moderateScale(10),
  },
  learnMoreText: {
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    marginStart: moderateScale(40),
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: moderateScale(40),
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  basicButton: {
    backgroundColor: colors.BLACK,
    width: '46%',
    marginStart: moderateScale(16),
    marginTop: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  standardButton: {
    backgroundColor: colors.BLUE,
    width: '46%',
    marginStart: moderateScale(31),
    marginTop: moderateScale(10),
  },
  buttonText: {
    fontSize: textScale(15),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.WHITE,
  },
});

export default styles;
