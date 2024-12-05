import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import * as Screens from '../screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME_SCREEN} component={Screens.BottomStack} />

      <Stack.Screen
        name={routes.PROFILE_SCREEN}
        component={Screens.ProfileScreen}
      />
      <Stack.Screen
        name={routes.REVIEW_BOOKING_SCREEN}
        component={Screens.ReviewBookingScreen}
      />
      <Stack.Screen
        name={routes.RESIDENT_SCREEN}
        component={Screens.ResidentScreen}
      />
      <Stack.Screen
        name={routes.NON_RESIDENT_SCREEN}
        component={Screens.NonResidentScreen}
      />

      <Stack.Screen
        name={routes.ADDRESS_SCREEN}
        component={Screens.AddressScreen}
      />
      <Stack.Screen
        name={routes.SETTINGS_SCREEN}
        component={Screens.SettingsScreen}
      />
      <Stack.Screen
        name={routes.WALLET_SCREEN}
        component={Screens.WalletScreen}
      />
      <Stack.Screen
        name={routes.INVOICE_SCREEN}
        component={Screens.InvoiceScreen}
      />
      <Stack.Screen
        name={routes.BOOKING_HISTORY_SCREEN}
        component={Screens.BookingHistoryScreen}
      />
      <Stack.Screen
        name={routes.ACTIVE_SCREEN}
        component={Screens.ActiveScreen}
      />
      <Stack.Screen
        name={routes.COMPLETED_SCREEN}
        component={Screens.CompletedScreen}
      />
      <Stack.Screen
        name={routes.IN_PROGRESS_SCREEN}
        component={Screens.InProgressScreen}
      />
      <Stack.Screen
        name={routes.CANCELLED_SCREEN}
        component={Screens.CancelledScreen}
      />
      <Stack.Screen
        name={routes.CATEGORY_SCREEN}
        component={Screens.CategoryScreen}
      />
      <Stack.Screen
        name={routes.CAR_DETAILS_SCREEN}
        component={Screens.CarsDetailsScreen}
      />
      <Stack.Screen
        name={routes.INVITE_FREINDS_SCREEN}
        component={Screens.InviteFriendsScreen}
      />
      <Stack.Screen
        name={routes.FILTER_SCREEN}
        component={Screens.FilterScreen}
      />
      <Stack.Screen
        name={routes.CAR_SPECS_SCREEN}
        component={Screens.CarSpecsScreen}
      />
      <Stack.Screen
        name={routes.KEY_FEATURES_SCREEN}
        component={Screens.KeyFeaturesScreen}
      />
      <Stack.Screen
        name={routes.CARS_FEATURES_SCREEN}
        component={Screens.CarFeaturesScreen}
      />
      <Stack.Screen
        name={routes.WHATS_INCLUDED_SCREEN}
        component={Screens.WhatsIncludeScreen}
      />

      <Stack.Screen
        name={routes.SHORT_TERMS_SCREEN}
        component={Screens.ShortTermsScreen}
      />
      <Stack.Screen
        name={routes.LONG_TERMS_SCREEN}
        component={Screens.LongTermsScreen}
      />
      <Stack.Screen
        name={routes.CAR_ALL_DETAILS_SCREEN}
        component={Screens.CarAllDetails}
      />
      <Stack.Screen
        name={routes.CAR_REQUIREMENTS_SCREEN}
        component={Screens.CarRequireMentScreen}
      />
      <Stack.Screen
        name={routes.IDENTITY_VERIFICATION_SCREEN}
        component={Screens.IdentityVerificationScreen}
      />
      <Stack.Screen
        name={routes.DOCUMENT_UPLOAD_SCREEN}
        component={Screens.DocumentsUploadScreen}
      />
      <Stack.Screen
        name={routes.ADD_ON_DRIVERS_SCREEN}
        component={Screens.AddOnDriversScreen}
      />
      <Stack.Screen
        name={routes.PAYMENT_SCREEN}
        component={Screens.PaymentScreen}
      />
      <Stack.Screen
        name={routes.EDIT_PROFILE_SCREEN}
        component={Screens.EditProfileScreen}
      />
      <Stack.Screen name={routes.PROFILE} component={Screens.Profile} />

      <Stack.Screen
        name={routes.PICKUP_SCREEN}
        component={Screens.PickUpScreen}
      />
      <Stack.Screen
        name={routes.LOCATION_SCREEN}
        component={Screens.LocationScreen}
      />
      <Stack.Screen
        name={routes.BOOKING_DETAILS_SCREEN}
        component={Screens.BookingDetailsSceen}
      />

      <Stack.Screen
        name={routes.DELIVERY_OPTIONS_SCREEN}
        component={Screens.DeliveryOptionsScreen}
      />
      <Stack.Screen
        name={routes.AGREEMENT_SCREEN}
        component={Screens.AgreementScreen}
      />
      <Stack.Screen name={routes.RESIDENT} component={Screens.Resident} />
      <Stack.Screen
        name={routes.BOOKING_ADDRESS_SCREEN}
        component={Screens.BookingAddressScreen}
      />
      <Stack.Screen
        name={routes.SUBSCRIPTION_SCREEN}
        component={Screens.SubscriptionScreen}
      />
      <Stack.Screen
        name={routes.BOOKING_INFO_SCREEN}
        component={Screens.BookingInfoScreen}
      />
      <Stack.Screen
        name={routes.EDIT_DOCUMENTS_SCREEN}
        component={Screens.EditDocumentsScreen}
      />

      <Stack.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={Screens.NotificationScreen}
      />
      <Stack.Screen
        name={routes.FAVOURITE_SCREEN}
        component={Screens.FavouritesScreen}
      />
      <Stack.Screen name={routes.APP_STACK} component={Screens.AppStack} />
      <Stack.Screen name={routes.AUTH_STACK} component={Screens.AuthStack} />
      <Stack.Screen
        name={routes.BOTTOM_STACK}
        component={Screens.BottomStack}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
