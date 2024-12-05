import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import colors from '../../../../../constants/colors';
import fontFamily from '../../../../../styles/fontFamily';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import {useNavigation} from '@react-navigation/native';
import images from '../../../../../constants/images';
const AddOnDriversScreen = () => {
  const selectedLanguage = useSelector(selectLanguage);
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          color: colors.BLACK,
          fontFamily: fontFamily.POPPINS_SEMI_BOLD,
          textAlign: 'left',
        }}>
        {selectedLanguage === 'en'
          ? 'We are working on Add on screen'
          : 'نحن نعمل على إضافة على الشاشة'}
      </Text>
    </View>
  );
};

export default AddOnDriversScreen;
