import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import styles from './styles';

const SelfPickUpButton = ({branchName, dateTime, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.container,
        Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
      ]}>
      <Text style={styles.selfPickUpText}>{title}</Text>
      <Text style={styles.branchNameText}>{branchName}</Text>
      <Text style={styles.dateTimeText}>{dateTime}</Text>
    </TouchableOpacity>
  );
};

export default SelfPickUpButton;
