import React, { useState } from 'react'

function OrderForm() {
    const [recipe_name,setRecipeName] = useState()
    return (
        <div>
            <div className="admin-form">
                <form action="">
                    <TextField
						label="Recipe Name"
						defaultValue={recipe_name}
						variant='outlined'
						// helperText="Enter name of the recipe"
						className='full'
						onChange={(e)=>setRecipeName(e.target.value)}
						style={{margin:'10px 0px'}}
					/>
                </form>
            </div>
        </div>
    )
}

export default OrderForm
