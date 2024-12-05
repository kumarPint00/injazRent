import {createSlice} from '@reduxjs/toolkit';
import {getAllCarsLocationThunk} from '../asyncThunk/AsyncThunk';
import {THUNK_STATUS} from '../constants';
const initialState = {
  cars: [],
  status: 'idle',
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllCarsLocationThunk.pending, state => {
        state.status = THUNK_STATUS.LOADING;
      })
      .addCase(getAllCarsLocationThunk.fulfilled, (state, action) => {
        state.status = THUNK_STATUS.SUCCESS;
        state.cars = action.payload.data;
      })
      .addCase(getAllCarsLocationThunk.rejected, (state, action) => {
        state.status = THUNK_STATUS.FAILED;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
