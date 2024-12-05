import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ItemTechnicalDetails = ({item}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style>{`${item.name}:`}</Text>
      <Text style={styles.titleValueStyle}>{item.value}</Text>
    </View>
  );
};

export default ItemTechnicalDetails;
