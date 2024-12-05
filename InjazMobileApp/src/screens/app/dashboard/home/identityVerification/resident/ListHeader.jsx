import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../../../../../constants/images';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';

const ListHeader = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View style={styles.listHeaderContainer}>
      <Text style={styles.headerText}>
        {selectedLanguage === 'en' ? 'Your Documents' : 'المستندات الخاصة بك'}
      </Text>
    </View>
  );
};

export default ListHeader;
