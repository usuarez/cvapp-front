import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Header() {
    const location = useLocation();
    const currentPath = location.pathname
    //console.log(currentPath);
    const headerClass = "mobile-header fluid-container"
    const minClass = "mobile-header fluid-container min-header"
    return (
        
        <header>
            <div className={`${(currentPath !== "/") ? minClass : headerClass } fluid-container`}>
                <div className="app-title d-flex flex-column justify-content-center align-items-center col-12 text-center mb-3">
                    <h5>Tu Cv con un toque</h5>
                    <p>importa tus datos y usa la plantilla que más te guste para crear tu cv</p>
                </div>
            </div>
        </header>
    )
}
