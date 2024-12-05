import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import images from '../../constants/images';
import colors from '../../constants/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';

const CollapsibleView = ({
  title,
  isContentVisible,
  toggleContentVisibility,
  children,
}) => {
  const containerStyle = {
    marginTop: moderateScale(20),
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
    paddingBottom: isContentVisible ? moderateScale(10) : 0,
    borderColor: colors.GREY_LIGHT,
  };

  const touchableStyle = {
    padding: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const textStyle = {
    fontSize: textScale(18),
    fontFamily: fontFamily.POPPINS_BOLD,
    color: colors.NAVY_BLUE,
    flex: 1,
    textAlign: 'left',
  };

  const imageStyle = {
    width: moderateScale(25),
    height: moderateScale(25),
    bottom: moderateScale(6),
    left: moderateScale(10),
    transform: [{rotate: isContentVisible ? '180deg' : '0deg'}],
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={toggleContentVisibility}
        activeOpacity={0.9}
        style={touchableStyle}>
        <Text style={textStyle}>{title}</Text>
        <Image source={images.CHEVRON_UP} style={imageStyle} />
      </TouchableOpacity>
      {isContentVisible && children}
    </View>
  );
};

export default CollapsibleView;
