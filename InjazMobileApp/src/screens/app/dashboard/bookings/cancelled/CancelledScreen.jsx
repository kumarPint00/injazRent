import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {bookingData} from '../../../../../constants/list';
import styles from './styles';
import ItemActive from '../../../../../components/list/ItemActive/ItemActive';
import {useDispatch, useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import {getAllBookingHistoryThunk} from '../../../../../redux/asyncThunk/AsyncThunk';
import Loader from '../../../../../components/Loader/Loader';
import ItemCancelled from '../../../../../components/list/ItemCancelled/ItemCancelled';

const CancelledScreen = () => {
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
          // Iterate over each booking object
          apiResponse.forEach(booking => {
            console.log('Booking ID:', booking._id);
            console.log('Pickup Date:', booking.pickupDate);
            console.log('Return Date:', booking.returnDate);
            console.log('Status:', booking.status);
            console.log('Documents', booking.documents);
            console.log('Pic', booking.documents);
            console.log('Documents', booking.documents);
            console.log('Return Location', booking.returnLocation);
            console.log('Additional Service', booking.additionalServices);
            console.log('Insurance Info', booking.insuranceInformation);
            console.log('Booking Date', booking.bookingDates);
            setBooking(apiResponse);
            // Access other properties as needed
          });
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

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}

      <FlatList
        data={booking}
        renderItem={({item}) => (
          <ItemCancelled
            item={item}
            selectedLanguage={selectedLanguage}
            feedback={item.feedback}
            rating={item.rating}
            totalPrice={item.totalPrice}
            bookingDuration={item.bookingDuration}
            cancellationReason={item.cancellationReason}
            specialRequests={item.specialRequests}
            promoCode={item.promoCode}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CancelledScreen;
