import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <div className='homepage_nav'>
            <div className="nav_logo">
                <h1>MAHAKAAL</h1>
            </div>
            <div className="nav_menus">
                <li className="nav_menu-items">
                    <NavLink to='/' activeClassName='active-menu-item' exact>Home</NavLink>
                </li>
                <li className="nav_menu-items">
                    <NavLink to='/menu' activeClassName='active-menu-item'>Menu</NavLink>
                </li>
                <li className="nav_menu-items">
                    <NavLink to='/offers' activeClassName='active-menu-item'>Offers</NavLink>
                </li>
                <li className="nav_menu-items">
                    
                    {props.user.isAuthenticated ? 
                        <Link to='/my/cart' >
                            
                            <a href="#" className="notification">
                                <i style={{fontSize: '30px'}} className="fa fa-shopping-cart"></i>
                                <span class="badge">{props.cart.length}</span>
                            </a>
                        
                        </Link>:
                        <NavLink to='/login' activeClassName='active-menu-item'>Login</NavLink>} 
                    
                </li>
                <li className="nav_menu-items">
                    
                    {props.user.isAuthenticated &&
                        <Link to='/my/profile' >
                            
                            <a href="#" class="notification">
                                <i style={{fontSize: '30px'}} className="fa fa-cog"></i>
                            </a>
                        
                        </Link>
                    }
                </li>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return state
}

export default connect(mapStateToProps) (Header)
