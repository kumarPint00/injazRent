import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    justifyContent: 'space-between',
    backgroundColor: colors.BLACK,
    padding: moderateScale(13),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(12),
    color: colors.WHITE,
  },
});
export default styles;
