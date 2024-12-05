import {View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import HeaderCategory from '../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../constants/images';
import {Formik} from 'formik';
import AuthInputField from '../../../../components/input/authInputField/AuthInputField';
import ButtonComp from '../../../../components/button/ButtonComp/ButtonComp';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../../redux/slices/language_slices';
import {
  getUserByIdThunk,
  updateProfileThunk,
} from '../../../../redux/asyncThunk/AsyncThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Loader from '../../../../components/Loader/Loader';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const [id, setId] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const focused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        console.log(userId, '......userId');
        if (userId) {
          setId(userId);
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };
    userInfo();
  }, [focused]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getUserInfoById();
  }, [focused]);

  const getUserInfoById = () => {
    setIsLoading(true);
    dispatch(getUserByIdThunk({id: id}))
      .unwrap()
      .then(apiResponse => {
        if (apiResponse && apiResponse.success) {
          const {fullName, email, contactInformation} = apiResponse.data;
          console.log(fullName, '....userName');
          console.log(email, '....email');
          setFullName(fullName);
          setEmail(email);
        } else {
          console.log('User details not found.');
        }
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleUpdateAccount = async values => {
    setIsLoading(true);
    console.log(values);

    try {
      await dispatch(
        updateProfileThunk({fullName, email}),
        Toast.show({
          type: 'success',
          text1: 'Profile Updated Successfully',
        }),
      )
        .unwrap()
        .then(res => console.log(res, '...........profle Update successfully'))
        .catch(err => console.log(err, '...........error update profile'));
      setIsLoading(false);
    } catch (error) {
      console.log('Failed to update profile:', error);
      setIsLoading(false);
    }
  };
  const validateForm = values => {
    const errors = {};

    if (!fullName.trim()) {
      errors.userName = 'Name or username is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    }

    return errors;
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}

      <HeaderCategory
        activeOpacity={0.9}
        title={
          selectedLanguage === 'en' ? 'Edit Profile' : 'تعديل الملف الشخصي'
        }
        backIcon={images.ARROW_LEFT}
        onPress={() => navigation.goBack()}
      />
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          contactInformation: '',
        }}
        validate={validateForm}
        onSubmit={values => handleUpdateAccount(values)}>
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
                  value={fullName}
                  onChangeText={text => {
                    setFullName(text);
                  }}
                  onBlur={handleBlur('fullName')}
                  label={
                    selectedLanguage === 'en'
                      ? 'Name or username*'
                      : 'الاسم أو اسم المستخدم*'
                  }
                  labelStyle={{textAlign: 'left'}}
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
                  error={touched.fullName && errors.fullName}
                  touched={touched.fullName}
                  handleChange={handleChange('fullName')}
                  handleBlur={handleBlur('fullName')}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputContainer}>
                <AuthInputField
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                  }}
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
                    {textAlign: selectedLanguage === 'en' ? 'left' : 'left'},
                  ]}
                  labelStyle={{textAlign: 'left'}}
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
            </View>
            <View style={styles.buttonContainer}>
              <ButtonComp
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.buttonEdit}
                text={selectedLanguage === 'en' ? 'Upgrade' : 'يرقي'}
                textStyle={styles.titleEdit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default EditProfileScreen;
