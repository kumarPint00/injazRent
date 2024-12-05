import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
const styles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0, 0, 0, 0.6)', flex: 1},
  modalStyle: {flex: 1, backgroundColor: 'transparent'},
  modalContainer: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: textScale(18),
    color: colors.BLACK,
    marginTop: moderateScale(30),
    textAlign: 'center',
    marginBottom: moderateScale(10),
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: textScale(16),
    color: colors.BLACK,
    marginTop: moderateScale(10),
    textAlign: 'center',
    marginBottom: moderateScale(30),
    marginHorizontal: moderateScale(10),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  modalTextSmile: {
    fontSize: textScale(35),
    color: colors.BLACK,
    marginTop: moderateScale(10),
    textAlign: 'center',
    marginBottom: moderateScale(10),
    marginHorizontal: moderateScale(10),
  },
});
export default styles;
