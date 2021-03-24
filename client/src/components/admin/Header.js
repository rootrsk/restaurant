import { Paper, Slide } from '@material-ui/core'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header(props) {
    const [open,setOpen] = useState(false)
    const openHandler = () =>{
        setOpen(!open)
    }
    return (
        <div>
            <div  className='homepage_nav'>
                <div className="nav_logo">
                    <h1>MAHAKAAL</h1>
                </div>
                
                 <button className='p-btn' onClick={()=>setOpen(!open)}>{open?<CloseIcon />:<MenuIcon />}</button>
            </div>
            <div style={{zIndex:10}}>
                <Slide direction="left" in={open} mountOnEnter unmountOnExit timeout={{enter:700,exit:700}} >
                    <div>
                            <Routes open={openHandler}/>
                    </div>
                    
                </Slide>
            </div>
           

            {/* <Slide in={true}> */}
                {/* <Routes /> */}
            {/* </Slide> */}
        </div>
    )
}


const Routes =(props) =>{
    return(
        <div className='admin-routes'>
            <NavLink onClick={props.open} className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'><span className='route-text'>Home</span></NavLink>
            <NavLink onClick={props.open} className='admin-routes-link' activeClassName='admin-active-routes-link' to='/admin/recipes'><span className='route-text'>Recipes</span></NavLink>
            <NavLink onClick={props.open} className='admin-routes-link' activeClassName='admin-active-routes-link' to='/admin/recipe/create'><span className='route-text'>Create Recipes</span></NavLink>
            <NavLink className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'>Create Employ</NavLink>
            <NavLink className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'>Employs</NavLink>
            <NavLink className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'>Offers</NavLink>
            <NavLink className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'>Create Offers</NavLink>
            <NavLink className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'>Delivery Boys</NavLink>
            <NavLink className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'>Create Delivery Boy</NavLink>
            <NavLink className='admin-routes-link' activeClassName='admin-active-routes-link' to='/'>Orders</NavLink>
        </div>
    )
}
export default Header
