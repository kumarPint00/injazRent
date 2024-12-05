import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../../constants/images';

const ItemInvoice = ({item, selectedLanguage}) => {
  const carText = selectedLanguage === 'en' ? item.car.en : item.car.ar;
  const typeText = selectedLanguage === 'en' ? item.type.en : item.type.ar;
  const seaterText =
    selectedLanguage === 'en' ? item.seater.en : item.seater.ar;
  const collectText =
    selectedLanguage === 'en' ? item.collect.en : item.collect.ar;
  const returnText =
    selectedLanguage === 'en' ? item.return.en : item.return.ar;
  const priceText = selectedLanguage === 'en' ? item.price.en : item.price.ar;
  const ratingText =
    selectedLanguage === 'en' ? item.rating.en : item.rating.ar;
  const ratingCountText =
    selectedLanguage === 'en' ? item.ratingCount.en : item.ratingCount.ar;

  return (
    <View style={styles.listItemContainer}>
      <View>
        <View style={styles.containerRating}>
          <Text style={styles.carText}>{carText}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{ratingText}</Text>
            <Text style={styles.ratingText}> {ratingCountText}</Text>
          </View>
        </View>
        <View style={styles.containerType}>
          <Image source={images.AUTOMATIC} style={styles.iconStyle} />
          <Text style={styles.typeText}>{typeText}</Text>
        </View>
        <View style={styles.containerStyle}>
          <Image source={images.SEATERS} style={styles.iconStyle} />
          <Text style={styles.seaterText}>{seaterText}</Text>
        </View>
        <Text style={styles.titleCollect}>{collectText}</Text>
        <Text style={styles.titleReturn}>{returnText}</Text>
      </View>
      <View style={styles.viewStyle}>
        <Image source={item.image} style={styles.imageStyle} />
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Invoice</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemInvoice;
