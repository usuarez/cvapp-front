import React from 'react'
import iconColor from '../img/icons/color.svg'
import iconResume from '../img/icons/resume.svg'
import iconFont from '../img/icons/font.svg'
import iconPattern from '../img/icons/pattern.svg'
import EditorColor from './EditorColor'

export default function PreviewButtonFn({icon}) {
    let iconbtn = '',
        description = ''
    switch (icon) {
        case "color":
            iconbtn = iconColor
            description = 'Color'
            break;
            case "resume":
                iconbtn = iconResume
                description = 'Plantilla'
            break;
            case "font":
            iconbtn = iconFont
            description = 'Fuente'
            break;
            case "pattern":
            iconbtn = iconPattern
            description = 'Patron'
            break;
        default:
            break;
    }
    return (
        <div className="preview-fn-button active">
            <div className="d-flex flex-column">
                <img src={iconbtn} alt={`${icon} icon`} />
                <span className="type-overline mt-1">{description}</span>
            </div>
            { icon==='color' && <EditorColor /> }
        </div>
    )
}
