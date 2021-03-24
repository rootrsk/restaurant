import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateRecipe from './CreateRecipe'
import Header from './Header'
import Recipes from './Recipes'
import UpdateRecipe from './UpdateRecipe'

function AdminRouter() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/admin/recipe/create' component={CreateRecipe} />
                <Route path='/admin/recipe/update' component={UpdateRecipe} />
                <Route path='/admin/recipes' component={Recipes} />
            </Switch>
        </div>
    )
}

export default AdminRouter
