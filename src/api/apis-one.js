import { BASE_URL } from "../helpers/utils-two";
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