import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import customerImage1 from "../../assets/images/customer1.jpg"
import customerImage2 from '../../assets/images/customer2.jpg'
import customerImage3 from '../../assets/images/customer3.jpg'
import customerImage4 from '../../assets/images/customer4.jpg'
import customerImage5 from '../../assets/images/customer5.jpg'
import { FaStar } from 'react-icons/fa';
const Testimonials = () => {
    return (
        <section className='pb-8'>
            <div className='max-w-[1150px] mx-auto'>
                <Heading highlight="Customers" heading="Saying" />

                <div className='flex justify-end gap-4 py-5'>
                    <button className='customer-prev text-2xl border border-gray-300 rounded-lg bg-zinc-100 p-2 hover:bg-gray-100 hover:border-gray-900 transition-all hover:bg-orange-500 hover:text-white'>
                        <IoIosArrowBack />
                    </button>
                    <button className='customer-next text-2xl border border-gray-300 rounded-lg bg-zinc-100 p-2 hover:bg-gray-100 hover:border-gray-900 transition-all hover:bg-orange-500 hover:text-white'>
                        <IoIosArrowForward />
                    </button>
                </div>

                <Swiper
                    navigation={{ nextEl: ".customer-next", prevEl: ".customer-prev" }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 16 },
                        768: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 16 }
                    }}
                    modules={[Navigation]}
                    className="mySwiper">
                    {
                        review.map(items => {
                            return (
                                <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4'><img className="w-16 h-16 rounded-full object-contain" src={items.image} alt={items.name} /></div>
                                        <div>
                                            <h5 className='text-xl font-bold'>{items.name}</h5>
                                            <p className='text-gray-600'>{items.Profession}</p>
                                            <span className='flex text-amber-400'>
                                                {Array.from({ length: items.rating }, (_, index) => (
                                                    <FaStar key={index} className='w-5 h-5' />
                                                ))}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='mt-10 min-h-[15vh]'>
                                        <p className='text-zinc-600'>{items.para}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>


            </div>
        </section>
    )
}

export default Testimonials

const review = [
    {
        id: 1,
        name: "Muhammad Bilal",
        Profession: "Web Developer",
        rating: 5,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur voluptas reiciendis, quod numquam repellat doloremque natus eligendi modi aperiam. Repellendus autem in molestias eos.",
        image: customerImage1
    },
    {
        id: 2,
        name: "John Doe",
        Profession: "Manager",
        rating: 4,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur voluptas reiciendis, quod numquam repellat doloremque natus eligendi modi aperiam. Repellendus autem in molestias eos.",
        image: customerImage2
    },
    {
        id: 3,
        name: "David Williams",
        Profession: "Designer",
        rating: 2,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur voluptas reiciendis, quod numquam repellat doloremque natus eligendi modi aperiam. Repellendus autem in molestias eos.",
        image: customerImage3
    },
    {
        id: 4,
        name: "Michael Johnson",
        Profession: "Engineer",
        rating: 3,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur voluptas reiciendis, quod numquam repellat doloremque natus eligendi modi aperiam. Repellendus autem in molestias eos.",
        image: customerImage4
    },
    {
        id: 5,
        name: "Sarah Wilson",
        Profession: "Lawyer",
        rating: 4,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur voluptas reiciendis, quod numquam repellat doloremque natus eligendi modi aperiam. Repellendus autem in molestias eos.",
        image: customerImage5
    },
]