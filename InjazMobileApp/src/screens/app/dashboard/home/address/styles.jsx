import {StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import {moderateScale} from '../../../../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  addressContainer: {
    margin: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
