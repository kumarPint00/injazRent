import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles from './styles';
import {addOns} from '../../constants/list';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';

const AddOnsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Ons</Text>
      {addOns.map((addOn, index) => (
        <View key={index} style={styles.addOnItem}>
          <Image source={addOn.image} style={styles.addOnIcon} />
          <Text
            style={[
              styles.addOnDetails,
              {
                color: index == '7' ? colors.BLUE : colors.BLACK,
                right: index > 0 ? moderateScale(36) : moderateScale(0),
              },
            ]}>
            {addOn.name}
          </Text>
          <Text
            style={[
              styles.addOnPrice,
              {color: index == '7' ? colors.BLUE : colors.BLACK},
            ]}>
            {addOn.price} AED
          </Text>
        </View>
      ))}
    </View>
  );
};
export default AddOnsList;
