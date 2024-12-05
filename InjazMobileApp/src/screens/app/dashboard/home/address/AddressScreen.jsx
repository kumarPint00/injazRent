import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import {useNavigation} from '@react-navigation/native';
import images from '../../../../../constants/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {moderateScale} from '../../../../../styles/responsiveSize';
import styles from './styles';
import {
  getAddressThunk,
  getUserByIdThunk,
} from '../../../../../redux/asyncThunk/AsyncThunk';
import Loader from '../../../../../components/Loader/Loader';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';

const AddressScreen = () => {
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState('');
  console.log(id, '.....id');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const idd = await AsyncStorage.getItem('userId');
        console.log(idd, '.....id in address');
        if (idd) {
          setId(idd);
        } else {
          console.log('Some user data is missing.');
        }
      } catch (error) {
        console.error('Error retrieving address from AsyncStorage:', error);
      }
    };

    getUserInfo();
  }, []);

  useEffect(() => {
    if (id) {
      getUserAddressById(id);
    }
  }, [id]);

  const getUserAddressById = userId => {
    console.log(userId, '....userId');
    setIsLoading(true);
    dispatch(getAddressThunk({id: id}))
      .unwrap()
      .then(apiResponse => {
        console.log(apiResponse?.data, '.......api response of address');
        const {street, city, country, state} = apiResponse.data.data;
        setCity(city);
        setCountry(country);
        setState(state);
        setStreet(street);
      })
      .catch(error => {
        console.error('Error fetching user address:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Address' : 'عنوان'}
      />
      <View style={styles.addressContainer}>
        <View style={styles.row}>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            Street
          </Text>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            {street}
          </Text>
        </View>
        <View style={[styles.row, {marginTop: moderateScale(4)}]}>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            City
          </Text>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            {city}
          </Text>
        </View>
        <View style={[styles.row, {marginTop: moderateScale(4)}]}>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            Area
          </Text>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            {country}
          </Text>
        </View>
        <View style={[styles.row, {marginTop: moderateScale(4)}]}>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            Locality
          </Text>
          <Text
            style={{
              color: colors.BLACK,
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
            }}>
            {state}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AddressScreen;
