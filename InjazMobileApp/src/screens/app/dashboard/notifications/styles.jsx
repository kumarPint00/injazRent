import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import {moderateScale, textScale} from '../../../../styles/responsiveSize';
import fontFamily from '../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  innerView: {flexDirection: 'row'},
  viewClose: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(10),
  },
  close: {
    width: moderateScale(14),
    height: moderateScale(14),
    tintColor: colors.BLACK,
  },
  title: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    fontSize: textScale(10),
    marginStart: moderateScale(10),
    bottom: moderateScale(5),
  },
  subTitle: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.GREY_SECONDAY,
    fontSize: textScale(10),
    marginStart: moderateScale(10),
    top: moderateScale(2),
  },
  icon: {
    width: moderateScale(25),
    height: moderateScale(25),
    tintColor: colors.BLACK,
  },
  viewIcon: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: moderateScale(8),
  },
  viewStyle: {
    marginHorizontal: moderateScale(8),
    backgroundColor: colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    marginVertical: moderateScale(5),
    paddingVertical: moderateScale(20),
    borderRadius: moderateScale(5),
    justifyContent: 'space-between',
  },
});
export default styles;
