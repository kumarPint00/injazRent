import {createAsyncThunk} from '@reduxjs/toolkit';
import {ASYNC_ROUTES} from '../constants/redux.constant';
import {
  createDocumentService,
  createInquiryService,
  deleteDocumentByIdService,
  getAddressByIdService,
  getAllBookingHistoryServices,
  getAllBranchService,
  getAllCarsCategoriesService,
  getAllCarsLocationService,
  getAllCarsService,
  getAllDocumentsService,
  getAllSettingsService,
  getAllWalletServices,
  getCarsByIdService,
  getInquiryService,
  getUserByIdService,
  logOutService,
  loginService,
  signUpService,
  updateAccountService,
  updateDocumentByIdService,
} from '../services/Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

//loginAsyncThunk
export const loginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await loginService(payload);

      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
//signUpThunk
export const signUpAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.SIGN_UP,
  async (payload, {rejectWithValue}) => {
    console.log(payload, '...payload from signUp');
    try {
      const response = await signUpService(payload);

      return response.data; // Return only the data from the response
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const getAllCarsThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_CARS,
  async ({page}, {rejectWithValue}) => {
    try {
      const response = await getAllCarsService({page});
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
// getAllCarsCategoriesThunk.js
export const getAllCarsCategoriesThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_CARS_CATEGORY,
  async ({category}, {rejectWithValue}) => {
    try {
      const response = await getAllCarsCategoriesService(category);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// getAllCarsLocationThunk.js
export const getAllCarsLocationThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_CARS_LOCATION,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getAllCarsLocationService(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
// getAllSettingsThunk.js
export const getAllSettingsThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_SETTINGS,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getAllSettingsService(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
// getAllCarsLocationThunk.js
export const getAllCarsByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_CARS_BY_ID,
  async (id, {rejectWithValue}) => {
    try {
      const response = await getCarsByIdService(id);
      console.log(
        response,
        '................response from get productDetaiils asyncthunk',
      );
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//createInquiryAsyncThunk
export const createInquiryAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.CREATE_INQUIRY,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await createInquiryService(payload);
      console.log(response, '.........response from create inquiry data');
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);
//getInquiryThunk
export const getInquiryThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_INQUIRY,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getInquiryService(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//getAllBranchThunk
export const getAllBranchThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_BRANCHES,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getAllBranchService(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//getAllWalletThunk
export const getAllWalletThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_WALLET,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getAllWalletServices(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//getAllWalletThunk
export const getAllBookingHistoryThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_BOOKING_HISTORY,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getAllBookingHistoryServices(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

//getUserByIdThunk
export const getUserByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_USER_BY_ID,
  async (id, {rejectWithValue}) => {
    try {
      const response = await getUserByIdService(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//updateProfileThunk
export const updateProfileThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_ACCOUNT,
  async (payload, {rejectWithValue, getState}) => {
    try {
      const {accessToken} = getState().auth;
      console.log(accessToken, ',,,,,,,,,,authToken');
      const response = await updateAccountService(payload, accessToken);

      console.log(response, '.........update profile');

      return response.data;
    } catch (err) {
      if (err.response) {
        console.error('Server Error:', err.response.data);
        console.error('Status:', err.response.status);
      } else if (err.request) {
        console.error('No response received:', err.request);
      } else {
        console.error('Error:', err.message);
      }

      return rejectWithValue(err.message);
    }
  },
);
//logOutThunk
export const logOutThunk = createAsyncThunk(
  ASYNC_ROUTES.LOG_OUT,
  async (_, {rejectWithValue, getState}) => {
    try {
      const {accessToken} = getState().auth;
      console.log('logout access token', accessToken);
      if (!accessToken) {
        throw new Error('Access token not found');
      }

      console.log(accessToken, '.........bearer token');

      const response = await logOutService(accessToken);
      console.log(response, '.......logout Response');

      AsyncStorage.removeItem('accessToken');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
// createDocumentThunk
export const createDocumentThunk = createAsyncThunk(
  ASYNC_ROUTES.CREATE_DOCUMENT,
  async (formData, {rejectWithValue}) => {
    try {
      const response = await createDocumentService(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

//getAllDocumentsThunk
export const getAllDocumentsThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ALL_DOCUMENTS,
  async (payload, {rejectWithValue}) => {
    try {
      const response = await getAllDocumentsService(payload);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// getAddressThunk
export const getAddressThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_ADDRESS_BY_ID,
  async (id, {rejectWithValue}) => {
    try {
      const response = await getAddressByIdService(id);
      if (!response) {
        throw new Error('Failed to fetch address: Response is undefined');
      }
      return response;
    } catch (error) {
      console.error('Error fetching address:', error);
      throw rejectWithValue({message: 'Failed to fetch address'});
    }
  },
);
//deleteDocumentImageByIdThunk
export const deleteDocumentImageByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.DELETE_DOCUMENT_BY_ID,
  async ({id}, {rejectWithValue}) => {
    try {
      const response = await deleteDocumentByIdService({id});
      console.log(response, '.......response from delete admin service');

      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
//updateDocumentByIdThunk
export const updateDocumentByIdThunk = createAsyncThunk(
  ASYNC_ROUTES.UPDATE_DOCUMENT_BY_ID,
  async ({id, selectedImageUri}, {rejectWithValue}) => {
    try {
      const response = await updateDocumentByIdService({id, selectedImageUri});
      console.log(response, '.......response from update admin service');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
