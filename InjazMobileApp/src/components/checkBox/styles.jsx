import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(3),
    marginTop: moderateScale(4),
  },
  selectedCheckBox: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderWidth: 1,
    borderColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
  },
  title: {
    marginLeft: moderateScale(10),
    fontSize: textScale(16),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
  subTitle: {
    marginLeft: moderateScale(10),
    fontSize: textScale(8),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_REGULAR,
    textAlign: 'left',
  },
  imageCheck: {
    width: moderateScale(18),
    height: moderateScale(18),
    left: moderateScale(5),
    bottom: moderateScale(5),
    tintColor: colors.BLUE,
  },
  textContainer: {marginHorizontal: moderateScale(10)},
  checkedStyle: {
    borderWidth: 1,
    width: moderateScale(20),
    height: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
