import {StyleSheet} from 'react-native';
import colors from '../../../../../../constants/colors';
import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import fontFamily from '../../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  buttonContainer: {
    position: 'absolute',
    bottom: moderateScale(10),
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    alignSelf: 'center',
    top: moderateScale(80),
  },
  buttonTitle: {
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(18),
  },
});

export default styles;
