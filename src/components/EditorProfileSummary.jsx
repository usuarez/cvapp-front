import React from 'react'
import Check from '../img/icons/check.svg'
import DeleteIcon from '../img/icons/close.svg'
import moment from 'moment';
import 'moment/locale/es'
import {v4 as uuid} from 'uuid'
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteData } from '../context/actions/auth';

moment.locale('es')




function EditorProfileSummary({data, datastring}) {

    const dispatch = useDispatch()
    const {uid} = useSelector(state => state.auth)
    const handleDelete = (e) => {
        let buttonsContainer = e.target.nextElementSibling
        buttonsContainer.style.display = 'flex'
    }
    const handleCancelDelete = (e)=>{
        let buttonsContainer = e.target.parentElement
        buttonsContainer.style.display = 'none'
    }

    const handleConfirmDelete = (e)=>{
        const arrItemId = e.target.parentNode.getAttribute('data-id')

        dispatch(startDeleteData(uid, datastring, arrItemId))
    }
    
    return (
        <>
        { !!data && data.length!==0 && <div className="editor-summary-section">
        
        <ul className="mt-1 mb-4 summary-list">
            {(typeof(data) === 'string') ? <li key={uuid()} className="summary-item mb-2">
                    <img src={Check} alt="" className="icon mr-2"/>
                    <div className="content">
                        <p className="mt-0 mb-0 type-body1">{data}</p>
                    </div>
                </li> :
            data.map(item =>(
                <li key={uuid()} className="summary-item mb-2">
                    <img src={Check} alt="" className="icon mr-2"/>
                    <div className="content">
                        <p className="mb-0 mt-0 type-body1 bold">{item.title}</p>
                        <p className="mt-0 mb-0 type-body1">{item.entity || item.level}</p>
                        <span className=" mt-0 type-caption">{(datastring === 'skills')?
                         `Desde ${moment(item.from).format('MMM YYYY')}`:
                         `${moment(item.from).format('MMM YYYY')} - ${ (moment(item.to).format('MMM YYYY') === "dic. 2040") ? 'Actualidad' : moment(item.to).format('MMM YYYY')}`}</span>
                    </div>
                    <img onClick={handleDelete} src={DeleteIcon} alt="" className="icon mr-2 align-right"/>
                    <div className="confirm-delete" data-id={item._id}>
                        <button onClick={handleCancelDelete} className="btn btn-del">Cancelar</button>
                        <button onClick={handleConfirmDelete} className="btn btn-del bg-error">Eliminar</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>  }
        </>
    )
}

export default EditorProfileSummary