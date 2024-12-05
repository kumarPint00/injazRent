import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../../constants/colors';

const ItemTotalCalculation = ({item, index, selectedLanguage}) => {
  return (
    <View style={styles.itemRow}>
      <Text style={styles.itemTitle}>
        {selectedLanguage === 'en' ? item.title.en : item.title.ar}
      </Text>
      <Text
        style={[
          styles.itemValue,
          {
            color:
              index === 3
                ? colors.RED
                : index === 1 || index === 2
                ? colors.BLUE
                : colors.BLACK,
          },
        ]}>
        {selectedLanguage === 'en' ? item.value.en : item.value.ar}
      </Text>
    </View>
  );
};

export default ItemTotalCalculation;
