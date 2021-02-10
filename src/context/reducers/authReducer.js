import { types } from "../types/types";

const initialState = {
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        case types.authGetUserData:
            return {
                ...state,
                ...action.payload
            }
        case types.authLogout:
            return {
                checking: true
            }
        case types.authUpdate:
            return {
                ...state,
                ...action.payload
            }
            
        case types.authDeleteUserData:

            let pay = ''
            if(action.payload.arr === 'certifications') {
                pay = state.certifications.filter(el => el._id !== action.payload.arrItemId)
                return { ...state, certifications: pay }
            }
            if(action.payload.arr === 'experience') {
                pay = state.experience.filter(el => el._id !== action.payload.arrItemId)
                return { ...state, experience: pay }
            }
            if(action.payload.arr === 'profession') {
                pay = state.profession.filter(el => el._id !== action.payload.arrItemId)
                return { ...state, profession: pay }
            }
            if(action.payload.arr === 'skills') {
                pay = state.skills.filter(el => el._id !== action.payload.arrItemId)
                return { ...state, skills: pay }
            }
            break;
        default:
            return state
    }
}