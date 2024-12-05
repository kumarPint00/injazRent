import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const HeaderCategory = ({
  backIcon,
  title,
  onPress,
  activeOpacity,
  rightIcon,
  titleStyle,
  onPressOut,
}) => {
  const formattedTitle =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
        <Image resizeMode="contain" style={styles.backIcon} source={backIcon} />
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {!!rightIcon && (
        <TouchableOpacity
          activeOpacity={activeOpacity}
          style={{alignSelf: 'center'}}
          onPressOut={onPressOut}>
          <Image
            resizeMode="contain"
            style={styles.rightIcon}
            source={rightIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderCategory;
