import React from 'react'
import TemplateBox from './TemplateBox'
import {v4 as uuid} from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { startGetTemplates } from '../context/actions/templates'

function TemplateList() {

    const dispatch = useDispatch()
    

    const templatesArr = []


    const handleTemplatesData = (templateList) => {
        const backendHost = process.env.REACT_APP_BACK_URL
        const bgColors = ['bg-shade','bg-complementary','bg-orange','bg-green']
        for( let template of templateList) {
            templatesArr.push({
                img: `${backendHost}/resumes/thumbs/${template}.png`,
                id: template,
                bgcolor: `${bgColors[Math.floor(Math.random()*(4-0))]}`
            })
        }
    }

    const {templateList} = useSelector(state => state.templates)
    
    window.onload =()=>{ dispatch(startGetTemplates()) }

    if(!!templateList && templateList.length !== 0) {
        handleTemplatesData(templateList)
    }

    return (
        <>
        <div className="container">
            <div className="template-list row justify-content-center">
                {templatesArr.map(template =>(
                    <TemplateBox 
                        key={uuid()}
                        img={template.img}
                        id={template.id}
                        bgcolor={template.bgcolor}
                    />

                ))}
            </div>

        </div>
        </>
    )
}

export default TemplateList
