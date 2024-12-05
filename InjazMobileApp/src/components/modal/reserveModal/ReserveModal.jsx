import React from 'react';
import {View, Modal, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../../constants/images';
import ButtonComp from '../../button/ButtonComp/ButtonComp';
import styles from './styles';

const ReservationModal = ({visible, onClose, selectedLanguage}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <TouchableOpacity activeOpacity={0.9} onPress={onClose}>
            <Image source={images.ARROW_LEFT} style={styles.arrowIcon} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {selectedLanguage === 'en'
                ? 'Booking Confirmed'
                : 'تم تأكيد الحجز'}
            </Text>
          </View>
          <View style={styles.checkContainer}>
            <View style={styles.checkCircle}>
              <Image
                resizeMode="contain"
                source={images.CHECK_WHITE}
                style={styles.checkIcon}
              />
            </View>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              {selectedLanguage === 'en'
                ? 'Car reserved. Please review your booking history for more details.'
                : 'تم حجز السيارة. يرجى مراجعة تاريخ الحجوزات الخاص بك لمزيد من التفاصيل.'}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComp
              activeOpacity={0.9}
              text={
                selectedLanguage === 'en'
                  ? 'Total payable'
                  : 'المجموع القابل للدفع'
              }
              textPrice={selectedLanguage === 'en' ? 'AED 4000' : '4000 درهم'}
              textStyle={styles.buttonText}
              textPriceStyle={styles.buttonPriceText}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ReservationModal;
