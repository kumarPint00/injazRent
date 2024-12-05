import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import Calendar from '../../../../../components/calendar/horizontalCalendar/Calendar';
import {bookingData} from '../../../../../constants/list';
import ItemInvoice from '../../../../../components/list/ItemInvoice/ItemInvoice';
import {moderateScale} from '../../../../../styles/responsiveSize';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const InvoiceScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        title={selectedLanguage === 'en' ? 'Invoice' : 'فاتورة'}
        backIcon={images.ARROW_LEFT}
        onPress={() => navigation.goBack()}
      />
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />

      <View
        style={{
          marginHorizontal: moderateScale(10),
          bottom: moderateScale(60),
        }}>
        <FlatList
          data={bookingData}
          renderItem={({item}) => (
            <ItemInvoice item={item} selectedLanguage={selectedLanguage} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default InvoiceScreen;
