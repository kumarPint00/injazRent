import {View, Text, FlatList, StatusBar, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {bannerData, categoriesData} from '../../../../../constants/list';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ItemCategories from '../../../../../components/list/ItemCategories/ItemCategories';
import TermButtons from '../../../../../components/button/termButton/TermButtons';
import routes from '../../../../../constants/routes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {moderateScale, textScale} from '../../../../../styles/responsiveSize';
import SwiperComponent from '../../../../../components/swiper/SwiperComponent';
import CarCategorySection from '../../../../../components/carCategorySection/CarCategorySection';
import Loader from '../../../../../components/Loader/Loader';
import {
  getAllCarsLocationThunk,
  getAllCarsThunk,
} from '../../../../../redux/asyncThunk/AsyncThunk';
import {selectLanguage} from '../../../../../redux/slices/language_slices';
import CitySelector from '../../../../../components/radioButton/CitySelector';
import CurrencyConverter from '../../../../../components/currencyConverter/CurrencyConverter';
import images from '../../../../../constants/images';
import fontFamily from '../../../../../styles/fontFamily';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState('');
  const [data, setData] = useState(bannerData);
  const [cars, setCars] = useState([]);
  console.log(cars, '....cars');
  const [filteredCars, setFilteredCars] = useState(cars);
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState();
  console.log(id, '......id of carsss');
  const [cities, setCities] = useState([]);
  console.log(cities, '......api cities');
  const [selectedCity, setSelectedCity] = useState('Abu Dhabhi');
  console.log(selectedCity, '.....selectedCity');
  const selectedLanguage = useSelector(selectLanguage);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(cars.length / itemsPerPage);
  useEffect(() => {
    fetchData();
    getAllCarsLocation();
  }, []);

  useEffect(() => {
    filterCarsByCategory('ALL');
  }, [cars]);

  useEffect(() => {
    setIsLoading(cars.length === 0 || cities.length === 0);
  }, [cars, cities]);

  const fetchData = () => {
    if (!isLoading) {
      setIsLoading(true);
      dispatch(getAllCarsThunk({page}))
        .unwrap()
        .then(apiResponse => {
          if (Array.isArray(apiResponse) && apiResponse.length > 0) {
            const carIds = apiResponse.map(car => car?._id);
            setId(carIds);
            setCars(prevCars => [...prevCars, ...apiResponse]);
            setPage(page + 1);
          } else {
            console.log('No more cars available.');
          }
        })
        .catch(error => {
          console.error('Error fetching cars:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleLoadMore = () => {
    if (!isLoading && page <= totalPages) {
      setPage(page + 1);
    }
  };

  const handleBluePress = () => {
    navigation.navigate(routes.SHORT_TERMS_SCREEN);
  };
  useEffect(() => {
    getAllCarsLocation();
  }, []);
  useEffect(() => {
    setSelectedCategory('ALL');
    filterCarsByCategory('ALL');
  }, []);

  const getAllCarsLocation = () => {
    setIsLoading(true);
    dispatch(getAllCarsLocationThunk())
      .unwrap()
      .then(response => {
        if (response.status === 200) {
          setIsLoading(false);
          setCities(response.data);
          if (response.data.length > 0) {
            setSelectedCity(response.data[0].name);
          }
        } else {
          console.error('Failed to fetch locations:', response.message);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
        setIsLoading(false);
      });
  };
  const handleGreenPress = () => {
    navigation.navigate(routes.LONG_TERMS_SCREEN);
  };
  const handleSelectCity = city => {
    setSelectedCity(city);
  };
  const filterCarsByCategory = category => {
    let filteredData;
    setIsLoading(true);

    if (category === 'ALL') {
      filteredData = cars;
    } else {
      filteredData = cars.filter(car => {
        if (selectedLanguage === 'en') {
          setIsLoading(false);
          return car.category.en === category;
        } else if (selectedLanguage === 'ar') {
          setIsLoading(false);
          return car.category.ar === category;
        }
      });
    }
    setFilteredCars(filteredData);
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}
      <View style={styles.headerStyle}>
        <StatusBar
          backgroundColor={colors.BLACK}
          translucent={true}
          hidden={true}
          barStyle="dark-content"
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <View style={{flexDirection: 'row'}}>
            <CitySelector
              activeOpacity={0.9}
              cities={cities}
              selectedCity={selectedCity}
              onSelectCity={handleSelectCity}
            />
          </View> */}
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: textScale(22),
              alignSelf: 'center',
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              color: colors.WHITE,
            }}>
            {selectedLanguage === 'en' ? 'Injaz Rental' : 'انجاز للتأجير'}
          </Text>
        </View>
      </View>

      {!isLoading && (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom:
              Platform.OS === 'ios' ? moderateScale(110) : moderateScale(100),
          }}>
          <View style={styles.swiper}>
            <SwiperComponent
              data={data}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              autoplay={true}
              loop={true}
            />
          </View>

          <View style={styles.categoriesContainer}>
            <Text style={styles.titleCategories}>
              {selectedLanguage === 'en' ? 'Top Categories' : 'أهم الفئات'}
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoriesData}
              renderItem={({item, index}) => (
                <ItemCategories
                  item={item}
                  setIsLoading={setIsLoading}
                  carsData={cars}
                  setFilteredCars={setFilteredCars}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                  selectedLanguage={selectedLanguage}
                  index={index}
                />
              )}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
              keyExtractor={(item, index) => index.toString()}
            />
            <TermButtons
              onPressBlue={handleBluePress}
              onPressGreen={handleGreenPress}
              titleShortTerm={
                selectedLanguage === 'en' ? 'Short Term' : 'المدى القصير'
              }
              titleDaily={
                selectedLanguage === 'en' ? 'Daily - Weekly' : 'يومي اسبوعي'
              }
              titleLongTerm={
                selectedLanguage === 'en' ? 'Long-Term' : 'طويل الأمد'
              }
              titleMonths={
                selectedLanguage === 'en'
                  ? '1 Month to  9Months'
                  : 'من شهر إلى 9 أشهر'
              }
            />
            {selectedCategory === 'ALL' && (
              <CarCategorySection
                title={selectedLanguage === 'en' ? 'All Cars' : 'جميع السيارات'}
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                category={'ALL'}
                carsData={filteredCars}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                filterCarsByCategory={filterCarsByCategory}
                onEndReachedThreshold={0.1}
                onEndReached={handleLoadMore}
              />
            )}

            {selectedCategory === 'ECONOMY' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en' ? 'Economy Cars' : 'سيارات اقتصادية'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                carsData={filteredCars}
                category={'ECONOMY'}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                onEndReached={fetchData}
                onEndReachedThreshold={0.1}
                filterCarsByCategory={filterCarsByCategory}
              />
            )}
            {selectedCategory === 'SUV' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en'
                    ? 'SUV Cars'
                    : 'سيارات الدفع الرباعي'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                category={'SUV'}
                carsData={filteredCars}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                onEndReached={fetchData}
                filterCarsByCategory={filterCarsByCategory}
                onEndReachedThreshold={0.1}
              />
            )}
            {selectedCategory === 'SEDAN' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en' ? 'Sedan Cars' : 'سيارات سيدان'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                carsData={filteredCars}
                category={'SEDAN'}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                onEndReached={fetchData}
                filterCarsByCategory={filterCarsByCategory}
                onEndReachedThreshold={0.1}
              />
            )}
            {selectedCategory === 'COMPACT' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en'
                    ? 'Compact Cars'
                    : 'السيارات المدمجة'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                carsData={filteredCars}
                category={'COMPACT'}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                onEndReached={fetchData}
                onEndReachedThreshold={0.1}
                filterCarsByCategory={filterCarsByCategory}
              />
            )}
            {selectedCategory === 'HATCHBACK' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en'
                    ? 'HetchBack Cars'
                    : 'سيارات هيتشباك'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                carsData={filteredCars}
                category={'HATCHBACK'}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                filterCarsByCategory={filterCarsByCategory}
              />
            )}

            {selectedCategory === 'EXOTIC' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en' ? 'Exotic Cars' : 'سيارات غريبة'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                carsData={filteredCars}
                category={'EXOTIC'}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                onEndReached={fetchData}
                onEndReachedThreshold={0.1}
                filterCarsByCategory={filterCarsByCategory}
              />
            )}
            {selectedCategory === 'LUXURY' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en' ? 'Luxury Cars' : 'سيارات فاخرة'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                carsData={filteredCars}
                category={'LUXURY'}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                onEndReached={fetchData}
                filterCarsByCategory={filterCarsByCategory}
                onEndReachedThreshold={0.1}
              />
            )}
            {selectedCategory === 'CROSSOVER' && (
              <CarCategorySection
                title={
                  selectedLanguage === 'en' ? 'Cross Over Cars' : 'سيارات كروس'
                }
                viewAll={
                  selectedLanguage === 'en' ? 'View All >>' : '<< عرض الكل '
                }
                carsData={filteredCars}
                category={'CROSSOVER'}
                selectedLanguage={selectedLanguage}
                selectedCategory={selectedCategory}
                onEndReached={fetchData}
                onEndReachedThreshold={0.1}
                filterCarsByCategory={filterCarsByCategory}
              />
            )}
          </View>
        </KeyboardAwareScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
