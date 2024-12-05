import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../../constants/images';

const ItemCalculation = ({item, selectedLanguage}) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.itemRow}>
        <Text style={styles.itemTitle}>
          {selectedLanguage === 'en' ? item.title_rent.en : item.title_rent.ar}
        </Text>
        <Text style={styles.itemValue}>
          {selectedLanguage === 'en' ? item.rent.en : item.rent.ar}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemTitle}>
          {selectedLanguage === 'en'
            ? item.title_delivery.en
            : item.title_delivery.ar}
        </Text>
        <Text style={styles.itemValue}>
          {selectedLanguage === 'en' ? item.delivery.en : item.delivery.ar}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemTitle}>
          {selectedLanguage === 'en'
            ? item.title_collection.en
            : item.title_collection.ar}
        </Text>
        <Text style={styles.itemValue}>
          {selectedLanguage === 'en' ? item.collection.en : item.collection.ar}
        </Text>
      </View>
      <View>
        <Image source={images.DOTTED_LINE} style={styles.dottedLine} />
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemTitle}>
          {selectedLanguage === 'en'
            ? item.title_sub_total.en
            : item.title_sub_total.ar}
        </Text>
        <Text style={styles.itemValue}>
          {selectedLanguage === 'en' ? item.sub_total.en : item.sub_total.ar}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemTitle}>
          {selectedLanguage === 'en' ? item.title_vat.en : item.title_vat.ar}
        </Text>
        <Text style={styles.itemValue}>
          {selectedLanguage === 'en' ? item.vat.en : item.vat.ar}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemTitle}>
          {selectedLanguage === 'en'
            ? item.title_grand_total.en
            : item.title_grand_total.ar}
        </Text>
        <Text style={styles.itemValue}>
          {selectedLanguage === 'en'
            ? item.grand_total.en
            : item.grand_total.ar}
        </Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.itemTitle}>
          {selectedLanguage === 'en'
            ? item.title_outstanding.en
            : item.title_outstanding.ar}
        </Text>
        <Text style={styles.itemValue}>
          {selectedLanguage === 'en'
            ? item.outstanding.en
            : item.outstanding.ar}
        </Text>
      </View>
    </View>
  );
};

export default ItemCalculation;
