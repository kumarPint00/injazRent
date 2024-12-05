import {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import RenderHeaderComp from '../list/ItemEconomyCars/RenderHeaderComp';
import styles from './styles';
import routes from '../../constants/routes';
import ItemPopularCars from '../list/ItemPopularCars/ItemPopularCars';
import ItemEconomyCars from '../list/ItemEconomyCars/ItemEconomyCars';
import ItemSuvCars from '../list/ItemSuvCars/ItemSuvCars';
import ItemSedanCars from '../list/ItemSedanCars/ItemSedanCars';
import ItemCompactCars from '../list/ItemCompactCars/ItemCompactCars';
import ItemHatchBackCars from '../list/ItemHatchBackCars/ItemHatchBackCars';
import ItemExoticCars from '../list/ItemExoticCars/ItemExoticCars';
import ItemCrossOver from '../list/ItemCrossOver/ItemCrossOver';
import ItemLuxury from '../list/ItemLuxury/ItemLuxury';
import {useNavigation} from '@react-navigation/native';

const CarCategorySection = ({
  title,
  viewAll,
  carsData,
  category,
  id,
  selectedLanguage,
}) => {
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const carComponentMap = {
    ALL: ItemPopularCars,
    ECONOMY: ItemEconomyCars,
    SUV: ItemSuvCars,
    SEDAN: ItemSedanCars,
    COMPACT: ItemCompactCars,
    HATCHBACK: ItemHatchBackCars,
    EXOTIC: ItemExoticCars,
    CROSSOVER: ItemCrossOver,
    LUXURY: ItemLuxury,
  };

  const CarComponent = carComponentMap[category] || ItemPopularCars;

  useEffect(() => {
    filterCars();
  }, [category, carsData]);

  const filterCars = () => {
    if (category === 'ALL') {
      setFilteredCars(carsData);
    } else {
      const filtered = carsData.filter(car => car.category === category);
      setFilteredCars(filtered);
    }
  };

  useEffect(() => {
    if (page > 1) {
      fetchData();
    }
  }, [page]);

  const fetchData = () => {
    setIsLoading(true);
    fetchCarsByPage(page)
      .then(newCars => {
        if (newCars.length > 0) {
          setFilteredCars(prevCars => [...prevCars, ...newCars]);
          setPage(prevPage => prevPage + 1);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchCarsByPage = async page => {
    try {
      const response = await fetch(
        `https://api.injazrent.ae/user/getAllCars/cars?page=${page}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  };

  return (
    <View>
      <RenderHeaderComp
        title={title}
        id={id}
        viewAll={
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              navigation.navigate(routes.CATEGORY_SCREEN, {
                category: category,
                carsData: filteredCars,
              });
            }}>
            <Text style={styles.viewAllText}>
              {selectedLanguage === 'en' ? 'View All' : 'عرض الكل'}
            </Text>
          </TouchableOpacity>
        }
        carsData={filteredCars}
        category={category}
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredCars}
        renderItem={({item}) => <CarComponent item={item} id={id} />}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default CarCategorySection;
