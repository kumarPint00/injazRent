import {Platform, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    backgroundColor: colors.WHITE,
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    height: Platform.OS == 'android' ? moderateScale(380) : moderateScale(350),
    width: '90%',
  },
  arrowIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
    tintColor: colors.BLACK,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  titleText: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  checkContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  checkCircle: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    backgroundColor: colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  messageContainer: {
    marginTop: Platform.OS == 'android' ? moderateScale(30) : moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    textAlign: 'center',
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
  },
  buttonContainer: {
    marginTop: Platform.OS == 'android' ? moderateScale(47) : moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(20),
  },
  buttonText: {
    fontSize: textScale(16),
    textAlign: 'center',
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
  buttonPriceText: {
    textAlign: 'center',
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    marginTop: Platform.OS == 'ios' ? moderateScale(6) : moderateScale(2),
  },
  button: {
    width: '70%',
    backgroundColor: colors.BLUE,
    height: moderateScale(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
