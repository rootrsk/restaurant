import React from 'react'

function AddressTemplate(props) {
    return (
        <div className='address'>
            <div className='radio'>
                <input type="radio" name='address'  onClick={()=>props.address(props._id)}/>
            </div>
            
            <div className="address-details">
                <p>{props.username}</p>
                <p>{props.contact}</p>
                <p>{props.landmark}</p>
                <p>{props.full_address}</p>
            
            </div>
        </div>
    )
}

export default AddressTemplate
