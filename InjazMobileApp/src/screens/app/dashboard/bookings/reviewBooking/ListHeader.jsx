import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../../../../../constants/images';
import styles from './styles';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const ListHeader = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View style={styles.pickUpTitleContainer}>
      <Text style={styles.titlePickUpReturn}>
        {selectedLanguage === 'en' ? 'Pickup & Return' : 'الاستلام والإرجاع'}
      </Text>
      <TouchableOpacity activeOpacity={0.9}>
        <Image source={images.EDIT_ICON} style={styles.editIconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default ListHeader;
