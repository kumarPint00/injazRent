import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: moderateScale(50),
    height: moderateScale(340),
    width: '90%',
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(10),
    elevation: moderateScale(10),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    marginTop: moderateScale(30),
    marginStart: moderateScale(20),
    justifyContent: 'center',
  },
  cardContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: moderateScale(17),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_MEDIUM,
    marginHorizontal: 10,
    textAlign: 'left',
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: textScale(12),
    fontFamily: fontFamily.POPPINS_REGULAR,
    marginHorizontal: moderateScale(10),
    marginStart: moderateScale(20),
    textAlign: 'left',
  },
  iconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    left: moderateScale(2),
  },
  titleContainer: {
    marginHorizontal: moderateScale(25),
    bottom: moderateScale(14),
  },
  textHow: {
    color: colors.NAVY_BLUE,
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
});
export default styles;
