import 'babel-polyfill';
import request from 'superagent';
import { get } from 'lodash';

import config from '../config.json';
import errorCheck from '../utils/errorCheck';
import snackbar from '../utils/snackbar';
import store from '../store';

const configVar = config[process.env.REACT_APP_ENVIRONMENT];

const errorMessage =
  'The application has encountered an error. Our technical staff have been automatically notified and will be looking into this with the utmost urgency.';

const getMethod = async (link, jsonBody) => {
  try {
    const {
      cookies: { epasso },
    } = store.getState();
    const res = await request
      .get(`${configVar.API_HOST}${configVar.BASE_URL}${link}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${epasso}`)
      .send(jsonBody);
    return res.body;
  } catch (err) {
    errorCheck(err);
    const message = get(err, 'response.body.message');
    snackbar({ variant: 'error', message });
    return {
      message: message || errorMessage,
    };
  }
};

const postMethod = async (link, jsonBody) => {
  try {
    const {
      cookies: { epasso },
    } = store.getState();
    const res = await request
      .post(`${configVar.API_HOST}${configVar.BASE_URL}${link}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${epasso}`)
      .send(jsonBody);
    return res.body;
  } catch (err) {
    errorCheck(err);
    const message = get(err, 'response.body.message');
    snackbar({ variant: 'error', message });
    return {
      message: message || errorMessage,
    };
  }
};

const putMethod = async (link, jsonBody) => {
  try {
    const {
      cookies: { epasso },
    } = store.getState();
    const res = await request
      .put(`${configVar.API_HOST}${configVar.BASE_URL}${link}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${epasso}`)
      .send(jsonBody);
    return res.body;
  } catch (err) {
    errorCheck(err);
    const message = get(err, 'response.body.message');
    snackbar({ variant: 'error', message });
    return {
      message: message || errorMessage,
    };
  }
};

const deleteMethod = async link => {
  try {
    const {
      cookies: { epasso },
    } = store.getState();
    const res = await request
      .delete(`${configVar.API_HOST}${configVar.BASE_URL}${link}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${epasso}`)
      .send({});
    return res.body;
  } catch (err) {
    errorCheck(err);
    const message = get(err, 'response.body.message');
    snackbar({ variant: 'error', message });
    return {
      message: message || errorMessage,
    };
  }
};

export { getMethod, postMethod, putMethod, deleteMethod };
