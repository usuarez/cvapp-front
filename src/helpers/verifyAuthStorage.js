import moment from 'moment';
import 'moment/locale/es'

export const verifyAuthStorage = () => {
    
    let token = localStorage.getItem('token'),
        tokenCreationDate = moment(Number(localStorage.getItem('token-init-date'))).format('DD MM YYYY, HH:mm:ss').split(' '),
        actualDate = moment(new Date().getTime()).format('DD MM YYYY, HH:mm:ss').split(' ')

    if (!!token === false) return false

    //check if is the same day
    if (actualDate[0] === tokenCreationDate[0] && 
        actualDate[1] === tokenCreationDate[1] && 
        actualDate[2] === tokenCreationDate[2]) {
        let actualHour = actualDate[3].split(':')[0],
            tokenHour = tokenCreationDate[3].split(':')[0]
            //token expires in 8 hours
        if (actualHour - tokenHour >= 8) {
            return false
        } else {
            return true
        }
    }
}