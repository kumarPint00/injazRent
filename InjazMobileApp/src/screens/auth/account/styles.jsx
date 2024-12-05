import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    width: '100%',
    fontSize: textScale(44),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    top: moderateScale(20),
  },
  titleContainer: {
    top: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  subTitleStyle: {
    width: '100%',
    textAlign: 'justify',
    fontSize: textScale(14),
    color: colors.GREY_LIGHT,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    top: moderateScale(40),
  },
});
export default styles;
