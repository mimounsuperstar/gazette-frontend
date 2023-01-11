import {getUserData, validUser} from "../api/userApiCalls";
import axios from "axios";
import {apiURL} from "../api/api";

export async function getRedirectStatus(auth_requirement) {
    const logged_in = await validUser()
    if (!logged_in && auth_requirement) {
        return true
    } else if (logged_in && !auth_requirement) {
        return true
    } else {
        return false
    }
}

export async function getRank() {
    const userdata = await getUserData()
    const userRank = userdata.groups
    if (userRank.includes(3)) {
        return "admin"
    } else if (userRank.includes(4)) {
        return "redactor"
    } else if (userRank.includes(5)) {
        return "marker"
    } else {
        return "arriviste"
    }

}

export async function getPermission(id) {
    const token = sessionStorage.getItem('req_token')
    const response = await axios.get(apiURL + "articles/permission/" + id, {headers: {"Authorization": "Token " + token}})
    return response.data

}

