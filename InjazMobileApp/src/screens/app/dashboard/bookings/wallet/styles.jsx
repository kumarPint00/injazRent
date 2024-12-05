import {StyleSheet} from 'react-native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';
import colors from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
  imageStyle: {
    width: '100%',
    height: moderateScale(200),
  },
  itemContainer: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.GREY_LIGHT,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(14),
    marginVertical: moderateScale(16),
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconBackground: {
    borderWidth: 0.2,
    borderColor: colors.GREY_LIGHT,
    padding: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  dateText: {
    top: moderateScale(5),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    fontSize: textScale(10),
    textAlign: 'left',
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: moderateScale(20),
  },
  receivedText: {
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    fontSize: textScale(14),
    bottom: moderateScale(5),
    textAlign: 'left',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.BLACK,
    fontSize: textScale(14),
    textAlign: 'left',
  },
});

export default styles;
