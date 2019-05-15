import axios from 'axios';
import config from '../config.json';
import snackbar from '../utils/snackbar';

const configVar = config[process.env.REACT_APP_ENVIRONMENT];

export const fetchStreams = async (
  token,
  page = 0,
  pageSize = 10,
  orderBy = '',
  search = ''
) => {
  try {
    const response = await axios({
      url: `${configVar.API_HOST}${
        configVar.BASE_URL
      }/streams?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&search=${search}`,
      method: 'get',
      headers: {
        'Content-Type': ' application/json;charset=UTF-8',
        token
      }
    });
    return response.data;
  } catch (error) {
    snackbar({
      variant: 'error',
      message:
        error.response.data.message || 'Error while fetching streams data.'
    });
    if (error.response.status === 401) {
      window.location = '/login';
    }
    return [];
  }
};

export const fetchStream = async (token, id) => {
  try {
    const response = await axios({
      url: `${configVar.API_HOST}${configVar.BASE_URL}/streams/${id}`,
      method: 'get',
      headers: {
        'Content-Type': ' application/json;charset=UTF-8',
        token
      }
    });
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const createStream = async (token, value) => {
  try {
    const response = await axios({
      url: `${configVar.API_HOST}${configVar.BASE_URL}/streams`,
      method: 'post',
      data: {
        ...value
      },
      headers: {
        'Content-Type': ' application/json;charset=UTF-8',
        token
      }
    });
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const updateStream = async (token, id, value) => {
  try {
    const response = await axios({
      url: `${configVar.API_HOST}${configVar.BASE_URL}/streams/${id}`,
      method: 'patch',
      data: {
        ...value
      },
      headers: {
        'Content-Type': ' application/json;charset=UTF-8',
        token
      }
    });
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const deleteStream = async (token, id) => {
  try {
    const response = await axios({
      url: `${configVar.API_HOST}${configVar.BASE_URL}/streams/${id}`,
      method: 'delete',
      headers: {
        'Content-Type': ' application/json;charset=UTF-8',
        token
      }
    });
    return response;
  } catch (error) {
    return new Error(error);
  }
};

export const validateStream = async (token, url) => {
  try {
    const response = await axios({
      url: `${configVar.API_HOST}${configVar.BASE_URL}/streams/validate`,
      method: 'post',
      data: {
        url
      },
      headers: {
        'Content-Type': ' application/json;charset=UTF-8',
        token
      }
    });
    return response;
  } catch (error) {
    return new Error(error);
  }
};
