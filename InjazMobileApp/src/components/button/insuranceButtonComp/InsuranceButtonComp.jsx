import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  Pressable,
} from 'react-native';
import colors from '../../../constants/colors';
import images from '../../../constants/images';
import styles from './styles';

const InsuranceButtonComp = ({title, description, price, isFree}) => {
  return (
    <Pressable
      activeOpacity={0.9}
      style={[
        styles.container,
        Platform.OS === 'android' && styles.androidShadow,
        {backgroundColor: isFree ? colors.GREEN_PRIMARY : colors.GREEN},
      ]}>
      <View style={styles.iconContainer} />
      <Text
        style={[styles.title, {color: isFree ? colors.GREEN : colors.WHITE}]}>
        {title} {isFree ? '(Free)' : price}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.arrowContainer}>
        <Image
          resizeMode="contain"
          source={images.THREE_ARROWS}
          style={styles.arrowImage}
        />
      </View>
    </Pressable>
  );
};
export default InsuranceButtonComp;
