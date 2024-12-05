import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const ItemNotifications = ({item}) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.innerView}>
        <View style={styles.viewIcon}>
          <Image source={item.icon} style={styles.icon} />
        </View>
        <View style={styles.viewTitleStyle}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.sub_title}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemNotifications;
