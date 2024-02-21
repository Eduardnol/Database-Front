import axios from 'axios';
import API_CONFIG from "./config";
import VueCookies from 'vue-cookies';

const HEADERS = API_CONFIG.headers;
const BASE_URL = API_CONFIG.baseUrl;

const REGISTER = BASE_URL + '/auth/register';
const AUTHENTICATE = BASE_URL + '/auth/authenticate';

const registerAdminUser = async (registerData)  =>{
  try {
    axios.post(REGISTER, registerData, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        API_CONFIG.setAuthToken(response.data.token);
        return response.status;
      }
    });
  } catch (error) {
    return error;
  }
}

const loginUser = async (loginData) => {
  try {
    return axios.post(AUTHENTICATE, loginData, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 401){
        return response.status;
      }
      if (response.status === 200) {
        // Save the token
        VueCookies.set('token', response.data.token, '1d');
        API_CONFIG.setAuthToken(response.data.token);
        return response.status;
      }
    });
  } catch (error) {
    return error;
  }
}
export default {
  registerAdminUser,
  loginUser
};

