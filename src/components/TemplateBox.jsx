import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { generateTemplate, getPdfPreview, setActiveTemplate } from '../context/actions/templates'

function TemplateBox({id, img, bgcolor}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const {_id: uid} = useSelector(state => state.auth)
    const {pdfData: actualTemplate} = useSelector(state => state.templates)

    const handleClick = (e)=>{
        e.preventDefault()

        if(!!uid === false ) {
            history.push(`/login`)
        }
        //guardar en el state los valores para regenerar el pdf despues de agregar datos
        const pdfData = {
            templateName: id,
            accentColor: "#363636",
            fonts: [
            {link: "url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;400;700&display=swap')",
             family: "'Roboto', sans-serif"}
                ]
        }

        const data = {
            uid,
            pdfData
        }

        if(!actualTemplate || actualTemplate.templateName !== id) {
            dispatch(getPdfPreview(uid, pdfData.templateName))
            dispatch(setActiveTemplate(pdfData))
            dispatch(generateTemplate(data))
        }
        setTimeout(() => {
            history.push(`/preview/${id}`)
        }, 2000);
    }


    return (
        <a onClick={handleClick} className="col-6 col-md-4 col-lg-4 col-xl-3 mt-2" href={`/preview/${id}`}>
            <div className={`template-box ${bgcolor}`}>
                <img src={img} className="template-box--img" alt="a" />
            </div>
        </a>
    )
}

export default TemplateBox
