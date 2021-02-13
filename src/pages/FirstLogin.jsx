import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { startUpdate } from '../context/actions/auth'
import {handleFocus, handleBlur} from '../helpers/focusBlur'
import { fileUpload } from '../helpers/photoUpload';
import cameraIcon from "../img/icons/camera.svg";
import FirstLoginImg from '../img/illustration/firstlogin.svg'

export default function FirstLogin() {
    const history = useHistory()
    const dispatch = useDispatch()
    const {auth} = useSelector(state => state)
    const {name, phone: tel, dni, birth, address} = auth
    const [phone, setPhone] = useState('')

     const setPhoneChange = e => {
        const value = e.target.value
        const regexp = /^\(?([0-9]{3,4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        setPhone(value)
        if(value.match(regexp)) {
            let finalV = ''
            if(value.length === 10) {
                //format to (xxx) xxx xxxx
                finalV = `(${value.slice(0,3)}) ${value.slice(3,6)} ${value.slice(6,10)}`
            } else if (value.length === 11) {
                //format to (xxxx) xxx xxxx
                finalV = `(${value.slice(0,4)}) ${value.slice(4,7)} ${value.slice(7,11)}`
            }
            setUserData({ ...userData, phone: finalV })
        }
    }
    
    const [userData, setUserData] = useState({name, phone: tel, dni, birth, address})
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const {_id: uid} = useSelector(state => state.auth)

    const handleSubmit = e => {
        e.preventDefault()
        const {name, phone, dni, birth, address} = userData
        if (name === '' || phone === '' || dni === '' || birth === '' || address === '') {
            return false
        } else { 
            dispatch(startUpdate(uid, userData)) 
            history.push('/walktrought')
        }
    }

    const handleFileChange = async (e) => {
        let file = e.target.files[0]
        //upload to cloud, handle with redux? nope
        const imgData = await fileUpload(file)
        console.log(imgData)
        let path = await imgData.secure_url.split('upload/')[1]
        console.log(path)
        //save in the state
        let data = { img: `https://res.cloudinary.com/dnpo1nny3/image/upload/c_scale,ar_1:1,w_auto,c_crop,g_face,z_0.8/w_240/${path}`}
        //render in the dom
        
        let preview = document.querySelector('.previewPhoto')
        
            preview.innerHTML = `<img src="https://res.cloudinary.com/dnpo1nny3/image/upload/c_scale,ar_1:1,w_auto,c_crop,g_face,z_0.8/w_240/${path}" alt="" />`;
        dispatch(startUpdate(uid, data))
    } 

    return (
        <>
         
        <div className="container loginPage">
            <div className="col-10 offset-1 first">
                <h5 className="mb-4 mt-5 regular">Hola {userData.name}, guardemos tu foto y otros datos de contacto</h5>
            </div>
            <section className="profile-main col-12 d-flex flex-column align-items-center justify-content-center">
                <div className="upload-container col-12 d-flex flex-column align-items-center justify-content-center">
                    <img src={FirstLoginImg} className="col-12 mb-1 FirstLoginImg" alt="" />
                    <div className="fileChoosen d-flex flex-column align-items-center justify-content-center">
                        <img src={cameraIcon} className="cameraIcon" alt=""/>
                        <input onChange={handleFileChange} type="file" id="file" className="inputFile" />
                        <div className="previewPhoto">
                        {(auth.img) ? <img src={auth.img} alt="" /> : null}
                        
                        </div>

                    </div>
                </div>
                <form onSubmit={handleSubmit} className="col-12 d-flex flex-column align-items-center justify-content-center" >
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                        <label htmlFor="name" className="first-start">Nombre completo</label>
                        <input onChange={handleInputChange} value={userData.name} type="text" name="name" />
                    </div>
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                        <label htmlFor="phone">Telefono</label>
                        <input type="tel" name="phone" value={phone} onChange={setPhoneChange} pattern="[0-9]{11}"  />
                    </div>
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                        <label htmlFor="dni">Cedula</label>
                        <input onChange={handleInputChange} value={userData.dni} type="text" name="dni" pattern="[0-9]{8,10}" />
                    </div>
                    <div onLoad={handleBlur} onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                        <label htmlFor="birth">fecha de nacimiento</label>
                        <input onChange={handleInputChange} value={userData.birth } type="date" name="birth" min="1948-01-01" max="2005-12-31" />
                    </div>
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                        <label htmlFor="address">Direccion</label>
                        <input onChange={handleInputChange} value={userData.address} type="text" name="address" />
                    </div>

                    <div className="field-container mb-3 mt-1">
                        <input className="btn btn-submit bold col-6 offset-3" type="submit" value="Guardar"/>
                    </div>
                </form>
            </section>
        </div>
    
        </>
    )
}
