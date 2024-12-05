import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../../styles/responsiveSize';
import colors from '../../../../constants/colors';
import fontFamily from '../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  imageSlider: {
    width: moderateScale(25),
    height: moderateScale(25),
    alignSelf: 'center',
  },
  imageSliderStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderStyle: {
    fontSize: textScale(16),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    right: moderateScale(10),
    alignSelf: 'center',
    top: Platform.OS === 'ios' ? moderateScale(1) : moderateScale(3),
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginStart: moderateScale(10),
  },
  inputContainer: {width: '100%'},
  filterContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(30),
    marginHorizontal: moderateScale(20),
    justifyContent: 'space-between',
  },
  listContainer: {
    marginTop: moderateScaleVertical(30),
    marginHorizontal: moderateScale(10),
  },
  noCarsContainer: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height / 1.6
        : Dimensions.get('window').height / 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleCarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  contentContainer: {
    ...Platform.select({
      ios: {
        // styles for iOS
        paddingBottom: moderateScale(280),
      },
      android: {
        // styles for Android
      },
    }),
  },
});
export default styles;
