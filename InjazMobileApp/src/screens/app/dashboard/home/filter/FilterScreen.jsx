import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import HeaderCategory from '../../../../../components/header/headerCat/HeaderCategory';
import images from '../../../../../constants/images';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import FilterCategory from '../../../../../components/filterCategory/FilterCategory';
import FilterCarsList from './FilterCarsList';
import {priceList} from '../../../../../constants/list';
import routes from '../../../../../constants/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {clearFilters} from '../../../../../redux/slices/getall_cars.slices';
import ButtonComp from '../../../../../components/button/ButtonComp/ButtonComp';
import {selectLanguage} from '../../../../../redux/slices/language_slices';

const FilterScreen = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [filterCleared, setFilterCleared] = useState(false);
  const {selectedBrand, selectedModel, selectedYear, selectedPrice} =
    useSelector(state => state.getAllCars);
  const [selectedCategory, setSelectedCategory] = useState('Brand');
  const [selectedItems, setSelectedItems] = useState([]);
  const [brands, setBrands] = useState([]);
  
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [price, setPrice] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false);
  const selectedLanguage = useSelector(selectLanguage);
  useEffect(() => {
    setBrands(route?.params?.brands || []);
    setModels(route?.params?.models || []);
    setYears(route?.params?.years || []);
    setPrice(route?.params?.price || []);
  }, [route]);

  useEffect(() => {
    if (filterCleared) {
      setFilterCleared(false);
      setRefreshPage(true); // Trigger refresh when filter is cleared
    }
  }, [filterCleared]);

  useEffect(() => {
    // Perform any actions needed on page refresh
    if (refreshPage) {
      // Reset any other state variables or perform additional actions
      setRefreshPage(false);
    }
  }, [refreshPage]);

  useEffect(() => {
    switch (selectedCategory) {
      case 'Brand':
        setSelectedItems(selectedBrand);
        break;
      case 'Model':
        setSelectedItems(selectedModel);
        break;
      case 'Year':
        setSelectedItems(selectedYear);
        break;
      case 'Price':
        setSelectedItems(selectedPrice);
        break;
      default:
        setSelectedItems([]);
    }
  }, [
    selectedBrand,
    selectedModel,
    selectedYear,
    selectedPrice,
    selectedCategory,
  ]);

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  const getCategoryData = () => {
    switch (selectedCategory) {
      case 'Brand':
        return brands;
      case 'Model':
        return models;
      case 'Year':
        return years;
      case 'Price':
        return price;
      default:
        return [];
    }
  };

  const updateSelectedItems = items => {
    setSelectedItems(items);
  };

  const applyFilter = async () => {
    await AsyncStorage.setItem('category', JSON.stringify(selectedCategory));
    await AsyncStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    navigation.navigate(
      route?.params?.isShortTerm
        ? routes.SHORT_TERMS_SCREEN
        : routes.LONG_TERMS_SCREEN,
      {
        selectedCategory,
        selectedItems,
      },
    );
  };

  const clearFilter = () => {
    setSelectedItems([]);
    setSelectedCategory('Brand');
    dispatch(clearFilters());
    navigation.goBack();
    setFilterCleared(true);
  };

  return (
    <View style={styles.container}>
      <HeaderCategory
        activeOpacity={0.9}
        onPress={() => navigation.goBack()}
        backIcon={images.ARROW_LEFT}
        title={selectedLanguage === 'en' ? 'Filters' : 'المرشحات'}
      />
      <View style={styles.filterContainer}>
        <View style={styles.containerCategory}>
          <FilterCategory
            title={selectedLanguage === 'en' ? 'Brand' : 'ماركة'}
            isSelected={selectedCategory === 'Brand'}
            onToggle={() => handleCategorySelect('Brand')}
          />
          <FilterCategory
            title={selectedLanguage === 'en' ? 'Model' : 'نموذج'}
            isSelected={selectedCategory === 'Model'}
            onToggle={() => handleCategorySelect('Model')}
          />
          <FilterCategory
            title={selectedLanguage === 'en' ? 'Year' : 'سنة'}
            isSelected={selectedCategory === 'Year'}
            onToggle={() => handleCategorySelect('Year')}
          />
        </View>
        {selectedCategory && (
          <View style={styles.contentContainer}>
            <FilterCarsList
              data={getCategoryData()}
              onUpdateSelectedItems={updateSelectedItems}
              brands={brands}
              models={models}
              years={years}
              priceList={priceList}
            />
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComp
          activeOpacity={0.9}
          text={selectedLanguage === 'en' ? 'Clear Filter' : 'مرشح واضح'}
          textStyle={styles.buttonTextClear}
          style={styles.buttonClear}
          onPress={() => {
            clearFilter();
          }}
        />
        <ButtonComp
          activeOpacity={0.9}
          text={selectedLanguage === 'en' ? 'Apply Filter' : 'تطبيق الفلتر'}
          textStyle={styles.buttonTextApply}
          style={styles.buttonApply}
          onPress={applyFilter}
        />
      </View>
    </View>
  );
};

export default FilterScreen;
