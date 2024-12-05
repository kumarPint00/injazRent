import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../constants/colors';
import routes from '../constants/routes';
import {
  BookingHistoryScreen,
  ExploreScreen,
  HomeScreen,
  ProfileScreen,
} from '../screens';
import images from '../constants/images';
import styles from './styles';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../redux/slices/language_slices';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
  const selectedLanguage = useSelector(selectLanguage);

  const renderTabIcon = (source, isFocused, title) => {
    return (
      <View
        style={[
          styles.activeTabStyle,
          {
            flexDirection: 'row',
            backgroundColor: isFocused ? colors.BLUE : null,
          },
        ]}>
        {isFocused ? (
          <View style={styles.tabViewContainer}>
            <Image
              source={source}
              style={styles.inActiveImage}
              color={colors.GRAY}
            />
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
        ) : (
          <Image
            source={source}
            style={styles.inActiveImage}
            tintColor={colors.GRAY}
          />
        )}
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName={selectedLanguage === 'en' ? 'Home' : 'بيت'}
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              images.HOME,
              focused,
              selectedLanguage === 'en' ? 'Home' : 'بيت',
            ),
          tabBarLabel: selectedLanguage === 'en' ? 'Home' : 'بيت',
        }}
      />

      <Tab.Screen
        name={routes.EXPLORE_SCREEN}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              images.ẸXPLORE,
              focused,
              selectedLanguage === 'en' ? 'Explore' : 'يستكشف',
            ),
          tabBarLabel: selectedLanguage === 'en' ? 'Explore' : 'يستكشف',
        }}
      />

      {/* <Tab.Screen
        name={routes.BOOKING_HISTORY_SCREEN}
        component={BookingHistoryScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              images.BOOKING,
              focused,
              selectedLanguage === 'en' ? 'Booking' : 'الحجز',
            ),
          tabBarLabel: selectedLanguage === 'en' ? 'Booking' : 'الحجز',
        }}
      /> */}

      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              images.PEOPLE,
              focused,
              selectedLanguage === 'en' ? 'Profile' : 'حساب تعريفي',
            ),
          tabBarLabel: selectedLanguage === 'en' ? 'Profile' : 'حساب تعريفي',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
