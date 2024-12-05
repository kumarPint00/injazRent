import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  deliveryText: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
  },
  deliveryContainer: {
    marginTop: moderateScale(20),
    padding: moderateScale(20),
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.GREY_LIGHT,
    borderRadius: moderateScale(10),
    ...Platform.select({
      android: {
        elevation: moderateScale(3),
        backgroundColor: colors.WHITE,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: colors.WHITE,
      },
    }),
  },
});
export default styles;
