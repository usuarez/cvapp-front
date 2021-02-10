import React, { useEffect, useState } from 'react'
import {handleFocus, handleBlur} from '../helpers/focusBlur'
import {handleSwitch} from '../helpers/switchForms'
import {passwordValidation} from '../helpers/passwordValidation'
import CheckItem from '../components/CheckItem'
import validator from 'email-validator'
import { useDispatch, useSelector } from 'react-redux';
import { startGetUserData, startLogin, startLogout, startRegister } from '../context/actions/auth'
import LoginBg from '../img/illustration/login.svg'
import SignupBg from '../img/illustration/register.svg'
import { Redirect, useHistory } from 'react-router-dom'

function LoginPage() {
    const history = useHistory()
    //states
    //user and email to register
    const [signUp, setSignUp] = useState({
        email: '',
        password: ''
    })
    //password validations to handle error in the input password
    const [validation, setValidation] = useState({
        ok: true,
        errors: []
    })
    //end states

    /**Event handlers */
    //inputs of the register form
    const handleRegisterInputs = ({target}) => {
        (target.name === 'password') && handlePasswordValidation()
        setSignUp({
            ...signUp,
            [target.name]: target.value
        })
    }
    //password validation in the register form
    const handlePasswordValidation = () => {
        const {password} = signUp
        const validated = passwordValidation(password)
        if(validated.length !== 0) {
            setValidation({
                ok:false,
                errors: validated
            })    
        } else {
            setValidation({
                ok: true,
                errors: validated
            })
        }
    }

    const dispatch = useDispatch()
    //submit the sugnup or register form
    const handleSubmit = e => {
        e.preventDefault()
        if(validator.validate(signUp.email) && validation.ok === true){
            //e.target.submit()
            const {email, password, name} = signUp
            dispatch(startRegister(email, password, name))
        }
    }
    let {auth} = useSelector(state => state)
    
    //the login handler
    const handleLogin = (e) => {
        e.preventDefault()
        const email = document.getElementById('loginemail').value
        const password = document.getElementById('loginpassword').value
        if(email !== '' && password !== '') {
            dispatch(startLogin(email,password))
            history.push('/')
        } else {
            console.log('empty')
        }
    }
    
    /**end event handlers */
    const {password} = signUp
    
    
    window.onload = ()=>{ !!auth.hasOwnProperty('uid') && dispatch(startLogout())}

    //loginError appears when user try to login with bad credentials, in other cases is null
    const {error: LoginError} = useSelector(state => state.auth)

    return (
        <div className="fluid-container loginPage">
            
            <div className="bubbles">
                <div className="bubble c-y"></div>
                <div className="bubble c-o"></div>
            </div>
            <h4 className="offset-1 thin">Bienvenido</h4>
            <div className="forms">
                {/**login */}
                <form onSubmit={handleLogin} className="login-form col-10 offset-1">
                    <div className="bg-container col-12 d-flex justify-content-center">
                        <img className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3" src={LoginBg} alt=""/>
                    </div>
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="loginemail" />
                    </div>
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="loginpassword" />
                    </div>
                    { (!!LoginError !== false) ? <div className="field-container login-error mb-3">
                        <span className="bold">{LoginError}</span>
                    </div> : null }
                    
                    <div className="field-container mb-4">
                        <input className="btn btn-submit bold col-6 offset-3" type="submit" value="Inicia Sesion"/>
                    </div>

                    <div className="register">
                    <span className="mb-2 mt-2 type-body2">¿No tienes una cuenta?</span>
                    <button onClick={handleSwitch} className="btn btn-secondary bold">Registrate</button>

                    </div>
                </form>


                {/**Registro */}


                <form onSubmit={handleSubmit} className="signup-form col-10 offset-1 activeForm">
                <div className="bg-container col-12">
                        <img className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4" src={SignupBg} alt=""/>
                    </div>
                <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                        <label htmlFor="name">Nombre</label>
                        <input onChange={handleRegisterInputs}  type="text" name="name" />
                    </div>
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-3">
                        <label htmlFor="email">Email</label>
                        <input onChange={handleRegisterInputs}  type="text" name="email" />
                    </div>
                    <div onClick={handleFocus} onBlur={handleBlur} className="field-container mb-1">
                    <label htmlFor="password">Contraseña</label>

                    <input 
                        value={password} 
                        onChange={handleRegisterInputs} 
                        name="password"
                        type="password" 
                        className={(validation.errors.length !==0)? 'input-error' : 'input-ok'}
                        />

                    </div>
                    {(validation.errors.length !==0)?
                    <div className={`field-container checklist mb-1 ${(validation.errors.length ===0) ? 'allok' : 'withErrors'}`}>

                    <CheckItem description="Al menos 8 caracteres" status={(validation.errors.find(error => error === 'min')) ? false : true} />
                    

                    <CheckItem description="Al menos una mayuscula" status={(validation.errors.find(error => error === 'uppercase')) ? false : true} />
                    

                    <CheckItem description="Al menos una minuscula" status={(validation.errors.find(error => error === 'lowercase')) ? false : true} />
                    

                    <CheckItem description="Al menos un numero" status={(validation.errors.find(error => error === 'digits')) ? false : true} />
                    
                </div> : null}
                
                    <div className="field-container mb-3 mt-3">
                        <input className="btn btn-submit bold col-6 offset-3" type="submit" value="Registrate"/>
                    </div>

                    <div className="register">
                    <span className="mb-2 mt-2 type-body2">¿Ya tienes una cuenta?</span>
                    <button onClick={handleSwitch} className="btn btn-secondary bold">Inicia Sesion</button>

                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default LoginPage
