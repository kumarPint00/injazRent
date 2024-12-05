import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(10),
  },
  title: {
    marginRight: moderateScale(10),
    flex: 1,
    fontSize: textScale(16),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
  content: {
    marginLeft: moderateScale(0),
    fontSize: textScale(13),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
  imageStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
    marginEnd: moderateScale(12),
  },
});

export default styles;
