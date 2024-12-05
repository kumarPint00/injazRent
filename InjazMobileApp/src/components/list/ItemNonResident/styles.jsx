import {StyleSheet, Platform} from 'react-native';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
    marginHorizontal: moderateScale(2),
    borderRadius: moderateScale(10),
    backgroundColor: colors.WHITE,
    marginTop: 20,
    ...Platform.select({
      android: {
        elevation: Platform.OS === 'android' ? 3 : 0,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
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
  textContainer: {
    flex: 1,
    marginStart: moderateScale(10),
  },
  title: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    textAlign: 'left',
  },
  image: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  signature: {
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
    right: moderateScale(10),
    top: moderateScale(23),
  },
});

export default styles;
