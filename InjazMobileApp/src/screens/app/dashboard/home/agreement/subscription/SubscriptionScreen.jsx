import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../../redux/slices/language_slices';
import colors from '../../../../../../constants/colors';
import fontFamily from '../../../../../../styles/fontFamily';

const SubscriptionScreen = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View>
      <Text
        style={{
          color: colors.BLACK,
          fontFamily: fontFamily.POPPINS_SEMI_BOLD,
          textAlign: 'left',
        }}>
        {selectedLanguage === 'en' ? 'Subscription' : 'الاشتراك'}
      </Text>
    </View>
  );
};

export default SubscriptionScreen;
