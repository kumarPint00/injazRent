import {StyleSheet} from 'react-native';

import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalInnerView: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    // Add elevation and shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  modalImageContainer: {
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    height: moderateScale(200),
    marginHorizontal: 8,
    borderRadius: 10,
    marginHorizontal: 20,
    borderColor: 'gray',
  },
  btnCancel: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(15),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageCancel: {
    width: moderateScale(18),
    height: moderateScale(18),
    left: moderateScale(8),
  },
  cameraContainer: {
    justifyContent: 'center',
    width: '100%',
    marginStart: 10,
    marginTop: 2,
  },
  btnCamera: {
    flexDirection: 'row',
    bottom: 10,
    marginHorizontal: 20,
  },
  imageCamera: {
    width: moderateScale(35),
    height: moderateScale(30),
    tintColor: colors.BLACK,
    top: 15,
  },
  cameraText: {
    color: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    top: moderateScale(16),
  },
  gallerybtn: {
    flexDirection: 'row',

    top: 10,
    marginHorizontal: 20,
  },
  galleryImage: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: colors.BLACK,
    marginTop: 15,
  },
  galleryText: {
    color: colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: textScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    top: moderateScale(16),
    marginStart: moderateScale(6),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(60),
  },
  titleText: {
    color: 'black',
    top: moderateScaleVertical(50),
    fontSize: 14,
    color: colors.PRIMARY_BLACK,
  },
  subTitleText: {
    color: 'black',
    top: moderateScaleVertical(70),
    fontSize: 12,
    color: colors.BLACK,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnstyle: {
    width: '60%',
    top: moderateScale(5),
  },
  cancelbtnStyle: {
    width: '60%',
    top: moderateScale(5),
  },
  closeIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
});

export default styles;
