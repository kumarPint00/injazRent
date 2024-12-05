import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  dividerStyle: {
    width: '95%',
    borderBottomWidth: 0.3,
    borderBottomColor: colors.DARK_GREY,
    alignSelf: 'center',
    position: 'absolute',
    top: moderateScale(34),
    marginStart: moderateScale(10),
  },
});
export default styles;
