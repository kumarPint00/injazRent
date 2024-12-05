import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

const AuthButton = ({label, isActive, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: 'transparent',
    }}>
    <Text style={styles.text}>{label}</Text>
    {isActive && <View style={styles.activeUnderline} />}
  </TouchableOpacity>
);

export default AuthButton;
