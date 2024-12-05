import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../../styles/responsiveSize';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    marginVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5, // Add elevation
    shadowColor: '#000', // Add shadow color
    shadowOffset: {width: 0, height: 2}, // Add shadow offset
    shadowOpacity: 0.25, // Add shadow opacity
    shadowRadius: 3.84, // Add shadow radius
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default styles;
