import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import images from '../../constants/images';

const CitySelector = ({cities, selectedCity, onSelectCity, activeOpacity}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectCity, setSelectCity] = useState(selectedCity);
  useEffect(() => {
    if (!selectedCity && cities.length > 0) {
      setSelectCity(cities[0].Name);
    } else {
      setSelectCity(selectedCity);
    }
  }, [cities, selectedCity]);

  const handleCityPress = city => {
    setModalVisible(false);
    onSelectCity(city);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => setModalVisible(true)}
        style={styles.pickerContainer}>
        <Image source={images.UAE_FLAG} style={styles.flagIcon} />
        <Text style={styles.selectedCity}>{selectCity}</Text>
        <Image source={images.DROP_DOWN} style={styles.dropDown} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={cities}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.cityItem}
                  onPress={() => handleCityPress(item.Name)}>
                  <Text style={styles.cityText}>{item.Name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  selectedCity: {
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    fontSize: textScale(16),
    color: colors.WHITE,
    paddingHorizontal: moderateScale(10),
  },
  dropDown: {
    width: moderateScale(13),
    height: moderateScale(13),
    tintColor: colors.WHITE,
    left: moderateScale(10),
  },
  bellIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(2),
  },
  bellIcon: {
    width: moderateScale(25),
    height: moderateScale(25),
    tintColor: colors.WHITE,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    padding: moderateScale(20),
    width: '90%',
    maxHeight: '80%',
  },
  cityItem: {
    paddingVertical: moderateScale(10),
  },
  cityText: {
    fontSize: textScale(16),
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
    color: colors.BLACK,
  },
});

export default CitySelector;
