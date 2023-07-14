import axios from 'axios';

const baseUrl = 'http://localhost:8080/';

export default class MongoDBconn {
    constructor() {
    }

    getAllPeople() {
        const url = baseUrl + 'api/v1/people/allpeople';
        try {
            axios.get(url, {
                headers: {'Content-Type': 'application/json'},
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

    getPersonById(id) {
        const url = baseUrl + `api/v1/people/getbyid/${id}`;
        try {
            axios.get(url, {
                headers: {'Content-Type': 'application/json'},
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

    searchValue(search) {
        const url = baseUrl + `api/v1/people/search/${search}`;
        try {
            axios.get(url, {
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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

    postDiscipulado(discipulado) {
        const url = baseUrl + 'api/v1/discipuladomenores/insert';
        try {
            axios.post(url, discipulado, {
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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
        const url = baseUrl + `api/v1/people/sort?field=${sortby}&direction=${direction}`;
        try {
            axios.get(url, {
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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

    async getAllLifeteen() {
        const url = baseUrl + 'api/v1/discipuladomenores/all';
        let discipuladoList;
        try {
            await axios.get(url, {
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
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
}
