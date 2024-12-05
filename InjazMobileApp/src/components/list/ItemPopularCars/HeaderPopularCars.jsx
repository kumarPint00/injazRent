import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const HeaderPopularCars = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.title}>popular cars</Text>
      <TouchableOpacity style={styles.viewAll} activeOpacity={0.8}>
        <Text style={styles.title}>{'View All >>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPopularCars;
