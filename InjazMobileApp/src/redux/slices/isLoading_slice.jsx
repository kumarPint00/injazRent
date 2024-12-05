import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
};

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {setLoading} = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
