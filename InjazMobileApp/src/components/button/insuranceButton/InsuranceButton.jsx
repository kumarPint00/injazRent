import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';
import ButtonComp from '../ButtonComp/ButtonComp';

const InsuranceButton = ({
  title,
  subTitle,
  buttonTitle,
  buttonSubTitle,
  titleNoAdd,
  titleCurrency,
  activeOpacity,
}) => {
  return (
    <View>
      <View style={styles.insuranceContainer}>
        <Text style={styles.insuranceText}>{title}</Text>
        <Pressable>
          <Text style={styles.learnMoreText}>{subTitle}</Text>
        </Pressable>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonComp
          style={styles.basicButton}
          text={buttonTitle}
          textStyle={styles.buttonText}
          titleNoAdd={titleNoAdd}
        />
        <ButtonComp
          style={styles.standardButton}
          text={buttonSubTitle}
          textStyle={styles.buttonText}
          titleCurrency={titleCurrency}
        />
      </View>
    </View>
  );
};

export default InsuranceButton;
