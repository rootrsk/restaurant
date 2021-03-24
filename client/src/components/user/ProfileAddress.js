import React from 'react'

function ProfileAddress(props) {
    return (
        <div className='profile_addresses'>
            
            <div className="profile_addresses_details">
                <p>{props.username}</p>
                <p>{props.contact}</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',margin:'10px 0px'}}>
                <button className='p-btn'>Delete</button>
                <button className='p-btn'>Edit</button>
            </div>
        </div>
    )
}

export default ProfileAddress
