import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
  },
  containerCategory: {
    marginTop: moderateScale(10),
  },
  titleCategory: {
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    alignSelf: 'center',
    padding: 10,
  },
  imageCategory: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
});
export default styles;
