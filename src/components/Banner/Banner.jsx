import React from 'react'

const Banner = (props) => {
    return (
        <div
            className='h-[50vh] mt-24 flex justify-center items-center bg-cover bg-center bg-no-repeat relative'
            style={{ backgroundImage: `url(${props.image})` }}
        >
            <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>
                {props.title}
            </h2>
            <div className='bg-black/50 absolute inset-0 z-0'></div>
        </div>
    )
}

export default Banner