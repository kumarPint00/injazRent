import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ButtonType from '../buttonType/ButtonType';

const MileageButton = ({
  title,
  subTitle,
  buttonTitle,
  buttonSubTitle,
  titleNoAdd = '',
  titleCurrency = '',
  activeOpacity,
}) => {
  return (
    <View>
      <View style={styles.insuranceContainer}>
        <Text style={styles.insuranceText}>{title}</Text>
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={styles.learnMoreText}>{subTitle}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonType
          activeOpacity={activeOpacity}
          style={styles.basicButton}
          text={buttonTitle}
          textStyle={styles.buttonText}
          titleNoAdd={titleNoAdd}
        />
        <ButtonType
          activeOpacity={activeOpacity}
          style={styles.standardButton}
          text={buttonSubTitle}
          textStyle={styles.buttonText}
          titleCurrency={titleCurrency}
        />
      </View>
    </View>
  );
};

export default MileageButton;
