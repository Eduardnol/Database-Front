import axios from 'axios';
import API_CONFIG from "./config";


const HEADERS = API_CONFIG.headers;
const BASE_URL = API_CONFIG.baseUrl;

const DISCIPULADO_MENORES = BASE_URL + '/discipuladomenores';
const POST_DICIPULADO = DISCIPULADO_MENORES +'/insert';
const GET_DICIPULADO_BY_ID = DISCIPULADO_MENORES;
const GET_ALL_DICIPULADO = DISCIPULADO_MENORES + '/all';
const DISCIPULADO_MENORES_DELETE = DISCIPULADO_MENORES + '/delete';
const DISCIPULADO_MENORES_UPDATE = DISCIPULADO_MENORES + '/update';


const postDiscipulado = async (discipulado) => {
  const url = POST_DICIPULADO;
  try {
    await axios.post(url, discipulado, {
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

/**********Lifeteen**********/

const getLifeteenById = async (id) => {
  const url = GET_DICIPULADO_BY_ID + `/${id}`;
  let discipulado;
  try {
    await axios.get(url, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        discipulado = response.data;
      }
    });
  } catch (error) {
    return error;
  }
  return discipulado;
}

const getAllLifeteen = async () => {
  const url = GET_ALL_DICIPULADO;
  let discipuladoList;
  try {
    await axios.get(url, {
      headers: HEADERS,
    }).then((response) => {
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        discipuladoList = response.data;
      }
    });
  } catch (error) {
    return error;
  }
  return discipuladoList;

}

const getMonitoresById = async (id) => {
  const url = DISCIPULADO_MENORES + `/${id}/monitores`;
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

const getInscritosById = async (id) => {
  const url = DISCIPULADO_MENORES + `/${id}/inscritos`;
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

const updateLifeteen = async (lifeteen) => {
  const url = DISCIPULADO_MENORES_UPDATE;
  try {
    axios.put(url, lifeteen, {
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

const deleteDiscipulado = async (id) => {
  const url = DISCIPULADO_MENORES_DELETE + `/${id}`;
  try {
    axios.delete(url, {
      headers: HEADERS,
    }).then((response) => {
      console.log(response);
      if (response.status === 500) {
        return 'Bad Parameters';
      }
      if (response.status === 200) {
        return true;
      }
    });
  } catch (error) {
    return error;
  }

}

export default {
  postDiscipulado,
  getLifeteenById,
  getAllLifeteen,
  getMonitoresById,
  getInscritosById,
  updateLifeteen,
  deleteDiscipulado
}
