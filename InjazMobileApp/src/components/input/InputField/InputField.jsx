import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import React from 'react';
import {useState} from 'react';

const InputField = ({
  value,
  onChangeText,
  placeholder,
  leftIcon,
  secureTextEntry,
  placeholderTextColor,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  maxLength,
  editable,
  titleResend,
  placeholderStyle,
  imageStyle = {},
  placeholderAlignment,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const textAlign = placeholderAlignment === 'ar' ? 'left' : 'left';

  return (
    <View style={styles.container}>
      {leftIcon ? (
        <Image resizeMode="contain" source={leftIcon} style={imageStyle} />
      ) : null}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={!isPasswordVisible && secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        style={[styles.inputStyle, {textAlign}, placeholderStyle]}
        maxLength={maxLength}
        editable={editable}
      />

      {titleResend && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.titleResend}>{titleResend}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
