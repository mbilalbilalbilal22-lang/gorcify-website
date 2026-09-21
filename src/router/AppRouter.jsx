import React from 'react'
import HomePage from '../components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Fruit from '../components/Fruits/Fruits'
import Dairy from '../components/Dairy/Dairy'
import Meat from '../components/Meat/Meat'
import AllProducts from '../components/AllProducts/AllProducts'
import Layout from '../components/Layout/Layout'

const AppRouter = () => {
    return (
        <Routes>
            {/* Parent Route */}
            <Route path='/' element={<Layout />} >
                {/* Child Routes */}
                <Route path='/' element={<HomePage />} />
                <Route path='/fruit' element={<Fruit />} />
                <Route path='/dairy' element={<Dairy />} />
                <Route path='/meat' element={<Meat />} />
                <Route path='/allProducts' element={<AllProducts />} />
            </Route>

        </Routes>
    )
}

export default AppRouter