import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
import {Platform} from 'react-native';

const styles = {
  text: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(16),
    marginHorizontal: moderateScale(10),
  },
  activeUnderline: {
    position: 'absolute',
    top: Platform.OS === 'android' ? moderateScale(40) : moderateScale(35),
    left: 0,
    right: 0,
    height: moderateScale(5),
    borderBottomColor: colors.BLUE,
    borderBottomWidth: moderateScale(3),
    marginStart: moderateScale(10),
  },
};
export default styles;
