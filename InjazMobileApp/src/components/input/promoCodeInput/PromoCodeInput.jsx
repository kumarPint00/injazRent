import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const PromoCodeInput = ({titlePromo}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Promo Code" style={styles.textInput} />
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Text style={styles.buttonText}>{titlePromo}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoCodeInput;
