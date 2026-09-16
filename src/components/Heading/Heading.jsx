import React from 'react'

const Heading = (props) => {
  return (
    <section className='py-20'>
      <div className='w-fit mx-auto'>
        <h2 className='text-[2.5rem] md:text-5xl font-bold'>
          <span className='text-orange-500'>{props.highlight}</span> {props.heading}
          <div className='w-34 h-1 bg-orange-300 mt-3 md:mt-5 ml-auto'></div>
        </h2>
      </div>
    </section>
  )
}

export default Heading