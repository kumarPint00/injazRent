// languageSlice.js

import {createSlice} from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {lang: 'en'}, // initialState should be an object with 'lang' property
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload; // Update 'lang' property in the state
    },
  },
});

export const {changeLang} = languageSlice.actions;
export const selectLanguage = state => state.language.lang;

export default languageSlice.reducer;
