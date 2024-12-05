import {View, Text, Modal, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../../constants/images';
import ButtonComp from '../../button/ButtonComp/ButtonComp';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/slices/language_slices';

const ExtendModal = ({visible, onClose}) => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.selectContainer}>
            <Text style={styles.titleExtended}>
              {selectedLanguage === 'en'
                ? 'Select Extend Date'
                : 'حدد تمديد التاريخ'}
            </Text>
          </View>
          <View style={styles.deliveryContainer}>
            <Text style={styles.titleDelivery}>
              {selectedLanguage === 'en'
                ? 'Delivery Date'
                : 'تاريخ التسليم او الوصول'}
            </Text>
          </View>
          <View style={styles.dateContainer}>
            <View style={styles.dateInnerContainer}>
              <Text style={styles.dateTitle}>
                {selectedLanguage === 'en' ? 'Sat, Nov 2' : 'السبت، نوفمبر 2'}
              </Text>
              <Image source={images.CALENDAR} style={styles.calendarIcon} />
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeTitle}>
                {selectedLanguage === 'en' ? '10 : 00 AM' : '١٠ : ٠٠ صباحاً'}
              </Text>
              <Image source={images.CLOCK} style={styles.clockImage} />
            </View>
          </View>

          <View style={styles.extendedDateContainer}>
            <Text style={styles.extendedDateTitle}>
              {selectedLanguage === 'en' ? 'Extend Date' : 'تاريخ التمديد'}
            </Text>
          </View>
          <View style={styles.extendDateMainnContainer}>
            <View style={styles.extendDateMainContainer}>
              <Text style={styles.dateTitle}>
                {selectedLanguage === 'en' ? '--/--/--' : '--/--/--'}
              </Text>
              <Image source={images.CALENDAR} style={styles.calendarIcon} />
            </View>
            <View style={styles.timeMainContainer}>
              <Text style={styles.timeTitle}>
                {selectedLanguage === 'en' ? '00 : 00 AM' : '٠٠ : ٠٠ ص'}
              </Text>
              <Image source={images.CLOCK} style={styles.imageClock} />
            </View>
          </View>

          <View style={styles.outStandingContainer}>
            <Text style={styles.outStandingTitle}>
              {selectedLanguage === 'en' ? 'Outstanding' : 'المتبقي'}
            </Text>
            <Text style={styles.currencyTitle}>
              {selectedLanguage === 'en'
                ? 'AED 1500.00'
                : '1500.00 درهم إماراتي'}
            </Text>
          </View>
          <View style={styles.extendTitleContainer}>
            <Text style={styles.titleExtend}>
              {selectedLanguage === 'en' ? 'Extend' : 'تمديد'}
            </Text>
            <Text style={styles.currencyTitle}>
              {selectedLanguage === 'en'
                ? 'AED 1500.00'
                : '1500.00 درهم إماراتي'}
            </Text>
          </View>
          <Image source={images.DOTTED_LINE} style={styles.dottedImage} />
          <View style={styles.totalMainContainer}>
            <Text style={styles.totalTitle}>
              {selectedLanguage === 'en' ? 'Total' : 'المجموع'}
            </Text>
            <Text style={styles.currencyTitle}>
              {selectedLanguage === 'en'
                ? 'AED 1500.00'
                : '1500.00 درهم إماراتي'}
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <ButtonComp
              activeOpacity={0.9}
              text={selectedLanguage === 'en' ? 'Extend Date' : 'يمتد'}
              textStyle={styles.buttonTextStyle}
              style={styles.buttonStyle}
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExtendModal;
