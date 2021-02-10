import React from 'react'
import Back from '../img/icons/left.svg'
import { useHistory } from "react-router-dom";

export default function PreviewHeader() {
    let history = useHistory();
    
    return (
        <header className="preview-header">
            <div onClick={() => history.goBack()} className=" btn-next fluid-container pt-3 pb-3 mb-3">
                <img  src={Back} className="back-btn" alt=""/>
                <p className="mt-0 mb-0 pb-0 pt-0">Atrás</p>
            </div>
        </header>
    )
}
