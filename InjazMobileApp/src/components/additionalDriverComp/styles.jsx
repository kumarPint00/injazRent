import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(40),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
    width: '95.5%',
    ...Platform.select({
      android: {
        elevation: 3,
        backgroundColor: colors.WHITE,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: moderateScale(24),
    height: moderateScale(24),
    marginStart: moderateScale(10),
    marginTop: moderateScale(3),
  },
  title: {
    fontSize: moderateScale(18),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginTop: moderateScale(5),
    flex: 1,
    marginStart: moderateScale(14),
    textAlign: 'left',
  },
  button: {
    height: moderateScale(30),
    backgroundColor: colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Platform.OS == 'android' ? moderateScale(7) : moderateScale(5),
    paddingHorizontal: moderateScale(14),
    borderRadius: moderateScale(20),
    marginTop: Platform.OS == 'android' ? moderateScale(3) : moderateScale(5),
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    textAlign: 'left',
  },
});

export default styles;
