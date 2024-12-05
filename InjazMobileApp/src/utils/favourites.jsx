import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavoritesToStorage = async favorites => {
  try {
    console.log('Favorites to be saved to AsyncStorage:', favorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Favorites saved to AsyncStorage:', favorites);
  } catch (error) {
    console.error('Error saving favorites to AsyncStorage:', error);
  }
};

export const loadFavoritesFromStorage = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    console.log('Favorites loaded from AsyncStorage:', favorites);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites from AsyncStorage:', error);
    return [];
  }
};
