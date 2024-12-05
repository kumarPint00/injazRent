import {Platform, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    flex: 1,
    marginTop: moderateScale(20),
  },
  inputContainer: {
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  inputImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    tintColor: colors.BLACK,
    marginStart: 10,
  },
  inputPlaceholder: {
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    alignContent: 'center',
    right: moderateScale(10),
    top: Platform.OS === 'android' ? 2 : 0,
  },
  currentLocationButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  currentLocationButton: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(20),
    right: moderateScale(20),
  },
  currentLocationIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
    marginStart: 3,
  },
  locationIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: colors.BLUE,
  },
  currentLocationText: {
    fontSize: textScale(14),
    marginStart: moderateScale(10),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLUE,
    alignContent: 'center',
  },
  mapContainer: {
    flex: 1,
    marginTop: moderateScale(20),
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
