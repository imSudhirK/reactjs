export function isAuthenticated() {
    return !!getAccessToken();
}

// Access Token
export function setAccessToken(accessToken) {
    return window.localStorage.setItem('accessToken', accessToken)
}

export function getAccessToken() {
    return window.localStorage.getItem('accessToken')
}

// Refresh Token
export function setRefreshToken(refreshToken) {
    return window.localStorage.setItem('refreshToken', refreshToken)
}

export function getRefreshToken() {
    return window.localStorage.getItem('refreshToken')
}