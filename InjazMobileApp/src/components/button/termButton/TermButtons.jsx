import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

const TermButtons = ({
  onPressBlue,
  onPressGreen,
  titleShortTerm,
  titleLongTerm,
  titleDaily,
  titleMonths,
}) => {
  const [isBlueSelected, setIsBlueSelected] = useState(true);

  const handleBluePress = () => {
    setIsBlueSelected(true);
    onPressBlue();
  };

  const handleGreenPress = () => {
    setIsBlueSelected(false);
    onPressGreen();
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          styles.blueButton,
          isBlueSelected ? {} : styles.greenButton,
        ]}
        onPress={handleBluePress}>
        <Text style={styles.buttonText}>{titleShortTerm}</Text>
        <Text style={styles.subText}>{titleDaily}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          styles.greenButton,
          isBlueSelected ? {} : styles.blueButton,
        ]}
        onPress={handleGreenPress}>
        <Text style={styles.buttonText}>{titleLongTerm}</Text>
        <Text style={styles.subText}>{titleMonths}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermButtons;
