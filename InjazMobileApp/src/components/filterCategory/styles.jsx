import {StyleSheet} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  text: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(16),
    flex: 1, // Allow text to take up remaining space
    textAlign: 'center',
    color: colors.BLACK,
  },
  image: {
    width: moderateScale(24),
    height: moderateScale(24),
    tintColor: colors.BLACK,
  },
  containerBrand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  selectedContainer: {
    backgroundColor: colors.WHITE,
  },
  selectedText: {
    color: colors.BLUE,
  },
  selectedImage: {
    tintColor: colors.BLUE,
  },
});

export default styles;
