// HeaderComp.js
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import images from '../../../constants/images';
import {Picker} from '@react-native-picker/picker';

const HeaderCity = ({cities, selectedCity, onSelectCity}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => onSelectCity(selectedCity)}>
        <Text>{selectedCity}</Text>
        <Image source={images.UAE_FLAG} />
      </TouchableOpacity>
      {/* Render dropdown menu for selecting city */}
      <Picker
        selectedValue={selectedCity}
        onValueChange={itemValue => onSelectCity(itemValue)}>
        {cities.map(city => (
          <Picker.Item label={city.name} value={city.name} key={city.id} />
        ))}
      </Picker>
    </View>
  );
};

export default HeaderCity;
