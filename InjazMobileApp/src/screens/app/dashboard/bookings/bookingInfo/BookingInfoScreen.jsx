import {View, Text, Image, ScrollView, Platform} from 'react-native';
import React from 'react';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import {useNavigation, useRoute} from '@react-navigation/native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';
import {useSelector} from 'react-redux';

const BookingInfoScreen = () => {
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const route = useRoute();
  const imagess = route?.params?.image;
  const startDate = route?.params?.startDate;
  const endDate = route?.params?.endDate;
  const id = route?.params?.id;
  const carName = route?.params?.carName;
  const brandName = route?.params?.brandName;
  const year = route?.params?.year;
  const transmission = route?.params?.transmission;
  const dailyKm = route?.params?.dailyKm;
  const weeklyKm = route?.params?.weeklyKm;
  const monthlyKm = route?.params?.monthlyKm;
  const name = route?.params?.name;
  console.log(startDate, '.....startDate');
  console.log(endDate, '.....endDate');
  console.log(id, '.....id');
  console.log(carName, '.....carName');
  console.log(brandName, '.....brand');
  console.log(year, '.....year');
  console.log(transmission, '.....transmission');
  console.log(dailyKm, '.....dailyKm');
  console.log(weeklyKm, '.....weeklyKm');
  console.log(monthlyKm, '.....monthlyKm');
  console.log(name, '.....name');

  return (
    <View>
      <HeaderCategory
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Bookings Info' : 'معلومات الحجوزات'}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          backgroundColor: colors.BLUE,
          justifyContent: 'center',
          alignItems: 'center',
          padding: moderateScale(15),
        }}>
        <Text
          numberOfLines={2}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            fontSize: textScale(12),
            color: colors.WHITE,
            textAlign: 'center',
          }}>
          {selectedLanguage === 'en'
            ? `Thank You ${name} Your Booking Has Been Confirmed`
            : `شكرًا لك ${name} لقد تم تأكيد حجزك`}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.WHITE,
            paddingBottom: moderateScale(222),
          }}>
          <Image
            resizeMode="contain"
            source={{uri: imagess}}
            style={{width: moderateScale(400), height: moderateScale(250)}}
          />
          <View
            style={[
              {
                marginHorizontal: moderateScale(10),
                backgroundColor: 'white',
                borderRadius: moderateScale(5),
                padding: moderateScale(20),
                ...(Platform.OS === 'android'
                  ? {elevation: 5}
                  : {
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                    }),
              },
            ]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: textScale(10),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  color: colors.BLUE,
                  textTransform: 'uppercase',
                }}>
                {selectedLanguage === 'en' ? 'Name' : 'اسم'}
              </Text>
              <Text
                style={{
                  color: colors.BLACK,
                  fontSize: textScale(10),
                  textTransform: 'uppercase',
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                }}>
                {name}
              </Text>
            </View>
            <View style={{marginTop: moderateScale(20)}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: textScale(10),
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                    color: colors.BLUE,
                    textTransform: 'uppercase',
                  }}>
                  {selectedLanguage === 'en'
                    ? 'Free Km Daily Weekly Monthly'
                    : 'كيلومتر مجاني يومي اسبوعي شهري'}
                </Text>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontSize: textScale(10),
                    textTransform: 'uppercase',
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  }}>
                  {`${dailyKm}KM / ${weeklyKm}KM / ${monthlyKm}KM`}
                </Text>
              </View>
            </View>
            <View style={{marginTop: moderateScale(20)}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: textScale(10),
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                    color: colors.BLUE,
                    textTransform: 'uppercase',
                  }}>
                  {selectedLanguage === 'en' ? 'Transmission' : 'الانتقال'}
                </Text>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontSize: textScale(10),
                    textTransform: 'uppercase',
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  }}>
                  {transmission}
                </Text>
              </View>
            </View>
            <View style={{marginTop: moderateScale(20)}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: textScale(10),
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                    color: colors.BLUE,
                    textTransform: 'uppercase',
                  }}>
                  {selectedLanguage === 'en' ? 'Pick Up Date' : 'اختر تاريخا'}
                </Text>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontSize: textScale(10),
                    textTransform: 'uppercase',
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  }}>
                  {startDate}
                </Text>
              </View>
            </View>
            <View style={{marginTop: moderateScale(20)}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: textScale(10),
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                    color: colors.BLUE,
                    textTransform: 'uppercase',
                  }}>
                  {selectedLanguage === 'en'
                    ? 'Drop Off Date'
                    : 'تاريخ التسليم'}
                </Text>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontSize: textScale(10),
                    textTransform: 'uppercase',
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  }}>
                  {endDate}
                </Text>
              </View>
            </View>
            <View style={{marginTop: moderateScale(20)}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: textScale(10),
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                    color: colors.BLUE,
                    textTransform: 'uppercase',
                  }}>
                  {selectedLanguage === 'en'
                    ? 'Your Confirmation Number'
                    : 'رقم التأكيد الخاص بك'}
                </Text>
                <Text
                  style={{
                    color: colors.BLACK,
                    fontSize: textScale(10),
                    textTransform: 'uppercase',
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  }}>
                  {id}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: moderateScale(10),
              top: moderateScale(10),
            }}>
            <Text
              style={{
                fontSize: textScale(12),
                textAlign: 'center',
                color: colors.BLUE,
                fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              }}>
              {selectedLanguage === 'en'
                ? ' Additional Fee May Apply If Changes Are Made To Your Return Date,Time And / Or Location'
                : 'قد يتم تطبيق رسوم إضافية إذا تم إجراء تغييرات على تاريخ عودتك،الوقت و/أو الموقع'}
            </Text>
          </View>

          <View
            style={[
              {
                marginHorizontal: moderateScale(10),
                marginTop: moderateScale(20),
                paddingBottom: moderateScale(10),
                backgroundColor: 'white',
                borderRadius: moderateScale(5),
                // Add shadow properties
                ...(Platform.OS === 'android'
                  ? {elevation: 5}
                  : {
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                    }),
              },
            ]}>
            <View
              style={{
                backgroundColor: colors.BLUE,
                height: moderateScale(45),
                justifyContent: 'center',
                borderTopLeftRadius: moderateScale(4),
                borderTopRightRadius: moderateScale(4),
              }}>
              <Text
                style={{
                  marginStart: moderateScale(10),
                  fontSize: textScale(12),
                  color: colors.WHITE,
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  textAlign: 'left',
                }}>
                {selectedLanguage === 'en'
                  ? 'Location Information'
                  : 'معلومات الموقع'}
              </Text>
            </View>
            <View style={{marginTop: moderateScale(10)}}>
              <Text
                style={{
                  marginStart: moderateScale(10),
                  fontSize: textScale(12),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  color: colors.BLUE,
                  textAlign: 'left',
                }}>
                {selectedLanguage === 'en' ? 'Pick Up Location' : 'اختر موقعا'}
              </Text>
            </View>
            <View style={{marginTop: moderateScale(10)}}>
              <Text
                style={{
                  marginStart: moderateScale(10),
                  fontSize: textScale(12),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  textAlign: 'left',
                  color: colors.BLACK,
                }}>
                {selectedLanguage === 'en'
                  ? 'Logic Cars Rental Sole Proprietorship Llc Dubai Office Office Number 554 Tamani Arts Offices Tower Fifth Floor Al Alsayel Street Business Bay Dubai, Uae.'
                  : 'المنطق لتأجير السيارات شركة فردية ذ.م.م. مكتب دبي رقم 554 برج مكاتب تماني ارتس الدور الخامس السيل شارع الخليج التجاري دبي، الإمارات العربية المتحدة.'}
              </Text>
            </View>

            <View style={{marginTop: moderateScale(10)}}>
              <Text
                style={{
                  marginStart: moderateScale(10),
                  fontSize: textScale(12),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  color: colors.BLUE,
                  textAlign: 'left',
                }}>
                {selectedLanguage === 'en'
                  ? 'Pick Off Location'
                  : 'اختر الموقع'}
              </Text>
            </View>
            <View style={{marginTop: moderateScale(10)}}>
              <Text
                style={{
                  marginStart: moderateScale(10),
                  fontSize: textScale(12),
                  fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                  textAlign: 'left',
                  color: colors.BLACK,
                }}>
                {selectedLanguage === 'en'
                  ? 'Logic Cars Rental Sole Proprietorship Llc Dubai Office Office Number 554 Tamani Arts Offices Tower Fifth Floor Al Alsayel Street Business Bay Dubai, Uae.'
                  : 'المنطق لتأجير السيارات شركة فردية ذ.م.م. مكتب دبي رقم 554 برج مكاتب تماني ارتس الدور الخامس السيل شارع الخليج التجاري دبي، الإمارات العربية المتحدة.'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookingInfoScreen;
