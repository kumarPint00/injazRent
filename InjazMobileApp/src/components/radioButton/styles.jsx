import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../constants/colors';

export default StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  radioCircle: {
    height: moderateScale(16),
    width: moderateScale(16),
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(0.2),
    borderColor: colors.RADIO_BUTTON,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(10),
    backgroundColor: colors.RADIO_BG,
    marginHorizontal: moderateScale(12),
  },

  selectedRb: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: colors.RADIO_SELECTED,
  },
  radioText: {
    fontSize: textScale(16),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
  cityList: {
    marginTop: moderateScaleVertical(10),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(13),
    paddingBottom: moderateScale(17),
    textAlign: 'left',
  },
  cityRadioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
    marginHorizontal: moderateScale(18),
    paddingVertical: moderateScale(10),
    paddingBottom: moderateScale(8),
    borderColor: colors.RADIO_BUTTON_BORDER,
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(5),
  },
  selectedCityText: {
    fontSize: textScale(18),
    fontWeight: 'bold',
    color: colors.BLACK,
    flex: 1,
    marginStart: moderateScale(10),
    textAlign: 'left',
  },
  titleCountry: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(20),
    color: colors.WHITE,
  },
  dropdownContainer: {
    width: '95%',
    backgroundColor: colors.WHITE,
    height: moderateScale(45),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: moderateScale(10),
    borderRadius: moderateScale(13),
    flexDirection: 'row',
  },

  dropDownCountryContainer: {
    width: '95%',
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center', // Center the content horizontally
    paddingRight: moderateScale(10),
    borderRadius: moderateScale(13),
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    marginVertical: moderateScale(10),
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    marginRight: moderateScale(10),
    flex: 1,
    marginHorizontal: moderateScale(20),
    textAlign: 'center',
  },
  dropdownImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  flagImage: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  titleCountry: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(30),
    color: colors.WHITE,
  },
  selectedCountryText: {
    color: colors.WHITE,
  },
  selectCity: {
    fontSize: textScale(17),
    color: colors.TITLE_COLOR,
    fontFamily: fontFamily.POPPINS_BOLD,
    padding: moderateScale(10),
    paddingStart: moderateScale(18),
    textAlign: 'left',
  },
  dropDownSelectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownView: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  // RadioButton View

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: colors.BLACK,
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.BLACK,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.BLACK,
  },
});
