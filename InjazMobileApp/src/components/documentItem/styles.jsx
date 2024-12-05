// DocumentItemStyles.js
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    height: moderateScale(70),
    width: moderateScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  image: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: moderateScale(10),
  },
  title: {
    color: colors.WHITE,
    fontSize: moderateScale(12),
    fontFamily: fontFamily.POPPINS_MEDIUM,
  },
  subtitle: {
    color: colors.WHITE,
    fontSize: moderateScale(12),
    fontFamily: fontFamily.POPPINS_MEDIUM,
  },
});

export default styles;
