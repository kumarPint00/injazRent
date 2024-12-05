import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import TabViewComp from '../../../../../components/tab/TabViewComp';
import {agreement, tabs} from '../../../../../constants/list';
import colors from '../../../../../constants/colors';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const AgreementScreen = () => {
  const navigation = useNavigation();
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        backgroundColor: colors.WHITE,
      }}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Agreement' : 'اتفاق'}
      />
      <TabViewComp tabs={agreement} selectedLanguage={selectedLanguage} />
    </View>
  );
};

export default AgreementScreen;
