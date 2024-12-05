import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import {moderateScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import RadioButton from '../../../../../components/radioButton/RadioButton';
import FooterComp from '../../../../../components/footer/FooterComp';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../../../constants/routes';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const PaymentScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Apple Pay');
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const handleRadioButtonPress = option => {
    setSelectedOption(option);
  };
  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Payment' : 'قسط'}
      />
      <View>
        <View style={{padding: moderateScale(20)}}>
          <Text style={styles.titleCard}>
            {selectedLanguage === 'en' ? 'My Cards' : 'بطاقاتي'}
          </Text>
          <View style={styles.addCardContainer}>
            <View style={styles.addCardImageContainer}>
              <Image source={images.ATM} style={styles.imageAtm} />
            </View>
            <View style={{top: moderateScale(16)}}>
              <Text style={styles.titleAddNewCard}>
                {selectedLanguage === 'en'
                  ? 'Add a new card'
                  : 'أضف بطاقة جديدة'}
              </Text>
            </View>
          </View>
          <View style={styles.otherContainer}>
            <Text style={styles.titleOthers}>
              {selectedLanguage === 'en' ? 'Others' : 'آحرون'}
            </Text>
          </View>
          <View style={styles.containerRadio}>
            <RadioButton
              label={selectedLanguage === 'en' ? 'Apple Pay' : 'أبل الدفع'}
              imageSource={images.APPLE_PAY}
              isSelected={selectedOption === 'Apple Pay'}
              onPress={() => handleRadioButtonPress('Apple Pay')}
            />
          </View>
          <View style={styles.containerRect}>
            <Image source={images.RECT} style={styles.imageRectStyle} />
          </View>
          <View style={styles.containerPowered}>
            <Text style={styles.titlePowered}>
              {selectedLanguage === 'en'
                ? 'Payment Secured by'
                : 'الدفع مؤمن بواسطة'}
            </Text>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={images.PNE}
                style={styles.imagePneStyle}
              />

              <Image
                resizeMode="contain"
                source={images.MASTER_CARD}
                style={styles.imageMasterStyle}
              />
              <View style={styles.poweredContainer} />
              <Image
                resizeMode="contain"
                source={images.APPLE_PAY}
                style={styles.appleImageStyle}
              />
              <Image
                resizeMode="contain"
                source={images.VISA}
                style={styles.visaImageStyle}
              />
            </View>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.textAndStyle}>
              {selectedLanguage === 'en'
                ? 'By clicking pay you accept Injaz '
                : 'بالضغط على دفع فإنك تقبل إنجاز'}
            </Text>
            <TouchableOpacity>
              <Text style={styles.termsTextStyle}>
                {selectedLanguage === 'en'
                  ? 'Terms and Conditions'
                  : 'الأحكام والشروط'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.textAndStyle}>
              {selectedLanguage === 'en' ? 'and' : 'و'}
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.termsTextStyle}>
                {selectedLanguage === 'en'
                  ? 'Subscription Agreement'
                  : 'شروط التسجيل'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <FooterComp
          activeOpacity={0.9}
          onPress={() => navigation.navigate(routes.AGREEMENT_SCREEN)}
          buttonTitle={selectedLanguage === 'en' ? 'Pay With' : 'ادفع عن طريق'}
          titlePrice={selectedLanguage === 'en' ? 'Price' : 'سعر'}
          textStyle={{color: colors.BLACK}}
          titleCurrency={
            selectedLanguage === 'en'
              ? 'AED 1700 / Monthly'
              : '1700 درهم / شهرياً'
          }
          titleVat={
            selectedLanguage === 'en'
              ? 'VAT inclusive'
              : 'شاملة ضريبة القيمة المضافة'
          }
        />
      </View>
    </View>
  );
};

export default PaymentScreen;
