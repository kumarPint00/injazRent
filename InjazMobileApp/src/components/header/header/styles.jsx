import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    width: moderateScale(30),
    height: moderateScale(20),
  },
  titleText: {
    marginStart: moderateScale(5),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.WHITE,
    fontSize: textScale(18),
  },
  skipText: {
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.WHITE,
    fontSize: textScale(18),
    marginHorizontal: moderateScale(8),
  },
  touchableArea: {padding: 10},
});
export default styles;
