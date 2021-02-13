import { types } from "../types/types";
import { fetchSinToken, fetchConToken } from "../../helpers/fetch"

export const startLogin = (email,password) => {
    return async dispatch => {
        const resp = await fetchSinToken('auth', {email, password}, 'POST')
        const body = await resp.json()
        console.log(body.user)
        if(body.ok) {
            //save the token
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( login({...body.user, error: null}) )
        } else {
            dispatch( login({error: body.message}) )
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})


export const startRegister = (email, password, name) => {
    return async ( dispatch ) => {
        const resp = await fetchSinToken('user', {email,password, name}, 'POST')
        const body = await resp.json()
        console.log(body)
        if(body.ok) {
            //save the token
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            //dispatch the login
            dispatch(startLogin(email,password))
        }
    }
}

export const startGetUserData = (uid) => {
    return async (dispatch) => {
        const resp = await fetchConToken('user/my-data', {uid}, 'POST')
        const body = await resp.json()
        console.log(body)
        if (body.ok) {
            body.user.uid = body.user._id
            delete body.user._id
            dispatch(getUserData(body.user))
        }
    }
}

const getUserData = (data) => ({
    type: types.authGetUserData,
    payload: data
})

export const startDeleteData = (id, arr, arrItemId) => {
    return async(dispatch) => {
        console.log(arr)
        const resp = await fetchConToken('user/deleteOne', {id, arr, arrItemId}, 'DELETE')
        const body = await resp.json()
        console.log(body)
        if (body.ok) {
            dispatch(deleteData(arr, arrItemId))
        } else {
            dispatch(startLogout())
        }
    }
}

const deleteData = (arr, arrItemId) => ({
    type: types.authDeleteUserData,
    payload: {arr, arrItemId}
})


export const startLogout = () => {
    return async dispatch => {
        localStorage.removeItem('token-init-date')
        localStorage.removeItem('token')
        dispatch(logout())
    }
}
const logout = () => ({
    type: types.authLogout
})


//update
                            //object with data
export const startUpdate = (uid, data) => {
    console.log(data)
    return async dispatch => {
        const resp = await fetchConToken(`user/${uid}`, data, 'PUT')
                                        //returns a entire updated user object
        const body = await resp.json()
        if(body.ok) {
            dispatch(update(body.userUpdated))
        } else {
            dispatch(startLogout())
        }
    }
}

const update = (update) => ({
    type: types.authUpdate,
    payload: update
})

export const renewToken = (id)=>{
    return async (dispatch) => {
        console.log('renewwww')
        const resp = await fetchConToken(`auth/renew-token`, {id}, 'POST')
        const body = await resp.json()
        if(body.ok === false) { dispatch(startLogout()) }
        else {
            //save the token
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
        }
    }
}