import axios from "axios";
import {apiURL} from "./api";

export async function userApiCalls(username, password) {
    try {
        await axios.post(apiURL + "login/", {'username': username, 'password': password})
        return true
    } catch (e) {
        return false
    }
}

export async function generateToken(username, password) {
    try {
        const response = await axios.post(apiURL + "token/", {'username': username, 'password': password})
        return response.data
    } catch (err) {
        return err;
    }
}

export async function validUser() {
    try {
        const token = sessionStorage.getItem('req_token')
        const response = await axios.get(apiURL + "user/check/", {headers: {"Authorization": "Token " + token}})
        if (response.data.detail == "Invalid Token.") {
            return false
        } else {
            return true
        }
    } catch (err) {
        return false;
    }
}

export async function getUserData() {
    try {
        const token = sessionStorage.getItem('req_token')
        const response = await axios.get(apiURL + "user/check/", {headers: {"Authorization": "Token " + token}})
        if (response.data.detail == "Invalid Token.") {
            return {"groups": [false]}
        } else {
            return response.data
        }
    } catch (err) {
        return {"groups": [false]};
    }
}

export async function getReportersList() {
    try {
        const token = sessionStorage.getItem('req_token')
        const response = await axios.get(apiURL + "articles/add/", {headers: {"Authorization": "Token " + token}})
        return response.data
    } catch (err) {
        return err;
    }
}

export async function registerUser(firstName, lastName, email) {
    try {
        const token = sessionStorage.getItem('req_token')
        await axios.post(apiURL + "user/handle/", {
            "last_name": lastName,
            "first_name": firstName,
            "email": email
        }, {headers: {"Authorization": "Token " + token}})
        return true
    } catch (err) {
        return false;
    }
}

export async function deleteUserApi(id) {
    try {
        const token = sessionStorage.getItem('req_token')
        await axios.delete(apiURL + "user/delete/" + id, {headers: {"Authorization": "Token " + token}})
        return true
    } catch (err) {
        return false;
    }
}

