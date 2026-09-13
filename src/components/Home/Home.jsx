import React from 'react'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Category from '../Category/Category';
import Values from '../Values/values';
import Products from '../products/products';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
    </div>
  )
}

export default Home