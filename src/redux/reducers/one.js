import { SET_CURRENT_ADDRESS } from "../constants/one"

const initialState = {}

export const reducerOne = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_ADDRESS:
            return { ...state, currentAddress: action.payload }
        default:
            return state
    }
}