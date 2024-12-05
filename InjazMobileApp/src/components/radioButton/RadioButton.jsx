// RadioButton.js

import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './styles'; // You need to create a separate styles file
import {moderateScale} from '../../styles/responsiveSize';

const RadioButton = ({label, isSelected, onPress, imageSource}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButton}>
      <View
        style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
        {isSelected && <View style={styles.radioInner} />}
      </View>
      <Image
        resizeMode="contain"
        source={imageSource}
        style={{
          width: moderateScale(30),
          height: moderateScale(30),
          marginStart: moderateScale(10),
        }}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
