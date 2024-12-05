import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../../../constants/colors';
import {
  moderateScale,
  textScale,
} from '../../../../../../styles/responsiveSize';
import fontFamily from '../../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: colors.WHITE,
  },
  backgroundContainer: {
    flexDirection: 'row',
    backgroundColor: colors.BLACK,
    height: moderateScale(140),
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(5),
  },
  dividerStyle: {
    height: '60%',
    borderWidth: moderateScale(0.4),
    borderColor: colors.WHITE,
  },
  containerStyle: {
    marginTop: moderateScale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonTitleStyle: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(18),
    color: colors.BLACK,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    height: moderateScale(54),
    borderWidth: moderateScale(0.5),
    borderColor: colors.DARK_GREY,
  },
});

export default styles;
