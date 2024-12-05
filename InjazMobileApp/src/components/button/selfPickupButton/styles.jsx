import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    height: Platform.OS == 'android' ? moderateScale(90) : moderateScale(80),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: '48%',
    marginVertical: moderateScale(15),
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
  selfPickUpText: {
    fontSize: moderateScale(16),
    color: colors.BLUE,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginStart: moderateScale(5),
    marginTop: Platform.OS == 'android' ? moderateScale(3) : moderateScale(7),
  },
  branchNameText: {
    fontSize: moderateScale(14),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    marginStart: moderateScale(5),
    marginTop: Platform.OS == 'android' ? moderateScale(3) : moderateScale(7),
  },
  dateTimeText: {
    fontSize: moderateScale(14),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_REGULAR,
    marginStart: moderateScale(5),
    marginTop: Platform.OS == 'android' ? moderateScale(3) : moderateScale(7),
  },
});
export default styles;
