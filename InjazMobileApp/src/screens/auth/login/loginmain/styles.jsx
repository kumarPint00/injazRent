import {Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../../styles/responsiveSize';
import colors from '../../../../constants/colors';
import fontFamily from '../../../../styles/fontFamily';

const styles = StyleSheet.create({
  imageCity: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: Platform.OS === 'ios' ? moderateScale(32) : moderateScale(30),
  },
  headerStyle: {height: moderateScale(260)},
  cityImgBackground: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carImageStyle: {
    width: '100%',
    height: '100%',
    top: moderateScale(60),
  },
  mainContainer: {
    height: moderateScale(400),
    backgroundColor: colors.WHITE,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonStyle: {
    width: '100%',
    height: moderateScale(80),
    bottom: moderateScale(35),
  },
  footerContainer: {
    backgroundColor: colors.WHITE,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: moderateScale(200),
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(70),
    bottom: 30,
  },
  screenContainer: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  signUp: {
    flex: 0.8,
  },
  login: {
    flex: 0.8,
    marginTop: moderateScaleVertical(10),
    width: '100%',
  },
  titleMobileNo: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(12),
    color: colors.BLACK,
    marginStart: moderateScale(10),
  },
  inputCodeStyle: {
    width: '30%',
    marginTop: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPhoneStyle: {
    width: '90%',
    marginTop: moderateScale(15),
  },
  inputCode: {
    width: moderateScale(80),
    fontSize: moderateScale(15),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    borderRadius: 0,
    paddingStart: moderateScale(5),
    top: Platform.OS === 'android' ? moderateScale(3) : 0,
  },
  inputPhoneNo: {
    width: moderateScale(80),
    fontSize: moderateScale(15),
    marginStart: moderateScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    top: Platform.OS === 'android' ? moderateScale(3) : 0,
  },

  buttonVerifyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(50),
  },
  buttonVerify: {
    width: moderateScale(180),
    backgroundColor: colors.BLACK,
    height: moderateScale(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleVerify: {
    fontSize: textScale(22),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    alignSelf: 'center',
  },
  inputRowContainer: {flexDirection: 'row'},
  headerContainer: {
    bottom: Platform.OS === 'android' ? moderateScale(90) : moderateScale(55),
    width: '100%',
    height: moderateScale(20),
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    paddingVertical: moderateScale(15),
    textAlign: 'left',
  },
  inputContainer: {
    width: '98.5%',
    fontSize: moderateScale(15),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    justifyContent: 'center',
    marginEnd: moderateScale(20),
  },
  titleStyle: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    paddingVertical: moderateScale(8),
    textAlign: 'left',
  },
  placeHolderStyle: {
    paddingStart: moderateScale(20),
  },
  scrollView: {flexGrow: 1},
});
export default styles;
