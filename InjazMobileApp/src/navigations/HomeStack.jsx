import React from 'react';
import routes from '../constants/routes';
import {HomeScreen, InitialScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={routes.INITIAL_SCREEN} component={InitialScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
