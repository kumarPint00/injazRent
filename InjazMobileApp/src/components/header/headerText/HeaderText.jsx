import {View, Text, Platform, Pressable} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const HeaderText = ({titleNext, titleSkip, onPress}) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? moderateScale(55) : moderateScale(1),
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(20),
      }}>
      <Pressable onPress={onPress}>
        <Text
          style={{
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            fontSize: textScale(18),
            color: colors.WHITE,
          }}>
          {titleNext}
        </Text>
      </Pressable>
      <Pressable>
        <Text
          style={{
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            fontSize: textScale(18),
            color: colors.WHITE,
          }}>
          {titleSkip}
        </Text>
      </Pressable>
    </View>
  );
};

export default HeaderText;
