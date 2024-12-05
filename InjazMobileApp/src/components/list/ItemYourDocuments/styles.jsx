import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(8),
    marginVertical: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.NAVY_BLUE,
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(8),
  },
  titleStyle: {
    fontSize: textScale(14),
    color: colors.NAVY_BLUE,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    alignSelf: 'center',
    paddingEnd: moderateScale(5),
    paddingStart: moderateScale(5),
  },
  subTitleStyle: {
    fontSize: textScale(14),
    color: colors.GREY_LIGHT,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    start: moderateScale(12),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(8),
    paddingEnd: moderateScale(5),
  },
});

export default styles;
