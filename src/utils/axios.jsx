import Axios from "axios";
import { getAccessToken, removeCredentials, setAccessToken } from "./auth";
import { logOut, renewAccessToken } from "../api/users";
import { message } from "antd";
const axios = Axios.create({})

// Axios Interceptors Configuration
axios.interceptors.request.use(config => {
    const accessToken = getAccessToken();
    if (accessToken) config.headers['Authorization'] = accessToken;
    return config;
})

const cancelledRequests = [];
const failedRequests = [];
axios.interceptors.response.use(
    resp => { return resp; },
    err => {
        const originalRequest = err.config;
        const checkIfAgainHitting = failedRequests.some(_req => _req === originalRequest.url)
        if (err.response.status === 401 &&
            (checkIfAgainHitting ||
                originalRequest.url.includes('/login') ||
                originalRequest.url.includes('/logout') ||
                originalRequest.url.includes('/renew-token')
            )
        ) {
            failedRequests.length = 0;
            return err;
        } else if (err.response.status === 401) {
            const cancelToken = Axios.CancelToken.source();
            cancelledRequests.push(cancelToken);
            failedRequests.push(originalRequest.url);
            renewAccessToken(cancelToken.token).then(_resp => {
                const accessToken = _resp.data?.accessToken;
                setAccessToken(accessToken)
                cancelledRequests.forEach(req => req.cancel());
                cancelledRequests.length = 0;
                return axios(originalRequest)
            }).catch(_err => {
                if (Axios.isCancel(_err)) return axios(originalRequest);
                else logOut().then(() => {
                    removeCredentials();
                    window.location.replace('/login');
                    message.info("Session Expired!");
                }).catch(_err => {
                    removeCredentials();
                    window.location.replace('/login');
                    message.info("Session Expired!");
                })
            })
        }
    }
)

export function request(config) {
    return axios.request(config)
}