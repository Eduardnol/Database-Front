import axios from 'axios';
import API_CONFIG from "./config";

const HEADERS = API_CONFIG.headers;
const BASE_URL = API_CONFIG.baseUrl;
const GET_ALL_FILES = BASE_URL + '/files/files';
const UPLOAD_FILE = BASE_URL + '/files/upload';
const DELETE_FILE = BASE_URL + '/files';
const getAllUserFiles = async (userid) => {
  const url = GET_ALL_FILES`/?id=${userid}`;
  try {
    axios.get(url, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        return response.data;
      }
    });
  } catch (error) {
    return error;
  }
}

const getSpecificFile = async (userid, filename) => {
  const url = BASE_URL + `api/v1/files/${userid}/${filename}`;
  try {
    axios.get(url, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        return response.data;
      }
    });
  } catch (error) {
    return error;
  }
}

const uploadFile = async (userid, file) => {
  const url = UPLOAD_FILE`/${userid}`;
  try {
    const formData = new FormData();
    formData.append('file', file);
    axios.post(url, formData).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        return response.data;
      }
    });
  } catch (error) {
    return error;
  }
}

const deleteFile = async (userid, filename) => {
  const url = DELETE_FILE + `/${userid}/${filename}`;
  try {
    axios.delete(url, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        return response.data;
      }
    });
  } catch (error) {
    return error;
  }
}

export default {
  getAllUserFiles,
  getSpecificFile,
  uploadFile,
  deleteFile
};

