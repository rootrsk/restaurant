import { createStore, combineReducers } from 'redux'

const userInitialState = {
   isAuthenticated : false,
   type: 'Guest',
}

const userReducer = (state = userInitialState,action) =>{
    switch (action.type) {
        case 'SET_USER':
            return action.user 
            break;
        case 'GET_USER' : 
            return state
            break
        default:
            return state;
            break;
    }
}
const addressReducer = (state =[],action) =>{
    switch (action.type) {
        case 'SET_ADDRESS':
            return action.addresses
            break;
    
        default:
            return state
            break;
    }
}
const cartReducer = (state=[],action)=>{
    switch (action.type) {
        case 'SET_CART':
            return action.cart
            break;
    
        default:
            return state;
            break;
    }
}

const recipeReducer = (state=[],action)=>{
    switch (action.type) {
        case 'SET_RECIPES':
            return action.recipes
            break;
        default:
            return state;
            break;
    }
}
const filterInitialState = {
    text:'',
    category:'',
    price:''
}
const filterReducer = (state,action)=>{
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return action.text
            break;
    
        default:
            break;
    }
}

const store = createStore(
    combineReducers({
        user: userReducer,
        cart: cartReducer,
        recipes: recipeReducer,
        addresses: addressReducer
    })
)


export default store