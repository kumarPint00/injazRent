import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {selectLanguage} from '../../../redux/slices/language_slices';
import {useSelector} from 'react-redux';

const ItemProfile = ({item, index, profileData}) => {
  const isLastItem = index === profileData.length - 1;
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <View style={styles.listItemContainer}>
      <View
        style={[
          styles.listItemImageContainer,
          {backgroundColor: item.background},
        ]}>
        <Image
          resizeMode="contain"
          source={item.image}
          style={styles.listItemImage}
        />
      </View>
      <Text style={styles.listItemTitle}>
        {selectedLanguage === 'en' ? item.title.en : item.title.ar}
      </Text>
      <Image
        source={item.right}
        style={[styles.listItemRightImage, isLastItem && {tintColor: 'black'}]}
      />
    </View>
  );
};

export default ItemProfile;
