import { types } from "../types/types";

const initialState = {
    
}

export const templateReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getTemplates:
            return {
                ...state,
                templateList: [...action.payload]
            }
        case types.registerResumeUrl:
            return {
                ...state,
                url: action.payload
            }
        case types.setActiveTemplate:
            return {
                ...state,
                pdfData: action.payload
            }
            default:
            return state
    }
}