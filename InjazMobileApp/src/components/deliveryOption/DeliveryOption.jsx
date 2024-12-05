import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const DeliveryOption = ({location, delivery}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.deliveryText}>{delivery}</Text>
      </View>
      <View style={styles.locationTextContainer}>
        <Text style={styles.locationText}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeliveryOption;
