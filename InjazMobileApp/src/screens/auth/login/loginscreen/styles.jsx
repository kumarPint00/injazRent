import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../../styles/responsiveSize';
import colors from '../../../../constants/colors';
import fontFamily from '../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  imageCity: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: Platform.OS === 'ios' ? moderateScale(35) : moderateScale(35),
  },
  headerStyle: {height: moderateScale(240)},
  cityImgBackground: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
  },
  mainContainer: {
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height / 1.67,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '100%',
    height: moderateScale(80),
    bottom: moderateScale(35),
  },
  footerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: Platform.OS === 'ios' ? moderateScale(160) : moderateScale(130),
  },
  carImageStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
    height: moderateScale(500),
    paddingHorizontal: moderateScale(8),
    width: '100%',
    paddingBottom: moderateScale(50),
  },
  signUp: {
    flex: 0.8,
    marginHorizontal: moderateScale(40),
  },
  login: {
    flex: 1,
    marginStart: moderateScale(10),
    marginEnd: moderateScale(33),
    marginTop: moderateScaleVertical(20),
  },
  titleMobileNo: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(12),
    color: colors.BLACK,
  },
  inputCodeStyle: {
    width: '30%',
    marginTop: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPhoneStyle: {
    width: '75%',
    marginStart: moderateScale(10),
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
    marginTop: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'flex-end',
    left: moderateScale(25),
  },
  buttonVerify: {
    width: moderateScale(153),
    backgroundColor: colors.NAVY_BLUE,
    height: moderateScale(44),
  },
  titleVerify: {
    fontSize: textScale(22),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  inputRowContainer: {flexDirection: 'row'},
  headerContainer: {
    bottom: Platform.OS === 'android' ? moderateScale(90) : moderateScale(55),
    width: '100%',
    height: moderateScale(20),
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
  },
});
export default styles;
