import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Linking,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import styles from './styles';
import {moderateScale} from '../../../styles/responsiveSize';
import colors from '../../../constants/colors';
import imagess from '../../../constants/images';
import routes from '../../../constants/routes';
import {useNavigation} from '@react-navigation/native';
import ButtonComp from '../../button/ButtonComp/ButtonComp';
import {selectLanguage} from '../../../redux/slices/language_slices';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSettingsThunk} from '../../../redux/asyncThunk/AsyncThunk';
import BookNowModal from '../../modal/bookNowModal/BookNowModal';

const ItemExoticCars = ({
  item,
  customStyle,
  isShortTerm,
  showMonthData,
  screenType,
}) => {
  const [itemId, setItemId] = useState(null);
  const [images, setImages] = useState([]);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item._id) {
      setItemId(item._id);
    }
  }, [item]);

  useEffect(() => {
    if (item) {
      const processedImages = [];

      if (item.image && typeof item.image === 'string') {
        processedImages.push(item.image.replace(/^http:/, 'https:'));
      }

      if (item.internalImage && Array.isArray(item.internalImage)) {
        item.internalImage.forEach(img => {
          if (typeof img === 'string') {
            processedImages.push(img.replace(/^http:/, 'https:'));
          }
        });
      }

      if (item.externalImage && Array.isArray(item.externalImage)) {
        item.externalImage.forEach(img => {
          if (typeof img === 'string') {
            processedImages.push(img.replace(/^http:/, 'https:'));
          }
        });
      }

      setImages(processedImages);
    }
  }, [item]);

  useEffect(() => {
    dispatch(getAllSettingsThunk())
      .unwrap()
      .then(apiResponse => {
        if (
          Array.isArray(apiResponse?.result) &&
          apiResponse.result.length > 0
        ) {
          const phoneNumber = apiResponse.result[0].phoneNumber;
          setMobileNumber(phoneNumber);
        } else {
          console.log(
            'No data found in the API response or invalid data structure.',
          );
        }
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  const handleBookModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSeeMore = () => {
    navigation.navigate(routes.CAR_DETAILS_SCREEN, {
      selectedItem: item,
      images,
      id: item?._id,
    });
  };

  const shareToWhatsAppWithContact = (text, phoneNumber) => {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = mobileNumber;
    const message = `Hi, \nI’m contacting you through Injazrent.ae. \nI’d like to rent the discounted ${
      item?.brand ? item?.brand : 'No brand'
    } ${item?.model ? item?.model : 'No model'} ${
      item?.year ? item?.year : 'No year available'
    }\nDaily Price: ${item?.actualPriceDaily} AED`;
    shareToWhatsAppWithContact(message, phoneNumber);
  };

  return (
    <Pressable onPress={handleSeeMore} activeOpacity={0.9}>
      <ImageBackground
        resizeMode="contain"
        source={imagess.GRADIENT_BG}
        style={[styles.container, customStyle]}>
        <View style={styles.ratingContainer}>
          <Image source={imagess.STAR} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>4.0/5</Text>
        </View>

        <Text style={styles.carName}>
          {`${item?.brand ? item?.brand : 'No brand'} ${
            item?.model ? item?.model : 'No model'
          }`}
        </Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>
            {item?.seater ? item?.seater : 'No seater available'} |{' '}
          </Text>
          <Text style={styles.detailsText}>
            {item?.year ? item?.year : 'No year available'}
          </Text>
        </View>

        {images.length > 0 && (
          <Image
            key={0}
            resizeMode="contain"
            source={{uri: images[0]}}
            style={styles.carImage}
          />
        )}

        <View style={styles.buttonViewContainer}>
          {screenType === 'longTerm' ? (
            <View style={styles.buttonMonthContainer}>
              <ButtonComp
                text={selectedLanguage === 'en' ? 'Month' : 'شهر'}
                textStyle={styles.buttonTextStyle}
                style={{
                  justifyContent: 'center',
                  width: moderateScale(130),
                  height: moderateScale(25),
                  backgroundColor: colors.WHITE,
                  borderRadius: moderateScale(5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <Text style={styles.titleCurrency}>
                {item?.actualPriceMonthly
                  ? `${item?.actualPriceMonthly} ᴬᴱᴰ`
                  : 'No price'}
              </Text>
            </View>
          ) : (
            <>
              <View style={styles.buttonContainer}>
                <ButtonComp
                  activeOpacity={0.9}
                  text={selectedLanguage === 'en' ? 'Daily' : 'يوميوميًا'}
                  textStyle={styles.buttonTextStyle}
                  style={{
                    width: isShortTerm ? moderateScale(105) : moderateScale(70),
                    height: moderateScale(25),
                    backgroundColor: colors.WHITE,
                    borderRadius: moderateScale(5),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <Text style={styles.titleCurrency}>
                  {item?.actualPriceDaily
                    ? `${item?.actualPriceDaily} ᴬᴱᴰ`
                    : 'No price'}
                </Text>
                <Text style={styles.titleDiscountedCurrency}>
                  {item?.discountedPriceDaily
                    ? `${item?.discountedPriceDaily} ᴬᴱᴰ`
                    : 'No price'}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <ButtonComp
                  activeOpacity={0.9}
                  text={selectedLanguage === 'en' ? 'Weekly' : 'أسبوعي'}
                  textStyle={styles.buttonTextStyle}
                  style={{
                    width: isShortTerm ? moderateScale(105) : moderateScale(70),
                    height: moderateScale(25),
                    backgroundColor: colors.WHITE,
                    borderRadius: moderateScale(5),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <Text style={styles.titleCurrency}>
                  {item?.actualPriceWeekly
                    ? `${item?.actualPriceWeekly} ᴬᴱᴰ`
                    : 'No price'}
                </Text>
                <Text style={styles.titleDiscountedCurrency}>
                  {item?.discountedPriceWeekly
                    ? `${item?.discountedPriceWeekly} ᴬᴱᴰ`
                    : 'No price'}
                </Text>
              </View>
            </>
          )}

          {!showMonthData && (
            <View style={styles.buttonContainer}>
              <ButtonComp
                activeOpacity={0.9}
                text={selectedLanguage === 'en' ? 'Monthly' : 'شهريا'}
                textStyle={styles.buttonTextStyle}
                style={{
                  width: moderateScale(70),
                  height: moderateScale(25),
                  backgroundColor: colors.WHITE,
                  borderRadius: moderateScale(5),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <Text style={styles.titleCurrency}>
                {item?.actualPriceMonthly
                  ? `${item?.actualPriceMonthly} ᴬᴱᴰ`
                  : 'No price'}
              </Text>
              <Text style={styles.titleDiscountedCurrency}>
                {item?.discountedPriceMonthly
                  ? `${item?.discountedPriceMonthly} ᴬᴱᴰ`
                  : 'No price'}
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            margin: moderateScale(10),
            top: Platform.OS === 'ios' ? moderateScale(20) : moderateScale(25),
          }}>
          <ButtonComp
            leftImg={imagess.WHATSAPP}
            onPress={handleWhatsAppClick}
            activeOpacity={0.9}
            text={selectedLanguage === 'en' ? 'WhatsApp' : 'واتساب'}
            imageStyle={styles.whatsImage}
            textStyle={styles.buttonWhasAppText}
            style={styles.buttonWhatsApp}
          />
          <ButtonComp
            activeOpacity={0.9}
            onPress={handleBookModal}
            text={selectedLanguage === 'en' ? 'Book Now' : 'احجز الآن'}
            textStyle={styles.bookNowText}
            style={styles.bookNowButton}
          />
        </View>

        <BookNowModal
          visible={modalVisible}
          onClose={closeModal}
          id={itemId}
          selectedLanguage={selectedLanguage}
          carName={item?.model}
          brandName={item?.brand}
          year={item?.year}
          dailyPrice={item?.actualPriceDaily}
          monthlyPrice={item?.actualPriceMonthly}
          weeklyPrice={item?.actualPriceWeekly}
          image={images[0]}
          transmission={item?.transmission}
        />
      </ImageBackground>
    </Pressable>
  );
};

export default ItemExoticCars;
