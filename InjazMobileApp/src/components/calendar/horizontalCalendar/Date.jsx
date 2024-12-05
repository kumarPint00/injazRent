import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import 'moment/locale/ar'; // Import Arabic locale
import colors from '../../../constants/colors';
import styles from './styles';

const Date = ({
  date,
  onSelectDate,
  selected,
  setSelected,
  selectedLanguage,
}) => {
  useEffect(() => {
    // Set locale whenever selectedLanguage changes
    moment.locale(selectedLanguage);
  }, [selectedLanguage]);

  const handlePress = () => {
    const formattedDate = moment(date); // No need to set locale here
    onSelectDate(formattedDate.format('YYYY-MM-DD'));
    setSelected(formattedDate.format('YYYY-MM-DD'));
  };

  const formattedDate = moment(date); // Set locale outside of handlePress

  const isSelected = selected === formattedDate.format('YYYY-MM-DD');
  const backgroundColor = isSelected ? colors.BLACK : colors.RADIO_BG;
  const textColor = isSelected ? colors.WHITE : colors.BLACK;

  // Determine the format based on the selected language
  const day = formattedDate.format('ddd');
  const dayNumber = formattedDate.format('D');

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.card, {backgroundColor}]}>
      <Text style={[styles.big, {color: textColor}]}>{day}</Text>
      <Text style={[styles.medium, {color: textColor}]}>{dayNumber}</Text>
    </TouchableOpacity>
  );
};

export default Date;
