import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList, View} from 'react-native';
import images from '../../../../../constants/images';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import {
  getAllCarsByIdThunk,
  getAllCarsThunk,
} from '../../../../../redux/asyncThunk/AsyncThunk';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from '../../../../../styles/responsiveSize';

import ItemCarsCategories from '../../../../../components/list/ItemCarsCategories/ItemCarsCategories';
import Loader from '../../../../../components/Loader/Loader';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import ItemMonthly from '../../../../../components/list/ItemMonthly/ItemMonthly';
import {categoriesData} from '../../../../../constants/list';

const CategoryScreen = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  const carsData = routes?.params?.carsData;
  const category = routes?.params?.category || 'All'; // Default to 'All' if category is not provided
  console.log(category, '......category');
  const [categoryCars, setCategoryCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const route = useRoute();
  const id = route?.params?.id;
  const selectedLanguage = useSelector(selectLanguage);
  useEffect(() => {
    getAllCarCategory();
  }, []);

  const getAllCarCategory = () => {
    setIsLoading(true);
    if (category === 'All') {
      dispatch(getAllCarsThunk())
        .unwrap()
        .then(apiResponse => {
          console.log(apiResponse, 'response');
          setCategoryCars(apiResponse.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching cars:', error);
          setIsLoading(false);
        });
    } else {
      setCategoryCars([]);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllCarsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        console.log(res?.data?.product, '....response from product details');
        setProductDetails(res?.data?.product);
        setName(res?.data?.product.name);
        setDescription(res?.data?.product.description);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  const shareToWhatsAppWithContact = (text, phoneNumber) => {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phoneNumber}`);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+971509960498';
    const message = `Hi, \nI’m contacting you through Injazrent.ae. \nI’d like to rent the discounted ${
      item?.brand ? item?.brand : 'No brand'
    } ${item?.model ? item?.model : 'No model'} ${
      item?.year ? item?.year : 'No year available'
    }\nDaily Price: ${item?.actualPriceDaily} AED\nWeekly Price: ${
      item?.actualPriceWeekly
    } AED\nMonthly Price: ${item?.actualPriceMonthly} AED`;
    shareToWhatsAppWithContact(message, phoneNumber);
  };
  return (
    <View>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={
          selectedLanguage === 'en'
            ? (
                categoriesData.find(cat => cat.category === category)?.title
                  ?.en || ''
              )
                .charAt(0)
                .toUpperCase() +
              (
                categoriesData.find(cat => cat.category === category)?.title
                  ?.en || ''
              )
                .slice(1)
                .toLowerCase()
            : (
                categoriesData.find(cat => cat.category === category)?.title
                  ?.ar || ''
              )
                .charAt(0)
                .toUpperCase() +
              (
                categoriesData.find(cat => cat.category === category)?.title
                  ?.ar || ''
              )
                .slice(1)
                .toLowerCase()
        }
      />
      {isLoading && <Loader visible={isLoading} />}

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:
            categoryCars.length > 0
              ? Platform.OS === 'ios'
                ? moderateScale(180)
                : moderateScale(100)
              : moderateScale(120),
        }}
        data={carsData}
        renderItem={({item}) => <ItemCarsCategories item={item} id={id} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CategoryScreen;
