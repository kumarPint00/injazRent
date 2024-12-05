import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderCategory from '../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../constants/images';
import {settingsData} from '../../../../constants/list';
import ItemSettings from '../../../../components/list/ItemSettings/ItemSettings';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../redux/slices/language_slices';

const SettingsScreen = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const toggleSwitchHandler = () => {
    setToggleValue(previousState => !previousState);
  };
  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Settings' : 'إعدادات'}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={settingsData}
        renderItem={({item, index}) => {
          return (
            <ItemSettings
              item={item}
              index={index}
              settingsData={settingsData}
              toggleValue={toggleValue}
              toggleSwitchHandler={toggleSwitchHandler}
              selectedLanguage={selectedLanguage}
            />
          );
        }}
      />
    </View>
  );
};

export default SettingsScreen;
