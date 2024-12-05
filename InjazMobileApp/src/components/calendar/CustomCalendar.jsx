import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const CustomCalendar = () => {
  const [selectedDates, setSelectedDates] = useState({});
  const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState(
    moment().format('HH:mm'),
  );
  const [selectedEndTime, setSelectedEndTime] = useState(
    moment().add(1, 'hours').format('HH:mm'),
  );
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
  const [timeRange, setTimeRange] = useState([0, 60]);

  useEffect(() => {
    setCurrentDate(moment().format('YYYY-MM-DD'));
  }, []);

  const handleDayPress = day => {
    let updatedSelectedDates = {...selectedDates};
    updatedSelectedDates[day.dateString] =
      !updatedSelectedDates[day.dateString];
    setSelectedDates(updatedSelectedDates);
  };

  const handleTimeConfirm = (time, isStartTime) => {
    const formattedTime = moment(time).format('HH:mm');
    if (isStartTime) {
      setSelectedStartTime(formattedTime);
    } else {
      setSelectedEndTime(formattedTime);
    }
    setStartTimePickerVisible(false);
    setEndTimePickerVisible(false);
  };

  const handleTimeCancel = () => {
    setStartTimePickerVisible(false);
    setEndTimePickerVisible(false);
  };

  const getMarked = () => {
    let marked = {};

    Object.keys(selectedDates).forEach(date => {
      marked[date] = {
        color: selectedDates[date] ? 'yellow' : 'transparent',
        textColor: '#aaa',
        disabled: true,
      };
    });

    const todayDate = moment().format('YYYY-MM-DD');
    marked[todayDate] = {
      selected: true,
      marked: true,
      selectedColor: 'blue',
    };

    return marked;
  };

  const customStartMarker = e => {
    const value = moment()
      .startOf('day')
      .add(e.currentValue, 'minutes')
      .format('HH:mm');
    return (
      <View style={{backgroundColor: 'red', padding: 10, borderRadius: 5}}>
        <Text style={{color: 'white'}}>{value}</Text>
      </View>
    );
  };

  return (
    <View>
      <Calendar
        initialDate={currentDate}
        markingType="period"
        markedDates={getMarked()}
        onDayPress={handleDayPress}
      />

      <DateTimePickerModal
        isVisible={isStartTimePickerVisible}
        mode="time"
        onConfirm={time => handleTimeConfirm(time, true)}
        onCancel={handleTimeCancel}
      />

      <DateTimePickerModal
        isVisible={isEndTimePickerVisible}
        mode="time"
        onConfirm={time => handleTimeConfirm(time, false)}
        onCancel={handleTimeCancel}
      />
    </View>
  );
};

export default CustomCalendar;
