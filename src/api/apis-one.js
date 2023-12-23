import { BASE_URL } from "../utils/constants";
import Axios from "axios";
const axios = Axios.create({});

export function request(config) {
    return axios.request(config);
}

export async function testApiCall() {
    const url = `${BASE_URL}`
    console.log("url\t", url, "\turl")
    return url;
}

export function uploadSelfieVideo(formData) {
    const url = `${BASE_URL}`
    return request({
        url: url,
        method: "POST",
        data: formData,
        headers: {
            "userId": 123
        }
    })
}

export function getCurrentAddress(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    return request({
        url: url,
        method: "GET"
    })
}