import React from 'react'
import RecipeForm from './RecipeForm'

function UpdateRecipe(props) {
    console.log(props)
    return (
        <div>
            <h1>Update</h1>
            <RecipeForm {...props.location.state}/>
        </div>
    )
}

export default UpdateRecipe
