import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CircularLoader from './CircularLoader'
const URL = 'https://mahakaal-api.herokuapp.com/user/5ff1fde7b232e102d89b8e85'
function Auth(props) {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [open,setOpen] = useState(true)
    const openHadler = (status) =>{
        setOpen(status)
    }
    const loginHandler = async() =>{
        console.log('Logging in...')
        setLoading(true)
        const response = await axios({
            url:URL,
            method: 'GET'
        })
        setLoading(false)
        props.dispatch({
            type:'SET_USER',
            user:{
                isAuthenticated: true,
                _id: response.data._id,
                username:response.data.name,
                email: response.data.email,
                contact: response.data.contact,
                isverified: response.data.isverified
            }
        })
        if(props.open){
            props.openHadler(false)
        } else{
            props.history.push('/menu')
        }
        
        props.dispatch({
            type:'SET_CART',
            cart: response.data.cart
        })
        props.dispatch({
            type: 'SET_ADDRESS',
            addresses: response.data.address
        })
        console.log(response.data)
    }
    useEffect(()=>{
        
    },[])
    return (
        <div>
            
            
            <div className="form_div">
                {
                    props.open && 
                    <button className='' 
                        onClick={()=>props.openHadler(false)}
                        style={{position:'absolute',padding:'10px',background:'transparent',color:'white'}}>
                        Close
                    </button>
                }
                <div className="auth_form-header">
                    {/* <button className='p-btn round' id='signup'>SignUp</button> */}
                    <button className='p-btn round' style={{width:'100%'}}>Admin Login</button>
                </div>
                <div className="form_container">
                    <div className="signup_form auth_form" id='container'>        
                        {/* <input 
                            className='auth-input'
                            value={username}
                            type='text' 
                            name='username'
                            placeholder='Full Name'
                            required
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            value={email}
                            type='email' 
                            name='email'
                            placeholder='Email'
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            value={contact}
                            type='number' 
                            name='contact'
                            placeholder='Contact '
                            required
                            onChange={(e)=>setContact(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            value={password}
                            type='text' 
                            name='password'
                            placeholder='Password'
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <button className='glow p-btn round ' >Sign Up</button> */}
                    </div>

                    <div className="auth_form login_form " id='container2' >
                        <input 
                            className='auth-input'
                            type='email' 
                            name='email'
                            placeholder='Email'
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input 
                            className='auth-input'
                            type='text' 
                            name='password'
                            placeholder='Password'
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <Link to='/password-reset?admin'>Forget Password ?</Link>
                        <button className='p-btn round glow' onClick={loginHandler}>
                            {loading?<CircularLoader />:'Login'}
                        </button>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}
const mapStateToProps = (state) =>{
    return state
}

export default connect(mapStateToProps)(Auth) 
