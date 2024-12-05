import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(90),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: '48%',
    marginVertical: moderateScaleVertical(18),
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  androidShadow: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconContainer: {
    width: moderateScale(14),
    height: moderateScale(14),
    borderColor: colors.GREEN,
    borderWidth: 1,
    borderRadius: moderateScale(7),
    marginHorizontal: moderateScale(10),
    bottom: moderateScale(5),
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    marginEnd: moderateScale(23),
  },
  description: {
    fontSize: textScale(8),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    justifyContent: 'center',
    marginHorizontal: moderateScale(20),
    textAlign: 'justify',
    alignItems: 'center',
  },
  arrowContainer: {
    backgroundColor: colors.WHITE,
    width: moderateScale(40),
    height: moderateScale(16),
    marginTop: moderateScale(6),
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginStart: moderateScale(133),
    borderBottomRightRadius: moderateScale(10),
  },
  arrowImage: {
    width: moderateScale(20),
    height: moderateScale(20),
    right: moderateScale(10),
    tintColor: colors.GREEN,
  },
});
export default styles;
