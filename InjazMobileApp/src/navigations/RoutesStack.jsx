import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {useSelector, useDispatch} from 'react-redux';
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changeLang} from '../redux/slices/language_slices';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from '../components/modal/nointernet/NoInternet';

const RoutesStack = () => {
  const authState = useSelector(state => state.auth);
  const accessToken = authState?.accessToken;
  console.log(accessToken, '..........accessToken');
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedLang = await AsyncStorage.getItem('lang');
        if (storedLang) {
          dispatch(changeLang(storedLang));
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchData();

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      {isConnected ? (
        accessToken ? (
          <AppStack />
        ) : (
          <AuthStack />
        )
      ) : (
        <NoInternet />
      )}
    </NavigationContainer>
  );
};

export default RoutesStack;
