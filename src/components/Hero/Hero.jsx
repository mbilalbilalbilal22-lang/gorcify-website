import React from 'react'
import Grocery from '../../assets/images/grocery.png';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section>
        <div className="max-w-[1150px] min-h-screen mx-auto flex items-center md:pt-25 pt-30 md:flex-row flex-col md:p-0 px-8">
          {/* Hero Content */}
          <div className='flex-1'>
            <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
              <h1 className='text-5xl/15 md:text-7xl/20 font-bold mt-3'>Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br /> In Your City</h1>
              <p className='text-zinc-600 text-md md:text-lg max-w-[530px] my-5'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
              <Button content="Shop Now" />
          </div>

          {/* Hero Image */}
          <div className='flex-1'>
            <img src={Grocery} alt="hero image" />
          </div>
          
          
        </div>



    </section>
  )
}

export default Hero