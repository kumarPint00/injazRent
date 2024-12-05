import React from 'react';
import {
  FlatList,
  Image,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {countryCodes} from '../../../constants/list';
import styles from './styles';
import {moderateScale} from '../../../styles/responsiveSize';

const CountryCodeModal = ({isVisible, onClose, onSelectCountry}) => {
  const handleCountryPress = country => {
    onSelectCountry(country);
    onClose();
  };

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          bottom:
            Platform.OS === 'ios' ? moderateScale(345) : moderateScale(324),
          left: moderateScale(25),
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0,0.3)',
        }}>
        <View style={styles.countryCodeModalContainer}>
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            data={countryCodes}
            keyExtractor={item => item.code}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.countryCodeItem}
                onPress={() => handleCountryPress(item)}>
                <Image source={item.flag} style={styles.countryFlag} />
                <Text style={styles.countryCodeText}>{item.code}</Text>
                <Text style={styles.countryNameText}>{item.country}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CountryCodeModal;
