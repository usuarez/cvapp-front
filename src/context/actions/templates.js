import { types } from "../types/types";
import { fetchSinToken, fetchConToken } from "../../helpers/fetch"
import { startLogout } from "./auth";

const backendHost = process.env.REACT_APP_BACK_URL


export const startGetTemplates = () => {
    return async dispatch => {
        const resp = await fetchSinToken('user/templates', {}, 'GET')
        const body = await resp.json()
        console.log(body)
        if(body.templates) {
            const {templates} = body
            dispatch(getTemplates(templates))   
        }
    }
}

const getTemplates = (arr) => ({
    type: types.getTemplates,
    payload: arr
})

export const generateTemplate = (data) => {
    return async (dispatch) => {
        const resp = await fetchConToken('user/genpdf', {data}, 'POST')
        const body = await resp.json()
        console.log(body)
        if(body.ok) {
            dispatch(resumeUrl(`${backendHost}/resumes/${data.uid}-${data.pdfData.templateName}.pdf`))
        }
        else {
            dispatch(startLogout())
        }
    }
}

const resumeUrl = (url) => ({
    type: types.registerResumeUrl,
    payload: url
})



export const setActiveTemplate = (pdfData) => ({
    type: types.setActiveTemplate,
    payload: pdfData
})


export const getPdfPreview = (uid, activeTemplateName) => {
    return async dispatch => {
        try {
            const resp = await fetchSinToken(`user/preview/${uid}/${activeTemplateName}`, {}, 'GET')
            console.log(resp)
            const body = await resp.json()
            console.log(body)
            if(body.ok){
                dispatch(savepdfPreview(body.pdf))
            }
            
        } catch (error) {
         console.log(error)   
        }
            
    } 
}

const savepdfPreview = (strbase64) => ({
    type: types.saveBase64Pdf,
    payload: strbase64
 })

 export const tempLogout = ()=>({
     type: types.templLogout
 })