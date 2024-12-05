import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  touchableStyle: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(8),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
    paddingHorizontal: moderateScale(43),
    borderRadius: moderateScale(8),
  },
  titleStyle: {
    color: colors.WHITE,
    fontSize: textScale(14),
  },
  serviceItem: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(10),
  },
});
export default styles;
