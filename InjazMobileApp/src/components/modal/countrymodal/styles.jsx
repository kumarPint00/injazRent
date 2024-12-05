import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
const styles = StyleSheet.create({
  countryCodeModalContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    width: moderateScale(95),
    marginStart: moderateScale(4),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    borderColor: colors.BLACK,
  },
  countryCodeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#ccc',
  },
  countryFlag: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(10),
  },
  countryCodeText: {
    fontSize: textScale(10),
    fontWeight: 'bold',
    marginHorizontal: moderateScale(10),
    fontFamily: fontFamily.POPPINS_MEDIUM,
  },
  countryNameText: {
    fontSize: textScale(10),
  },
});
export default styles;
