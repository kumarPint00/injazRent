import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import styles from './RadioButtonCompStyles';

const RadioButtonComp = ({options}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity
          activeOpacity={0.9}
          key={index}
          style={[
            styles.optionContainer,
            {
              borderColor:
                selectedOption === option ? colors.BLACK : colors.GREY_LIGHT,
            },
          ]}
          onPress={() => handleOptionSelect(option)}>
          <Text style={styles.optionText}>{option}</Text>
          <View
            style={[
              styles.radioButton,
              {
                borderColor: selectedOption === option ? colors.BLACK : '#000',
              },
            ]}>
            {selectedOption === option && (
              <View style={styles.innerRadioButton} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButtonComp;
