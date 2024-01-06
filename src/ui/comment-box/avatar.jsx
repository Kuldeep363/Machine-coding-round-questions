import React from 'react'

const Avatar = ({ name,bkgColor="#dedede" }) => {
    return (
        <div className='user-avatar' style={{backgroundColor:bkgColor}}>
            {
                name[0].toUpperCase()
            }
        </div>
    )
}

export default Avatar