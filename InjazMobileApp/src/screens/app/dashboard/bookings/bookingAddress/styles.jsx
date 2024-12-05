import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: colors.WHITE,
  },
  detailsContainer: {
    marginTop: moderateScale(10),
    marginStart: moderateScale(18),
  },
  detailsTitle: {
    fontSize: textScale(17),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.NAVY_BLUE,
    textAlign: 'left',
  },
  timeContainer: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  arrowIcon: {
    width: moderateScale(30),
    height: moderateScale(30),
    alignSelf: 'center',
    tintColor: colors.BLUE,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabContainer: {
    marginTop: moderateScale(10),
  },
  scrollContentContainer: {
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    width: Platform.OS == 'android' ? '98%' : '95%',
  },
  tabButtonContainer: {
    width: Platform.OS == 'android' ? '96.5%' : '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(2),
    borderRadius: moderateScale(10),
    borderColor: colors.GREY_LIGHT,
    borderWidth: 0.4,
  },
  tabButton: {
    width: '46%',
  },
  screenContainer: {
    flex: 1,
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  buttonStateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 20,
    marginVertical: 20,
  },
});

export default styles;
