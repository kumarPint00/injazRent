import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(6),
    marginTop: moderateScaleVertical(10),
    marginStart: moderateScale(10),
    marginEnd: moderateScale(4),
  },
  itemContainer: {
    height: moderateScale(68),
    width: moderateScale(111.4),
    borderRadius: moderateScale(10),
  },
});
export default styles;
