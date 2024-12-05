// styles.js

import {Platform, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: colors.WHITE,
    width: '85%',
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    height: moderateScale(250),
  },
  titleText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    marginBottom: moderateScale(20),
    textAlign: 'center',
  },
  radioContainer: {
    marginTop: moderateScale(10),
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(10),
    bottom: 10,
  },
  radioButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(20),
    bottom: 10,
  },
  radioButtonInner: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(10),
  },
  radioButtonInnerSelected: {
    width: moderateScale(12),
    height: moderateScale(12),
    borderRadius: moderateScale(6),
    backgroundColor: colors.BLACK,
  },
  radioText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    marginLeft: moderateScale(10),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: Platform.OS == 'android' ? moderateScale(20) : moderateScale(25),
  },
  button: {
    backgroundColor: colors.BLACK,
    width: moderateScale(180),
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(10),
    alignSelf: 'center',
    top: Platform.OS === 'android' ? moderateScale(10) : moderateScale(25),
  },
  buttonText: {
    fontSize: textScale(16),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'center',
  },
  radioButtonSelected: {
    // backgroundColor: colors.NAVY_BLUE,
  },
});

export default styles;
