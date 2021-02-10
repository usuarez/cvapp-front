import React from 'react'
import { useSelector } from 'react-redux'
import illustration from '../img/illustration/export.svg'

function ExportPage() {

    const auth = useSelector(state => state.auth)
    console.log(auth)
    const handleClick = (e)=>{
        const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3009/api'
        e.preventDefault()
        window.open(`${baseUrl}/user/download/${auth.uid}`)
        
        
    }
    return (
        <main className="container pb-5 min-h-100v pt-5">
            <h4 className="text-center bold">Descarga tu Resumen</h4>
            <div className="row flex-column flex-lg-row flex-nowrap align-items-center justify-content-center">
                <img className="col-10 col-sm-8 mb-3 col-md-6" src={illustration} alt=""/>
                <div className="row flex-wrap pb-5 col-lg-5 offset-lg-1 justify-content-center align-items-center">
                {(auth.experience.length === 0 && 
                     auth.skills.length === 0 && 
                     auth.profession.length === 0 ) ? 
                     <button onClick={handleClick} disabled className="text-center btn btn-next col-10 col-lg-12" >Aun no has completado tu perfil profesional</button> : 
                     <button onClick={handleClick} className="text-center btn btn-next col-10 col-lg-12" >Descargar Pdf</button>} 
                    
                    <p className="col-10 text-center pt-3 pb-3">¿Te faltó añadir algo?</p>
                    <a href="/user-data" className="text-center btn btn-bordered col-10 col-lg-12">Edita datos</a>
                </div>
            </div>


        </main>
    )
}

export default ExportPage
