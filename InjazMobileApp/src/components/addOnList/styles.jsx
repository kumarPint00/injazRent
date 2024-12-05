import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(20),
  },
  title: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
  },
  addOnItem: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addOnIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  addOnName: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
    flex: 1,
    marginStart: moderateScale(14),
  },
  addOnDetails: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
    flex: 1,
    marginStart: moderateScale(14),
  },
  addOnPrice: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
    marginEnd: moderateScale(20),
  },
});
export default styles;
