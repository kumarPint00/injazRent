import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.REDDISH,
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
  },
  textStyle: {
    color: colors.WHITE,
    fontSize: textScale(12),
    textAlign: 'left',
  },
});
export default styles;
