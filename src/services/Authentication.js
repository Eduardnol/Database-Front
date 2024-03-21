import axios from 'axios';
import { baseUrl, API_CONFIG, setAuthToken } from "./config";

const HEADERS = API_CONFIG.headers;
const BASE_URL = baseUrl;

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
        setAuthToken(response.data.token);
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
        setAuthToken(response.data.token);
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

