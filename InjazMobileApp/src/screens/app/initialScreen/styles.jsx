import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCountry: {
    color: colors.WHITE,
    fontSize: textScale(30),
    fontFamily: fontFamily.POPPINS_BOLD,
    bottom: moderateScale(30),
  },
  translaterContainer: {
    marginTop: moderateScaleVertical(67),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  translatorIcon: {width: moderateScale(48), height: moderateScale(48)},
  dropDownTranslator: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTranslator: {
    marginEnd: moderateScale(10),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(19),
    color: colors.WHITE,
  },
  dropDownTransIcon: {
    width: moderateScale(15),
    height: moderateScale(15),
    tintColor: colors.WHITE,
  },
  buttonContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(20),
  },
  buttonTextStyle: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(16),
    color: colors.BLACK,
  },
  buttonStyle: {
    backgroundColor: colors.WHITE,
    width: '60%',
    borderRadius: moderateScale(40),
  },
});
export default styles;
