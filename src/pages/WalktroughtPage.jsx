import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import walkA from '../img/illustration/walk1.svg'
import walkB from '../img/illustration/walk2.svg'
import walkC from '../img/illustration/walk3.svg'

export default function WalktroughtPage() {
    const steps = [
        {
            helpCopy: 'Asi de facil es crear tu resumen',
            image: walkA,
            title: 'Selecciona la plantilla',
            description: 'Puedes elegir entre mas de 20 plantillas, elige tu favorita.'
        },
        {
            helpCopy: '¡Puedes darle un toque!',
            image: walkB,
            title: 'Edita las preferencias',
            description: 'Selecciona tu color favorito o la tipografia que mas te guste.'
        },
        {
            helpCopy: 'Ahora ya puedes postular',
            image: walkC,
            title: 'Guarda tu resumen',
            description: 'Descarga tu cv en formato pdf listo para compartir.'
        }
    ]
    
    const [actual, setActual] = useState(0)
    const [step, setStep] = useState(steps[actual])
    const [endBtn, setEndBtn] = useState(false)
    
    const handleClick = () => {
        let pointers = Array.from(document.querySelectorAll('.point'))
        if(actual === 2) {
            return false
        }
        else {
            setActual(actual+1)
            
            if(actual+1 === 2) {
                setEndBtn(true)
            }
            pointers.forEach(point => {
                point.classList.remove('active')
                pointers[actual+1].classList.add('active')
            })
        }
        setStep(steps[actual+1])
        
    }
    

    const {auth} = useSelector(state => state)
    
    return (
        <>
        {(auth.certifications.length !== 0 && auth.experience.length !== 0 && auth.skills.length !== 0) && <Redirect to="/" />}
        <div className="walktrought container">
            <div className="col-10 offset-1"></div>
            <h5 className="regular mt-1">{step.helpCopy}</h5>
            <div className="walk-img mt-2">
                <img className="col-10 col-sm-8 col-md-6 col-lg-4" src={step.image} alt="" />
            </div>
            <div className="step-points mt-3">
                <div className="point active"></div>
                <div className="point"></div>
                <div className="point"></div>
            </div>
            <div className="step-description">
                <h6 className="mb-2 mt-4">{step.title}</h6>
                <p className="mt-1">{step.description}</p>
            </div> 
            {(!endBtn) ? <button onClick={handleClick} className="btn mt-4 col-12 col-md-6 col-lg-4">Siguiente</button> : <Link to="/" className="btn mt-4 col-12 col-md-6 col-lg-4">Finalizar</Link>}
        </div>
        </>
    )
}
