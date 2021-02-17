import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import illustration from '../img/illustration/export.svg'

function ExportPage() {

    const auth = useSelector(state => state.auth)
    const {templateName} = useSelector(state => state.templates.pdfData) || false
    const handleClick = (e)=>{
        e.preventDefault()
        const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3009/api'
        window.open(`${baseUrl}/user/download/${auth._id}/${templateName}`)
        
        
    }
    return (
        <main className="container pb-5 min-h-100v pt-5">
            <h4 className="text-center bold">Descarga tu Resumen</h4>
            <div className="row flex-column flex-lg-row flex-nowrap align-items-center justify-content-center">
                <img className="col-10 col-sm-8 mb-3 col-md-6" src={illustration} alt=""/>
                <div className="row flex-wrap pb-5 col-lg-5 offset-lg-1 justify-content-center align-items-center">
                {(!!templateName === false) ? 
                     <button disabled className="text-center btn btn-next col-10 col-lg-12" >Aun no has seleccionado una plantilla</button> : 
                     <button onClick={handleClick} className="text-center btn btn-next col-10 col-lg-12" >Descargar Pdf</button>} 
                    
                    <p className="col-10 text-center pt-3 pb-3">¿Te faltó añadir algo?</p>
                    <Link to="/user-data" className="text-center btn btn-bordered col-10 col-lg-12">Edita datos</Link>
                    
                </div>
            </div>


        </main>
    )
}

export default ExportPage
