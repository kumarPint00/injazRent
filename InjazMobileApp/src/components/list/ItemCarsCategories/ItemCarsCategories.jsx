import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import imagess from '../../../constants/images';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';
import ButtonComp from '../../button/ButtonComp/ButtonComp';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/slices/language_slices';
import {getAllSettingsThunk} from '../../../redux/asyncThunk/AsyncThunk';
import BookNowModal from '../../modal/bookNowModal/BookNowModal';

const ItemCarsCategories = ({item, id}) => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const [mobileNumber, setMobileNumber] = useState(null);
  const dispatch = useDispatch();
  const [itemId, setItemId] = useState(null);
  let images = [];

  useEffect(() => {
    if (item && item._id) {
      setItemId(item._id);
    }
  }, [item]);

  console.log(itemId, '....item id');
  let imagesSet = new Set();
  const [modalVisible, setModalVisible] = useState(false);

  if (item?.image && typeof item.image === 'string') {
    imagesSet.add(item.image.replace(/^http:/, 'https:'));
  }

  if (item?.internalImage && Array.isArray(item.internalImage)) {
    item.internalImage.forEach(img =>
      imagesSet.add(img.replace(/^http:/, 'https:')),
    );
  }

  if (item?.externalImage && Array.isArray(item.externalImage)) {
    item.externalImage.forEach(img =>
      imagesSet.add(img.replace(/^http:/, 'https:')),
    );
  }

  const handleBookModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const uniqueImages = Array.from(imagesSet);
  useEffect(() => {
    dispatch(getAllSettingsThunk())
      .unwrap()
      .then(apiResponse => {
        console.log('API Response:', apiResponse);
        if (
          Array.isArray(apiResponse?.result) &&
          apiResponse.result.length > 0
        ) {
          const phoneNumber = apiResponse.result[0].phoneNumber;
          console.log('Phone Number:', phoneNumber);
          setMobileNumber(phoneNumber);
        } else {
          console.log(
            'No data found in the API response or invalid data structure.',
          );
        }
      })
      .catch(error => {
        console.error('API Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSeeMore = () => {
    const itemId = item?._id;
    console.log(itemId, '....itemId');
    console.log('Item :', item);
    navigation.navigate(routes.CAR_DETAILS_SCREEN, {
      selectedItem: item,
      images: uniqueImages,
      id: itemId,
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
    <Pressable activeOpacity={0.9} onPress={() => handleSeeMore()}>
      <ImageBackground
        resizeMode="contain"
        source={imagess.GRADIENT_BG}
        activeOpacity={0.9}
        style={styles.container}>
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

        <View>
          {uniqueImages.length > 0 && (
            <Image
              key={0}
              resizeMode="contain"
              source={{uri: uniqueImages[0]}}
              style={styles.carImage}
            />
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <>
              <ButtonComp
                activeOpacity={0.9}
                text={selectedLanguage === 'en' ? 'Daily' : 'يوميًا'}
                textStyle={{
                  fontSize: textScale(14),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  color: colors.NAVY_BLUE,
                }}
                style={{
                  backgroundColor: colors.WHITE,
                  width: moderateScale(100),
                  height: moderateScale(30),
                }}
              />
              <Text
                style={{
                  color: colors.WHITE,
                  fontFamily: fontFamily.POPPINS_REGULAR,
                  fontSize: textScale(16),
                  top: moderateScale(10),
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                {item?.actualPriceDaily
                  ? `${item?.actualPriceDaily} ᴬᴱᴰ`
                  : 'No price'}
              </Text>
              <Text
                style={{
                  color: colors.WHITE,
                  fontFamily: fontFamily.POPPINS_REGULAR,
                  fontSize: textScale(16),
                  top: moderateScale(10),
                }}>
                {item?.discountedPriceDaily
                  ? `${item?.discountedPriceDaily} ᴬᴱᴰ`
                  : 'No price'}
              </Text>
            </>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ButtonComp
              activeOpacity={0.9}
              text={selectedLanguage === 'en' ? 'Weekly' : 'أسبوعي'}
              textStyle={{
                fontSize: textScale(14),
                fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                color: colors.NAVY_BLUE,
              }}
              style={{
                backgroundColor: colors.WHITE,
                width: moderateScale(100),
                height: moderateScale(30),
              }}
            />
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: fontFamily.POPPINS_REGULAR,
                fontSize: textScale(16),
                top: moderateScale(10),
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              {item?.actualPriceWeekly
                ? `${item?.actualPriceWeekly} ᴬᴱᴰ`
                : 'No price'}
            </Text>
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: fontFamily.POPPINS_REGULAR,
                fontSize: textScale(16),
                top: moderateScale(10),
              }}>
              {item?.discountedPriceWeekly
                ? `${item?.discountedPriceWeekly} ᴬᴱᴰ`
                : 'No price'}
            </Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ButtonComp
              activeOpacity={0.9}
              text={selectedLanguage === 'en' ? 'Monthly' : 'شهريا'}
              textStyle={{
                fontSize: textScale(14),
                fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                color: colors.NAVY_BLUE,
              }}
              style={{
                backgroundColor: colors.WHITE,
                width: moderateScale(100),
                height: moderateScale(30),
              }}
            />
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: fontFamily.POPPINS_REGULAR,
                fontSize: textScale(16),
                top: moderateScale(10),
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              {item?.actualPriceMonthly
                ? `${item?.actualPriceMonthly} ᴬᴱᴰ`
                : 'No price'}
            </Text>
            <Text
              style={{
                color: colors.WHITE,
                fontFamily: fontFamily.POPPINS_REGULAR,
                fontSize: textScale(16),
                top: moderateScale(10),
              }}>
              {item?.discountedPriceMonthly
                ? `${item?.discountedPriceMonthly} ᴬᴱᴰ`
                : 'No price'}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            margin: moderateScale(15),
            top: Platform.OS === 'ios' ? moderateScale(10) : moderateScale(10),
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
            onPress={() => handleBookModal()}
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

export default ItemCarsCategories;
