import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Recipe from '../templates/Recipe';
import CartRecipeTemplate from '../user/CartRecipeTemplate';
const URL = 'https://mahakaal-api.herokuapp.com';
function Recipes(props) {
    const [recipes, setRecipes] = useState([])
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const [open, setOpen] = useState(false)
    const getRecipes = async () => {
        setStatus('loading...')
        const response = await axios({
            url: `${URL}/recipes`,
            method: 'GET'
        })
        if (response.data.status === 'success') {
            setRecipes(response.data.data.recipes)
            props.dispatch({
                type: 'SET_RECIPES',
                recipes: response.data.data.recipes
            })
        } else {
            getRecipes()

        }
    }
    useEffect(() => {
        getRecipes()
    }, [])
    return (
        <div>
            <h1>Recipes</h1>
            <div className='menu'>
                {
                    recipes.map((recipe)=>{
                        return <Recipe {...recipe} admin={true} key={recipe._id}/>
                    })
                }
            </div>
            
        </div>
    )
}
const mapStateToProps = (state) =>{
    return state
}
export default connect(mapStateToProps) (Recipes)
