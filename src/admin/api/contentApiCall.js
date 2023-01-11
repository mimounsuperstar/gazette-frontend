import {apiURL} from "./api";
import axios from "axios";

export async function listEditions() {
    const response = await axios.get(apiURL + "editions/list/")
    return response.data
}

export async function addEdition(title) {
    try {
        const token = sessionStorage.getItem('req_token')
        await axios.post(apiURL + "editions/add/", {"title": title}, {headers: {"Authorization": "Token " + token}})
        return true
    } catch (e) {
        return e
    }
}

export async function listArticles(edition) {
    try {
        const token = sessionStorage.getItem('req_token')
        const response = await axios.get(apiURL + "articles/list/" + edition, {headers: {"Authorization": "Token " + token}})
        return response.data
    } catch (e) {
        return e
    }
}

export async function listTasks(edition) {
    try {
        const token = sessionStorage.getItem('req_token')
        const response = await axios.get(apiURL + "tasks/list/" + edition, {headers: {"Authorization": "Token " + token}})
        return response.data
    } catch (e) {
        return e
    }
}

export async function publishEdition(edition) {
    try {
        const token = sessionStorage.getItem('req_token')
        const response = await axios.get(apiURL + "editions/publish/" + edition, {headers: {"Authorization": "Token " + token}})
        return true
    } catch (e) {
        return e
    }
}

export async function addArticle(redactor1, redactor2, tag, title, marker, edition) {
    try {
        const token = sessionStorage.getItem('req_token')
        await axios.post(apiURL + "articles/add/",
            {
                "title": title,
                "label": tag,
                "redactor_1": redactor1,
                "redactor_2": redactor2,
                "corrector": marker,
                "content": "",
                "edition": edition
            }, {headers: {"Authorization": "Token " + token}})
        return true
    } catch (e) {
        return e
    }
}

export async function sendMarkerApi(id) {
    try {
        const token = sessionStorage.getItem('req_token')
        await axios.get(apiURL + "articles/edit/" + id, {headers: {"Authorization": "Token " + token}})
        return true
    } catch (err) {
        return false;
    }
}
