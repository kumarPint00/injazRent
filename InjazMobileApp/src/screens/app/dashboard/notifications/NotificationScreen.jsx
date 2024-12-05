import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import HeaderCategory from '../../../../components/header/headerCat/HeaderCategory';
import {useNavigation} from '@react-navigation/native';
import images from '../../../../constants/images';
import {selectLanguage} from '../../../../redux/slices/language_slices';
import {useSelector} from 'react-redux';
import {notifications} from '../../../../constants/list';
import styles from './styles';
import ItemNotifications from '../../../../components/list/ItemNotifications/ItemNotifications';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Notifications' : 'إشعارات'}
      />
      <FlatList
        data={notifications}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <ItemNotifications item={item} />;
        }}
      />
    </View>
  );
};

export default NotificationScreen;
