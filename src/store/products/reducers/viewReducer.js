import {HIDE_LOADER, SHOW_LOADER} from "../types/types";

const initialState = {
    loading: false
}

export const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        default:
            return state
    }
}