import {FlatList, Platform, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import HeaderCategory from '../../../../components/header/headerCat/HeaderCategory';
import {baseurl} from '../../../../../App';
import images from '../../../../constants/images';
import InputField from '../../../../components/input/InputField/InputField';
import {selectLanguage} from '../../../../redux/slices/language_slices';
import ItemPopularCars from '../../../../components/list/ItemPopularCars/ItemPopularCars';
import colors from '../../../../constants/colors';
import fontFamily from '../../../../styles/fontFamily';
import {moderateScale, textScale} from '../../../../styles/responsiveSize';
import Loader from '../../../../components/Loader/Loader';
import ItemCarsCategories from '../../../../components/list/ItemCarsCategories/ItemCarsCategories';

const ExploreScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {selectedBrand, selectedModel, selectedYear} = useSelector(
    state => state.getAllCars,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [brands, setBrands] = useState([]);
  const [years, setYears] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMonthData, setShowMonthData] = useState(true);
  const selectedLanguage = useSelector(selectLanguage);
  const carComponentMap = {
    ALL: ItemPopularCars,
  };

  const selectedCategory = route.params?.selectedCategory || 'Brand';
  const CarComponent = carComponentMap[selectedCategory] || ItemPopularCars;
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (searchQuery === '') {
      setContent(cars);
    }
  }, [searchQuery]);
  useEffect(() => {
    const fetchData = async () => {
      const initialCars = await fetchCarsByPageNumber(1, {});
      setCars(initialCars);
      setContent(initialCars);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedBrand.length, '.......selected brands length');

    if (selectedBrand[0] || selectedModel[0] || selectedYear[0]) {
      const result = [];
      const sort = (item, category) => {
        const b = cars.filter(
          el => el[category].toLowerCase() === item.toLowerCase(),
        );
        console.log(b, `......cars filters value for ${category}`);
        result.push(...b);
      };

      if (selectedBrand[0]) {
        selectedBrand.map(item => sort(item, 'brand'));
      }

      if (selectedModel[0]) {
        selectedModel.map(item => sort(item, 'model'));
      }

      if (selectedYear[0]) {
        selectedYear.map(item => sort(item, 'year'));
      }

      setContent(result);
    } else {
      setContent(cars);
    }
  }, [selectedBrand, selectedModel, selectedYear]);

  const fetchCarsByPageNumber = async (pageNumber, filters) => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `${baseurl}/user/getAllCars?pageNumber=${pageNumber}`,
        {
          params: {
            pageNumber,
            ...filters,
          },
        },
      );

      const responseData = response.data.data;
      const uniqueBrands = [
        ...new Set(responseData.map(car => car.brand.toLowerCase())),
      ];
      const uniqueModels = [
        ...new Set(responseData.map(car => car.model.toLowerCase())),
      ];
      const uniqueYears = [
        ...new Set(responseData.map(car => car.year.toLowerCase())),
      ];
      console.log(uniqueBrands, '.......uniqurebrands');
      console.log(uniqueModels, '.......uniqurebrands');

      setBrands(uniqueBrands);
      setModels(uniqueModels);
      setYears(uniqueYears);
      return responseData;
    } catch (error) {
      console.error('Error fetching cars:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };
  const applyFilters = (brandFilters, modelFilters, yearFilters) => {
    let result = cars;

    if (brandFilters.length > 0) {
      result = result.filter(car =>
        brandFilters.includes(car.brand.toLowerCase()),
      );
    }

    if (modelFilters.length > 0) {
      result = result.filter(car =>
        modelFilters.includes(car.model.toLowerCase()),
      );
    }

    if (yearFilters.length > 0) {
      result = result.filter(car =>
        yearFilters.includes(car.year.toLowerCase()),
      );
    }

    return result;
  };
  const handleSearch = () => {
    if (!searchQuery) {
      setContent(cars);
      const filteredCars = applyFilters(
        selectedBrand,
        selectedModel,
        selectedYear,
      );
      setContent(filteredCars);
    } else {
      const searchFilteredCars = cars.filter(
        car =>
          car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.year.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      if (
        selectedBrand.length > 0 ||
        selectedModel.length > 0 ||
        selectedYear.length > 0
      ) {
        const filtersFilteredCars = applyFilters(
          selectedBrand,
          selectedModel,
          selectedYear,
        );
        const combinedFilteredCars = [
          ...new Set([...searchFilteredCars, ...filtersFilteredCars]),
        ];
        setContent(combinedFilteredCars);
      } else {
        setContent(searchFilteredCars);
      }
    }
  };
  const CarsData = useMemo(() => {
    if (!isLoading && searchQuery && content.length === 0) {
      return (
        <View style={styles.noCarsContainer}>
          <Text
            style={{
              fontSize: textScale(16),
              fontFamily: fontFamily.POPPINS_SEMI_BOLD,
              color: colors.BLACK,
            }}>
            {selectedLanguage === 'en'
              ? 'No Cars Found'
              : 'لم يتم العثور على سيارات'}
          </Text>
        </View>
      );
    }
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={content ?? cars}
        renderItem={({item}) => <ItemCarsCategories item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
        contentContainerStyle={[
          Platform.select({
            ios: {
              paddingBottom: moderateScale(280),
            },
            android: {
              paddingBottom: moderateScale(220),
            },
          }),
        ]}
      />
    );
  }, [content, cars, searchQuery]);

  return (
    <View style={styles.container}>
      {isLoading && <Loader visible={isLoading} />}
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => {
          navigation.goBack();
        }}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Search' : 'يبحث'}
      />
      <View style={styles.filterContainer}>
        <View style={styles.inputContainer}>
          <InputField
            leftIcon={images.SEARCH}
            placeholder={
              selectedLanguage === 'en'
                ? 'Search cars by brand'
                : 'البحث عن السيارات حسب العلامة التجارية'
            }
            placeholderStyle={styles.placeholderStyle}
            placeholderTextColor={colors.BLACK}
            imageStyle={styles.imageStyle}
            onChangeText={text => {
              setSearchQuery(text);
              handleSearch();
            }}
            value={searchQuery}
          />
        </View>
      </View>

      <View style={styles.listContainer}>{CarsData}</View>
    </View>
  );
};

export default ExploreScreen;
