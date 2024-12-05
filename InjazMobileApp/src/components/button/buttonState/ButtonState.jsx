// ButtonComponent.js
import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native'; // Import Platform
import colors from '../../../constants/colors';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const ButtonState = ({title, isActive, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: isActive ? colors.NAVY_BLUE : colors.WHITE,
        width: moderateScale(140),
        borderRadius: 10,
        borderWidth: 1,
        padding: moderateScale(12),
        borderColor: colors.GREY_LIGHT,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...Platform.select({
          // Ensure Platform import
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
      }}>
      <Text
        style={{
          color: isActive ? colors.WHITE : colors.BLACK,
          fontSize: textScale(16),
          fontFamily: fontFamily.POPPINS_BOLD,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonState;
