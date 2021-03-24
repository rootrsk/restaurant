import React from 'react'
import '../../css/loader.css'
function CircularLoader(props) {
    return (
        <div className='loader'
            style={{fontSize:props.margin?props.margin:'3px'}}>
            Loading...
        </div>
    )
}

export default CircularLoader
