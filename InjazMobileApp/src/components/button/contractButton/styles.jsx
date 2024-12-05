import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(30),
    left: moderateScale(13),
    margin: 10,
  },
  button: {
    width: moderateScale(107),
    height: moderateScale(100),
    backgroundColor: colors.BLACK,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    width: moderateScale(76),
    height: moderateScale(18),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLUE,
    overflow: 'hidden',
    bottom: Platform.OS === 'ios' ? moderateScale(26) : moderateScale(22),
  },
  labelText: {
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(8),
    color: colors.WHITE,
    alignSelf: 'center',
    textAlign: 'left',
  },
  mainText: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(12),
    color: colors.WHITE,
    bottom: moderateScale(10),
    textAlign: 'left',
  },

  subText: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(8),
    color: colors.WHITE,
    bottom: moderateScale(6),
    textAlign: 'left',
  },
  smallText: {
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(6),
    color: colors.WHITE,
    bottom: moderateScale(5),
    textAlign: 'left',
  },

  mainTextNoLabel: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(12),
    color: colors.WHITE,
    bottom: moderateScale(1),
    textAlign: 'left',
  },
  subTextNoLabel: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(8),
    color: colors.WHITE,
    top: moderateScale(3),
    textAlign: 'left',
  },
  smallTextNoLabel: {
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(6),
    color: colors.WHITE,
    top: moderateScale(3),
    textAlign: 'left',
  },
});

export default styles;
