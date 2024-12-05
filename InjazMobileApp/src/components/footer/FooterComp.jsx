import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonComp from '../button/ButtonComp/ButtonComp';

const FooterComp = ({
  titlePrice,
  titleCurrency,
  titleVat,
  buttonTitle,
  textStyle,
  onPress,
  isButtonEnabled,
}) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.priceText}>{titlePrice}</Text>
            <Text style={styles.monthlyPriceText}>{titleCurrency}</Text>
            <Text style={styles.vatText}>{titleVat}</Text>
          </View>
          <ButtonComp
            onPress={onPress}
            activeOpacity={0.9}
            text={buttonTitle}
            textStyle={{...styles.buttonText, ...textStyle}}
            style={styles.button}
            disabled={isButtonEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default FooterComp;
