import {Platform, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

export default StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderColor: colors.GREY_LIGHT,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(14),
    marginHorizontal: moderateScale(10),
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    width: moderateScale(30),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  icon: {
    width: moderateScale(15),
    height: moderateScale(15),
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    textAlign: 'left',
    marginStart: moderateScale(10),
    width: '100%',
  },
  subText: {
    width: '100%',
    bottom: moderateScale(2),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
  toggleSwitchContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  rightIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    right: moderateScale(20),
  },
});
