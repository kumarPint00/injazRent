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
    marginBottom: moderateScale(10),
  },

  buttonUpdateStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
    height: moderateScale(54),
    borderWidth: moderateScale(0.5),
    borderColor: colors.DARK_GREY,
    marginBottom: moderateScale(10),
  },
  imageViewStyle: {
    width: '100%',
    height: moderateScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  buttonUpdateTitleStyle: {
    fontFamily: fontFamily.POPPINS_BOLD,
    fontSize: textScale(18),
    color: colors.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
export default styles;
