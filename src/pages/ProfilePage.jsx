import React from 'react'
import skillsIcon from '../img/icons/skills.svg'
import jobsIcon from '../img/icons/jobs.svg'
import degreesIcon from '../img/icons/degrees.svg'
import certificationIcon from '../img/icons/certification.svg'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../context/actions/auth'
import Avatar from '../helpers/initial-avatars'
import { Link } from 'react-router-dom'


function ProfilePage() {
    const {name, email, profession, skills, experience, certifications, img} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleLogout = ()=> {dispatch(startLogout())}




    return (
        <main className="container">
                <h4 className="text-center pt-4">Mi Perfil</h4>
            <div className="row pt-4">
                <section className="user-block col-12 mt-5 pb-5">
                    <header className="user-block--header text-center">
                        <div className="photo-container col-12 d-flex justify-content-center">
                            <div className="user-block--header--photo">
                                {(!!img) ? <img src={img} alt="profile"/> : Avatar(name)}
                                
                            </div>

                        </div>
                        <div className="header--data pt-5 mb-3">
                            <h5 className="regular mt-3">{name}</h5>
                            <p className="thin">{email}</p>
                        </div>
                    </header>
                    <div className="profesional-profile col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 pt-3">
                        {(!!profession[0]) ? <h6 className="text-center pt-2 pb-3">Estudió {profession[0].title} en la {profession[0].entity}</h6> : null}
                        <div className="col-12 profesional-profile--counters d-flex justify-content-around pb-3">
                            <div className="profesional-counter">
                                <div className="professional-counter--img">
                                <img src={skillsIcon} alt=""/>
                                </div>
                                <p className="type-caption">{skills.length} Habilidades</p>
                            </div>
                            <div className="profesional-counter">
                                <div className="professional-counter--img">
                                <img src={jobsIcon} alt=""/>
                                </div>
                                <p className="type-caption">{experience.length} Empleos </p>
                            </div>
                            <div className="profesional-counter">
                                <div className="professional-counter--img">
                                <img src={degreesIcon} alt=""/>
                                </div>
                                <p className="type-caption">{profession.length} Egresos</p>
                            </div>
                            <div className="profesional-counter">
                                <div className="professional-counter--img">
                                <img src={certificationIcon} alt=""/>
                                </div>
                                <p className="type-caption">{certifications.length} Cursos</p>
                            </div>
                        </div>
                    </div>
                    <div className="general-settings d-flex flex-column mt-4 pb-5 col-12 col-lg-6 offset-lg-3">
                        <h6 className="text-center mb-3">Ajustes Generales</h6>
                        
                        <Link to="/new-profile" className=" col-10 offset-1 general-setting-option">Actualizar datos de contacto</Link>
                        <Link to="/" className=" col-10 offset-1 general-setting-option">Cambiar contraseña</Link>
                        <Link to="/new-profile" className=" col-10 offset-1 general-setting-option">Cambiar Foto de perfil</Link>
                        <span onClick={handleLogout} className=" col-10 offset-1 general-setting-option">Cerrar sesion</span>
                        
                    </div>
                </section>
            </div>
        </main>

    )
}

export default ProfilePage
