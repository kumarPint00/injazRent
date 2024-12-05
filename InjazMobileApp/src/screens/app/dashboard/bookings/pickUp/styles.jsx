import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  collapsibleViewContainer: {
    marginTop: moderateScale(20),
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
    borderColor: colors.GREY_LIGHT,
  },
  collapsibleViewContent: {
    margin: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevronIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    bottom: moderateScale(6),
    left: moderateScale(10),
  },
  collapsibleContent: {
    justifyContent: 'center',
    marginStart: moderateScale(20),
    textAlign: 'left',
  },
  titleBranches: {
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
    marginTop: moderateScale(10),
    textAlign: 'left',
  },
  titleNear: {
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    color: colors.NAVY_BLUE,
    top: moderateScale(10),
  },
  textStyle: {
    textAlign: 'left',
  },
});
export default styles;
