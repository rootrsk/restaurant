import { Button, Fade, Slide, Tab, Tabs, TextField, Zoom } from '@material-ui/core'
import { TabPanel } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import profilePic from '../../assets/img/profile-pic.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import ProfileAddress from './ProfileAddress';
function Profile(props) {
    const [status,setStatus] = useState('profile')
    
    return (
        <div className='white'>
            <div className="profile-view">
                <div className="profile-routes">
                    <div className="profile-pic">
                        <img src={profilePic} alt='profile pic' />
                        <h1 className='profile-username'>{props.user.username}</h1>
                    </div>
                    <div className='profile_routes-route'>
                        <div className='profile-route' className={status==='profile'?'active-profile-route':''}>
                            <div onClick={()=>setStatus('profile')} style={{cursor:'pointer'}}>
                                <i class="profile-icon fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                                Profile
                            </div>
                        </div>
                        <div className='profile-route' className={status==='address'?'active-profile-route':''} >
                            <div onClick={()=>setStatus('address')} style={{cursor:'pointer'}}>
                                <i class="profile-icon fa fa-location-arrow fa-2x" aria-hidden="true"></i>
                                Address
                                
                            </div>
                        </div>
                        <div className='profile-route' className={status==='logout'?'active-profile-route':''}>  
                            <div onClick={()=>setStatus('logout')} style={{cursor:'pointer'}}>
                                <i class="profile-icon fa fa-sign-out " aria-hidden="true"></i>
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='profile-section'>
                    <Zoom direction ='up' in={status==='profile'}   >
                        
                        <ProfileDetails  {...props.user}/>
                    </Zoom>
                     <Zoom direction ='up' in={status==='address'}   >
                        <Address />
                    </Zoom>
                     <Zoom direction ='up' in={status==='logout'}   >
                        <Logout />
                    </Zoom>
                </div> */}
                <div className='profile-section'>
                    {status==='profile' && <ProfileDetails  {...props.user}/>}
                    {status==='address' && <Address {...props}/>}
                    {status==='logout' && <Logout />}
                </div>
                
            
            
                
            </div>
        </div>
    )
}

const ProfileDetails = (props) =>{
    const [username, setUsername] = useState(props.username)
    const [email, setEmail] = useState(props.email)
    const [contact, setContact] = useState(props.contact)
    const [isverified, setIsVerified] = useState(props.isverified)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')
    return(
        <div className="profile-details" >
            <h1 className='profile_details-header'>MY PROFILE</h1>
        <div className="profile-details-div">
            <TextField
                label="User Name"
                value={username}
                variant='outlined'
                className='profile-input'
                style={{margin:'40px 0px'}}
                onChange={(e)=>setUsername(e.target.value)}
            />
            
            <TextField
                label="Contact"
                value={contact}
                variant='outlined'
                className='profile-input'
                style={{margin:'40px 0px'}}
                onChange={(e)=>setContact(e.target.value)}
            />
            <TextField
                label="Email"
                value={email}
                variant='outlined'
                className='profile-input'
                style={{margin:'40px 0px'}}
                onChange={(e)=>setEmail(e.target.value)}
                disabled
            />
            <TextField
                label="Account Status"
                value={isverified}
                variant='outlined'
                // helperText="Enter name of the recipe"
                className='profile-input'
                style={{margin:'40px 0px'}}
                disabled
                // onChange={(e)=>setName(e.target.value)}
            />
            <div style={{display:'flex',justifyContent:'space-between',margin:'10px 0px'}}>
                <button className='p-btn'>
                    Verify
                </button>
                <button 
                    style={{right:'0px',position:'relative'}}
                    className='p-btn'>
                    Update
                </button>
            </div>
        </div>
    </div>
    )
}

const Logout = (props) =>{
    return(
        <div className='profile-details'>
            <h1 className='profile_details-header'>LOGOUT</h1>
            <div style={{display:'grid',placeItems:'center',height:'80%'}}>
                <div>
                    <p>Are you sure ?</p>
                   <button className='p-btn'>Logout</button> 
                </div>
                
            </div>
        </div>
    )
}
const Address = (props) =>{
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        // setAddresses(props)
        // setRecipes(props)
    });
    console.log(props)
    return (
        <div className='profile-details'>
            <h1 className='profile_details-header'>ADDRESSES</h1>
            <div >
                {
                    props.addresses.map((address)=><ProfileAddress {...address} key={address._id}/>)
                }
            </div>
        </div>
    )
}
const mapStateToProps= (state)=>{
    return state
}
export default connect(mapStateToProps) (Profile)
