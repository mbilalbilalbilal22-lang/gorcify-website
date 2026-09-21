import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'

const Products = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Sea Foods']
    const [activeTab, setActiveTab] = useState('All')

    // filter items starts
    let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab);
    // filter items ends

    const renderCards = filteredItems.slice(0, 8).map(products => {
        return (
            <Cards key={products.id} image={products.image} name={products.name} price={products.price} category={products.category} />
        )
    });

    return (
        <section>
            <div className="max-w-[1150px] mx-auto px-10 pb-10">
                <Heading highlight="Our" heading="Products" />

                {/* Tabs start */}
                <div className='flex flex-wrap gap-3 justify-center'>
                    {categories.map(category => {
                        return (
                            <button key={category}
                                className={`cursor-pointer px-5 py-2 text-lg rounded-lg ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>
                {/* Tabs end*/}

                {/* Product Listing start */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-9 mt-10'>
                    {renderCards}
                </div>
                {/* Product Listing end */}

                {/* view all button start */}
                <div className='mx-auto mt-15 w-fit'>
                    <Link to='/allProducts' className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-md md:text-lg hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300'>View All Products</Link>
                </div>
                {/* view all button end */}
            </div>
        </section>
    )
}

export default Products