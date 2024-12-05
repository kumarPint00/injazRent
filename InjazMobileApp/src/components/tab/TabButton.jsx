import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const TabButton = ({title, isActive, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive ? styles.activeButton : styles.inactiveButton,
        style, // Apply custom styles
      ]}
      onPress={onPress}>
      <Text style={isActive ? styles.activeText : styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;
