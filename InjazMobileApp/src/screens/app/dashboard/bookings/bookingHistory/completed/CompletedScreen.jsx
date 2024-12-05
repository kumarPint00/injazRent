import {View, FlatList} from 'react-native';
import React from 'react';
import {bookingData} from '../../../../../constants/list';
import styles from './styles';
import ItemActive from '../../../../../components/list/ItemActive/ItemActive';
import ItemCompleted from '../../../../../../components/list/ItemCompleted/ItemCompleted';

const CompletedScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={bookingData}
        renderItem={({item}) => <ItemCompleted item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CompletedScreen;
