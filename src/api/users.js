import { request } from "../utils/axios";
import { BASE_URL } from "../utils/constants";
import { getRefreshToken } from "../utils/auth";
import axios from "axios";

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

export async function renewAccessToken(_cancelToken) {
    const url = `${BASE_URL}/users/renew-token`;
    const refreshToken = getRefreshToken();
    return axios({
        url: url,
        method: "GET",
        headers: {
            "Authorization": refreshToken,
            "Content-Type": "application/json",
        },
        cancelToken: _cancelToken
    })
}

export async function logOut() {
    const url = `${BASE_URL}/users/logout`
    return request({
        url: url,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
}