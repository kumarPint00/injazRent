import {Platform, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
  },
  imageCity: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: Platform.OS === 'ios' ? moderateScale(32) : moderateScale(30),
  },
  headerStyle: {flex: 0.3},
  cityImgBackground: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    marginHorizontal: moderateScale(10),
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
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  carImageStyle: {
    width: '100%',
    height: '100%',
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
    height: '100%',
  },
  signUp: {
    marginHorizontal: moderateScale(10),
  },

  inputContainer: {
    width: '100%',
    fontSize: moderateScale(15),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
  buttonVerifyContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  buttonVerify: {
    width: moderateScale(180),
    backgroundColor: colors.BLACK,
    height: moderateScale(44),
    marginTop: moderateScale(30),
  },
  titleVerify: {
    fontSize: textScale(22),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  inputStyle: {
    paddingVertical: moderateScale(15),
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
});
export default styles;
