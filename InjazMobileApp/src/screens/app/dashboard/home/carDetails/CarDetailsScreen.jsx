import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import imagess from '../../../../../constants/images';
import CarouselFlatListComponent from '../../../../../components/coursel/CarouselFlatListComponent';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation, useRoute} from '@react-navigation/native';
import FooterComp from '../../../../../components/footer/FooterComp';
import {getAllCarsByIdThunk} from '../../../../../redux/asyncThunk/AsyncThunk';
import {useDispatch, useSelector} from 'react-redux';
import TabViewComp from '../../../../../components/tab/TabViewComp';
import {tabs} from '../../../../../constants/list';
import Loader from '../../../../../components/Loader/Loader';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import {selectCheckboxState} from '../../../../../redux/slices/checkbox_slice';
import routes from '../../../../../constants/routes';
import BookNowModal from '../../../../../components/modal/bookNowModal/BookNowModal';
import {moderateScale} from '../../../../../styles/responsiveSize';
import colors from '../../../../../constants/colors';
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from '../../../../../redux/slices/favourites_slice';
import {
  loadFavoritesFromStorage,
  saveFavoritesToStorage,
} from '../../../../../utils/favourites';
import Toast from 'react-native-toast-message';

const CarDetailsScreen = () => {
  const routess = useRoute();
  const item = routess?.params?.selectedItem;
  const navigation = useNavigation();
  const images = routess?.params?.images || [];
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguage);
  const isButtonEnabled = isChecked;
  const isChecked = useSelector(selectCheckboxState);
  const route = useRoute();
  const id = route?.params?.id;
  const imageUri = route?.params?.imageUri;
  console.log(id, '.......car all details screen');
  const [modalVisible, setModalVisible] = useState(false);
  const favorites = useSelector(state => state.favorites.favorites);
  const [carDetails, setCarDetails] = useState([]);
  const [message, setMessage] = useState('');
  console.log(favorites, '.....favpirotes');
  const isFavorite = favorites.some(favorite => favorite.id === id);
  console.log(
    'Images from ItemPopularCars:',
    item?.image,
    item?.internalImage,
    item?.externalImage,
  );
  const showMessage = text => {
    setMessage(text);
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllCarsByIdThunk({id: id}))
      .unwrap()
      .then(res => {
        console.log(res?.data, '...res from categories thunk');
        const {
          engineCapacity,
          seater,
          transmission,
          keyFeatures,
          actualPriceMonthly,
          discountedPriceMonthly,
          category,
        } = res?.data?.data;

        console.log('Engine Capacity:', engineCapacity);
        console.log('Seater:', seater);
        console.log('Transmission:', transmission);
        console.log('Key Features:', keyFeatures);
        console.log('actualPriceMonthly:', actualPriceMonthly);
        console.log('discountedPriceMonthly:', discountedPriceMonthly);
        console.log('category:', category);

        const formattedKeyFeatures = keyFeatures.join('\n');
        setCarDetails({
          category,
          engineCapacity,
          seater,
          transmission,
          keyFeatures: formattedKeyFeatures,
          actualPriceMonthly,
          discountedPriceMonthly,
        });
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    const loadFavorites = async () => {
      const savedFavorites = await loadFavoritesFromStorage();
      dispatch(setFavorites(savedFavorites));
    };
    loadFavorites();
  }, []);

  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
      Toast.show({
        type: 'error',
        text1: 'Remove From Favourites',
      });
      setMessage('Remove From Favourites');
    } else {
      dispatch(addToFavorites({id, carDetails, image: images[0]}));
      Toast.show({
        type: 'success',
        text1: 'Added To Favourites',
      });
    }
  };

  const carDetailsData = [
    {
      value: carDetails.category,
      icon: imagess.VEHICLES,
    },
    {
      value: carDetails.seater,
      icon: imagess.CAR_SEAT,
    },
    {
      value: carDetails.engineCapacity,
      icon: imagess.CAR_ENGINE,
    },

    {
      value: carDetails.transmission,
      icon: imagess.MANUAL_TRANSMISSION,
    },
  ];
  const renderItem = ({item}) => {
    if (item.key === 'Key Features') {
      return null;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(routes.CAR_SPECS_SCREEN, {id: id})}
        style={styles.detailsItem}>
        <View style={styles.keyContainer}>
          <Image source={item.icon} style={styles.icon} />

          <Text style={styles.detailValue}>{item.value}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    console.log('Favorites state:', favorites);
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}

      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={imagess.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Car Details' : 'تفاصيل السيارة'}
      />

      <View style={styles.carouselContainer}>
        <CarouselFlatListComponent data={imageUri ? [imageUri] : images} />
        <TouchableOpacity
          onPress={() => handleAddToFavorites()}
          activeOpacity={0.2}
          style={{bottom: moderateScale(240)}}>
          <Image
            source={isFavorite ? imagess.FILLED_HEART : imagess.HEART}
            style={{
              tintColor: isFavorite ? colors.RED : colors.BLACK,
              width: 20,
              height: 20,
              alignSelf: 'flex-end',
              marginEnd: moderateScale(10),
            }}
          />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.carTitle}>{item?.brand}</Text>
            <Text style={styles.carSubtitle}> {item?.model}</Text>
          </View>
          {!isLoading && (
            <View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={carDetailsData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )}
          <TabViewComp
            tabs={tabs}
            selectedLanguage={selectedLanguage}
            id={id}
          />
        </View>
      </KeyboardAwareScrollView>
      {!isLoading && (
        <FooterComp
          onPress={() => {
            setModalVisible(true);
          }}
          activeOpacity={0.9}
          buttonTitle={selectedLanguage === 'en' ? 'Book Now' : 'احجز الآن'}
          titlePrice={selectedLanguage === 'en' ? 'Price' : 'سعر'}
          titleCurrency={`AED ${carDetails?.discountedPriceMonthly} / Monthly`}
          titleVat={
            selectedLanguage === 'en'
              ? 'VAT inclusive'
              : 'شاملة ضريبة القيمة المضافة'
          }
          isButtonEnabled={isButtonEnabled}
        />
      )}
      <BookNowModal
        visible={modalVisible}
        onClose={closeModal}
        id={id}
        selectedLanguage={selectedLanguage}
        carName={item?.model}
        brandName={item?.brand}
        year={item?.year}
        dailyPrice={item?.actualPriceDaily}
        monthlyPrice={item?.actualPriceMonthly}
        weeklyPrice={item?.actualPriceWeekly}
        image={images[0]}
        transmission={item?.transmission}
      />
    </View>
  );
};

export default CarDetailsScreen;
