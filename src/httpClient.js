import axios from 'axios';

export const APP_DOMAIN = 'http://207.154.241.7';
export const API_URL = `${APP_DOMAIN}/api/v1/`;

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const InitHeaders = async (token) => {
  httpClient.defaults.headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};
export const ResetHeaders = () => {
  httpClient.defaults.headers = {};
};
