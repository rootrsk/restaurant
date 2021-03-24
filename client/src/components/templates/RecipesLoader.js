import { Skeleton } from '@material-ui/lab'
import React from 'react'

function RecipesLoader() {
    var items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div className='menu'>
            {
                items.map((item,index)=>{
                    return <RecipeLoder key={index}/>
                })
            }
        </div>
    )
}
const RecipeLoder = ()=>{
    return(
        <div className="recipe-template">
            <div style={{}}>
                </div>
                <div className="recipe-img">
                    <Skeleton variant='rect' className='skelton-recipe-img' style={{height:'190px'}} />
                </div>
            <div className="recipe_details">
                <div className="recipe_details-row1">
                    <Skeleton width='20%' className='recipe_details_row-skelton'/>
                    <Skeleton width='20%' className='recipe_details_row-skelton'/>
                    <Skeleton width='20%' className='recipe_details_row-skelton'/>
                </div>
                <div className="recipe_details-row2">
                    <div className="t2 bold">
                        <Skeleton />
                    </div>
                    <div className="t6">
                        <Skeleton />
                    </div>
                </div>
                <div className="recipe_details-row3">
                    <Skeleton  width='50px' className='p-btn_skelton'/>
                    <Skeleton  width='50px' className='p-btn_skelton'/>
                </div>
            </div>
        </div>
    )
}
export default RecipesLoader
