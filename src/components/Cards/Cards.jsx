import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../button/Button'

const Cards = ({ image, name, price, category }) => {
    return (
        <div className='border border-zinc-300 bg-zinc-100 shadow-lg hover:shadow-zinc-500/60 transition-all duration-300 rounded-3xl p-5'>
            {/* card icons */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-300'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-lg px-4 py-3 rounded-lg'>
                    <FaPlus />
                </button>
            </div>

            {/* card Image */}
            <div className='w-full h-50'>
                <img src={image} className='w-full h-full mx-auto object-contain' />
            </div>

            {/* card content */}
            <div className='text-center'>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='text-2xl font-semibold mt-4 mb-3'>${price.toFixed(2)}</p>
                <Button content='Shop Now' />
            </div>
        </div>
    )
}

export default Cards
