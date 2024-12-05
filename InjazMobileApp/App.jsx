import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar, StyleSheet} from 'react-native';
import colors from './src/constants/colors';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(true);
import axios from 'axios';
import Toast from 'react-native-toast-message';
import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import RoutesStack from './src/navigations/RoutesStack';
export const baseurl = 'https://api.injazrent.ae';
// export const baseurl = 'http://192.168.1.38:4000';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Import the store and persistor
import {store, persistor} from './src/redux/store';

const App = () => {
  const [isOffline, setOfflineStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  axios.defaults.baseURL = baseurl;
  React.useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    getNetWorkInfo();
    return () => removeNetInfoSubscription();
  }, [isOffline]);

  const getNetWorkInfo = React.useCallback(() => {
    setLoading(true);
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={true} persistor={persistor}>
          <StatusBar
            backgroundColor={colors.BLACK}
            translucent={true}
            hidden={true}
            barStyle="dark-content"
          />
          <RoutesStack />
          <Toast position={'top'} topOffset={40} />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
