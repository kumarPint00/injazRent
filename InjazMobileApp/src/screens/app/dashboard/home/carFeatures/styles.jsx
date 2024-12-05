import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    alignItems: 'center',
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
    marginTop: moderateScale(10),
  },
  carouselContainer: {
    marginBottom: moderateScale(10),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: moderateScale(25),
    width: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: colors.WHITE,
    borderWidth: moderateScale(0.3),
    borderColor: colors.BLACK,
    borderRadius: moderateScale(17),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
