import {View} from 'react-native';
import React from 'react';
import styles from './styles';

const ItemDocumentLists = ({item}) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.itemContainer, {backgroundColor: item.backgroundColor}]}
      />
    </View>
  );
};

export default ItemDocumentLists;
