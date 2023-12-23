import Axios from "axios";
import { getAccessToken } from "./auth";
const axios = Axios.create({})

// Axios Interceptors Configuration
axios.interceptors.request.use(config => {
    const accessToken = getAccessToken();
    if (accessToken) config.headers['Authorization'] = accessToken;
    return config;
})

export function request(config) {
    return axios.request(config)
}