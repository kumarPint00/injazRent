// FilterCategory.js
import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import images from '../../constants/images';

const FilterCategory = ({title, onToggle, isSelected}) => {
  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={1}
      style={[styles.container, isSelected ? styles.selectedContainer : null]}>
      <View style={styles.containerBrand}>
        <Text style={[styles.text, isSelected ? styles.selectedText : null]}>
          {title}
        </Text>
        <Image
          source={images.RIGHT}
          style={[styles.image, isSelected ? styles.selectedImage : null]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FilterCategory;
