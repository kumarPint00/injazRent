import {StyleSheet, Platform} from 'react-native';
import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import colors from '../../../../../../constants/colors';
import fontFamily from '../../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  screenContainer: {
    flexGrow: 1,
    marginHorizontal: moderateScale(20),
  },
  tabContainer: {
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  scrollContentContainer: {
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    height: moderateScale(80),
    width: '100%',
    ...Platform.select({
      android: {
        backgroundColor: colors.WHITE,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  screenContainer: {
    flex: 1,
    marginHorizontal: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  iosShadow: {
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  androidElevation: {
    elevation: 2,
    backgroundColor: colors.WHITE,
    paddingVertical: moderateScale(3),
    borderRadius: moderateScale(10),
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    width: '99%',
    marginStart: 1,
  },
  flatListContent: {
    backgroundColor: colors.WHITE,
    paddingVertical: 5,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    marginHorizontal: moderateScale(10),
  },
  editIcon: {
    width: 30,
    height: 30,
  },
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
