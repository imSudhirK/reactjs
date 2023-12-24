import { request } from "../utils/axios";
import { BASE_URL } from "../utils/constants";

export async function createNotes(payload) {
    const url = `${BASE_URL}/notes/create`
    return request({
        url: url,
        method: "POST",
        data: payload,
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export async function fetchNotes() {
    const url = `${BASE_URL}/notes/fetch`
    return request({
        url: url,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export async function updateNotes(payload) {
    const url = `${BASE_URL}/notes/update`
    return request({
        url: url,
        method: "POST",
        data: payload,
        headers: {
            "Content-Type": "application/json",
        }
    })
}

export async function deleteNotes(id) {
    const url = `${BASE_URL}/notes/${id}/delete`
    return request({
        url: url,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
}