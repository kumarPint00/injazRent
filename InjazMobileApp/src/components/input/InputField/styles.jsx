import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(51),
    borderColor: colors.GRAY,
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(10),
    backgroundColor: colors.WHITE,
  },
  imageStyle: {
    width: moderateScale(22),
    height: moderateScale(22),
    left: moderateScale(10),
  },
  inputStyle: {
    flex: 1,
    height: moderateScale(51),
    borderRadius: moderateScale(10),
    color: colors.BLACK,
    paddingStart: moderateScale(20),
  },
  titleResend: {
    marginHorizontal: moderateScale(20),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(12),
    color: colors.BLACK,
    textAlign: 'left',
  },
});
export default styles;
