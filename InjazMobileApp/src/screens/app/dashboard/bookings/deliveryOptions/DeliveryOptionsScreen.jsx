import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import RadioButtonComp from '../../../../../components/radioButton/RadioButtonComp';
import DeliveryComponent from '../../../../../components/delivery/deliveryComponent/DeliveryComponent';
import AddOnsList from '../../../../../components/addOnList/AddOnList';
import colors from '../../../../../constants/colors';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import FooterComp from '../../../../../components/footer/FooterComp';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../../../constants/routes';

const DeliveryOptionsScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Self-Pickup');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={'Delivery Options'}
      />
      <View style={styles.headerImageContainer}>
        <Image source={images.STORMY} style={styles.headerImage} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        style={styles.heartContainer}>
        <Image source={images.HEART} style={styles.heartImage} />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.deliveryInfoContainer}>
          <View style={styles.infoRow}>
            <Image source={images.CALENDARSS} style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>Sat Nov 11</Text>
              <Text style={styles.infoSubText}>10:00 - 12:00</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText2}>Sat Nov 11</Text>
              <Text style={styles.infoSubText2}>10:00 - 12:00</Text>
            </View>
            <Image source={images.EDIT_ICON} style={styles.editIcon} />
          </View>
        </View>
        <View style={styles.hyundaiElantraContainer}>
          <Text style={styles.hyundaiText}>Hyundai </Text>
          <Text style={styles.elantraText}>Elantra </Text>
          <Text style={styles.totalText}>100 AED Total </Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButtonComp
            options={['Self-Pickup', 'Door-to-Door']}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </View>
        <DeliveryComponent
          title={'Delivery'}
          address={'Please select your address'}
          date={'Sat Nov 11'}
          time={'10:00-12:00'}
        />
        <DeliveryComponent
          title={'Return'}
          address={'Please select your address'}
          date={'Sat Nov 11'}
          time={'10:00-12:00'}
        />
        <View style={styles.bookingTitleContainer}>
          <Text style={styles.bookingTitle}>Booking Details</Text>
        </View>
        <AddOnsList />
        <View style={styles.promoContainer}>
          <TextInput placeholder="Apply Promo" style={styles.input} />
          <ButtonComp
            activeOpacity={0.9}
            text="Apply Promo"
            textStyle={styles.textStyle}
            style={styles.buttonStyle}
          />
        </View>
        <View style={styles.paymentTitleContainer}>
          <Text style={styles.paymentTitle}>Payment Card</Text>
        </View>
        <View style={styles.paymentCardContainer}>
          <Image source={images.ATM} style={styles.atmImage} />
          <Text style={styles.noPaymentTitle}>No Payment Card Found</Text>
          <Text style={styles.addCardTitle}>Add Card</Text>
          <Image source={images.RIGHT} style={styles.rightImage} />
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <FooterComp
          activeOpacity={0.9}
          onPress={() => navigation.navigate(routes.VERIFY_SCREEN)}
          buttonTitle={'Order'}
          titlePrice={'Price'}
          textStyle={{color: colors.BLACK}}
          titleCurrency={'AED 1700 / Monthly'}
        />
      </View>
    </View>
  );
};

export default DeliveryOptionsScreen;
