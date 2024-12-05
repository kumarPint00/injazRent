import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  activeOpacity,
} from 'react-native';
import {currencydata} from '../../constants/list';
import colors from '../../constants/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import images from '../../constants/images';
import fontFamily from '../../styles/fontFamily';

const CurrencyConverter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleCurrencySelect = currency => {
    setSelectedCurrency(currency);
    setModalVisible(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={styles.item}
      onPress={() => handleCurrencySelect(item.title)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => setModalVisible(true)}>
        <Text style={{color: colors.WHITE}}>
          {selectedCurrency ? selectedCurrency : 'AED'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={currencydata}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: textScale(16),
    color: colors.BLACK,
    fontFamily: fontFamily.POPPINS_SEMI_BOLD,
  },
});

export default CurrencyConverter;
