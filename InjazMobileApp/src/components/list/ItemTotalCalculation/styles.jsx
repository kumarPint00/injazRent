import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  listItemContainer: {
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    margin: moderateScale(10),
    bottom: moderateScale(5),
    height: 200,
    ...Platform.select({
      android: {
        elevation: Platform.OS === 'android' ? moderateScale(3) : 0,
        backgroundColor: colors.WHITE,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(5),
  },
  itemTitle: {
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
  },
  itemValue: {
    fontFamily: fontFamily.POPPINS_BOLD,
  },
  dottedLine: {
    width: '100%',
    height: moderateScale(1.5),
    tintColor: colors.GREY_LIGHT,
  },
});
export default styles;
