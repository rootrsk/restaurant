import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Auth from './Auth';
import CircularLoader from './CircularLoader';
import Modal from '@material-ui/core/Modal';
// import vegImg from '../../assets/img/veg.png'
const vegImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png'
const nonVegImg = 'https://www.vhv.rs/dpng/d/437-4370761_non-veg-icon-non-veg-logo-png-transparent.png'
const URL = 'https://mahakaal-api.herokuapp.com'
function Recipe(props) {
    const [name] = useState(props.name);
    const [category] = useState(props.category)
    const [id] = useState(props._id)
    const [time] = useState(props.cooking_time)
    const [rating] = useState(props.rating)
    const [veg]  = useState(props.veg)
    const [price] = useState(props.price)
    const [image] = useState(props.image)
    const [loading,setloading] = useState(false)
    const [isAdded,setIsAdded] = useState(false)
    const history = useHistory()
    const add_to_cart = async(e) =>{
        console.log(props.cart)
        if(!props.user.isAuthenticated){
            return props.open(true)
        }
        if(props.cart.includes(id.toString())){
            if(isAdded){
                return console.log('This is alrady in cart')
            }
            
        }
        const data = e.target.innerHTML === 'Add' ? {
            url: `${URL}/cart`,
            method: 'POST',
            data: {
                user_id: props.user._id,
                recipe_id: id
            }
        }: {
            url: `${URL}/cart/remove`,
            method: 'POST',
            data: {
                user_id: props.user._id,
                recipe_id: id
            }
        }
        
        try {
            setloading(true)
            const response = await axios(data)
            setloading(false)
            setIsAdded(!isAdded)
            props.dispatch({
                type: 'SET_CART',
                cart: response.data.cart

            })
        } catch (e) {
            setloading(false)
            console.log(e)
        }
        
        console.log(`${name} is added to cart`)
    }
    useEffect(() => {
        if(props.cart.length>0){
            props.cart.forEach((recipe)=>{
                if(recipe._id === id) {
                    setIsAdded(true)
                }
            })
        } 
    },[props.cart]);
    
    return (
        <div className='recipe-template'>
            <div style={{}}>
            </div>
            <div className="recipe-img">
                <img 
                    src={image} 
                    alt='recipe'
                />
            </div>
            <div className="recipe_details">
                <div className="recipe_details-row1">
                    <li>☆ {rating} </li>
                    <li>{time} Mins</li>
                    <li>₹ {price}</li>
                </div>
                <div className="recipe_details-row2">
                    <div className="t2 bold">
                        <img src={veg?vegImg:nonVegImg} style={{width:'20px',height:'20px',marginRight:'3px'}} alt='veg/non-veg' />   
                         {name}
                    </div>
                    <div className="t6">{category} </div>
                </div>
                {!props.admin &&<div className="recipe_details-row3">
                    <button className="p-btn bold">View</button>
                    <button className="p-btn" onClick={(e)=>add_to_cart(e)}>
                        {loading ? <CircularLoader />:  isAdded ?'Remove': 'Add'}
                    </button>
                </div>}
                {
                    props.admin && 
                    <div className='center-div'>
                        <button className="p-btn bold"
                            onClick={()=>history.push({
                                pathname:'/admin/recipe/update',
                                state:{
                                    name,
                                    _id:id,
                                    category,
                                    cooking_time: time,
                                    veg,
                                    image,
                                    category,
                                    price,
                                    rating
                                }
                            })}
                        >View</button>
                    </div>
                } 
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return state
}

export default connect(mapStateToProps) (Recipe)
