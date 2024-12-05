import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../../constants/colors';
import fontFamily from '../../../styles/fontFamily';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';

const ItemCarSpec = ({
  item,
  index,
  isSelected,
  setIsSelected,
  setCarsDetails,
}) => {
  const navigation = useNavigation();
  const handleItemClick = () => {
    if (index === 0) {
      setCarsDetails({
        transmission: item.transmission,
        engineCapacity: item.engineCapacity,
        laggageBootCapacity: item.laggageBootCapacity,
        securityDeposit: item.securityDeposit,
        securityDepositService: item.securityDepositService,
        actualPriceDaily: item.actualPriceDaily,
        actualPriceMonthly: item.actualPriceMonthly,
        actualPriceWeekly: item.actualPriceWeekly,
        cdwDaily: item.cdwDaily,
        cdwWeekly: item.cdwWeekly,
        cdwMonthly: item.cdwMonthly,
        paiInsuranceDaily: item.paiInsuranceDaily,
        babySeatChargeDaily: item.babySeatChargeDaily,
        babySeatChargeWeekly: item.babySeatChargeWeekly,
        babySeatChargeMonthly: item.babySeatChargeMonthly,
        deliveryChargeDaily: item.deliveryChargeDaily,
        deliveryChargeWeekly: item.deliveryChargeWeekly,
        deliveryChargeMonthly: item.deliveryChargeMonthly,
      });
      navigation.navigate(routes.CAR_SPECS_SCREEN, {selectedItem: item});
    } else {
      setIsSelected(index);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handleItemClick()}
      activeOpacity={0.9}
      style={styles.touchableStyle}>
      <View>
        <Text
          style={{
            color: isSelected === index ? colors.BLUE : colors.WHITE,
            fontFamily: fontFamily.POPPINS_SEMI_BOLD,
          }}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCarSpec;
