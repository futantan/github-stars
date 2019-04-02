import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.github.com/'
});
export const setTokenToRequestHeader = token => {
  request.defaults.headers.common['Authorization'] = `bearer ${token}`;
};

export default request;
