import {Platform, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
import {moderateScale, textScale} from '../../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS == 'android' ? moderateScale(40) : moderateScale(40),
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  androidShadow: {
    backgroundColor: colors.WHITE,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iosShadow: {
    backgroundColor: colors.WHITE,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titlePackage: {
    color: colors.RED,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(14),
  },
  titleDaily: {
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(14),
  },
});
export default styles;
