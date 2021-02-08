import {httpClient, InitHeaders, ResetHeaders} from '../../httpClient';
import {Storage} from '../../helpers';

export const getEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await httpClient.get('users');
      const newEmploers = response?.data[0].map((value) => ({
        id: `${value?.id}`,
        name: `${value?.first_name} ${value?.last_name}`,
        ...value,
      }));
      dispatch({
        type: '@@auth/SET_EMPLOYEES',
        payload: newEmploers,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const signUp = (data) => {
  return async (dispatch) => {
    console.log(data);
    try {
      const response = await httpClient.post('auth/signup', data);
      const token = response?.headers?.authorization;
      InitHeaders(token);
      await Storage.storeData('token', token);
      console.log(response);
      dispatch({
        type: '@@auth/SET_USER',
        payload: response?.data || null,
      });
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const signIn = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: '@@auth/LOGIN_ERROR',
        payload: null,
      });
      const response = await httpClient.post('auth/signin', data);
      const token = response?.headers?.authorization;
      InitHeaders(token);
      await Storage.storeData('token', token);
      console.log(response);
      dispatch({
        type: '@@auth/SET_USER',
        payload: response?.data || null,
      });
    } catch (error) {
      console.error(error.response);
      dispatch({
        type: '@@auth/LOGIN_ERROR',
        payload:
          error?.response?.data || 'Something went wrong, please try again.',
      });
      console.error(error.response);
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    console.log(1);
    try {
      await httpClient.post('auth/signout');
      ResetHeaders();
      await Storage.removeData('token');
      dispatch({
        type: '@@auth/SET_USER',
        payload: null,
      });
    } catch (error) {
      console.error(error.response);
    }
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const response = await httpClient.get('user');
      dispatch({
        type: '@@auth/SET_USER',
        payload: response?.data?.data,
      });
    } catch (error) {
      console.error(error.response);
    }
  };
};
