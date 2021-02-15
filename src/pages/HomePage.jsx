import React from 'react'
import TemplateList from '../components/TemplateList.jsx'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import background from '../img/bg.jpg'
import pdfimg from '../img/illustration/pdf.svg'
import aiimg from '../img/illustration/Ai.svg'

function HomePage() {
    
    const history = useHistory()
    const {auth} = useSelector(state => state)
    const handleClick = ()=>{
        history.push('/login')
    }
    return (
        <div className="app pb-5">
            {(!!auth._id) ?
             (!auth.address && !auth.dni && !auth.phone) ?
                    history.push('/new-profile') : null : null
                }




            <header className="homeHeader fluid-container d-flex justify-content-center align-items-center" style={{backgroundImage: `url('${background}')`}}>
                <div className="homeCopy col-12 col-sm-11 col-lg-8 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="mt-0 mb-3 text-center thin">Plantillas de hojas de vida</h2>
                    <p className="col-12 col-md-9 mt-0 mb-3 text-center type-headline6 thin" >Elige una plantilla de curriculo, llenala y dale un toque de personalidad. <strong>Crea tu resumen profesional en unos pocos clicks.</strong> Solo elige la que mas te guste, descargala y obten un empleo</p>
                    <button onClick={handleClick} className=" col-4 btn btn-next bg-complementary text-dark mt-3">Registrate</button>
                </div>
                
            </header>
            <main className="fluid-container pt-5">
                <section className="row pb-5 col-10 offset-1">
                    <h3 className="text-center col-12">Plantillas Disponibles</h3>
                    <TemplateList />
                    <button onClick={handleClick} className=" col-4 offset-4 btn btn-next bg-shade type-fff text-dark mt-4">Registrate</button>
                </section>
                <section className="row align-items-center mb-5 bg-white py-5 pb-5">
                    <div className="col-12 mb-4 col-md-4 offset-md-2">
                        <h4 className="col-12">Tus datos en PDF</h4>
                        <p className="col-12">Tu hoja de vida se guarda en formato portable y nadie tendrá problemas para poder ver el documento.</p>
                        <button onClick={handleClick} className=" col-6 offset-3 ml-15 offset-md-0 btn btn-next bg-complementary text-dark mt-4">Registrate</button>
                    </div>

                    <div className="col-10 col-md-4 offset-md-0">
                        <img src={pdfimg} alt=""/>
                    </div>
                    
                </section>
                
                <section className="row align-items-center py-5 pb-5">
                    <div className="col-10 offset-1 offset-md-1 col-md-5">
                        <img src={aiimg} alt=""/>
                    </div>
                    <div className="col-12 mb-4 col-md-5 offset-md-0">
                        <h4 className="col-12">Procesamos tu foto de perfil con IA</h4>
                        <p className="col-12">Nuestra inteligencia artificial seleccionará tu rostro y recortará tu foto de perfil. No era necesario pero ahi está.</p>
                        <button onClick={handleClick} className=" col-6 offset-3 ml-15 offset-md-0 btn btn-next bg-complementary text-dark mt-4">Registrate</button>
                    </div>
                    
                </section>
            </main>
            <footer className="homeFooter mt-5">
                <p className="text-center">Desarrollado por <a href="https://suarez.netlify.app" rel="noreferrer" target="_blank" >Ubaldo Suárez</a></p>
            </footer>
        </div>
    )
}

export default HomePage
