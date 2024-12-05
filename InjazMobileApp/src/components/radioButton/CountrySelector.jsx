// CountrySelector.js
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import images from '../../constants/images';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../redux/slices/language_slices';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';
import {selectCountry} from '../../redux/slices/location_slices';

const CountrySelector = ({
  locations,
  onSelectCountry,
  selectedLanguage,
  activeOpacity,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [showLocationList, setShowLocationList] = useState(false);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    setSelectedLocation(locations[0]);
  }, [locations]);

  const handleSelectLocation = location => {
    setSelectedLocation(location);
    setShowLocationList(false);
    dispatch(selectCountry(location.Name));
    onSelectCountry && onSelectCountry(location);
    setTimeout(() => {
      navigation.navigate(routes.LOGIN_SCREEN);
    }, 3000);
  };

  const handleDropdownClick = () => {
    setShowLocationList(!showLocationList);
  };

  return (
    <View>
      <View style={styles.dropDownCountryContainer}>
        <View style={styles.dropDownView}>
          <View style={styles.dropDownSelectedItem}>
            <Text style={styles.selectedCityText}>
              {selectedLanguage === 'ar'
                ? 'الإمارات العربية المتحدة'
                : 'United Arab Emirates'}
            </Text>
            <Image style={styles.dropdownImage} source={images.DROP_DOWN} />
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={styles.dropDownCountryContainer}
        onPress={handleDropdownClick}>
        <View style={styles.dropDownSelectedItem}>
          <Text style={styles.selectedCityText}>
            {selectedLocation
              ? selectedLocation.Name
              : selectedLanguage === 'ar'
              ? 'حدد المدينة'
              : 'Select City'}
          </Text>
          <Image style={styles.dropdownImage} source={images.DROP_DOWN} />
        </View>
      </TouchableOpacity>

      {showLocationList && (
        <View style={styles.cityList}>
          <Text style={styles.selectCity}>
            {selectedLanguage === 'en' ? 'Select City' : 'اختر المدينة'}
          </Text>
          <View>
            {locations.map((location, index) => (
              <TouchableOpacity
                key={index}
                style={styles.cityRadioButton}
                onPress={() => handleSelectLocation(location)}>
                <View style={styles.radioCircle}>
                  {selectedLocation &&
                    selectedLocation._id === location._id && (
                      <View style={styles.selectedRb} />
                    )}
                </View>

                <Text style={styles.radioText}>{location.Name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default CountrySelector;
