import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = (props) => {

    // Safe fallbacks for categories array
    const categories = props.categories || ['All']

    const filteredItems = categories.includes('All')
        ? ProductList
        : ProductList.filter(item => categories.includes(item.category))

    const renderProduct = filteredItems.map(product => {
        return (
            <Cards
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
            />
        )
    })

    return (
        <div>
            <Banner title={props.title} image={props.image} />
            {/* grid-rows-2 hata diya taaki dynamic items easily flow kar sakein */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-[1150px] mx-auto px-10 py-10'>
                {renderProduct}
            </div>
        </div>
    )
}

export default CategoryPage