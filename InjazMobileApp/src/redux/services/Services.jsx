import Axios from 'axios';
import {METHODS, SERVICE_ROUTES, replaceUrl} from '../constants';
import {baseurl} from '../../../App';
import axiosInstance from '../../utils/axiosInstance';

//loginService
export const loginService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.LOGIN,
      method: METHODS.POST,
      data,
    };

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from signup services');

        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
// signUpService
export const signUpService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.SIGN_UP,
      method: METHODS.POST,
      data,
    };

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from signup services');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllCarsLocationService
export const getAllCarsLocationService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_CARS_LOCATION,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllSettingsService
export const getAllSettingsService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_SETTINGS,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllCarsService
export const getAllCarsService = ({page}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: `https://api.injazrent.ae/user/getAllCars?pageNumber=${page}`,
      method: 'GET',
    };

    Axios.request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllCarsLocationService
export const getAllCarsCategoriesService = category => {
  return new Promise((resolve, reject) => {
    let config = {
      url: `https://api.injazrent.ae/user/getAllCars?category=${category}`,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getCarsByIdService
export const getCarsByIdService = id => {
  // console.log(id, 'service get id'); // Uncomment for debugging
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_CARS_BY_ID, id),
      method: METHODS.GET,
    };
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//createInquiryService
export const createInquiryService = async data => {
  try {
    const response = await Axios.post(SERVICE_ROUTES.CREATE_INQUIRY, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//getInquiryService
export const getInquiryService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_INQUIRY,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllAdressService
export const getAllAdressService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_ADDRESS,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllBranchService
export const getAllBranchService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_BRANCHES,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllWalletServices
export const getAllWalletServices = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_WALLET,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getAllBookingHistoryServices
export const getAllBookingHistoryServices = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_BOOKING_HISTORY,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//getUserByIdService
export const getUserByIdService = id => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_USER_BY_ID, id),
      method: METHODS.GET,
    };
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//getAddressByIdService
export const getAddressByIdService = id => {
  return new Promise((resolve, reject) => {
    let config = {
      url: replaceUrl(SERVICE_ROUTES.GET_ADDRESS_BY_ID, id),
      method: METHODS.GET,
    };
    Axios.request(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//updateAccountService
export const updateAccountService = (data, accessToken) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.UPDATE_ACCOUNT,
      method: METHODS.PATCH,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    Axios.request(config)
      .then(res => {
        console.log(res, 'Response from update edit profile service');
        resolve(res);
      })
      .catch(err => {
        console.error(err, 'Error updating edit profile');
        console.log('Error response:', err.response);
        console.log('Request:', err.request);

        reject(err);
      });
  });
};

//logOutService
export const logOutService = async bearerToken => {
  try {
    const config = {
      url: SERVICE_ROUTES.LOG_OUT,
      method: METHODS.POST,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };

    const response = await axiosInstance.request(config);
    console.log(response, '.......response from logout services');
    return response.data;
  } catch (error) {
    console.error('Error in logOutService:', error);
    throw error;
  }
};
//createDocumentService
export const createDocumentService = data => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.CREATE_DOCUMENT,
      method: METHODS.POST,
      headers: {'Content-Type': 'multipart/form-data'},
      data,
    };

    Axios.request(config)
      .then(res => {
        console.log(res, 'Response from update product pic service');
        resolve(res);
      })
      .catch(err => {
        console.error(err, 'Error updating product pic');
        console.log('Error response:', err.response);
        console.log('Request:', err.request);
        reject(err);
      });
  });
};
//getAllDocumentsService
export const getAllDocumentsService = () => {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.GET_ALL_DOCUMENTS,
      method: METHODS.GET,
    };

    Axios.request(config)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
//deleteDocumentByIdService
export const deleteDocumentByIdService = ({id}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: `${SERVICE_ROUTES.DELETE_DOCUMENT_BY_ID}/${id}`,
      method: METHODS.DELETE,
    };
    console.log(config, '.....config');

    Axios.request(config)
      .then(res => {
        console.log(res, '.......response from service');
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
// updateDocumentByIdService
export const updateDocumentByIdService = ({id, selectedImageUri}) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('documentImages', {
      uri: selectedImageUri,
      type: 'image/jpeg', // You may need to determine the correct MIME type dynamically
      name: 'profile_image.jpg',
    });

    Axios.request({
      url: replaceUrl(SERVICE_ROUTES.UPDATE_DOCUMENT_BY_ID, {id}),
      method: 'PATCH', // Ensure the method is PATCH
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(res => {
        console.log(res, '.......response from update service');
        resolve(res);
      })
      .catch(err => {
        console.error('Error in updateDocumentByIdService:', err);
        reject(err); // Reject with the error object for further handling
      });
  });
};
