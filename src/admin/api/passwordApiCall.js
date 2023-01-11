import axios from "axios";
import {apiURL} from "./api";

export async function sendForgotMail(mail) {
    try {
        await axios.get(apiURL + "lost_password/" + mail)
        return true
    } catch (e) {
        return false
    }
}

export async function changePassword(token, password) {
    try {
        await axios.post(apiURL + "lost_password/" + token, {"password": password})
        return true
    } catch (e) {
        return false
    }
}

