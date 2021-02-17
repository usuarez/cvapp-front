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

        case types.saveBase64Pdf:
            return {
                ...state,
                base64: action.payload
            }

        case types.templLogout:
            return {
                
            }
            default:
            return state
    }
}