import { request } from "../utils/axios";
import { BASE_URL } from "../utils/constants";

export async function signUp(payload) {
    const url = `${BASE_URL}/users/create`
    return request({
        url: url,
        method: "POST",
        data: payload,
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export async function logIn(payload) {
    const url = `${BASE_URL}/users/login`
    return request({
        url: url,
        method: "POST",
        data: payload,
        headers: {
            "Content-Type": "application/json",
        }
    })
}