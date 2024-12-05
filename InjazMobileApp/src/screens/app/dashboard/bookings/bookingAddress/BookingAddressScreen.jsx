import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import ButtonTime from '../../../../../components/button/buttonTime/ButtonTime';
import ButtonPackage from '../../../../../components/button/ButtonPackage/ButtonPackage';
import ButtonState from '../../../../../components/button/buttonState/ButtonState';
import TabButton from '../../../../../components/tab/TabButton';
import DeliveryScreen from '../delivery/DeliveryScreen';
import PickUpScreen from '../pickUp/PickUpScreen';
import images from '../../../../../constants/images';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const BookingAddressScreen = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [activeButton, setActiveButton] = useState('Get Car');
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <HeaderCategory
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Booking' : 'الحجز'}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            {selectedLanguage === 'en' ? 'Booking Dates' : 'مواعيد الحجز'}
          </Text>
          <View style={styles.timeContainer}>
            <ButtonTime
              date={selectedLanguage === 'en' ? 'Fri , 22' : 'الجمعة , 22'}
              time={selectedLanguage === 'en' ? '4:40 PM ' : '4:40 مساءً'}
            />
            <Image source={images.ARROW_RIGHT} style={styles.arrowIcon} />
            <ButtonTime
              date={selectedLanguage === 'en' ? 'Fri , 22' : 'الجمعة , 22'}
              time={selectedLanguage === 'en' ? '4:40 PM ' : '4:40 مساءً'}
            />
          </View>
          <ButtonPackage
            titlePackage={selectedLanguage === 'en' ? 'Package : ' : 'طَرد :'}
            titleDaily={
              selectedLanguage === 'en'
                ? 'Daily ( 1-6 days ) / Total days : 6'
                : 'يوميًا (1-6 أيام) / إجمالي الأيام :6'
            }
          />
          <View style={styles.buttonStateContainer}>
            <ButtonState
              title={selectedLanguage === 'en' ? 'Get Car' : 'احصل على سيارة'}
              isActive={activeButton === 'Get Car'}
              onPress={() => setActiveButton('Get Car')}
            />
            <Image source={images.ARROW_RIGHT} style={styles.arrowIcon} />
            <ButtonState
              title={selectedLanguage === 'en' ? 'Return' : 'يعود'}
              isActive={activeButton === 'Return'}
              onPress={() => setActiveButton('Return')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContentContainer}>
              <View style={styles.tabButtonContainer}>
                <TabButton
                  title={selectedLanguage === 'en' ? 'Delivery' : 'توصيل'}
                  isActive={activeTab === 'Delivery'}
                  onPress={() => handleTabPress('Delivery')}
                  style={styles.tabButton}
                />
                <TabButton
                  title={selectedLanguage === 'en' ? 'PickUp' : 'يلتقط'}
                  isActive={activeTab === 'PickUp'}
                  onPress={() => handleTabPress('PickUp')}
                  style={styles.tabButton}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.screenContainer}>
          {activeTab === 'Delivery' && <DeliveryScreen />}
          {activeTab === 'PickUp' && <PickUpScreen />}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default BookingAddressScreen;
