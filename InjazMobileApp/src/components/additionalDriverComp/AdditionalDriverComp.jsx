import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import images from '../../constants/images';

const AdditionalDriverComponent = ({titleAdditional, titleSelect}) => {
  return (
    <View activeOpacity={0.9} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={images.STEARING} style={styles.image} />
        <Text style={styles.title}>{titleAdditional}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.button}>
          <Text style={styles.buttonText}>{titleSelect}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdditionalDriverComponent;
