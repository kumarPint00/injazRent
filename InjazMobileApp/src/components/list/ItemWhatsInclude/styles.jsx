import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  itemContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    margin: moderateScale(2),
  },
  touchableOpacity: {
    height: moderateScale(66),
    width: moderateScale(165),
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
  },
  text: {
    color: colors.BLACK,
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
  purpleBackground: {
    backgroundColor: colors.PURPLE,
  },
  yellowBackground: {
    backgroundColor: colors.YELLOW,
  },
  lastItemMargin: {
    marginBottom: 0,
  },
  serviceItem: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(14),
    top: moderateScale(20),
  },
});
export default styles;
