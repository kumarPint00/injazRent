import React, {useState} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import DeliveryOption from '../../../../../components/deliveryOption/DeliveryOption';
import OptionalInstructions from '../../../../../components/optionalInstructions/OptionalInstructions';
import ItemCalculation from '../../../../../components/list/itemCalculation/ItemCalculation';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import ExtendModal from '../../../../../components/modal/extendModal/ExtendModal';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import {bookingDetailsData} from '../../../../../constants/list';
import styles from './styles';
import colors from '../../../../../constants/colors';

const BookingDetailsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);

  const handleExtendPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        rightIcon={images.SETTINGS_SLIDERS}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Booking Details' : 'تفاصيل الحجز'}
        titleStyle={{marginStart: moderateScale(50)}}
      />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={styles.detailsContainer}>
          <View style={{height: 260, backgroundColor: colors.NAVY_BLUE}}>
            <Image source={images.STORMY} style={styles.image} />
            <View style={styles.carDetailsContainer}>
              <Text style={styles.carName}>
                {selectedLanguage === 'en' ? 'XUV' : 'XUV'}
              </Text>
              <Text style={styles.carPrice}>
                {selectedLanguage === 'en' ? '500' : 'خمسة مائة'}
              </Text>
            </View>
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>
              {selectedLanguage === 'en' ? 'Address' : 'عنوان'}
            </Text>
          </View>
          <View style={styles.locationContainer}>
            <DeliveryOption
              delivery={selectedLanguage === 'en' ? 'Delivery' : 'توصيل'}
              location={
                selectedLanguage === 'en'
                  ? 'Nizamabad Hyderabad'
                  : 'نظام آباد حيدر أباد'
              }
            />
            <DeliveryOption
              delivery={selectedLanguage === 'en' ? 'Delivery' : 'توصيل'}
              location={
                selectedLanguage === 'en'
                  ? 'Nizamabad Hyderabad'
                  : 'نظام آباد حيدر أباد'
              }
            />
          </View>
          <View style={styles.optionalContainer}>
            <OptionalInstructions
              location={
                selectedLanguage === 'en'
                  ? 'Add location or other instructions (optional)'
                  : 'إضافة موقع أو تعليمات أخرى (اختياري)'
              }
            />
          </View>
          <View style={styles.totalContainer}>
            <FlatList
              data={bookingDetailsData}
              renderItem={({item}) => (
                <ItemCalculation
                  item={item}
                  selectedLanguage={selectedLanguage}
                />
              )}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComp
              activeOpacity={0.9}
              text={selectedLanguage === 'en' ? 'Extend' : 'يمتد'}
              textStyle={styles.buttonTextStyle}
              style={styles.buttonStyle}
              onPress={handleExtendPress}
            />
          </View>
          <ExtendModal
            visible={modalVisible}
            onClose={closeModal}
            setModalVisible={setModalVisible}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingDetailsScreen;
