import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: moderateScale(20),
    textAlign: 'left',
  },
  labelStyle: {
    fontSize: textScale(13),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    bottom: moderateScale(20),
    textAlign: 'left',
  },
  inputStyle: {
    flex: 1,
    height: moderateScale(51),
    borderRadius: moderateScale(10),
    color: colors.BLACK,
    paddingStart: moderateScale(10),
    textAlign: 'left',
  },
  errorText: {
    color: 'red',
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    top: moderateScale(6),
    textAlign: 'left',
  },

  imageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    right: moderateScale(10),
    bottom: moderateScale(14),
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});
export default styles;
