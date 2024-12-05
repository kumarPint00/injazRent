import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import InputField from '../InputField/InputField';
import styles from './styles';
import images from '../../../constants/images';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/slices/language_slices';
const AuthInputField = ({
  label,
  labelStyle,
  value,
  placeholder,
  titleStyle = {},
  keyboardType,
  maxLength,
  error,
  touched,
  handleChange,
  handleBlur,
  autoCapitalize,
  autoCorrect,
  rightIcon,
  onChangeText,
  placeholderTextColor,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const selectedLanguage = useSelector(selectLanguage);
  const placeholderAlignment = selectedLanguage === 'en' ? 'left' : 'left';

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={[styles, titleStyle]}>{label}</Text>}
      <InputField
        value={value}
        onBlur={handleBlur}
        inputStyle={[styles.inputStyle, placeholderAlignment]}
        placeholder={placeholder}
        labelStyle={labelStyle}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        secureTextEntry={isPasswordVisible}
        textAlign={placeholderAlignment}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
      />
      {rightIcon && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={!isPasswordVisible ? images.HIDE : images.SHOW}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      )}
      {touched && error && (
        <Text
          style={[
            styles.errorText,
            isPasswordError(error) && styles.passwordErrorText,
          ]}>
          {/* {touchedMessage[selectedLanguage]} */}
          {error}
        </Text>
      )}
    </View>
  );
};

// Helper function to check if the error is related to the password
const isPasswordError = error => {
  return error.toLowerCase().includes('password');
};

export default AuthInputField;
