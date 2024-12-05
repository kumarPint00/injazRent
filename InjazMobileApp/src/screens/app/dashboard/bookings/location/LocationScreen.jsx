import {View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import InputField from '../../../../../components/input/InputField/InputField';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const LocationScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View style={styles.container}>
      <HeaderCategory
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Location' : 'موقع'}
      />
      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField
            leftIcon={images.SEARCH}
            placeholder={
              selectedLanguage === 'en' ? 'Search Location' : 'موقع البحث'
            }
            imageStyle={styles.inputImage}
            placeholderStyle={styles.inputPlaceholder}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.currentLocationButtonContainer}>
          <Image source={images.CURRENT_LOCATION} style={styles.locationIcon} />
          <Text style={styles.currentLocationText}>
            {selectedLanguage === 'en'
              ? 'Use current location'
              : 'استخدام الموقع الحالي'}
          </Text>
        </TouchableOpacity>
        <View style={styles.mapContainer}>
          <Image
            resizeMode="contain"
            source={images.MAP}
            style={styles.mapImage}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.currentLocationButton}>
            <Image
              source={images.CURRENT_LOCATION}
              style={styles.currentLocationIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LocationScreen;
