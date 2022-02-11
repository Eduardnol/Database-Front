
export default class MongoDBconn {

    constructor() { }
    async getAllPeople() {

        let url = `http://localhost:8080/api/v1/people/allpeople`
        const response = await fetch(url, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
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

        let url = `http://localhost:8080/api/v1/people/search/${search}`
        const response = await fetch(url, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
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
    async postPerson(person) {
        const response = await fetch(`http://localhost:8080/api/v1/people/insertnew/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },//important to specify the headers as a JSON
            body: JSON.stringify(person), //We pass into a JSON string the parameters to the api
        })
        const data = response.json(); //The data fetched by the api is converted into json data

        //Now its time to check the error codes
        if (response.status == 500) {
            return "Bad Parameters";
        }
        if (response.status == 200) {
            //Process response
            return data;
        }
    }
    async deletePerson(personId) {


        const response = await fetch(`http://localhost:8080/api/v1/people/deletebyid?id=${personId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },//important to specify the headers as a JSON
            //We pass into a JSON string the parameters to the api
        })
        const data = response.json(); //The data fetched by the api is converted into json data

        //Now its time to check the error codes
        if (response.status == 500) {
            return "Bad Parameters";
        }
        if (response.status == 200) {
            //Process response
            return data;
        }

    }
    async updatePerson(person) {


        const response = await fetch(`http://localhost:8080/api/v1/people/update/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },//important to specify the headers as a JSON
            body: JSON.stringify(person),
            //We pass into a JSON string the parameters to the api
        })
        const data = response.json(); //The data fetched by the api is converted into json data

        //Now its time to check the error codes
        if (response.status == 500) {
            return "Bad Parameters";
        }
        if (response.status == 200) {
            //Process response
            return data;
        }

    }
}