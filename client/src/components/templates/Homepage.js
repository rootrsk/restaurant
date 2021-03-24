import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Recipe from './Recipe'
import RecipesLoader from './RecipesLoader'

function Homepage() {
    return (
        <div>
            {/* <Recipe /> */}
            <RecipesLoader />
            <Footer />
        </div>
    )
}

export default Homepage
