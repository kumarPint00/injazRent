import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import routes from '../../../constants/routes';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../../redux/slices/language_slices';

const ListHeaderEconomy = ({category, data, item, carsData}) => {
  const selectedLanguage = useSelector(selectLanguage);
  const handleViewAllClick = () => {
    navigation.navigate(routes.CAR_DETAILS_SCREEN, {
      category: item.category,
      carsData,
    });
  };

  return category === category ? (
    <View style={styles.containerHeader}>
      {data && data.length > 0 ? (
        <>
          <Text style={styles.title}>SUV Cars</Text>
          <TouchableOpacity onPress={handleViewAllClick}>
            <Text style={styles.viewAllText}>{'View All >>'}</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  ) : (
    <View style={styles.titleContainer}>
      <Text>
        {selectedLanguage === 'en' ? 'No Cars Available' : 'لا تتوفر سيارات'}
      </Text>
    </View>
  );
};

export default ListHeaderEconomy;
