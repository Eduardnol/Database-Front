import axios from 'axios';
import {API_CONFIG, baseUrl} from "./config";


const HEADERS = API_CONFIG().headers;
const BASE_URL = baseUrl;
const PEOPLE = BASE_URL + '/people';

const PERSON = PEOPLE + '/getallpeople';
const GET_BY_ID = PEOPLE + '/getbyid';
const SEARCH = PEOPLE + '/search';
const INSERT_NEW = PEOPLE + '/insertnew';
const DELETE_BY_ID = PEOPLE + '/deletebyid';
const SORT = PEOPLE + '/sort';
const UPDATE = PEOPLE + '/update';


const getAllPeople = async () => {
  const url = `${PERSON}/allpeople`;
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

const getPersonById = async (id) => {
  const url = GET_BY_ID + `/${id}`;
  let person;
  try {
    await axios.get(url, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        person = response.data;
      }
    });
  } catch (error) {
    return error;
  }
  return person;
}

const searchValue = async (search) => {
  const url = SEARCH + `/${search}`;
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

const postPerson = async (person) => {
  try {
    axios.post(INSERT_NEW, person, {
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

const deletePerson = async (personId) => {
  const url = DELETE_BY_ID + `/?id=${personId}`;
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

const updatePerson = async (person) => {
  try {
    axios.put(UPDATE, person, {
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

const getAllPeopleOrder = async (sortby, direction) => {
  const url = SORT + `/?field=${sortby}&direction=${direction}`;
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
export default {
  getAllPeople,
  getPersonById,
  searchValue,
  postPerson,
  deletePerson,
  updatePerson,
  getAllPeopleOrder
}


