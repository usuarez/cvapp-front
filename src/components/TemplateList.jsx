import React, {useEffect} from 'react'
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
        const getRandom = ()=>{
            let random = Math.floor(Math.random()*(100-1))
            if(random <= 25) return 0
            if(random > 25 && random <= 50) return 1
            if(random > 50 && random <= 75) return 2
            if(random > 75 && random <= 100) return 3
            
        }
        for( let template of templateList) {
            templatesArr.push({
                img: `${backendHost}/resumes/thumbs/${template}.png`,
                id: template,
                bgcolor: `${bgColors[getRandom()]}`
            })
        }
    }

    const {templateList} = useSelector(state => state.templates)
    
    useEffect(() => {
        dispatch(startGetTemplates())
    }, [])

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
