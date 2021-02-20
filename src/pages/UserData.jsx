import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EditorProfileSummary from '../components/EditorProfileSummary'
import PreviewHeader from '../components/PreviewHeader'
import UserDataAddButton from '../components/UserDataAddButton'
import { generateTemplate, setActiveTemplate } from '../context/actions/templates'

export default function UserData() {
    const { _id: uid } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const {about, profession, experience, skills, certifications} = useSelector(state => state.auth)
    const {pdfData} = useSelector(state => state.templates)
    const handleClick = (e) => {
        e.preventDefault()
        const data = {
            uid,
            pdfData
        }
        dispatch(setActiveTemplate(pdfData))
        dispatch(generateTemplate(data))
        setTimeout(() => {window.location.href=`/preview/${pdfData.templateName}`}, 2000);
    }

    return (
        <>
            <PreviewHeader />
            <div className="container py-5">
                
                <div className="row fluid-bg">
                    <h5 className="col-12 text-center mt-3 mb-3">Mi perfil</h5>
                    <div className="col-10 offset-1 summary-editor mt-3">
                        <h6 className="mt-3 mb-1">Sobre mi</h6>
                        <EditorProfileSummary title="About" data={about} datastring="about" />
                        <UserDataAddButton name="About" title="Descripcion corta sobre ti"  />
                    </div>
                    <div className="col-10 offset-1 summary-editor mt-3">
                        <h6 className="mt-3 mb-1">Educación</h6>
                        <EditorProfileSummary title="Educación" data={profession} datastring="profession" />
                        <UserDataAddButton name="Educación" title="Titulo" place="Universidad"  />
                    </div>
                    <div className="col-10 offset-1 summary-editor mt-3">
                    <h6 className="mt-3 mb-1">Experiencia</h6>
                        <EditorProfileSummary title="Experiencia" data={experience} datastring="experience" />
                        <UserDataAddButton name="Experiencia" title="Puesto" place="Empresa" />
                    </div>
                    <div className="col-10 offset-1 summary-editor mt-3">
                    <h6 className="mt-3 mb-1">Habilidades</h6>
                        <EditorProfileSummary title="Habilidades" data={skills} datastring="skills" />
                        <UserDataAddButton name="Habilidades" title="Habilidad" />
                    </div>
                    <div className="col-10 offset-1 summary-editor mt-3">
                    <h6 className="mt-3 mb-1">Cursos</h6>
                        <EditorProfileSummary title="Cursos" data={certifications} datastring="certifications" />
                        <UserDataAddButton name="Cursos" title="Titulo" place="Instituto" />
                    </div>
                </div>
                <div className="row mt-4 pb-5">
                    
                    <Link to={`/preview/${pdfData.templateName}`} onClick={handleClick} className="btn btn-next col-8 offset-2 text-center">Previsualizar Cv</Link>
                </div>
            </div>
        
        </>
    )
}
