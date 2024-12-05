import React from 'react';
import {View, FlatList} from 'react-native';
import ItemHatchBackCars from './ItemHatchBackCars';

const FlatListComponent = ({data, onEndReached}) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        onEndReached={onEndReached}
        renderItem={({item}) => <ItemHatchBackCars item={item} />}
      />
    </View>
  );
};

export default FlatListComponent;
