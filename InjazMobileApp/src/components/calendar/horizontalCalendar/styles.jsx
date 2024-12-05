import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: textScale(18),
    fontWeight: 'bold',
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    top: moderateScale(8),
  },
  dateSection: {
    width: '100%',
    padding: moderateScale(10),
  },
  scroll: {
    height: moderateScale(150),
  },
  card: {
    borderRadius: moderateScale(10),
    borderColor: colors.DARK_GREY,
    padding: moderateScale(10),
    marginVertical: moderateScale(10),
    alignItems: 'center',
    height: moderateScale(70),
    width: moderateScale(80),
    marginHorizontal: moderateScale(5),
  },
  big: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  medium: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
});
export default styles;
