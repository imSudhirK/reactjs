import { SET_CURRENT_ADDRESS } from "../constants/one";

export const setCurrentAddress = (payload) => ({
    type: SET_CURRENT_ADDRESS,
    payload: payload
})