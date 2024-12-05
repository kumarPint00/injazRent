import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ItemTerms = ({item, selectedLanguage}) => {
  return (
    <View style={{bottom: 200}}>
      <Text style={styles.title}>
        {selectedLanguage === 'en' ? 'Terms and Conditions' : 'الشروط والأحكام'}
      </Text>
      <Text style={styles.sub_title}>
        {selectedLanguage === 'en' ? item.content.en : item.content.ar}
      </Text>
    </View>
  );
};

export default ItemTerms;
