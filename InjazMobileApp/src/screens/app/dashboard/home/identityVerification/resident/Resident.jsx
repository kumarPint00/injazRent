import {View, ScrollView, Platform, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import NonResidentScreen from '../nonResident/NonResidentScreen';
import TabButton from '../../../../../../components/tab/TabButton';
import images from '../../../../../../constants/images';
import styles from './styles';
import HeaderCategory from '../../../../../../components/header/headerCat/HeaderCategory';
import ResidentScreen from '../resident/ResidentScreen';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';

const Resident = () => {
  const [activeTab, setActiveTab] = useState('Resident');
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={
          selectedLanguage === 'en'
            ? 'Identity Verification'
            : 'التحقق من الهوية'
        }
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContentContainer]}>
          <View
            style={[
              styles.buttonContainer,
              Platform.OS === 'ios'
                ? styles.iosShadow
                : styles.androidElevation,
            ]}>
            <TabButton
              title={selectedLanguage === 'en' ? 'Resident' : 'مقيم'}
              isActive={activeTab === 'Resident'}
              onPress={() => handleTabPress('Resident')}
              style={{width: '48%'}}
            />
            <TabButton
              title={selectedLanguage === 'en' ? 'Non-Resident' : 'غير مقيم'}
              isActive={activeTab === 'NonResident'}
              onPress={() => handleTabPress('NonResident')}
              style={{width: '48%'}}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.screenContainer}>
        {activeTab === 'Resident' && (
          <ResidentScreen selectedLanguage={selectedLanguage} />
        )}
        {activeTab === 'NonResident' && (
          <NonResidentScreen selectedLanguage={selectedLanguage} />
        )}
      </View>
    </View>
  );
};

export default Resident;
