import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdate } from '../context/actions/auth'


function UserDataAddButton({name, title, place}) {
    const handleToggle = (e) => {
        let parentContainer = ''
        if(e.target.getAttribute('class').includes('type-body1') ||
           e.target.getAttribute('class').includes('btn-plus')) {
            parentContainer = e.target.parentNode
        }
        else if(e.target.getAttribute('class').includes('p-rotate')) {
            parentContainer = e.target.parentNode.parentNode
        }
        else if (e.target.getAttribute('class').includes('userdata-add-top')) {
            parentContainer = e.target
        }

        parentContainer.children[1].classList.toggle('plus-to-close')
        parentContainer.children[1].children[0].classList.toggle('p-to-close')
        parentContainer.parentNode.classList.toggle('minify')

    }
    const [data, setData] = useState({})
    const dispatch = useDispatch()
    const {uid} = useSelector(state => state.auth)
    const handleSubmit = e => {
        e.preventDefault()
        let {title, entity, from, to, level, about} = data
        if(!!to === false) {to = '2040-12-31'}
        console.log(to)
        if(name === 'Educación') dispatch(startUpdate(uid,{profession:{title, entity, from, to}}))
        if(name === 'Experiencia') dispatch(startUpdate(uid,{experience:{title, entity, from, to}}))
        if(name === 'Habilidades') dispatch(startUpdate(uid,{skill:{title, level, from}}))
        if(name === 'Cursos') dispatch(startUpdate(uid,{certification:{title, entity, from, to}}))
        if(name === 'About') dispatch(startUpdate(uid,{about}))
    }


    const handleChange = e => {
        e.preventDefault()
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        
    }
    return (
        <div className="row userdata-add userdata-add-container minify">

        <div onClick={handleToggle} className="userdata-add-top col-12 mb-1">
            <span className="type-body1 bold">Agregar</span>
            <div className="plus btn btn-plus type-headline5">
                <p className="p-rotate">+</p></div>
        </div>
        <form onSubmit={handleSubmit} className="userdata-add-top form col-12 pb-3">
            {(name === 'About') ? <input onChange={handleChange} type="text" placeholder={title} name="about" className="mb-3" /> : 
            <>
            <input onChange={handleChange} type="text" placeholder={title} name="title" className="mb-3" />
            {
                (name === 'Habilidades') ? <select onChange={handleChange} name="level" className="mb-3 col-12">
                    <option value="">Nivel</option>
                    <option value="Basico">Basico</option>
                    <option value="Intermedio" >Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                    <option value="Profesional">Profesional</option>
                    <option value="Experto">Experto</option>
                </select> :
            <input onChange={handleChange} type="text" placeholder={place} name="entity" className="mb-3" />
            }
            <div className="fromto fluid-container mb-3">
                <span className="col-4 pl-3 ">Desde</span>
                <input onChange={handleChange} className="col-8" type="date" name="from" />
            </div>
            {(name === 'Habilidades') ? null : <div className="fromto fluid-container mb-3">
                <span className="col-4 pl-3">Hasta</span>
                <input onChange={handleChange} className="col-8" type="date" name="to" />
            </div> }
            </>}

            <button type="submit" className="btn btn-next">Guardar</button>

        </form>
        </div>
    )
}

export default UserDataAddButton
