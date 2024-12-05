import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';

const ItemYourDocuments = ({item, selectedLanguage}) => {
  const navigation = useNavigation();
  const {en, ar} = item.title;
  const title = selectedLanguage === 'en' ? en : ar;
  const subTitle = item.sub_title
    ? selectedLanguage === 'en'
      ? item.sub_title.en
      : item.sub_title.ar
    : null;

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        {subTitle && <Text style={styles.subTitleStyle}>{subTitle}</Text>}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.DOCUMENT_UPLOAD_SCREEN)}
        style={styles.buttonContainer}>
        <Text>{selectedLanguage === 'en' ? 'Add Photo' : 'إضافة صورة'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ItemYourDocuments;
