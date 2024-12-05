import {View, Text, Modal} from 'react-native';
import React from 'react';
import styles from './styles';

const NoInternet = ({show}) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={show}
        transparent={true}
        style={styles.modalStyle}
        animationInTiming={600}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>😔 Connection Error</Text>
            <Text style={styles.modalText}>
              Oops! Looks like your device is not connected to the Internet.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoInternet;
