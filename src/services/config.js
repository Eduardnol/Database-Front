import VueCookies from 'vue-cookies';

let authToken = VueCookies.get('token');

export let API_CONFIG = () => {
  return {
    headers: {
      'Authorization': `Bearer ` + authToken,
      'Content-Type': 'application/json'
    },
  };
}
export const baseUrl = 'http://localhost:8080/api/v1';

export function setAuthToken (token)  {
  authToken = token;
  VueCookies.set('token', authToken, '1d');
}

