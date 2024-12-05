import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../redux/slices/language_slices';
import styles from './styles';

const LanguageSelector = ({onSelectLanguage, isModalVisible}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [modalVisible, setModalVisible] = useState(isModalVisible);
  const dispatch = useDispatch();

  const handleSelectLanguage = language => {
    console.log(language, '.....selected language');
    setSelectedLanguage(language);
    dispatch(changeLanguage(language));
    onSelectLanguage && onSelectLanguage(language);
    closeLanguageSelectorModal();
  };

  const closeLanguageSelectorModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeLanguageSelectorModal}>
      <View style={styles.languageModalContainer}>
        <View style={styles.languageModalContent}>
          <TouchableOpacity
            onPress={closeLanguageSelectorModal}
            style={styles.languageModalCloseButton}>
            <Text style={styles.languageModalCloseButtonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectLanguage('en')}
            style={styles.languageModalOption}>
            <Text style={styles.languageModalOptionText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectLanguage('ar')}
            style={styles.languageModalOption}>
            <Text style={styles.languageModalOptionText}>العربية</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageSelector;
