// styles.js
import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  imageContainer: {height: moderateScale(300)},
  imageInvite: {
    width: '100%',
    height: moderateScale(250),
  },

  containerEarn: {
    marginBottom: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleEarn: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    bottom: moderateScale(20),
  },
  subtitle: {
    color: colors.BLACK,
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_REGULAR,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  bottomContainer: {
    borderWidth: moderateScale(1.5),
    borderStyle: 'dashed',
    borderColor: colors.DARK_GREY,
    padding: moderateScale(5),
    borderRadius: moderateScale(10),
    width: '60%',
    backgroundColor: colors.WHITE,
  },
  copyButton: {
    width: '45%',
    borderColor: colors.BLACK,
    borderWidth: 0.3,
  },
  shareButton: {
    width: '45%',
    backgroundColor: colors.GREEN,
  },
  buttonTextInvite: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(14),
  },
  buttonInvite: {width: '45%', backgroundColor: colors.BLUE},
  buttonCopy: {
    width: '45%',
    borderColor: colors.BLACK,
    borderWidth: 0.3,
  },
  buttonTextCopy: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    fontSize: textScale(14),
  },
  buttonContainer: {
    height: 100,
    marginTop: 40,
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginStart: moderateScale(13),
  },
  buttonTextCode: {
    color: colors.WHITE,
    fontSize: textScale(26),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    alignSelf: 'center',
  },
  buttonCode: {
    backgroundColor: colors.BLUE,
    height: moderateScale(74),
    width: '100%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    bottom: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDidContainer: {
    bottom: moderateScale(25),
    justifyContent: 'center',
    textAlign: 'justify',
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  textDid: {
    color: colors.BLACK,
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: `rgba(0, 0, 0, 0.6)`,
    textAlign: 'justify',
    bottom: moderateScale(20),
  },
});

export default styles;
