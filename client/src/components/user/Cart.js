import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddressTemplate from './AddressTemplate'
import CartRecipeTemplate from './CartRecipeTemplate'
const URL = 'https://mahakaal-api.herokuapp.com'
function Cart(props) {
    const [error,setError] = useState('')
    let address = null;
    const order = {

    }
    const addressHandler = (_id) =>{
        address = _id
    }
    const cartHandler = (id,count) =>{
        console.log(id,count)
        order[id] = count
        console.log(order)
        
    }
    const orderHandler = async()=>{
        if(props.cart.length <=0){
            setError('Your Cart is Empty')
            return 
        }
        const response = await axios({
            url: 'http://vivek-c21aee1e.localhost.run/order',
            method: 'POST',
            data:{
                recieps:{...order},
                user_id:props.user._id,
                address_id: address
            }
        })
        console.log(response)

    }
    
    const removeRecipe = async(id) =>{
        const response = await axios({
            url: `${URL}/cart/remove`,
            method: 'POST',
            data: {
                user_id: props.user._id,
                recipe_id: id
            }
        })
        props.dispatch({
            type: 'SET_CART',
            cart: response.data.cart

        })
        console.log(response.data)
    }
    useEffect(() => {
        // document.querySelector('.cart_recipes').addEventListener('mousewheel', (x, y) => {
        //     console.log(x, y)
            
        //     console.log(document.querySelector('.cart_recipe-template'))
        //     document.querySelectorAll('.cart_recipe-template').scrollLeft = -30
        // })
    })
    
    return (
        <div className='carts'>
            <div className="cart-flex">
                <div className='cart_res'>
                    <h1 style={{margin:'0px 30px'}}>Cart</h1>
                    <div className="cart_recipes">
                        {
                            props.cart.map((recipe)=>{
                                return <CartRecipeTemplate {...recipe} remove={removeRecipe} order={cartHandler} key={recipe._id} />
                            })
                        }
                    </div>
                    <div style={{width:'150px',margin:'auto'}}>
                        <button className='p-btn' onClick={orderHandler}> Order Now</button>
                    </div>
                    <div className='cart_recipes'>
                        Offers
                    </div>
                </div>
                <div>
                    <h1>Addresses</h1>
                    <div className="cart_address">
                        {
                            props.addresses.map((address,index)=>{
                                return <AddressTemplate {...address} index={index+1} address={addressHandler} />
                            })
                        }
                </div>
                </div>
                
                
            </div>
            <div>

            </div>

            
            
            
            
            
            {error}
            
        </div>
    )
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps) (Cart)
