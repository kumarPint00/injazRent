import {View} from 'react-native';
import React from 'react';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import {tabCarSpecs} from '../../../../../constants/list';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from '../../../../../constants/colors';
import TabViewComp from '../../../../../components/tab/TabViewComp';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const CarSpecsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedLanguage = useSelector(selectLanguage);
  const selectedItem = route?.params?.selectedItem;
  console.log('Selected Item:', selectedItem);
  return (
    <View style={{flex: 1, backgroundColor: colors.WHITE}}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Car Specs' : 'مواصفات السيارة'}
      />
      <TabViewComp tabs={tabCarSpecs} selectedLanguage={selectedLanguage} />
    </View>
  );
};

export default CarSpecsScreen;
