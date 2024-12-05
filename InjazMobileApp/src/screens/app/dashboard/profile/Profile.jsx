import {View, Text, Platform} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCategory from '../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../constants/images';
import {Formik} from 'formik';
import AuthInputField from '../../../../components/input/authInputField/AuthInputField';
import ButtonComp from '../../../../components/button/ButtonComp/ButtonComp';
import validationEditSchema from '../../../../utils/validationEditSchema';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../redux/slices/language_slices';

const Profile = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);

 
  // const handleSignUp = async values => {
  //   setIsLoading(true);

  //   const payload = {
  //     firstName: values.firstName,
  //     lastName: values.lastName,
  //     email: values.email,
  //     phoneNumber: values.phoneNumber,
  //   };

  //   try {
  //     const response = await dispatch(signUpAsyncThunk(payload)).unwrap();

  //     if (response && response.data) {
  //       navigation.navigate(routes.LOGIN_SCREEN);
  //     } else {
  //       Toast.show({
  //         type: 'success',
  //         text1: response.message,
  //       });
  //     }
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.data &&
  //       error.response.data.message
  //     ) {
  //       const errorMessage = error.response.data.message;
  //       Toast.show({
  //         type: 'error',
  //         text1: errorMessage,
  //       });
  //     } else {
  //       console.error('Error during signup:', error);
  //       Toast.show({
  //         type: 'error',
  //         text1: error.message,
  //       });
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        title={selectedLanguage === 'en' ? 'Profile' : 'الملف الشخصي'}
        backIcon={images.ARROW_LEFT}
        onPress={() => navigation.goBack()}
      />
      <Formik
        initialValues={{
          userName: '',
          email: '',
          phoneNumber: '',
        }}
        validationSchema={validationEditSchema(selectedLanguage)}
        onSubmit={handleSignUp}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
        }) => (
          <>
            <View style={styles.mainContainer}>
              <View style={styles.inputContainer}>
                <AuthInputField
                  value={values.userName}
                  onChangeText={handleChange('userName')}
                  onBlur={handleBlur('userName')}
                  label={
                    selectedLanguage === 'en'
                      ? 'Name or username*'
                      : 'الاسم أو اسم المستخدم*'
                  }
                  placeholder={
                    selectedLanguage === 'en'
                      ? 'Name or username*'
                      : 'الاسم أو اسم المستخدم*'
                  }
                  styles={styles.inputStyle}
                  placeholderStyle={styles.placeHolderStyle}
                  titleStyle={styles.titleStyle}
                  placeholderAlignment={selectedLanguage}
                  keyboardType={'default'}
                  error={touched.userName && errors.userName}
                  touched={touched.userName}
                  handleChange={handleChange('userName')}
                  handleBlur={handleBlur('userName')}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputContainer}>
                <AuthInputField
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  label={
                    selectedLanguage === 'en' ? 'Email*' : 'البريد الإلكتروني*'
                  }
                  placeholder={
                    selectedLanguage === 'en' ? 'Email*' : 'البريد الإلكتروني*'
                  }
                  styles={styles.inputStyle}
                  placeholderStyle={[
                    styles.placeHolderStyle,
                    // Conditionally set textAlign based on the selected language
                    {textAlign: selectedLanguage === 'en' ? 'left' : 'left'},
                  ]}
                  placeholderAlignment={selectedLanguage}
                  titleStyle={styles.titleStyle}
                  keyboardType={'email-address'}
                  error={touched.email && errors.email}
                  touched={touched.email}
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputContainer}>
                <AuthInputField
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  label={
                    selectedLanguage === 'en' ? 'phoneNumber*' : 'رقم الهاتف *'
                  }
                  placeholder={
                    selectedLanguage === 'en'
                      ? 'Enter your phone number'
                      : 'ادخل رقم هاتفك'
                  }
                  styles={styles.inputStyle}
                  placeholderStyle={[
                    styles.placeHolderStyle,
                    // Conditionally set textAlign based on the selected language
                    {textAlign: selectedLanguage === 'en' ? 'left' : 'left'},
                  ]}
                  placeholderAlignment={selectedLanguage}
                  titleStyle={styles.titleStyle}
                  keyboardType={'number-pad'}
                  error={touched.phoneNumber && errors.phoneNumber}
                  touched={touched.phoneNumber}
                  handleChange={handleChange('phoneNumber')}
                  handleBlur={handleBlur('phoneNumber')}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <ButtonComp
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.buttonEdit}
                text={selectedLanguage === 'en' ? 'Submit' : 'يُقدِّم'}
                textStyle={styles.titleEdit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Profile;
