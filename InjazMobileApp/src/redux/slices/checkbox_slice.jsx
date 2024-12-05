// checkbox_slice.js

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isChecked: false, // Default value for the checkbox
};

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCheckbox(state) {
      state.isChecked = !state.isChecked;
    },
  },
});

export const {toggleCheckbox} = checkboxSlice.actions;

export const selectCheckboxState = state => state.checkbox.isChecked;

export default checkboxSlice.reducer;
