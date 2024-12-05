import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const DocumentItem = ({
  title,
  subtitle,
  activeOpacity,
  onPress,
  source,
  imageWidth,
  imageHeight,
}) => {
  return (
    <TouchableOpacity
      style={{justifyContent: 'center', alignItems: 'center'}}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      <View style={styles.container}>
        {source && (
          <Image
            resizeMode="contain"
            source={source}
            style={[styles.image, {width: imageWidth, height: imageHeight}]}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DocumentItem;
