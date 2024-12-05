import {createSlice} from '@reduxjs/toolkit';
import {THUNK_STATUS} from '../constants';
import {getAllCarsAsyncThunk, getAllCarsThunk} from '../asyncThunk/AsyncThunk';

const initialState = {
  cars: [],
  status: 'idle',
  error: null,
  selectedBrand: [],
  selectedModel: [],
  selectedYear: [],
  selectedPrice: [],
};

const getAllCarsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    selectBrand: (state, action) => {
      state.selectedBrand = [...action.payload];
    },
    selectModel: (state, action) => {
      state.selectedModel = [...action.payload];
    },
    selectYear: (state, action) => {
      state.selectedYear = [...action.payload];
    },
    selectPrice: (state, action) => {
      state.selectedPrice = [...action.payload];
    },
    clearFilters: state => {
      state.selectedBrand = [];
      state.selectedModel = [];
      state.selectedYear = [];
      state.selectedPrice = [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllCarsThunk.pending, state => {
        state.status = THUNK_STATUS.LOADING;
      })
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.status = THUNK_STATUS.SUCCESS;
        state.cars = action?.payload?.data;
      })
      .addCase(getAllCarsThunk.rejected, (state, action) => {
        state.status = THUNK_STATUS.FAILED;
        state.error = action.payload;
      });
  },
});

export const {selectBrand, selectModel, selectYear, selectPrice, clearFilters} =
  getAllCarsSlice.actions;
export default getAllCarsSlice.reducer;
