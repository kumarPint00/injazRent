import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import images from '../../../constants/images';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../constants/routes';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(routes.LOGIN_SCREEN);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={images.LOGO} style={styles.logoStyle} />
    </View>
  );
};

export default SplashScreen;
