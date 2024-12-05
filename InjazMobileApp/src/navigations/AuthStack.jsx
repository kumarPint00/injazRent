import React from 'react';
import routes from '../constants/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.SPLASH_SCREEN}
        component={Screens.SplashScreen}
      />
      <Stack.Screen
        name={routes.LOGIN_SCREEN}
        component={Screens.LoginScreen}
      />
      <Stack.Screen
        name={routes.SIGN_UP_SCREEN}
        component={Screens.SignUpScreen}
      />
      <Stack.Screen
        name={routes.ACCOUNT_SCREEN}
        component={Screens.AccountScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
