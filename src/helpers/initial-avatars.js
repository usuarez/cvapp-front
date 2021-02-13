import React from 'react';

const Avatar = (userName, options) => {
    //react verion
    const initial = userName.split('')[0].toUpperCase()
    return  (
        <div class="initialAvatar">
            <p class="avatarText">{initial}</p>
        </div>
        )
    
}
export default  Avatar