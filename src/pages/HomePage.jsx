import React, { useEffect } from 'react'
import Header from '../components/Header.jsx'
import TemplateList from '../components/TemplateList.jsx'
import { startGetUserData } from '../context/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { verifyAuthStorage } from '../helpers/verifyAuthStorage.js';
import { startGetTemplates } from '../context/actions/templates.js';
import { useHistory } from 'react-router-dom';

function HomePage() {
    
    const history = useHistory()
    
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()
    
        useEffect(() => {
            if(verifyAuthStorage()) {
                if(auth.hasOwnProperty('uid')) {
                    dispatch(startGetUserData(auth.uid))
                }
            }
            dispatch(startGetTemplates())
        }, [])
    return (
        <div className="app mb-5 pb-5">
            {
            (!!auth.dni === false && !!auth.phone === false && !!auth.address === false) && history.push('/new-profile')
            }
            <Header />
            <TemplateList />
        </div>
    )
}

export default HomePage
