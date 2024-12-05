import React from 'react';
import {View, Text} from 'react-native';
import images from '../../../constants/images';
import styles from './DeliveryStyles';
import DeliveryDetail from './DeliveryDetail';

const DeliveryComponent = ({date, time, address, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.deliveryText}>{title}</Text>
      <View style={styles.deliveryContainer}>
        <DeliveryDetail
          icon={images.CALENDARSS}
          title={date}
          subtitle={time}
          showEditIcon={true}
        />
        <DeliveryDetail
          icon={images.CALENDARSS}
          title="Please select your address"
          subtitle={address ? address : 'No address selected'}
          showEditIcon={true}
        />
      </View>
    </View>
  );
};
export default DeliveryComponent;
