import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  itemContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    margin: moderateScale(2),
  },
  touchableOpacity: {
    height: moderateScale(65),
    width: moderateScale(165),
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: colors.BLACK,
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
  purpleBackground: {
    backgroundColor: colors.PURPLE,
  },
  yellowBackground: {
    backgroundColor: colors.LIGHT_GREEN,
  },
  viewLastItem: {
    backgroundColor: colors.WHITE,
    height: moderateScale(45),
    bottom: moderateScale(7),
    width: moderateScale(165),
    borderWidth: moderateScale(0.4),
    borderColor: colors.RADIO_BUTTON,
    borderRadius: moderateScale(5),
  },
  titleFullSpecs: {
    color: colors.BLACK,
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_REGULAR,
    alignSelf: 'center',
  },
});
export default styles;
