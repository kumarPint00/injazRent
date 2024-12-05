import React from 'react';
import {View, Text, Pressable} from 'react-native';
import FlatlistImages from '../flatlistImages/FlatlistImages';
import styles from './styles';

const ItemKeyFeatures = ({item, index, customStyle, id, carDetails}) => {
  const isLastItem = index === carDetails.length - 1;

  return (
    <View
      style={[styles.itemContainer, isLastItem ? styles.lastItemMargin : null]}>
      <Pressable
        activeOpacity={0.9}
        style={[styles.touchableOpacity, customStyle]}>
        <FlatlistImages title={item.title} />
        {isLastItem && (
          <View style={styles.servicesContainer}>
            {item.services &&
              item.services.map((service, index) => (
                <Text key={index} style={styles.serviceItem}>
                  {service}
                </Text>
              ))}
          </View>
        )}
        <FlatlistImages title={item} />
      </Pressable>
    </View>
  );
};

export default ItemKeyFeatures;
