import {StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import {moderateScale} from '../../../../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  screenContainer: {
    flexGrow: 1,
    marginHorizontal: moderateScale(20),
  },
  tabContainer: {
    width: '96%',
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(5),
    marginStart: 10,
  },
  scrollContentContainer: {
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(2),
    borderRadius: moderateScale(10),
    ...Platform.select({
      android: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      ios: {
        elevation: 2,
        shadowColor: 'white',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  screenContainer: {
    flex: 1,
    marginHorizontal: 10,
    elevation: 3,
  },
  iosShadow: {
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  androidElevation: {
    elevation: 3,
    paddingVertical: moderateScale(3),
    borderRadius: moderateScale(10),
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    borderRadius: 20,
  },
});
export default styles;
