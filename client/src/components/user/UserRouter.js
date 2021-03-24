import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../templates/Header'
import Cart from './Cart'
import Profile from './Profile'

function UserRouter(props) {
    return (
        <div>
            <Switch>
                <Route path='/my/cart' component={Cart} />
                <Route path='/my/profile' component={Profile} />
            </Switch>
        </div>
    )
}

export default UserRouter
