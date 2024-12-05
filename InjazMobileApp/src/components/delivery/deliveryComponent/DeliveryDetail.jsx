import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './DetailsStyles';
import images from '../../../constants/images';

const DeliveryDetail = ({icon, title, subtitle, showEditIcon}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {showEditIcon && (
        <Image source={images.EDIT_ICON} style={styles.editIcon} />
      )}
    </View>
  );
};

export default DeliveryDetail;
