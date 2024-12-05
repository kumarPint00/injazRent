import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AuthInputField from '../../../components/input/authInputField/AuthInputField';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../../../styles/responsiveSize';
import validationSignUpSchema from '../../../utils/validationSignUpSchema';
import {Formik} from 'formik';
import images from '../../../constants/images';
import {useDispatch, useSelector} from 'react-redux';
import {signUpAsyncThunk} from '../../../redux/asyncThunk/AsyncThunk';
import Toast from 'react-native-toast-message';
import ButtonComp from '../../../components/button/ButtonComp/ButtonComp';
import Loader from '../../../components/Loader/Loader';
import {selectLanguage} from '../../../redux/slices/language_slices';
import colors from '../../../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const selectedLanguage = useSelector(selectLanguage);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  useEffect(() => {
    const userInfo = async () => {
      try {
        const userDetailsJson = await AsyncStorage.getItem('userDetails');
        if (userDetailsJson) {
          const userDetails = JSON.parse(userDetailsJson);
          setFullName(userDetails.username);
          setEmail(userDetails.email);
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };
    userInfo();
  }, []);
  const handleSignUp = async values => {
    setIsLoading(true);

    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
      address: values.address,
      locality: values.locality,
      area: values.area,
      zipcode: values.zipcode,
      city: values.city,
    };

    try {
      const response = await dispatch(signUpAsyncThunk(payload)).unwrap();

      if (response && response.data) {
      } else {
        Toast.show({
          type: 'success',
          text1: response.message,
        });
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        Toast.show({
          type: 'error',
          text1: errorMessage,
        });
      } else {
        console.error('Error during signup:', error);
        Toast.show({
          type: 'error',
          text1: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {isLoading && <Loader visible={isLoading} />}

        <View
          style={[
            styles.container,
            {
              marginHorizontal: 10,
              paddingBottom: keyboardOpen
                ? Platform.OS == 'ios'
                  ? moderateScale(200)
                  : moderateScale(170)
                : 0,
            },
          ]}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              phoneNumber: '',
              address: '',
              city: '',
              locality: '',
              area: '',
              zipcode: '',
            }}
            validationSchema={validationSignUpSchema(selectedLanguage)}
            onSubmit={handleSignUp}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              handleBlur,
            }) => (
              <View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    label={
                      selectedLanguage === 'en' ? 'firstName*' : 'الاسم الأول*'
                    }
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your first name*'
                        : 'أدخل اسمك الأول*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'default'}
                    error={touched.firstName && errors.firstName}
                    touched={touched.firstName}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    label={
                      selectedLanguage === 'en' ? 'lastName*' : 'اسم العائلة*'
                    }
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your last name*'
                        : 'أدخل اسمك الأخير*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'default'}
                    error={touched.lastName && errors.lastName}
                    touched={touched.lastName}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    label={
                      selectedLanguage === 'en' ? 'email*' : 'بريد إلكتروني*'
                    }
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your email*'
                        : 'أدخل بريدك الإلكتروني*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'email-address'}
                    error={touched.email && errors.email}
                    touched={touched.email}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    label={
                      selectedLanguage === 'en' ? 'password*' : 'كلمة المرور*'
                    }
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your password*'
                        : 'ادخل رقمك السري*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'default'}
                    error={touched.password && errors.password}
                    touched={touched.password}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    label={
                      selectedLanguage === 'en'
                        ? 'phoneNumber*'
                        : 'رقم التليفون*'
                    }
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your contact information*'
                        : 'أدخل معلومات الاتصال*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'number-pad'}
                    error={touched.phoneNumber && errors.phoneNumber}
                    touched={touched.phoneNumber}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.address}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    label={selectedLanguage === 'en' ? 'address*' : 'عنوان*'}
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your address*'
                        : 'أدخل معلومات الاتصال*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'default'}
                    error={touched.address && errors.address}
                    touched={touched.address}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.locality}
                    onChangeText={handleChange('locality')}
                    onBlur={handleBlur('locality')}
                    label={selectedLanguage === 'en' ? 'locality*' : 'المنطقة*'}
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your locality*'
                        : 'أدخل منطقتك *'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'default'}
                    error={touched.locality && errors.locality}
                    touched={touched.locality}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.area}
                    onChangeText={handleChange('area')}
                    onBlur={handleBlur('area')}
                    label={selectedLanguage === 'en' ? 'area*' : 'مساحة*'}
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your area*'
                        : 'أدخل المساحة*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'default'}
                    error={touched.area && errors.area}
                    touched={touched.area}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.zipcode}
                    onChangeText={handleChange('zipcode')}
                    onBlur={handleBlur('zipcode')}
                    label={
                      selectedLanguage === 'en' ? 'zipcode*' : 'الرمز البريدي*'
                    }
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your zipcode*'
                        : 'أدخل الرمز البريدي*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'number-pad'}
                    error={touched.zipcode && errors.zipcode}
                    touched={touched.zipcode}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <AuthInputField
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    label={selectedLanguage === 'en' ? 'city*' : 'مدينة*'}
                    placeholder={
                      selectedLanguage === 'en'
                        ? 'Enter your city*'
                        : 'أدخل مدينتك*'
                    }
                    styles={styles.inputStyle}
                    placeholderStyle={styles.placeHolderStyle}
                    titleStyle={styles.titleStyle}
                    keyboardType={'default'}
                    error={touched.city && errors.city}
                    touched={touched.city}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholderTextColor={colors.GREY_LIGHT}
                  />
                </View>
                <View
                  style={{
                    paddingBottom: Platform.OS === 'ios' ? 80 : 80,
                    alignItems: 'center',
                  }}>
                  <ButtonComp
                    onPress={handleSubmit}
                    style={styles.buttonVerify}
                    text={selectedLanguage === 'en' ? 'SignUp' : 'اشتراك'}
                    textStyle={styles.titleVerify}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
