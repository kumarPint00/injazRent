import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
  },
  icon: {
    width: moderateScale(24),
    height: moderateScale(24),
    top: moderateScale(5),
  },
  detailsContainer: {
    flex: 1,
    marginStart: moderateScale(14),
  },
  title: {
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
  },
  subtitle: {
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.NAVY_BLUE,
    bottom: moderateScale(5),
  },
  editIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
    tintColor: colors.BLACK,
    top: moderateScale(5),
  },
});
export default styles;
