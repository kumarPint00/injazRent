import React from 'react';
import {TouchableOpacity, Text, Platform} from 'react-native';
import styles from './styles';

const ButtonTime = ({date, time}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.container,
        Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
      ]}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTime;
