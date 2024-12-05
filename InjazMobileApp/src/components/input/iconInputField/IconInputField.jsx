import React from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import colors from '../../../constants/colors';
import {moderateScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';

const IconInputField = ({
  iconSource,
  placeholder,
  rightIcon,
  label,
  onRightIconPress,
  activeOpacity,
  autoCapitalize,
  autoCorrect,
  errorMessage,
  value,
  keyboardType,
  selectedLanguage, // Add selectedLanguage prop
  editable,
  ...inputProps
}) => {
  // Define the placeholder text based on whether a value is present or not
  const computedPlaceholder = value ? value : placeholder;

  // Define the placeholder text based on the selected language
  const placeholderText =
    selectedLanguage === 'en' ? computedPlaceholder : placeholder;

  return (
    <View style={{marginTop: moderateScale(20)}}>
      {!!label && (
        <Text
          style={{
            marginBottom: moderateScale(2),
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            color: colors.BLACK,
            textAlign: 'left',
          }}>
          {label}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: errorMessage ? 'red' : colors.GREY_SECONDAY,
          borderBottomWidth: 0.4,
          height: moderateScale(45),
          alignItems: 'center',
          borderRadius: moderateScale(5),
        }}>
        <Image
          source={iconSource}
          style={{
            width: moderateScale(20),
            height: moderateScale(20),
            marginHorizontal: moderateScale(10),
          }}
        />
        <TextInput
          value={value}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          placeholder={placeholderText} // Use placeholderText here
          placeholderTextColor={colors.DARK_GREY}
          keyboardType={keyboardType}
          editable={editable}
          style={{
            color: colors.DARK_GREY,
            flex: 1,
            textAlign: 'left',
          }}
          {...inputProps}
        />
        {!!rightIcon && (
          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={onRightIconPress}>
            <Image
              source={rightIcon}
              style={{
                width: moderateScale(20),
                height: moderateScale(20),
                marginHorizontal: moderateScale(10),
                tintColor: colors.RADIO_BUTTON,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {!!errorMessage && (
        <Text
          style={{
            color: 'red',
            marginTop: moderateScale(5),
            marginStart: moderateScale(5),
            textAlign: 'left',
          }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default IconInputField;
