import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(23),
    height: moderateScale(23),
    marginRight: moderateScale(10),
    tintColor: colors.WHITE,
  },
  text: {
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.WHITE,
    bottom: moderateScale(20),
  },
});
export default styles;
