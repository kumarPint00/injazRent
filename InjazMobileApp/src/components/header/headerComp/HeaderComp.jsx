import React from 'react';
import {View, Text, Image, Platform, StyleSheet} from 'react-native';
import {moderateScale} from '../../../styles/responsiveSize';
import styles from './styles';

const HeaderComp = ({
  iconCountryFlag,
  titleCountryName,
  iconDropDown,
  iconBell,
  iconGift,
  titleGift,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.countryButton}>
        <Image source={iconCountryFlag} style={styles.countryFlagImage} />
        <Text style={styles.countryNameText}>{titleCountryName}</Text>
        <Image source={iconDropDown} style={styles.dropDownIcon} />
      </View>
      <View
        style={StyleSheet.flatten([
          styles.giftButton,
          {
            marginTop:
              Platform.OS === 'ios' ? moderateScale(50) : moderateScale(25),
          },
        ])}>
        <Image source={iconGift} style={styles.giftImage} />
        <Text style={styles.giftText}>{titleGift}</Text>
      </View>
      <View>
        <Image source={iconBell} style={styles.bellIcon} />
      </View>
    </View>
  );
};

export default HeaderComp;
