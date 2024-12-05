import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import InputField from '../../../../../components/input/InputField/InputField';
import images from '../../../../../constants/images';
import styles from './styles';
import colors from '../../../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../../../constants/routes';
import CollapsibleView from '../../../../../components/collapsableView/CollapsableView';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import SwipeButton from '../../../../../components/button/swiperButton/SwiperButton';
import MapView, {Marker} from 'react-native-maps';
import {moderateScale} from '../../../../../styles/responsiveSize';

const DeliveryScreen = () => {
  const [isContentVisible, setContentVisible] = useState(false);
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  const toggleContentVisibility = () => {
    setContentVisible(!isContentVisible);
  };
  const handleConfirmPickUp = value => {
    if (value) {
      navigation.navigate(routes.RESIDENT);
    }
  };

  return (
    <View>
      <Text style={styles.textRegular}>
        {selectedLanguage === 'en'
          ? 'Your car will be delivered to you at the comfort of your time.'
          : 'سيتم تسليم سيارتك إليك في الوقت الذي يناسبك.'}
      </Text>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.textBold}>
          {selectedLanguage === 'en' ? 'Select your location' : 'حدد موقعك'}
        </Text>
      </View>
      <View style={styles.inputFieldContainer}>
        <InputField
          leftIcon={images.SEARCH}
          placeholder={
            selectedLanguage === 'en'
              ? 'Kphb hyderabd , Bapu nagar'
              : 'كفب حيدر أباد , بابو نجار'
          }
          placeholderStyle={styles.inputFieldPlaceholder}
          imageStyle={styles.inputFieldIcon}
          style={styles.inputField}
        />
      </View>
      <View
        // onPress={() => navigation.navigate(routes.LOCATION_SCREEN)}
        activeOpacity={0.9}
        style={styles.imageContainer}>
        <View style={{width: '100%', height: moderateScale(200)}}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 24.3716,
              longitude: 54.5214,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={mapStyle}>
            <Marker
              draggable
              coordinate={{
                latitude: 24.3716,
                longitude: 54.5214,
              }}
              title={
                'Al Mihad St - Mohamed Bin Zayed City - ME-10 - Abu Dhabi - UAE'
              }
            />
          </MapView>
        </View>
      </View>
      <CollapsibleView
        title={selectedLanguage === 'en' ? 'Building Name' : 'اسم المبنى'}
        isContentVisible={isContentVisible}
        toggleContentVisibility={toggleContentVisibility}
        style={styles.collapsibleViewContainer}>
        {isContentVisible && (
          <View style={styles.collapsibleContent}>
            <TextInput
              style={styles.inputField}
              placeholder={
                selectedLanguage === 'en' ? 'Building Name' : 'اسم المبنى'
              }
              placeholderTextColor={colors.GREY_LIGHT}
            />
            <View style={{width: '93%'}}>
              <TextInput
                style={styles.multilineInputField}
                numberOfLines={4}
                textAlignVertical={'top'}
                placeholder={
                  selectedLanguage === 'en'
                    ? 'Note For Driver'
                    : 'ملاحظة للسائق'
                }
                placeholderTextColor={colors.GREY_LIGHT}
              />
            </View>
          </View>
        )}
      </CollapsibleView>

      <SwipeButton onToggle={handleConfirmPickUp} />
    </View>
  );
};
const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
];

export default DeliveryScreen;
