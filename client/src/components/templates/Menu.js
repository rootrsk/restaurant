import { Fade, Slide, Zoom } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Auth from './Auth'
import CircularLoader from './CircularLoader'
import Footer from './Footer'
import Header from './Header'
import Model from './Model'
import Recipe from './Recipe'
import RecipesLoader from './RecipesLoader'
const URL = 'https://mahakaal-api.herokuapp.com'
function Menu(props) {
    const [recipes, setRecipes] = useState([])
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const [open,setOpen] = useState(false)
    const [loading,setLoading] = useState(false)
    const isAuthenticated = () =>{
        if(props.user.isAuthenticated){
            return true
        } else{
            setOpen(true)
        }
    }
    
    const getRecipes = async () => {
        setStatus('loading...')
        setLoading(true)
        const response = await axios({
            url: `${URL}/recipes`,
            method: 'GET'
        })
        if(response.data.status==='success'){
            setRecipes(response.data.data.recipes)
            setLoading(false)
            props.dispatch({
                type:'SET_RECIPES',
                recipes: response.data.data.recipes
            })
        } else{
            getRecipes()
        }
    }
    
    const openHadler = (status) =>{
        setOpen(status)
    }
    useEffect(() => {
        if(props.recipes.length === 0){
            getRecipes()
        } else{
            setRecipes(props.recipes)
        }
        
    },[props]);
    return (
        <>
            <CircularLoader />
            
            <div >
                <Zoom in={open}
                    timeout={{enter:500,exit:500}}
                >
                    <div style={{
                            position:'absolute',
                            top:'0px',
                            width:'100%',
                        }}
                    >
                        <Auth open={true} openHadler={openHadler}/>
                    </div>
                    
                </Zoom>
                
            </div>
            {loading && <RecipesLoader />}
            
            <div className='menu'>
                {
                    recipes.map((recipe)=>{
                        return <Recipe {...recipe} key={recipe._id} open={openHadler} />
                    })
                }
            </div>
            {/* <Model close={false} open={true}/> */}
            <Footer />
        </>
        
    )
}

const mapStateToProps = (state) =>{
    return state
} 

export default connect(mapStateToProps)(Menu)
