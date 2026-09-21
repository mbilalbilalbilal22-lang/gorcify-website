import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgAllProducts from '../../assets/images/all-banner.jpg'
const AllProducts = (props) => {
    return (
        <div>
            <CategoryPage title='All Products' image={bgAllProducts} />
        </div>
    )
}

export default AllProducts