import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const OptionalInstructions = ({containerStyle, textStyle, location}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{location}</Text>
    </View>
  );
};

export default OptionalInstructions;
