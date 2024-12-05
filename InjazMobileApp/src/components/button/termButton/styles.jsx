import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    height: moderateScale(55),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(10),
    textAlign: 'left',
  },
  blueButton: {
    backgroundColor: colors.BLACK,
    flex: 0.45,
    textAlign: 'left',
  },
  greenButton: {
    backgroundColor: colors.BLUE,
    flex: 0.45,
    textAlign: 'left',
  },
  buttonText: {
    fontSize: textScale(15),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.WHITE,
    textAlign: 'left',
  },
  subText: {
    fontSize: textScale(10),
    fontFamily: fontFamily.POPPINS_REGULAR,
    color: colors.WHITE,
    textAlign: 'left',
  },
});

export default styles;
