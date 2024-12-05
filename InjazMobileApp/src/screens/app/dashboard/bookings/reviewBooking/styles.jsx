import {Platform, StyleSheet} from 'react-native';
import colors from '../../../../../constants/colors';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import fontFamily from '../../../../../styles/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  imageContainer: {
    height: moderateScale(200),
    backgroundColor: colors.NAVY_BLUE,
  },
  image: {
    width: '100%',
    height: moderateScale(170),
  },
  vehicleInfoContainer: {
    marginHorizontal: moderateScale(15),
    flexDirection: 'row',
    bottom: moderateScale(8),
  },
  vehicleName: {
    fontSize: moderateScale(20),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_BOLD,
  },
  vehicleModel: {
    fontSize: moderateScale(20),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_REGULAR,
    marginStart: moderateScale(5),
  },
  buttonContainer: {
    marginTop: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(20),
  },
  editButton: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
  },
  editIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
  },
  pickupReturnContainer: {
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickupReturnText: {
    fontSize: textScale(20),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginStart: moderateScale(5),
  },
  pickupReturnOptionsContainer: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
  },
  pickupReturnOption: {
    flex: 1,
    height: moderateScale(90),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    margin: moderateScale(5),
    ...Platform.select({
      android: {
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  optionTitle: {
    fontSize: textScale(16),
    color: colors.GREEN,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginStart: moderateScale(5),
    marginTop: moderateScale(6),
  },
  optionDescription: {
    fontSize: textScale(14),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    marginStart: moderateScale(5),
  },
  documentsContainer: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listContainer: {
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    margin: moderateScale(10),
    ...Platform.select({
      android: {
        elevation: Platform.OS === 'android' ? moderateScale(3) : 0,
        backgroundColor: colors.WHITE,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: colors.WHITE,
      },
    }),
  },
  selfPickupContainer: {
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBackground: {
    height: moderateScale(200),
    backgroundColor: colors.NAVY_BLUE,
  },
  imageStyle: {width: '100%', height: moderateScale(170)},
  titleContainer: {
    marginHorizontal: moderateScale(15),
    flexDirection: 'row',
    bottom: moderateScale(8),
  },
  titleCarName: {
    fontSize: textScale(20),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_BOLD,
  },
  subTitleCarStyle: {
    fontSize: textScale(20),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_REGULAR,
    marginStart: moderateScale(5),
  },
  scrollContainer: {
    flexGrow: 1,
  },
  pickUpContainer: {
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
  },
  titlePickUpReturn: {
    fontSize: textScale(18),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginStart: moderateScale(5),
    textAlign: 'left',
  },
  editIconStyle: {width: moderateScale(25), height: moderateScale(25)},
  flatListContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  //ListHeader
  pickUpTitleContainer: {
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titlePickUpReturn: {
    fontSize: textScale(18),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginStart: moderateScale(5),
  },
  insuranceContainer: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(10),
  },
  titleInsurance: {
    fontSize: moderateScale(18),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginStart: moderateScale(5),
    marginTop: moderateScale(6),
    textAlign: 'left',
  },
  insuranceButtonContainer: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  viewRingContainer: {
    width: moderateScale(14),
    height: moderateScale(14),
    borderColor: colors.BLUE,
    borderWidth: 1,
    borderRadius: moderateScale(7),
    marginHorizontal: moderateScale(10),
    bottom: moderateScale(5),
    backgroundColor: colors.WHITE,
  },
  titleComprehensive: {
    fontSize: moderateScale(10),
    color: colors.BLUE,
    fontFamily: fontFamily.POPPINS_MEDIUM,
  },
  titleFree: {
    fontSize: moderateScale(10),
    color: colors.RED,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    alignSelf: 'flex-end',
    marginEnd: moderateScale(19),
  },
  titleNo: {
    fontSize: moderateScale(8),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    justifyContent: 'center',
    marginHorizontal: moderateScale(20),
    textAlign: 'justify',
    alignItems: 'center',
  },
  arrowContainer: {
    backgroundColor: colors.BLUE,
    width: moderateScale(40),
    height: moderateScale(16),
    marginTop:
      Platform.OS == 'android' ? moderateScale(-10) : moderateScale(10),
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginStart:
      Platform.OS === 'android' ? moderateScale(136) : moderateScale(143),
    borderBottomRightRadius: moderateScale(10),
  },
  imageArrow: {
    width: moderateScale(20),
    height: moderateScale(20),
    right: moderateScale(10),
  },
  buttonFullContainer: {
    marginHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginStart: moderateScale(25),
  },
  buttonReserve: {
    width: '60%',
    backgroundColor: colors.BLUE,
    borderRadius: moderateScale(30),
  },
  titleReserve: {
    fontSize: textScale(20),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    textAlign: 'left',
  },
  titleFullInsurance: {
    fontSize: moderateScale(10),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    marginEnd: moderateScale(23),
    textAlign: 'left',
  },
  titleNoAdditional: {
    fontSize: moderateScale(8),
    color: colors.WHITE,
    fontFamily: fontFamily.POPPINS_MEDIUM,
    justifyContent: 'center',
    marginHorizontal: moderateScale(20),
    textAlign: 'left',
    alignItems: 'center',
  },
  textAddOn: {
    fontSize: moderateScale(18),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_BOLD,
    marginTop: moderateScale(20),
    textAlign: 'left',
  },
  addOnContainer: {marginHorizontal: moderateScale(10)},
  arrowWhiteImage: {
    width: moderateScale(20),
    height: moderateScale(20),
    right: moderateScale(10),
    tintColor: colors.BLUE,
    textAlign: 'left',
  },
  arrowWhiteContainer: {
    backgroundColor: colors.WHITE,
    width: moderateScale(40),
    height: moderateScale(16),
    marginTop: Platform.OS == 'android' ? moderateScale(6) : moderateScale(24),
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginStart:
      Platform.os === 'android' ? moderateScale(125.5) : moderateScale(132.7),
    borderBottomRightRadius: moderateScale(10),
  },
  buttonFullInsurance: {
    height: moderateScale(90),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: '48%',
    ...Platform.select({
      android: {
        elevation: 3,
        backgroundColor: colors.BLUE,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      ios: {
        backgroundColor: colors.BLUE,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  buttonFreeContainer: {
    height: moderateScale(90),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: '48%',
    ...Platform.select({
      android: {
        elevation: 3,
        backgroundColor: colors.WHITE,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
});

export default styles;
