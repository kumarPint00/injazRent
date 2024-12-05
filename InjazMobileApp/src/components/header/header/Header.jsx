import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Header = ({leftIcon, title, titleSkip, onPress, activeOpacity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.touchableArea}>
          <Image style={styles.leftIcon} source={leftIcon} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {titleSkip && (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
          <Text style={styles.skipText}>{titleSkip}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
