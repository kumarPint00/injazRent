import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../../../constants/images';
import styles from './styles';

const ItemFavourites = ({item, onHeartIconPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onHeartIconPress(item.id)}
        style={styles.favoriteIconContainer}>
        <Image source={images.FILLED_HEART} style={styles.favoriteIcon} />
      </TouchableOpacity>
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.titleCategory}>Category:</Text>
          <Text style={styles.detailValue}>{item.carDetails.category}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.titleCategory}>Engine Capacity:</Text>
          <Text style={styles.detailValue}>
            {item.carDetails.engineCapacity}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.titleCategory}>Seater:</Text>
          <Text style={styles.detailValue}>{item.carDetails.seater}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.titleCategory}>Transmission:</Text>
          <Text style={styles.detailValue}>{item.carDetails.transmission}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.titleCategory}>Actual Price Monthly:</Text>
          <Text style={styles.detailValue}>
            {item.carDetails.actualPriceMonthly}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.titleCategory}>Discounted Price Monthly:</Text>
          <Text style={styles.detailValue}>
            {item.carDetails.discountedPriceMonthly}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemFavourites;
