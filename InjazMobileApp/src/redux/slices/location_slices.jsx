// countrySlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedCountry: 'Abu Dhabi', // Initial selected country
};

const locationSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const {selectCountry} = locationSlice.actions;
export default locationSlice.reducer;
