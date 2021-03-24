import { Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
const URL = 'https://mahakaal-api.herokuapp.com'

function RecipeForm(props) {
    const [name, setName] = useState(props.name);
    const [category, setCategory] = useState(props.category)
    const [id, setId] = useState(props._id)
    const [cooking_time, setTime] = useState(props.cooking_time)
    const [rating, setRating] = useState(props.rating)
    const [veg, setVeg] = useState(props.veg)
    const [price, setPrice] = useState(props.price)
	const [image, setImage] = useState(props.image)
	const [description,setDiscription] = useState(props.description)
	const [quantity,setQuantity] = useState(props.quantity)
	const [error,setError] = useState('')
	const [status,setStatus] = useState('')
	const history = useHistory()
	console.log(rating)
	const ratings = [1, 2, 3, 4, 5]
	const categories = [
		{
			value:'Breakfast',
			label:'Break Fast'
		},
		{
			value: 'Fastfood',
			label: 'Fast Food'
		},
		{
			value: 'Fastfood',
			label: 'Fast Food'
		},
		{
			value: 'Fastfood',
			label: 'Fast Food'
		},
		{
			value: 'Fastfood',
			label: 'Fast Food'
		}
	]
	const updateHandler = async() =>{
		const response =await axios({
			url: `${URL}/recipe/update`,
			method:'PATCH',
			data:{recipe_id:id,name,price,category,veg,image,rating,cooking_time,description,quantity}
		})
		if(response.data.status==='success'){
			setStatus('Recipe updated successfully')
		}
		console.log(response.data)
	}
	const createHandler = async () =>{
		if(!name) return setError('Recipe name is required.')
		if (!category) return setError('Recipe Category name is required.')
		// if(!veg) return
		if (!image) return setError('Recipe image name is required.')
		if (!rating) return setError('Recipe rating name is required.')
		if (!price) return setError('Recipe price name is required.')
		if (!cooking_time) return setError('Recipe recipe time name is required.')
		try {
			const response = await axios({
				url: `${URL}/recipe/create`,
				method:'POST',
				data:{id,name,price,category,veg,image,rating:5,cooking_time,description,quantity}
			})
			if(response.data.status==='success'){
				setStatus('Recipe Created successfully')
			}
			console.log(response)
		} catch (e) {
			
		}
		console.log(id,name,price,category,veg,image,rating,cooking_time,description,quantity)
		
		
	}
	const deleteHander = async () =>{
		const response = await axios({
			url: `${URL}/recipe/delete`,
			method:'POST',
			data: {recipe_id: id}
		})
		if(response.data.status==='success'){
			setStatus('Deleted successfully.')
			setTimeout(() => {
				history.push('/admin/recipes')
			}, 1000);
		}
	}
	
    return (
        <div>
            <div className="admin-form">
                <form>
                    <TextField
						label="Recipe Name"
						defaultValue={name}
						variant='outlined'
						// helperText="Enter name of the recipe"
						className='full'
						onChange={(e)=>setName(e.target.value)}
						style={{margin:'10px 0px'}}
					/>
					<TextField
						label="Image"
						defaultValue={image}
						variant='outlined'
						className='full'
						onChange={(e)=>setImage(e.target.value)}
						style={{margin:'10px 0px'}}
					/>
                    <TextField
						select
						label="Category"
						defaultValue={category}
						className='full'
						onChange={(e)=>setCategory(e.target.value)}
						variant='outlined'
						style={{margin:'10px 0px'}}
						// helperText="Please select your currency"
						>
						{categories.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</TextField>
					<TextField
						select
						label="Rating"
						value={rating}
						onChange={(e)=>setRating(e.target.value)}
						variant='outlined'
						className='full'
						style={{margin:'10px 0px'}}
						// helperText="Please select your currency"
						>
						{ratings.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</TextField>
					<TextField
						select
						label=""
						value={veg}
						onChange={(e)=>setRating(e.target.value)}
						variant='outlined'
						className='full'
						style={{margin:'10px 0px'}}
						// helperText="Please select your currency"
						>
						<option value={true}>Veg</option>
						<option value={false}>Non-Veg</option>
					</TextField>
					<TextField
						label="Cooking Time"
						defaultValue={cooking_time}
						variant='outlined'
						className='full'
						onChange={(e)=>setTime(e.target.value)}
						style={{margin:'10px 0px'}}
					/>
                    
					<TextField
						label="Price"
						defaultValue={price}
						variant='outlined'
						className='full'
						onChange={(e)=>setPrice(e.target.value)}
						style={{margin:'10px 0px'}}
					/>
				<div className=''>
						{status && <Alert variant='filled' severity='success'>{status}</Alert>}
						{error && <Alert variant='filled' severity='error'>{error}</Alert>}
				</div>
				<div className='center-div'> 
					{!id && <Button style={{backgroundColor:'#00dc9e',margin:'10px 10px'}} variant='contained' onClick={createHandler}>Create</Button>}
					{id && <Button style={{backgroundColor:'#00dc9e',margin:'10px 10px'}} variant='contained' onClick={updateHandler}>Update</Button>}
					{id && <Button style={{backgroundColor:'#00dc9e',margin:'10px 10px'}} variant='contained' onClick={deleteHander}>Delete</Button>}
				</div>
					
                </form>
            </div>
        </div>
    )
}

export default RecipeForm
