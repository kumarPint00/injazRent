import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import TabButton from '../../../../../components/tab/TabButton';
import ActiveScreen from '../active/ActiveScreen';
import InProgressScreen from '../inProgress/InProgressScreen';
import CompletedScreen from '../completed/CompletedScreen';
import CancelledScreen from '../cancelled/CancelledScreen';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../../../../../styles/responsiveSize';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import {getAllBookingHistoryThunk} from '../../../../../redux/asyncThunk/AsyncThunk';

const BookingHistoryScreen = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  const [active, setActive] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStatusInfo, setBookingStatusInfo] = useState([]);
  const [booking, setBooking] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllBookingHistory();
  }, []);

  const getAllBookingHistory = () => {
    setIsLoading(true);
    dispatch(getAllBookingHistoryThunk())
      .unwrap()
      .then(apiResponse => {
        console.log(apiResponse, '.......response booking history');
        if (Array.isArray(apiResponse) && apiResponse.length > 0) {
          // Assuming that the booking status is directly available in the API response
          const bookingStatusArray = apiResponse.map(booking => booking.status);
          setBooking(apiResponse);
          console.log(bookingStatusArray, '......bookingStatus');
          setBookingStatusInfo(bookingStatusArray);
          // Use bookingStatusArray as needed
        } else {
          console.log('No booking history available.');
        }
      })
      .catch(error => {
        console.error('Error fetching booking history:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex);
  };
  const getTabTitle = title => {
    if (selectedLanguage === 'en') {
      return title;
    } else {
      // Assuming Arabic language
      switch (title) {
        case 'Active':
          return 'نشط';
        case 'InProgress':
          return 'قيد التقدم';
        case 'Completed':
          return 'منجز';
        case 'Cancelled':
          return 'ملغاة';
        default:
          return title;
      }
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Bookings' : 'الحجوزات'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContentContainer]}>
          <TabButton
            title={getTabTitle('Active')}
            isActive={activeTab === 'Active'}
            onPress={() => handleTabPress('Active')}
          />
          <TabButton
            title={getTabTitle('InProgress')}
            isActive={activeTab === 'InProgress'}
            onPress={() => handleTabPress('InProgress')}
          />
          <TabButton
            title={getTabTitle('Completed')}
            isActive={activeTab === 'Completed'}
            onPress={() => handleTabPress('Completed')}
          />
          <TabButton
            title={getTabTitle('Cancelled')}
            isActive={activeTab === 'Cancelled'}
            onPress={() => handleTabPress('Cancelled')}
          />
        </ScrollView>
      </View>
      <View style={styles.screenContainer}>
        {activeTab === 'Active' && <ActiveScreen />}
        {activeTab === 'InProgress' && <InProgressScreen />}
        {activeTab === 'Completed' && <CompletedScreen />}
        {activeTab === 'Cancelled' && <CancelledScreen />}
      </View>
    </View>
  );
};

export default BookingHistoryScreen;
