// styles.js
import {StyleSheet} from 'react-native';
import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import fontFamily from '../../../../../../styles/fontFamily';
import colors from '../../../../../../constants/colors';

export default StyleSheet.create({
  container: {},
  buttonContainer: {
    right: moderateScale(15),
    bottom: moderateScale(10),
    justifyContent: 'center',
  },
  titleContract: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(18),
    color: colors.NAVY_BLUE,
    textAlign: 'left',
  },
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  purpleBackground: {
    backgroundColor: colors.BLUE,
  },
  yellowBackground: {
    backgroundColor: colors.BLACK,
  },
  centeredButtonContainer: {
    marginTop: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: moderateScale(10),
  },
  insuranceContainer: {
    flexDirection: 'row',
    width: '95%',
  },
  mileageContainer: {
    flexDirection: 'row',
    bottom: moderateScale(20),
    justifyContent: 'space-between',
    width: '95%',
  },
  contractContainer: {
    top: moderateScale(8),
  },
});
