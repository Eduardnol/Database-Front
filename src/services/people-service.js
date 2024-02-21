import axios from 'axios';
import API_CONFIG from "./config";


const HEADERS = API_CONFIG.headers;
const BASE_URL = API_CONFIG.baseUrl;

const PERSON = BASE_URL + '/people';
const GET_BY_ID = BASE_URL + '/getbyid';
const SEARCH = BASE_URL + '/search';
const INSERT_NEW = BASE_URL + '/insertnew';
const DELETE_BY_ID = BASE_URL + '/deletebyid';
const SORT = BASE_URL + '/sort';
const UPDATE = BASE_URL + '/update';


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
  console.log('update person');
  console.log(person);
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


