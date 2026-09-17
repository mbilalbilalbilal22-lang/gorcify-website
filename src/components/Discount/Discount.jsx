import React from 'react'
import Button from '../button/Button'
import FreshFruits from '../../assets/images/fresh-fruits.png'

const Discount = () => {
    return (
        <section className='bg-zinc-100 bg-no-repeat bg-right bg-contain' style={{ backgroundImage: `url(${FreshFruits})` }}>
            <div className='md:bg-transparent bg-zinc-100 flex  flex-col md:flex-row max-w-[1150px] mx-auto py-10 md:px-0 px-5'>
                <span className='text-5xl md:text-9xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center md:pb-0 pb-5'>20%</span>
                <div className='max-w-[700px]'>
                    <h3 className='text-4xl md:text-7xl text-zinc-800 font-bold'>First Order Discount!</h3>
                    <p className='text-zinc-600 my-6'>Enjoy an exclusive 20% discount on your very first order. Use code</p>
                    <Button content="Get a Discount" />
                </div>

            </div>
        </section>
    )
}

export default Discount