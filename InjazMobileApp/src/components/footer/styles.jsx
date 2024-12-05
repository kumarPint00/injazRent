import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: colors.BLACK,
    height: moderateScale(80),
    justifyContent: 'center',
  },
  contentContainer: {
    marginHorizontal: moderateScale(34),
  },
  rowContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  priceText: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(14),
    textAlign: 'left',
  },
  monthlyPriceText: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(16),
    textAlign: 'left',
  },
  vatText: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(10),
    textAlign: 'left',
  },
  button: {
    backgroundColor: colors.WHITE,
    width: moderateScale(90),
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
});
export default styles;
