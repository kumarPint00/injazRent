import React from 'react';
import {Modal, View} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';
import {BarIndicator} from 'react-native-indicators';

const Loader = ({visible}) => {
  return (
    <Modal
      transparent
      animationType="none"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.indicatorStyle}>
          <BarIndicator color={colors.BLACK} size={30} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
