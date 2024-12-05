import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: moderateScale(200),
    backgroundColor: colors.NAVY_BLUE,
  },
  userInfoContainer: {
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    paddingVertical: moderateScale(50),
  },
  userInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'contain',
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  userInfoTextWrapper: {
    marginHorizontal: moderateScale(20),
    justifyContent: 'center',
  },
  username: {
    color: colors.WHITE,
    fontSize: moderateScale(16),
    fontFamily: fontFamily.POPPINS_MEDIUM,
  },
  userEmail: {
    color: colors.WHITE,
    fontSize: moderateScale(14),
    fontFamily: fontFamily.POPPINS_REGULAR,
  },
  editButtonContainer: {
    top: moderateScale(30),
    justifyContent: 'flex-end',
  },
  editButtonWrapper: {
    height: moderateScale(40),
    width: moderateScale(40),
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  listItemContainer: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.GREY_LIGHT,
    paddingVertical: moderateScaleVertical(11.4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  listItemImageContainer: {
    width: moderateScale(33),
    height: moderateScale(33),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  listItemImage: {
    width: moderateScale(15),
    height: moderateScale(15),
  },
  listItemTitle: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    fontSize: moderateScale(14),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
    textAlign: 'left',
  },
  listItemRightImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  whiteTintColor: {
    tintColor: colors.WHITE,
  },
});
