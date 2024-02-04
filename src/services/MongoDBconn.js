import axios from 'axios';

const baseUrl = 'http://localhost:8080/';
let authToken = null;

export default class MongoDBconn {
  constructor() {
  }

  getAllPeople() {
    const url = baseUrl + 'api/v1/people/allpeople';
    try {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  async getPersonById(id) {
    const url = baseUrl + `api/v1/people/getbyid/${id}`;
    let person;
    try {
      await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  searchValue(search) {
    const url = baseUrl + `api/v1/people/search/${search}`;
    try {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  postPerson(person) {
    const url = baseUrl + 'api/v1/people/insertnew/';
    try {
      axios.post(url, person, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  async postDiscipulado(discipulado) {
    const url = baseUrl + 'api/v1/discipuladomenores/insert';
    try {
      await axios.post(url, discipulado, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  deletePerson(personId) {
    const url = baseUrl + `api/v1/people/deletebyid?id=${personId}`;
    try {
      axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  updatePerson(person) {
    console.log('update person');
    console.log(person);
    const url = baseUrl + 'api/v1/people/update/';
    try {
      axios.put(url, person, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  getAllPeopleOrder(sortby, direction) {
    const url = baseUrl
        + `api/v1/people/sort?field=${sortby}&direction=${direction}`;
    try {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  getAllUserFiles(userid) {
    const url = baseUrl + `api/v1/files/?id=${userid}`;
    try {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  getSpecificFile(userid, filename) {
    const url = baseUrl + `api/v1/files/${userid}/${filename}`;
    try {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  uploadFile(userid, file) {
    const url = baseUrl + `api/v1/files/upload/${userid}`;
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

  deleteFile(userid, filename) {
    const url = baseUrl + `api/v1/files/${userid}/${filename}`;
    try {
      axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  async getLifeteenById(id) {
    const url = baseUrl + `api/v1/discipuladomenores/${id}`;
    let discipulado;
    try {
      await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  async getAllLifeteen() {
    const url = baseUrl + 'api/v1/discipuladomenores/all';
    let discipuladoList;
    try {
      await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  getMonitoresById(id) {
    const url = baseUrl + `api/v1/discipuladomenores/${id}/monitores`;
    try {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  getInscritosById(id) {
    const url = baseUrl + `api/v1/discipuladomenores/${id}/inscritos`;
    try {
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  updateLifeteen(lifeteen) {
    const url = baseUrl + 'api/v1/discipuladomenores/update';
    try {
      axios.put(url, lifeteen, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  deleteDiscipulado(id) {
    const url = baseUrl + `api/v1/discipuladomenores/delete/${id}`;
    try {
      axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
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

  registerAdminUser(registerData) {
    const url = baseUrl + 'api/v1/auth/register';
    try {
      axios.post(url, registerData, {
        headers: {'Content-Type': 'application/json'},
      }).then((response) => {
        if (response.status === 500) {
          return 'Bad Parameters';
        }
        if (response.status === 200) {
          authToken = response.data.token;
          return response.data;
        }
      });
    } catch (error) {
      return error;
    }
  }

  loginUser(loginData) {
    const url = baseUrl + 'api/v1/auth/authenticate';
    try {
      axios.post(url, loginData, {
        headers: {'Content-Type': 'application/json'},
      }).then((response) => {
        if (response.status === 500) {
          return 'Bad Parameters';
        }
        if (response.status === 200) {
          // Save the token
          console.warn(response.data);
          authToken = response.data.token;
          console.log(authToken);
          return response.data;
        }
      });
    } catch (error) {
      return error;
    }
  }
}
