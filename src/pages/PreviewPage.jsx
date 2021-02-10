import React  from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PreviewHeader from '../components/PreviewHeader'
import PDFViewer from 'pdf-viewer-reactjs'
import 'bulma-helpers/css/bulma-helpers.min.css'
function PreviewPage() {
    const backendHost = process.env.REACT_APP_BACK_URL
    const {uid}  = useSelector(state => state.auth)
    const {experience, profession, skills}  = useSelector(state => state.auth)
    let pdfUri = `${backendHost}/resumes/${uid}.pdf`

    return (
        <>
            {(!uid) ? <Redirect to="/login" /> : <>
                {(!!experience && !!profession && !!skills && experience.length < 1 && profession.length < 1 && skills.length < 1) && <Redirect to="/user-data" /> }
                
                <PreviewHeader />
                <div className="container pt-5 pb-5 d-lg-flex">
                    <div className="order-lg-2 col-lg-7">
                        <div className="col-12">
                            <PDFViewer
                                document={ {url: pdfUri,} }
                                scale={1}
                                hideZoom={true}
                                canvasCss='pdfPage'
                                hideRotation={true}
                                css='controlpdf'
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-column col-lg-5 pb-5 justify-content-start align-items-center">
                        {/* in development functions
                        <div className="col-10 offset-1 preview-fn-buttons mt-3">
                            <PreviewButtonFn icon="color" />
                            <PreviewButtonFn icon="resume" />
                            <PreviewButtonFn icon="font" />
                            <PreviewButtonFn icon="pattern" />

                            <div className="active-fn">
                            </div>
                        </div>
                            */}


                        <a href="/user-data" className="col-10 mt-4 text-center btn btn-next">Editar mi perfil</a>
                        <span className="max-h-36 mt-4 col-12 type-body2 text-center">¿Todo listo?</span>
                        <a href="/export" className="col-10 mt-4 mt-lg-2 text-center btn btn-next">Descargar</a>
                        
                    </div>
                </div>
            
            </> }
        </>

    )
}

export default PreviewPage
