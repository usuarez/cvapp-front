import React from 'react'
import Header from '../components/Header.jsx'
import TemplateList from '../components/TemplateList.jsx'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function HomePage() {
    
    const history = useHistory()
    const {auth} = useSelector(state => state)
    
    return (
        <div className="app mb-5 pb-5">
            {(!!auth._id) ?
             (!auth.address && !auth.dni && !auth.phone) ?
                    history.push('/new-profile') : null : null
                }
            <Header />
            <TemplateList />
        </div>
    )
}

export default HomePage
