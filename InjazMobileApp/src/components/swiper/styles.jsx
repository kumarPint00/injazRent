import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  swiper: {height: moderateScale(200), backgroundColor: colors.WHITE},
  customDotStyle: {
    width: moderateScale(10),
    height: moderateScale(3),
    borderRadius: moderateScale(5),
    marginHorizontal: moderateScale(5),
    backgroundColor: colors.RADIO_BUTTON_BORDER,
    top: moderateScale(20),
  },

  customActiveDotStyle: {
    width: moderateScale(10),
    height: moderateScale(3),
    borderRadius: moderateScale(5),
    marginHorizontal: moderateScale(5),
    backgroundColor: colors.BLUE,
    top: moderateScale(20),
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
});
export default styles;
