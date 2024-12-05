import {combineReducers} from '@reduxjs/toolkit';
import carsLocationSlice from './cars_location.slices';
import languageSlice from './language_slices';
import authSlice from './auth_slices';
import locationSlice from './location_slices';
import getall_carsSlices from './getall_cars.slices';
import signup_slices from './signup_slices';
import checkbox_slice from './checkbox_slice';
import favourites_slice from './favourites_slice';
import isLoading_slice from './isLoading_slice';
export default combineReducers({
  carsLocation: carsLocationSlice,
  language: languageSlice,
  auth: authSlice,
  location: locationSlice,
  getAllCars: getall_carsSlices,
  signup: signup_slices,
  checkbox: checkbox_slice,
  favorites: favourites_slice,
  isLoading: isLoading_slice,
});
