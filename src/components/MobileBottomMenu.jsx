import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'
import { renewToken } from '../context/actions/auth';
import moment from 'moment'

function MobileBottomMenu() {
    const dispatch = useDispatch()
    const {_id: uid} = useSelector(state => state.auth)
    
    const checkToken = ()=>{
        if(!!uid) {
            const tokenInitDate = Number(localStorage.getItem('token-init-date'))
        let now = moment(new Date().getTime()).format('DD/MM/YYYY HH:mm:ss').split(' ')
        const tokenCreationTime = moment(tokenInitDate).format('DD/MM/YYYY HH:mm:ss').split(' ')

        if (now[0] !== tokenCreationTime[0] ||
            now[1].split(':')[0] !== tokenCreationTime[1].split(':')[0] ||
            now[1].split(':')[1] - tokenCreationTime[1].split(':')[1] >= 15
            ) {
            dispatch(renewToken(uid))
        }
        }
    }

    window.onload = setTimeout(checkToken(), 10000)

    const location = useLocation();
    const currentPath = location.pathname
    console.log(currentPath)
    return (
            (currentPath.split('/')[1] === 'login' || 
            currentPath.split('/')[1] === 'register' || 
            currentPath.split('/')[1] === 'recover' || 
            currentPath.split('/')[1] === 'new-profile' ||
            
            currentPath.split('/')[1] === 'walktrought') ? <div></div> :
            <div className="mobile-bottom-menu fluid-container">
                <div className="row">
                    <div className="col-12 d-flex flex-row">

                        <NavLink
                            activeClassName="active"
                            className="nav-item"
                            exact
                            to="/"
                            >
                        <div className="nav-item-container">
                            <div className="mobile-icon home"></div>
                            <span className="type-caption bold mobile-description">Inicio</span>
                        </div>
                        </NavLink>


                        <NavLink
                            activeClassName="active"
                            className="nav-item"
                            exact
                            to="/search"
                            >
                            <div className="nav-item-container">
                            <div className="mobile-icon search"></div>
                            <span className="type-caption bold mobile-description">Buscar</span>
                            </div>
                        </NavLink>


                        <NavLink
                            activeClassName="active"
                            className="nav-item"
                            exact
                            to="/export"
                            >
                            <div className="nav-item-container">
                            <div className="mobile-icon export"></div>
                            <span className="type-caption bold mobile-description">Exportar</span>
                            </div>
                        </NavLink>


                        <NavLink
                            activeClassName="active"
                            className="nav-item"
                            exact
                            to="/profile"
                            >
                            <div className="nav-item-container">
                                <div className="mobile-icon profile"></div>
                                <span className="type-caption bold mobile-description">Perfil</span>
                            </div>
                        </NavLink>
                    </div>
                </div>

                    </div>

    )
}

export default MobileBottomMenu

