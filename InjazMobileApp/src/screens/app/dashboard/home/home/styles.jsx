import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  headerContainer: {
    height: Platform.OS === 'ios' ? moderateScale(120) : moderateScale(80),
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
  },
  contentContainerStyle: {paddingBottom: moderateScale(60), flexGrow: 1},

  titleCategories: {
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.NAVY_BLUE,
    marginHorizontal: moderateScale(18),
    textAlign: 'left',
  },
  swiperStyle: {
    height: moderateScale(280),
    width: Dimensions.get('window').width - 20,
    marginStart: moderateScale(10),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    top: moderateScale(-45),
  },
  dotStyle: {
    marginTop: Platform.OS === 'ios' ? moderateScale(30) : moderateScale(600),
  },
  activeDotStyle: {
    marginTop: Platform.OS === 'ios' ? moderateScale(20) : moderateScale(600),
  },
  termBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerStyle: {
    height: Platform.OS === 'ios' ? moderateScale(120) : moderateScale(80),
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(13),
  },
  titlePopularCars: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  titleViewAll: {
    color: colors.DARK_GREY,
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
});
export default styles;
