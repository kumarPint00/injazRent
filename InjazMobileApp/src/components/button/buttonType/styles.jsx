import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.REDDISH,
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
  },
  textStyle: {
    color: colors.WHITE,
    fontSize: textScale(12),
  },
  titleNoAdd: {
    fontSize: textScale(10),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
  titleCurrency: {
    fontSize: textScale(10),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
});
export default styles;
