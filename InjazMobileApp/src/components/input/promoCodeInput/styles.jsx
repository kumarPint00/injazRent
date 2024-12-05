import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginStart: moderateScale(10),
    marginTop: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: colors.GREY_LIGHT,
    width: '72%',
    borderRadius: moderateScale(10),
    height: moderateScale(40),
    paddingStart: moderateScale(10),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLUE,
    height: moderateScale(40),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginStart: moderateScale(10),
  },
  buttonText: {
    fontSize: textScale(12),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    textAlign: 'left',
  },
});

export default styles;
