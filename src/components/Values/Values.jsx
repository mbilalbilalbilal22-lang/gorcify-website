import React from 'react'
import Heading from '../Heading/Heading';
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';
import basket from "../../assets/images/basket-full-vegetables.png"

const values = () => {

    const leftvalues = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-5'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightvalues = value.slice(2).map(item => {
        return (
            <div key={item.id} className='flex items-center gap-5'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className="max-w-[1150px] mx-auto px-10">
                <Heading highlight="Our" heading="Values" />

                <div className="flex md:flex-row flex-col items-center">
                    {/* left value */}
                    <div className='md:min-h-100 gap-8 flex flex-col justify-between mb-8 md:mb-0'>
                        {leftvalues}
                    </div>
                    <div className='md:flex w-1/2 hidden'>
                        <img src={basket} alt="" />
                    </div>

                    {/* right value */}
                    <div className='md:min-h-100 gap-8 flex flex-col justify-between'>
                        {rightvalues}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default values

const value = [
    {
        id: 1,
        title: "Trust",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: <FaLeaf />
    },

    {
        id: 3,
        title: "Food Safety",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: <FaShieldAlt />
    },

    {
        id: 4,
        title: "100% Organic",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        icon: <FaSeedling />
    },
]