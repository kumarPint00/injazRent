import {Platform, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.OS === 'android' ? moderateScale(12) : moderateScale(16),
    marginTop: moderateScale(10),
    borderWidth: 0.5,
    borderRadius: moderateScale(10),
    ...Platform.select({
      android: {
        elevation: Platform.OS === 'android' ? moderateScale(3) : 0,
        backgroundColor: colors.WHITE,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: colors.WHITE,
      },
    }),
  },
  optionText: {
    flex: 1,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(18),
    color: colors.BLACK,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRadioButton: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.BLACK,
  },
});
export default styles;
