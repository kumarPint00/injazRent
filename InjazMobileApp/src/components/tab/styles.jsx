import {Platform} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import colors from '../../constants/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';

const styles = {
  container: {flexDirection: 'row', marginTop: moderateScale(20)},
  text: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(13),
    marginHorizontal: moderateScale(10),
  },
  activeUnderline: {
    position: 'absolute',
    top: Platform.OS === 'android' ? moderateScale(30) : moderateScale(30),
    left: 0,
    right: 0,
    height: moderateScale(5),
    borderBottomColor: colors.BLACK,
    borderBottomWidth: moderateScale(3),
    marginStart: moderateScale(10),
  },
  screenContainer: {
    backgroundColor: colors.WHITE,
    flexGrow: 1,
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(20),
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: colors.BLACK,
    width: moderateScale(140),
  },
  activeText: {
    color: colors.WHITE,
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  inactiveButton: {
    backgroundColor: colors.WHITE,
    width: moderateScale(140),
  },
  buttonText: {
    color: 'black',
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
};
export default styles;
