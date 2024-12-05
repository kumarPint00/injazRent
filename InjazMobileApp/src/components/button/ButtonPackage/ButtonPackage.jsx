import React from 'react';
import styles from './styles';
import {TouchableOpacity, View, Text} from 'react-native';

const ButtonPackage = ({titlePackage, titleDaily}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.container,
          Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow,
        ]}>
        <Text style={styles.titlePackage}>{titlePackage}</Text>
        <Text style={styles.titleDaily}>{titleDaily}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPackage;
