import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import {useNavigation} from '@react-navigation/native';
import {
  calculationData,
  yourDocumentsData,
} from '../../../../../constants/list';
import ItemTotalCalculation from '../../../../../components/list/ItemTotalCalculation/ItemTotalCalculation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import SelfPickUpButton from '../../../../../components/button/selfPickupButton/SelfPickUpButton';
import ListHeader from './ListHeader';
import ItemDocumentLists from '../../../../../components/list/ItemDocumentLists/ItemDocumentLists';
import AdditionalDriverComponent from '../../../../../components/additionalDriverComp/AdditionalDriverComp';
import PromoCodeInput from '../../../../../components/input/promoCodeInput/PromoCodeInput';
import ReservationModal from '../../../../../components/modal/reserveModal/ReserveModal';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const ReviewBookingScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const selectedLanguage = useSelector(selectLanguage);

  const handleReserveButtonPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Review Booking' : 'مراجعة الحجز'}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.imageBackground}>
            <Image source={images.STORMY} style={styles.imageStyle} />
            <View style={styles.titleContainer}>
              <Text style={styles.titleCarName}>
                {selectedLanguage === 'en' ? 'XUV' : 'XUV'}
              </Text>
              <Text style={styles.subTitleCarStyle}>
                {selectedLanguage === 'en' ? '500' : 'خمسة مائة'}
              </Text>
            </View>
          </View>

          <View style={styles.pickUpContainer}>
            <Text style={styles.titlePickUpReturn}>
              {selectedLanguage === 'en'
                ? 'Pickup & Return'
                : 'الاستلام والعودة'}
            </Text>
            <TouchableOpacity activeOpacity={0.9}>
              <Image source={images.EDIT_ICON} style={styles.editIconStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.selfPickupContainer}>
            <SelfPickUpButton
              title={
                selectedLanguage === 'en' ? 'Self Pick Up' : 'الاستلام الذاتي'
              }
              branchName={
                selectedLanguage === 'en'
                  ? 'Sheikh Zayed Branch'
                  : 'فرع الشيخ زايد'
              }
              dateTime={
                selectedLanguage === 'en'
                  ? 'Mon,25 Sep , 10 : 00 AM'
                  : 'الاثنين، 25 سبتمبر، 10:00 صباحاً'
              }
            />
            <SelfPickUpButton
              title={
                selectedLanguage === 'en' ? 'Self Pick Up' : 'الاستلام الذاتي'
              }
              branchName={
                selectedLanguage === 'en'
                  ? 'Sheikh Zayed Branch'
                  : 'فرع الشيخ زايد'
              }
              dateTime={
                selectedLanguage === 'en'
                  ? 'Mon,25 Sep , 10 : 00 AM'
                  : 'الاثنين، 25 سبتمبر، 10:00 صباحاً'
              }
            />
          </View>

          <View style={styles.flatListContainer}>
            <FlatList
              ListHeaderComponent={ListHeader}
              data={yourDocumentsData}
              keyExtractor={item => item.id}
              numColumns={3}
              renderItem={({item}) => {
                return <ItemDocumentLists item={item} />;
              }}
            />
          </View>
          <View style={styles.insuranceContainer}>
            <Text style={styles.titleInsurance}>
              {selectedLanguage === 'en' ? 'Insurance' : 'التأمين'}
            </Text>
          </View>

          <View style={styles.insuranceButtonContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.buttonFreeContainer}>
              <View style={styles.viewRingContainer} />
              <Text style={styles.titleComprehensive}>
                {selectedLanguage === 'en'
                  ? 'Comprehensive insurance'
                  : 'التأمين الشامل'}
              </Text>
              <Text style={styles.titleFree}>
                {selectedLanguage === 'en' ? '(Free)' : '(مجاني)'}
              </Text>
              <Text style={styles.titleNo}>
                {selectedLanguage === 'en'
                  ? 'There is no additional cost in this pack and it did not claim total'
                  : 'لا توجد تكاليف إضافية في هذه الحزمة ولم تطالب الإجمالي'}
              </Text>
              <View style={styles.arrowContainer}>
                <Image
                  resizeMode="contain"
                  source={images.THREE_ARROWS}
                  style={styles.imageArrow}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.buttonFullContainer}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.buttonFullInsurance}>
                <View style={styles.viewRingContainer} />
                <Text style={styles.titleFullInsurance}>
                  {selectedLanguage === 'en'
                    ? 'Full Insurance $500'
                    : 'التأمين الكامل 500 دولار'}
                </Text>

                <Text style={styles.titleNoAdditional}>
                  {selectedLanguage === 'en'
                    ? 'There is no additional cost in this pack and it did not claim total..'
                    : 'لا توجد تكاليف إضافية في هذه الحزمة ولم تطالب الإجمالي'}
                </Text>
                <View style={styles.arrowWhiteContainer}>
                  <Image
                    resizeMode="contain"
                    source={images.THREE_ARROWS}
                    style={styles.arrowWhiteImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.addOnContainer}>
            <Text style={styles.textAddOn}>
              {selectedLanguage === 'en' ? 'Add - ons' : 'إضافات'}
            </Text>
          </View>
          <AdditionalDriverComponent
            titleAdditional={
              selectedLanguage === 'en' ? 'Additional Driver' : 'سائق إضافي'
            }
            titleSelect={
              selectedLanguage === 'en' ? 'Select Driver' : 'اختر السائق'
            }
          />
          <PromoCodeInput
            titlePromo={selectedLanguage === 'en' ? 'Promo Code' : 'رمز العرض'}
          />
          <View style={styles.listContainer}>
            <FlatList
              data={calculationData}
              renderItem={({item, index}) => (
                <ItemTotalCalculation
                  item={item}
                  index={index}
                  selectedLanguage={selectedLanguage}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComp
              onPress={handleReserveButtonPress}
              activeOpacity={0.9}
              style={styles.buttonReserve}
              text={
                selectedLanguage === 'en' ? 'Reserve the car' : 'حجز السيارة'
              }
              textStyle={styles.titleReserve}
            />
          </View>
          <ReservationModal
            visible={modalVisible}
            onClose={closeModal}
            selectedLanguage={selectedLanguage}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ReviewBookingScreen;
