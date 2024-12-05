import {createSlice} from '@reduxjs/toolkit';
import {signUpAsyncThunk} from '../asyncThunk/AsyncThunk';

const initialState = {
  user: [],
  address: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpAsyncThunk.pending, state => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(signUpAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.address = action.payload.address;
      })

      .addCase(signUpAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message || 'Sign up failed';
      });
  },
});

export const signUpState = state => state.signup;

export default signUpSlice.reducer;
