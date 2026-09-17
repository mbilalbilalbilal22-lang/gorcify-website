import React from 'react'
import Heading from '../Heading/Heading';
import FruitCat from '../../assets/images/fruits-and-veggies.png';
import DairyCat from '../../assets/images/dairy-and-eggs.png';
import SeaFoodCat from '../../assets/images/meat-and-seafood.png';
import Button from '../Button/Button';

const Category = () => {

    const category = [
        {
            id: 1,
            title: 'Fruits & Veggies',
            description: 'Fresh, organic produce sourced daily from local farms.',
            image: FruitCat,
        },
        {
            id: 2,
            title: 'Dairy & Eggs',
            description: 'Premium dairy products and fresh eggs delivered to.',
            image: DairyCat,
        },
        {
            id: 3,
            title: 'Meat & Fish',
            description: 'High-quality meat and fresh fish sourced from trusted suppliers.',
            image: SeaFoodCat,
        },
    ]

    const renderCards = category.map(card => {
        return (
            // Flex flex-col lagaya taake andar ke dibbe height ek jaisi rakhein
            <div key={card.id} className='w-full px-4 md:p-0 flex flex-col'>

                {/* Image Wrapper: Height ko pixels mein rakha taake iPad ya mobile par dhoka na de */}
                <div className='relative w-full h-[160px] md:h-[200px] flex items-end justify-center mb-2 md:-mb-14 z-10'>
                    <img
                        src={card.image}
                        alt={card.title}
                        // md:absolute lagaya aur left-1/2 se image ko har screen par bilkul center kiya
                        className='max-w-[80%] max-h-full object-contain md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 mb-0'
                    />
                </div>

                {/* Content Box: Mobile par pt-6 aur desktop/iPad par md:pt-20 taake text bilkul sahi gap par rahe */}
                <div className='bg-zinc-100 pt-6 md:pt-20 p-6 md:p-8 rounded-xl shadow-sm flex flex-col flex-1 justify-between'>
                    <div>
                        <h3 className='text-2xl md:text-3xl font-bold text-zinc-800'>{card.title}</h3>
                        <p className='text-zinc-600 mt-3 mb-8 text-sm md:text-base'>{card.description}</p>
                    </div>
                    <Button content="See All" />
                </div>

            </div>
        )
    })

    return (
        <section className='pt-10 px-4'>
            <div className='max-w-[1150px] mx-auto'>
                <Heading highlight="Shop" heading="by Category" />

                {/* Aapka banaya hua solid Grid layout jo har screen par perfect columns manage karega */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {renderCards}
                </div>
            </div>
        </section>
    )
}

export default Category;