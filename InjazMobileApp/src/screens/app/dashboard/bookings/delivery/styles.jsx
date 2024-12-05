import {StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  textRegular: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(12),
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'left',
  },
  sectionTitleContainer: {
    marginTop: moderateScale(18),
  },
  textBold: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(17),
    color: colors.NAVY_BLUE,
    textAlign: 'left',
  },
  inputFieldContainer: {
    marginTop: moderateScale(10),
  },
  inputFieldPlaceholder: {
    fontSize: textScale(14),
    color: 'rgba(0,0,0,0.5)',
    fontFamily: fontFamily.POPPINS_REGULAR,
    marginTop: moderateScale(5),
  },
  inputFieldIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
    left: moderateScale(10),
  },
  inputField: {
    width: '93%',
    borderWidth: 0.3,
    borderColor: colors.GREEN,
    borderRadius: moderateScale(10),
    paddingStart: moderateScale(10),
    height: moderateScale(50),
    textAlign: 'left',
  },
  imageContainer: {
    marginTop: moderateScale(10),
  },
  locationImage: {
    width: '100%',
    height: moderateScale(250),
  },
  collapsibleViewContainer: {
    marginTop: moderateScale(20),
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
    borderColor: colors.GREY_LIGHT,
  },
  collapsibleViewContent: {
    margin: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chevronIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    bottom: moderateScale(6),
    left: moderateScale(10),
  },
  collapsibleContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteContainer: {
    marginTop: moderateScale(20),
    width: '99%',
    marginStart: moderateScale(10),
  },
  multilineInputField: {
    height: 100,
    width: '100%',
    borderWidth: 0.3,
    borderColor: colors.GREEN,
    borderRadius: moderateScale(10),
    paddingStart: moderateScale(10),
    marginTop: moderateScale(20),
    textAlign: 'left',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  mapStyle: {
    height: moderateScale(200),
    width: '100%',
  },
});

export default styles;
