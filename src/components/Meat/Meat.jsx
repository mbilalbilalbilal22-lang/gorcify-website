import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgMeat from '../../assets/images/seafood-banner.jpg'

const Meat = (props) => {
    return (
        <div>
            <CategoryPage title='Meat & Fish' image={bgMeat} categories={['Sea Foods']} />
        </div>
    )
}

export default Meat