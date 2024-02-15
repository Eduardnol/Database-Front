import VueCookies from 'vue-cookies';

let authToken = null;

let API_CONFIG = () => {
  return {
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
  };
}

function setAuthToken ()  {
  API_CONFIG().headers.Authorization = `Bearer ${authToken}`;
  VueCookies.set('token', authToken, '1d');
}


export default {
  API_CONFIG,
  setAuthToken
};
