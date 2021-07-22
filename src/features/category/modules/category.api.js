// import qs from 'query-string';

import axiosService from '@src/modules/axiosService';
import {API_ENDPOINT} from '@env';

const route = 'category';

export const getAllCategoryAPI = () => {
  return axiosService.get(`${API_ENDPOINT}/${route}`);
};
