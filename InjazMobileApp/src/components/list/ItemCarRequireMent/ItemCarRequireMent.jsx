import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ItemCarFeatures = ({item}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleStyle}>{`${item.name}:`}</Text>
      <Text style={styles.titleValueStyle}>{item?.value}</Text>
    </View>
  );
};

export default ItemCarFeatures;
