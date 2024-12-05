import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  filterContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  containerCategory: {
    backgroundColor: colors.RADIO_BG,
    alignItems: 'center',
    width: Platform.OS === 'android' ? moderateScale(190) : moderateScale(200),
  },
  containerCars: {flex: 1},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    bottom: Platform.OS == 'android' ? moderateScale(10) : moderateScale(20),
    width: '100%',
    position: 'absolute',
  },

  buttonFilterContainer: {
    width: '100%',
    height: moderateScale(100),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(20),
  },
  contentContainer: {
    flex: 1,
  },
  buttonTextClear: {
    color: colors.WHITE,
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  buttonClear: {
    backgroundColor: colors.BLACK,
    width: '40%',
    height: moderateScale(50),
    borderRadius: moderateScale(20),
  },
  buttonTextApply: {
    color: colors.WHITE,
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  buttonApply: {
    backgroundColor: colors.BLUE,
    width: '40%',
    height: moderateScale(50),
    borderRadius: moderateScale(20),
  },
});
export default styles;
