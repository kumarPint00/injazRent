import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  favoriteIcon: {
    tintColor: 'red',
    width: 20,
    height: 20,
  },
  image: {
    width: moderateScale(200),
    height: moderateScale(150),
    alignSelf: 'center',
  },
  detailsContainer: {
    marginVertical: 5,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
  detailValue: {
    textAlign: 'right',
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.BLACK,
  },
  titleCategory: {
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
});
export default styles;
