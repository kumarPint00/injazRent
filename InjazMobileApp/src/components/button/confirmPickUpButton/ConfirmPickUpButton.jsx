import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import images from '../../../constants/images';

const ConfirmPickupButton = ({title, onPress, activeOpacity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={activeOpacity}
          style={styles.touchableOpacity}>
          <Image source={images.RIGHT} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default ConfirmPickupButton;
