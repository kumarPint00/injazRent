import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {Formik, useFormikContext} from 'formik';
import styles from './styles';
import fontFamily from '../../../styles/fontFamily';
import {moderateScale, textScale} from '../../../styles/responsiveSize';
import images from '../../../constants/images';
import colors from '../../../constants/colors';
import IconInputField from '../../input/iconInputField/IconInputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComp from '../../button/ButtonComp/ButtonComp';
import DropdownMode from '../../dropDown/DropDownMode';
import DatePicker from 'react-native-date-picker';
import {createInquiryAsyncThunk} from '../../../redux/asyncThunk/AsyncThunk';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import routes from '../../../constants/routes';
import validationSchema from '../../../utils/valdiationSchema';

const BookNowModal = ({
  visible,
  onClose,
  selectedLanguage,
  id,
  carName,
  brandName,
  year,
  dailyPrice,
  monthlyPrice,
  weeklyPrice,
  image,
  transmission,
}) => {
  console.log(carName, '.....carName');
  const [pickupDatePickerVisible, setPickupDatePickerVisible] = useState(false);
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropoffDatePickerVisible, setDropoffDatePickerVisible] =
    useState(false);
  const [dropoffDate, setDropoffDate] = useState(new Date());
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const options = [
    `Package`,
    `DAILY - ${dailyPrice}`,
    `MONTHLY - ${monthlyPrice}`,
    `WEEKLY - ${weeklyPrice}`,
  ];
  console.log(id, '.......id of cars');
  const mode = [
    'Car Delivery Mode',
    'Door Step Delivery',
    'Self Pickup Delivery',
  ];
  const handlePickupCalendarIconPress = () => {
    setPickupDatePickerVisible(true);
    setDropoffDatePickerVisible(false);
  };

  const handleDropoffCalendarIconPress = () => {
    setDropoffDatePickerVisible(true);
    setPickupDatePickerVisible(false);
  };

  const handlePickupDateChange = newDate => {
    setPickupDate(newDate);
    setPickupDatePickerVisible(false);
    // Update Formik state with selected pickup date
  };

  const handleDropoffDateChange = newDate => {
    setDropoffDate(newDate);
    setDropoffDatePickerVisible(false);
    // Update Formik state with selected dropoff date
  };

  const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const handleBooking = values => {
    console.log('handle booking,,,,,');
    setIsLoading(true);
    const pickupDateWithoutTime = new Date(
      pickupDate.getFullYear(),
      pickupDate.getMonth(),
      pickupDate.getDate(),
    );
    const dropoffDateWithoutTime = new Date(
      dropoffDate.getFullYear(),
      dropoffDate.getMonth(),
      dropoffDate.getDate(),
    );

    const payload = {
      // id: id,
      name: values.name,
      carName: values.carName,
      packages: values.packages,
      deliveryMode: values.carDeliveryMode,
      phoneNumber: values.phoneNumber,
      email: values.email,
      pickUpLoc: values.pickUpLoc,
      dropLocation: values.dropLocation,
      startDate: formatDate(pickupDateWithoutTime),
      endDate: formatDate(dropoffDateWithoutTime),
      message: values.message,
    };

    const response = dispatch(createInquiryAsyncThunk(payload))
      .then(res => {
        if (res.payload.status === 201) {
          onClose();
          Toast.show({
            type: 'success',
            text1: res.payload.message,
          });
          navigation.navigate(routes.BOOKING_INFO_SCREEN, {
            image: image,
            startDate: payload.startDate,
            endDate: payload.endDate,
            id: id,
            carName: carName,
            brandName: brandName,
            year: year,
            dailyKm: dailyPrice,
            weeklyKm: weeklyPrice,
            monthlyKm: monthlyPrice,
            transmission: transmission,
            name: values.name,
          });
        }
      })
      .catch(err => console.log(err, '.......errr'));
  };

  return (
    <View>
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <KeyboardAwareScrollView
              bounces={false}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                width: moderateScale(330),
              }}>
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                    fontSize: textScale(18),
                    color: colors.BLACK,
                    textAlign: 'left',
                  }}>
                  {selectedLanguage === 'en' ? 'Booking' : 'الحجز'}
                </Text>
                <Formik
                  initialValues={{
                    id: id,
                    name: '',
                    carName: `${carName}, ${brandName}, ${year}`,
                    packages: 'Package',
                    carDeliveryMode: 'Car Delivery Mode',
                    phoneNumber: '',
                    email: '',
                    pickUpLoc: '',
                    dropLocation: '',
                    message: '',
                    startDate: new Date(),
                    endDate: new Date(),
                  }}
                  validationSchema={validationSchema(selectedLanguage)}
                  onSubmit={values => {
                    console.log(values, ',,,,,,calasd');
                    handleBooking(values);
                  }}>
                  {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    handleBlur,
                  }) => (
                    <>
                      <View style={{bottom: moderateScale(5)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          iconSource={images.USER_PROFILE}
                          placeholder={
                            selectedLanguage === 'en' ? 'Name' : 'اسم'
                          }
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          value={values.name}
                          errorMessage={touched.name && errors.name}
                        />
                      </View>
                      <View style={{bottom: moderateScale(14)}}>
                        <IconInputField
                          iconSource={images.CAR}
                          placeholder={
                            selectedLanguage === 'en'
                              ? 'Car Name'
                              : 'اسم السيارة'
                          }
                          onChangeText={handleChange('carName')}
                          onBlur={handleBlur('carName')}
                          value={values.carName}
                          editable={false}
                          errorMessage={touched.carName && errors.carName}
                        />
                      </View>

                      <DropdownMode
                        leftImgSrc={images.BRIEF_CASE}
                        options={options}
                        selectedOption={values.packages}
                        onSelect={option => {
                          handleChange('packages')(option);
                        }}
                        rightImgSrc={images.DROP_DOWN}
                        style={{marginBottom: moderateScale(20), zIndex: 2}}
                        errorMessage={touched.packages && errors.packages}
                      />

                      <DropdownMode
                        leftImgSrc={images.BRIEF_CASE}
                        options={mode}
                        selectedOption={values.carDeliveryMode}
                        onSelect={option => {
                          handleChange('carDeliveryMode')(option);
                        }}
                        rightImgSrc={images.DROP_DOWN}
                        style={{marginBottom: moderateScale(20), zIndex: 1}}
                        errorMessage={
                          touched.carDeliveryMode && errors.carDeliveryMode
                        }
                      />
                      <View style={{bottom: moderateScale(15)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          iconSource={images.PHONE_CALL}
                          placeholder={
                            selectedLanguage === 'en'
                              ? 'Phone Number'
                              : 'رقم التليفون'
                          }
                          onChangeText={handleChange('phoneNumber')}
                          onBlur={handleBlur('phoneNumber')}
                          keyboardType={'number-pad'}
                          value={values.phoneNumber}
                          errorMessage={
                            touched.phoneNumber && errors.phoneNumber
                          }
                        />
                      </View>
                      <View style={{bottom: moderateScale(20)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          iconSource={images.EMAIL_ID}
                          placeholder={
                            selectedLanguage === 'en'
                              ? 'Email'
                              : 'بريد إلكتروني'
                          }
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          keyboardType={'email-address'}
                          value={values.email}
                          errorMessage={touched.email && errors.email}
                        />
                      </View>

                      <View style={{bottom: moderateScale(30)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          iconSource={images.MAPS_FLAGS}
                          placeholder={
                            selectedLanguage === 'en'
                              ? 'Pick up Location'
                              : 'اختر موقعا'
                          }
                          onChangeText={handleChange('pickUpLoc')}
                          onBlur={handleBlur('pickUpLoc')}
                          value={values.pickUpLoc}
                          errorMessage={touched.pickUpLoc && errors.pickUpLoc}
                        />
                      </View>
                      <View style={{bottom: moderateScale(30)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          iconSource={images.MAPS_FLAGS}
                          placeholder={
                            selectedLanguage === 'en'
                              ? 'Drop Location'
                              : 'إسقاط الموقع'
                          }
                          onChangeText={handleChange('dropLocation')}
                          onBlur={handleBlur('dropLocation')}
                          value={values.dropLocation}
                          errorMessage={
                            touched.dropLocation && errors.dropLocation
                          }
                        />
                      </View>
                      <View style={{bottom: moderateScale(40)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          label={
                            selectedLanguage === 'en'
                              ? 'Pick Up Date'
                              : 'اختر تاريخا'
                          }
                          iconSource={images.CALENDAR}
                          placeholder={
                            selectedLanguage === 'en'
                              ? 'dd/mm/yyyy'
                              : 'ي ي/مم/س س'
                          }
                          value={formatDate(pickupDate)}
                          rightIcon={images.CALENDARSS}
                          onRightIconPress={handlePickupCalendarIconPress}
                        />
                      </View>
                      <View style={{bottom: moderateScale(45)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          label={
                            selectedLanguage === 'en'
                              ? 'Pick Off Date'
                              : 'تاريخ الانتقاء'
                          }
                          iconSource={images.CALENDAR}
                          placeholder={
                            selectedLanguage === 'en'
                              ? 'dd/mm/yyyy'
                              : 'ي ي/مم/س س'
                          }
                          value={formatDate(dropoffDate)}
                          rightIcon={images.CALENDARSS}
                          onRightIconPress={handleDropoffCalendarIconPress}
                        />
                      </View>
                      <View style={{bottom: moderateScale(55)}}>
                        <IconInputField
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          iconSource={images.COMMENT}
                          placeholder={
                            selectedLanguage === 'en' ? 'Message' : 'رسالة'
                          }
                          onChangeText={handleChange('message')}
                          onBlur={handleBlur('message')}
                          value={values.message}
                          errorMessage={touched.message && errors.message}
                        />
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <ButtonComp
                            activeOpacity={0.8}
                            onPress={onClose}
                            style={{
                              backgroundColor: colors.BLUE,
                              width: moderateScale(120),
                              height: moderateScale(45),
                              end: moderateScale(30),
                            }}
                            text={selectedLanguage === 'en' ? 'Cancel' : 'يلغي'}
                            textStyle={{
                              fontSize: textScale(14),
                              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                              textTransform: 'uppercase',
                            }}
                          />
                          <ButtonComp
                            activeOpacity={0.8}
                            onPress={handleSubmit}
                            style={{
                              backgroundColor: colors.BLUE,
                              width: moderateScale(120),
                              height: moderateScale(45),
                              marginHorizontal: moderateScale(5),
                              start: moderateScale(10),
                            }}
                            text={
                              selectedLanguage === 'en' ? 'Submit' : 'يُقدِّم'
                            }
                            textStyle={{
                              fontSize: textScale(14),
                              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
                              textTransform: 'uppercase',
                            }}
                          />
                        </View>
                      </View>
                      {pickupDatePickerVisible && (
                        <View style={styles.datePickerContainer}>
                          <DatePicker
                            date={pickupDate}
                            onDateChange={handlePickupDateChange}
                            mode="date"
                            androidVariant="native"
                            display="spinner"
                          />
                          <TouchableOpacity
                            onPress={() => setPickupDatePickerVisible(false)}
                            style={styles.doneButton}>
                            <Text>Done</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                      {dropoffDatePickerVisible && (
                        <View style={styles.datePickerContainer}>
                          <DatePicker
                            date={dropoffDate}
                            onDateChange={handleDropoffDateChange}
                            mode="date"
                            androidVariant="native"
                            display="spinner"
                          />
                          <TouchableOpacity
                            onPress={() => setDropoffDatePickerVisible(false)}
                            style={styles.doneButton}>
                            <Text>Done</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </>
                  )}
                </Formik>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BookNowModal;
