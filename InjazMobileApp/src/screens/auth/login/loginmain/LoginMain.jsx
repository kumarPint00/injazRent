import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Keyboard,
  Platform,
  BackHandler,
} from 'react-native';
import {Formik} from 'formik';
import images from '../../../../constants/images';
import {useNavigation} from '@react-navigation/native';
import AuthInputField from '../../../../components/input/authInputField/AuthInputField';
import styles from './styles';
import validationLoginSchema from '../../../../utils/validationLoginSchema';
import Toast from 'react-native-toast-message';
import {loginAsyncThunk} from '../../../../redux/asyncThunk/AsyncThunk';
import {moderateScale} from '../../../../styles/responsiveSize';
import {useDispatch, useSelector} from 'react-redux';
import {setAccessToken} from '../../../../redux/slices/auth_slices';
import ButtonComp from '../../../../components/button/ButtonComp/ButtonComp';
import {selectLanguage} from '../../../../redux/slices/language_slices';
import colors from '../../../../constants/colors';
import Loader from '../../../../components/Loader/Loader';
const LoginMain = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const dispatch = useDispatch();
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
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);
  const handleLogin = async values => {
    setIsLoading(true);

    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await dispatch(loginAsyncThunk(payload)).unwrap();

      if (response && response.data) {
        const responseData = response.data;
        if (responseData && responseData.token) {
          console.log(responseData, ',.,,,,,,,responseData');
          const token = responseData.token;
          dispatch(setAccessToken(token));
          Toast.show({
            type: 'success',
            text1: responseData.message,
            topOffset: moderateScale(90),
          });
          setIsLoading(false);
        } else {
          console.error('Invalid response format:', responseData);
          setIsLoading(false);
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Toast.show({
          type: 'error',
          text1: error.response.data.message,
        });
        setIsLoading(false);
      } else {
        Toast.show({
          type: 'error',
          text1: error.message,
          topOffset: moderateScale(40),
        });
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.login}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {isLoading && <Loader visible={isLoading} />}

        <View
          style={[
            styles.container,
            {
              paddingBottom: keyboardOpen
                ? Platform.OS == 'ios'
                  ? moderateScale(120)
                  : moderateScale(40)
                : moderateScale(40),
            },
          ]}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationLoginSchema(selectedLanguage)}
            onSubmit={handleLogin}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              handleBlur,
            }) => (
              <>
                <View
                  style={{
                    width: '98%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginStart: moderateScale(16),
                  }}>
                  <View style={styles.inputContainer}>
                    <AuthInputField
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      label={
                        selectedLanguage === 'en'
                          ? 'Email*'
                          : 'البريد الإلكتروني*'
                      }
                      placeholder={
                        selectedLanguage === 'en'
                          ? 'Enter your email address*'
                          : 'أدخل عنوان بريدك الالكتروني*'
                      }
                      styles={styles.inputStyle}
                      placeholderStyle={styles.placeHolderStyle}
                      titleStyle={styles.titleStyle}
                      keyboardType={'email-address'}
                      error={touched.email && errors.email}
                      touched={touched.email}
                      handleChange={handleChange('email')}
                      handleBlur={handleBlur('email')}
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      placeholderAlignment={selectedLanguage}
                      placeholderTextColor={colors.GREY_LIGHT}
                    />

                    <AuthInputField
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      label={
                        selectedLanguage === 'en' ? 'Password*' : 'كلمة المرور*'
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
                      handleChange={handleChange('password')}
                      handleBlur={handleBlur('password')}
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      rightIcon={images.HIDE}
                      placeholderAlignment={selectedLanguage}
                      placeholderTextColor={colors.GREY_LIGHT}
                    />
                  </View>
                </View>

                <View style={styles.buttonVerifyContainer}>
                  <ButtonComp
                    onPress={handleSubmit}
                    style={styles.buttonVerify}
                    text={selectedLanguage === 'en' ? 'Login' : 'تسجيل الدخول'}
                    textStyle={styles.titleVerify}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginMain;
