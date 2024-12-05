import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {textScale} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import colors from '../../../constants/colors';

const ItemCategories = ({
  item,
  setIsLoading,
  carsData,
  setFilteredCars,
  setSelectedCategory,
  selectedLanguage,
  index,
}) => {
  const handleCategoryPress = useCallback(async () => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        let filteredData;
        if (item.category === 'ALL') {
          filteredData = carsData;
        } else {
          filteredData = carsData.filter(car => car.category === item.category);
        }
        setSelectedCategory(item.category);
        setFilteredCars(filteredData);
      } catch (error) {
        console.error('Error filtering cars by category:', error);
      } finally {
        setIsLoading(false);
      }
    }, 200);
  }, [
    item.category,
    setIsLoading,
    carsData,
    setFilteredCars,
    setSelectedCategory,
  ]);

  return (
    <TouchableOpacity
      onPress={handleCategoryPress}
      activeOpacity={0.9}
      style={styles.containerCategory}>
      <View style={styles.container}>
        <Image style={styles.imageCategory} source={item?.image} />
      </View>
      <Text
        numberOfLines={index === 3 ? 3 : 1}
        style={{
          fontSize: textScale(10),
          fontFamily: fontFamily.POPPINS_SEMI_BOLD,
          color: colors.BLACK,
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        {selectedLanguage === 'en' ? item.title.en : item.title.ar}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemCategories;
