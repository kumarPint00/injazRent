import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../styles/fontFamily';
import {textScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  viewAllText: {
    fontSize: textScale(14),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
});
export default styles;
