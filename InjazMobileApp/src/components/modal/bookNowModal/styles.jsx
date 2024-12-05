import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    alignItems: 'center',
    marginTop: moderateScale(40),
    marginHorizontal: moderateScale(10),
    height: Platform.OS === 'android' ? moderateScale(450) : moderateScale(450),
  },
  inputStyle: {
    paddingVertical: moderateScale(15),
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    fontSize: moderateScale(15),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    justifyContent: 'center',
    marginEnd: moderateScale(25),
  },
  titleStyle: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    paddingVertical: moderateScale(8),
    textAlign: 'left',
  },
  placeHolderStyle: {
    paddingStart: moderateScale(20),
  },
});
export default styles;
