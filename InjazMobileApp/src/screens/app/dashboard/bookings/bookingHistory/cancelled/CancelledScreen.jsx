import {View, FlatList} from 'react-native';
import React from 'react';
import {bookingData} from '../../../../../constants/list';
import styles from './styles';
import ItemActive from '../../../../../components/list/ItemActive/ItemActive';

const CancelledScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={bookingData}
        renderItem={({item}) => <ItemActive item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CancelledScreen;
