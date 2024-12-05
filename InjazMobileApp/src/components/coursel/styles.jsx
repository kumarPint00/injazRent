import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
const THUMB_SIZE = 64;
const SPACING = 18;

const styles = StyleSheet.create({
  swiperStyle: {
    height: moderateScale(200),
    width: Dimensions.get('window').width,
    marginStart: moderateScale(10),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
  container: {
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(10),
  },
  flatListContainer: {
    position: 'absolute',
    top: moderateScale(140),
    width: '90%',
    left: moderateScale(40),
  },
  thumbImage: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    marginRight: SPACING,
    borderRadius: moderateScale(10),
    borderColor: colors.RADIO_BG,
    borderWidth: 1,
  },
  selectedThumb: {
    borderWidth: 4,
    borderColor: colors.GREEN,
  },
  likeContainer: {
    position: 'absolute',
    top: moderateScale(30),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  likeIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
    bottom: moderateScale(10),
    left: moderateScale(10),
  },
  imageStyle: {width: '100%', height: '100%'},

  dot: {
    width: moderateScale(6),
    height: moderateScale(6),
    borderRadius: moderateScale(4),
    backgroundColor: colors.WHITE,
    marginHorizontal: moderateScale(4),
  },

  activeDot: {
    backgroundColor: colors.BLUE,
    width: moderateScale(20),
  },
  indicatorContainer: {
    flexDirection: 'row',
    bottom: moderateScale(25),
  },
});
export default styles;
