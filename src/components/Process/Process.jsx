import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant, PiTruck } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'

const Process = () => {

    const renderSteps = steps.map(item => {
        return (
            <div
                key={item.id}
                /* Negative margin sirf large screen (desktop) par chalega, mobile/tablet par cards overlap nahi honge */
                className={`w-full max-w-sm mx-auto lg:max-w-none ${item.id % 2 === 0 ? 'lg:-mt-24' : ''}`}
            >
                {/* Step Number Circle */}
                <span className='flex justify-center items-center rounded-full mx-auto w-16 h-16 sm:w-18 sm:h-18 text-6xl sm:text-7xl lg:text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-4 sm:outline-offset-6 outline-zinc-800 outline-dashed'>
                    {item.number}
                </span>

                {/* Content Area */}
                <div className='flex items-start sm:items-center mt-6 gap-4 sm:gap-5'>
                    <span className='flex text-2xl sm:text-3xl justify-center items-center w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-md'>
                        {item.icon}
                    </span>

                    <div>
                        <h4 className='text-zinc-800 text-xl sm:text-2xl font-bold'>
                            {item.title}
                        </h4>
                        <p className='text-zinc-600 text-sm sm:text-base mt-1 sm:mt-2 leading-relaxed'>
                            {item.para}
                        </p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className='py-12 md:py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-[1150px] mx-auto'>
                {/* Heading ke neechay ka gap mobile par normal aur desktop par wave space dega */}
                <div className='w-fit mr-auto sm:mb-16 lg:mb-25'>
                    <Heading highlight="Our" heading="Process" />
                </div>

                {/* 
                   Mobile: 1 column
                   Tablet: 2 columns 
                   Desktop: 4 columns 
                */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6'>
                    {renderSteps}
                </div>
            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        para: "It is a long established fact that a reader",
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        para: "It is a long established fact that a reader",
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Control",
        para: "It is a long established fact that a reader",
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Logistics",
        para: "It is a long established fact that a reader",
        icon: <PiTruck />
    }
]