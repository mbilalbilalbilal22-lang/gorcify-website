import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruit from '../../assets/images/fruits-banner.jpg'
const Fruits = (props) => {
    return (
        <div>
            <CategoryPage title='Fruits & Veggies' image={bgFruit} categories={['Fruits', 'Vegetables']} />
        </div>
    )
}

export default Fruits