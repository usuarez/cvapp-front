export const handleSwitch = e => {
    e.preventDefault()
    const loginForm = document.querySelector('.login-form')
    const signupForm = document.querySelector('.signup-form')
    if(signupForm.getAttribute('class').split(' ').splice(-1,1)[0] === 'activeForm') {
        signupForm.style.animation = 'in .8s forwards'
        loginForm.style.animation = 'out .4s forwards'
        loginForm.classList.toggle('activeForm')
        signupForm.classList.toggle('activeForm')
    } else if(signupForm.getAttribute('class').split(' ').splice(-1,1)[0] !== 'activeForm') {
        loginForm.style.animation = 'in .8s forwards'
        signupForm.style.animation = 'out .4s forwards'
        loginForm.classList.toggle('activeForm')
        signupForm.classList.toggle('activeForm')
    }
    
}