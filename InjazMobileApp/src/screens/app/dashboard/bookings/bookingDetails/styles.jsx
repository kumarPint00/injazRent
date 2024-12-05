import {Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  titleStyle: {
    marginStart: moderateScale(50),
  },
  detailsContainer: {
    backgroundColor: colors.WHITE,
    paddingBottom: moderateScale(20),
  },
  image: {
    width: '100%',
    height: moderateScale(180),
  },
  carDetailsContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(30),
  },
  carName: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(20),
    color: colors.WHITE,
  },
  carPrice: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(20),
    color: colors.WHITE,
    marginLeft: moderateScale(5), // Adjusted margin instead of left
  },
  addressContainer: {
    marginHorizontal: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  addressTitle: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(18),
    color: colors.NAVY_BLUE,
    textAlign: 'left',
  },
  locationContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
    justifyContent: 'space-between',
  },
  optionalContainer: {
    marginTop: moderateScaleVertical(20),
  },
  totalContainer: {
    marginTop: moderateScale(25),
  },
  buttonContainer: {
    marginTop: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: textScale(18),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  buttonStyle: {
    backgroundColor: colors.BLACK,
    width: '90%',
    borderRadius: moderateScale(60),
  },
});

export default styles;
