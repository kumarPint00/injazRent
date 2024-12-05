import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  detailsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(8),
    padding: moderateScale(5),
    top: moderateScale(10),
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: moderateScale(8),
  },
  carTitle: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(20),
    color: colors.BLACK,
  },
  carSubtitle: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(20),
    color: colors.BLACK,
  },
  detailRow: {
    flexDirection: 'column',
  },

  carouselContainer: {
    marginBottom: moderateScale(10),
  },
  keyContainer: {
    flex: 1,
  },
  valueContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailKey: {
    top: moderateScale(25),
    fontSize: textScale(14),
    fontWeight: 'bold',
    color: '#333333',
    marginVertical: moderateScale(10),
  },
  detailValue: {
    fontSize: textScale(12),
    color: colors.NAVY_BLUE,
    textAlign: 'center',
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    marginStart: moderateScale(5),
    bottom: moderateScale(4),
  },
  keyContainer: {
    flexDirection: 'row',
  },
  valueContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingBottom: moderateScale(10),
  },
  icon: {
    width: moderateScale(18),
    height: moderateScale(18),
    bottom: moderateScale(4),
  },
});

export default styles;
