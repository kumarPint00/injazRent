import {changeLang} from '../slices/language_slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const changeLangAsyncThunk = newLang => async dispatch => {
  try {
    console.log('New language:', newLang);
    dispatch(changeLang(newLang));
    await AsyncStorage.setItem('lang', newLang);
  } catch (error) {
    console.error('Error setting language in AsyncStorage:', error);
  }
};
