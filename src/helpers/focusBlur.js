const handleFocus = e => {
    if(!e.target.getAttribute('class', 'field-container mb-3')) {
        e.target.parentNode.children[0].style.animation = 'up .4s forwards'
        e.target.parentNode.children[1].focus()
    }

}
const handleBlur = e => {
    if(!e.target.getAttribute('class', 'field-container mb-3')) {
        if(e.target.parentNode.children[1].value === '') {
            e.target.parentNode.children[0].style.animation = 'down .4s forwards'
        } else {
            e.target.parentNode.children[0].style.animation = 'out .6s forwards'
        }
    }
}

module.exports = {handleFocus, handleBlur}