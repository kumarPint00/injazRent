import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import images from '../../../constants/images';
import styles from './styles';
import CountrySelector from '../../../components/radioButton/CountrySelector';
import CountriesAndCities from '../../../constants/list';
import {getAllCarsLocationThunk} from '../../../redux/asyncThunk/AsyncThunk';
import {languages} from '../../../langConstants/lng/translations';
import {selectLanguage} from '../../../redux/slices/language_slices';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../components/Loader/Loader';
import LanguageModal from '../../../components/modal/languageModal/LanguageModal';
import ButtonComp from '../../../components/button/ButtonComp/ButtonComp';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';

const InitialScreen = () => {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCountrySelectorOpen, setCountrySelectorOpen] = useState(false); // Track the state of CountrySelector
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguage);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSelectCountry = country => {
    console.log('Selected Country:', country);
    setCountrySelectorOpen(false); // Close CountrySelector after selection
  };

  const handleLanguagePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSelectLanguage = language => {
    console.log('Selected Language:', language);
    closeModal(); 
  };
  useEffect(() => {
    getAllCarsLocation();
  }, []);
  
  const getAllCarsLocation = () => {
    setIsLoading(true);
    dispatch(getAllCarsLocationThunk())
      .unwrap()
      .then(response => {
        if (response.status === 200) {
          setLocations(response.data);
          setIsLoading(false);
        } else {
          console.error('Failed to fetch locations:', response.message);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}
      <ImageBackground
        source={images.CAR_BACKGROUND}
        style={styles.imageBackground}>
        <Text style={styles.titleCountry}>
          {languages[0][selectedLanguage]}
        </Text>
        <CountrySelector
          activeOpacity={0.9}
          locations={locations}
          countries={CountriesAndCities}
          onSelectCountry={handleSelectCountry}
          selectedLanguage={selectedLanguage}
          onToggleOpen={isOpen => setCountrySelectorOpen(isOpen)} // Track the state of CountrySelector
        />
        <View
          style={[
            styles.buttonContainer,
            {
              marginTop: isCountrySelectorOpen
                ? moderateScale(20)
                : moderateScaleVertical(30),
            },
          ]}>
          <ButtonComp
            activeOpacity={0.9}
            onPress={handleLanguagePress}
            text={selectedLanguage === 'en' ? 'Select' : 'يختار'}
            textStyle={styles.buttonTextStyle}
            style={styles.buttonStyle}
          />
        </View>
      </ImageBackground>
      <LanguageModal
        visible={modalVisible}
        onClose={closeModal}
        onSelectLanguage={handleSelectLanguage}
      />
    </View>
  );
};

export default InitialScreen;
