export const SERVICE_ROUTES = {
  LOGIN: 'https://api.injazrent.ae/user/login',
  SIGN_UP: 'https://api.injazrent.ae/user/signUp',
  GET_ALL_CARS: '/user/getAllCars',
  GET_ALL_CARS_CATEGORY: '/user/getAllCars',
  GET_ALL_CARS_LOCATION: '/user/getAllcarLoaction',
  GET_CARS_BY_ID: '/user/getCar/:id',
  GET_ALL_SETTINGS: '/admin/getAllsettings',
  CREATE_INQUIRY: '/user/createInquiry',
  GET_INQUIRY: '/user/getInquirys',
  GET_ALL_BRANCHES:
    'https://www.server.injazrent.ae/api/v1/user/getAllBranches',
  GET_ALL_WALLET: 'https://www.server.injazrent.ae/api/v1/user/getAllWallets',
  GET_ALL_BOOKING_HISTORY:
    'https://www.server.injazrent.ae/api/v1/user/getAllBookingDetails',
  GET_USER_BY_ID:
    'https://www.server.injazrent.ae/api/v1/users/getUserById/:id',
  UPDATE_ACCOUNT: 'https://www.server.injazrent.ae/api/v1/users/update-account',
  LOG_OUT: 'https://www.server.injazrent.ae/api/v1/users/logout',
  CREATE_DOCUMENT: 'https://www.server.injazrent.ae/api/v1/user/createDocument',
  GET_ALL_DOCUMENTS:
    'https://www.server.injazrent.ae/api/v1/user/getAllDocuments',
  GET_ADDRESS_BY_ID:
    'https://www.server.injazrent.ae/api/v1/user/getAddressById/:id',
  DELETE_DOCUMENT_BY_ID:
    'https://www.server.injazrent.ae/api/v1/user/deleteDocumentById',

  UPDATE_DOCUMENT_BY_ID:
    'https://www.server.injazrent.ae/api/v1/user/updateDocumentById/id:id',
};
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};
export const replaceUrl = (url, data) => {
  var regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');
  return url?.replace(regex, (m, $1) => data[$1] || m);
};
