import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import ButtonComp from '../../button/ButtonComp/ButtonComp';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeLangAsyncThunk} from '../../../redux/asyncThunk/LanguageAsyncThunk';

const LanguageModal = ({visible, onClose}) => {
  const selectedLanguageFromStore = useSelector(state => state.language.lang);

  const [selectedLanguage, setSelectedLanguage] = useState(
    selectedLanguageFromStore,
  );

  useEffect(() => {
    setSelectedLanguage(selectedLanguageFromStore);
  }, [selectedLanguageFromStore]);

  const dispatch = useDispatch();

  const handleLanguageSelection = async language => {
    try {
      await AsyncStorage.setItem('lang', language);
      dispatch(changeLangAsyncThunk(language));
    } catch (error) {
      console.error('Error saving or changing language:', error);
    }
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {selectedLanguage === 'en' ? 'Select Language' : 'اختار اللغة'}
            </Text>
          </View>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                selectedLanguage === 'en' && styles.radioButtonSelected,
              ]}
              onPress={() => setSelectedLanguage('en')}>
              <View style={styles.radioButtonInner}>
                {selectedLanguage === 'en' && (
                  <View style={styles.radioButtonInnerSelected} />
                )}
              </View>
              <Text style={styles.radioText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton2,
                selectedLanguage === 'ar' && styles.radioButtonSelected,
              ]}
              onPress={() => setSelectedLanguage('ar')}>
              <View style={styles.radioButtonInner}>
                {selectedLanguage === 'ar' && (
                  <View style={styles.radioButtonInnerSelected} />
                )}
              </View>
              <Text style={styles.radioText}>Arabic</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComp
              activeOpacity={0.9}
              onPress={() => handleLanguageSelection(selectedLanguage)}
              text={selectedLanguage === 'en' ? 'Select' : 'يختار'}
              style={styles.button}
              textStyle={styles.buttonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;
