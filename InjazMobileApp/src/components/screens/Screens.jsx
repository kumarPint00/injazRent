import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Screens = ({style = {}, children}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...style,
        backgroundColor: colors.white,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'white'}
      />
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

export default Screens;
