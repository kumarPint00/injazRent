import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.BLACK,
    borderBottomWidth: moderateScale(0.3),
    paddingVertical: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  titleStyle: {
    color: colors.BLACK,
    fontSize: textScale(13),
    fontFamily: fontFamily.POPPINS_BOLD,
    flex: 0.6,
    alignSelf: 'flex-start',
    textAlign: 'justify',
  },
  titleValueStyle: {
    color: colors.BLACK,
    fontSize: textScale(13),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    flex: 0.6,
    alignSelf: 'flex-start',
  },
});
export default styles;
