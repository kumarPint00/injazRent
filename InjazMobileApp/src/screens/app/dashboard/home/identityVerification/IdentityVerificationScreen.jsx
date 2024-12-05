import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import TabViewComp from '../../../../../components/tab/TabViewComp';
import {tabDocuments} from '../../../../../constants/list';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const IdentityVerificationScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={
          selectedLanguage === 'en'
            ? 'Identity  verification'
            : 'التحقق من الهوية'
        }
      />
      <TabViewComp tabs={tabDocuments} selectedLanguage={selectedLanguage} />
    </View>
  );
};

export default IdentityVerificationScreen;
