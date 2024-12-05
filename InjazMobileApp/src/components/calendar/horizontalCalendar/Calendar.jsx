import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import moment from 'moment';
import CustomDate from './Date';
import styles from './styles';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/slices/language_slices';

const Calendar = ({onSelectDate}) => {
  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState();
  const [selected, setSelected] = useState(moment().format('YYYY-MM-DD'));
  const selectedLanguage = useSelector(selectLanguage);

  useEffect(() => {
    // Set the locale globally based on the selected language
    moment.locale(selectedLanguage);
  }, [selectedLanguage]);

  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days');
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  const getCurrentMonth = () => {
    const month = moment(dates[0])
      .add(scrollPosition / 60, 'days')
      .format('MMMM');
    setCurrentMonth(month);
  };

  useEffect(() => {
    getCurrentMonth();
  }, [scrollPosition]);

  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}>{currentMonth}</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={e => setScrollPosition(e.nativeEvent.contentOffset.x)}
            scrollEventThrottle={16}>
            {dates.map((date, index) => (
              <CustomDate
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Calendar;
