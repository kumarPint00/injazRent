import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: Platform.OS === 'ios' ? moderateScale(120) : moderateScale(80),
    backgroundColor: colors.BLACK,
  },
  backIcon: {
    width: moderateScale(50),
    height: moderateScale(30),
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? moderateScale(68) : moderateScale(20),
  },
  rightIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(0),
    tintColor: colors.WHITE,
    marginEnd: moderateScale(10),
  },
  title: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(20),
    flex: 1,
    alignSelf: 'center',
    marginEnd: moderateScale(50),
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(5),
    color: colors.WHITE,
  },
  titleShort: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(20),
    alignSelf: 'center',
    marginEnd: moderateScale(50),
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(5),
    color: colors.WHITE,
  },
});
export default styles;
