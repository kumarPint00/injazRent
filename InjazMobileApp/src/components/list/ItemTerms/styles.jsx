import {StyleSheet} from 'react-native';
import {textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  sub_title: {
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    textAlign: 'left',
  },
  title: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    textAlign: 'left',
  },
});
export default styles;
