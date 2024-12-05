import {StyleSheet} from 'react-native';
import colors from '../../../../../../constants/colors';
import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import fontFamily from '../../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    marginBottom: moderateScale(4),
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
  },
  carTitle: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(20),
    color: colors.BLACK,
  },
  carSubtitle: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(20),
    color: colors.BLACK,
  },
  specsContainer: {
    // marginTop: moderateScale(4),
  },
  carouselContainer: {
    marginBottom: moderateScale(10),
  },
  purpleBackground: {
    backgroundColor: colors.BLUE,
    // width: moderateScale(160),
  },
  yellowBackground: {
    backgroundColor: colors.BLACK,
    width: moderateScale(160),
  },
  whiteBackground: {
    backgroundColor: colors.WHITE,
  },
  flatListContainer: {},
});

export default styles;
