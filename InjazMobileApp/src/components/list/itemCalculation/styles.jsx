import {Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

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
    backgroundColor: colors.WHITE,

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
    marginTop: moderateScale(5),
  },
  itemTitle: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
  },
  itemValue: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
  },
  dottedLine: {
    width: '100%',
    height: moderateScale(1.5),
    tintColor: colors.GREY_LIGHT,
  },
});
export default styles;
