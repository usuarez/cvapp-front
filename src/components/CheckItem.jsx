import React from 'react'
import ErrorIcon from '../img/icons/error.svg'
import CheckIcon from '../img/icons/check.svg'
function CheckItem({description, status}) {
    return (
        <div className={`check-item ${ (!status) ? 'error' : 'ok' }`}>
                <img src={(!status) ? ErrorIcon : CheckIcon } alt=""/>
            <span className="bold">
                {description}
            </span>
        </div>
    )
}

export default CheckItem
