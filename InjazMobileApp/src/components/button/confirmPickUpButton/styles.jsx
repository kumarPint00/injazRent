import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
import {moderateScale, textScale} from '../../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
  },
  buttonContainer: {
    height: moderateScale(60),
    backgroundColor: colors.BLUE,
    borderRadius: moderateScale(40),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  touchableOpacity: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: colors.WHITE,
    marginStart: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    top: moderateScale(5),
  },
  image: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.WHITE,
    fontSize: textScale(20),
    right: moderateScale(10),
  },
});

export default styles;
