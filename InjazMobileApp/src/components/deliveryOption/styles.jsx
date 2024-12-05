import {StyleSheet} from 'react-native';

import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: moderateScale(80),
    backgroundColor: colors.BLUE,
    borderRadius: moderateScale(10),
    marginVertical: moderateScaleVertical(20),
  },
  textContainer: {
    padding: moderateScale(10),
  },
  deliveryText: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(14),
    color: colors.WHITE,
    textAlign: 'left',
  },
  locationTextContainer: {
    bottom: moderateScale(15),
    padding: 10,
  },
  locationText: {
    fontFamily: fontFamily.POPPINS_REGULAR,
    fontSize: textScale(12),
    color: colors.WHITE,
    textAlign: 'left',
  },
});

export default styles;
