const baseUrl = "https://tranquil-beach-30682.herokuapp.com/"

export default class MongoDBconn {

    constructor() {
    }

    async getAllPeople() {

        let url = baseUrl + `api/v1/people/allpeople`
        const response = await fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        const data = response.json();
        //Now its time to check the error codes
        if (response.status == 500) {
            return "Bad Parameters";
        }
        if (response.status == 200) {
            //Process response
            return data;
        }

    }

    async searchValue(search) {

        let url = baseUrl + `api/v1/people/search/${search}`
        const response = await fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        const data = response.json();
        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return data;
        }

    }

    async postPerson(person) {

        const response = await fetch(baseUrl + `api/v1/people/insertnew/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},//important to specify the headers as a JSON
            body: JSON.stringify(person), //We pass into a JSON string the parameters to the api
        })
        const data = response.json(); //The data fetched by the api is converted into json data

        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return data;
        } else {
            return data;
        }
    }

    async deletePerson(personId) {


        const response = await fetch(baseUrl + `api/v1/people/deletebyid?id=${personId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},//important to specify the headers as a JSON
            //We pass into a JSON string the parameters to the api
        })
        const data = response.json(); //The data fetched by the api is converted into json data

        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return data;
        }

    }

    async updatePerson(person) {

        const response = await fetch(baseUrl + `api/v1/people/update/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},//important to specify the headers as a JSON
            body: JSON.stringify(person),
            //We pass into a JSON string the parameters to the api
        })
        //const data = response.json(); //The data fetched by the api is converted into json data

        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return "ok";
        }

    }

    async getAllPeopleOrder(sortby, direction) {

        let url = baseUrl + `api/v1/people/sort?field=${sortby}&direction=${direction}`
        const response = await fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        const data = response.json();
        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return data;
        }

    }

    async getAllUserFiles(userid) {
        let url = baseUrl + `api/v1/files/?id=${userid}`
        const response = await fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        const data = response.json();
        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return data;
        }

    }

    async getSpecificFile(userid, filename) {
        let url = baseUrl + `api/v1/files/${userid}/${filename}`
        const response = await fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        })
        const data = response.json();
        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return data;
        }
    }

    async uploadFile(userid, file) {
        let url = baseUrl + `api/v1/files/upload/${userid}`
        let uploadFile = new FormData();
        uploadFile.append('file', file);
        const response = await fetch(url, {
            method: "POST",
            body: uploadFile,
        })
        const data = response.json();
        //Now its time to check the error codes
        if (response.status === 500) {
            return "Bad Parameters";
        }
        if (response.status === 200) {
            //Process response
            return data;
        }

    }

    async deleteFile(userid, filename) {
        let url = baseUrl + `api/v1/files/${userid}/${filename}`
        const response = await fetch(url, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        })
        //Now its time to check the error codes
        return response.status;
    }

}