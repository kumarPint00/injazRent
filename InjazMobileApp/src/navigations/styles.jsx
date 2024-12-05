import {Platform, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../styles/responsiveSize';
import colors from '../constants/colors';
import fontFamily from '../styles/fontFamily';

const styles = StyleSheet.create({
  tabBarStyle: {
    height: Platform.OS === 'ios' ? moderateScale(80) : moderateScale(60),
    paddingHorizontal: moderateScale(5),
    paddingTop: 0,
    backgroundColor: colors.BLACK,
    position: 'absolute',
    borderTopWidth: 0,
  },
  inActiveImage: {width: moderateScale(20), height: moderateScale(20)},
  titleStyle: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    marginStart: moderateScale(5),
    fontSize: textScale(10),
  },
  tabViewContainer: {flexDirection: 'row', alignItems: 'center'},
  activeTabStyle: {
    width: moderateScale(100),
    height: moderateScale(34),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
