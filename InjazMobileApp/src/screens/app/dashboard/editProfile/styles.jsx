import {Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../../styles/responsiveSize';
import colors from '../../../../constants/colors';
import fontFamily from '../../../../styles/fontFamily';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headerContainer: {
    height: moderateScale(200),
    backgroundColor: colors.BLACK,
  },
  userInfoContainer: {
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    paddingVertical: moderateScale(50),
  },
  userInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'contain',
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  te: {
    marginHorizontal: moderateScale(20),
    justifyContent: 'center',
  },
  username: {
    color: colors.WHITE,
    fontSize: moderateScale(16),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    textAlign: 'left',
  },
  userEmail: {
    color: colors.WHITE,
    fontSize: moderateScale(14),
    fontFamily: fontFamily.POPPINS_REGULAR,
    textAlign: 'left',
  },
  editButtonContainer: {
    top: moderateScale(30),
    justifyContent: 'flex-end',
    marginStart:
      Platform.OS == 'android' ? moderateScale(15) : moderateScale(32),
  },
  editButtonWrapper: {
    height: moderateScale(40),
    width: moderateScale(40),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  inputContainer: {
    width: '100%',
    fontSize: moderateScale(15),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  buttonEditContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEdit: {
    width: moderateScale(200),
    backgroundColor: colors.BLACK,
    height: moderateScale(44),
    marginTop: moderateScale(30),
    borderRadius: moderateScale(30),
  },
  titleEdit: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  titleEditStyle: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    paddingVertical: moderateScale(8),
  },
  mainContainer: {
    marginTop: moderateScaleVertical(40),
    paddingHorizontal: moderateScale(18),
  },
  buttonContainer: {
    flex: 1,
    position: 'absolute',
    bottom: moderateScale(20),
    width: '100%',
    alignItems: 'center',
  },
  titleStyle: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    paddingVertical: moderateScale(8),
    textAlign: 'left',
  },
  userInfoTextWrapper: {
    marginStart: moderateScale(37),
    width: moderateScale(190),
  },
  placeHolderStyle: {
    textAlign: 'left',
    paddingEnd: moderateScale(20),
  },
  inputStyle: {
    textAlign: 'left',
  },
});
